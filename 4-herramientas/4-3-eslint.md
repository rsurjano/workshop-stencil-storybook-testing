# 4-3 eslint

## Instalacion

Se actualiza el package.json con lo siguiente:

```json
{
  "devDependencies": {
    "eslint": "7.1.0",
    "eslint-config-react": "1.1.7",
    "eslint-plugin-react": "7.20.0",
    "eslint-plugin-simple-import-sort": "5.0.3",
    "@typescript-eslint/eslint-plugin": "2.33.0",
    "@typescript-eslint/parser": "2.33.0"
  },
  "scripts": {
    "eslint.code": "prettier-eslint --write \"{,!(node_modules)/**/}*.{ts,tsx,jsx}\""
  }
}
```

Asi se agrega eslint en el proyecto, estando disponible para los editores o paquetes externos del proyecto.

Ahora continua con [4-4 http-server](4-4-http-server.md)
