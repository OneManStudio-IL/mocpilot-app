---
id: Light
title: Світло
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Світло

Сторінка описує блоки категорії **Light** для керування LED та світловими виходами на підтримуваних хабах.

## Базові світлові блоки

### `Встановити колір LED` {#block_hubs_all_light_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_led_color.svg')} alt="block_hubs_all_light_set_led_color.svg" />

Встановлює колір LED хаба із попередньо заданих варіантів.

- Тип: командний блок
- Типове використання: індикація стану (ready/running/warning/error)

### `Перемкнути світло на` {#block_hubs_all_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_to.svg')} alt="block_hubs_all_light_light_turn_to.svg" />

Встановлює вибраний світловий вихід у цільове значення яскравості/рівня.

- Тип: командний блок
- Типове використання: яскравість фар, індикація інтенсивності

### `Вимкнути світло` {#block_hubs_all_light_light_turn_off}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_off.svg')} alt="block_hubs_all_light_light_turn_off.svg" />

Вимикає вибраний світловий вихід.

- Тип: командний блок
- Типове використання: вимкнення моделі, економія батареї

### `Technic Move: перемкнути світло на` {#block_hubs_technicmove_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_light_light_turn_to.svg')} alt="block_hubs_technicmove_light_light_turn_to.svg" />

Варіант `Перемкнути світло на` для цілі Technic Move.

- Тип: командний блок

## Світлові блоки BuWizz 3

### `BuWizz 3: встановити колір LED` {#block_hubs_buwizz3_light_port_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color.svg')} alt="block_hubs_buwizz3_light_port_set_led_color.svg" />

Встановлює колір LED на вибраному порту BuWizz 3 з вбудованих варіантів.

- Тип: командний блок

### `BuWizz 3: встановити колір LED (рядок)` {#block_hubs_buwizz3_light_port_set_led_color_string}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_string.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_string.svg" />

Встановлює колір LED BuWizz 3 за текстовим значенням.

- Тип: командний блок

### `BuWizz 3: встановити колір LED (RGB)` {#block_hubs_buwizz3_light_port_set_led_color_rgb}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_rgb.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_rgb.svg" />

Встановлює колір LED BuWizz 3 через канали RGB.

- Тип: командний блок

## Примітки

- Можливості світла залежать від моделі хаба й підключеного пристрою.
- Якщо блок не дає видимого результату, перевірте тип пристрою та цільовий порт.
- Блоки для читання відбитого/навколишнього світла описані на сторінці **Sensors**.
