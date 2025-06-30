import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('has title', async ({ page }) => {
    await expect(page).toHaveTitle(/Create Next App/);
  });

  test('displays Next.js logo', async ({ page }) => {
    const logo = page.getByAltText('Next.js logo');
    await expect(logo).toBeVisible();
  });

  test('displays get started text', async ({ page }) => {
    await expect(page.getByText('Get started by editing')).toBeVisible();
    await expect(page.getByText('src/app/page.tsx')).toBeVisible();
  });

  test('has working deploy link', async ({ page }) => {
    const deployLink = page.getByRole('link', { name: /deploy now/i });
    await expect(deployLink).toBeVisible();
    await expect(deployLink).toHaveAttribute('href', /vercel.com/);
  });

  test('has working documentation link', async ({ page }) => {
    const docsLink = page.getByRole('link', { name: /read our docs/i });
    await expect(docsLink).toBeVisible();
    await expect(docsLink).toHaveAttribute('href', /nextjs.org\/docs/);
  });

  test('has footer links', async ({ page }) => {
    const learnLink = page.getByRole('link', { name: /learn/i });
    const examplesLink = page.getByRole('link', { name: /examples/i });
    const goToLink = page.getByRole('link', { name: /go to nextjs.org/i });

    await expect(learnLink).toBeVisible();
    await expect(examplesLink).toBeVisible();
    await expect(goToLink).toBeVisible();
  });

  test('all external links open in new tab', async ({ page }) => {
    const links = page.getByRole('link');
    const count = await links.count();

    for (let i = 0; i < count; i++) {
      const link = links.nth(i);
      const href = await link.getAttribute('href');

      if (href?.startsWith('http')) {
        await expect(link).toHaveAttribute('target', '_blank');
        await expect(link).toHaveAttribute('rel', 'noopener noreferrer');
      }
    }
  });
});
