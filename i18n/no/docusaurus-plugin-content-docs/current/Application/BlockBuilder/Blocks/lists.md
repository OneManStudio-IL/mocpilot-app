---
id: Lists
title: Lister
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Lister

Lister lagrer ordnede samlinger av verdier og håndteres av dedikerte listeblokker (rapportør- og stabelblokker).

## Blokker for endring av lister

### `Legg til verdi i liste` {#block_lists_add}

<img src={useBaseUrl('/img/blocks/block_lists_add.svg')} alt="block_lists_add.svg" />

Legger til en verdi på slutten av valgt liste.

### `Sett inn på` {#block_lists_insert_at}

<img src={useBaseUrl('/img/blocks/block_lists_insert_at.svg')} alt="block_lists_insert_at.svg" />

Setter inn en verdi på valgt indeks i listen.

### `Erstatt på` {#block_lists_replace_at}

<img src={useBaseUrl('/img/blocks/block_lists_replace_at.svg')} alt="block_lists_replace_at.svg" />

Erstatter elementet på valgt indeks med en ny verdi.

### `Slett` {#block_lists_delete}

<img src={useBaseUrl('/img/blocks/block_lists_delete.svg')} alt="block_lists_delete.svg" />

Sletter elementet på valgt indeks (eller valgt slettemodus).

### `Tøm alle` {#block_lists_clear_all}

<img src={useBaseUrl('/img/blocks/block_lists_clear_all.svg')} alt="block_lists_clear_all.svg" />

Fjerner alle elementer fra valgt liste.

## Blokker for listeverdi/sjekk

### `Element på` {#block_lists_item_at}

<img src={useBaseUrl('/img/blocks/block_lists_item_at.svg')} alt="block_lists_item_at.svg" />

Returnerer verdien på valgt indeks.

### `Indeks for verdi` {#block_lists_index_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_index_of_value.svg')} alt="block_lists_index_of_value.svg" />

Returnerer indeksen til første samsvarende verdi i listen.

### `Inneholder verdi` {#block_lists_contains_value}

<img src={useBaseUrl('/img/blocks/block_lists_contains_value.svg')} alt="block_lists_contains_value.svg" />

Returnerer om listen inneholder en spesifisert verdi.

### `Størrelse på liste` {#block_lists_size_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_size_of_value.svg')} alt="block_lists_size_of_value.svg" />

Returnerer antall elementer i valgt liste.

## Listeverdi (rapportør)

<img src={useBaseUrl('/img/blocks/list.svg')} alt="list.svg" />

Returnerer gjeldende verdi av valgt liste.

- Type: rapportørblokk
- Outputformat eksempel: `[item1,item2,item3]`
- Typisk bruk: inspisere listeinnhold eller sende listeverdien til kompatible blokker