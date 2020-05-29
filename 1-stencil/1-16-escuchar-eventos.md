# 1-16 Escuchar eventos

```jsx
import { Listen } from "@stencil/core";

@Listen("todoCompleted") // escucha todoCompleted de un componente hijo
todoCompletedHandler(event: CustomEvent) {
  console.log("Received the custom todoCompleted event: ", event.detail);
}

@Listen("scroll", { target: "window" }) // escucha evento del host
handleScroll(ev) {
  console.log("the body was scrolled", ev);
}

@Listen('keydown')
handleKeyDown(ev: KeyboardEvent){
  if (ev.key === 'ArrowDown') console.log('down arrow pressed'
}
```

Ahora continua con [1-17 Host](1-17-host.md)
