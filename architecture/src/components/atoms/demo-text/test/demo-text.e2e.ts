import { newE2EPage } from '@stencil/core/testing';

describe('demo-text', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<demo-text></demo-text>');

    const element = await page.find('demo-text');
    expect(element).toHaveClass('hydrated');
  });
});
