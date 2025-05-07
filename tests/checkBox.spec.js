// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await page.locator('xyz').check()
  await page.check('locator')

  await expect(await page.locator('xyz')).toBeChecked()

  await expect(await page.locator('xyz').isChecked).toBeTruthy()



  await page.waitForTimeout(5000);
});

