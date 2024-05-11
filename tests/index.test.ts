import { Page, test } from "@playwright/test";

test.describe("initial page", () => {
  let page: Page;

  test.beforeAll(async ({ browser, contextOptions }) => {
    const browserContext = await browser.newContext(contextOptions);
    page = await browserContext.newPage();

    await page.goto("http://localhost:3000");
  });

  test("has text", async () => {
    await page.getByText("Get started by editing app/page.tsx zzz");
  });
});
