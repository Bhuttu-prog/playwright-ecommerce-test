import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

export default defineConfig({
  use: {
    baseURL: process.env.BASE_URL,  // Load Base URL from .env
    headless: false, // Run tests in UI mode
    screenshot: 'on',
    trace: 'on',
    video: 'on',
  },
  reporter: [['html', { outputFolder: 'test-results' }], ['allure-playwright']],
});
