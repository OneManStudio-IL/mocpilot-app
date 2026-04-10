---
id: Gamepad
title: Геймпад
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Геймпад
Блоки Gamepad используются для реакции на ввод контроллера и чтения текущих значений состояния.

## Событийные блоки

### `Когда кнопка геймпада` {#block_gamepad_event_when_button_is}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is.svg')} alt="block_gamepad_event_when_button_is.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is_sony.svg')} alt="block_gamepad_event_when_button_is_sony.svg" />
</div>

Срабатывает, когда выбранная кнопка геймпада соответствует выбранному состоянию.

- Тип: событийный блок
- Кнопки (Xbox-раскладка): `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Кнопки (Sony-раскладка): `cross`, `circle`, `square`, `triangle`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- Варианты состояния: `pressed`, `released`

### `Когда D-pad геймпада` {#block_gamepad_event_when_dpad_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_dpad_is.svg')} alt="block_gamepad_event_when_dpad_is.svg" />

Срабатывает, когда направление/состояние D-pad соответствует выбранному условию.

- Тип: событийный блок
- Варианты направления: `up`, `down`, `left`, `right`
- Варианты состояния: `pressed`, `released`

### `Когда стик геймпада` {#block_gamepad_event_when_thumbstick_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_thumbstick_is.svg')} alt="block_gamepad_event_when_thumbstick_is.svg" />

Срабатывает, когда условие по стику соответствует выбранным параметрам.

- Выбор стика: `left` / `right`
- Выбор направления/состояния: `up`, `down`, `left`, `right`, `moved`, `released`
- Тип: событийный блок
- Типичное применение: реакция на направление, движение или отпускание стика

## Блоки значений

### `Значение кнопки геймпада (boolean)` {#block_gamepad_button_value_boolean}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean.svg')} alt="block_gamepad_button_value_boolean.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean_sony.svg')} alt="block_gamepad_button_value_boolean_sony.svg" />
</div>

Возвращает текущее состояние выбранной кнопки геймпада.

- Тип: блок значения
- Выход: `true`/`false`
- Кнопки (Xbox-раскладка): `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Кнопки (Sony-раскладка): `cross`, `circle`, `square`, `triangle`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- Варианты состояния: `pressed`, `released`

### `Значение кнопки D-pad геймпада (boolean)` {#block_gamepad_dpad_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_gamepad_dpad_button_value_boolean.svg')} alt="block_gamepad_dpad_button_value_boolean.svg" />

Возвращает, активно ли выбранное направление D-pad.

- Тип: блок значения
- Выход: `true`/`false`
- Варианты направления: `up`, `down`, `left`, `right`
- Варианты состояния: `pressed`, `released`

### `Значение стика геймпада (float)` {#block_gamepad_thumbstick_value_float}

<img src={useBaseUrl('/img/blocks/block_gamepad_thumbstick_value_float.svg')} alt="block_gamepad_thumbstick_value_float.svg" />

Возвращает числовое значение оси стика.

- Тип: блок значения
- Выход: число (float)
- Диапазон по умолчанию: `-1` до `1`
- Опциональный диапазон в настройках gamepad: `-100` до `100`
- Варианты стика: `left`, `right`
- Варианты оси: `x-axis` / `y-axis`

### `Значение силы нажатия триггера геймпада (float)` {#block_gamepad_trigger_pressure_value_float}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float.svg')} alt="block_gamepad_trigger_pressure_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float_sony.svg')} alt="block_gamepad_trigger_pressure_value_float_sony.svg" />
</div>

Возвращает значение силы нажатия выбранного триггера.

- Тип: блок значения
- Выход: число (float)
- Диапазон по умолчанию: `-1` до `1`
- Опциональный диапазон в настройках gamepad: `-100` до `100`
- Варианты триггера (Xbox-раскладка): `LT`, `RT`
- Варианты триггера (Sony-раскладка): `L2`, `R2`

## Примечания по использованию

- Используйте event-блоки для мгновенной реакции на изменения ввода.
- Используйте value-блоки для постоянного опроса в циклах и вычислениях управления.
- Для плавного управления моторами применяйте dead-zone и масштабирование значений стиков/триггеров.
- Комбинируйте с broadcast-блоками, чтобы разделить обработку ввода и исполнительную логику.
- В настройках gamepad можно переключать раскладку кнопок между Xbox и Sony PlayStation.
