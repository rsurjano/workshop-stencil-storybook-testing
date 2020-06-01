# 7-2 Stories en MDX

## Antes de empezar

El workshop esta dividido en **ramas**, para revisar todas las ramas ejecuta: `git branch --all`
para ir a una rama en particular ejecuta: `git checkout {BRANCH_NAME}`

Para iniciar el ejercicio posicionate sobre la rama inicial `git checkout 7-2-stories-en-mdx`.

Adicionalmente puedes ir directamente a la solucion saltando a la rama `git checkout 7-2-stories-en-mdx-final`

## Tiempo aproximado para completar el ejercicio

> 15 Minutos

## Prerequisitos

- Haber configurado la integracion de storybook con stenciljs

## Ejercicio

- revisa [Storybook Stories](../2-storybook/2-8-stories.md) y [Integracion con storybook](../3-unit-testing/3-3-integracion-con-storybook.md)

1. agrega el script `test.json` en package.json de 3-3 integracion con storybook

2. ejecuta `yarn` (se han agregado algunas dependencias)

3. posicionate en la carpeta `demo-text`

4. crea el archivo `demo-text.stories.mdx` (puedes usar el manual) y escribe la implementacion de demo-text

   - Story name: `Demo Text`
   - {component({ lastname: "workshop" })}
   - jest: ["demo-text.spec.ts"]

5. ejecuta `yarn run test.json`

6. ejecuta `yarn build`

7. ejecuta `yarn storybook.dev` e ingresa a [http://localhost:4444]([http://localhost:4444])

8. verifica que el componente se muestra en el storybook y que se puede interactuar con el componente usando en panel de `knobs`

Ahora continua con [7-3 Knobs](7-3-knobs.md)
