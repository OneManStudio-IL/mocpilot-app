---
id: DashboardControllers
title: Экранные контроллеры
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Экранные контроллеры

Эти блоки используются для чтения ввода с экранных контроллеров, реакции на действия пользователя и обновления состояния экранных элементов управления.

## Глобальные блоки экранных контроллеров

### `Установить цвет контроллера` {#block_dashboard_controller_all_set_color}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_color.svg')} alt="block_dashboard_controller_all_set_color.svg" />

Изменяет акцентный цвет выбранного экранного контроллера.

- Тип: командный блок
- Типичное применение: индикация состояний в рантайме или динамическое изменение стиля контроллера

### `Установить интерактивность контроллера` {#block_dashboard_controller_all_set_interactivity}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_interactivity.svg')} alt="block_dashboard_controller_all_set_interactivity.svg" />

Управляет интерактивностью выбранного экранного контроллера.
Если интерактивность отключена, контроллер не реагирует на касания.

- Тип: командный блок
- Типичное применение: временно блокировать управление в определенной логике/безопасном режиме
- Варианты состояния: `enable`, `disable`

## Блоки кнопок

### `Событие кнопки` {#block_dashboard_controller_button_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_event.svg')} alt="block_dashboard_controller_button_event.svg" />

Срабатывает, когда экранная кнопка меняет состояние (pressed/released).

- Тип: событийный блок
- Выход: запуск подключенного скрипта
- Варианты состояния: `pressed`, `released`

### `Значение кнопки (boolean)` {#block_dashboard_controller_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_value_boolean.svg')} alt="block_dashboard_controller_button_value_boolean.svg" />

Возвращает текущее состояние экранной кнопки.

- Тип: блок значения
- Выход: `true`/`false`
- Варианты состояния: `pressed`, `released`

## Блоки D-pad

### `Событие D-pad` {#block_dashboard_controller_dpad_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_event.svg')} alt="block_dashboard_controller_dpad_event.svg" />

Срабатывает при изменении направления D-pad или совпадении с выбранным направлением.

- Тип: событийный блок
- Выход: запуск подключенного скрипта
- Варианты направления: `up`, `down`, `left`, `right`
- Варианты состояния кнопки: `pressed`, `released`

### `Значение D-pad (boolean)` {#block_dashboard_controller_dpad_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_value_boolean.svg')} alt="block_dashboard_controller_dpad_value_boolean.svg" />

Возвращает, активно ли выбранное направление D-pad.

- Тип: блок значения
- Выход: `true`/`false`
- Варианты направления: `up`, `down`, `left`, `right`
- Варианты состояния кнопки: `pressed`, `released`

## Блоки джойстика

### `Событие джойстика` {#block_dashboard_controller_joystick_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_event.svg')} alt="block_dashboard_controller_joystick_event.svg" />

Срабатывает при изменении положения джойстика.

- Тип: событийный блок
- Выход: запуск подключенного скрипта
- Варианты состояния: `up`, `down`, `left`, `right`, `moved`, `released`

### `Значение джойстика (float)` {#block_dashboard_controller_joystick_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_value_float.svg')} alt="block_dashboard_controller_joystick_value_float.svg" />

Возвращает значение оси джойстика.

- Тип: блок значения
- Выход: число (float)
- Варианты оси: `x-axis`, `y-axis`

## Блоки педалей

### `Событие педалей` {#block_dashboard_controller_pedals_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_event.svg')} alt="block_dashboard_controller_pedals_event.svg" />

Срабатывает при изменении ввода педалей.

- Тип: событийный блок
- Выход: запуск подключенного скрипта
- Варианты педали: `any`, `brake`, `acceleration`
- Варианты состояния: `moved`, `pressed`, `released`

### `Значение педалей (float)` {#block_dashboard_controller_pedals_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_float.svg')} alt="block_dashboard_controller_pedals_value_float.svg" />

Возвращает аналоговое значение педалей.

- Тип: блок значения
- Выход: число (float)

### `Значение педалей (boolean)` {#block_dashboard_controller_pedals_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_boolean.svg')} alt="block_dashboard_controller_pedals_value_boolean.svg" />

Возвращает выбранное состояние, в зависимости от того, нажата или отпущена выбранная педаль.

- Тип: блок значения
- Выход: `true`/`false`
- Варианты педали: `brake`, `acceleration`
- Варианты состояния: `pressed`, `released`

