import { test, expect } from '@playwright/test';

test('Assertions test', async ({ page }) => {
  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
  expect(page.url()).toContain('account/register');
  let heading = page.getByRole('heading',{name:'Register Account',level:1})
  await expect(heading).toBeVisible();
  await expect(heading).toHaveText('Register Account');
  await expect.soft(heading).toHaveText('Register Account');
  await expect(heading).toHaveText('Register Account');
  await expect(page.locator('aside div a')).toHaveCount(13);
  await page.getByRole('textbox', { name: '* First Name' }).fill('Testing Labs Value');
  await expect(page.getByRole('textbox', { name: '* First Name' })).toHaveValue('Testing Labs Value');

});

test('dropdown assertion test', async ({ page }) => {
  await page.goto('https://naveenautomationlabs.com/opencart/ui/data-testid-page.html');
  await expect(page.getByRole('combobox').locator('option')).toHaveCount(6);
  await page.getByRole('combobox').selectOption('United Kingdom');
  await expect(page.getByRole('combobox')).toHaveValue('uk');
});

test('button assertion test', async ({ page }) => {
  await page.goto('https://naveenautomationlabs.com/opencart/ui/elementstate.html');
  await expect(page.getByRole('button', { name: 'Create Account' })).toBeDisabled();
  await expect(page.getByRole('textbox', { name: 'Email' })).toBeEmpty();
  await expect(page.getByRole('textbox', { name: 'First Name' })).toBeEditable();
  await expect(page.getByRole('textbox', { name: 'Username (read-only, auto-generated)' })).not.toBeEditable();
  await page.getByRole('checkbox', { name: 'I agree to the Terms of Service and Privacy Policy' }).check();
  await expect(page.getByRole('button', { name: 'Create Account' })).toBeEnabled();
  await expect(page.getByRole('checkbox', { name: 'I agree to the Terms of Service and Privacy Policy' })).toBeChecked();
 
  // Validate type of attribute
  await expect(page.getByRole('textbox', { name: 'First Name' })).toHaveAttribute('type','text');
  await expect(page.getByRole('textbox', { name: 'Last Name' })).toHaveAttribute('placeholder','Enter last name1',{timeout:10000});

});

