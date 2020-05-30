# 5-4 States

## Antes de empezar

El workshop esta dividido en **ramas**, para revisar todas las ramas ejecuta: `git branch --all`
para ir a una rama en particular ejecuta: `git checkout {BRANCH_NAME}`

Para iniciar el ejercicio posicionate sobre la rama inicial `git checkout 5-4-states`.

Adicionalmente puedes ir directamente a la solucion saltando a la rama `git checkout 5-4-states-final`

## Tiempo aproximado para completar el ejercicio

> 15 Minutos

## Prerequisitos

- Haber entendido la creacion del componente e implementacion de Props

## Ejercicio

- Revisa sobre: [States](../1-stencil/1-10-states.md), [JSX](../1-stencil/1-11-jsx.md), [Loops](../1-stencil/1-12-loops.md), `@Watch` en [Componentes Stencil](../1-stencil/1-9-props.md) y [Lifecycle](../1-stencil/1-7-el-lifecycle.md)

> Parte 1

1. Crea un componente via CLI con la ruta `atoms/switcher`

2. Agregale un Prop con nombre label de tipo string

3. En el render() agrega un `div` que muestre el valor de `label` o sino `NO LABEL`

4. Agrega demo-label y asignale en `value` el valor de 'MY LAST NAME'

5. Asignale a demo-label `lastname` el valor de 'GAGARIN'

6. agrega la implementacion en index.html asignandole un valor a `label` `MY-LABEL`

7. compilar y probar

> Parte 2

1. Agregale un Prop con nombre buttonNames de tipo array y asignale el valor `['yuri', 'putin']`

2. Agrega un state con nombre buttons para guardar el valor de buttonNames cuando cambie

3. Usando el lifecycle asigna el valor buttonNames a buttons antes de cargar el render() inicial

4. Crea el metodo updateButton() y asignale un @Watch que observe 'buttonNames' y que asigne el nuevo valor a buttons

5. en el render agrega un `button` por cada elemento del state button(usa .map)

6. asignale el texto resultado del .map como contenido del elemento `button`

7. agrega un onClick event al botton que lo elimine al hacer click, crea un metodo llamado remove() que haga el trabajo

8. Compilar y probar

9. hacer un document.querySelector al componente y actualizarle la propiedad buttonNames, debe reflejar los cambios en el componente

10. Verificar

Ahora continua con [5-5 Eventos](5-5-eventos.md)
