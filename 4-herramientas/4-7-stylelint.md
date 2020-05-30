# 4-7 stylelint

Stylelint nos permitira hacer linting sobre el codigo `.scss` de nuestro proyecto, y con la ayuda de la [extension](../0-configuracion/0-configuracion-del-ambiente.md) instalada de VSCode podremos configurar el autofix a los errores mas comunes en el proyecto.

Para esto necesitamos realizar algunas configuraciones que son como siguen:

> package.json

```json
{
  "scripts": {
    "stylelint": "stylelint src/**/*.{css,scss}"
  },
  "devDependencies": {
    "eslint-config-stylelint": "12.0.0",
    "prettier-stylelint": "0.4.2",
    "stylelint": "13.5.0",
    "stylelint-config-standard": "20.0.0",
    "stylelint-no-unsupported-browser-features": "4.0.0"
  }
}
```

> stylelint.config.js

```javascript
module.exports = {
  extends: "stylelint-config-standard",
  plugins: "stylelint-no-unsupported-browser-features",
  rules: {
    "plugin/no-unsupported-browser-features": [
      true,
      {
        browsers: [
          "Explorer >= 11",
          "Firefox >= 63",
          "Chrome >= 60",
          "Safari >= 10",
          "Edge >= 16",
        ],
        severity: "warning",
      },
    ],
    "selector-type-no-unknown": [
      true,
      {
        ignore: ["custom-elements", "default-namespace"],
        ignoreTypes: ["/auna-/"],
      },
    ],
    "function-whitespace-after": "never",
    "selector-attribute-operator-space-after": "never",
    "selector-attribute-operator-space-before": "never",
    "media-feature-range-operator-space-after": "never",
    "media-feature-range-operator-space-before": "never",
    "comment-whitespace-inside": "never",
    "function-parentheses-newline-inside": "never-multi-line",
  },
};
```

Ahora continua con [4-8 Husky y lint-staged](4-8-husky-y-lint-staged.md)
