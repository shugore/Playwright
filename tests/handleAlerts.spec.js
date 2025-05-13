// @ts-check
import { test, expect } from "@playwright/test";

test("alert window", async ({ page }) => {
  await page.goto("https://testautomationpractise.blogspot.com/");


  //first we have to enable dialog window handler
  await page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("alert");
    expect(dialog.message()).toContain("I am alertbox");

    await dialog.accept();
  });

  await page.click("//button");
  await page.waitForTimeout(5000);
});

test("conformaton alert window with ok or cancle", async ({ page }) => {
  await page.goto("https://testautomationpractise.blogspot.com/");


  //first we have to enable dialog window handler
  await page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("confirm");
    expect(dialog.message()).toContain("Press a button");

    await dialog.accept();  //to accept
    await dialog.dismiss(); //to cancle
  });

  await page.click("//button");
  await page.waitForTimeout(5000);
});

test("Prmpt with input box", async ({ page }) => {
  await page.goto("https://testautomationpractise.blogspot.com/");


  //first we have to enable dialog window handler
  await page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("prompt");
    expect(dialog.message()).toContain("Please enter value");

    expect(dialog.defaultValue()).toContain("Harry potter");

    await dialog.accept("ohn");  //to accept
    await dialog.dismiss(); //to cancle
  });

  await page.click("//button");
  await page.waitForTimeout(5000);
});