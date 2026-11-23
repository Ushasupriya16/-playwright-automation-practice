const {test,expect}=require('@playwright/test');
test("Invalid Login page", async({page})=>{
await page.goto("https://the-internet.herokuapp.com/login");
await page.locator("#username").fill("tomsmith");
await page.getByLabel("Password").fill("WrongPassword123");
await page.getByRole("button",{name:"Login"}).click();
await expect(page.locator("#flash")).toContainText("Your password is invalid!");




}



);