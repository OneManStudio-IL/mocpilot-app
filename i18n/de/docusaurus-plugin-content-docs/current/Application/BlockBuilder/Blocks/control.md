---
id: Control
title: Steuerung
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Steuerung

Steuerungsblöcke verwalten den Ausführungsfluss: Warten, Schleifen, Verzweigung und Stoppen von Skripten.

## Warteblöcke

### `Warte` {#block_control_wait_for}
<img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />
Pausiert das aktuelle Skript für eine angegebene Zeit.

### `Warte bis` {#block_control_wait_until}
<img src={useBaseUrl('/img/blocks/block_control_wait_until.svg')} alt="block_control_wait_until.svg" />
Pausiert das aktuelle Skript, bis eine Bedingung wahr wird.

## Schleifenblöcke

### `Wiederhole` {#block_control_repeat_for}
<img src={useBaseUrl('/img/blocks/block_control_repeat_for.svg')} alt="block_control_repeat_for.svg" />
Führt verschachtelte Blöcke eine feste Anzahl von Malen aus.

### `Wiederhole bis` {#block_control_repeat_until}
<img src={useBaseUrl('/img/blocks/block_control_repeat_until.svg')} alt="block_control_repeat_until.svg" />
Wiederholt verschachtelte Blöcke, bis eine Bedingung wahr ist.

### `Fortlaufend` {#block_control_repeat_forever}
<img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />
Führt verschachtelte Blöcke dauerhaft aus, bis Programm oder Skript gestoppt wird.

## Verzweigungsblöcke

### `Wenn` {#block_control_if}
<img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />
Führt verschachtelte Blöcke nur bei wahrer Bedingung aus.

### `Wenn / Sonst` {#block_control_if_else}
<img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />
Führt einen Zweig aus, wenn die Bedingung wahr ist, sonst den alternativen Zweig.

### `Tu dies und dies` {#block_control_do_this_and_this}
<img src={useBaseUrl('/img/blocks/block_control_do_this_and_this.svg')} alt="block_control_do_this_and_this.svg" />
Führt zwei Blockstapel nacheinander in einer Steuerungsoperation aus.

## Stoppblöcke

### `Stop` {#block_control_stop}
<img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />
Stoppt die Skriptausführung (Bereich abhängig von der gewählten Stopp-Option).

- Stopp-Optionen: `alles`, `dieser Stapel`, `und Programm beenden`

### `Andere Stapel stoppen` {#block_control_stop_other_stacks}
<img src={useBaseUrl('/img/blocks/block_control_stop_other_stacks.svg')} alt="block_control_stop_other_stacks.svg" />
Stoppt alle anderen laufenden Stapel, während der aktuelle Stapel weiterläuft.

## Hub-/Steuerungs-Utility-Blöcke

### `Verbindung setzen` {#block_hubs_control_set_connect}
<img src={useBaseUrl('/img/blocks/block_hubs_control_set_connect.svg')} alt="block_hubs_control_set_connect.svg" />
Steuert den Verbindungsstatus des Hubs aus der Skriptlogik.

- Aktionsoptionen: `verbinden`, `trennen`

### `Ist verbunden` {#block_hubs_all_sensors_is_connected}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_connected.svg')} alt="block_hubs_all_sensors_is_connected.svg" />
Gibt zurück, ob der Hub aktuell verbunden ist.

- Typ: boolescher Reporterblock

### `BuWizz 2 Leistungsmodus setzen` {#block_hubs_buwizz_sensors_set_power_mode}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_set_power_mode.svg')} alt="block_hubs_buwizz_sensors_set_power_mode.svg" />
Setzt den Leistungsmodus des BuWizz-2-Hubs.

- Modusoptionen: `Slow`, `Normal`, `Fast`, `Ludicrous`

### `BuWizz 2 Leistungsmodus abfragen` {#block_hubs_buwizz_sensors_get_power_mode}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_get_power_mode.svg')} alt="block_hubs_buwizz_sensors_get_power_mode.svg" />
Gibt den aktuell aktiven Leistungsmodus von BuWizz 2 zurück.

- Ausgabeoptionen: `text`, `index`

### `MouldKing Steuerkanal setzen` {#block_hubs_mouldking_control_set_control_channel}
<img src={useBaseUrl('/img/blocks/block_hubs_mouldking_control_set_control_channel.svg')} alt="block_hubs_mouldking_control_set_control_channel.svg" />
Setzt den aktiven Steuerkanal für unterstützte MouldKing-Hubs/Controller.

- Kanaloptionen: `A`, `B`, `C`

### `MouldKing Steuerkanal abfragen` {#block_hubs_mouldking_control_get_control_channel}
<img src={useBaseUrl('/img/blocks/block_hubs_mouldking_control_get_control_channel.svg')} alt="block_hubs_mouldking_control_get_control_channel.svg" />
Gibt den aktuell aktiven Steuerkanal für unterstützte MouldKing-Hubs/Controller zurück.

- Ausgabeoptionen: `text`, `index`