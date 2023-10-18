import { expect, test } from '@playwright/test';

test.describe('Automated test demo', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('');
    });

    test('Sucess test', () => {
        expect(true).toBe(true);
    });

    test('Failed test', () => {
        expect(true).toBe(false);
    });

});
