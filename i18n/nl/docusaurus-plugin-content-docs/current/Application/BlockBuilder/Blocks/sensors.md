---
id: Sensors
title: Sensoren
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Sensoren

Sensorblokken lezen de status van hub/apparaat en leveren gegevens voor voorwaarden, gebeurtenissen en besturingslogica.

## Apparaat- en hubsensoren

### `Hub batterijniveau` {#block_hubs_all_sensors_battery_level}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_battery_level.svg')} alt="block_hubs_all_sensors_battery_level.svg" />
Geeft het huidige batterijniveau van de hub terug.

### `Apparaat % batterij` {#block_sensors_device_battery_level}
<img src={useBaseUrl('/img/blocks/block_sensors_device_battery_level.svg')} alt="block_sensors_device_battery_level.svg" />
Geeft het huidige batterijniveau van de telefoon/tablet waarop MOCPilot draait terug (in procenten).

### `Bordtemperatuur` {#block_hubs_all_sensors_board_temp}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_board_temp.svg')} alt="block_hubs_all_sensors_board_temp.svg" />
Geeft de temperatuur van het hubbord terug.

- Alleen beschikbaar voor `BuWizz 2` en `BuWizz 3`.

### `Knop ingedrukt` {#block_hubs_all_sensors_button_pressed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_button_pressed.svg?v=20260409-2258')} alt="block_hubs_all_sensors_button_pressed.svg" />
Controleert of een geselecteerde hubknop overeenkomt met de gekozen status.

- Statusopties: `ingedrukt`, `vrijgegeven`
- Typische knopoptie: `center` (afhankelijk van hub)

- Opmerking: beschikbare knopopties kunnen verschillen per hubmodel.

### `Apparaattype` {#block_hubs_all_motors_port_device_type}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_device_type.svg')} alt="block_hubs_all_motors_port_device_type.svg" />
Geeft het type aangesloten apparaat terug voor de geselecteerde poort.

- Type: rapporteurblok
- Typisch gebruik: detecteren welk apparaat is aangesloten voordat apparaat-specifieke logica wordt uitgevoerd

### `Apparaat accelerometer` {#block_sensors_device_accelerometer_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_accelerometer_sensor_data.svg')} alt="block_sensors_device_accelerometer_sensor_data.svg" />
Geeft ruwe accelerometerwaarden van apparaatsensoren terug.

- Asopties: `x`, `y`, `z`

### `Apparaat versnelling` {#block_sensors_device_acceleration_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_acceleration_sensor_data.svg')} alt="block_sensors_device_acceleration_sensor_data.svg" />
Geeft versnellingsgegevens van apparaatsensoren terug.

- Asopties: `x`, `y`, `z`

## Oriëntatie- en kantelsensoren

### `Kanteling` {#block_hubs_all_sensors_tilt}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_tilt.svg')} alt="block_hubs_all_sensors_tilt.svg" />
Geeft de kantelhoek voor de geselecteerde as terug.

- Asopties: `helling`, `rol`, `gieren`
- Opmerking: `gieren` is alleen beschikbaar op hubs die gier-data ondersteunen.

### `Haal oriëntatie op` {#block_hubs_sensors_get_orientation}
<img src={useBaseUrl('/img/blocks/block_hubs_sensors_get_orientation.svg')} alt="block_hubs_sensors_get_orientation.svg" />
Geeft de huidige oriëntatiestatus van de hub terug.

- Uitvoeropties: `tekst`, `index`
- Oriëntatiewaarden: `Front`, `Top`, `Right`, `Back`, `Bottom`, `Left`

### `Is oriëntatie omhoog` {#block_hubs_all_sensors_is_orientation_up}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_orientation_up.svg')} alt="block_hubs_all_sensors_is_orientation_up.svg" />
Controleert of de oriëntatie van de hub overeenkomt met de geselecteerde "omhoog"-oriëntatie.

- Oriëntatieopties: `Front`, `Top`, `Right`, `Back`, `Bottom`, `Left`

### `Stel kanteloriëntatie in` {#block_hubs_sensors_set_tilt_orientation}
<img src={useBaseUrl('/img/blocks/block_hubs_sensors_set_tilt_orientation.svg')} alt="block_hubs_sensors_set_tilt_orientation.svg" />
Stelt de referentieoriëntatie in die wordt gebruikt door kantel-/oriëntatieblokken.

- Oriëntatieopties: `Front`, `Top`, `Right`, `Back`, `Bottom`, `Left`

## Timer- en bewegingssensoren

### `Timer` {#block_sensors_timer_value_float}
<img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
Geeft de timerwaarde in seconden terug.

### `Reset timer` {#block_sensors_timer_reset}
<img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
Reset de timer naar nul.

