import { Page, Locator } from '@playwright/test';

export class AmazonHomePage {
  readonly page: Page;
  readonly searchBox: Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.searchBox = page.locator('#twotabsearchtextbox');
  }

  async navigate() {
    await this.page.goto('/');
  }

  async searchProduct(productName: string) {
    await this.searchBox.fill(productName);
    await this.searchBox.press('Enter');
  }
}
