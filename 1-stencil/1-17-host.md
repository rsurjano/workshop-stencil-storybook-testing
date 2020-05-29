# 1-17 Host

```jsx
// aplicando abstraccion al host
return (
  <Host
    aria-hidden={this.open ? "false" : "true"}
    class={{
      "todo-list": true,
      "is-open": this.open,
    }}
  />
);
// o como wrapper para varios elementos
return (
  <Host>
    <h1>Title</h1>
    <p>Message</p>
  </Host>
);
```

Ahora continua con [1-18 Element Decorator](1-18-element-decorator.md)
