# 1-6 CLI

## Generando componentes

StencilJS

```shell
# stencil | comando | ruta del nuevo componente
stencil generate atoms/auna-text
```

## Build

el comando para llamarlo es: stencil build y algunos de sus comandos son:

| Flag            | Descripcion                                                                                            | Alias |
| --------------- | ------------------------------------------------------------------------------------------------------ | ----- |
| `--ci`          | Ejecuta una construccion con las configuraciones recomendadas para CI, por defecto usa 4 workers.      |       |
| `--config`      | Ruta del archivo `stencil.config.ts`.                                                                  | `-c`  |
| `--debug`       | Agrega codigo de ejecucion adicional para ayudar a la depuracion.                                      |       |
| `--dev`         | Ejecuta la construccion del artefacto en modo desarrollo.                                              |       |
| `--docs`        | Genera un `readme.md` con las propiedades, metodos y eventos de cada componente                        |       |
| `--es5`         | Genera un artefacto ES5 compatible                                                                     |       |
| `--log`         | Escribe el log de la construccion en stencil-build.log, en la misma carpeta de la configuracion.       |       |
| `--prerender`   | Prerenderiza la aplicacion en la carpeta `www` despues de la construccion.                             |       |
| `--prod`        | Ejecuta la construccion del artefacto con configuraciones optimizadas.                                 |       |
| `--max-workers` | El numero maximo de workers, al personalizarlo deberia ser la misma cantidad que los CPUs disponibles. |       |
| `--next`        | Activa el flag para obtener acceso a las ultimas capacidades de StencilJS.                             |       |
| `--no-cache`    | Deshabilita el uso del cache.                                                                          |       |
| `--no-open`     | Deshabilita el lanzamiento del navegador al usarlo a la par con `--serve`                              |       |
| `--port`        | El puerto [Servidor de Integracion](/docs/dev-server). Por defecto es `3333`.                          | `-p`  |
| `--serve`       | Ejecuta el [Servidor de Integracion](/docs/dev-server).                                                |       |
| `--stats`       | Escribe estadisticas del proyecto en `stencil-stats.json`. en la misma carpeta de la configuracion.    |       |
| `--verbose`     | Muestra informacion adicional de cada paso.                                                            |       |
| `--watch`       | Observa los archivos en la etapa de desarrollo y lanza otra vez la construccion de desarrollo.         |       |

## `stencil test`

Prueba el proyecto

| Flag     | Descripcion                                                                                                  |
| -------- | ------------------------------------------------------------------------------------------------------------ |
| `--spec` | Prueba`.spec.ts` [Jest](https://jestjs.io/).                                                                 |
| `--e2e`  | Prueba`.e2e.ts` [Puppeteer](https://developers.google.com/web/tools/puppeteer) y [Jest](https://jestjs.io/). |

## `stencil`

| Flag        | Descripcion                   |
| ----------- | ----------------------------- |
| `--help`    | Muestra informacion de ayuda. | `-h` |
| `--version` | Muestra la version actual.    | `-v` |

## Stencil

Para obtener mayor informacion sobre su CLI ingresa a su [Documentacion](https://stenciljs.com/docs/cli)

Ahora continua con [1-6-1 API](1-6-1-api.md)
