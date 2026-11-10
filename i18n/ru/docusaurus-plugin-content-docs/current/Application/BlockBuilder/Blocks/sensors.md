---
id: Sensors
title: Датчики
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Датчики

Блоки датчиков считывают состояние хаба/устройства и дают данные для условий, событий и логики управления.

## Датчики Устройства И Хаба

### `Уровень батареи хаба` (Новичок) {#block_hubs_all_sensors_battery_level}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_battery_level.svg')} alt="block_hubs_all_sensors_battery_level.svg" />
Возвращает текущий уровень батареи хаба.

### `Напряжение батареи хаба` (Продвинутый) {#block_hubs_all_sensors_battery_voltage}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_battery_voltage.svg')} alt="block_hubs_all_sensors_battery_voltage.svg" />
Возвращает напряжение батареи выбранного хаба в вольтах.

- Тип: числовой блок-репортер
- Доступно только для хабов, которые сообщают напряжение батареи.
- Возвращает `NaN`, когда выбранный хаб не подключен.

### `Батарея устройства %` (Новичок) {#block_sensors_device_battery_level}
<img src={useBaseUrl('/img/blocks/block_sensors_device_battery_level.svg')} alt="block_sensors_device_battery_level.svg" />
Возвращает текущий уровень батареи телефона/планшета, на котором запущен MOCPilot (в процентах).

### `Температура платы` (Продвинутый) {#block_hubs_all_sensors_board_temp}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_board_temp.svg')} alt="block_hubs_all_sensors_board_temp.svg" />
Возвращает температуру платы хаба.

- Доступно только для `BuWizz 2` и `BuWizz 3`.

### `Акселерометр хаба` (Гуру) {#block_hubs_all_sensors_accelerometer}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_accelerometer.svg')} alt="block_hubs_all_sensors_accelerometer.svg" />
Возвращает необработанные данные акселерометра, сообщаемые выбранным хабом.

- Оси: `x`, `y`, `z`

### `Ускорение хаба` (Гуру) {#block_hubs_all_sensors_acceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_acceleration.svg')} alt="block_hubs_all_sensors_acceleration.svg" />
Возвращает данные ускорения, сообщаемые выбранным хабом.

- Оси: `x`, `y`, `z`

### `Кнопка нажата` (Новичок) {#block_hubs_all_sensors_button_pressed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_button_pressed.svg?v=20260409-2258')} alt="block_hubs_all_sensors_button_pressed.svg" />
Проверяет, соответствует ли выбранная кнопка хаба выбранному состоянию.

- Варианты состояния: `нажата`, `отпущена`
- Типичный вариант кнопки: `center` (зависит от хаба)

- Примечание: доступные варианты кнопок могут отличаться в зависимости от модели хаба (разные хабы могут предоставлять разные наборы кнопок).

### `Тип устройства` (Новичок) {#block_hubs_all_motors_port_device_type}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_device_type.svg')} alt="block_hubs_all_motors_port_device_type.svg" />
Возвращает тип подключенного устройства для выбранного порта.

- Тип: репортер-блок
- Типичное использование: определить, какое устройство подключено, перед запуском логики, зависящей от устройства

### `Акселерометр устройства` (Гуру) {#block_sensors_device_accelerometer_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_accelerometer_sensor_data.svg')} alt="block_sensors_device_accelerometer_sensor_data.svg" />
Возвращает сырые значения акселерометра устройства.

- Варианты осей: `x`, `y`, `z`

### `Ускорение устройства` (Гуру) {#block_sensors_device_acceleration_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_acceleration_sensor_data.svg')} alt="block_sensors_device_acceleration_sensor_data.svg" />
Возвращает данные ускорения с датчиков устройства.

- Варианты осей: `x`, `y`, `z`

## Датчики Ориентации И Наклона

### `Наклон устройства` (Продвинутый) {#block_sensors_device_tilt_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_tilt_sensor_data.svg')} alt="block_sensors_device_tilt_sensor_data.svg" />
Возвращает данные наклона телефона/планшета, на котором запущен MOCPilot.

- Оси: `pitch`, `roll`

