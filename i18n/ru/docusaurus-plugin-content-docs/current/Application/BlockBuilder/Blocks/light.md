---
id: Light
title: Свет
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Свет

Световые блоки управляют LED-подсветкой на поддерживаемых хабах и устройствах.

## Общие световые блоки

### `Установить цвет LED` {#block_hubs_all_light_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_led_color.svg')} alt="block_hubs_all_light_set_led_color.svg" />

Устанавливает цвет LED хаба с помощью предустановленных цветов.

### `Переключить свет на` {#block_hubs_all_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_to.svg')} alt="block_hubs_all_light_light_turn_to.svg" />

Переключает свет в выбранное состояние/цвет.

### `Выключить свет` {#block_hubs_all_light_light_turn_off}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_off.svg')} alt="block_hubs_all_light_light_turn_off.svg" />

Выключает свет.

### `Technic Move: переключить свет на` {#block_hubs_technicmove_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_light_light_turn_to.svg')} alt="block_hubs_technicmove_light_light_turn_to.svg" />

Устанавливает свет для Technic Move.

## Световые блоки BuWizz 3

### `BuWizz 3: установить цвет LED` {#block_hubs_buwizz3_light_port_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color.svg')} alt="block_hubs_buwizz3_light_port_set_led_color.svg" />

Устанавливает цвет LED порта BuWizz 3.

### `BuWizz 3: установить цвет LED (строка)` {#block_hubs_buwizz3_light_port_set_led_color_string}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_string.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_string.svg" />

Устанавливает цвет LED BuWizz 3 по строковому значению.

### `BuWizz 3: установить цвет LED (RGB)` {#block_hubs_buwizz3_light_port_set_led_color_rgb}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_rgb.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_rgb.svg" />

Устанавливает цвет LED BuWizz 3 через значения RGB.

## Примечания

- Доступность световых блоков зависит от модели хаба и выбранного порта.
- Для динамической индикации состояний удобно комбинировать эти блоки с Events и Control.
