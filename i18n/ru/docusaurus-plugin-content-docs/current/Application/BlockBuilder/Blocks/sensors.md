---
id: Sensors
title: Датчики
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Датчики

Блоки датчиков считывают состояние хаба/устройства и дают данные для условий, событий и логики управления.

## Датчики Устройства И Хаба

### `Уровень батареи хаба` {#block_hubs_all_sensors_battery_level}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_battery_level.svg')} alt="block_hubs_all_sensors_battery_level.svg" />
Возвращает текущий уровень батареи хаба.

### `Батарея устройства %` {#block_sensors_device_battery_level}
<img src={useBaseUrl('/img/blocks/block_sensors_device_battery_level.svg')} alt="block_sensors_device_battery_level.svg" />
Возвращает текущий уровень батареи телефона/планшета, на котором запущен MOCPilot (в процентах).

### `Температура платы` {#block_hubs_all_sensors_board_temp}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_board_temp.svg')} alt="block_hubs_all_sensors_board_temp.svg" />
Возвращает температуру платы хаба.

- Доступно только для `BuWizz 2` и `BuWizz 3`.

### `Кнопка нажата` {#block_hubs_all_sensors_button_pressed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_button_pressed.svg?v=20260409-2258')} alt="block_hubs_all_sensors_button_pressed.svg" />
Проверяет, соответствует ли выбранная кнопка хаба выбранному состоянию.

- Варианты состояния: `нажата`, `отпущена`
- Типичный вариант кнопки: `center` (зависит от хаба)

- Примечание: доступные варианты кнопок могут отличаться в зависимости от модели хаба (разные хабы могут предоставлять разные наборы кнопок).

### `Тип устройства` {#block_hubs_all_motors_port_device_type}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_device_type.svg')} alt="block_hubs_all_motors_port_device_type.svg" />
Возвращает тип подключенного устройства для выбранного порта.

- Тип: репортер-блок
- Типичное использование: определить, какое устройство подключено, перед запуском логики, зависящей от устройства

### `Акселерометр устройства` {#block_sensors_device_accelerometer_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_accelerometer_sensor_data.svg')} alt="block_sensors_device_accelerometer_sensor_data.svg" />
Возвращает сырые значения акселерометра устройства.

- Варианты осей: `x`, `y`, `z`

### `Ускорение устройства` {#block_sensors_device_acceleration_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_acceleration_sensor_data.svg')} alt="block_sensors_device_acceleration_sensor_data.svg" />
Возвращает данные ускорения с датчиков устройства.

- Варианты осей: `x`, `y`, `z`

## Датчики Ориентации И Наклона

### `Наклон` {#block_hubs_all_sensors_tilt}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_tilt.svg')} alt="block_hubs_all_sensors_tilt.svg" />
Возвращает угол наклона по выбранной оси.

- Варианты осей: `тангаж`, `крен`, `рыскание`
- Примечание: `рыскание` доступно только на хабах, которые предоставляют данные рыскания.

### `Получить ориентацию` {#block_hubs_sensors_get_orientation}
<img src={useBaseUrl('/img/blocks/block_hubs_sensors_get_orientation.svg')} alt="block_hubs_sensors_get_orientation.svg" />
Возвращает текущее состояние ориентации хаба.

- Варианты формата вывода: `текст`, `индекс`
- Значения ориентации: `Перед`, `Верх`, `Право`, `Зад`, `Низ`, `Лево`

### `Ориентация сверху` {#block_hubs_all_sensors_is_orientation_up}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_orientation_up.svg')} alt="block_hubs_all_sensors_is_orientation_up.svg" />
Проверяет, соответствует ли ориентация хаба выбранной ориентации «вверх».

- Варианты ориентации: `Перед`, `Верх`, `Право`, `Зад`, `Низ`, `Лево`

### `Задать ориентацию наклона` {#block_hubs_sensors_set_tilt_orientation}
<img src={useBaseUrl('/img/blocks/block_hubs_sensors_set_tilt_orientation.svg')} alt="block_hubs_sensors_set_tilt_orientation.svg" />
Настраивает опорную ориентацию, используемую блоками наклона/ориентации.

- Варианты ориентации: `Перед`, `Верх`, `Право`, `Зад`, `Низ`, `Лево`

## Таймер И Датчики Движения

### `Таймер` {#block_sensors_timer_value_float}
<img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
Возвращает значение таймера в секундах.

### `Сбросить таймер` {#block_sensors_timer_reset}
<img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
Сбрасывает таймер в ноль.

