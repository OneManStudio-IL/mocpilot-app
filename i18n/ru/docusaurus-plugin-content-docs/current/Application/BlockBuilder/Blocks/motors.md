---
id: Motors
title: Моторы
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Моторы

Блоки моторов используются для запуска, остановки, позиционирования и настройки моторов, подключенных к портам хаба.

## Основные командные блоки моторов

### `Запустить мотор` {#block_hubs_all_motors_port_start_motor}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor.svg')} alt="block_hubs_all_motors_port_start_motor.svg" />
Запускает выбранный мотор.

- Варианты направления: по часовой стрелке / против часовой стрелки

### `Остановить мотор` {#block_hubs_all_motors_port_stop_motor}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_stop_motor.svg')} alt="block_hubs_all_motors_port_stop_motor.svg" />
Останавливает выбранный мотор.

### `Запустить на` {#block_hubs_all_motors_port_run_for}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for.svg')} alt="block_hubs_all_motors_port_run_for.svg" />
Запускает выбранный мотор на заданное время/угол/обороты в зависимости от настроек блока.

- Варианты направления: по часовой стрелке / против часовой стрелки
- Варианты единиц: `обороты`, `градусы`, `секунды`
- Примечание: эта функция требует мотор на выбранном порту с поддержкой энкодерного управления.

### `Запустить мотор со скоростью` {#block_hubs_all_motors_port_start_motor_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor_at_speed.svg')} alt="block_hubs_all_motors_port_start_motor_at_speed.svg" />
Запускает мотор с явно указанной скоростью.

### `Запустить на (со скоростью)` {#block_hubs_all_motors_port_run_for_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for_at_speed.svg')} alt="block_hubs_all_motors_port_run_for_at_speed.svg" />
Запускает мотор на заданную длительность/величину с явно заданной скоростью.

- Варианты единиц: `обороты`, `градусы`, `секунды`
- Примечание: эта функция требует мотор на выбранном порту с поддержкой энкодерного управления.

### `Установить скорость мотора` {#block_hubs_all_motors_port_set_motor_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_speed.svg')} alt="block_hubs_all_motors_port_set_motor_speed.svg" />
Задает скорость, используемую связанными блоками запуска мотора.

## Блоки позиции и перемещения

### `Перейти к позиции` {#block_hubs_all_motors_port_go_to_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_position.svg')} alt="block_hubs_all_motors_port_go_to_position.svg" />
Перемещает мотор в целевую абсолютную позицию.

- Варианты пути: `кратчайший путь`, `по часовой стрелке`, `против часовой стрелки`
- Примечание: эта функция требует мотор на выбранном порту с поддержкой энкодерного управления.

### `Перейти к относительной позиции` {#block_hubs_all_motors_port_go_to_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_relative_position.svg')} alt="block_hubs_all_motors_port_go_to_relative_position.svg" />
Перемещает мотор на относительное смещение.

- Примечание: эта функция требует мотор на выбранном порту с поддержкой энкодерного управления.

### `BuWizz 3: перейти к относительной позиции` {#block_hubs_buwizz3_motors_port_go_to_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_motors_port_go_to_relative_position.svg')} alt="block_hubs_buwizz3_motors_port_go_to_relative_position.svg" />
Вариант блока относительного позиционирования для BuWizz 3.

- Примечание: эта функция требует мотор на выбранном порту с поддержкой энкодерного управления.

### `Установить относительную позицию` {#block_hubs_all_motors_port_set_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_relative_position.svg')} alt="block_hubs_all_motors_port_set_relative_position.svg" />
Устанавливает опорное значение относительной позиции мотора.

- Примечание: эта функция требует мотор на выбранном порту с поддержкой энкодерного управления.

### `Калибровать рулевую рейку` {#block_hubs_all_motors_port_calibrate_steering_rack}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_calibrate_steering_rack.svg')} alt="block_hubs_all_motors_port_calibrate_steering_rack.svg" />
Калибрует нейтраль/референс рулевой рейки.

- Требование: мотор на выбранном порту должен поддерживать энкодерный контроль угла/позиции.
- Механическое требование: ось должна иметь физические ограничения хода (например, рулевая рейка/шестерни).
- Примечание: эта функция требует мотор на выбранном порту с поддержкой энкодерного управления.

