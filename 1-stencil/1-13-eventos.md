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

  @Event() standardCompleted: EventEmitter; // standard way

  todoCompletedHandler(todo: Todo) {
    this.todoCompleted.emit(todo);
  }
}
```

## Ejemplo de implementacion

```jsx
<todo-list todoCompleted={(ev) => this.someMethod(ev)} />
```

## Ejemplo de implementacion en HTML

<script>
  document.querySelector('my-component').addEventListener('todoCompleted', function(ev) {
  // code goes here
})
</script>

Ahora continua con [1-15 Referencias HTML](1-15-referencias-html.md)