## Poortsensorblokken

### `Technic afstandssensor` {#block_hubs_all_sensors_port_technic_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_distance.svg')} alt="block_hubs_all_sensors_port_technic_sensor_distance.svg" />
Geeft afstandswaarden van een Technic afstandssensor terug.

- Eenheidsopties: `mm`, `cm`, `duim`, `%`

### `Technic wanneer afstand is` {#block_hubs_all_sensors_port_technic_sensor_when_distance_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg" />
Activeert/controleert de afstandsvoorwaarde voor een Technic afstandssensor.

- Vergelijkopties: `dichterbij dan`, `verder dan`, `precies op`
- Eenheidsopties: `mm`, `cm`, `duim`, `%`

### `Technic kleursensor waarde` {#block_hubs_all_sensors_port_technic_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_color.svg" />
Geeft de gedetecteerde kleurwaarde van een Technic sensor terug.

- Uitvoeropties: `waarde`, `tekst`

### `Technic wanneer kleur is` {#block_hubs_all_sensors_port_technic_sensor_when_color_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_color_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_color_is.svg" />
Activeert/controleert wanneer de gedetecteerde kleur overeenkomt met de geselecteerde kleur.

### `Technic gereflecteerd licht` {#block_hubs_all_sensors_port_technic_sensor_reflected_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_reflected_light.svg" />
Geeft de intensiteit van gereflecteerd licht terug.

### `Technic wanneer gereflecteerd licht is` {#block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg" />
Activeert/controleert de drempelwaarde voor gereflecteerd licht.

- Vergelijkopties: `<`, `=`, `>`

### `Technic omgevingslicht` {#block_hubs_all_sensors_port_technic_sensor_ambient_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_ambient_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_ambient_light.svg" />
Geeft de intensiteit van omgevingslicht terug.

### `Technic wanneer omgevingslicht is` {#block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is.svg" />
Activeert/controleert de drempelwaarde voor omgevingslicht.

- Vergelijkopties: `<`, `=`, `>`

### `Technic ruwe kleur` {#block_hubs_all_sensors_port_technic_sensor_raw_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_raw_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_raw_color.svg" />
Geeft de ruwe kleurkanaalwaarde van de Technic sensor terug.

- Kanaalopties: `rood`, `groen`, `blauw`

### `BOOST afstandssensor` {#block_hubs_all_sensors_port_boost_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_distance.svg" />
Geeft de afstand van een BOOST afstandssensor terug.

- Eenheidsopties: `%`, `cm`, `duim`

### `BOOST wanneer afstand is` {#block_hubs_all_sensors_port_boost_sensor_when_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_distance.svg" />
Activeert/controleert de afstandsvoorwaarde voor de BOOST afstandssensor.

- Vergelijkopties: `dichterbij dan`, `verder dan`, `precies op`
- Eenheidsopties: `%`, `cm`, `duim`

### `BOOST kleursensor` {#block_hubs_all_sensors_port_boost_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_color.svg" />
Geeft de kleur terug die door een BOOST sensor wordt gedetecteerd.

- Uitvoeropties: `waarde`, `tekst`

### `BOOST is kleur` {#block_hubs_all_sensors_port_boost_sensor_is_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_is_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_is_color.svg" />
Controleert of de BOOST sensor momenteel de geselecteerde kleur detecteert.

### `BOOST gereflecteerd licht` {#block_hubs_all_sensors_port_boost_sensor_reflected_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_boost_sensor_reflected_light.svg" />
Geeft de waarde van gereflecteerd licht van de BOOST sensor terug.

### `BOOST wanneer gereflecteerd licht is` {#block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg" />
Activeert/controleert de drempelwaarde voor gereflecteerd licht van de BOOST sensor.

- Vergelijkopties: `<`, `=`, `>`

### `Technic Move stel vermogensmodus in` {#block_hubs_technicmove_sensors_set_power_mode}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_sensors_set_power_mode.svg')} alt="block_hubs_technicmove_sensors_set_power_mode.svg" />
Stelt de vermogensmodus van Technic Move in.

- Modusopties: `normaal`, `boost`

### `WeDo 2 afstand` {#block_hubs_all_sensors_port_wedo2_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_sensor_distance.svg')} alt="block_hubs_all_sensors_port_wedo2_sensor_distance.svg" />
Geeft de afstand van een WeDo 2 afstandssensor terug.

- Eenheidsopties: `%`, `cm`, `duim`

### `WeDo 2 kanteling` {#block_hubs_all_sensors_port_wedo2_tilt}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_tilt.svg')} alt="block_hubs_all_sensors_port_wedo2_tilt.svg" />
Geeft de kantelwaarde van een WeDo 2 kantelsensor terug.

- Asopties: `helling`, `rol`
