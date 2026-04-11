---
id: Lists
title: Liste
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Liste

Listele stochează colecții ordonate de valori și sunt manipulate prin blocuri dedicate de tip Reporter și Stack.

## Blocuri de modificare a listelor

### `Adaugă valoare în listă` {#block_lists_add}

<img src={useBaseUrl('/img/blocks/block_lists_add.svg')} alt="block_lists_add.svg" />

Adaugă o valoare la sfârșitul listei selectate.

### `Inserează la` {#block_lists_insert_at}

<img src={useBaseUrl('/img/blocks/block_lists_insert_at.svg')} alt="block_lists_insert_at.svg" />

Inserează o valoare la indexul selectat din listă.

### `Înlocuiește la` {#block_lists_replace_at}

<img src={useBaseUrl('/img/blocks/block_lists_replace_at.svg')} alt="block_lists_replace_at.svg" />

Înlocuiește elementul de la indexul selectat cu o valoare nouă.

### `Șterge` {#block_lists_delete}

<img src={useBaseUrl('/img/blocks/block_lists_delete.svg')} alt="block_lists_delete.svg" />

Șterge elementul de la indexul selectat (sau conform modului de ștergere selectat).

### `Șterge tot` {#block_lists_clear_all}

<img src={useBaseUrl('/img/blocks/block_lists_clear_all.svg')} alt="block_lists_clear_all.svg" />

Elimină toate elementele din lista selectată.

## Blocuri de valoare/verificare listă

### `Element la` {#block_lists_item_at}

<img src={useBaseUrl('/img/blocks/block_lists_item_at.svg')} alt="block_lists_item_at.svg" />

Returnează valoarea de la indexul selectat.

### `Indexul valorii` {#block_lists_index_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_index_of_value.svg')} alt="block_lists_index_of_value.svg" />

Returnează indexul primei valori care corespunde în listă.

### `Conține valoare` {#block_lists_contains_value}

<img src={useBaseUrl('/img/blocks/block_lists_contains_value.svg')} alt="block_lists_contains_value.svg" />

Returnează dacă lista conține o valoare specificată.

### `Dimensiunea listei` {#block_lists_size_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_size_of_value.svg')} alt="block_lists_size_of_value.svg" />

Returnează numărul de elemente din lista selectată.

## Bloc reporter pentru listă

<img src={useBaseUrl('/img/blocks/list.svg')} alt="list.svg" />

Returnează valoarea curentă a listei selectate.

- Tip: bloc reporter
- Exemplu format output: `[item1,item2,item3]`
- Utilizare tipică: inspectarea conținutului listei sau transmiterea valorii listei către blocuri compatibile