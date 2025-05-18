// @ts-check
import { test, expect } from "@playwright/test";

test("Handle Frames", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/");

  //to find total frames

  const allFrames = await page.frames();

  console.log("Number of frames:-" + allFrames.length);

  //handle frame using url and name

  await page.frame({ url: "url of src" });
  await page.frame("name");

  //using frame locator

  await page
    .frameLocator("loctor of frame")
    .locator("locator of element in frame");

  await page.waitForTimeout(5000);
});


