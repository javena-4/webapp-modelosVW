import { expect, test } from "@playwright/test";

const adminEmail = process.env.ADMIN_EMAIL;
const adminPassword = process.env.ADMIN_PASSWORD;

test.describe("admin", () => {
  test.skip(!adminEmail || !adminPassword, "Faltan ADMIN_EMAIL/ADMIN_PASSWORD en env");

  test("login y ve leads", async ({ page }) => {
    await page.goto("/admin/login");
    await page.getByLabel(/^Email$/i).fill(adminEmail!);
    await page.getByLabel(/Contraseña/i).fill(adminPassword!);
    await page.getByRole("button", { name: /Ingresar/i }).click();

    await expect(page).toHaveURL(/\/admin\/leads/);
    await expect(page.getByRole("heading", { name: /Leads/i })).toBeVisible();
  });
});
