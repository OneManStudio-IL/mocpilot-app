---
id: Sensors
title: Sensorer
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Sensorer

Sensorblokke læser hub-/enhedstilstand og leverer data til betingelser, hændelser og kontrol-logik.

## Enheds- og hubsensorer

### `Hub-batteriniveau` {#block_hubs_all_sensors_battery_level}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_battery_level.svg')} alt="block_hubs_all_sensors_battery_level.svg" />
Returnerer hubbens aktuelle batteriniveau.

### `Enhedsbatteri %` {#block_sensors_device_battery_level}
<img src={useBaseUrl('/img/blocks/block_sensors_device_battery_level.svg')} alt="block_sensors_device_battery_level.svg" />
Returnerer det aktuelle batteriniveau for telefon/tablet, der kører MOCPilot (i procent).

### `Board-temperatur` {#block_hubs_all_sensors_board_temp}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_board_temp.svg')} alt="block_hubs_all_sensors_board_temp.svg" />
Returnerer hubbens board-temperatur.

- Kun tilgængelig for `BuWizz 2` og `BuWizz 3`.

### `Knap trykket` {#block_hubs_all_sensors_button_pressed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_button_pressed.svg?v=20260409-2258')} alt="block_hubs_all_sensors_button_pressed.svg" />
Tjekker om en valgt hub-knap matcher den valgte tilstand.

- Tilstandsmuligheder: `trykket`, `frigivet`
- Typisk knapmulighed: `center` (hub-afhængig)

- Bemærk: tilgængelige knapmuligheder kan variere efter hub-model (forskellige hubs kan have forskellige knapsæt).

### `Enhedstype` {#block_hubs_all_motors_port_device_type}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_device_type.svg')} alt="block_hubs_all_motors_port_device_type.svg" />
Returnerer typen af tilsluttet enhed for den valgte port.

- Type: reporterblok
- Typisk brug: registrér hvilken enhed der er tilsluttet, før enhedsspecifik logik køres

### `Enheds-accelerometer` {#block_sensors_device_accelerometer_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_accelerometer_sensor_data.svg')} alt="block_sensors_device_accelerometer_sensor_data.svg" />
Returnerer rå accelerometerværdier fra enhedens sensorer.

- Aksemuligheder: `x`, `y`, `z`

### `Enheds-acceleration` {#block_sensors_device_acceleration_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_acceleration_sensor_data.svg')} alt="block_sensors_device_acceleration_sensor_data.svg" />
Returnerer accelerationsdata fra enhedens sensorer.

- Aksemuligheder: `x`, `y`, `z`

## Orienterings- og tilt-sensorer

### `Tilt` {#block_hubs_all_sensors_tilt}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_tilt.svg')} alt="block_hubs_all_sensors_tilt.svg" />
Returnerer tilt-vinkel for den valgte akse.

- Aksemuligheder: `hældning`, `rulning`, `gyring`
- Bemærk: `yaw` er kun tilgængelig på hubs, der leverer yaw-data.

### `Hent orientering` {#block_hubs_sensors_get_orientation}
<img src={useBaseUrl('/img/blocks/block_hubs_sensors_get_orientation.svg')} alt="block_hubs_sensors_get_orientation.svg" />
Returnerer hubbens aktuelle orienteringstilstand.

- Outputformat-muligheder: `text`, `index`
- Orienteringsværdier: `Foran`, `Top`, `Højre`, `Bagpå`, `Bund`, `Venstre`

### `Er orientering opad` {#block_hubs_all_sensors_is_orientation_up}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_orientation_up.svg')} alt="block_hubs_all_sensors_is_orientation_up.svg" />
Tjekker om hubbens orientering matcher valgt "opad"-orientering.

- Orienteringsmuligheder: `Foran`, `Top`, `Højre`, `Bagpå`, `Bund`, `Venstre`

### `Sæt tilt-orientering` {#block_hubs_sensors_set_tilt_orientation}
<img src={useBaseUrl('/img/blocks/block_hubs_sensors_set_tilt_orientation.svg')} alt="block_hubs_sensors_set_tilt_orientation.svg" />
Konfigurerer orienteringsreference brugt af tilt-/orienteringsrelaterede blokke.

- Orienteringsmuligheder: `Foran`, `Top`, `Højre`, `Bagpå`, `Bund`, `Venstre`

## Timer og enhedsbevægelse

### `Timer` {#block_sensors_timer_value_float}
<img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
Returnerer timerværdi i sekunder.

### `Nulstil timer` {#block_sensors_timer_reset}
<img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
Nulstiller timeren til nul.

## Port-sensorblokke

### `Technic afstandssensor` {#block_hubs_all_sensors_port_technic_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_distance.svg')} alt="block_hubs_all_sensors_port_technic_sensor_distance.svg" />
Returnerer afstandsværdier fra en Technic-afstandssensor.

