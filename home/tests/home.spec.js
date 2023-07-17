// @ts-check
const { test, expect } = require('@playwright/test');

const properties = require("./properties/test.properties")

test('should add an item to the cart', async ({ page }) => {
  await page.goto(properties.url)
  await page.locator('#show-login').click()
  await page.locator('#username').fill(properties.username)
  await page.locator('#password').fill(properties.password)
  await page.locator('#login-btn').click()
  await page.locator('#add-to-cart-101').click()
  await page.locator('#show-cart').click()
  await expect(page.locator('#grand-total')).toHaveText(properties.grandTotal)
  await page.locator('#clear-cart').click()
})


test('should add an item to the cart from product description page', async ({ page }) => {
  await page.goto(properties.url)
  await page.locator('#show-login').click()
  await page.locator('#username').fill(properties.username)
  await page.locator('#password').fill(properties.password)
  await page.locator('#login-btn').click()
  await page.locator('#product-101').click()
  await page.locator('.bg-red-900').click()
  await page.locator('#show-cart').click()
  await expect(page.locator('#grand-total')).toHaveText(properties.grandTotal)
  await page.locator('#clear-cart').click()
})