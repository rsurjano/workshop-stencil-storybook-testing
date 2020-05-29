# 2-4 Configuracion

## Entorno de desarrollo

Agregar el script con nombre `storybook.dev` a los scripts en package.json

```json
"storybook.dev": "start-storybook -p 4444 -c .storybook -s www",
```

La configuracion para desarrollo realiza

- Levanta un servidor en el puerto 4444, siendo disponible navegando en [http://localhost:4444](http://localhost:4444)
- usa la carpeta www para obtener los recursos estaticos
- usa la configuracion almacenada en la carpeta `.storybook`

## Construccion para produccion

Agregar el script con nombre `storybook.prod` a los scripts en package.json

```json
"storybook.prod": "build-storybook -o documentation/storybook --debug-webpack --loglevel=verbose && cd src/assets && cpy **/* ../../documentation/storybook/assets --parents",
```

La configuracion para produccion que realiza es

- Construye la aplicacion estatica
- La carpeta de salida es documentation/storybook
- Nos muestra informacion detallada de la compilacion en webpack
- Activa el logeo de informacion detallada, muy util en entornos CI
- Copia los assets de stenciljs a la carpeta de salida de storybook

Ahora continua con [2-5 Addons](2-5-addons.md)
