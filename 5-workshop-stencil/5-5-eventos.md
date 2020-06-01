# 5-5 Eventos

## Antes de empezar

El workshop esta dividido en **ramas**, para revisar todas las ramas ejecuta: `git branch --all`
para ir a una rama en particular ejecuta: `git checkout {BRANCH_NAME}`

Para iniciar el ejercicio posicionate sobre la rama inicial `git checkout 5-5-eventos`.

Adicionalmente puedes ir directamente a la solucion saltando a la rama `git checkout 5-5-eventos-final`

## Tiempo aproximado para completar el ejercicio

> 15 Minutos

## Prerequisitos

- Conocer implementacion de componentes, props, States, Watch, Lifecycle

## Ejercicio

- Revisa acerca de [Eventos](../1-stencil/1-13-eventos.md)

1. crea un componente con el CLI con la ruta `atoms/demo-events`

2. Agregale una propiedad tipo @Event con nombre clickEmit e interface EventEmitter

3. agrega un metodo clickEmitHandler() que reciba el evento y emita 'clicked' usando `clickEmit`

4. agrega en el render() un boton con texto 'Emitir Click' y que lance el metodo `clickEmitHandler()` al hacerle click

5. realiza la implementacion en el index.html de la siguiente forma:

6. agrega una etiqueta script, obten el componente con un `document.querySelector` y agrega un eventListener para escuchar al evento `clickEmit` del componente

7. compila y verifica que al hacer click se emita el evento y que imprima el string en la consola del navegador

Ahora continua con [5-6 Host y slots](5-6-host-y-slots.md)
