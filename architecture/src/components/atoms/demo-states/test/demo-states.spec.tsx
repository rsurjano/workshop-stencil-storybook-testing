import { newSpecPage } from '@stencil/core/testing';
import { DemoStates } from './demo-states';

describe('demo-states', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DemoStates],
      html: `<demo-states></demo-states>`,
    });
    expect(page.root).toEqualHtml(`
      <demo-states>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </demo-states>
    `);
  });
});
