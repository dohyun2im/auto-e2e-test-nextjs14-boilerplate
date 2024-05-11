import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  timeout: 60 * 1000 * 3,
  use: {
    baseURL: "http://localhost:3000/",
    headless: true,
    ignoreHTTPSErrors: true
  },
  projects: [
    {
      name: "Desktop Firefox",
      use: { browserName: "firefox" }
    },
    {
      name: "Desktop Safari",
      use: { browserName: "webkit" }
    },
    {
      name: "Desktop Chrome",
      use: { browserName: "chromium" }
    }
  ],
  testDir: "tests",
  testMatch: "*.test.ts",
  workers: 3
};

export default config;
