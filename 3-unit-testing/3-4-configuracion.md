# 3-4 Configuracion

La configuracion para las pruebas unitarias se puede realizar realizando lo siguiente

- Pruebas unitarias, crear un archivo `demo.spec.ts`

- Pruebas E2E, crear un archivo `demo.e2e.ts`

## Configurando package.json

para ejecutar las pruebas unitarias con Jest actualiza el paquete de la siguiente manera:

```json
{
  "scripts": {
    "test": "jest -u",
    "e2e": "stencil test --e2e"
  }
}
```

Despues de ejecutar `test`, verificamos que se ha creado en la carpeta `documentation` se ha creado dos nuevas carpetas:

- `coverage`: donde se almacena el reporte de la cobertura de codigo

- `report`: donde se almacena el reporte de las pruebas unitarias

- `test`: reporte secundario de las pruebas unitarias, tipo dashboard

Ahora continua con [3-5 Compiladores](3-5-compiladores.md)
