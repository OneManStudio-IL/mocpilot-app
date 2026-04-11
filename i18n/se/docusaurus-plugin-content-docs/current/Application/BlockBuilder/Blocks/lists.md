---
id: Lists
title: Listor
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Listor

Listor lagrar ordnade samlingar av värden och hanteras med dedikerade listblock av typen Reporter och Stack.

## Liständringsblock

### `Lägg till värde i lista` {#block_lists_add}

<img src={useBaseUrl('/img/blocks/block_lists_add.svg')} alt="block_lists_add.svg" />

Lägger till ett värde i slutet av den valda listan.

### `Infoga vid` {#block_lists_insert_at}

<img src={useBaseUrl('/img/blocks/block_lists_insert_at.svg')} alt="block_lists_insert_at.svg" />

Infogar ett värde vid valt index i listan.

### `Ersätt vid` {#block_lists_replace_at}

<img src={useBaseUrl('/img/blocks/block_lists_replace_at.svg')} alt="block_lists_replace_at.svg" />

Ersätter objektet vid valt index med ett nytt värde.

### `Ta bort` {#block_lists_delete}

<img src={useBaseUrl('/img/blocks/block_lists_delete.svg')} alt="block_lists_delete.svg" />

Tar bort objektet vid valt index (eller enligt valt borttagningsläge).

### `Rensa alla` {#block_lists_clear_all}

<img src={useBaseUrl('/img/blocks/block_lists_clear_all.svg')} alt="block_lists_clear_all.svg" />

Tar bort alla objekt från den valda listan.

## Listvärde-/kontrollblock

### `Objekt vid` {#block_lists_item_at}

<img src={useBaseUrl('/img/blocks/block_lists_item_at.svg')} alt="block_lists_item_at.svg" />

Returnerar värdet vid valt index.

### `Index för värde` {#block_lists_index_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_index_of_value.svg')} alt="block_lists_index_of_value.svg" />

Returnerar indexet för det första matchande värdet i listan.

### `Innehåller värde` {#block_lists_contains_value}

<img src={useBaseUrl('/img/blocks/block_lists_contains_value.svg')} alt="block_lists_contains_value.svg" />

Returnerar om listan innehåller ett angivet värde.

### `Listans storlek` {#block_lists_size_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_size_of_value.svg')} alt="block_lists_size_of_value.svg" />

Returnerar antalet objekt i den valda listan.

## Listvärdesreporter

<img src={useBaseUrl('/img/blocks/list.svg')} alt="list.svg" />

Returnerar det aktuella värdet för den valda listan.

- Typ: reporterblock
- Exempel på utdataformat: `[item1,item2,item3]`
- Typisk användning: inspektera det aktuella listinnehållet eller skicka listvärdet till kompatibla block
