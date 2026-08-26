import { test, expect } from '@playwright/test';

test('Bounding box scenario', async ({ page }) => {
  await page.goto('https://www.iciciprulife.com/insurance-guide/financial-planning-tools-calculators/power-compounding-calculator.html?UID=480');
  let allpoints =await  page.locator('.highcharts-markers .highcharts-point');
  let allDots = await allpoints.all();

  console.log('Total number of dots in graphs' ,(await allDots).length)
  
  for (let ele of allDots){
  await ele.hover();
  let box = await ele.boundingBox();
  let x=box!.x+box!.width/2;
  let y=box!.y+box!.height/2;
  await page.mouse.move(x,y);
  let yearAmount = await page.locator('.highcharts-tooltip').textContent();
  console.log(yearAmount)
  }
});