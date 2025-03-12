import { Page, Locator } from '@playwright/test';

export class AmazonSearchResultsPage {
  readonly page: Page;
  readonly firstProduct: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstProduct = page.locator('.s-main-slot .s-result-item').nth(0).locator('h2 a');
  }

  async selectFirstProduct() {
    await this.firstProduct.click();
  }
}
