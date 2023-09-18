import { test } from '@playwright/test';
import { fakerPT_BR as faker } from '@faker-js/faker';

test.describe('Simple page tests clicks', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('');
    });

    test('Click all buttons in the the aplication', async ({ page }) => {
        const fakerData = faker;

        await page.getByRole('button', { name: 'Customer Login' }).click();
        await page.getByRole('button', { name: 'Home' }).click();
        await page.getByText('Home XYZ Bank Logout Customer Login Bank Manager Login').click();
        await page.getByRole('button', { name: 'Bank Manager Login' }).click();
        await page.getByRole('button', { name: 'Add Customer' }).click();
        await page.getByPlaceholder('First Name').click();
        await page.getByPlaceholder('First Name').fill(fakerData.person.firstName());
        await page.getByPlaceholder('First Name').press('Tab');
        await page.getByPlaceholder('Last Name').fill(fakerData.person.lastName());
        await page.getByPlaceholder('Last Name').press('Tab');
        await page.getByPlaceholder('Post Code').fill(fakerData.location.zipCode());
        await page.getByRole('form').getByRole('button', { name: 'Add Customer' }).click();
    });
});
