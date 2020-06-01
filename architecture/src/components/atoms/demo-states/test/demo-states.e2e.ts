import { newE2EPage } from '@stencil/core/testing';

describe('demo-states', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<demo-states></demo-states>');

    const element = await page.find('demo-states');
    expect(element).toHaveClass('hydrated');
  });
});
