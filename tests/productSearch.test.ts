import { test, expect } from '@playwright/test';

test('Search for a product', async ({ page }) => {
  await page.goto('/');
  await page.fill('#search-input', 'Laptop');
  await page.press('#search-input', 'Enter');
  await expect(page.locator('.product-title')).toContainText('Laptop');
});
