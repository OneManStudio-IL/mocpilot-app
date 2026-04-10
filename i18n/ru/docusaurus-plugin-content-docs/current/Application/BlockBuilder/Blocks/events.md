---
id: Events
title: События
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# События

Категория **Events** содержит блоки, которые запускают скрипты при наступлении условий.

## Базовые события

### `Когда программа запущена` {#block_event_when_program_started}

<img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />

Запускает этот скрипт один раз при старте программы профиля.

- Триггер: запуск программы
- Типичное применение: инициализация переменных, состояния моторов по умолчанию, стартовые действия

### `Когда` {#block_event_when}

<img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />

Срабатывает, когда выбранное условие становится истинным.

- Триггер: условие
- Типичное применение: запуск ветки логики по состоянию в рантайме

### `Когда таймер больше чем` {#block_event_when_timer_greater_than}

<img src={useBaseUrl('/img/blocks/block_event_when_timer_greater_than.svg')} alt="block_event_when_timer_greater_than.svg" />

Срабатывает, когда значение таймера превышает порог.

- Триггер: прошедшее время
- Типичное применение: задержанные действия, фазовые сценарии

### `Когда сообщение получено` {#block_event_when_message_recieved}

<img src={useBaseUrl('/img/blocks/block_event_when_message_recieved.svg')} alt="block_event_when_message_recieved.svg" />

Запускает скрипт при получении соответствующего broadcast-сообщения.

- Триггер: канал сообщений
- Типичное применение: синхронизация нескольких скриптов

### `Рассылка` {#block_event_broadcast}

<img src={useBaseUrl('/img/blocks/block_event_broadcast.svg')} alt="block_event_broadcast.svg" />

Отправляет сообщение всем скриптам, которые слушают этот канал.

- Триггер: немедленная отправка
- Типичное применение: уведомить другие скрипты без ожидания

### `Рассылка и ждать` {#block_event_broadcast_and_wait}

<img src={useBaseUrl('/img/blocks/block_event_broadcast_and_wait.svg')} alt="block_event_broadcast_and_wait.svg" />

Отправляет сообщение и ставит текущий скрипт на паузу до завершения слушателей.

- Триггер: отправка + ожидание
- Типичное применение: поэтапные сценарии, где важен порядок

## События хаба

### `Кнопка хаба нажата` {#block_hubs_all_event_button_pressed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_button_pressed.svg')} alt="block_hubs_all_event_button_pressed.svg" />

Срабатывает при изменении состояния кнопки хаба.

- Варианты состояния: `нажата`, `отпущена`, `изменилось`
- Примечание: набор доступных кнопок может отличаться в зависимости от модели хаба.

### `Подключение хаба изменилось` {#block_hubs_all_event_connection_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_connection_changed.svg')} alt="block_hubs_all_event_connection_changed.svg" />

Срабатывает при изменении состояния подключения хаба (подключен/отключен).

- Триггер: изменение статуса соединения
- Типичное применение: логика переподключения и безопасное поведение при потере связи

### `Батарея хаба изменилась` {#block_hubs_all_event_battery_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_battery_changed.svg')} alt="block_hubs_all_event_battery_changed.svg" />

Срабатывает при изменении сообщаемого уровня батареи хаба.

- Триггер: обновление уровня батареи (для хабов, которые это поддерживают)
- Типичное применение: предупреждение о низком заряде, переключение в экономичный режим

### `Акселерометр хаба изменился` {#block_hubs_all_event_accelerometer_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_accelerometer_changed.svg')} alt="block_hubs_all_event_accelerometer_changed.svg" />

Срабатывает при изменении значений ускорения.

### `Наклон хаба изменился` {#block_hubs_all_event_tilt_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_changed.svg')} alt="block_hubs_all_event_tilt_changed.svg" />

Срабатывает при изменении значения наклона.

- Варианты угла: `любой`, `тангаж`, `крен`, `рыскание`
- Примечание: `рыскание` доступно только на хабах, которые предоставляют данные рыскания.

### `Ориентация хаба изменилась` {#block_hubs_all_event_tilt_orientation_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_orientation_changed.svg')} alt="block_hubs_all_event_tilt_orientation_changed.svg" />

Срабатывает при изменении ориентации (например, перед/вверх/вниз/влево/вправо).

## События датчиков на портах

### `Событие датчика цвета Technic` {#block_hubs_all_event_port_technic_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_color.svg')} alt="block_hubs_all_event_port_technic_sensor_color.svg" />

Срабатывает, когда датчик цвета Technic сообщает выбранный цвет.


### `Событие датчика расстояния Technic` {#block_hubs_all_event_port_technic_sensor_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_distance.svg')} alt="block_hubs_all_event_port_technic_sensor_distance.svg" />

Срабатывает, когда значения расстояния датчика Technic соответствуют выбранному условию.

- Варианты сравнения: `ближе чем`, `дальше чем`, `ровно`
- Варианты единиц: `мм`, `см`, `дюйм`, `процент`
- Примечание: доступные единицы могут зависеть от режима датчика и подключенного устройства.

### `Событие датчика расстояния BOOST` {#block_hubs_all_event_port_boost_sensor_when_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_event_port_boost_sensor_when_distance.svg" />

Срабатывает, когда датчик расстояния BOOST достигает выбранного порога/условия.

- Варианты сравнения: `ближе чем`, `дальше чем`, `ровно`
- Варианты единиц: `процент`, `см`, `дюйм`

### `Событие датчика цвета BOOST` {#block_hubs_all_event_port_boost_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_color.svg')} alt="block_hubs_all_event_port_boost_sensor_color.svg" />

Срабатывает, когда датчик BOOST определяет выбранный цвет/значение.

## Примечания

- Событийные блоки могут срабатывать очень часто (особенно при изменениях датчиков/контроллеров).
- Для стабильной работы добавляйте пороги, фильтрацию или короткие задержки.
- Для координации скриптов чаще используйте broadcast, вместо дублирования логики.
