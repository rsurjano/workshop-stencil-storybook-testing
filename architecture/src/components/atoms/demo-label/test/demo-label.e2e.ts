import { newE2EPage } from '@stencil/core/testing';

describe('demo-label', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<demo-label></demo-label>');

    const element = await page.find('demo-label');
    expect(element).toHaveClass('hydrated');
  });
});
