// @ts-check
const { test, expect } = require('@playwright/test');

test('should add an item to the cart', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await page.locator('#show-login').click()
  await page.locator('#username').fill('josdem')
  await page.locator('#password').fill('12345678')
  await page.locator('#login-btn').click()
})
