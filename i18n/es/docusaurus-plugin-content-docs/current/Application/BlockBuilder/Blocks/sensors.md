---
id: Sensors
title: Sensores
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Sensores

Los bloques de sensores leen el estado del hub/dispositivo y proporcionan datos para condiciones, eventos y lógica de control.

## Sensores del dispositivo y del hub

### `Nivel de batería del hub` {#block_hubs_all_sensors_battery_level}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_battery_level.svg')} alt="block_hubs_all_sensors_battery_level.svg" />
Devuelve el nivel actual de batería del hub.

### `Batería del dispositivo %` {#block_sensors_device_battery_level}
<img src={useBaseUrl('/img/blocks/block_sensors_device_battery_level.svg')} alt="block_sensors_device_battery_level.svg" />
Devuelve el nivel de batería del dispositivo (teléfono/tableta) en porcentaje.

### `Temperatura de la placa` {#block_hubs_all_sensors_board_temp}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_board_temp.svg')} alt="block_hubs_all_sensors_board_temp.svg" />
Devuelve la temperatura de la placa del hub.

- Disponible solo en `BuWizz 2` y `BuWizz 3`.

### `Botón presionado` {#block_hubs_all_sensors_button_pressed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_button_pressed.svg?v=20260409-2258')} alt="block_hubs_all_sensors_button_pressed.svg" />
Comprueba si el botón seleccionado coincide con el estado elegido.

- Estados: `presionado`, `soltado`
- Opción típica: `centro`
- Nota: las opciones pueden variar según el hub.

### `Tipo de dispositivo` {#block_hubs_all_motors_port_device_type}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_device_type.svg')} alt="block_hubs_all_motors_port_device_type.svg" />
Devuelve el tipo de dispositivo conectado al puerto.

- Tipo: bloque reportero
- Uso típico: detectar dispositivo antes de ejecutar lógica específica

### `Acelerómetro del dispositivo` {#block_sensors_device_accelerometer_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_accelerometer_sensor_data.svg')} alt="block_sensors_device_accelerometer_sensor_data.svg" />
Devuelve valores del acelerómetro.

- Ejes: `x`, `y`, `z`

### `Aceleración del dispositivo` {#block_sensors_device_acceleration_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_acceleration_sensor_data.svg')} alt="block_sensors_device_acceleration_sensor_data.svg" />
Devuelve datos de aceleración.

- Ejes: `x`, `y`, `z`

## Sensores de orientación e inclinación

### `Inclinación` {#block_hubs_all_sensors_tilt}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_tilt.svg')} alt="block_hubs_all_sensors_tilt.svg" />
Devuelve el ángulo de inclinación.

- Ejes: `inclinación`, `balanceo`, `guiñada`
- Nota: `guiñada` depende del hub.

### `Obtener orientación` {#block_hubs_sensors_get_orientation}
<img src={useBaseUrl('/img/blocks/block_hubs_sensors_get_orientation.svg')} alt="block_hubs_sensors_get_orientation.svg" />
Devuelve la orientación actual del hub.

- Formato: `texto`, `índice`
- Valores: `Delante`, `Superior`, `Derecha`, `Trasero`, `Fondo`, `Izquierda`

### `Orientación es arriba` {#block_hubs_all_sensors_is_orientation_up}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_orientation_up.svg')} alt="block_hubs_all_sensors_is_orientation_up.svg" />
Comprueba si la orientación coincide.

### `Establecer orientación de inclinación` {#block_hubs_sensors_set_tilt_orientation}
<img src={useBaseUrl('/img/blocks/block_hubs_sensors_set_tilt_orientation.svg')} alt="block_hubs_sensors_set_tilt_orientation.svg" />
Configura la referencia de orientación.

## Temporizador y movimiento

### `Temporizador` {#block_sensors_timer_value_float}
<img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
Devuelve el tiempo en segundos.

### `Reiniciar temporizador` {#block_sensors_timer_reset}
<img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
Reinicia el temporizador.

## Sensores de puerto

### `Sensor de distancia Technic` {#block_hubs_all_sensors_port_technic_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_distance.svg')} alt="block_hubs_all_sensors_port_technic_sensor_distance.svg" />
Devuelve distancia.

- Unidades: `mm`, `cm`, `pulgadas`, `%`

### `Technic cuando distancia es` {#block_hubs_all_sensors_port_technic_sensor_when_distance_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg" />
Evalúa condición de distancia.

- Opciones: `más cerca que`, `más lejos que`, `exactamente en`

### `Sensor de color Technic` {#block_hubs_all_sensors_port_technic_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_color.svg" />
Devuelve color detectado.

- Salida: `valor`, `texto`

### `Technic cuando color es` {#block_hubs_all_sensors_port_technic_sensor_when_color_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_color_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_color_is.svg" />
Evalúa coincidencia de color.

### `Luz reflejada Technic` {#block_hubs_all_sensors_port_technic_sensor_reflected_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_reflected_light.svg" />
Devuelve luz reflejada.

### `Technic cuando luz reflejada es` {#block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg" />
Evalúa condición de luz.

### `Luz ambiente Technic` {#block_hubs_all_sensors_port_technic_sensor_ambient_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_ambient_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_ambient_light.svg" />
Devuelve luz ambiente.

### `Color bruto Technic` {#block_hubs_all_sensors_port_technic_sensor_raw_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_raw_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_raw_color.svg" />
Devuelve canales de color.

### `Sensor BOOST distancia` {#block_hubs_all_sensors_port_boost_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_distance.svg" />
Devuelve distancia BOOST.

### `Sensor BOOST color` {#block_hubs_all_sensors_port_boost_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_color.svg" />
Devuelve color BOOST.

### `WeDo 2 distancia` {#block_hubs_all_sensors_port_wedo2_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_sensor_distance.svg')} alt="block_hubs_all_sensors_port_wedo2_sensor_distance.svg" />
Devuelve distancia WeDo.

### `WeDo 2 inclinación` {#block_hubs_all_sensors_port_wedo2_tilt}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_tilt.svg')} alt="block_hubs_all_sensors_port_wedo2_tilt.svg" />
Devuelve inclinación.