# 1-5 Primer Componente

El componente en StencilJS tiene una estructura sencilla que adopta diversas tecnicas y buenas practicas de diversos frameworks, por lo que resulta familiar y amigable su desarrollo

```jsx
// Se importa el Decorador Component, el decorador Prop y la variable h para indicar
// explicamente al compilador que vamos a trabajar con JSX
import { Component, Prop, h } from "@stencil/core";

// DECORADOR
@Component({
  // ETIQUETA HTML que se usara en la implementacion
  tag: "hello-world",
})
export class HelloWorld {
  // Propiedad a externalizar del componente
  @Prop() name: string;

  // Metodo render() que usa JSX para su declaracion
  render() {
    return <p>Mi nombre es: {this.name}</p>;
  }
}
```

## Implementacion

El componente se implementa en la aplicacion a traves del nombre de su etiqueta

```html
<!-- etiqueta hello-world -->
<!-- prop name con valor Max -->
<hello-world name="Max"></hello-world>
```

Ahora continua con [1-6 CLI](1-6-CLI.md)
