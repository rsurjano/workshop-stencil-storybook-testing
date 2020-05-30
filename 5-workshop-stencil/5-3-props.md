# 5-3 Props

## Antes de empezar

El workshop esta dividido en **ramas**, para revisar todas las ramas ejecuta: `git branch --all`
para ir a una rama en particular ejecuta: `git checkout {BRANCH_NAME}`

Para iniciar el ejercicio posicionate sobre la rama inicial `git checkout 5-3-props`.

Adicionalmente puedes ir directamente a la solucion saltando a la rama `git checkout 5-3-props-final`

## Tiempo aproximado para completar el ejercicio

> 15 Minutos

## Prerequisitos

- Haber creado componentes con Props, States e implementado onClick event

## Ejercicio

- Revisa [Stencil Props](../1-stencil/1-9-props.md)

> Parte 1

1. Crea un componente con ruta `atoms/demo-props`

2. Agregale un Prop con nombre city de tipo `string`

3. Agregale un Prop con nombre age de tipo `number`

4. Agrega un metodo de nombre getAge

5. agrega una constante de nombre demoPropsEl que contenta un querySelector con la etiqueta del componente

6. logea el valor de city

7. en otra linea logea el valor de age

8. llama al metodo dentro de render();

9. agrerga la implementacion en el index.html asignandole los atributos correspondientes del componente.

10. Compila y prueba en la consola, debe imprimir el valor de `city` y `age`

> Parte 2

1. Agrega un Prop con nombre country de tipo `string` y que refleje su valor en el html, agregale un valor por defecto.

2. Agrega un Prop con nombre province de tipo `string` y que no refleje su valor en el html, agregale un valor por defecto.

3. Agrega el texto demo-props dentro de la etiqueta Host

4. Actualiza la implementacion en el html, no agregues atributos de country y province

5. Compila y prueba; inspecciona el HTML, no deberia mostrarse el Prop `province`

Ahora continua con [5-4 States](5-4-states.md)