### `Наклон` (Новичок) {#block_hubs_all_sensors_tilt}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_tilt.svg')} alt="block_hubs_all_sensors_tilt.svg" />
Возвращает угол наклона по выбранной оси.

- Варианты осей: `тангаж`, `крен`, `рыскание`
- Примечание: `рыскание` доступно только на хабах, которые предоставляют данные рыскания.

### `Получить ориентацию` (Новичок) {#block_hubs_sensors_get_orientation}
<img src={useBaseUrl('/img/blocks/block_hubs_sensors_get_orientation.svg')} alt="block_hubs_sensors_get_orientation.svg" />
Возвращает текущее состояние ориентации хаба.

- Варианты формата вывода: `текст`, `индекс`
- Значения ориентации: `Перед`, `Верх`, `Право`, `Зад`, `Низ`, `Лево`

### `Ориентация сверху` (Новичок) {#block_hubs_all_sensors_is_orientation_up}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_orientation_up.svg')} alt="block_hubs_all_sensors_is_orientation_up.svg" />
Проверяет, соответствует ли ориентация хаба выбранной ориентации «вверх».

- Варианты ориентации: `Перед`, `Верх`, `Право`, `Зад`, `Низ`, `Лево`

### `Задать ориентацию наклона` (Продвинутый) {#block_hubs_sensors_set_tilt_orientation}
<img src={useBaseUrl('/img/blocks/block_hubs_sensors_set_tilt_orientation.svg')} alt="block_hubs_sensors_set_tilt_orientation.svg" />
Настраивает опорную ориентацию, используемую блоками наклона/ориентации.

- Варианты ориентации: `Перед`, `Верх`, `Право`, `Зад`, `Низ`, `Лево`

## Таймер И Датчики Движения

### `Таймер` (Продвинутый) {#block_sensors_timer_value_float}
<img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
Возвращает значение таймера в секундах.

### `Сбросить таймер` (Продвинутый) {#block_sensors_timer_reset}
<img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
Сбрасывает таймер в ноль.

## Блоки Датчиков Портов

### `Technic датчик расстояния` (Новичок) {#block_hubs_all_sensors_port_technic_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_distance.svg')} alt="block_hubs_all_sensors_port_technic_sensor_distance.svg" />
Возвращает значения расстояния с датчика расстояния Technic.

- Варианты единиц: `мм`, `см`, `дюйм`, `процент`

### `Technic когда расстояние` (Новичок) {#block_hubs_all_sensors_port_technic_sensor_when_distance_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg" />
Срабатывает/проверяет условие расстояния для датчика расстояния Technic.

- Варианты сравнения: `ближе чем`, `дальше чем`, `ровно`
- Варианты единиц: `мм`, `см`, `дюйм`, `процент`

### `Technic установить режим датчика цвета` (Продвинутый) {#block_hubs_all_sensors_port_technic_sensor_set_mode}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_set_mode.svg')} alt="block_hubs_all_sensors_port_technic_sensor_set_mode.svg" />
Этот блок устанавливает датчик цвета Technic в выбранный режим.

- Примечание: Изменение режима датчика цвета может неожиданно повлиять на вашу программу. Например, датчик цвета Technic не может считывать цвета или отражённый свет, когда он находится в режиме `"окружающий"`.

### `Technic значение цвета` (Новичок) {#block_hubs_all_sensors_port_technic_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_color.svg" />
Возвращает определенное значение цвета с датчика расстояния Technic.

- Варианты вывода: `значение`, `строка`

### `Technic когда цвет` (Новичок) {#block_hubs_all_sensors_port_technic_sensor_when_color_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_color_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_color_is.svg" />
Срабатывает/проверяет, когда определенный цвет совпадает с выбранным цветом.

### `Technic отраженный свет` (Новичок) {#block_hubs_all_sensors_port_technic_sensor_reflected_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_reflected_light.svg" />
Возвращает интенсивность отраженного света.

### `Technic когда отраженный свет` (Новичок) {#block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg" />
Срабатывает/проверяет пороговое условие отраженного света.

- Варианты сравнения: `<`, `=`, `>`

### `Technic внешний свет` (Новичок) {#block_hubs_all_sensors_port_technic_sensor_ambient_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_ambient_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_ambient_light.svg" />
Возвращает интенсивность внешнего света.

