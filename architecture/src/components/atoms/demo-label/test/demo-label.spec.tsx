import { newSpecPage } from '@stencil/core/testing';
import { DemoLabel } from './demo-label';

describe('demo-label', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DemoLabel],
      html: `<demo-label></demo-label>`,
    });
    expect(page.root).toEqualHtml(`
      <demo-label>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </demo-label>
    `);
  });
});
