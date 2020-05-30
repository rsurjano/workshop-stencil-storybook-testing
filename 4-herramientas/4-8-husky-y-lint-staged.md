# 4-8 Husky y lint-staged

Husky nos permite agregar hooks en el lifecycle de git y lint-staged nos permite aplicar procesamiento solamente a los archivos que se esta actualizando/agregando, por lo que ya no seria necesario verificar todo el codigo, sino solamente a las actualizaciones

## Configurando

Se actualizan o se crean los siguientes archivos:

Se agrega la configuracion de lint-stagged para que solo ejecute sobre determinadas extensiones, aqui ejecuta stylelint y eslint solo a los archivos afectados.

> lint-stagged.config.js

```javascript
module.exports = {
  "*.+(ts|tsx|jsx)": ["eslint", "git add"],
  "*.+(css|scss)": ["stylelint", "git add"],
};
```

> .huskyrc.js

```javascript
module.exports = {
  hooks: {
    "pre-commit": "lint-staged",
    "pre-push": "yarn test.spec && yarn stencil.prod",
  },
};
```

> package.json

```json
{
  "devDependencies": {
    "husky": "4.2.5",
    "lint-staged": "10.2.6"
  }
}
```

Ahora continua con [4-9 changelog](4-9-changelog.md)
