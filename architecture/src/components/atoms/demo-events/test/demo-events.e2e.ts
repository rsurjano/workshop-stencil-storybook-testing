import { newE2EPage } from '@stencil/core/testing';

describe('demo-events', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<demo-events></demo-events>');

    const element = await page.find('demo-events');
    expect(element).toHaveClass('hydrated');
  });
});
