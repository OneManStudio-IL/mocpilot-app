---
id: Lists
title: Lijsten
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Lijsten

Lijsten slaan geordende verzamelingen van waarden op en worden beheerd met speciale lijst-rapporteur- en stapelblokken.

## Lijstbewerkingsblokken

### `Waarde toevoegen aan lijst` {#block_lists_add}

<img src={useBaseUrl('/img/blocks/block_lists_add.svg')} alt="block_lists_add.svg" />

Voegt een waarde toe aan het einde van de geselecteerde lijst.

### `Invoegen op` {#block_lists_insert_at}

<img src={useBaseUrl('/img/blocks/block_lists_insert_at.svg')} alt="block_lists_insert_at.svg" />

Voegt een waarde in op de geselecteerde index in de lijst.

### `Vervangen op` {#block_lists_replace_at}

<img src={useBaseUrl('/img/blocks/block_lists_replace_at.svg')} alt="block_lists_replace_at.svg" />

Vervangt het item op de geselecteerde index door een nieuwe waarde.

### `Verwijderen` {#block_lists_delete}

<img src={useBaseUrl('/img/blocks/block_lists_delete.svg')} alt="block_lists_delete.svg" />

Verwijdert het item op de geselecteerde index (of volgens de gekozen verwijdermodus).

### `Alles wissen` {#block_lists_clear_all}

<img src={useBaseUrl('/img/blocks/block_lists_clear_all.svg')} alt="block_lists_clear_all.svg" />

Verwijdert alle items uit de geselecteerde lijst.

## Lijstwaarde-/controleblokken

### `Item op` {#block_lists_item_at}

<img src={useBaseUrl('/img/blocks/block_lists_item_at.svg')} alt="block_lists_item_at.svg" />

Geeft de waarde terug op de geselecteerde index.

### `Index van waarde` {#block_lists_index_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_index_of_value.svg')} alt="block_lists_index_of_value.svg" />

Geeft de index terug van de eerste overeenkomende waarde in de lijst.

### `Bevat waarde` {#block_lists_contains_value}

<img src={useBaseUrl('/img/blocks/block_lists_contains_value.svg')} alt="block_lists_contains_value.svg" />

Geeft aan of de lijst een bepaalde waarde bevat.

### `Grootte van lijst` {#block_lists_size_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_size_of_value.svg')} alt="block_lists_size_of_value.svg" />

Geeft het aantal items in de geselecteerde lijst terug.

## Lijstwaarde-rapporteur

<img src={useBaseUrl('/img/blocks/list.svg')} alt="list.svg" />

Geeft de huidige waarde van de geselecteerde lijst terug.

- Type: rapporteurblok
- Uitvoerformaat voorbeeld: `[item1,item2,item3]`
- Typisch gebruik: huidige lijstinhoud bekijken of de lijstwaarde doorgeven aan compatibele blokken