## Блоки тюнинга и безопасности мотора

### `Установить поведение мотора при остановке` {#block_hubs_all_motors_port_set_motor_to_at_stop}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_to_at_stop.svg')} alt="block_hubs_all_motors_port_set_motor_to_at_stop.svg" />
Задает поведение мотора при остановке.

- Варианты режима остановки: `тормоз`, `удерживать позицию`, `накат`
- Примечание: эта функция требует мотор на выбранном порту с поддержкой энкодерного управления.

### `Установить обнаружение заклинивания` {#block_hubs_all_motors_port_set_motors_stall_detection}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motors_stall_detection.svg')} alt="block_hubs_all_motors_port_set_motors_stall_detection.svg" />
Включает или выключает обнаружение заклинивания.

- Примечание: доступно только для хаба MINDSTORMS Robot Inventor.

### `Установить ускорение` {#block_hubs_all_motors_port_set_acceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_acceleration.svg')} alt="block_hubs_all_motors_port_set_acceleration.svg" />
Настраивает профиль/скорость ускорения мотора.

- Варианты профиля: `default`, `fast`, `balanced`, `smooth`, `slow`, `very slow`
- Примечание: эта функция требует мотор на выбранном порту с поддержкой энкодерного управления.

### `Установить замедление` {#block_hubs_all_motors_port_set_deceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_deceleration.svg')} alt="block_hubs_all_motors_port_set_deceleration.svg" />
Настраивает профиль/скорость замедления мотора.

- Варианты профиля: `default`, `fast`, `balanced`, `smooth`, `slow`, `very slow`
- Примечание: эта функция требует мотор на выбранном порту с поддержкой энкодерного управления.

## Репортер-блоки моторов

### `Позиция` {#block_hubs_all_motors_port_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_position.svg')} alt="block_hubs_all_motors_port_position.svg" />
Возвращает текущую позицию мотора.

### `Относительная позиция` {#block_hubs_all_motors_port_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_relative_position.svg')} alt="block_hubs_all_motors_port_relative_position.svg" />
Возвращает текущее значение относительной позиции.

### `Скорость` {#block_hubs_all_motors_port_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_speed.svg')} alt="block_hubs_all_motors_port_speed.svg" />
Возвращает текущую скорость мотора.

### `Мощность` {#block_hubs_all_motors_port_power}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_power.svg')} alt="block_hubs_all_motors_port_power.svg" />
Возвращает текущее значение мощности мотора.

- Примечание: доступно только для хаба MINDSTORMS Robot Inventor.

## Блоки моторов Technic Move

### `Запустить моторы со скоростью` {#block_hubs_technicmove_motors_start_motors_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_start_motors_at_speed.svg')} alt="block_hubs_technicmove_motors_start_motors_at_speed.svg" />
Запускает приводные моторы Technic Move с выбранной скоростью.

### `Остановить моторы` {#block_hubs_technicmove_motors_stop_motors}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_stop_motors.svg')} alt="block_hubs_technicmove_motors_stop_motors.svg" />
Останавливает приводные моторы Technic Move.

### `Тормоз` {#block_hubs_technicmove_motors_brake}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_brake.svg')} alt="block_hubs_technicmove_motors_brake.svg" />
Применяет режим торможения к моторам Technic Move.

- Варианты торможения: `выкл`, `вкл`

### `Установить рулевую рейку в` {#block_hubs_technicmove_motors_set_steering_rack_to}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_set_steering_rack_to.svg')} alt="block_hubs_technicmove_motors_set_steering_rack_to.svg" />
Устанавливает целевое значение рулевой рейки.

### `Калибровать рулевую рейку` {#block_hubs_technicmove_motors_calibrate_steering_rack}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_calibrate_steering_rack.svg')} alt="block_hubs_technicmove_motors_calibrate_steering_rack.svg" />
Калибрует рулевую рейку Technic Move с использованием внутреннего алгоритма калибровки хаба и автоматического определения диапазона.

- Примечание: ось мотора должна иметь механическое ограничение хода (например, рулевой рейкой).
