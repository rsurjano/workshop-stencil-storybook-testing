# 2-8 Stories

Para escribir Stories se adoptara el uso de el formato MDX + TypeScript

Aqui un ejemplo minimo de implementacion de un Story

```typescript
// se importan los addons necesarios del story
import { withA11y } from "@storybook/addon-a11y";
import { Meta, Story } from "@storybook/addon-docs/blocks";
import { withKnobs } from "@storybook/addon-knobs";
import { withActions } from "@storybook/addon-actions";
import { withTests } from "@storybook/addon-jest";
// se importa el componente ya construido a instanciar
import { component } from "./demo-text.helpers";
// se importa el README.md generado en el build
import readme from "./readme.md";
```

```jsx
// se agrega una etiqueta que servira para
<Meta
  // Se agrega un titulo del Story y se separa por Bloque y Nombre con el simbolo "|"
  title="Atoms|Text"
  // Se agrega los decoradores, Knobs y Acesibilidad
  decorators={[withKnobs, withA11y]}
  // Se agrega el README del componente
  parameters={{
    readme: { sidebar: readme },
    // Se agrega la referencia a la prueba unitaria a mostrar en el Story
    jest: ["demo-text.spec.ts"],
  }}
/>
```

Podemos agregarle Markdown directamente en el Story, snippets de codigo y demas para enriquecer la documentacion.

```markdown
# Atoms | Text

Aqui se puede escribir mucha documentacion
```

Como ultimo punto se escribe el Story con las variaciones del componente, aqui podemos ver que le pasamos la variacion y el texto que se inyectara como un </Slot>

- variant: es el prop que se le pasara, tiene como valor 'subtitle'
- Subtitle text: ex el string de texto a usar como HTML, es el segundo parametro de la funcion `component()`

```jsx
<Story name="Subtitle1">
  {component({ variant: "subtitle" }, "Subtitle text")}
</Story>
```

## Componente como Helper

Adicionalmente la funcion component se importa del archivo `demo-text.helpers.ts` que tiene el siguiente contenido

```typescript
import { select } from "@storybook/addon-knobs";

import { buildComponent } from "../../story.utils";

export const component = buildComponent("demo-text", {
  variant: (prop = "subtitle") =>
    select("text", ["subtitle", "title", "paragraph"], prop),
});
```

y el archivo `story.utils.ts` tiene el siguiente contenido. Este archivo expone la funcion buildComponent que nos permitira declarar nuestro componente y reutilizarlo varias veces, reduciendo la cantidad de codigo escrito.

```typescript
const camel2Dash = (v) => {
  let ret = "";
  let prevLowercase = false;
  for (const s of v) {
    const isUppercase = s.toUpperCase() === s;
    if (isUppercase && prevLowercase) ret += "-";
    ret += s;
    prevLowercase = !isUppercase;
  }
  return ret.replace(/-+/g, "-").toLowerCase();
};

export const toAttr = (fn, config, name, raw) =>
  raw
    ? `${camel2Dash(name)}="${config}"`
    : `${camel2Dash(name)}="${config ? fn(config) : fn()}"`;

export const comps = (allProps, config = {}, raw) => {
  let ret = "";
  Object.entries(allProps).forEach((name) => {
    ret += toAttr(name[1], config[name[0]], name[0], raw);
  });
  return ret;
};

export const buildComponent = (tag, allProps = {}) => (
  config,
  tmpl = "",
  raw = false
) => `<${tag} ${comps(allProps, config, raw)}>${tmpl}</${tag}>`;
```

Ahora continua con [3-1 Sobre Jest](../3-unit-testing/3-1-sobre-jest.md)
