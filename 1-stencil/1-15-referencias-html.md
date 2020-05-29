# 1-15 Referencias HTML

Hay distintas tecnicas para referencias elementos HTML, aqui va una de ellas.

**Ejemplos:**

```jsx
textInput!: HTMLInputElement;
handleSubmit = (ev: Event) => { ev.preventDefault();
  console.log(this.textInput.value);
};
render() {
  return (
    <form onSubmit={this.handleSubmit}>
      <input
        type="text"
        ref={el => (this.textInput = el as HTMLInputElement)}
      />
      <input type="submit" value="Submit" />
    </form>
  );
}
```

Ahora continua con [1-16 Escuchar eventos](1-16-escuchar-eventos.md)
