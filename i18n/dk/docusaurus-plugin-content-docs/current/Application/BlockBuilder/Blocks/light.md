---
id: Light
title: Lys
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Lys

Denne side dokumenterer blokke i kategorien Lys, som bruges til at styre LED'er og lysudgange på understøttede hubs.

## Almindelige lysblokke

### `Sæt LED-farve` {#block_hubs_all_light_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_led_color.svg')} alt="block_hubs_all_light_set_led_color.svg" />

Sætter hubbens LED-farve ved hjælp af foruddefinerede farvevalg.

- Type: kommandoblok
- Typisk brug: vis status (klar, kører, advarsel, fejl)

### `Tænd lys til` {#block_hubs_all_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_to.svg')} alt="block_hubs_all_light_light_turn_to.svg" />

Sætter den valgte lysudgang til en mållysstyrke/-værdi.

- Type: kommandoblok
- Typisk brug: forlysstyrke, statusintensitet

### `Sluk lys` {#block_hubs_all_light_light_turn_off}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_off.svg')} alt="block_hubs_all_light_light_turn_off.svg" />

Slukker den valgte lysudgang.

- Type: kommandoblok
- Typisk brug: nedlukningssekvens, batteribesparende adfærd

### `Technic Move tænd lys til` {#block_hubs_technicmove_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_light_light_turn_to.svg')} alt="block_hubs_technicmove_light_light_turn_to.svg" />

Variant af `Tænd lys til` for Technic Move hub/lysmål.

- Type: kommandoblok
- Typisk brug: indstil lysudgangsniveau for Move-hub

## BuWizz 3-lysblokke

### `BuWizz 3 sæt LED-farve` {#block_hubs_buwizz3_light_port_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color.svg')} alt="block_hubs_buwizz3_light_port_set_led_color.svg" />

Sætter LED-farven på den valgte BuWizz 3-port med indbyggede farvevalg.

- Type: kommandoblok

### `BuWizz 3 sæt LED-farve (tekst)` {#block_hubs_buwizz3_light_port_set_led_color_string}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_string.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_string.svg" />

Sætter BuWizz 3 LED-farven ved hjælp af en tekstbaseret farveværdi.

- Type: kommandoblok
- Typisk brug: dynamiske farvenavne fra variabler

### `BuWizz 3 sæt LED-farve (RGB)` {#block_hubs_buwizz3_light_port_set_led_color_rgb}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_rgb.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_rgb.svg" />

Sætter BuWizz 3 LED-farven ved hjælp af eksplicitte RGB-kanaler.

- Type: kommandoblok
- Typisk brug: fuld brugerdefineret farvestyring og gradienter

## Noter

- Lysudgangsmuligheder afhænger af hub og tilsluttet enhed.
- Hvis en lyskommando ikke har synlig effekt, skal du kontrollere enhedstype og målport.
- Sensorblokke, der læser reflekteret/omgivelseslys, er dokumenteret på siden **Sensorer**.
