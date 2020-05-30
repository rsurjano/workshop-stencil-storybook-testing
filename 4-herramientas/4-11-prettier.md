# 4-11 Prettier

Por Ultimo tenemos a Prettier y la configuracion que nos permitira autoformatear y autocorregir nuestro codigo conjuntamente con VSCode

## Instalacion

```json
{
  "scripts": {
    "prettier": "yarn prettier.code && yarn prettier.style",
    "prettier.code": "prettier-eslint --write \"{,!(node_modules)/**/}*.{ts,tsx,jsx}\"",
    "prettier.style": "prettier-stylelint --write src/**/*.{css,scss} --quiet"
  },
  "devDependencies": {
    "eslint-config-prettier": "6.11.0",
    "eslint-plugin-prettier": "3.1.3",
    "prettier": "1.19.1",
    "prettier-eslint-cli": "5.0.0",
    "prettier-stylelint": "0.4.2"
  }
}
```

Ahora continua con [5-1 Estructura](../5-workshop-stencil/5-1-estructura.md)
