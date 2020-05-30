import { newE2EPage } from '@stencil/core/testing';

describe('demo-switcher', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<demo-switcher></demo-switcher>');

    const element = await page.find('demo-switcher');
    expect(element).toHaveClass('hydrated');
  });
});
