---
id: Events
title: Події
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Події

Категорія **Events** містить блоки, які запускають скрипти, коли виконується умова.

## Базові події

### `Коли програму запущено` {#block_event_when_program_started}

<img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />

Запускає цей скрипт один раз, коли починається програма профілю.

- Тригер: запуск програми
- Типове використання: ініціалізація змінних, стартові стани моторів, стартові звуки

### `Коли` {#block_event_when}

<img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />

Спрацьовує, коли вибрана умова стає істинною.

- Тригер: умова
- Типове використання: розгалуження логіки за поточним станом

### `Коли таймер більше ніж` {#block_event_when_timer_greater_than}

<img src={useBaseUrl('/img/blocks/block_event_when_timer_greater_than.svg')} alt="block_event_when_timer_greater_than.svg" />

Спрацьовує, коли значення таймера перевищує поріг.

- Тригер: час, що минув
- Типове використання: відкладені дії, таймінг фаз

### `Коли отримано повідомлення` {#block_event_when_message_recieved}

<img src={useBaseUrl('/img/blocks/block_event_when_message_recieved.svg')} alt="block_event_when_message_recieved.svg" />

Запускає скрипт, коли отримано відповідне broadcast-повідомлення.

- Тригер: канал повідомлення
- Типове використання: синхронізація кількох скриптів

### `Розіслати` {#block_event_broadcast}

<img src={useBaseUrl('/img/blocks/block_event_broadcast.svg')} alt="block_event_broadcast.svg" />

Надсилає повідомлення всім скриптам, які слухають цей канал.

- Тригер: миттєве надсилання
- Типове використання: повідомити інші скрипти без очікування

### `Розіслати і чекати` {#block_event_broadcast_and_wait}

<img src={useBaseUrl('/img/blocks/block_event_broadcast_and_wait.svg')} alt="block_event_broadcast_and_wait.svg" />

Надсилає повідомлення і призупиняє цей скрипт, поки обробники не завершаться.

- Тригер: надсилання + очікування
- Типове використання: поетапні сценарії, де важлива послідовність

## Події хаба

### `Подія кнопки хаба` {#block_hubs_all_event_button_pressed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_button_pressed.svg')} alt="block_hubs_all_event_button_pressed.svg" />

Спрацьовує, коли натискається головна кнопка хаба.

- Варіанти стану: `pressed`, `released`, `changed`
- Примітка: доступні варіанти кнопок можуть відрізнятися залежно від моделі хаба.

### `Зміна підключення хаба` {#block_hubs_all_event_connection_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_connection_changed.svg')} alt="block_hubs_all_event_connection_changed.svg" />

Спрацьовує, коли змінюється стан підключення хаба (підключено/відключено).

- Тригер: зміна статусу зʼєднання
- Типове використання: обробка перепідключення та безпечний fallback при втраті зв’язку

### `Зміна батареї хаба` {#block_hubs_all_event_battery_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_battery_changed.svg')} alt="block_hubs_all_event_battery_changed.svg" />

Спрацьовує, коли змінюється повідомлений рівень заряду батареї хаба.

- Тригер: оновлення рівня батареї (для хабів, що передають ці дані)
- Типове використання: логіка попередження про низький заряд і перемикання в еко-режим

### `Зміна акселерометра хаба` {#block_hubs_all_event_accelerometer_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_accelerometer_changed.svg')} alt="block_hubs_all_event_accelerometer_changed.svg" />

Спрацьовує, коли змінюються значення прискорення.

### `Зміна нахилу хаба` {#block_hubs_all_event_tilt_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_changed.svg')} alt="block_hubs_all_event_tilt_changed.svg" />

Спрацьовує, коли змінюється значення нахилу.

- Варіанти кута: `any`, `pitch`, `roll`, `yaw`
- Примітка: `yaw` доступний лише на хабах, які надають дані yaw.

### `Зміна орієнтації хаба` {#block_hubs_all_event_tilt_orientation_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_orientation_changed.svg')} alt="block_hubs_all_event_tilt_orientation_changed.svg" />

Спрацьовує, коли змінюється стан орієнтації (наприклад, front/up/down/left/right).

## Події портових датчиків

### `Подія датчика кольору Technic` {#block_hubs_all_event_port_technic_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_color.svg')} alt="block_hubs_all_event_port_technic_sensor_color.svg" />

Спрацьовує, коли датчик кольору Technic повертає вибраний колір/значення.

- Варіанти одиниць (залежно від режиму): `%`, `cm`, `inch`

### `Подія датчика відстані Technic` {#block_hubs_all_event_port_technic_sensor_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_distance.svg')} alt="block_hubs_all_event_port_technic_sensor_distance.svg" />

Спрацьовує, коли значення відстані датчика Technic відповідають вибраній умові.

- Варіанти порівняння: `closer than`, `farther than`, `exactly at`
- Варіанти одиниць: `mm`, `cm`, `inch`, `%`
- Примітка: доступні одиниці можуть залежати від режиму датчика та підключеного пристрою.

### `Подія датчика відстані BOOST` {#block_hubs_all_event_port_boost_sensor_when_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_event_port_boost_sensor_when_distance.svg" />

Спрацьовує, коли датчик відстані BOOST досягає вибраного порога/умови.

- Варіанти порівняння: `closer than`, `farther than`, `exactly at`
- Варіанти одиниць: `%`, `cm`, `inch`

### `Подія датчика кольору BOOST` {#block_hubs_all_event_port_boost_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_color.svg')} alt="block_hubs_all_event_port_boost_sensor_color.svg" />

Спрацьовує, коли датчик BOOST визначає вибраний колір/значення.

## Примітки

- Подієві блоки можуть спрацьовувати дуже часто (особливо події змін датчиків/контролерів).
- Для стабільної поведінки додавайте порогові перевірки або короткі затримки.
- Для координації скриптів краще використовувати розсилку повідомлень, ніж дублювати логіку.
