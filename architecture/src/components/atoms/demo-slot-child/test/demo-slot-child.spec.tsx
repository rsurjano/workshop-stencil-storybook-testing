import { newSpecPage } from '@stencil/core/testing';
import { DemoSlotChild } from './demo-slot-child';

describe('demo-slot-child', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DemoSlotChild],
      html: `<demo-slot-child></demo-slot-child>`,
    });
    expect(page.root).toEqualHtml(`
      <demo-slot-child>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </demo-slot-child>
    `);
  });
});
