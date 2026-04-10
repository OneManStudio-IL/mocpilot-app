---
id: DashboardControllers
title: Екранні контролери
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Екранні контролери

Ці блоки використовуються для читання вводу з екранних контролерів, реакції на дії користувача та оновлення стану елементів керування на екрані.

## Глобальні блоки екранних контролерів

### `Встановити колір контролера` {#block_dashboard_controller_all_set_color}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_color.svg')} alt="block_dashboard_controller_all_set_color.svg" />

Змінює акцентний колір вибраного екранного контролера.

- Тип: командний блок
- Типове використання: індикація станів під час виконання або динамічна зміна стилю контролера за умовами

### `Увімкнути/вимкнути інтерактивність контролера` {#block_dashboard_controller_all_set_interactivity}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_interactivity.svg')} alt="block_dashboard_controller_all_set_interactivity.svg" />

Керує інтерактивністю вибраного екранного контролера.
Якщо інтерактивність вимкнена, контролер не реагує на торкання.

- Тип: командний блок
- Типове використання: тимчасово заблокувати керування під час певної логіки або в режимах безпеки
- Варіанти стану: `увімкнути`, `вимкнути`

## Блоки кнопок

### `Подія кнопки` {#block_dashboard_controller_button_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_event.svg')} alt="block_dashboard_controller_button_event.svg" />

Спрацьовує, коли стан кнопки на екрані змінюється (`натиснуто`/`відпущено`).

- Тип: блок події
- Результат: запускає підключений скрипт
- Варіанти стану: `натиснуто`, `відпущено`

### `Стан кнопки (boolean)` {#block_dashboard_controller_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_value_boolean.svg')} alt="block_dashboard_controller_button_value_boolean.svg" />

Повертає поточний стан кнопки на екрані.

- Тип: блок-репортер
- Результат: `істина`/`хиба`
- Варіанти стану: `натиснуто`, `відпущено`

## Блоки D-pad

### `Подія D-pad` {#block_dashboard_controller_dpad_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_event.svg')} alt="block_dashboard_controller_dpad_event.svg" />

Спрацьовує, коли напрямок D-pad змінюється або відповідає налаштованому напрямку.

- Тип: блок події
- Результат: запускає підключений скрипт
- Варіанти напрямку: `вгору`, `вниз`, `ліворуч`, `праворуч`
- Варіанти стану кнопки: `натиснуто`, `відпущено`

### `Стан D-pad (boolean)` {#block_dashboard_controller_dpad_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_value_boolean.svg')} alt="block_dashboard_controller_dpad_value_boolean.svg" />

Повертає, чи активний вибраний напрямок D-pad.

- Тип: блок-репортер
- Результат: `істина`/`хиба`
- Варіанти напрямку: `вгору`, `вниз`, `ліворуч`, `праворуч`
- Варіанти стану кнопки: `натиснуто`, `відпущено`

## Блоки джойстика

### `Подія джойстика` {#block_dashboard_controller_joystick_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_event.svg')} alt="block_dashboard_controller_joystick_event.svg" />

Спрацьовує, коли положення джойстика змінюється.

- Тип: блок події
- Результат: запускає підключений скрипт
- Варіанти стану: `вгору`, `вниз`, `ліворуч`, `праворуч`, `переміщено`, `відпущено`

### `Значення джойстика (float)` {#block_dashboard_controller_joystick_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_value_float.svg')} alt="block_dashboard_controller_joystick_value_float.svg" />

Повертає значення осі джойстика.

- Тип: блок-репортер
- Результат: числове значення (float), зазвичай у нормалізованому діапазоні
- Варіанти осі: `вісь X`, `вісь Y`

## Блоки педалей

### `Подія педалей` {#block_dashboard_controller_pedals_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_event.svg')} alt="block_dashboard_controller_pedals_event.svg" />

Спрацьовує, коли змінюється стан педалей.

- Тип: блок події
- Результат: запускає підключений скрипт
- Варіанти педалі: `будь-яка`, `гальмо`, `прискорення`
- Варіанти стану: `переміщено`, `натиснуто`, `відпущено`

### `Значення педалей (float)` {#block_dashboard_controller_pedals_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_float.svg')} alt="block_dashboard_controller_pedals_value_float.svg" />

Повертає аналогове значення педалей.

- Тип: блок-репортер
- Результат: числове значення (float)

### `Стан педалі (boolean)` {#block_dashboard_controller_pedals_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_boolean.svg')} alt="block_dashboard_controller_pedals_value_boolean.svg" />

