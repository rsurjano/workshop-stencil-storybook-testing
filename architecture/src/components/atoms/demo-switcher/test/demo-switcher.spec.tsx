import { newSpecPage } from '@stencil/core/testing';
import { DemoSwitcher } from './demo-switcher';

describe('demo-switcher', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DemoSwitcher],
      html: `<demo-switcher></demo-switcher>`,
    });
    expect(page.root).toEqualHtml(`
      <demo-switcher>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </demo-switcher>
    `);
  });
});
