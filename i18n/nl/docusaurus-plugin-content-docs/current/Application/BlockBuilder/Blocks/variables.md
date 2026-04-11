---
id: Variables
title: Variabelen
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Variabelen

Variabelen slaan waarden op die kunnen worden gelezen en bijgewerkt in blokstapels en scripts.

## Variabele opdrachtblokken

### `Stel variabele in op` {#block_variables_set_to}

<img src={useBaseUrl('/img/blocks/block_variables_set_to.svg')} alt="block_variables_set_to.svg" />

Stelt de geselecteerde variabele in op de opgegeven waarde.

- Type: opdrachtblok
- Typisch gebruik: initialiseren van status, overschrijven van eerdere waarde

### `Verander variabele met` {#block_variables_change_by}

<img src={useBaseUrl('/img/blocks/block_variables_change_by.svg')} alt="block_variables_change_by.svg" />

Voegt de opgegeven hoeveelheid toe aan de geselecteerde variabele.

- Type: opdrachtblok
- Typisch gebruik: tellers, score, geaccumuleerde afstand/tijd

## Variabele waarde-rapporteur

<img src={useBaseUrl('/img/blocks/variable.svg')} alt="variable.svg" />

Geeft de huidige waarde van de geselecteerde variabele terug.

- Type: rapporteurblok
- Typisch gebruik: variabele waarde gebruiken binnen operatoren, voorwaarden en opdrachtinvoer