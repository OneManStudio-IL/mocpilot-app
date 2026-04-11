---
id: Light
title: Light
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Light

This page documents Light category blocks used to control LEDs and light outputs on supported hubs.

## Common light blocks

### `Set LED color` {#block_hubs_all_light_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_led_color.svg')} alt="block_hubs_all_light_set_led_color.svg" />

Sets hub LED color using predefined color options.

- Type: command block
- Typical use: show state (ready, running, warning, error)

### `Light turn to` {#block_hubs_all_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_to.svg')} alt="block_hubs_all_light_light_turn_to.svg" />

Sets selected light output to a target brightness/value.

- Type: command block
- Typical use: headlight brightness, status intensity

### `Light turn off` {#block_hubs_all_light_light_turn_off}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_off.svg')} alt="block_hubs_all_light_light_turn_off.svg" />

Turns selected light output off.

- Type: command block
- Typical use: shutdown sequence, battery-saving behavior

### `Technic Move light turn to` {#block_hubs_technicmove_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_light_light_turn_to.svg')} alt="block_hubs_technicmove_light_light_turn_to.svg" />

Variant of `Light turn to` for Technic Move hub/light target.

- Type: command block
- Typical use: set Move hub light output level

## BuWizz 3 light blocks

### `BuWizz 3 set LED color` {#block_hubs_buwizz3_light_port_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color.svg')} alt="block_hubs_buwizz3_light_port_set_led_color.svg" />

Sets LED color on selected BuWizz 3 port with built-in color options.

- Type: command block

### `BuWizz 3 set LED color (string)` {#block_hubs_buwizz3_light_port_set_led_color_string}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_string.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_string.svg" />

Sets BuWizz 3 LED color using text color value.

- Type: command block
- Typical use: dynamic color names from variables

### `BuWizz 3 set LED color (RGB)` {#block_hubs_buwizz3_light_port_set_led_color_rgb}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_rgb.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_rgb.svg" />

Sets BuWizz 3 LED color using explicit RGB channels.

- Type: command block
- Typical use: full custom color control and gradients