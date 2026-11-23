const { test, expect } = require('@playwright/test');
test('Verify successful login', async ({ page }) => {
await page.goto("https://the-internet.herokuapp.com/login?utm_source=chatgpt.com");
await page.locator("#username").fill("tomsmith");
await page.getByLabel("Password").fill("SuperSecretPassword!");
await page.getByRole("button",{name: "Login"}).click();
await expect(page.getByText("Logged in as tomsmith")).toBeVisible();
});