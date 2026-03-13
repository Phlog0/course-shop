//@ts-check
import { test, expect } from "@playwright/test";
const locales = [
  {
    locale: "ru",
    heading: "Главная страница",
    headingText: "Главная страница",
    mainPageLink: "Главная страница",
    aboutPageLink: "О сайте",
  },
  {
    locale: "en",
    heading: "Main page",
    headingText: "Main page",
    mainPageLink: "Main page",
    aboutPageLink: "About",
  },
];

for (const {
  locale,
  heading,
  headingText,
  aboutPageLink,
  mainPageLink,
} of locales) {
  test.describe(`MainPage`, async () => {
    test.use({
      locale,
    });
    test(`body ${locale}`, async ({ page }) => {
      await page.goto("/");

      const header = page.getByRole("heading", { name: heading });
      await expect(header).toHaveText(headingText);
    });

    test(`AppLinks ${locale}`, async ({ page }) => {
      await page.goto("/");

      const main = page.getByRole("link", { name: mainPageLink });
      const about = page.getByRole("link", { name: aboutPageLink });
      await expect(main).toHaveText(mainPageLink);
      await expect(about).toHaveText(aboutPageLink);
    });
  });
}
