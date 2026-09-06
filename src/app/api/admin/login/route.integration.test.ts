import { afterEach, describe, expect, it, vi } from "vitest";

vi.mock("next/headers", () => ({
  cookies: async () => ({
    set: vi.fn(),
    get: vi.fn(),
    delete: vi.fn(),
  }),
}));

import { POST } from "@/app/api/admin/login/route";

describe("POST /api/admin/login (integration)", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("rechaza credenciales incorrectas", async () => {
    vi.stubEnv("ADMIN_EMAIL", "admin@test.local");
    vi.stubEnv("ADMIN_PASSWORD", "correct-pass");
    vi.stubEnv("SESSION_SECRET", "test-session-secret-at-least-32-chars");

    const res = await POST(
      new Request("http://localhost/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: "admin@test.local",
          password: "wrong",
        }),
      }),
    );
    expect(res.status).toBe(401);
  });

  it("acepta credenciales correctas", async () => {
    vi.stubEnv("ADMIN_EMAIL", "admin@test.local");
    vi.stubEnv("ADMIN_PASSWORD", "correct-pass");
    vi.stubEnv("SESSION_SECRET", "test-session-secret-at-least-32-chars");
    vi.stubEnv("COOKIE_SECURE", "false");

    const res = await POST(
      new Request("http://localhost/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: "admin@test.local",
          password: "correct-pass",
        }),
      }),
    );
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.ok).toBe(true);
  });
});
