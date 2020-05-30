# 4-4 HTTP SERVER

El servidor http es un paquete que levanta un servidor nodejs basico para probar los diversos entregables del proyecto como:

- Storybook: puerto [5555](http://localhost:5555)

- Reporte de cobertura de codigo: puerto [7777](http://localhost:7777)

- Reporte de pruebas unitarias: puerto [8888](http://localhost:8888)

- otros

## Implementacion

actualizar el archivo `package.json` con lo siguiente:

```json
{
  "devDependencies": {
    "http-server": "0.12.3"
  },
  "scripts": {
    "serve.storybook": "http-server documentation/storybook -p 5555",
    "serve.coverage": "http-server documentation/report -p 7777",
    "serve.tests": "http-server documentation/tests -p 8888"
  }
}
```

De esta manera exponemos diversos servidores para probar los distintos entregables del proyecto.

Ahora continua con [4-5 npm watch](4-5-npm-watch.md)
