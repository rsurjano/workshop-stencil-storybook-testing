# 1-10 States

Los estados se usan para datos cambiantes en la aplicacion.

```jsx
export class DemoToggleButton {
  // TAMBIEN SE PUEDE USAR CONSTANTES
  DEMO_KEY = "awesome_key_goes_here";

  @State() open: boolean;

  handleClick(event: MouseEvent) {
    this.open = !this.open;
  }

  render() {
    return <button onClick={ev => this.handleClick(ev)}>
      {this.open ? "On" : "Off"}
    </button>;
  }
```

Ahora continua con [1-11 jsx](1-11-jsx.md)
