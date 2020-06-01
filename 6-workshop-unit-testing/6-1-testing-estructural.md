# 6-1 Testing Structural

## Antes de empezar

El workshop esta dividido en **ramas**, para revisar todas las ramas ejecuta: `git branch --all`
para ir a una rama en particular ejecuta: `git checkout {BRANCH_NAME}`

Para iniciar el ejercicio posicionate sobre la rama inicial `git checkout 6-1-testing-estructural`.

Adicionalmente puedes ir directamente a la solucion saltando a la rama `git checkout 6-1-testing-estructural-final`

## Tiempo aproximado para completar el ejercicio

> 20 Minutos

## Prerequisitos

- Entender la implementacion de componentes en StencilJS

## Ejercicio

- revisar sobre [Pruebas unitarias estructurales](../3-unit-testing/3-7-escribiendo-pruebas.md)

1. ejecuta `yarn` para instalar las nuevas dependencias

2. entra a la carpeta del componente `demo-text`

3. agrega el archivo demo-text.spec.ts

4. agrega el archivo demo-text.helpers.ts

5. escribe la implementacion del helpers para demo-text

6. al instanciar el componente escribe de esta forma:
   `page = await component({ lastname: "source" });`

7. escribe el restante de la prueba unitaria funcional basica

8. verifica que las pruebas unitarias se hayan ejecutado correctamente

Ahora continua con [6-2 Testing Funcional](6-2-testing-funcional.md)
