import { expect, test } from "@playwright/test";

test.describe("catálogo", () => {
  test("muestra modelos y abre ficha", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { name: /Modelos/i })).toBeVisible();
    await expect(page.getByRole("link", { name: "Menú" })).toBeVisible();

    await page.getByRole("link", { name: /Tera/i }).first().click();
    await expect(page).toHaveURL(/\/modelos\/tera/);
    await expect(page.getByRole("heading", { name: "Tera", level: 1 })).toBeVisible();
    await expect(page.getByText(/Destacados/i)).toBeVisible();
  });
});
