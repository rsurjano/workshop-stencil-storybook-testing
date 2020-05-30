import { newSpecPage } from '@stencil/core/testing';
import { DemoText } from './demo-text';

describe('demo-text', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DemoText],
      html: `<demo-text></demo-text>`,
    });
    expect(page.root).toEqualHtml(`
      <demo-text>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </demo-text>
    `);
  });
});
