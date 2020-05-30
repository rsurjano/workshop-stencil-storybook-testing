# 5-2 Componentes

## Antes de empezar

El workshop esta dividido en **ramas**, para revisar todas las ramas ejecuta: `git branch --all`
para ir a una rama en particular ejecuta: `git checkout {BRANCH_NAME}`

Para iniciar el ejercicio posicionate sobre la rama inicial `git checkout 5-2-componentes`.

Adicionalmente puedes ir directamente a la solucion saltando a la rama `git checkout 5-2-componentes-final`

## Tiempo aproximado para completar el ejercicio

> 15 Minutos

## Prerequisitos

- Haber generado un componente basico usando el CLI

## Ejercicio

Realiza los siguientes pasos para el presente ejercicio

> Parte 1

- Revisa la parte de [Componentes Embebidos](../1-stencil/1-8-componentes-embebidos.md)

1. Crea un componente usando el CLI con ruta `atoms/demo-label`

2. Agrega un Prop con nombre de propiedad `value` de tipo string

3. Agrega un Prop con nombre de propiedad `lastname` de tipo string

4. Dentro de `render()` llama al componente demo-text y agregale el atributo lastname={lastname}

5. agrega una etiqueta `span` y dentro muestra el valor de `value`.

6. agrega el componente en index.html con value="My Label" y lastname="stenciljs"

7. Renderiza, levanta el servidor y prueba los resultados

> Parte 2

- Revisa la parte de [States](../1-stencil/1-10-states.md)

1. Agrega un State con nombre `isOpened` tipo boolean con valor inicial false;

2. agrega un boton en el `render()` que muestre el texto: ENCENDIDO cuando el valor de la propiedad isOpened es true o mostrar APAGADO

3. agregarle un metodo de nombre `toggle` que invierta el valor de `isOpened`

4. agrega un listener de tipo `click`, que capture valores y que dispare el metodo toggle

5. prueba los resultados ejecutando:

   - yarn build

   - yarn serve.stencil

6. Deberia cambiar el texto al hacer click en el boton

Ahora continua con [5-3 Props](5-3-props.md)
