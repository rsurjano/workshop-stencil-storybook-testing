import { newE2EPage } from '@stencil/core/testing';

describe('demo-slot', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<demo-slot></demo-slot>');

    const element = await page.find('demo-slot');
    expect(element).toHaveClass('hydrated');
  });
});
