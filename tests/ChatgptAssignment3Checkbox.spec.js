const {test,expect}=require('@playwright/test');
test("learning Checkboxes", async({page})=>{

await page.goto("https://the-internet.herokuapp.com/checkboxes");
const firstCheckbox = page.locator('input[type="checkbox"]').nth(0);
await firstCheckbox.check();
await expect(firstCheckbox).toBeChecked();

const secondCheckbox = page.locator('input[type ="checkbox"]').nth(1);

await secondCheckbox.uncheck();
await expect(secondCheckbox).not.toBeChecked();



}




);