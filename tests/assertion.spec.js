import { test, expect } from '@playwright/test';

test('use assertions', async ({ page }) => {

  await page.goto('https://demo.nopcommerce.com/register');

  await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

  await expect(page).toHaveTitle('nopCommerce demo store. Home page title')

  const logoElement= await page.locator('.header-logo')
  await expect(logoElement).toBeVisible()

})