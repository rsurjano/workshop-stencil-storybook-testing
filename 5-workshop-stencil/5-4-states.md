# 5-4 States

## Antes de empezar

El workshop esta dividido en **ramas**, para revisar todas las ramas ejecuta: `git branch --all`
para ir a una rama en particular ejecuta: `git checkout {BRANCH_NAME}`

Para iniciar el ejercicio posicionate sobre la rama inicial `git checkout 5-4-states`.

Adicionalmente puedes ir directamente a la solucion saltando a la rama `git checkout 5-4-states-final`

## Tiempo aproximado para completar el ejercicio

> 15 Minutos

## Prerequisitos

- Haber entendido la creacion del componente e implementacion de Props/States/Clicks/Metodos

## Ejercicio

- Revisa sobre: [States](../1-stencil/1-10-states.md), [@Watch](../1-stencil/1-9-props.md) y [Lifecycle](../1-stencil/1-7-el-lifecycle.md)

1. Crea un componente via CLI con la ruta `atoms/demo-states`

2. Agrega los siguientes Props

   - firstName: string = ''
   - lastname: string = 'workshop'

3. Agrega el siguiente State

   - isEveris: boolean = false;
   - msgIsEveris: 'NO' | 'SI' = 'NO'

4. Agrega un label en render() que muestre el contenido de 'msgIsEveris'

5. Agrega un metodo con nombre verify() que verifique si 'isEveris' contiene la palabra 'everis' y actualiza el state msgIsEveris

6. usando el lifecycle verifica el valor de firstName al inicio

7. Agrega un boton en render() con contenido: 'Verificar everis' que al hacer click lance el metodo `verify`

8. implementa en index.html demo-states y el atributo first-name

9. cambia el firstName por otro que no sea everis y verifica la funcionalidad del boton (usa el inspector)

10. compilar y probar.

Ahora continua con [5-5 Eventos](5-5-eventos.md)
