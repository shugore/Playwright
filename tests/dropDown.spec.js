// @ts-check
import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  // await page.goto('https://testautomationpractice.blogspot.com/');

  //select dropdwn using label
  await page.locator("#country").selectOption({ label: "India" });

  //select dropdwn sending value directly without label
  await page.locator("#country").selectOption("India");

  //select dropdwn sending value atribute
  await page.locator("#country").selectOption({ label: "Uk" });

  //select dropdwn sending index
  await page.locator("#country").selectOption({ index: 1 });

  //direct using selectoption
  await page.selectOption("#country", "India"); //its tetx only


  await page.waitForTimeout(5000);
});
