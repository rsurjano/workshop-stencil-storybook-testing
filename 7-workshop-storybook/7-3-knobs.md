# 7-3 Knobs

## Antes de empezar

El workshop esta dividido en **ramas**, para revisar todas las ramas ejecuta: `git branch --all`
para ir a una rama en particular ejecuta: `git checkout {BRANCH_NAME}`

Para iniciar el ejercicio posicionate sobre la rama inicial `git checkout 7-3-knobs`.

Adicionalmente puedes ir directamente a la solucion saltando a la rama `git checkout 7-3-knobs-final`

## Tiempo aproximado para completar el ejercicio

> 15 Minutos

## Prerequisitos

- tener implementado el ambiente para storybook + stenciljs
- conocer la implementacion de componentes
- conocer la implementacion de stories para storybook

## Ejercicio

- revise sobre [Knobs](../2-storybook/2-6-knobs.md)

1. posicionese sobre la carpeta demo-link
2. cree un archivo `demo-link.stories.mdx`
3. actualize `demo-link.helpers.tsx`
4. cree la implementacion de knobs para los siguientes elementos:
   - color
   - ariaLabel
5. escriba el archivo demo-link-stories.mdx con la siguiente implementacion

```tsx
### Default
<Story name="Default">
  {component({ ariaLabel: "ver detalle", color: "brand1" }, "Ver más")}
</Story>

### Dark
<Story name="Dark">
  {component({ ariaLabel: "ver detalle", color: "brand2" }, "Detalle")}
</Story>

### Disabled
<Story name="Disabled">
  {component(
    { ariaLabel: "ver detalle", color: "grey-100", disable: true },
    "Detalle"
  )}
</Story>
```

6. ejecute yarn test.json

7. ejecute yarn build

8. ejecute yarn storybook.dev

9. revise la implementacion

Ahora continua con [8-1 Optimizacion de package.json](../8-workshop-herramientas/8-1-optimizando-package-json.md)
