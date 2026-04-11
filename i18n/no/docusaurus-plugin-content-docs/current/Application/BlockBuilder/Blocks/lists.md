---
id: Lists
title: Lists
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Lists

Lists store ordered collections of values and are manipulated by dedicated list Reporter and Stack blocks.

## List mutation blocks

### `Add value to list` {#block_lists_add}

<img src={useBaseUrl('/img/blocks/block_lists_add.svg')} alt="block_lists_add.svg" />

Appends a value to the end of selected list.

### `Insert at` {#block_lists_insert_at}

<img src={useBaseUrl('/img/blocks/block_lists_insert_at.svg')} alt="block_lists_insert_at.svg" />

Inserts a value at selected index in the list.

### `Replace at` {#block_lists_replace_at}

<img src={useBaseUrl('/img/blocks/block_lists_replace_at.svg')} alt="block_lists_replace_at.svg" />

Replaces item at selected index with new value.

### `Delete` {#block_lists_delete}

<img src={useBaseUrl('/img/blocks/block_lists_delete.svg')} alt="block_lists_delete.svg" />

Deletes item at selected index (or selected delete mode).

### `Clear all` {#block_lists_clear_all}

<img src={useBaseUrl('/img/blocks/block_lists_clear_all.svg')} alt="block_lists_clear_all.svg" />

Removes all items from selected list.

## List value/check blocks

### `Item at` {#block_lists_item_at}

<img src={useBaseUrl('/img/blocks/block_lists_item_at.svg')} alt="block_lists_item_at.svg" />

Returns value at selected index.

### `Index of value` {#block_lists_index_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_index_of_value.svg')} alt="block_lists_index_of_value.svg" />

Returns index of the first matching value in list.

### `Contains value` {#block_lists_contains_value}

<img src={useBaseUrl('/img/blocks/block_lists_contains_value.svg')} alt="block_lists_contains_value.svg" />

Returns whether list contains a specified value.

### `Size of list` {#block_lists_size_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_size_of_value.svg')} alt="block_lists_size_of_value.svg" />

Returns number of items in selected list.

## List value reporter

<img src={useBaseUrl('/img/blocks/list.svg')} alt="list.svg" />

Returns the current value of the selected list.

- Type: reporter block
- Output format example: `[item1,item2,item3]`
- Typical use: inspect current list content or pass the list value into compatible blocks