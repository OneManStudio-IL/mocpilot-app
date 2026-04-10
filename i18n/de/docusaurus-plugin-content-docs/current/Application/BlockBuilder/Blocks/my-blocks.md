---
id: MyBlocks
title: Meine Blöcke
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Meine Blöcke

Mit „Meine Blöcke“ können Sie eigene wiederverwendbare Blöcke definieren.
Diese Kategorie ist konzeptionell ähnlich wie Funktionen in klassischer Programmierung: Verhalten einmal definieren und vielfach aufrufen.

## Kernblöcke von Meine Blöcke

### `Block erstellen`

Erstellt eine neue benutzerdefinierte Blockdefinition.

- Typ: Definitions-/Setup-Block
- Typische Verwendung: Wiederholte Logik in einem benannten Block bündeln

### `MeinBlock` (Aufrufblock)

Ruft einen zuvor erstellten benutzerdefinierten Block auf.

- Typ: Stapelblock (benutzerdefinierter Befehlsaufruf)
- Typische Verwendung: Gleiche Logik an mehreren Stellen nutzen, ohne Blockstapel zu duplizieren

## Beispiele mit variablen Argumenten

Diese Beispiele zeigen benutzerdefinierte Blöcke mit unterschiedlichen Argumentsignaturen.

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758091855.svg')} alt="block_myblock_1775758091855.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758113259.svg')} alt="block_myblock_1775758113259.svg" />
</div>

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758130609.svg')} alt="block_myblock_1775758130609.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758145135.svg')} alt="block_myblock_1775758145135.svg" />
</div>

## Beispielverwendung im Programmstapel

<img src={useBaseUrl('/img/my-blocks/my-blocks-usage-example.png')} alt="my-blocks-usage-example.png" />

Dieses Beispiel zeigt einen Aufruf eines benutzerdefinierten Blocks unter `Wenn Programm startet`, während der Stapel `Definiere meinen Block` die wiederverwendbare Motorlogik enthält.

- Typischer Ablauf: Benutzerdefinierten Block aus Ereignisstapeln aufrufen
- Vorteil: Eine Definition, viele Aufrufstellen

## Ansicht des My-Block-Editors

<img src={useBaseUrl('/img/my-blocks/my-blocks-editor-cropped.png')} alt="my-blocks-editor-cropped.png" />

Der Editor „Block erstellen“ wird verwendet, um die Signatur des benutzerdefinierten Blocks zu entwerfen.
Sie können Beschriftungen und Eingaben hinzufügen (z. B. Zahl/Text und Boolean-Eingaben) und danach die Implementierungslogik im Definitionsstapel festlegen.

## Warum Meine Blöcke verwenden

- Wiederverwendbarkeit: Einmal schreiben, oft aufrufen.
- Lesbarkeit: Lange wiederholte Stapel durch einen aussagekräftigen Namen ersetzen.
- Wartbarkeit: Logik an einer Stelle ändern statt in vielen Kopien.
- Struktur: Große Programme in kleinere logische Einheiten aufteilen.

## Hinweise

- Benutzerdefinierte Blöcke gelten auf Projektebene und sind zur Wiederverwendung im selben Profil/Projekt gedacht.
- Bevorzugen Sie beschreibende Namen, die die Absicht erklären, nicht die Implementierungsdetails.
