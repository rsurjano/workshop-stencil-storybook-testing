# 1-10 States

Los estados se usan para datos cambiantes en la aplicacion.

```jsx
export class AunaToggleButton {
  // TAMBIEN SE PUEDE USAR CONSTANTES
  AUNA_KEY = "awesome_key_goes_here";

  @State() open: boolean;

  @Listen('click', { capture: true })
  handleClick() {
    this.open = !this.open;
  }

  render() {
    return <button>
      {this.open ? "On" : "Off"}
    </button>;
  }
```

Ahora continua con [1-11 jsx](1-11-jsx.md)
