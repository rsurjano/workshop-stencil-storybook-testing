# 4-5 npm watch

npm watch nos permitira mapear cambios en en codigo y ejecutar un script especifico en el proyecto, se puede implementar de la siguiente manera:

```json
{
  "watch": {
    "watch.stencil": "src/**/*.*"
  },
  "scripts": {
    "watch": "npm-watch",
    "watch.stencil": "stencil build --prod --verbose --debug --log --no-cache --stats"
  },
  "devDependencies": {
    "npm-watch": "0.6.0"
  }
}
```

con esta implementacion se realizara lo siguiente:

- se lanza el script watch con: `yarn watch`
- se observa cualquier cambio de archivos en la carpeta `src`
- se ejecuta el script `stencil.prod`

Ahora continua con [4-6 editorconfig](4-6-editorconfig.md)
