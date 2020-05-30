# 5-1 Estructura

## Antes de empezar

El workshop esta dividido en **ramas**, para revisar todas las ramas ejecuta: `git branch --all`
para ir a una rama en particular ejecuta: `git checkout {BRANCH_NAME}`

Para iniciar el ejercicio posicionate sobre la rama inicial `git checkout 5-1-estructura-inicial`.

Adicionalmente puedes ir directamente a la solucion saltando a la rama `git checkout 5-1-estructura-final`

## Tiempo aproximado para completar el ejercicio

> 15 Minutos

## Prerequisitos

- Haber configurado el ambiente con las [herramientas necesarias](../0-configuracion/0-configuracion-del-ambiente.md).
- Haber configurado el [Servidor de desarrollo](../4-herramientas/4-4-http-server.md) con el script serve.stencil

## Ejercicio

Realiza los siguientes pasos para el presente ejercicio

Usando el [CLI de Stencil](../1-stencil/1-6-CLI.md) genera tu primer componente con lo siguiente:

- ruta: `atoms/demo-text`

1. Usando el material sobre [Primer Componente](../1-stencil/1-5-primer-componente.md), crea tu primer componente en Stencil con lo siguiente:

   - 01 Prop que declare una propiedad con nombre `lastname`
   - En el metodo render debe retornar un `div` y que su contenido imprima la propiedad `lastname`

2. Compila el proyecto ejecutando `yarn build`

3. agrega la implementacion en el body del archivo `index.html`

4. agrega el atributo lastname y asignale como valor tu apellido. Guardalo.

5. ejecuta serve.stencil

6. Navega a [http://localhost:9999](http://localhost:9999)

7. Visualiza el webcomponent.

Ahora continua con [5-2 Componentes](5-2-componentes.md)
