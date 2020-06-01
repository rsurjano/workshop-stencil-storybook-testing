import { newSpecPage, SpecPage } from "@stencil/core/testing";

import { DemoText } from "./demo-text";
import { buildComponentTest } from "./demo-text.helpers";

const component = buildComponentTest(newSpecPage, [DemoText]);

describe("should test demo-text component", () => {
  describe("should render", () => {
    let page: SpecPage;

    it("should render by default with lastname: source", async () => {
      page = await component({ lastname: "source" }, '');
      expect(page.root.shadowRoot).toBeTruthy();
      expect(page.root).toEqualHtml(`
        <demo-text lastname="source">
          <mock:shadow-root>
            source
          </mock:shadow-root>
        </demo-text>
      `);
      expect(page.root).toMatchSnapshot();
    });

    it("should toggle isOpened", async () => {
      const page = new DemoText();
      expect(page.isOpened).toBeFalsy();
      page.toggle()
      expect(page.isOpened).toBeTruthy();
    });
  });
});
