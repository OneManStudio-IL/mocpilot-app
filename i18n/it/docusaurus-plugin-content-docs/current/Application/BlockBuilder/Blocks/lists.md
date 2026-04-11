---
id: Lists
title: Liste
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Liste

Le liste memorizzano raccolte ordinate di valori e sono gestite tramite blocchi dedicati di tipo Reporter e Stack.

## Blocchi di modifica delle liste

### `Aggiungi valore alla lista` {#block_lists_add}

<img src={useBaseUrl('/img/blocks/block_lists_add.svg')} alt="block_lists_add.svg" />

Aggiunge un valore alla fine della lista selezionata.

### `Inserisci alla posizione` {#block_lists_insert_at}

<img src={useBaseUrl('/img/blocks/block_lists_insert_at.svg')} alt="block_lists_insert_at.svg" />

Inserisce un valore all’indice selezionato nella lista.

### `Sostituisci alla posizione` {#block_lists_replace_at}

<img src={useBaseUrl('/img/blocks/block_lists_replace_at.svg')} alt="block_lists_replace_at.svg" />

Sostituisce l’elemento all’indice selezionato con un nuovo valore.

### `Elimina` {#block_lists_delete}

<img src={useBaseUrl('/img/blocks/block_lists_delete.svg')} alt="block_lists_delete.svg" />

Elimina l’elemento all’indice selezionato (o secondo la modalità di eliminazione scelta).

### `Cancella tutto` {#block_lists_clear_all}

<img src={useBaseUrl('/img/blocks/block_lists_clear_all.svg')} alt="block_lists_clear_all.svg" />

Rimuove tutti gli elementi dalla lista selezionata.

## Blocchi di lettura/verifica delle liste

### `Elemento alla posizione` {#block_lists_item_at}

<img src={useBaseUrl('/img/blocks/block_lists_item_at.svg')} alt="block_lists_item_at.svg" />

Restituisce il valore all’indice selezionato.

### `Indice del valore` {#block_lists_index_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_index_of_value.svg')} alt="block_lists_index_of_value.svg" />

Restituisce l’indice del primo valore corrispondente nella lista.

### `Contiene valore` {#block_lists_contains_value}

<img src={useBaseUrl('/img/blocks/block_lists_contains_value.svg')} alt="block_lists_contains_value.svg" />

Restituisce se la lista contiene un valore specificato.

### `Dimensione della lista` {#block_lists_size_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_size_of_value.svg')} alt="block_lists_size_of_value.svg" />

Restituisce il numero di elementi nella lista selezionata.

## Blocco reporter della lista

<img src={useBaseUrl('/img/blocks/list.svg')} alt="list.svg" />

Restituisce il valore corrente della lista selezionata.

- Tipo: blocco reporter
- Esempio di formato output: `[item1,item2,item3]`
- Utilizzo tipico: ispezionare il contenuto corrente della lista o passare la lista ad altri blocchi compatibili