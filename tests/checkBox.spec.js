// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await page.locator('xyz').check()
  await page.check('locator')

  await expect(await page.locator('xyz')).toBeChecked()

  //isChecked will verify for it and compare with true using toBeWorthy
  await expect(await page.locator('xyz').isChecked).toBeTruthy()


  //isChecked will verify for it and compare with false using toBeFalsy
  await expect(await page.locator('xyz').isChecked).toBeFalsy()

  const checkBoxLocators =["Locator1","locator2","locator3"]

  for(const locator of checkBoxLocators){

    await page.locator('locator').check()
  }

  for(const locator of checkBoxLocators){

   if( await page.locator('locator').isChecked()){

    await page.locator('locator').uncheck()
   }
  }

  await page.waitForTimeout(5000);
});