## Блоки слайдера

### `Событие слайдера` {#block_dashboard_controller_slider_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_event.svg')} alt="block_dashboard_controller_slider_event.svg" />

Срабатывает при изменении значения слайдера.

- Тип: событийный блок
- Выход: запуск подключенного скрипта
- Варианты состояния: `low`, `high`, `moved`, `released`

### `Значение слайдера (float)` {#block_dashboard_controller_slider_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_value_float.svg')} alt="block_dashboard_controller_slider_value_float.svg" />

Возвращает текущее значение слайдера.

- Тип: блок значения
- Выход: число (float)

## Блоки шагового переключателя

### `Событие шагового переключателя` {#block_dashboard_controller_stepper_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_event.svg')} alt="block_dashboard_controller_stepper_event.svg" />

Срабатывает, когда значение шагового контроллера меняется на шаг.

- Тип: событийный блок
- Выход: запуск подключенного скрипта
- Варианты шага: `any`, `reset`, `minus`, `plus`
- Варианты состояния кнопки: `pressed`, `released`

### `Значение шагового переключателя (float)` {#block_dashboard_controller_stepper_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_value_float.svg')} alt="block_dashboard_controller_stepper_value_float.svg" />

Возвращает текущее значение шагового контроллера.

- Тип: блок значения
- Выход: число (float)

## Блоки руля

### `Событие руля` {#block_dashboard_controller_steering_wheel_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_event.svg')} alt="block_dashboard_controller_steering_wheel_event.svg" />

Срабатывает при изменении положения руля.

- Тип: событийный блок
- Выход: запуск подключенного скрипта
- Варианты состояния: `moved`, `pressed`, `released`

### `Значение руля (float)` {#block_dashboard_controller_steering_wheel_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_value_float.svg')} alt="block_dashboard_controller_steering_wheel_value_float.svg" />

Возвращает текущее значение руля.

- Тип: блок значения
- Выход: число (float)

### `Значение руля (boolean)` {#block_dashboard_controller_steeringwheel_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steeringwheel_value_boolean.svg')} alt="block_dashboard_controller_steeringwheel_value_boolean.svg" />

Возвращает выбранное состояние, в зависимости от того, нажат руль или отпущен.

- Тип: блок значения
- Выход: `true`/`false`
- Варианты состояния: `moved`, `pressed`, `released`

## Блоки переключателя

### `Событие переключателя` {#block_dashboard_controller_switch_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_event.svg')} alt="block_dashboard_controller_switch_event.svg" />

Срабатывает при изменении состояния переключателя.

- Тип: событийный блок
- Выход: запуск подключенного скрипта
- Варианты переключателя: `on`, `off`

### `Значение переключателя (boolean)` {#block_dashboard_controller_switch_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_value_boolean.svg')} alt="block_dashboard_controller_switch_value_boolean.svg" />

Возвращает текущее состояние переключателя.

- Тип: блок значения
- Выход: `true`/`false`
- Варианты состояния: `on`, `off`

## Блоки monitor

### `Показать на мониторе` {#block_dashboard_controller_monitor_show}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_show.svg')} alt="block_dashboard_controller_monitor_show.svg" />

Показывает информацию (текст или значение) на экранном мониторе.

- Тип: командный блок
- Типичное применение: отображение уровня батареи, угла мотора, текущего устройства на порту хаба и другой рантайм-информации

### `Установить значение монитора` {#block_dashboard_controller_monitor_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_set_value.svg')} alt="block_dashboard_controller_monitor_set_value.svg" />

Устанавливает целочисленное значение для спидометра на мониторе.

- Тип: командный блок
- Типичное применение: обновление значения индикатора скорости в рантайме

### `Установить значение tilt-монитора` {#block_dashboard_controller_monitor_tilt_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_tilt_set_value.svg')} alt="block_dashboard_controller_monitor_tilt_set_value.svg" />

Устанавливает значение tilt-монитора (pitch/roll).

- Тип: командный блок
- Типичное применение: отображение значений наклона в рантайме
- Варианты оси: `pitch`, `roll`

## Примечания по использованию

- Для динамического управления интерфейсом полезно комбинировать контроллер-блоки с `Events` и `Control`.
- Для чувствительных сценариев используйте `set interactivity` для временной блокировки ввода.
- Для избежания шумных повторов добавляйте пороги и фильтрацию в реакциях на `moved`.
