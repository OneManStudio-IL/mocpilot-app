---
id: Variables
title: Variabler
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Variabler

Variabler gemmer værdier, som kan læses og opdateres på tværs af blokke og scripts.

## Variabel kommando-blokke

### `Sæt variabel til` {#block_variables_set_to}

<img src={useBaseUrl('/img/blocks/block_variables_set_to.svg')} alt="block_variables_set_to.svg" />

Sætter den valgte variabel til den angivne værdi.

- Type: kommando-blok
- Typisk brug: initialisere tilstand, overskrive tidligere værdi

### `Ændr variabel med` {#block_variables_change_by}

<img src={useBaseUrl('/img/blocks/block_variables_change_by.svg')} alt="block_variables_change_by.svg" />

Tilføjer den angivne værdi til den valgte variabel.

- Type: kommando-blok
- Typisk brug: tællere, score, akkumuleret afstand/tid

## Variabel værdi-rapportør

<img src={useBaseUrl('/img/blocks/variable.svg')} alt="variable.svg" />

Returnerer den aktuelle værdi af den valgte variabel.

- Type: rapportør-blok
- Typisk brug: brug variabelværdi i operatorer, betingelser og kommando-input

## Brugsnoter

- Initialisér vigtige variabler ved programmets start.
- Brug `ændr med` til trinvise opdateringer for at undgå gentagen hent/sæt-logik.
- Hold variabelnavne beskrivende (`speed_target`, `is_armed`, `lap_count`).