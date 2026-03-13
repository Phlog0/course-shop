//@ts-check
import { test, expect } from "@playwright/test";
const locales = [
  {
    locale: "ru",
    text: "Страница не найдена",
  },
  {
    locale: "en",
    text: "Page is not found",
  },
];

for (const { locale, text } of locales) {
  test.describe(`NotFoundPage`, async () => {
    test.use({
      locale,
    });
    test(`${locale}`, async ({ page }) => {
      await page.goto("/la-la-la");

      const notFoundPage = page.getByText(text);
      await expect(notFoundPage).toHaveText(text);
    });
  });
}
