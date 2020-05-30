import { newE2EPage } from '@stencil/core/testing';

describe('demo-props', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<demo-props></demo-props>');

    const element = await page.find('demo-props');
    expect(element).toHaveClass('hydrated');
  });
});
