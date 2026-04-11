---
id: Variables
title: Variabler
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Variabler

Variabler lagrar värden som kan läsas och uppdateras mellan blockstaplar och skript.

## Variabelkommandoblock

### `Sätt variabel till` {#block_variables_set_to}

<img src={useBaseUrl('/img/blocks/block_variables_set_to.svg')} alt="block_variables_set_to.svg" />

Sätter den valda variabeln till det angivna värdet.

- Typ: kommandoblock
- Typisk användning: initiera tillstånd, skriva över tidigare värde

### `Ändra variabel med` {#block_variables_change_by}

<img src={useBaseUrl('/img/blocks/block_variables_change_by.svg')} alt="block_variables_change_by.svg" />

Lägger till det angivna värdet till den valda variabeln.

- Typ: kommandoblock
- Typisk användning: räknare, poäng, ackumulerat avstånd/tid

## Reporter för variabelvärde

<img src={useBaseUrl('/img/blocks/variable.svg')} alt="variable.svg" />

Returnerar det aktuella värdet för den valda variabeln.

- Typ: reporterblock
- Typisk användning: använd variabelvärdet i operatorer, villkor och kommandoinmatningar