- Enhedsmuligheder: `mm`, `cm`, `tommer`, `%`

### `Technic når afstand er` {#block_hubs_all_sensors_port_technic_sensor_when_distance_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg" />
Udløser/tjekker afstandsbetingelse for en Technic-afstandssensor.

- Sammenligningsmuligheder: `nærmere end`, `længere end`, `præcis ved`
- Enhedsmuligheder: `mm`, `cm`, `tommer`, `%`

### `Technic farvesensorværdi` {#block_hubs_all_sensors_port_technic_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_color.svg" />
Returnerer registreret farveværdi fra en Technic-afstandssensor.

- Outputmuligheder: `værdi`, `streng`

### `Technic når farve er` {#block_hubs_all_sensors_port_technic_sensor_when_color_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_color_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_color_is.svg" />
Udløser/tjekker når registreret farve matcher valgt farve.

### `Technic reflekteret lys` {#block_hubs_all_sensors_port_technic_sensor_reflected_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_reflected_light.svg" />
Returnerer intensitet af reflekteret lys.

### `Technic når reflekteret lys er` {#block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg" />
Udløser/tjekker tærskelbetingelse for reflekteret lys.

- Sammenligningsmuligheder: `<`, `=`, `>`

### `Technic omgivelseslys` {#block_hubs_all_sensors_port_technic_sensor_ambient_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_ambient_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_ambient_light.svg" />
Returnerer intensitet af omgivelseslys.

### `Technic når omgivelseslys er` {#block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is.svg" />
Udløser/tjekker tærskelbetingelse for omgivelseslys.

- Sammenligningsmuligheder: `<`, `=`, `>`

### `Technic rå farve` {#block_hubs_all_sensors_port_technic_sensor_raw_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_raw_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_raw_color.svg" />
Returnerer rå farvekanalværdi fra Technic-sensor.

- Kanalmuligheder: `red`, `green`, `blue`

### `BOOST sensorafstand` {#block_hubs_all_sensors_port_boost_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_distance.svg" />
Returnerer afstand fra en BOOST-afstandssensor.

- Enhedsmuligheder: `%`, `cm`, `tommer`

### `BOOST når afstand er` {#block_hubs_all_sensors_port_boost_sensor_when_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_distance.svg" />
Udløser/tjekker afstandsbetingelse for BOOST-afstandssensor.

- Sammenligningsmuligheder: `nærmere end`, `længere end`, `præcis ved`
- Enhedsmuligheder: `%`, `cm`, `tommer`

### `BOOST sensorfarve` {#block_hubs_all_sensors_port_boost_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_color.svg" />
Returnerer farve registreret af en BOOST-sensor.

- Outputmuligheder: `værdi`, `streng`

### `BOOST er farve` {#block_hubs_all_sensors_port_boost_sensor_is_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_is_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_is_color.svg" />
Tjekker om BOOST-sensoren aktuelt registrerer valgt farve.

### `BOOST reflekteret lys` {#block_hubs_all_sensors_port_boost_sensor_reflected_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_boost_sensor_reflected_light.svg" />
Returnerer reflekteret lysværdi fra BOOST-sensor.

### `BOOST når reflekteret lys er` {#block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg" />
Udløser/tjekker tærskelbetingelse for reflekteret lys for BOOST-sensor.

- Sammenligningsmuligheder: `<`, `=`, `>`

### `Technic Move sæt power mode` {#block_hubs_technicmove_sensors_set_power_mode}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_sensors_set_power_mode.svg')} alt="block_hubs_technicmove_sensors_set_power_mode.svg" />
Sætter Technic Move power mode.

- Tilstandsmuligheder: normal, boost

### `WeDo 2 afstand` {#block_hubs_all_sensors_port_wedo2_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_sensor_distance.svg')} alt="block_hubs_all_sensors_port_wedo2_sensor_distance.svg" />
Returnerer afstand fra WeDo 2-afstandssensor.

- Enhedsmuligheder: `%`, `cm`, `tommer`

### `WeDo 2 tilt` {#block_hubs_all_sensors_port_wedo2_tilt}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_tilt.svg')} alt="block_hubs_all_sensors_port_wedo2_tilt.svg" />
Returnerer tilt-værdi fra WeDo 2-tiltsensor.

- Aksemuligheder: `hældning`, `rulning`

## Brugsnoter

- Brug sensor-reporterblokke med `if`, `if/else` og `wait until` til reaktiv logik.
- Kombinér sensorværdier med Operatorer-blokke for at bygge tærskler og betingelser.
- Tjek `Enhedstype` før afsendelse af kommandoer, der afhænger af specifik tilsluttet hardware.
