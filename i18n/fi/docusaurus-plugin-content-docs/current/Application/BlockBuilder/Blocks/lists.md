---
id: Lists
title: Listat
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Listat

Listat tallentavat järjestettyjä arvojoukkoja, ja niitä käsitellään erityisillä listojen Reporter- ja Stack-lohkoilla.

## Listan muokkauslohkot

### `Lisää arvo listaan` {#block_lists_add}

<img src={useBaseUrl('/img/blocks/block_lists_add.svg')} alt="block_lists_add.svg" />

Lisää arvon valitun listan loppuun.

### `Lisää kohtaan` {#block_lists_insert_at}

<img src={useBaseUrl('/img/blocks/block_lists_insert_at.svg')} alt="block_lists_insert_at.svg" />

Lisää arvon valittuun kohtaan listassa.

### `Korvaa kohdassa` {#block_lists_replace_at}

<img src={useBaseUrl('/img/blocks/block_lists_replace_at.svg')} alt="block_lists_replace_at.svg" />

Korvaa valitun kohdan arvon uudella arvolla.

### `Poista` {#block_lists_delete}

<img src={useBaseUrl('/img/blocks/block_lists_delete.svg')} alt="block_lists_delete.svg" />

Poistaa arvon valitusta kohdasta (tai valitun poistotavan mukaan).

### `Tyhjennä lista` {#block_lists_clear_all}

<img src={useBaseUrl('/img/blocks/block_lists_clear_all.svg')} alt="block_lists_clear_all.svg" />

Poistaa kaikki arvot listasta.

## Listan arvo- ja tarkistuslohkot

### `Arvo kohdassa` {#block_lists_item_at}

<img src={useBaseUrl('/img/blocks/block_lists_item_at.svg')} alt="block_lists_item_at.svg" />

Palauttaa arvon valitusta kohdasta.

### `Arvon indeksi` {#block_lists_index_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_index_of_value.svg')} alt="block_lists_index_of_value.svg" />

Palauttaa ensimmäisen vastaavan arvon indeksin.

### `Sisältää arvon` {#block_lists_contains_value}

<img src={useBaseUrl('/img/blocks/block_lists_contains_value.svg')} alt="block_lists_contains_value.svg" />

Palauttaa, sisältääkö lista annetun arvon.

### `Listan koko` {#block_lists_size_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_size_of_value.svg')} alt="block_lists_size_of_value.svg" />

Palauttaa listan alkioiden määrän.

## Listan arvolohko

<img src={useBaseUrl('/img/blocks/list.svg')} alt="list.svg" />

Palauttaa valitun listan nykyisen arvon.

- Tyyppi: reporter-lohko
- Esimerkkimuoto: `[item1,item2,item3]`
- Tyypillinen käyttö: tarkastella listaa tai käyttää sitä muissa lohkoissa

## Käyttöhuomiot

- Käytä listoja historiatietoihin, reittipisteisiin, mittauksiin ja asetuksiin.
- Tarkista listan koko ennen indeksin käyttöä.
- Yhdistä `sisältää` ja `indeksi` hakulogiikkaan.