# 1-9 Props

los _Props_ funcionan de una forma similar que los Decoradores en Angular, por lo que soportan lo siguiente:

- Interfaces
- Types
- Valores por defecto

**Ejemplo:**

```typescript
import { Prop } from "@stencil/core";
export class TodoList {
  @Prop() color: string;
  @Prop() favoriteNumber: number;
  @Prop() isSelected: boolean;
  @Prop() myHttpService: MyHttpService;

  logColor() {
    console.log(this.color);
  }

  getColor() {
    const todoListElement = document.querySelector("todo-list");
    console.log(todoListElement.myHttpService); // MyHttpService
    console.log(todoListElement.color); // blue
  }
}
```

```jsx
<todo-list color="blue" favorite-number="24" is-selected="true"></todo-list>
```

```typescript
  // configurar nombres de los ATRIBUTOS explicitamente
  @Prop({ attribute: 'valid' }) isValid: boolean;
  @Prop({ attribute: 'controller' }) controller: MyController;
  // REFLEJAR las propiedades en el HTML
  @Prop({ reflect: true }) message = 'Hello';
  @Prop({ reflect: false }) value = 'The meaning of life...';
  @Prop({ reflect: true }) number = 42;

  @Watch('number')
  validateName(newValue: string, oldValue: string) {
    // logic goes here...
  }
```

Ahora continua con [1-10 States](1-10-states.md)
