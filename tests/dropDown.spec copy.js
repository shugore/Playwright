// @ts-check
import { test, expect } from "@playwright/test";

test("Select single Value from dropdown", async ({ page }) => {
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

  //Assertions for dropdown

  //1> Check number of optuons in dropdown
  const options = await page.locator("#country options");
  await expect(options).toHaveCount(10);

  //2> Check number of optuons in dropdown
  const option = await page.$$("#country option");
  //console.log("Number of Options:",option.length)
  await expect(option.length).toBe(10);

  //3> Check presence of value in dropdown

  const content = await page.locator("#country").textContent();
  await expect(content?.includes("India")).toBeTruthy();

  //4> Check presence of value in dropdown using looping
  const optionss = await page.$$("#country option");
  let status = false;

  for (const option of optionss) {
    //console.log(await option.textContent());

    let value = await option.textContent();

    if (value?.includes("France")) {
      status = true;
      break;
    }
  }
  await expect(status).toBeTruthy();
  await page.waitForTimeout(5000);
});

test("Select multiple Value from dropdown", async ({ page }) => {
  // await page.goto('https://testautomationpractice.blogspot.com/');

  //select dropdwn using label
  await page.selectOption("#colour", ["Blue", "Red", "White"]); //Assertions for dropdown

  //Assertions
  //1> Check number of optuons in dropdown
  const options = await page.locator("#colour options");
  await expect(options).toHaveCount(5);

  //2> Check number of optuons in dropdown
  const option = await page.$$("#colour option");
  //console.log("Number of Options:",option.length)
  await expect(option.length).toBe(5);

  //3> Check presence of value in dropdown

  const content = await page.locator("#colour").textContent();
  await expect(content?.includes("Blue")).toBeTruthy();

});
