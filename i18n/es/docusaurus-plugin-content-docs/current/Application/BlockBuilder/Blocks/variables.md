---
id: Variables
title: Variables
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Variables

Las variables almacenan valores que pueden leerse y actualizarse entre pilas de bloques y scripts.

## Bloques de comando de variables

### `Establecer variable a` {#block_variables_set_to}

<img src={useBaseUrl('/img/blocks/block_variables_set_to.svg')} alt="block_variables_set_to.svg" />

Establece la variable seleccionada al valor especificado.

- Tipo: bloque de comando
- Uso típico: inicializar estado, sobrescribir valores anteriores

### `Cambiar variable por` {#block_variables_change_by}

<img src={useBaseUrl('/img/blocks/block_variables_change_by.svg')} alt="block_variables_change_by.svg" />

Añade la cantidad especificada a la variable seleccionada.

- Tipo: bloque de comando
- Uso típico: contadores, puntuación, acumulación de distancia/tiempo

## Bloque reportero de variable

<img src={useBaseUrl('/img/blocks/variable.svg')} alt="variable.svg" />

Devuelve el valor actual de la variable seleccionada.

- Tipo: bloque reportero
- Uso típico: usar el valor dentro de operadores, condiciones o comandos

## Notas de uso

- Inicializa variables importantes al inicio del programa.
- Usa `cambiar por` para actualizaciones incrementales.
- Usa nombres descriptivos (`velocidad_objetivo`, `armado`, `vueltas`).