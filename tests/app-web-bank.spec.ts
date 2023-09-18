import { test } from '@playwright/test';

test.describe('Simple page tests clicks"', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.way2automation.com/angularjs-protractor/banking/#/login');
    });

    test('Click all buttons in the the aplication', async ({ page }) => {
        await page.getByRole('button', { name: 'Customer Login' }).click();
        await page.getByRole('button', { name: 'Home' }).click();
        await page.getByText('Home XYZ Bank Logout Customer Login Bank Manager Login').click();
        await page.getByRole('button', { name: 'Bank Manager Login' }).click();
        await page.getByRole('button', { name: 'Add Customer' }).click();
        await page.getByPlaceholder('First Name').click();
        await page.getByPlaceholder('First Name').fill('name');
        await page.getByPlaceholder('First Name').press('Tab');
        await page.getByPlaceholder('Last Name').fill('last name');
        await page.getByPlaceholder('Last Name').press('Tab');
        await page.getByPlaceholder('Post Code').fill('92440580');
        await page.getByRole('form').getByRole('button', { name: 'Add Customer' }).click();
    });
});
