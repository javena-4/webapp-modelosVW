import { afterEach, describe, expect, it, vi } from "vitest";
import { validateAdminCredentials } from "@/lib/auth";

describe("validateAdminCredentials", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("acepta email/password correctos (case-insensitive email)", () => {
    vi.stubEnv("ADMIN_EMAIL", "Admin@Test.Local");
    vi.stubEnv("ADMIN_PASSWORD", "secret-123");
    expect(validateAdminCredentials("admin@test.local", "secret-123")).toBe(
      true,
    );
  });

  it("rechaza password incorrecta", () => {
    vi.stubEnv("ADMIN_EMAIL", "admin@test.local");
    vi.stubEnv("ADMIN_PASSWORD", "secret-123");
    expect(validateAdminCredentials("admin@test.local", "otra")).toBe(false);
  });

  it("rechaza si faltan env vars", () => {
    vi.stubEnv("ADMIN_EMAIL", "");
    vi.stubEnv("ADMIN_PASSWORD", "");
    expect(validateAdminCredentials("a@b.com", "x")).toBe(false);
  });
});
