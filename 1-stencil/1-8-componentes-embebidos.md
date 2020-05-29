# 1-8 Componentes Embebidos

Los componentes declarados en StencilJS pueden ser reutilizados para construir componentes mas complejos.

Los componentes ya estan importados implicitamente.

**Ejemplo:**

```jsx
import { Component, h } from "@stencil/core";

@Component({
  tag: "auna-parent",
})
export class ParentComponent {
  render() {
    return (
      <div>
        <auna-child color="red"></auna-child>
      </div>
    );
  }
}
```

Ahora continua con [1-8.2 Opciones de un componente](1-8-opciones-de-un-componente.md)
