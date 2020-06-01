# 6-2 Testing Funcional

## Antes de empezar

El workshop esta dividido en **ramas**, para revisar todas las ramas ejecuta: `git branch --all`
para ir a una rama en particular ejecuta: `git checkout {BRANCH_NAME}`

Para iniciar el ejercicio posicionate sobre la rama inicial `git checkout 6-2-testing-funcional`.

Adicionalmente puedes ir directamente a la solucion saltando a la rama `git checkout 6-2-testing-funcional-final`

## Tiempo aproximado para completar el ejercicio

> 20 Minutos

## Prerequisitos

- Entender las pruebas funcionales

## Ejercicio

- revisa [Testing estructural](../3-unit-testing/3-7-escribiendo-pruebas.md)

1. abre demo-text y modifica el componente con lo siguiente:

   - agrega un @State() con nombre isOpened: boolean = false;
   - agrega un metodo llamado `toggle` que invierta el valor de isOpened

2. abre demo-text.spec.ts

   - verifica el valor inicial de isToggle

3. crea el it 'should toggle isOpened'

4. verifica el valor inicial de isOpened

5. llama explicitamente al metodo `toggle()`

6. verifica el valor invertido de isOpened

7. corre la prueba unitaria

Ahora continua con [6-3 Testing E2E](6-3-testing-e2e.md)
