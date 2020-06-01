import "@storybook/addon-console";

import { DocsContainer, DocsPage } from "@storybook/addon-docs/blocks";
import { withTests } from "@storybook/addon-jest";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { addDecorator, addParameters } from "@storybook/html";
import { addReadme } from "storybook-readme/html";
import { backgrounds } from "./helper";

import results from "./../.jest-test-results.json";

// HMR magic goes here
import { defineCustomElements } from "../dist/esm/loader.mjs";
defineCustomElements();

addDecorator(addReadme);
addDecorator(withTests({ results }));

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: "Mobile",
  },
  backgrounds,
  docs: { iframeHeight: "170px" },
});
