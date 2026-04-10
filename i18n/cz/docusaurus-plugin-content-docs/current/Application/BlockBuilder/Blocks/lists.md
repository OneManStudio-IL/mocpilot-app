---
id: Lists
title: Seznamy
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Seznamy

Seznamy ukládají uspořádané kolekce hodnot a pracuje se s nimi pomocí specializovaných reportovacích a stack bloků.

## Bloky úprav seznamu

### `Přidat hodnotu do seznamu` {#block_lists_add}

<img src={useBaseUrl('/img/blocks/block_lists_add.svg')} alt="block_lists_add.svg" />

Přidá hodnotu na konec vybraného seznamu.

### `Vložit na pozici` {#block_lists_insert_at}

<img src={useBaseUrl('/img/blocks/block_lists_insert_at.svg')} alt="block_lists_insert_at.svg" />

Vloží hodnotu na vybraný index v seznamu.

### `Nahradit na pozici` {#block_lists_replace_at}

<img src={useBaseUrl('/img/blocks/block_lists_replace_at.svg')} alt="block_lists_replace_at.svg" />

Nahradí položku na vybraném indexu novou hodnotou.

### `Smazat` {#block_lists_delete}

<img src={useBaseUrl('/img/blocks/block_lists_delete.svg')} alt="block_lists_delete.svg" />

Smaže položku na vybraném indexu (nebo dle zvoleného režimu mazání).

### `Vymazat vše` {#block_lists_clear_all}

<img src={useBaseUrl('/img/blocks/block_lists_clear_all.svg')} alt="block_lists_clear_all.svg" />

Odstraní všechny položky z vybraného seznamu.

## Bloky čtení/kontroly seznamu

### `Položka na pozici` {#block_lists_item_at}

<img src={useBaseUrl('/img/blocks/block_lists_item_at.svg')} alt="block_lists_item_at.svg" />

Vrací hodnotu na vybraném indexu.

### `Index hodnoty` {#block_lists_index_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_index_of_value.svg')} alt="block_lists_index_of_value.svg" />

Vrací index první odpovídající hodnoty v seznamu.

### `Obsahuje hodnotu` {#block_lists_contains_value}

<img src={useBaseUrl('/img/blocks/block_lists_contains_value.svg')} alt="block_lists_contains_value.svg" />

Vrací, zda seznam obsahuje zadanou hodnotu.

### `Velikost seznamu` {#block_lists_size_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_size_of_value.svg')} alt="block_lists_size_of_value.svg" />

Vrací počet položek ve vybraném seznamu.

## Reportér hodnoty seznamu

<img src={useBaseUrl('/img/blocks/list.svg')} alt="list.svg" />

Vrací aktuální hodnotu vybraného seznamu.

- Typ: reportovací blok
- Ukázka výstupu: `[item1,item2,item3]`
- Typické použití: kontrola obsahu seznamu nebo předání hodnoty seznamu do kompatibilních bloků

## Poznámky k použití

- Seznamy používejte pro historii, waypointy, uložené vzorky senzorů a presety.
- Před čtením podle indexu kontrolujte velikost seznamu.
- Pro vyhledávací logiku kombinujte `Obsahuje hodnotu` a `Index hodnoty`.
