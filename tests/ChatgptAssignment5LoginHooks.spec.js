const {test,expect} = require("@playwright/test");

test.beforeEach(async({page})=> {

await page.goto("https://the-internet.herokuapp.com/login");

});

test('Verify successful login', async ({ page }) => {
await page.locator("#username").fill("tomsmith");
await page.getByLabel("Password").fill("SuperSecretPassword!");
await page.getByRole("button",{name: "Login"}).click();
await expect(page.getByText("Logged in as tomsmith")).toBeVisible();

});

test('Verify invalid password', async ({ page }) => {
await page.locator("#username").fill("tomsmith");
await page.getByLabel("Password").fill("WrongPassword123");
await page.getByRole("button",{name:"Login"}).click();
await expect(page.locator("#flash")).toContainText("Your password is invalid!");

});

test.afterEach(async ({ page }, testInfo) => {
  console.log("Test Name:", testInfo.title);
  console.log("Test Status:", testInfo.status);
});