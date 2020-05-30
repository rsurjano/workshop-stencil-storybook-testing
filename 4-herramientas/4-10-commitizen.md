# 4-10 Commitizen

Commitizen permite estandarizar los commits usando la base de commits que usa [Angular](https://github.com/angular/angular/blob/master/CHANGELOG.md) y que de la mano con CHANGELOG nos brinda facilidades para mantener a raya nuestro repositorio.

## Instalacion

```bash
yarn global add commitizen @rsurjano/emoji-cz
```

## Uso

- Agrega los cambios a git (git add .)
- escribe `git cz`en reemplazo de `git commit`

**Ejemplo**

```bash
? Selecciona el tipo de cambio: (Use arrow keys)
❯ ✨  feat:     Una nueva característica
  🐛  fix:      Una corrección de error
  📝  docs:     Cambios en la documentación
  🎨  style:    Cambios en formateo, indentacion, etc
  ♻️  refactor: Un cambio de código que no corrige un error ni agrega una característica
  ⚡️  perf:     Un cambio de código que mejora el rendimiento.
  ✅  test:     Agregar pruebas faltantes o corregir pruebas existentes
(Move up and down to reveal more choices)
```

Como ven se puede escoger que tipo de caracteristica se va a implementar, todo basado en un simple UI tipo consola

Ahora continua con [4-11 Prettier](4-11-prettier.md)
