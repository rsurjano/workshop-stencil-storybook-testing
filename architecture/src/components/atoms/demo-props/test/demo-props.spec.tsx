import { newSpecPage } from '@stencil/core/testing';
import { DemoProps } from './demo-props';

describe('demo-props', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DemoProps],
      html: `<demo-props></demo-props>`,
    });
    expect(page.root).toEqualHtml(`
      <demo-props>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </demo-props>
    `);
  });
});
