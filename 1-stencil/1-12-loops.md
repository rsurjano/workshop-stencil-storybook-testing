# 1-12 loops

Se pueden usar Loops para iterar contenido y generar componentes en base a un Arreglo

```jsx
remove(index) {

}

render() {
  return (
    <div>
      {this.todos.map((todo, idx) =>
        <div key={todo.uid}>
          <div>{todo.taskName}</div>
          <div>{todo.isCompleted}</div>
          <button onClick={() => this.remove(idx)}>X</button>
        </div>
      )}
    </div>
  )
}
```

Ahora continua con [1-13 Eventos](1-13-eventos.md)
