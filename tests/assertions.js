await expect(locator).toBeAttached()	//Element is attached
await expect(locator).toBeChecked()	    //Checkbox is checked
await expect(locator).toBeDisabled()	//Element is disabled
await expect(locator).toBeEditable()	//Element is editable

//soft assertions

await expect.soft(locator).toBeAttached()
await expect.soft(locator).toBeEditable()
await expect.soft(locator).toBeChecked()	    //Checkbox is checked
await expect.soft(locator).toBeDisabled()