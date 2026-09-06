import { beforeAll, describe, expect, it } from "vitest";
import { execSync } from "node:child_process";
import { POST } from "@/app/api/leads/route";
import { prisma } from "@/lib/prisma";

const hasPostgres = Boolean(
  process.env.DATABASE_URL?.startsWith("postgresql"),
);

const baseLead = {
  fullName: "Cliente Demo",
  email: "cliente@test.com",
  carSlug: "tera",
  incomeRange: "hasta_1000000",
};

describe.skipIf(!hasPostgres)("POST /api/leads (integration)", () => {
  beforeAll(() => {
    execSync("npx prisma migrate deploy", {
      stdio: "inherit",
      env: process.env,
    });
  }, 60_000);

  it("rechaza payload inválido", async () => {
    const res = await POST(
      new Request("http://localhost/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName: "A", email: "no-email", carSlug: "tera" }),
      }),
    );
    expect(res.status).toBe(400);
    const body = await res.json();
    expect(body.error).toBeTruthy();
  });

  it("rechaza modelo inexistente", async () => {
    const res = await POST(
      new Request("http://localhost/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...baseLead,
          carSlug: "no-existe",
        }),
      }),
    );
    expect(res.status).toBe(400);
  });

  it("rechaza incomeRange inválido", async () => {
    const res = await POST(
      new Request("http://localhost/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...baseLead,
          incomeRange: "otro",
        }),
      }),
    );
    expect(res.status).toBe(400);
  });

  it("rechaza teléfono incompleto", async () => {
    const res = await POST(
      new Request("http://localhost/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...baseLead,
          phoneAreaCode: "11",
          phoneNumber: "",
        }),
      }),
    );
    expect(res.status).toBe(400);
  });

  it("crea un lead válido sin teléfono", async () => {
    const email = `lead-${Date.now()}@test.com`;
    const res = await POST(
      new Request("http://localhost/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...baseLead,
          email,
        }),
      }),
    );
    expect(res.status).toBe(201);
    const body = await res.json();
    expect(body.id).toBeTruthy();

    const saved = await prisma.lead.findUnique({ where: { id: body.id } });
    expect(saved?.email).toBe(email);
    expect(saved?.carName).toBe("Tera");
    expect(saved?.phone).toBeNull();
    expect(saved?.incomeRange).toBe("hasta_1000000");
  }, 30_000);

  it("crea un lead válido con teléfono", async () => {
    const email = `lead-phone-${Date.now()}@test.com`;
    const res = await POST(
      new Request("http://localhost/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...baseLead,
          email,
          phoneAreaCode: "11",
          phoneNumber: "45678901",
          incomeRange: "mas_3500000",
        }),
      }),
    );
    expect(res.status).toBe(201);
    const body = await res.json();
    const saved = await prisma.lead.findUnique({ where: { id: body.id } });
    expect(saved?.phone).toBe("11 45678901");
    expect(saved?.incomeRange).toBe("mas_3500000");
  }, 30_000);
});
