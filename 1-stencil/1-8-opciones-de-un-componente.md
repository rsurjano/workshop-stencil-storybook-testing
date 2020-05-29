# 1-8.2 Opciones de un componente

```typescript
import { Component } from "@stencil/core";

@Component({
  // la etiqueta del componente
  tag: string;

  // la insolacion del CSS, similar al shadow-dom
  scoped?: boolean;

  // activa el shadow-dom, si el navegador no soporta, usara scoped
  shadow?: boolean;

  // ruta del css/scss relativo al archivo
  styleUrl?: string;

    // ruta de los css/scss
  styleUrls?: string[] | d.ModeStyles;

  // estilos en linea, solo CSS es permitido
  styles?: string;

  // rutas para los recursos que usara el componente
  assetsDirs?: string[];

  // discontinuado
  assetsDir?: string;
})
export class TodoList {}
```

Para mayor informacion puedes visitar la [Documentacion](https://stenciljs.com/docs/component#component-decorator).

Ahora continua con [1-9 Props](1-9-props.md)
