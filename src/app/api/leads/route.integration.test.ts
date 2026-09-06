import { beforeAll, describe, expect, it } from "vitest";
import { execSync } from "node:child_process";
import { POST } from "@/app/api/leads/route";
import { prisma } from "@/lib/prisma";

const hasPostgres = Boolean(
  process.env.DATABASE_URL?.startsWith("postgresql"),
);

describe.skipIf(!hasPostgres)("POST /api/leads (integration)", () => {
  beforeAll(() => {
    execSync("npx prisma db push --skip-generate", {
      stdio: "inherit",
      env: process.env,
    });
  });

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
          fullName: "Cliente Test",
          email: "cliente@test.com",
          carSlug: "no-existe",
        }),
      }),
    );
    expect(res.status).toBe(400);
  });

  it("crea un lead válido", async () => {
    const email = `lead-${Date.now()}@test.com`;
    const res = await POST(
      new Request("http://localhost/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: "Cliente Demo",
          email,
          carSlug: "tera",
        }),
      }),
    );
    expect(res.status).toBe(201);
    const body = await res.json();
    expect(body.id).toBeTruthy();

    const saved = await prisma.lead.findUnique({ where: { id: body.id } });
    expect(saved?.email).toBe(email);
    expect(saved?.carName).toBe("Tera");
  });
});
