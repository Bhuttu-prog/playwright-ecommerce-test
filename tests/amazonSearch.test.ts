import { test, expect } from '@playwright/test';
import { AmazonHomePage } from '../pages/amazonHomePage';
import { AmazonSearchResultsPage } from '../pages/amazonSearchResultsPage';
import { AmazonProductPage } from '../pages/amazonProductPage';
import { AmazonCartPage } from '../pages/amazonCartPage';
import { allure } from 'allure-playwright'; // ✅ Correct Import

test('Search, add to cart, and validate product in Amazon', async ({ page }) => {
  allure.owner('QA Team');
  allure.severity('critical');

  const homePage = new AmazonHomePage(page);
  const searchResultsPage = new AmazonSearchResultsPage(page);
  const productPage = new AmazonProductPage(page);
  const cartPage = new AmazonCartPage(page);

  await allure.step('Navigate to Amazon homepage', async () => {
    await homePage.navigate();
  });

  await allure.step('Search for Laptop', async () => {
    await homePage.searchProduct('Laptop');
  });

  await allure.step('Select the first product', async () => {
    await searchResultsPage.selectFirstProduct();
  });

  await allure.step('Add product to cart', async () => {
    await productPage.addToCart();
  });

  await allure.step('Validate product in cart', async () => {
    const isProductInCart = await cartPage.validateProductInCart('Laptop');
    expect(isProductInCart).toBeTruthy();
  });

  console.log('✅ Test Passed: Product successfully added to cart and validated.');
});
