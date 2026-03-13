import test, { expect } from "@playwright/test";
import { locales } from "./locales";

for (const { locale } of locales) {
  test.describe("MainPage Screenshot", () => {
    test.use({
      locale,
    });
    test(`${locale}`, async ({ page }) => {
      await page.goto("/");
      await expect(page).toHaveScreenshot();
    });
  });
}
