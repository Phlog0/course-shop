import { test, expect } from "@playwright/test";
import { locales } from "./locales";

for (const { locale } of locales) {
  test.describe("NotFoundPage Screenshot", () => {
    test.use({
      locale,
    });
    test(`${locale}`, async ({ page }) => {
      await page.goto("/bla-bla-bla");
      await expect(page).toHaveScreenshot();
    });
  });
}
