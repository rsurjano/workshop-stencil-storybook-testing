# 2-3 Integracion con storybook

La integracion que se llevara a cabo para Stencil sera del tipo HTML

## Instalacion

Instalaremos todos los paquetes necesarios

```bash
yarn add -D @storybook/addon-a11y@5.3.18
yarn add -D @storybook/addon-actions@5.3.18
yarn add -D @storybook/addon-backgrounds@5.3.18
yarn add -D @storybook/addon-console@1.2.1
yarn add -D @storybook/addon-docs@5.3.18
yarn add -D @storybook/addon-jest@5.3.18
yarn add -D @storybook/addon-knobs@5.3.18
yarn add -D @storybook/addon-notes@5.3.18
yarn add -D @storybook/addon-viewport@5.3.18
yarn add -D @storybook/html@5.3.18
yarn add -D @storybook/preset-typescript@3.0.0
yarn add -D storybook-readme@5.0.8
yarn add -D @babel/core@7.10.1
yarn add -D @babel/plugin-syntax-jsx@7.10.1
yarn add -D @babel/plugin-transform-react-jsx@7.10.1
yarn add -D babel-loader@8.1.0
yarn add -D jsx-dom@6.4.15
yarn add -D react@16.13.1
yarn add -D react-is@16.13.1


```

Creamos cada uno de los siguientes archivos

> .storybook/manager-head.html

```html
<!--  -->
<link rel="shortcut icon" href="/assets/favicon.ico" />
<link rel="icon" type="image/png" href="/assets/favicon.png" sizes="192x192" />
```

> .storybook/preview-head.html

```html
<!--  CSS STYLES GOES HERE-->
<style>
  body {
    color: inherit;
  }
</style>

<!-- LIBRARIES GOES HERE -->
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
/>
```

> .storybook/helper.js

```javascript
export const backgrounds = [
  { name: "primary", value: "#d2da0b" },
  { name: "secondary", value: "#faac02" },
  { name: "error", value: "#ea453a" },
];
```

> .storybook/main.js

```javascript
module.exports = {
  stories: ["../src/**/*.stories.mdx"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-jest",
    "@storybook/addon-viewport",
    "@storybook/addon-a11y",
    "@storybook/addon-knobs",
    "@storybook/addon-backgrounds",
    "storybook-readme",
    "@storybook/preset-typescript",
    "@storybook/addon-docs",
  ],
};
```

> .storybook/manager.js

```javascript
import { addons } from "@storybook/addons";

addons.setConfig({
  enableShortcuts: false,
});
```

> .storybook/preview.js

```javascript
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
```

Ahora continua con [2-4 Configuracion](2-4-configuracion.md)
