---
id: Gamepad
title: Геймпад
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Геймпад
Блоки геймпада використовуються для реакції на ввід контролера та читання поточних значень його стану.

## Блоки подій

### `Коли натиснута кнопка геймпада` {#block_gamepad_event_when_button_is}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is.svg')} alt="block_gamepad_event_when_button_is.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is_sony.svg')} alt="block_gamepad_event_when_button_is_sony.svg" />
</div>

Спрацьовує, коли вибрана кнопка геймпада переходить у заданий стан.

- Тип: блок події
- Варіанти кнопок (розкладка Xbox): `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Варіанти кнопок (розкладка Sony): `хрест`, `коло`, `квадрат`, `трикутник`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- Варіанти стану: `натиснуто`, `відпущено`

### `Коли D-pad геймпада` {#block_gamepad_event_when_dpad_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_dpad_is.svg')} alt="block_gamepad_event_when_dpad_is.svg" />

Спрацьовує, коли напрямок/стан D-pad відповідає вибраній умові.

- Тип: блок події
- Варіанти напрямку: `вгору`, `вниз`, `ліворуч`, `праворуч`
- Варіанти стану: `натиснуто`, `відпущено`

### `Коли стік геймпада` {#block_gamepad_event_when_thumbstick_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_thumbstick_is.svg')} alt="block_gamepad_event_when_thumbstick_is.svg" />

Спрацьовує, коли стан стика відповідає вибраним параметрам.

Блок підтримує:

- Вибір стика: `ліворуч` / `праворуч`
- Вибір напряму/стану: `вгору`, `вниз`, `ліворуч`, `праворуч`, `переміщено`, `відпущено`
- Тип: блок події
- Типове використання: реакція на напрям руху стика або його відпускання

## Блоки значень

### `Стан кнопки геймпада (boolean)` {#block_gamepad_button_value_boolean}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean.svg')} alt="block_gamepad_button_value_boolean.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean_sony.svg')} alt="block_gamepad_button_value_boolean_sony.svg" />
</div>

Повертає поточний стан вибраної кнопки геймпада.

- Тип: блок-репортер
- Результат: `істина`/`хиба`
- Варіанти кнопок (розкладка Xbox): `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Варіанти кнопок (розкладка Sony): `хрест`, `коло`, `квадрат`, `трикутник`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- Варіанти стану: `натиснуто`, `відпущено`

### `Стан кнопки D-pad геймпада (boolean)` {#block_gamepad_dpad_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_gamepad_dpad_button_value_boolean.svg')} alt="block_gamepad_dpad_button_value_boolean.svg" />

Повертає, чи активний вибраний напрямок D-pad.

- Тип: блок-репортер
- Результат: `істина`/`хиба`
- Варіанти напрямку: `вгору`, `вниз`, `ліворуч`, `праворуч`
- Варіанти стану: `натиснуто`, `відпущено`

### `Значення стика геймпада (float)` {#block_gamepad_thumbstick_value_float}

<img src={useBaseUrl('/img/blocks/block_gamepad_thumbstick_value_float.svg')} alt="block_gamepad_thumbstick_value_float.svg" />

Повертає числове значення осі стика.

- Тип: блок-репортер
- Результат: числове значення (float)
- Типовий діапазон: `-1` ... `1`
- Додатковий діапазон у налаштуваннях геймпада: `-100` ... `100`
- Варіанти стика: `ліворуч`, `праворуч`
- Варіанти осі: `вісь X` / `вісь Y`

### `Значення сили натискання тригера (float)` {#block_gamepad_trigger_pressure_value_float}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float.svg')} alt="block_gamepad_trigger_pressure_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float_sony.svg')} alt="block_gamepad_trigger_pressure_value_float_sony.svg" />
</div>

Повертає значення сили натискання для вибраного тригера.

- Тип: блок-репортер
- Результат: числове значення (float)
- Типовий діапазон: `-1` ... `1`
- Додатковий діапазон у налаштуваннях геймпада: `-100` ... `100`
- Варіанти тригера (розкладка Xbox): `LT`, `RT`
- Варіанти тригера (розкладка Sony): `L2`, `R2`