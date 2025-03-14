import { Page, Locator } from '@playwright/test';

export class AmazonProductPage {
  readonly page: Page;
  readonly addToCartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addToCartButton = page.locator('#add-to-cart-button');
  }

  async addToCart() {
    await this.addToCartButton.click();
  }
}
