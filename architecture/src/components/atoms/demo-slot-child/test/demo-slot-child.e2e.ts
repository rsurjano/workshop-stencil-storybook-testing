import { newE2EPage } from '@stencil/core/testing';

describe('demo-slot-child', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<demo-slot-child></demo-slot-child>');

    const element = await page.find('demo-slot-child');
    expect(element).toHaveClass('hydrated');
  });
});
