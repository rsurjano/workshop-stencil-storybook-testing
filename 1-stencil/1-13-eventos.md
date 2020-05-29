# 1-13 Eventos

## Emitir eventos

```jsx
import { Event, EventEmitter } from "@stencil/core";

export class TodoList {
  @Event({
    eventName: "todoCompleted", // nombre
    composed: true, // indica si el evento se propagara entre elementos
    cancelable: true, // indica si el evento es cancelable
    bubbles: true, // indica si el evento se propaga hacia arriba
  })
  todoCompleted: EventEmitter;

  todoCompletedHandler(todo: Todo) {
    this.todoCompleted.emit(todo);
  }
}
```

## Ejemplo de implementacion

```jsx
<todo-list onTodoCompleted={(ev) => this.someMethod(ev)} />
```

Ahora continua con [1-15 Referencias HTML](1-15-referencias-html.md)
