import { Page, expect, test } from "@playwright/test";

// https://playwright.dev/docs/locators

test.describe("initial page", () => {
  let page: Page;

  test.beforeAll(async ({ browser, contextOptions }) => {
    const browserContext = await browser.newContext(contextOptions);
    page = await browserContext.newPage();

    await page.goto("http://localhost:3000");
  });

  test("has 'Get started by editing app/page.tsx' text", async () => {
    await expect(page.getByText("Get started by editing app/page.tsx")).toBeVisible();
  });
});
