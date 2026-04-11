---
id: Sensors
title: Sensores
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Sensores

Os blocos de sensores leem o estado do hub/dispositivo e fornecem dados para condições, eventos e lógica de controle. :contentReference[oaicite:0]{index=0}

## Sensores de dispositivo e hub

### `Nível de bateria do hub` {#block_hubs_all_sensors_battery_level}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_battery_level.svg')} alt="block_hubs_all_sensors_battery_level.svg" />
Retorna o nível atual da bateria do hub.

### `Bateria do dispositivo (%)` {#block_sensors_device_battery_level}
<img src={useBaseUrl('/img/blocks/block_sensors_device_battery_level.svg')} alt="block_sensors_device_battery_level.svg" />
Retorna o nível atual de bateria do dispositivo (telefone/tablet) em porcentagem.

### `Temperatura da placa` {#block_hubs_all_sensors_board_temp}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_board_temp.svg')} alt="block_hubs_all_sensors_board_temp.svg" />
Retorna a temperatura da placa do hub.

- Disponível apenas para `BuWizz 2` e `BuWizz 3`.

### `Botão pressionado` {#block_hubs_all_sensors_button_pressed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_button_pressed.svg?v=20260409-2258')} alt="block_hubs_all_sensors_button_pressed.svg" />
Verifica se o botão selecionado corresponde ao estado escolhido.

- Opções de estado: `pressionado`, `solto`
- Opção típica: `central`
- Nota: as opções podem variar conforme o hub.

### `Tipo de dispositivo` {#block_hubs_all_motors_port_device_type}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_device_type.svg')} alt="block_hubs_all_motors_port_device_type.svg" />
Retorna o tipo de dispositivo conectado à porta.

- Tipo: bloco repórter
- Uso típico: detectar o dispositivo antes de executar lógica específica

### `Acelerômetro do dispositivo` {#block_sensors_device_accelerometer_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_accelerometer_sensor_data.svg')} alt="block_sensors_device_accelerometer_sensor_data.svg" />
Retorna valores brutos do acelerômetro.

- Eixos: `x`, `y`, `z`

### `Aceleração do dispositivo` {#block_sensors_device_acceleration_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_acceleration_sensor_data.svg')} alt="block_sensors_device_acceleration_sensor_data.svg" />
Retorna dados de aceleração.

- Eixos: `x`, `y`, `z`

## Sensores de orientação e inclinação

### `Inclinação` {#block_hubs_all_sensors_tilt}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_tilt.svg')} alt="block_hubs_all_sensors_tilt.svg" />
Retorna o ângulo de inclinação.

- Eixos: `pitch`, `roll`, `yaw`
- Nota: `yaw` depende do hub.

### `Obter orientação` {#block_hubs_sensors_get_orientation}
<img src={useBaseUrl('/img/blocks/block_hubs_sensors_get_orientation.svg')} alt="block_hubs_sensors_get_orientation.svg" />
Retorna o estado atual de orientação do hub.

- Formato: `texto`, `índice`
- Valores: `Frente`, `Topo`, `Direita`, `Trás`, `Base`, `Esquerda`

### `Orientação é para cima` {#block_hubs_all_sensors_is_orientation_up}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_orientation_up.svg')} alt="block_hubs_all_sensors_is_orientation_up.svg" />
Verifica se a orientação corresponde à posição selecionada.

- Opções: `Frente`, `Topo`, `Direita`, `Trás`, `Base`, `Esquerda`

### `Definir orientação de inclinação` {#block_hubs_sensors_set_tilt_orientation}
<img src={useBaseUrl('/img/blocks/block_hubs_sensors_set_tilt_orientation.svg')} alt="block_hubs_sensors_set_tilt_orientation.svg" />
Define a referência de orientação.

- Opções: `Frente`, `Topo`, `Direita`, `Trás`, `Base`, `Esquerda`

## Sensores de tempo e movimento

### `Temporizador` {#block_sensors_timer_value_float}
<img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
Retorna o valor do tempo em segundos.

### `Resetar temporizador` {#block_sensors_timer_reset}
<img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
Reinicia o temporizador.

## Sensores de porta

### `Sensor de distância Technic` {#block_hubs_all_sensors_port_technic_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_distance.svg')} alt="block_hubs_all_sensors_port_technic_sensor_distance.svg" />
Retorna a distância medida.

- Unidades: `mm`, `cm`, `polegada`, `%`

### `Technic quando distância é` {#block_hubs_all_sensors_port_technic_sensor_when_distance_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg" />
Verifica condição de distância.

- Comparação: `mais próximo que`, `mais distante que`, `exatamente em`

### `Valor do sensor de cor Technic` {#block_hubs_all_sensors_port_technic_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_color.svg" />
Retorna a cor detectada.

- Saída: `valor`, `texto`

### `Technic quando cor é` {#block_hubs_all_sensors_port_technic_sensor_when_color_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_color_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_color_is.svg" />
Verifica correspondência de cor.

### `Luz refletida Technic` {#block_hubs_all_sensors_port_technic_sensor_reflected_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_reflected_light.svg" />
Retorna intensidade da luz refletida.

### `Technic quando luz refletida é` {#block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg" />
Verifica condição de luz refletida.

- Comparação: `<`, `=`, `>`

### `Luz ambiente Technic` {#block_hubs_all_sensors_port_technic_sensor_ambient_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_ambient_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_ambient_light.svg" />
Retorna intensidade da luz ambiente.

### `Technic quando luz ambiente é` {#block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is.svg" />
Verifica condição de luz ambiente.

- Comparação: `<`, `=`, `>`

### `Cor bruta Technic` {#block_hubs_all_sensors_port_technic_sensor_raw_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_raw_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_raw_color.svg" />
Retorna valor bruto de cor.

- Canais: `vermelho`, `verde`, `azul`

### `Sensor de distância BOOST` {#block_hubs_all_sensors_port_boost_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_distance.svg" />
Retorna a distância do sensor BOOST.

### `BOOST quando distância é` {#block_hubs_all_sensors_port_boost_sensor_when_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_distance.svg" />
Verifica condição de distância BOOST.

### `Sensor de cor BOOST` {#block_hubs_all_sensors_port_boost_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_color.svg" />
Retorna cor detectada.

### `BOOST é cor` {#block_hubs_all_sensors_port_boost_sensor_is_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_is_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_is_color.svg" />
Verifica se a cor corresponde.

### `Luz refletida BOOST` {#block_hubs_all_sensors_port_boost_sensor_reflected_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_boost_sensor_reflected_light.svg" />
Retorna valor de luz refletida.

### `BOOST quando luz refletida é` {#block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg" />
Verifica condição de luz refletida.

### `Technic Move definir modo de potência` {#block_hubs_technicmove_sensors_set_power_mode}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_sensors_set_power_mode.svg')} alt="block_hubs_technicmove_sensors_set_power_mode.svg" />
Define o modo de potência.

- Opções: `normal`, `boost`

### `WeDo 2 distância` {#block_hubs_all_sensors_port_wedo2_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_sensor_distance.svg')} alt="block_hubs_all_sensors_port_wedo2_sensor_distance.svg" />
Retorna a distância do sensor WeDo 2.

### `WeDo 2 inclinação` {#block_hubs_all_sensors_port_wedo2_tilt}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_tilt.svg')} alt="block_hubs_all_sensors_port_wedo2_tilt.svg" />
Retorna o valor de inclinação.

- Eixos: `pitch`, `roll`