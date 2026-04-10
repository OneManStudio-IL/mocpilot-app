---
id: Sensors
title: Sensorit
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Sensorit

Sensorilohkot lukevat hubin/laitteen tilaa ja tuottavat dataa ehdoille, tapahtumille ja ohjauslogiikalle. :contentReference[oaicite:0]{index=0}

## Laitteen ja hubin sensorit

### `Hubin akun taso` {#block_hubs_all_sensors_battery_level}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_battery_level.svg')} alt="block_hubs_all_sensors_battery_level.svg" />
Palauttaa hubin nykyisen akun tason.

### `Laitteen akun %` {#block_sensors_device_battery_level}
<img src={useBaseUrl('/img/blocks/block_sensors_device_battery_level.svg')} alt="block_sensors_device_battery_level.svg" />
Palauttaa laitteen (puhelin/tabletti) akun tason prosentteina.

### `Piirilevyn lämpötila` {#block_hubs_all_sensors_board_temp}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_board_temp.svg')} alt="block_hubs_all_sensors_board_temp.svg" />
Palauttaa hubin lämpötilan.

- Saatavilla vain: `BuWizz 2` ja `BuWizz 3`.

### `Painike painettu` {#block_hubs_all_sensors_button_pressed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_button_pressed.svg?v=20260409-2258')} alt="block_hubs_all_sensors_button_pressed.svg" />
Tarkistaa, vastaako valittu painike tilaa.

- Tilat: `painettu`, `vapautettu`
- Tyypillinen painike: `center`

- Huom: painikkeet voivat vaihdella hubin mukaan.

### `Laitetyyppi` {#block_hubs_all_motors_port_device_type}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_device_type.svg')} alt="block_hubs_all_motors_port_device_type.svg" />
Palauttaa porttiin liitetyn laitteen tyypin.

- Tyyppi: reporter-lohko
- Tyypillinen käyttö: tunnistaa laite ennen ohjausta

### `Laitteen kiihtyvyysanturi` {#block_sensors_device_accelerometer_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_accelerometer_sensor_data.svg')} alt="block_sensors_device_accelerometer_sensor_data.svg" />
Palauttaa kiihtyvyysanturin arvot.

- Akselit: `x`, `y`, `z`

### `Laitteen kiihtyvyys` {#block_sensors_device_acceleration_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_acceleration_sensor_data.svg')} alt="block_sensors_device_acceleration_sensor_data.svg" />
Palauttaa kiihtyvyysdatan.

- Akselit: `x`, `y`, `z`

## Suunta ja kallistus

### `Kallistus` {#block_hubs_all_sensors_tilt}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_tilt.svg')} alt="block_hubs_all_sensors_tilt.svg" />
Palauttaa kallistuskulman.

- Akselit: `pitch`, `roll`, `yaw`

### `Hae suunta` {#block_hubs_sensors_get_orientation}
<img src={useBaseUrl('/img/blocks/block_hubs_sensors_get_orientation.svg')} alt="block_hubs_sensors_get_orientation.svg" />
Palauttaa hubin suunnan.

- Muoto: `teksti`, `indeksi`
- Arvot: `Front`, `Top`, `Right`, `Back`, `Bottom`, `Left`

### `Onko suunta ylös` {#block_hubs_all_sensors_is_orientation_up}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_orientation_up.svg')} alt="block_hubs_all_sensors_is_orientation_up.svg" />
Tarkistaa suunnan.

### `Aseta kallistuksen suunta` {#block_hubs_sensors_set_tilt_orientation}
<img src={useBaseUrl('/img/blocks/block_hubs_sensors_set_tilt_orientation.svg')} alt="block_hubs_sensors_set_tilt_orientation.svg" />
Asettaa viitesuunnan.

## Ajastin

### `Ajastin` {#block_sensors_timer_value_float}
<img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
Palauttaa ajan sekunteina.

### `Nollaa ajastin` {#block_sensors_timer_reset}
<img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
Nollaa ajastimen.

## Porttisensorit

### `Technic-etäisyysanturi` {#block_hubs_all_sensors_port_technic_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_distance.svg')} alt="block_hubs_all_sensors_port_technic_sensor_distance.svg" />
Palauttaa etäisyyden.

- Yksiköt: `mm`, `cm`, `inch`, `%`

### `Technic kun etäisyys on` {#block_hubs_all_sensors_port_technic_sensor_when_distance_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg" />
Tarkistaa etäisyyden ehdon.

- Vaihtoehdot: `closer than`, `farther than`, `exactly at`

### `Technic-värianturi arvo` {#block_hubs_all_sensors_port_technic_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_color.svg" />
Palauttaa värin.

### `Technic kun väri on` {#block_hubs_all_sensors_port_technic_sensor_when_color_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_color_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_color_is.svg" />
Tarkistaa värin.

### `Technic heijastettu valo` {#block_hubs_all_sensors_port_technic_sensor_reflected_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_reflected_light.svg" />
Palauttaa heijastetun valon.

### `Technic kun heijastettu valo on` {#block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg" />
Tarkistaa valon ehdon.

### `Technic ympäristövalo` {#block_hubs_all_sensors_port_technic_sensor_ambient_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_ambient_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_ambient_light.svg" />
Palauttaa ympäristön valon.

### `Technic raakaväri` {#block_hubs_all_sensors_port_technic_sensor_raw_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_raw_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_raw_color.svg" />
Palauttaa värikanavat.

### `BOOST-etäisyysanturi` {#block_hubs_all_sensors_port_boost_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_distance.svg" />
Palauttaa etäisyyden.

### `BOOST kun etäisyys on` {#block_hubs_all_sensors_port_boost_sensor_when_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_distance.svg" />
Tarkistaa etäisyyden.

### `BOOST-värianturi` {#block_hubs_all_sensors_port_boost_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_color.svg" />
Palauttaa värin.

### `BOOST on väri` {#block_hubs_all_sensors_port_boost_sensor_is_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_is_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_is_color.svg" />
Tarkistaa värin.

### `BOOST heijastettu valo` {#block_hubs_all_sensors_port_boost_sensor_reflected_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_boost_sensor_reflected_light.svg" />
Palauttaa valon.

### `BOOST kun heijastettu valo on` {#block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg" />
Tarkistaa valon.

### `Technic Move aseta tehotila` {#block_hubs_technicmove_sensors_set_power_mode}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_sensors_set_power_mode.svg')} alt="block_hubs_technicmove_sensors_set_power_mode.svg" />
Asettaa tehotilan.

### `WeDo 2 etäisyys` {#block_hubs_all_sensors_port_wedo2_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_sensor_distance.svg')} alt="block_hubs_all_sensors_port_wedo2_sensor_distance.svg" />
Palauttaa etäisyyden.

### `WeDo 2 kallistus` {#block_hubs_all_sensors_port_wedo2_tilt}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_tilt.svg')} alt="block_hubs_all_sensors_port_wedo2_tilt.svg" />
Palauttaa kallistuksen.

## Käyttöhuomiot

- Käytä sensoreita ehdoissa (`if`, `wait until`).
- Yhdistä operaattoreihin.
- Tarkista laitetyyppi ennen käyttöä.