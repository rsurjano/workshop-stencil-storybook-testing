# 1-19 Estilos

```jsx
@Component({
  tag: 'demo-text',
  styleUrl: 'demo-text.css'
})
```

```scss
// css aplicado al HOST
demo-text {
  width: 100px;
}
```

```jsx
@Component({
  tag: 'demo-text',
  styleUrl: 'demo-text.css',
  shadow: true
})
```

```scss
// :HOST
:host {
  width: 100px;
}
```

Ahora continua con [1-20 Inspiraciones](1-20-inspiraciones.md)
