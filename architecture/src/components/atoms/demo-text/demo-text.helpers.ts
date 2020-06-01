import { text } from "@storybook/addon-knobs";

import { buildComponent, buildSpecPage } from "../../story.utils";

export const component = buildComponent("demo-text", {
  lastname: (prop = "source") => text("lastname", prop),
});

export const buildComponentTest = (
  newSpecPage,
  baseComponent,
  specParams = {}
) => buildSpecPage(baseComponent, newSpecPage, component, specParams);
