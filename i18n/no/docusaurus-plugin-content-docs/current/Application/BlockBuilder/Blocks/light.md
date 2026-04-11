---
id: Light
title: Lys
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Lys

Denne siden dokumenterer blokker i Lys-kategorien som brukes til å kontrollere LED-er og lysutganger på støttede huber.

## Vanlige lysblokker

### `Sett LED-farge` {#block_hubs_all_light_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_led_color.svg')} alt="block_hubs_all_light_set_led_color.svg" />

Setter hubens LED-farge ved hjelp av forhåndsdefinerte fargevalg.

- Type: kommandoblokk
- Typisk bruk: vise tilstand (klar, kjører, advarsel, feil)

### `Sett lys til` {#block_hubs_all_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_to.svg')} alt="block_hubs_all_light_light_turn_to.svg" />

Setter valgt lysutgang til en målverdi/lysstyrke.

- Type: kommandoblokk
- Typisk bruk: frontlys, statusintensitet

### `Slå av lys` {#block_hubs_all_light_light_turn_off}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_off.svg')} alt="block_hubs_all_light_light_turn_off.svg" />

Slår av valgt lysutgang.

- Type: kommandoblokk
- Typisk bruk: avslutningssekvens, batterisparing

### `Technic Move sett lys til` {#block_hubs_technicmove_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_light_light_turn_to.svg')} alt="block_hubs_technicmove_light_light_turn_to.svg" />

Variant av `Sett lys til` for Technic Move hub/lys.

- Type: kommandoblokk
- Typisk bruk: sette lysnivå på Move-hub

## BuWizz 3 lysblokker

### `BuWizz 3 sett LED-farge` {#block_hubs_buwizz3_light_port_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color.svg')} alt="block_hubs_buwizz3_light_port_set_led_color.svg" />

Setter LED-farge på valgt BuWizz 3-port med innebygde fargevalg.

- Type: kommandoblokk

### `BuWizz 3 sett LED-farge (tekst)` {#block_hubs_buwizz3_light_port_set_led_color_string}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_string.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_string.svg" />

Setter BuWizz 3 LED-farge ved bruk av tekstverdi.

- Type: kommandoblokk
- Typisk bruk: dynamiske fargenavn fra variabler

### `BuWizz 3 sett LED-farge (RGB)` {#block_hubs_buwizz3_light_port_set_led_color_rgb}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_rgb.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_rgb.svg" />

Setter BuWizz 3 LED-farge ved bruk av eksplisitte RGB-kanaler.

- Type: kommandoblokk
- Typisk bruk: full tilpasset fargekontroll og gradienter