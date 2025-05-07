// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(await page.locator('xyz')).toBeVisible();
  await expect(await page.locator('xyz')).toBeEmpty();
  await expect(await page.locator('xyz')).toBeEditable();
  await expect(await page.locator('xyz')).toBeEnabled();


  await page.waitForTimeout(5000);
});

