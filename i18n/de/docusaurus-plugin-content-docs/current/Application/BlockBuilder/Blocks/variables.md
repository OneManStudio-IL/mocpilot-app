---
id: Variables
title: Variablen
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Variablen

Variablen speichern Werte, die über Blockstapel und Skripte hinweg gelesen und aktualisiert werden können.

## Variablen-Befehlsblöcke

### `Setze Variable auf` {#block_variables_set_to}

<img src={useBaseUrl('/img/blocks/block_variables_set_to.svg')} alt="block_variables_set_to.svg" />

Setzt die ausgewählte Variable auf den angegebenen Wert.

- Typ: Befehlsblock
- Typische Verwendung: Zustand initialisieren, vorherigen Wert überschreiben

### `Ändere Variable um` {#block_variables_change_by}

<img src={useBaseUrl('/img/blocks/block_variables_change_by.svg')} alt="block_variables_change_by.svg" />

Addiert den angegebenen Betrag zur ausgewählten Variable.

- Typ: Befehlsblock
- Typische Verwendung: Zähler, Punktestand, kumulierte Strecke/Zeit

## Variablenwert-Reporter

<img src={useBaseUrl('/img/blocks/variable.svg')} alt="variable.svg" />

Gibt den aktuellen Wert der ausgewählten Variable zurück.

- Typ: Reporterblock
- Typische Verwendung: Variablenwert in Operatoren, Bedingungen und Befehls-Eingaben nutzen

## Hinweise zur Verwendung

- Wichtige Variablen beim Programmstart initialisieren.
- `Ändere um` für inkrementelle Updates verwenden, um wiederholte Get/Set-Logik zu vermeiden.
- Variablennamen aussagekräftig halten (`speed_target`, `is_armed`, `lap_count`).