## Блоки Датчиков Портов

### `Technic датчик расстояния` {#block_hubs_all_sensors_port_technic_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_distance.svg')} alt="block_hubs_all_sensors_port_technic_sensor_distance.svg" />
Возвращает значения расстояния с датчика расстояния Technic.

- Варианты единиц: `мм`, `см`, `дюйм`, `процент`

### `Technic когда расстояние` {#block_hubs_all_sensors_port_technic_sensor_when_distance_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg" />
Срабатывает/проверяет условие расстояния для датчика расстояния Technic.

- Варианты сравнения: `ближе чем`, `дальше чем`, `ровно`
- Варианты единиц: `мм`, `см`, `дюйм`, `процент`

### `Technic значение цвета` {#block_hubs_all_sensors_port_technic_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_color.svg" />
Возвращает определенное значение цвета с датчика расстояния Technic.

- Варианты вывода: `значение`, `строка`

### `Technic когда цвет` {#block_hubs_all_sensors_port_technic_sensor_when_color_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_color_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_color_is.svg" />
Срабатывает/проверяет, когда определенный цвет совпадает с выбранным цветом.

### `Technic отраженный свет` {#block_hubs_all_sensors_port_technic_sensor_reflected_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_reflected_light.svg" />
Возвращает интенсивность отраженного света.

### `Technic когда отраженный свет` {#block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg" />
Срабатывает/проверяет пороговое условие отраженного света.

- Варианты сравнения: `<`, `=`, `>`

### `Technic внешний свет` {#block_hubs_all_sensors_port_technic_sensor_ambient_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_ambient_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_ambient_light.svg" />
Возвращает интенсивность внешнего света.

### `Technic когда внешний свет` {#block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is.svg" />
Срабатывает/проверяет пороговое условие внешнего света.

- Варианты сравнения: `<`, `=`, `>`

### `Technic сырой цвет` {#block_hubs_all_sensors_port_technic_sensor_raw_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_raw_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_raw_color.svg" />
Возвращает значение сырого цветового канала датчика Technic.

- Варианты канала: `red`, `green`, `blue`

### `BOOST датчик расстояния` {#block_hubs_all_sensors_port_boost_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_distance.svg" />
Возвращает расстояние с датчика расстояния BOOST.

- Варианты единиц: `процент`, `см`, `дюйм`

### `BOOST когда расстояние` {#block_hubs_all_sensors_port_boost_sensor_when_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_distance.svg" />
Срабатывает/проверяет условие расстояния для датчика расстояния BOOST.

- Варианты сравнения: `ближе чем`, `дальше чем`, `ровно`
- Варианты единиц: `процент`, `см`, `дюйм`

### `BOOST датчик цвета` {#block_hubs_all_sensors_port_boost_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_color.svg" />
Возвращает цвет, определенный датчиком BOOST.

- Варианты вывода: `значение`, `строка`

### `BOOST это цвет` {#block_hubs_all_sensors_port_boost_sensor_is_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_is_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_is_color.svg" />
Проверяет, определяет ли датчик BOOST выбранный цвет в текущий момент.

### `BOOST отраженный свет` {#block_hubs_all_sensors_port_boost_sensor_reflected_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_boost_sensor_reflected_light.svg" />
Возвращает значение отраженного света с датчика BOOST.

### `BOOST когда отраженный свет` {#block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg" />
Срабатывает/проверяет пороговое условие отраженного света для датчика BOOST.

- Варианты сравнения: `<`, `=`, `>`

### `Technic Move режим мощности` {#block_hubs_technicmove_sensors_set_power_mode}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_sensors_set_power_mode.svg')} alt="block_hubs_technicmove_sensors_set_power_mode.svg" />
Устанавливает режим мощности Technic Move.

- Варианты режима: `обычный`, `буст`

### `WeDo 2 расстояние` {#block_hubs_all_sensors_port_wedo2_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_sensor_distance.svg')} alt="block_hubs_all_sensors_port_wedo2_sensor_distance.svg" />
Возвращает расстояние с датчика расстояния WeDo 2.

- Варианты единиц: `процент`, `см`, `дюйм`

### `WeDo 2 наклон` {#block_hubs_all_sensors_port_wedo2_tilt}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_tilt.svg')} alt="block_hubs_all_sensors_port_wedo2_tilt.svg" />
Возвращает значение наклона с датчика наклона WeDo 2.

- Варианты осей: `тангаж`, `крен`