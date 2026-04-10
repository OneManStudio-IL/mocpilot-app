---
id: Control
title: Керування
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Керування

Блоки керування відповідають за потік виконання: очікування, цикли, розгалуження та зупинку скриптів.

## Блоки очікування

### `Чекати` {#block_control_wait_for}

<img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />

Призупиняє поточний скрипт на вказаний час.

### `Чекати до` {#block_control_wait_until}

<img src={useBaseUrl('/img/blocks/block_control_wait_until.svg')} alt="block_control_wait_until.svg" />

Призупиняє поточний скрипт, доки умова не стане істинною.

## Блоки циклів

### `Повторити` {#block_control_repeat_for}

<img src={useBaseUrl('/img/blocks/block_control_repeat_for.svg')} alt="block_control_repeat_for.svg" />

Виконує вкладені блоки фіксовану кількість разів.

### `Повторювати до` {#block_control_repeat_until}

<img src={useBaseUrl('/img/blocks/block_control_repeat_until.svg')} alt="block_control_repeat_until.svg" />

Повторює вкладені блоки, доки умова не стане істинною.

### `Завжди` {#block_control_repeat_forever}

<img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />

Виконує вкладені блоки безперервно, доки програма або скрипт не буде зупинений.

## Блоки розгалуження

### `Якщо` {#block_control_if}

<img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />

Виконує вкладені блоки лише тоді, коли умова істинна.

### `Якщо / Інакше` {#block_control_if_else}

<img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />

Виконує одну гілку, коли умова істинна, інакше виконує альтернативну гілку.

### `Зробити це і це` {#block_control_do_this_and_this}

<img src={useBaseUrl('/img/blocks/block_control_do_this_and_this.svg')} alt="block_control_do_this_and_this.svg" />

Виконує два стеки блоків послідовно в межах однієї операції керування потоком.

## Блоки зупинки

### `Зупинити` {#block_control_stop}

<img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />

Зупиняє виконання скрипта (область зупинки залежить від вибраного режиму).

- Варіанти зупинки: `all`, `this stack`, `and exit program`

### `Зупинити інші стеки` {#block_control_stop_other_stacks}

<img src={useBaseUrl('/img/blocks/block_control_stop_other_stacks.svg')} alt="block_control_stop_other_stacks.svg" />

Зупиняє всі інші запущені стеки, залишаючи поточний стек активним.

## Допоміжні блоки хаба/керування

### `Встановити підключення` {#block_hubs_control_set_connect}

<img src={useBaseUrl('/img/blocks/block_hubs_control_set_connect.svg')} alt="block_hubs_control_set_connect.svg" />

Керує станом підключення хаба з логіки керування.

- Варіанти дії: `підключити`, `відключити`

### `Підключено?` {#block_hubs_all_sensors_is_connected}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_connected.svg')} alt="block_hubs_all_sensors_is_connected.svg" />

Повертає, чи хаб зараз підключений.

- Тип: логічний репортер-блок

### `BuWizz 2: встановити режим потужності` {#block_hubs_buwizz_sensors_set_power_mode}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_set_power_mode.svg')} alt="block_hubs_buwizz_sensors_set_power_mode.svg" />

Встановлює режим потужності хаба BuWizz 2.

- Варіанти режиму: `Slow`, `Normal`, `Fast`, `Ludicrous`

### `BuWizz 2: отримати режим потужності` {#block_hubs_buwizz_sensors_get_power_mode}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_get_power_mode.svg')} alt="block_hubs_buwizz_sensors_get_power_mode.svg" />

Повертає поточний активний режим потужності BuWizz 2.

- Варіанти формату виводу: `текст`, `індекс`

### `MouldKing: встановити канал керування` {#block_hubs_mouldking_control_set_control_channel}

<img src={useBaseUrl('/img/blocks/block_hubs_mouldking_control_set_control_channel.svg')} alt="block_hubs_mouldking_control_set_control_channel.svg" />

Встановлює активний канал керування для підтримуваного хаба/контролера MouldKing.

- Варіанти каналу: `A`, `B`, `C`

### `MouldKing: отримати канал керування` {#block_hubs_mouldking_control_get_control_channel}

<img src={useBaseUrl('/img/blocks/block_hubs_mouldking_control_get_control_channel.svg')} alt="block_hubs_mouldking_control_get_control_channel.svg" />

Повертає поточний активний канал керування для підтримуваного хаба/контролера MouldKing.

- Варіанти формату виводу: `текст`, `індекс`

## Примітки щодо використання

- Використовуйте `wait until` з логічними репортер-блоками з Sensors/Operators.
- Додавайте захисні умови в циклах, щоб уникати небажаної нескінченної поведінки.
- Використовуйте `if / else`, коли потрібно явно обробляти обидві гілки.
