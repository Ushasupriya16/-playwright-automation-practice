const {test,expect} = require("@playwright/test");

test("Verify dynamically loaded message", async({page}) => {

await page.goto("https://the-internet.herokuapp.com/dynamic_loading/2");
await page.getByRole("button",{name:"Start"}).click();

await expect(page.locator("#finish")).toBeVisible({timeout: 10000});
await expect(page.locator("#finish")).toContainText("Hello World!");








});