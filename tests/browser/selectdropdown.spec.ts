import { test, expect } from '@playwright/test';

test('Select dropdown', async ({ page }) => {
  await page.goto('https://orangehrm.com/contact-sales');

  let selectVal=await page.getByRole('combobox',{name:'Country'}).selectOption({label:'Angola'});
  console.log(selectVal)

  selectVal=await page.getByRole('combobox',{name:'Country'}).selectOption('India');
  console.log(selectVal)

  selectVal=await page.getByRole('combobox',{name:'Country'}).selectOption({value:'Belgium'});
  console.log(selectVal)

  selectVal=await page.getByRole('combobox',{name:'Country'}).selectOption({index:15});
  console.log(selectVal)
  
  let currentVal=await page.getByRole('combobox',{name:'Country'}).inputValue();
  console.log(currentVal)

  await page.pause();


});

test('Multi Selection Dropdown', async ({ page }) => {
  await page.goto('https://selenium08.blogspot.com/2019/11/dropdown.html');
  let selectedVlue=await page.locator('[name="Month"]').selectOption(["January","May","November","December"]);
  console.log(selectedVlue)
  await page.pause()


});