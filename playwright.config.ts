import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: false, // Run tests in UI mode
    screenshot: 'on',
    trace: 'on',
    video: 'on',
  },
  reporter: [['html', { outputFolder: 'test-results' }]],
});
