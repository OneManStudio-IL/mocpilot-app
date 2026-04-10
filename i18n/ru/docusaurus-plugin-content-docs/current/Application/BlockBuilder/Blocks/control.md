---
id: Control
title: Управление
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Управление

Блоки управления отвечают за поток выполнения: ожидание, циклы, ветвления и остановку скриптов.

## Блоки ожидания

### `Ждать` {#block_control_wait_for}

<img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />

Приостанавливает текущий скрипт на указанное время.

### `Ждать до` {#block_control_wait_until}

<img src={useBaseUrl('/img/blocks/block_control_wait_until.svg')} alt="block_control_wait_until.svg" />

Приостанавливает текущий скрипт, пока условие не станет истинным.

## Блоки циклов

### `Повторить` {#block_control_repeat_for}

<img src={useBaseUrl('/img/blocks/block_control_repeat_for.svg')} alt="block_control_repeat_for.svg" />

Выполняет вложенные блоки фиксированное количество раз.

### `Повторять до` {#block_control_repeat_until}

<img src={useBaseUrl('/img/blocks/block_control_repeat_until.svg')} alt="block_control_repeat_until.svg" />

Повторяет вложенные блоки, пока условие не станет истинным.

### `Всегда` {#block_control_repeat_forever}

<img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />

Бесконечно выполняет вложенные блоки, пока программа/скрипт не будет остановлен.

## Блоки ветвления

### `Если` {#block_control_if}

<img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />

Выполняет вложенные блоки только если условие истинно.

### `Если / Иначе` {#block_control_if_else}

<img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />

Выполняет одну ветку, когда условие истинно, иначе выполняет альтернативную ветку.

### `Сделать это и это` {#block_control_do_this_and_this}

<img src={useBaseUrl('/img/blocks/block_control_do_this_and_this.svg')} alt="block_control_do_this_and_this.svg" />

Выполняет два стека блоков последовательно в рамках одной операции управления.

## Блоки остановки

### `Стоп` {#block_control_stop}

<img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />

Останавливает выполнение скрипта (область остановки зависит от выбранного режима).

- Варианты остановки: `all`, `this stack`, `and exit program`

### `Остановить другие стеки` {#block_control_stop_other_stacks}

<img src={useBaseUrl('/img/blocks/block_control_stop_other_stacks.svg')} alt="block_control_stop_other_stacks.svg" />

Останавливает все другие работающие стеки, оставляя текущий стек активным.

## Вспомогательные блоки хаба/управления

### `Установить подключение` {#block_hubs_control_set_connect}

<img src={useBaseUrl('/img/blocks/block_hubs_control_set_connect.svg')} alt="block_hubs_control_set_connect.svg" />

Управляет состоянием подключения хаба из логики управления.

- Варианты действия: `connect`, `disconnect`

### `Подключен` {#block_hubs_all_sensors_is_connected}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_connected.svg')} alt="block_hubs_all_sensors_is_connected.svg" />

Возвращает, подключён ли хаб в текущий момент.

- Тип: boolean-репортер

### `BuWizz 2: установить режим мощности` {#block_hubs_buwizz_sensors_set_power_mode}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_set_power_mode.svg')} alt="block_hubs_buwizz_sensors_set_power_mode.svg" />

Устанавливает режим мощности хаба BuWizz 2.

- Варианты режима: `Slow`, `Normal`, `Fast`, `Ludicrous`

### `BuWizz 2: получить режим мощности` {#block_hubs_buwizz_sensors_get_power_mode}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_get_power_mode.svg')} alt="block_hubs_buwizz_sensors_get_power_mode.svg" />

Возвращает текущий активный режим мощности BuWizz 2.

- Варианты формата вывода: `text`, `index`

### `MouldKing: установить канал управления` {#block_hubs_mouldking_control_set_control_channel}

<img src={useBaseUrl('/img/blocks/block_hubs_mouldking_control_set_control_channel.svg')} alt="block_hubs_mouldking_control_set_control_channel.svg" />

Устанавливает активный канал управления для поддерживаемого хаба/контроллера MouldKing.

- Варианты канала: `A`, `B`, `C`

### `MouldKing: получить канал управления` {#block_hubs_mouldking_control_get_control_channel}

<img src={useBaseUrl('/img/blocks/block_hubs_mouldking_control_get_control_channel.svg')} alt="block_hubs_mouldking_control_get_control_channel.svg" />

Возвращает текущий активный канал управления для поддерживаемого хаба/контроллера MouldKing.

- Варианты формата вывода: `text`, `index`

## Примечания по использованию

- Используйте `wait until` с boolean-репортерами из Sensors/Operators.
- Добавляйте защитные условия в циклы, чтобы избежать нежелательных бесконечных повторов.
- Используйте `if / else`, когда нужно явно обработать оба сценария (true/false).
