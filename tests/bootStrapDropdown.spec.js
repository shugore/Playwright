// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.jquery-az.com/boots/demo.php');

  await page.locator('xyz').check()
  await page.check('locator')

 

  await page.waitForTimeout(5000);
});

