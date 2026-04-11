---
id: Light
title: Ljus
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Ljus

Den här sidan dokumenterar block i kategorin Ljus som används för att styra LED:er och ljusutgångar på stödda hubbar.

## Vanliga ljusblock

### `Ställ in LED-färg` {#block_hubs_all_light_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_led_color.svg')} alt="block_hubs_all_light_set_led_color.svg" />

Ställer in hubbens LED-färg med fördefinierade färgalternativ.

- Typ: kommandoblock
- Typisk användning: visa tillstånd (redo, kör, varning, fel)

### `Ställ ljus till` {#block_hubs_all_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_to.svg')} alt="block_hubs_all_light_light_turn_to.svg" />

Ställer in vald ljusutgång till ett målvärde för ljusstyrka/värde.

- Typ: kommandoblock
- Typisk användning: strålkastarens ljusstyrka, statusintensitet

### `Stäng av ljus` {#block_hubs_all_light_light_turn_off}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_off.svg')} alt="block_hubs_all_light_light_turn_off.svg" />

Stänger av vald ljusutgång.

- Typ: kommandoblock
- Typisk användning: avstängningssekvens, batteribesparande beteende

### `Technic Move ställ ljus till` {#block_hubs_technicmove_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_light_light_turn_to.svg')} alt="block_hubs_technicmove_light_light_turn_to.svg" />

Variant av `Ställ ljus till` för Technic Move-hubb/ljusmål.

- Typ: kommandoblock
- Typisk användning: ställa in ljusutgångsnivån för Move-hubben

## BuWizz 3-ljusblock

### `BuWizz 3 ställ in LED-färg` {#block_hubs_buwizz3_light_port_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color.svg')} alt="block_hubs_buwizz3_light_port_set_led_color.svg" />

Ställer in LED-färg på vald BuWizz 3-port med inbyggda färgalternativ.

- Typ: kommandoblock

### `BuWizz 3 ställ in LED-färg (sträng)` {#block_hubs_buwizz3_light_port_set_led_color_string}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_string.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_string.svg" />

Ställer in BuWizz 3-LED-färg med ett textbaserat färgvärde.

- Typ: kommandoblock
- Typisk användning: dynamiska färgnamn från variabler

### `BuWizz 3 ställ in LED-färg (RGB)` {#block_hubs_buwizz3_light_port_set_led_color_rgb}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_rgb.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_rgb.svg" />

Ställer in BuWizz 3-LED-färg med explicita RGB-kanaler.

- Typ: kommandoblock
- Typisk användning: fullständig anpassad färgstyrning och gradienter
