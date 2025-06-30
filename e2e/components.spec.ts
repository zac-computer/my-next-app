import { test, expect } from '@playwright/test';

test.describe('Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/test-components');
  });

  test('Button component interactions', async ({ page }) => {
    // Initial state
    const clickableButton = page.getByText(/Clicked \d+ times/);
    await expect(clickableButton).toBeVisible();
    await expect(clickableButton).toContainText('Clicked 0 times');

    // Click and verify counter updates
    await clickableButton.click();
    await expect(page.getByText('Clicked 1 times')).toBeVisible();

    await page.getByText('Clicked 1 times').click();
    await expect(page.getByText('Clicked 2 times')).toBeVisible();
  });

  test('Button variants display correctly', async ({ page }) => {
    const primaryButton = page.getByRole('button', { name: /clicked/i });
    const secondaryButton = page.getByRole('button', {
      name: /secondary button/i,
    });

    await expect(primaryButton).toHaveClass(/bg-blue-500/);
    await expect(secondaryButton).toHaveClass(/bg-gray-200/);
  });

  test('Disabled button cannot be clicked', async ({ page }) => {
    const disabledButton = page.getByRole('button', {
      name: /disabled button/i,
    });

    await expect(disabledButton).toBeDisabled();

    // Verify the button truly can't be clicked
    const isDisabled = await disabledButton.isDisabled();
    expect(isDisabled).toBe(true);
  });
});
