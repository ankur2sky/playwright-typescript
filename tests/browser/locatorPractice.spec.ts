import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.shapemyinterview.com/study/playwright-locator-playground.html?v=2026-07-26#top');
  let titleText = await page.getByRole('link',{name:'ShapeMyInterview'}).textContent()
  console.log(titleText)
  await page.getByText('Forms').nth(0).click()
  await page.getByRole('link',{name:'Forms'}).click()
  await page.getByRole('link',{name:'Radios & Checkboxes'}).click()
  await page.getByRole('link',{name:'Tables'}).click()
  await page.getByRole('link',{name:'Dynamic'}).click()
  await page.getByRole('link',{name:'Advanced'}).click()
  await page.getByLabel('First Name').fill('Test')
  await page.getByLabel('Last Name').fill('User')
  await page.getByRole('textbox',{name:'Email Address'}).fill('test@test.com')
  await page.getByLabel('Password').nth(0).fill('abc123')
  await page.getByRole('textbox',{name:'Phone Number'}).fill('123456')
  await page.getByRole('textbox',{name:'Website'}).fill('www.test.com')
  await page.getByRole('spinbutton',{name:'Age'}).fill('8')
  await page.getByRole('spinbutton',{name:'Expected Salary (per annum)'}).fill('123445')
  await page.getByLabel('Date of Birth').fill('1990-01-26')
  await page.getByLabel('Preferred Meeting Time').fill('09:14')
  await page.getByLabel('Schedule Interview').fill('2026-01-26T09:14')
  await page.getByLabel('Birth Month').fill('1990-01')
  await page.getByLabel('Work Week').fill('2026-W24')










});