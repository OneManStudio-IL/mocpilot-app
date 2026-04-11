---
id: Light
title: Světla
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Světla

Tato stránka popisuje bloky kategorie Světla, které slouží k ovládání LED a světelných výstupů na podporovaných hubech.

## Běžné bloky světel

### `Nastavit barvu LED na` {#block_hubs_all_light_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_led_color.svg')} alt="block_hubs_all_light_set_led_color.svg" />

Nastaví barvu LED na hubu pomocí předdefinovaných barev.

- Typ: příkazový blok
- Typické použití: zobrazení stavu (připraveno, běží, varování, chyba)

### `Nastavit světlo na` {#block_hubs_all_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_to.svg')} alt="block_hubs_all_light_light_turn_to.svg" />

Nastaví vybraný světelný výstup na cílový jas/hodnotu.

- Typ: příkazový blok
- Typické použití: jas předního světla, intenzita stavové signalizace

### `Vypnout světlo` {#block_hubs_all_light_light_turn_off}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_off.svg')} alt="block_hubs_all_light_light_turn_off.svg" />

Vypne vybraný světelný výstup.

- Typ: příkazový blok
- Typické použití: vypínací sekvence, úspora baterie

### `Technic Move nastavit světlo na` {#block_hubs_technicmove_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_light_light_turn_to.svg')} alt="block_hubs_technicmove_light_light_turn_to.svg" />

Varianta bloku `Nastavit světlo na` pro cíle hubu/světla Technic Move.

- Typ: příkazový blok
- Typické použití: nastavení úrovně světelného výstupu hubu Move

## Bloky světel BuWizz 3

### `BuWizz 3 nastavit barvu LED na` {#block_hubs_buwizz3_light_port_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color.svg')} alt="block_hubs_buwizz3_light_port_set_led_color.svg" />

Nastaví barvu LED na vybraném portu BuWizz 3 pomocí vestavěných barevných možností.

- Typ: příkazový blok

### `BuWizz 3 nastavit barvu LED na (text)` {#block_hubs_buwizz3_light_port_set_led_color_string}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_string.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_string.svg" />

Nastaví barvu LED BuWizz 3 pomocí textové hodnoty barvy.

- Typ: příkazový blok
- Typické použití: dynamické názvy barev z proměnných

### `BuWizz 3 nastavit barvu LED na (RGB)` {#block_hubs_buwizz3_light_port_set_led_color_rgb}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_rgb.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_rgb.svg" />

Nastaví barvu LED BuWizz 3 pomocí explicitních kanálů RGB.

- Typ: příkazový blok
- Typické použití: plně vlastní řízení barev a přechody