import {test,expect} from '@playwright/test'

test('Locators',async({page})=>{   

await page.goto('https://www.demoblaze.com/');

//locator using property
await page.locator('id=login2').click()
//await page.click('id=login2')

//locator with css
await page.locator('#loginusername').fill('pavanlol')
//await page.fill('#loginusername','pavanlol')
//await page.locator('input[id="loginpassword"]').fill('')
await page.fill('input[id="loginpassword"]','test@123')

//locator with xpath
await page.locator("//button[normalize-space()='Log in']").click()

//verify that logout link presence
const logoutVisibility = await page.locator("//a[normalize-space()='Log out']")
await expect(logoutVisibility).toBeVisible()

await page.close()

})