import { expect, test } from "@playwright/test";

test.describe("lead flow", () => {
  test("envía consulta desde la ficha del modelo", async ({ page }) => {
    const email = `e2e-${Date.now()}@example.com`;
    await page.goto("/modelos/polo");

    await page.getByLabel(/Nombre completo/i).fill("Cliente E2E");
    await page.getByLabel(/^Email$/i).fill(email);
    await page.getByRole("button", { name: /Quiero que me contacten/i }).click();

    await expect(page.getByRole("status")).toContainText(/Listo/i);
  });
});
