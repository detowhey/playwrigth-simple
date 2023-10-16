import { fakerPT_BR as faker } from '@faker-js/faker';
import { expect, test } from '@playwright/test';
import { qase } from 'playwright-qase-reporter/dist/playwright';


test.describe('Listagem de operações', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('');
    });

    test('Click all buttons in the aplication', async ({ page }) => {
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

    test('Failed test', async () => {
        expect(true).toBe(false);
    });

});
