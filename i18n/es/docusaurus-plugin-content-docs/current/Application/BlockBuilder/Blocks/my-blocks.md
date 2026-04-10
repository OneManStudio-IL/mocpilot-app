---
id: MyBlocks
title: Mis bloques
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Mis bloques

Los bloques personalizados te permiten definir tus propios bloques reutilizables.
Esta categoría es conceptualmente similar a crear una función en la programación tradicional: defines el comportamiento una vez y luego lo llamas muchas veces.

## Bloques principales

### `Crear un bloque`

Crea una nueva definición de bloque personalizado.

- Tipo: bloque de definición/configuración
- Uso típico: agrupar lógica repetida en un bloque con nombre

### `Mi bloque` (bloque de llamada)

Llama a un bloque personalizado previamente creado.

- Tipo: bloque de pila (llamada de comando personalizado)
- Uso típico: reutilizar la misma lógica en múltiples lugares sin duplicar bloques

## Ejemplos con diferentes parámetros

Estos ejemplos muestran bloques personalizados con distintas combinaciones de argumentos.

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758091855.svg')} alt="block_myblock_1775758091855.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758113259.svg')} alt="block_myblock_1775758113259.svg" />
</div>

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758130609.svg')} alt="block_myblock_1775758130609.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758145135.svg')} alt="block_myblock_1775758145135.svg" />
</div>

## Ejemplo de uso en una pila de programa

<img src={useBaseUrl('/img/my-blocks/my-blocks-usage-example.png')} alt="my-blocks-usage-example.png" />

Este ejemplo muestra una llamada a un bloque personalizado bajo `cuando el programa inicia`, mientras que la pila `definir mi bloque` contiene la lógica reutilizable del motor.

- Flujo típico: llamar bloques personalizados desde eventos
- Beneficio: una definición, múltiples usos

## Vista del editor de bloques

<img src={useBaseUrl('/img/my-blocks/my-blocks-editor-cropped.png')} alt="my-blocks-editor-cropped.png" />

El editor **Crear un bloque** se utiliza para diseñar la firma del bloque personalizado.  
Puedes añadir etiquetas e inputs (por ejemplo números/texto y valores booleanos) y luego definir la lógica dentro de la pila del bloque.

## Por qué usar bloques personalizados

- Reutilización: escribe una vez, usa muchas veces.
- Legibilidad: reemplaza bloques largos por un nombre claro.
- Mantenimiento: actualiza la lógica en un solo lugar.
- Estructura: divide programas grandes en partes más pequeñas.

## Notas de uso

- Los bloques personalizados son a nivel de proyecto y se usan dentro del mismo contexto.
- Usa nombres descriptivos que expliquen la intención, no la implementación.