---
id: Lists
title: Listas
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Listas

Las listas almacenan colecciones ordenadas de valores y se manipulan mediante bloques específicos de tipo Reporter y Stack.

## Bloques de modificación de listas

### `Agregar valor a la lista` {#block_lists_add}

<img src={useBaseUrl('/img/blocks/block_lists_add.svg')} alt="block_lists_add.svg" />

Añade un valor al final de la lista seleccionada.

### `Insertar en` {#block_lists_insert_at}

<img src={useBaseUrl('/img/blocks/block_lists_insert_at.svg')} alt="block_lists_insert_at.svg" />

Inserta un valor en el índice seleccionado de la lista.

### `Reemplazar en` {#block_lists_replace_at}

<img src={useBaseUrl('/img/blocks/block_lists_replace_at.svg')} alt="block_lists_replace_at.svg" />

Reemplaza el elemento en el índice seleccionado con un nuevo valor.

### `Eliminar` {#block_lists_delete}

<img src={useBaseUrl('/img/blocks/block_lists_delete.svg')} alt="block_lists_delete.svg" />

Elimina el elemento en el índice seleccionado (o según el modo de eliminación).

### `Borrar todo` {#block_lists_clear_all}

<img src={useBaseUrl('/img/blocks/block_lists_clear_all.svg')} alt="block_lists_clear_all.svg" />

Elimina todos los elementos de la lista seleccionada.

## Bloques de valor / comprobación

### `Elemento en` {#block_lists_item_at}

<img src={useBaseUrl('/img/blocks/block_lists_item_at.svg')} alt="block_lists_item_at.svg" />

Devuelve el valor en el índice seleccionado.

### `Índice de valor` {#block_lists_index_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_index_of_value.svg')} alt="block_lists_index_of_value.svg" />

Devuelve el índice de la primera coincidencia en la lista.

### `Contiene valor` {#block_lists_contains_value}

<img src={useBaseUrl('/img/blocks/block_lists_contains_value.svg')} alt="block_lists_contains_value.svg" />

Devuelve si la lista contiene un valor específico.

### `Tamaño de la lista` {#block_lists_size_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_size_of_value.svg')} alt="block_lists_size_of_value.svg" />

Devuelve el número de elementos de la lista.

## Bloque reportero de lista

<img src={useBaseUrl('/img/blocks/list.svg')} alt="list.svg" />

Devuelve el valor actual de la lista seleccionada.

- Tipo: bloque reportero
- Ejemplo de salida: `[item1,item2,item3]`
- Uso típico: inspeccionar el contenido o pasar la lista a otros bloques