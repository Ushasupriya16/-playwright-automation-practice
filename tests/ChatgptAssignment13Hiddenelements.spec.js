const {test,expect} = require("@playwright/test");

test("Verify hidden element becomes visible", async({page}) => {

await page.goto("https://the-internet.herokuapp.com/dynamic_loading/1");

 const message = page.locator('#finish');
 await expect(message).toBeAttached();
 await expect(message).toBeHidden();

await page.getByRole("button",{name:"Start"}).click();
await expect(message).toBeVisible({timeout: 10000});
await expect(message).toHaveText("Hello World!");


});