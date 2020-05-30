# 4-9 changelog

El archivo CHANGELOG.md es un archivo donde podemos tener un historico de los cambios realizados en el proyecto

## Implementacion

```json
{
  "scripts": {
    "version": "conventional-changelog -p angular -i CHANGELOG.md -s && git add CHANGELOG.md"
  },
  "devDependencies": {
    "conventional-changelog-cli": "2.0.34"
  }
}
```

esto actualiza el CHANGELOG al detectar un nuevo cambio en la version del paquete, para ejecutarlo realizar:

```bash
# cambio en 0.0.1
#  FIX mayormente
npm version patch
# cambio en  0.1.0
# FEATURES o nuevas capacidades
npm version minor
# cambio en 1.0.0
# cambios grandes, a veces BREAKING CHANGES
npm version mayor
```

Ahora continua con [4-10 Commitizen](4-10-commitizen.md)
