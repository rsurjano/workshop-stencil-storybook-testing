# 3-67 Escribiendo Pruebas

## Pruebas Estructurales

Las pruebas estructurales son pruebas basicas donde se prueba que efectivamente el componente renderice acorde la instanciacion inicial

> Componente

```jsx
// demo-text.helpers.ts
// se importa el knob text
import { text } from "@storybook/addon-knobs";
// se importa el builder componente y el spec
import { buildComponent, buildSpecPage } from "../../story.utils";
// se crea la funcion del componente a usar
export const component = buildComponent("demo-text", {
  lastname: (prop = "source") => text("lastname", prop),
});
// se construye el helper para las pruebas unitarias
export const buildComponentTest = (
  newSpecPage,
  baseComponent,
  specParams = {}
) => buildSpecPage(baseComponent, newSpecPage, component, specParams);
```

```jsx
// demo-text.tsx
import { Component, Host, Prop, h } from "@stencil/core";
@Component({
  tag: "demo-text",
  styleUrl: "demo-text.css",
  shadow: true,
})
export class DemoText {
  @Prop() lastname: string;
  render() {
    return <Host>{this.lastname}</Host>;
  }
}
```

```jsx
// demo-text.spec.ts
import { newSpecPage, SpecPage } from "@stencil/core/testing";
// se importa el componente
import { DemoText } from "./demo-text";
// se importa el builder
import { buildComponentTest } from "./demo-text.helpers";

const component = buildComponentTest(newSpecPage, [DemoText]);

describe("should test demo-text component", () => {
  describe("should render", () => {
    let page: SpecPage;

    it("should render by default with lastname: source", async () => {
      // se instancia el componente
      page = await component({ lastname: "source" });
      // se verifica que este activado shadowRoot
      expect(page.root.shadowRoot).toBeTruthy();
      // se compara el renderizado html con el mock
      expect(page.root).toEqualHtml(`
        <demo-text lastname="source">
          <mock:shadow-root>
            source
          </mock:shadow-root>
        </demo-text>
      `);
      // se escribe un snapshot
      expect(page.root).toMatchSnapshot();
    });
  });
});
```

## Pruebas Funcionales

Las pruebas funcionales son pruebas que se enfocan en probar la funcionalidad del codigo, propiedades y metodos del componente.

```jsx
// nombre de IT
it("should toggle isOpened", async () => {
  // instancia el componente
  const page = new DemoText();
  // se verifica el valor inicial
  expect(page.isOpened).toBeFalsy();
  // se llama el metodo
  page.toggle();
  expect(page.isOpened).toBeTruthy();
});
```

## Pruebas E2E

Las pruebas E2E que se han realizado estan basados en revisiones de CSS implementado basicamente, por lo que es buena practica ahondar solamente en ese aspecto.

```tsx
// se importa las dependencias
import { E2EElement, newE2EPage } from "@stencil/core/testing";
// se importa la clase
import { DemoText } from "./demo-text";
// se importa el constructor del test para el componente
import { buildComponentTest } from "./demo-text.helpers";

const component = buildComponentTest(newE2EPage, [DemoText]);

describe("should test e2e demo-text component", () => {
  // se instancia las interfaces
  let page: E2EElement;
  let element: E2EElement;

  describe("rendering", () => {
    it("should be able to render", async () => {
      page = await component({ lastname: "source" });
      element = await page.find("demo-text");
      expect(selector).toBeTruthy();
    });
  });

  describe("styles", () => {
    it("should match styles for subtitle1", async () => {
      page = await component({ lastname: "source" });
      x;
      element = await page.find("demo-text");
      const styles = {
        fontSize: "18px",
      };
      expect(await element.getComputedStyle()).toMatchObject(styles);
    });
  });
});
```

Ahora continua con [4-1 Sobre las herramientas](../4-herramientas/4-1-sobre-las-herramientas.md)
