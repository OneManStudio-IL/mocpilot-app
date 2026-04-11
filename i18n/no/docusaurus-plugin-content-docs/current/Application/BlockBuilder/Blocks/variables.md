---
id: Variables
title: Variabler
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Variabler

Variabler lagrer verdier som kan leses og oppdateres på tvers av blokkstabler og skript.

## Kommando-blokker for variabler

### `Sett variabel til` {#block_variables_set_to}

<img src={useBaseUrl('/img/blocks/block_variables_set_to.svg')} alt="block_variables_set_to.svg" />

Setter valgt variabel til en spesifisert verdi.

- Type: kommandoblokk
- Typisk bruk: initialisere tilstand, overskrive tidligere verdi

### `Endre variabel med` {#block_variables_change_by}

<img src={useBaseUrl('/img/blocks/block_variables_change_by.svg')} alt="block_variables_change_by.svg" />

Legger til en spesifisert verdi til valgt variabel.

- Type: kommandoblokk
- Typisk bruk: tellere, poeng, akkumulert avstand/tid

## Variabelverdi (rapportør)

<img src={useBaseUrl('/img/blocks/variable.svg')} alt="variable.svg" />

Returnerer gjeldende verdi av valgt variabel.

- Type: rapportørblokk
- Typisk bruk: bruke variabelverdier i operatorer, betingelser og kommandoinput