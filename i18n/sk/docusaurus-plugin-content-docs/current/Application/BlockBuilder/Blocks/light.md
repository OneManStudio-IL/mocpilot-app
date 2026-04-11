---
id: Light
title: Svetlo
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Svetlo

Táto stránka dokumentuje bloky kategórie Svetlo, ktoré sa používajú na ovládanie LED diód a svetelných výstupov na podporovaných huboch.

## Základné bloky svetla

### `Nastav farbu LED` {#block_hubs_all_light_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_led_color.svg')} alt="block_hubs_all_light_set_led_color.svg" />

Nastaví farbu LED na hube pomocou preddefinovaných farebných možností.

- Typ: príkazový blok  
- Typické použitie: zobrazenie stavu (pripravené, beží, upozornenie, chyba)  

### `Nastav svetlo na` {#block_hubs_all_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_to.svg')} alt="block_hubs_all_light_light_turn_to.svg" />

Nastaví vybraný svetelný výstup na cieľový jas/hodnotu.

- Typ: príkazový blok  
- Typické použitie: jas svetiel, intenzita indikácie  

### `Vypni svetlo` {#block_hubs_all_light_light_turn_off}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_off.svg')} alt="block_hubs_all_light_light_turn_off.svg" />

Vypne vybraný svetelný výstup.

- Typ: príkazový blok  
- Typické použitie: vypínanie, úspora batérie  

### `Technic Move nastav svetlo na` {#block_hubs_technicmove_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_light_light_turn_to.svg')} alt="block_hubs_technicmove_light_light_turn_to.svg" />

Variant bloku `Nastav svetlo na` pre Technic Move hub/svetlo.

- Typ: príkazový blok  
- Typické použitie: nastavenie úrovne svetla na Move hube  

## Bloky svetla BuWizz 3

### `BuWizz 3 nastav farbu LED` {#block_hubs_buwizz3_light_port_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color.svg')} alt="block_hubs_buwizz3_light_port_set_led_color.svg" />

Nastaví farbu LED na vybranom porte BuWizz 3 pomocou vstavaných farebných možností.

- Typ: príkazový blok  

### `BuWizz 3 nastav farbu LED (text)` {#block_hubs_buwizz3_light_port_set_led_color_string}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_string.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_string.svg" />

Nastaví farbu LED BuWizz 3 pomocou textovej hodnoty farby.

- Typ: príkazový blok  
- Typické použitie: dynamické názvy farieb z premenných  

### `BuWizz 3 nastav farbu LED (RGB)` {#block_hubs_buwizz3_light_port_set_led_color_rgb}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_rgb.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_rgb.svg" />

Nastaví farbu LED BuWizz 3 pomocou explicitných RGB kanálov.

- Typ: príkazový blok  
- Typické použitie: úplné prispôsobenie farieb a gradientov  