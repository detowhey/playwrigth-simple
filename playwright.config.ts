import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
 
  use: {
    baseURL: 'https://www.way2automation.com/angularjs-protractor/banking/#/login',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
  ],
  reporter: [
    ['list'],
    ['playwright-qase-reporter',
      {
        apiToken: process.env.API_TOKEN?.toString(),
        projectCode: process.env.PROJECT_CODE?.toString(),
        basePath: process.env.QASE_BASE_PATH?.toString(),
        rootSuiteTitle:process.env.ROOT_SUITE_TITLE?.toString(),
        uploadAttachments: true,
        runComplete: true,
        logging: true
      }],
  ],
});
