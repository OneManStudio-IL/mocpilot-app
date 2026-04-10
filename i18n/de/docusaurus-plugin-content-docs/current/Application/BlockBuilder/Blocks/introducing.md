---
id: BlocksIntroducing
title: Einführung In Blöcke
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Einführung In Blöcke

MOCPilot verwendet ein visuelles Block-Programmiersystem, das Scratch ähnlich ist.
Jeder Block hat eine bestimmte Rolle, und gültige Kombinationen definieren den Kontroll- und Datenfluss im Skript.
Per Drag-and-Drop und Scratch-ähnlichen Interaktionsmustern lassen sich Programme bequem und vertraut erstellen.

:::warning Kompatibilitätshinweis
Dies ist ein anderes Blocksystem mit eigenem Blocksatz und eigenem Verhalten.
MOCPilot-Programme sind nicht mit Scratch-Projekten kompatibel: MOCPilot-Programme können nicht in Scratch importiert werden, und Scratch-Programme können nicht in MOCPilot importiert werden.
:::

## Blockformen und Bedeutung

### Hutblöcke

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />
  <img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />
</div>

Starten ein Skript, wenn ein bestimmtes Ereignis eintritt. Blöcke können nur darunter angehängt werden.

---

### Stapelblöcke

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
</div>

Haupt-Befehlsblöcke, die Aktionen ausführen.

---

### C-Blöcke

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />
</div>

C-förmige Steuerblöcke mit verschachtelten Blockstapeln (Schleifen/Bedingungen).

---

### Reporterblöcke

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />
</div>

Geben Werte wie Zahlen oder Text zurück.

---

### Boolesche Blöcke

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />
</div>

Geben nur `true` oder `false` zurück und werden typischerweise in Bedingungen verwendet.

---

### Endblöcke

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />
</div>

Beenden Skripte und erlauben keine Blöcke darunter.

---

### Blockstapel

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks_stack.svg')} alt="blocks_stack.svg" />
</div>

Ein Blockstapel ist eine Folge verbundener Blöcke, die als ein Skriptfluss von oben nach unten ausgeführt wird.
Stapel beginnen meist mit einem Ereignisblock und führen dann die angehängten Blöcke der Reihe nach aus.

---

## Ausführungsmodell von Skripten

- Ein Skript startet normalerweise mit einem Ereignisblock.
- Verbundene Stapelblöcke laufen von oben nach unten.
- Mehrere Skripte können parallel laufen.
- Nachrichten-/Broadcast-Blöcke werden zur Synchronisierung verwendet.
- Ein Blockstapel ist eine Folge miteinander verbundener Blöcke.

## Daten und Werte

- Reporterblöcke können in Befehls-/Bedingungseingaben verschachtelt werden.
- Variablen speichern wiederverwendbare Werte über Blöcke und Skripte hinweg.
- Listen speichern geordnete Sammlungen für Verlauf, Warteschlangen und Nachschlagewerte.

## Ereignisse und Timing

- Ereignisblöcke reagieren auf Benutzereingaben, Hub-Status, Sensoren oder Nachrichten.
- Zeitgeber- und sensorbasierte Ereignisse können häufig auslösen.
- Verwenden Sie Schwellenwerte, Filterung oder kurze Wartezeiten, um wiederholte Auslöser zu reduzieren.

## Hub, Ports und Controller

- Hub-Blöcke arbeiten im Hub- und Port-Kontext.
- Einige Blöcke sind nur für bestimmte Hub-Familien/Geräte verfügbar.
- Dashboard- und Gamepad-Blöcke liefern Laufzeiteingaben und UI-Steuerung.

## Empfohlener Ablauf

1. Beginnen Sie mit einem Ereignisblock und einem minimalen Skript.
2. Prüfen Sie frühzeitig Richtung und Bereiche von Motoren/Sensoren.
3. Lagern Sie wiederholte Logik mit Nachrichten und Hilfsskripten aus.
4. Fügen Sie vor dem finalen Tuning Schutzmechanismen hinzu (Grenzen, Stopps, Fallback-Werte).

## Häufige Fehler

- Fehlt der Ereignis-Einstiegsblock, startet das Skript nie.
- Eine falsche Hub-/Port-Auswahl führt zu keinem sichtbaren Effekt.
- Das Mischen von Werttypen (Text/Zahl/Boolean) kann zu ungültiger Logik führen.
- Hochfrequente Ereignisse ohne Filterung können das Verhalten überlasten.

## Dokumentationsstruktur in diesem Abschnitt

Verwenden Sie die Kategorieseiten in dieser Reihenfolge:

- Licht
- Motoren
- Sensoren
- Ereignisse
- Steuerung
- Operatoren
- Variablen
- Listen
- Meine Blöcke
- Dashboard-Controller
- Gamepad
