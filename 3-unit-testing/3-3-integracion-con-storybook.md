# 3-3- Integracion con storybook

La integracion con Storybook nos permite tener los resultados de las pruebas unitarias.

Es necesario generar un archivo de resultado de las pruebas unitarias que pueda leer storybook

## Instalacion

Se agrega la dependencia del addon-jest al proyecto

```text
yarn add --dev @storybook/addon-jest
```

## Archivos a actualizar

Se tiene que realizar los siguientes cambios al storybook

> .storybook/preview.js

```javascript
import results from "./../.jest-test-results.json";
addDecorator(withTests({ results }));
```

> .storybook/main.js

```javascript
module.exports = {
  addons: ["@storybook/addon-jest"],
};
```

y en un archivo storybook debe tener minimamente la estructura

> demo-text.stories.mdx

```javascript
import { withTests } from "@storybook/addon-jest";
<Meta
  title="Atoms|Text"
  parameters={{
    jest: ["demo-text.spec.ts"],
  }}
/>;
```

## Creacion del archivo .jest-test-results.json

El Storybook lee un json resultante de las pruebas unitarias por lo que para crearlo agregamos el siguiente script en package.json
y lo ejecutamos para que devuelta true y no nos rompa las pruebas o Integracion Continua

```json
{
  "scripts": {
    "test.json": "jest --json --outputFile=.jest-test-results.json -u || true"
  }
}
```

Ahora continua con [3-4 Configuracion](3-4-configuracion.md)
