# 5-6 Host y slots

## Antes de empezar

El workshop esta dividido en **ramas**, para revisar todas las ramas ejecuta: `git branch --all`
para ir a una rama en particular ejecuta: `git checkout {BRANCH_NAME}`

Para iniciar el ejercicio posicionate sobre la rama inicial `git checkout 5-6-host`.

Adicionalmente puedes ir directamente a la solucion saltando a la rama `git checkout 5-6-host-final`

## Tiempo aproximado para completar el ejercicio

> 15 Minutos

## Prerequisitos

- Entender e implementar un Webcomponent

## Ejercicio

- revisa [Host y slot](../1-stencil/1-17-host.md)

> Parte 1

1. crea un componente con base `atom/demo-slot`

2. crea un componente con base `atom/demo-slot-child`

3. mantiene la etiqueta `Host` y elimina todo su contenido dentro.

4. agrega demo-slot-child dentro de Host

5. Agrega el texto PARAGRAPH dentro

6. posicionate en `demo-slot-child.tsx`

7. mantiene la etiqueta `Host` y elimina todo su contenido dentro.

8. agrega en el render() un div dentro de `Host`

9. dentro del `div` agrega una etiqueta `p`

10. agrega la etiqueta `</slot>` dentro de `p`

11. realiza la implementacion en `index.html` usando la etiqueta `demo-slot`

12. compila y verifica, deberia mostrar el texto dentro de una etiqueta `<p>`

> Parte 2

1. agrega un State con nombre bg de tipo boolean

2. agregale un metodo con nombre changeBg() que invierta el valor de `bg`

3. agrega un boton con texto `CHANGE!` que al hacerle click dispare changeBg()

4. agregale un estilo al Host con lo siguiente:

   - backgroundColor: orange | blue
   - color: hite

5. en la etiqueta `Host` poner un operador Ternario para this.bg, hacer un cambio entre los backgroundColor

6. compila y prueba, al hacer click deberia cambiar el color del fondo entre azul y naranja

Ahora continua con [6-1 Testing Structural](../6-workshop-unit-testing/6-1-testing-estructural.md)
