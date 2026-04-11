---
id: Variables
title: Muuttujat
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Muuttujat

Muuttujat tallentavat arvoja, joita voidaan lukea ja päivittää lohkopinojen ja skriptien välillä.

## Muuttujien komentolohkot

### `Aseta muuttuja arvoon` {#block_variables_set_to}

<img src={useBaseUrl('/img/blocks/block_variables_set_to.svg')} alt="block_variables_set_to.svg" />

Asettaa valitun muuttujan annettuun arvoon.

- Tyyppi: komentolohko
- Tyypillinen käyttö: alustaa tila, korvaa aiempi arvo

### `Muuta muuttujaa määrällä` {#block_variables_change_by}

<img src={useBaseUrl('/img/blocks/block_variables_change_by.svg')} alt="block_variables_change_by.svg" />

Lisää annetun määrän valittuun muuttujaan.

- Tyyppi: komentolohko
- Tyypillinen käyttö: laskurit, pisteet, kertyvä aika/etäisyys

## Muuttujan arvolohko

<img src={useBaseUrl('/img/blocks/variable.svg')} alt="variable.svg" />

Palauttaa valitun muuttujan nykyisen arvon.

- Tyyppi: reporter-lohko
- Tyypillinen käyttö: käyttää muuttujan arvoa operaattoreissa, ehdoissa ja komentojen syötteinä