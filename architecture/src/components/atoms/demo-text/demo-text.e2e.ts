import { E2EElement, newE2EPage } from "@stencil/core/testing";
import { DemoText } from "./demo-text";
import { buildComponentTest } from "./demo-text.helpers";

const component = buildComponentTest(newE2EPage, [DemoText]);

describe("should test e2e demo-text component", () => {
  let page: E2EElement;
  let element: E2EElement;

  describe("rendering", () => {
    it("should be able to render", async () => {
      page = await component({ lastname: "source" }, '');
      element = await page.find("demo-text");
      expect(element).toBeTruthy();
    });
  });

  describe("styles", () => {
    it("should match styles for component", async () => {
      page = await component({ lastname: "source" }, '');
      element = await page.find("demo-text");
      const styles = {
        fontSize: "18px",
      };
      expect(await element.getComputedStyle()).toMatchObject(styles);
    });
  });
});
