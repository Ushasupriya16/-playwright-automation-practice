const { test, expect } = require('@playwright/test');

async function login(page,username,password) {

await page.locator("#username").fill(username);
await page.getByLabel("Password").fill(password);
await page.getByRole("button",{name: "Login"}).click();

}

test('Verify successful login using function', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

await login(page,'tomsmith','SuperSecretPassword!');

await expect(page.getByText("You logged into a secure area!")).toBeVisible();
});

test('Verify invalid login using function', async ({ page }) => {

await page.goto('https://the-internet.herokuapp.com/login');

await login(page,'tomsmith','WrongPassword123');

await expect(page.locator("#flash")).toContainText("Your password is invalid!");

});