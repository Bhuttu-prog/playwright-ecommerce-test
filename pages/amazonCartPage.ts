import { Page, Locator } from '@playwright/test';

export class AmazonCartPage {
  readonly page: Page;
  readonly cartItemTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartItemTitle = page.locator('.sc-product-title');
  }

  async validateProductInCart(expectedProduct: string) {
    await this.page.goto('/gp/cart/view.html');
    const cartText = await this.cartItemTitle.textContent();
    return cartText?.includes(expectedProduct);
  }
}
