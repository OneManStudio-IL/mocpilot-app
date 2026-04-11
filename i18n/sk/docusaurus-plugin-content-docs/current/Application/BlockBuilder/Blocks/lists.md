---
id: Lists
title: Zoznamy
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Zoznamy

Zoznamy ukladajú usporiadané kolekcie hodnôt a pracuje sa s nimi pomocou špeciálnych blokov typu Reporter a Stack.

## Bloky úprav zoznamu

### `Pridaj hodnotu do zoznamu` {#block_lists_add}

<img src={useBaseUrl('/img/blocks/block_lists_add.svg')} alt="block_lists_add.svg" />

Pridá hodnotu na koniec vybraného zoznamu.

### `Vlož na pozíciu` {#block_lists_insert_at}

<img src={useBaseUrl('/img/blocks/block_lists_insert_at.svg')} alt="block_lists_insert_at.svg" />

Vloží hodnotu na zvolený index v zozname.

### `Nahraď na pozícii` {#block_lists_replace_at}

<img src={useBaseUrl('/img/blocks/block_lists_replace_at.svg')} alt="block_lists_replace_at.svg" />

Nahradí položku na zvolenom indexe novou hodnotou.

### `Odstráň` {#block_lists_delete}

<img src={useBaseUrl('/img/blocks/block_lists_delete.svg')} alt="block_lists_delete.svg" />

Odstráni položku na zvolenom indexe (alebo podľa zvoleného režimu odstránenia).

### `Vymaž všetko` {#block_lists_clear_all}

<img src={useBaseUrl('/img/blocks/block_lists_clear_all.svg')} alt="block_lists_clear_all.svg" />

Odstráni všetky položky zo zoznamu.

## Bloky čítania/kontroly zoznamu

### `Položka na pozícii` {#block_lists_item_at}

<img src={useBaseUrl('/img/blocks/block_lists_item_at.svg')} alt="block_lists_item_at.svg" />

Vracia hodnotu na zvolenom indexe.

### `Index hodnoty` {#block_lists_index_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_index_of_value.svg')} alt="block_lists_index_of_value.svg" />

Vracia index prvej zodpovedajúcej hodnoty v zozname.

### `Obsahuje hodnotu` {#block_lists_contains_value}

<img src={useBaseUrl('/img/blocks/block_lists_contains_value.svg')} alt="block_lists_contains_value.svg" />

Vracia, či zoznam obsahuje zadanú hodnotu.

### `Veľkosť zoznamu` {#block_lists_size_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_size_of_value.svg')} alt="block_lists_size_of_value.svg" />

Vracia počet položiek v zozname.

## Blok hodnoty zoznamu

<img src={useBaseUrl('/img/blocks/list.svg')} alt="list.svg" />

Vracia aktuálnu hodnotu vybraného zoznamu.

- Typ: reporter blok  
- Príklad výstupu: `[item1,item2,item3]`  
- Typické použitie: zobrazenie obsahu zoznamu alebo odovzdanie zoznamu do iných blokov