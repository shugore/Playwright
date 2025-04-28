import {test,expect} from '@playwright/test'

test('Locators',async({page})=>{   

await page.goto('https://www.demoblaze.com/');

//its used for verifying image using alt attributr value
await page.getByAltText()

//Its is used for imput fields
await page.getByPlaceholder()

//Its used for buttons
await page.getByRole('button',{type:'submit'})

await page.getByLabel()

//only accepts value of data-testid attribute
await page.getByTestId()
await page.getByTitle()
})