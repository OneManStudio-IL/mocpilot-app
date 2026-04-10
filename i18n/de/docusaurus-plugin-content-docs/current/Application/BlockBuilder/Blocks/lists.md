---
id: Lists
title: Listen
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Listen

Listen speichern geordnete Wertsammlungen und werden mit speziellen Listen-Reporter- und Stapelblöcken bearbeitet.

## Listen-Änderungsblöcke

### `Wert zu Liste hinzufügen` {#block_lists_add}

<img src={useBaseUrl('/img/blocks/block_lists_add.svg')} alt="block_lists_add.svg" />

Hängt einen Wert ans Ende der ausgewählten Liste an.

### `Einfügen bei` {#block_lists_insert_at}

<img src={useBaseUrl('/img/blocks/block_lists_insert_at.svg')} alt="block_lists_insert_at.svg" />

Fügt einen Wert am gewählten Index in die Liste ein.

### `Ersetzen bei` {#block_lists_replace_at}

<img src={useBaseUrl('/img/blocks/block_lists_replace_at.svg')} alt="block_lists_replace_at.svg" />

Ersetzt das Element am gewählten Index durch einen neuen Wert.

### `Löschen` {#block_lists_delete}

<img src={useBaseUrl('/img/blocks/block_lists_delete.svg')} alt="block_lists_delete.svg" />

Löscht ein Element am gewählten Index (oder nach gewähltem Löschmodus).

### `Alles löschen` {#block_lists_clear_all}

<img src={useBaseUrl('/img/blocks/block_lists_clear_all.svg')} alt="block_lists_clear_all.svg" />

Entfernt alle Einträge aus der ausgewählten Liste.

## Listen-Wert-/Prüfblöcke

### `Element bei` {#block_lists_item_at}

<img src={useBaseUrl('/img/blocks/block_lists_item_at.svg')} alt="block_lists_item_at.svg" />

Gibt den Wert am gewählten Index zurück.

### `Index von Wert` {#block_lists_index_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_index_of_value.svg')} alt="block_lists_index_of_value.svg" />

Gibt den Index des ersten passenden Werts in der Liste zurück.

### `Enthält Wert` {#block_lists_contains_value}

<img src={useBaseUrl('/img/blocks/block_lists_contains_value.svg')} alt="block_lists_contains_value.svg" />

Gibt zurück, ob die Liste einen bestimmten Wert enthält.

### `Größe der Liste` {#block_lists_size_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_size_of_value.svg')} alt="block_lists_size_of_value.svg" />

Gibt die Anzahl der Elemente der ausgewählten Liste zurück.

## Listenwert-Reporter

<img src={useBaseUrl('/img/blocks/list.svg')} alt="list.svg" />

Gibt den aktuellen Wert der ausgewählten Liste zurück.

- Typ: Reporterblock
- Beispielausgabe: `[item1,item2,item3]`
- Typische Verwendung: Aktuellen Listeninhalt prüfen oder Listenwert an kompatible Blöcke übergeben

## Hinweise zur Verwendung

- Listen für Verlaufspuffer, Wegpunkte, aufgezeichnete Sensorwerte und Presets verwenden.
- Vor dem Lesen per Index die Listengröße prüfen, um ungültigen Zugriff zu vermeiden.
- `Enthält` und `Index von` für Suchlogik kombinieren.
