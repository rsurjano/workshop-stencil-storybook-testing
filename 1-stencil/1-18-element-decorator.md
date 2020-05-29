# 1-18 Element Decorator

```jsx
import { Element } from "@stencil/core";
@Element() el: HTMLElement;

getListHeight(): number {
  return this.el.getBoundingClientRect().height;
}
```

Una observacion adicional es que si necesitas actualizar el HOST lo hagas directamente modificando su etiqueta

```text
<Host>
```

Ahora continua con [1-19 Estilos](1-19-estilos.md)
