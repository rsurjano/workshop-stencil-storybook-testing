import { newSpecPage } from '@stencil/core/testing';
import { DemoEvents } from './demo-events';

describe('demo-events', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DemoEvents],
      html: `<demo-events></demo-events>`,
    });
    expect(page.root).toEqualHtml(`
      <demo-events>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </demo-events>
    `);
  });
});
