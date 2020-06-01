import { newSpecPage } from '@stencil/core/testing';
import { DemoSlot } from './demo-slot';

describe('demo-slot', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DemoSlot],
      html: `<demo-slot></demo-slot>`,
    });
    expect(page.root).toEqualHtml(`
      <demo-slot>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </demo-slot>
    `);
  });
});
