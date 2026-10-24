//what is codegen = inspector - its helps to inspect the elements - to find th locaters
// npx playwright codegen (url of the application)
// click,type,scroll
// email - "test@gmail.com" 
// find locator of email
// EMAIL.fill("Value");


import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/'); 
  await page.getByRole('link', { name: 'Register' }).click(); 
  await page.getByRole('heading', { name: 'Register' }).click();
  await page.getByRole('heading', { name: 'Register' }).click();
  await page.getByText('Your Personal Details').click();
  await page.getByText('Gender:').click();
  await page.getByText('Male', { exact: true }).click();
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  await page.getByText('Female').click();
  await page.getByRole('radio', { name: 'Female' }).check();
  await page.getByText('First name:').click();
  await page.getByRole('textbox', { name: 'First name:' }).click();
  await page.getByRole('textbox', { name: 'First name:' }).fill('Pratik');
  await page.getByText('Last name:').click();
  await page.getByRole('textbox', { name: 'Last name:' }).click();
  await page.getByRole('textbox', { name: 'Last name:' }).fill('ubhe');
  await page.getByText('Email:').click();
  await page.getByRole('textbox', { name: 'Email:' }).click();
  await page.getByRole('textbox', { name: 'Email:' }).fill('testpratik123@gmail.com');
  await page.getByText('Your Password').click();
  await page.getByText('Password:', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Password:', exact: true }).click();
  await page.getByRole('textbox', { name: 'Password:', exact: true }).click();
  await page.getByText('Confirm password:').click();
  await page.getByRole('textbox', { name: 'Confirm password:' }).click();
  await page.getByRole('textbox', { name: 'Confirm password:' }).click();
  await page.getByRole('textbox', { name: 'Password:', exact: true }).click();
  await page.getByRole('textbox', { name: 'Password:', exact: true }).fill('Pratik@123');
  await page.getByRole('textbox', { name: 'Confirm password:' }).click();
  await page.getByRole('textbox', { name: 'Confirm password:' }).fill('Patik@123');
  await page.getByRole('button', { name: 'Register' }).click();
  await page.getByRole('textbox', { name: 'Confirm password:' }).click();
  await page.getByRole('textbox', { name: 'Password:', exact: true }).click();
  await page.getByRole('textbox', { name: 'Password:', exact: true }).press('ControlOrMeta+a');
  await page.getByRole('textbox', { name: 'Password:', exact: true }).fill('Pratik@123');
  await page.getByRole('textbox', { name: 'Confirm password:' }).click();
  await page.getByRole('textbox', { name: 'Confirm password:' }).press('ControlOrMeta+a');
  await page.getByRole('textbox', { name: 'Confirm password:' }).fill('Pratik@123');
  await page.getByRole('button', { name: 'Register' }).click();
  await page.getByRole('heading', { name: 'Register' }).click();
  await page.getByText('Your registration completed').click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('link', { name: 'testpratik123@gmail.com' }).click();
  await page.getByRole('heading', { name: 'My account - Customer info' }).click();
  await page.getByText('Your Personal Details').click();
  await page.getByText('Gender:').click();
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  await page.getByText('First name: *').click();
  await page.getByRole('textbox', { name: 'First name:' }).click();
  await page.getByText('Last name:').click();
  await page.getByRole('textbox', { name: 'Last name:' }).click();
  await page.getByRole('textbox', { name: 'Last name:' }).click();
  await page.getByText('Email:').click();
  await page.getByRole('textbox', { name: 'Email:' }).click();
  await page.getByRole('textbox', { name: 'Email:' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
});




// test data is static
// not reusable
// acctions 