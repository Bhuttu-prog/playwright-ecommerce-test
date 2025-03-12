import { test, expect } from '@playwright/test';
import { AmazonHomePage } from '../pages/amazonHomePage';
import { AmazonSearchResultsPage } from '../pages/amazonSearchResultsPage';
import { AmazonProductPage } from '../pages/amazonProductPage';
import { AmazonCartPage } from '../pages/amazonCartPage';

test('Search, add to cart, and validate product in Amazon', async ({ page }) => {
  
  // Initialize Page Objects
  const homePage = new AmazonHomePage(page);
  const searchResultsPage = new AmazonSearchResultsPage(page);
  const productPage = new AmazonProductPage(page);
  const cartPage = new AmazonCartPage(page);

  // Step 1: Go to Amazon Homepage
  await homePage.navigate();

  // Step 2: Search for "Laptop"
  await homePage.searchProduct('Laptop');

  // Step 3: Select the first product
  await searchResultsPage.selectFirstProduct();

  // Step 4: Add to Cart
  await productPage.addToCart();

  // Step 5: Validate that the product is in the cart
  const isProductInCart = await cartPage.validateProductInCart('Laptop');
  expect(isProductInCart).toBeTruthy();

  console.log('✅ Test Passed: Product successfully added to cart and validated.');
});
