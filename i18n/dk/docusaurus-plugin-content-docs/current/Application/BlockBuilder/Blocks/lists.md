---
id: Lists
title: Lister
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Lister

Lister gemmer ordnede samlinger af værdier og håndteres via dedikerede liste-Reporter- og Stack-blokke.

## Liste ændrings-blokke

### `Tilføj værdi til liste` {#block_lists_add}

<img src={useBaseUrl('/img/blocks/block_lists_add.svg')} alt="block_lists_add.svg" />

Tilføjer en værdi til slutningen af den valgte liste.

### `Indsæt ved` {#block_lists_insert_at}

<img src={useBaseUrl('/img/blocks/block_lists_insert_at.svg')} alt="block_lists_insert_at.svg" />

Indsætter en værdi ved det valgte indeks i listen.

### `Erstat ved` {#block_lists_replace_at}

<img src={useBaseUrl('/img/blocks/block_lists_replace_at.svg')} alt="block_lists_replace_at.svg" />

Erstatter elementet ved det valgte indeks med en ny værdi.

### `Slet` {#block_lists_delete}

<img src={useBaseUrl('/img/blocks/block_lists_delete.svg')} alt="block_lists_delete.svg" />

Sletter elementet ved det valgte indeks (eller valgt sletningstilstand).

### `Ryd alle` {#block_lists_clear_all}

<img src={useBaseUrl('/img/blocks/block_lists_clear_all.svg')} alt="block_lists_clear_all.svg" />

Fjerner alle elementer fra den valgte liste.

## Liste værdi-/tjek-blokke

### `Element ved` {#block_lists_item_at}

<img src={useBaseUrl('/img/blocks/block_lists_item_at.svg')} alt="block_lists_item_at.svg" />

Returnerer værdien ved det valgte indeks.

### `Indeks for værdi` {#block_lists_index_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_index_of_value.svg')} alt="block_lists_index_of_value.svg" />

Returnerer indekset for den første matchende værdi i listen.

### `Indeholder værdi` {#block_lists_contains_value}

<img src={useBaseUrl('/img/blocks/block_lists_contains_value.svg')} alt="block_lists_contains_value.svg" />

Returnerer om listen indeholder en angiven værdi.

### `Liste størrelse` {#block_lists_size_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_size_of_value.svg')} alt="block_lists_size_of_value.svg" />

Returnerer antallet af elementer i den valgte liste.

## Liste værdi-reporter

<img src={useBaseUrl('/img/blocks/list.svg')} alt="list.svg" />

Returnerer den aktuelle værdi af den valgte liste.

- Type: reporter-blok
- Outputformat eksempel: `[item1,item2,item3]`
- Typisk brug: inspicere listeindhold eller sende listen til kompatible blokke

## Brugsnoter

- Brug lister til historik, waypoints, registrerede sensordata og forudindstillinger.
- Tjek listens størrelse før opslag med indeks for at undgå ugyldig adgang.
- Kombinér `indeholder` og `indeks for` til søgelogik.