### `Technic когда внешний свет` (Новичок) {#block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is.svg" />
Срабатывает/проверяет пороговое условие внешнего света.

- Варианты сравнения: `<`, `=`, `>`

### `Technic сырой цвет` (Новичок) {#block_hubs_all_sensors_port_technic_sensor_raw_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_raw_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_raw_color.svg" />
Возвращает значение сырого цветового канала датчика Technic.

- Варианты канала: `красный`, `зелёный`, `синий`

### `BOOST датчик расстояния` (Новичок) {#block_hubs_all_sensors_port_boost_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_distance.svg" />
Возвращает расстояние с датчика расстояния BOOST.

- Варианты единиц: `процент`, `см`, `дюйм`

### `BOOST когда расстояние` (Новичок) {#block_hubs_all_sensors_port_boost_sensor_when_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_distance.svg" />
Срабатывает/проверяет условие расстояния для датчика расстояния BOOST.

- Варианты сравнения: `ближе чем`, `дальше чем`, `ровно`
- Варианты единиц: `процент`, `см`, `дюйм`

### `BOOST датчик цвета` (Новичок) {#block_hubs_all_sensors_port_boost_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_color.svg" />
Возвращает цвет, определенный датчиком BOOST.

- Варианты вывода: `значение`, `строка`

### `BOOST это цвет` (Новичок) {#block_hubs_all_sensors_port_boost_sensor_is_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_is_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_is_color.svg" />
Проверяет, определяет ли датчик BOOST выбранный цвет в текущий момент.

### `BOOST отраженный свет` (Новичок) {#block_hubs_all_sensors_port_boost_sensor_reflected_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_boost_sensor_reflected_light.svg" />
Возвращает значение отраженного света с датчика BOOST.

### `BOOST когда отраженный свет` (Новичок) {#block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg" />
Срабатывает/проверяет пороговое условие отраженного света для датчика BOOST.

- Варианты сравнения: `<`, `=`, `>`

### `Technic Move режим мощности` (Новичок) {#block_hubs_technicmove_sensors_set_power_mode}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_sensors_set_power_mode.svg')} alt="block_hubs_technicmove_sensors_set_power_mode.svg" />
Устанавливает режим мощности Technic Move.

- Варианты режима: `обычный`, `буст`

### `Выходное напряжение BuWizz` (Гуру) {#block_hubs_buwizz_sensors_get_output_voltage}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_get_output_voltage.svg')} alt="block_hubs_buwizz_sensors_get_output_voltage.svg" />
Возвращает текущее выходное напряжение, сообщаемое хабом BuWizz.

- Доступно только для поддерживаемых хабов BuWizz.

### `Ток порта BuWizz` (Гуру) {#block_hubs_buwizz_sensors_port_get_current}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_port_get_current.svg')} alt="block_hubs_buwizz_sensors_port_get_current.svg" />
Возвращает потребляемый ток, сообщаемый для выбранного порта хаба BuWizz.

- Доступно только для поддерживаемых хабов и портов BuWizz.

### `WeDo 2 расстояние` (Новичок) {#block_hubs_all_sensors_port_wedo2_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_sensor_distance.svg')} alt="block_hubs_all_sensors_port_wedo2_sensor_distance.svg" />
Возвращает расстояние с датчика расстояния WeDo 2.

- Варианты единиц: `процент`, `см`, `дюйм`

### `WeDo 2 когда расстояние` (Новичок) {#block_hubs_all_sensors_port_wedo2_sensor_when_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_sensor_when_distance.svg')} alt="block_hubs_all_sensors_port_wedo2_sensor_when_distance.svg" />
Запускает/проверяет условие расстояния для датчика расстояния WeDo 2.

- Варианты сравнения: `closer than`, `farther than`, `exactly at`
- Единицы: `%`, `cm`, `inch`

### `WeDo 2 наклон` (Новичок) {#block_hubs_all_sensors_port_wedo2_tilt}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_tilt.svg')} alt="block_hubs_all_sensors_port_wedo2_tilt.svg" />
Возвращает значение наклона с датчика наклона WeDo 2.

- Варианты осей: `тангаж`, `крен`