Повертає вибраний стан залежно від того, натиснута чи відпущена конкретна педаль.

- Тип: блок-репортер
- Результат: `істина`/`хиба`
- Варіанти педалі: `гальмо`, `прискорення`
- Варіанти стану: `натиснуто`, `відпущено`

## Блоки слайдера

### `Подія слайдера` {#block_dashboard_controller_slider_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_event.svg')} alt="block_dashboard_controller_slider_event.svg" />

Спрацьовує, коли змінюється значення слайдера.

- Тип: блок події
- Результат: запускає підключений скрипт
- Варіанти стану: `низький`, `високий`, `переміщено`, `відпущено`

### `Значення слайдера (float)` {#block_dashboard_controller_slider_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_value_float.svg')} alt="block_dashboard_controller_slider_value_float.svg" />

Повертає поточне значення слайдера.

- Тип: блок-репортер
- Результат: числове значення (float)

## Блоки степера

### `Подія степера` {#block_dashboard_controller_stepper_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_event.svg')} alt="block_dashboard_controller_stepper_event.svg" />

Спрацьовує, коли значення степера змінюється на крок.

- Тип: блок події
- Результат: запускає підключений скрипт
- Варіанти кроку: `будь-яка`, `скидання`, `мінус`, `плюс`
- Варіанти стану кнопки: `натиснуто`, `відпущено`

### `Значення степера (float)` {#block_dashboard_controller_stepper_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_value_float.svg')} alt="block_dashboard_controller_stepper_value_float.svg" />

Повертає поточне значення степера.

- Тип: блок-репортер
- Результат: числове значення (float)

## Блоки керма

### `Подія керма` {#block_dashboard_controller_steering_wheel_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_event.svg')} alt="block_dashboard_controller_steering_wheel_event.svg" />

Спрацьовує, коли положення керма змінюється.

- Тип: блок події
- Результат: запускає підключений скрипт
- Варіанти стану: `переміщено`, `натиснуто`, `відпущено`

### `Значення керма (float)` {#block_dashboard_controller_steering_wheel_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_value_float.svg')} alt="block_dashboard_controller_steering_wheel_value_float.svg" />

Повертає поточне значення керма.

- Тип: блок-репортер
- Результат: числове значення (float)

### `Стан керма (boolean)` {#block_dashboard_controller_steeringwheel_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steeringwheel_value_boolean.svg')} alt="block_dashboard_controller_steeringwheel_value_boolean.svg" />

Повертає вибраний стан залежно від того, натиснуте, відпущене або зміщене кермо.

- Тип: блок-репортер
- Результат: `істина`/`хиба`
- Варіанти стану: `переміщено`, `натиснуто`, `відпущено`

## Блоки перемикача

### `Подія перемикача` {#block_dashboard_controller_switch_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_event.svg')} alt="block_dashboard_controller_switch_event.svg" />

Спрацьовує, коли стан перемикача змінюється.

- Тип: блок події
- Результат: запускає підключений скрипт
- Варіанти перемикача: `увімкнено`, `вимкнено`

### `Стан перемикача (boolean)` {#block_dashboard_controller_switch_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_value_boolean.svg')} alt="block_dashboard_controller_switch_value_boolean.svg" />

Повертає поточний стан перемикача.

- Тип: блок-репортер
- Результат: `істина`/`хиба`
- Варіанти стану: `увімкнено`, `вимкнено`

## Блоки монітора

### `Показати на моніторі` {#block_dashboard_controller_monitor_show}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_show.svg')} alt="block_dashboard_controller_monitor_show.svg" />

Відображає інформацію (текст або значення) на екранному моніторі.

- Тип: командний блок
- Типове використання: показ рівня батареї, кута мотора, поточного підключеного пристрою на порту хаба та іншої службової інформації під час виконання

### `Встановити значення монітора` {#block_dashboard_controller_monitor_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_set_value.svg')} alt="block_dashboard_controller_monitor_set_value.svg" />

Встановлює ціле значення для спідометр-монітора на екрані.

- Тип: командний блок
- Типове використання: оновлення значення монітора типу спідометра під час виконання

### `Встановити нахил монітора` {#block_dashboard_controller_monitor_tilt_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_tilt_set_value.svg')} alt="block_dashboard_controller_monitor_tilt_set_value.svg" />

Встановлює значення для монітора нахилу (тангаж/крен) на екрані.

- Тип: командний блок
- Типове використання: показ значень нахилу в реальному часі на окремому моніторі нахилу
- Варіанти осі: `тангаж`, `крен`
