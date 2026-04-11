---
id: Light
title: Licht
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Licht

Diese Seite dokumentiert die Blöcke der Kategorie Licht zum Steuern von LEDs und Lichtausgängen auf unterstützten Hubs.

## Allgemeine Lichtblöcke

### `LED-Farbe setzen` {#block_hubs_all_light_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_led_color.svg')} alt="block_hubs_all_light_set_led_color.svg" />

Setzt die LED-Farbe des Hubs über vordefinierte Farboptionen.

- Typ: Befehlsblock
- Typische Verwendung: Status anzeigen (bereit, läuft, Warnung, Fehler)

### `Licht einschalten auf` {#block_hubs_all_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_to.svg')} alt="block_hubs_all_light_light_turn_to.svg" />

Setzt den gewählten Lichtausgang auf einen Zielwert bzw. eine Helligkeit.

- Typ: Befehlsblock
- Typische Verwendung: Scheinwerferhelligkeit, Statusintensität

### `Licht ausschalten` {#block_hubs_all_light_light_turn_off}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_off.svg')} alt="block_hubs_all_light_light_turn_off.svg" />

Schaltet den gewählten Lichtausgang aus.

- Typ: Befehlsblock
- Typische Verwendung: Abschaltsequenz, Energiesparen

### `Technic Move Licht einschalten auf` {#block_hubs_technicmove_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_light_light_turn_to.svg')} alt="block_hubs_technicmove_light_light_turn_to.svg" />

Variante von `Licht einschalten auf` für Technic Move Hub/Lichtziel.

- Typ: Befehlsblock
- Typische Verwendung: Lichtausgang des Move-Hubs setzen

## BuWizz 3 Lichtblöcke

### `BuWizz 3 LED-Farbe setzen` {#block_hubs_buwizz3_light_port_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color.svg')} alt="block_hubs_buwizz3_light_port_set_led_color.svg" />

Setzt die LED-Farbe am gewählten BuWizz-3-Port mit integrierten Farboptionen.

- Typ: Befehlsblock

### `BuWizz 3 LED-Farbe setzen (String)` {#block_hubs_buwizz3_light_port_set_led_color_string}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_string.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_string.svg" />

Setzt die BuWizz-3-LED-Farbe über einen Textwert.

- Typ: Befehlsblock
- Typische Verwendung: Dynamische Farbnamen aus Variablen

### `BuWizz 3 LED-Farbe setzen (RGB)` {#block_hubs_buwizz3_light_port_set_led_color_rgb}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_rgb.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_rgb.svg" />

Setzt die BuWizz-3-LED-Farbe über explizite RGB-Kanäle.

- Typ: Befehlsblock
- Typische Verwendung: Volle benutzerdefinierte Farbkonteolle und Verläufe