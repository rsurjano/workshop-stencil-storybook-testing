# 3-2 Integracion con Stencil

La integracion con StencilJS nos permite usar el motor propio de Jest sin pasar directamente por StencilJS ganando:

- flexibilidad en la configuracion

- Separacion del archivo de configuracion en uno externo

- Velocidad en tiempos de ejecucion

Para realizar esta implementacion se crea un archivo jest.config.js con el siguiente contenido

```javascript
const config = {
  // se extiende el preset includo en StencilJS
  preset: "@stencil/core/testing",
  // se incluye verbosity al momento de ejecutar los test
  verbose: true,
  // se excluye node_modules
  coveragePathIgnorePatterns: ["node_modules"],
  // Se indica que archivos y que no mapear
  collectCoverageFrom: [
    "src/components/**/*.{js,jsx,ts,tsx}",
    "!src/components/**/*.helpers.{js,jsx,ts,tsx}",
    "!src/components/**/*.{d,e2e}.{js,jsx,ts,tsx}",
    "!src/components/story.utils.ts",
  ],
  // Colecta el code coverage al ejecutar los test
  collectCoverage: true,
  // configura el folder de salida para el code coverage
  coverageDirectory: "documentation/coverage",
  // selecciona los reportes de coverage a ejecutar
  coverageReporters: ["text", "html", "json", "lcov"],
  // mostrar un error al usar metodos/funciones discontinuadas
  errorOnDeprecated: true,
  // indica el porcentage de cobertura
  coverageThreshold: {
    global: {
      branches: 85,
      functions: 85,
      lines: 85,
      statements: 85,
    },
  },
  // ignora la carpeta al ejecutar con un watcher
  watchPathIgnorePatterns: ["<rootDir>/documentation"],
  reporters: [
    "default",
    // Agrega la generacion de un reporte html
    [
      "jest-html-reporters",
      {
        // indica el diredctorio de salida
        publicPath: "documentation/tests",
        // sobreescribe el nombre del archivo reports.html
        filename: "index.html",
        // Asigna el titulo del reporte
        pageTitle: "Covertura de pruebas Unitarias | DEMO",
        // se agrega un logo para el reporte
        logoImgPath: "docs/assets/logo_demo.png",
        // esconde el icono de la marca
        hideIcon: true,
        // muestra los reportes expandidos
        expand: true,
      },
    ],
    [
      "jest-stare",
      {
        // carpeta de salida
        resultDir: "documentation/report",
        // titulo del reporte
        reportTitle: "Reporte de Pruebas unitarias | DEMO",
        // encabezado del reporte
        reportHeadline: "DEMO",
        // Indica que procesador de resultado aplicar
        additionalResultsProcessors: ["jest-junit"],
        // indica el link al reporte de cobertura de codigo
        coverageLink: "lcov-report/index.html",
      },
    ],
  ],
};
module.exports = config;
```

Ahora continua con [3-3 Integracion con storybook](3-3-integracion-con-storybook.md)
