---
id: Sensors
title: Sensoren
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Sensoren

Sensorblöcke lesen Hub-/Gerätezustände und liefern Daten für Bedingungen, Ereignisse und Steuerungslogik.

## Geräte- und Hub-Sensoren

### `Hub-Batteriestand` {#block_hubs_all_sensors_battery_level}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_battery_level.svg')} alt="block_hubs_all_sensors_battery_level.svg" />
Gibt den aktuellen Hub-Batteriestand zurück.

### `Gerätebatterie %` {#block_sensors_device_battery_level}
<img src={useBaseUrl('/img/blocks/block_sensors_device_battery_level.svg')} alt="block_sensors_device_battery_level.svg" />
Gibt den aktuellen Batteriestand des Smartphones/Tablets zurück, auf dem MOCPilot läuft.

### `Board-Temperatur` {#block_hubs_all_sensors_board_temp}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_board_temp.svg')} alt="block_hubs_all_sensors_board_temp.svg" />
Gibt die Temperatur der Hub-Platine zurück.

- Nur verfügbar für `BuWizz 2` und `BuWizz 3`.

### `Taste gedrückt` {#block_hubs_all_sensors_button_pressed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_button_pressed.svg?v=20260409-2258')} alt="block_hubs_all_sensors_button_pressed.svg" />
Prüft, ob die ausgewählte Hub-Taste dem gewählten Zustand entspricht.

- Statusoptionen: `gedrückt`, `losgelassen`
- Typische Tastenoption: `mitte` (hubabhängig)

### `Gerätetyp` {#block_hubs_all_motors_port_device_type}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_device_type.svg')} alt="block_hubs_all_motors_port_device_type.svg" />
Gibt den Typ des verbundenen Geräts am ausgewählten Port zurück.

- Typ: Reporterblock

### `Geräte-Beschleunigungssensor` {#block_sensors_device_accelerometer_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_accelerometer_sensor_data.svg')} alt="block_sensors_device_accelerometer_sensor_data.svg" />
Gibt rohe Beschleunigungssensorwerte des Geräts zurück.

- Achsenoptionen: `x`, `y`, `z`

### `Geräte-Beschleunigung` {#block_sensors_device_acceleration_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_acceleration_sensor_data.svg')} alt="block_sensors_device_acceleration_sensor_data.svg" />
Gibt Beschleunigungsdaten des Geräts zurück.

- Achsenoptionen: `x`, `y`, `z`

## Orientierungs- und Neigungssensoren

### `Neigung` {#block_hubs_all_sensors_tilt}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_tilt.svg')} alt="block_hubs_all_sensors_tilt.svg" />
Gibt den Neigungswinkel für die gewählte Achse zurück.

- Achsenoptionen: `pitch`, `roll`, `yaw`

### `Orientierung holen` {#block_hubs_sensors_get_orientation}
<img src={useBaseUrl('/img/blocks/block_hubs_sensors_get_orientation.svg')} alt="block_hubs_sensors_get_orientation.svg" />
Gibt den aktuellen Orientierungszustand des Hubs zurück.

- Ausgabeoptionen: `text`, `index`
- Orientierungswerte: `Vorne`, `Oben`, `Rechts`, `Hinten`, `Unten`, `Links`

### `Ist Orientierung oben` {#block_hubs_all_sensors_is_orientation_up}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_orientation_up.svg')} alt="block_hubs_all_sensors_is_orientation_up.svg" />
Prüft, ob die Hub-Orientierung der gewählten „oben“-Orientierung entspricht.

- Orientierungsoptionen: `Vorne`, `Oben`, `Rechts`, `Hinten`, `Unten`, `Links`

### `Neigungsorientierung setzen` {#block_hubs_sensors_set_tilt_orientation}
<img src={useBaseUrl('/img/blocks/block_hubs_sensors_set_tilt_orientation.svg')} alt="block_hubs_sensors_set_tilt_orientation.svg" />
Konfiguriert die Orientierungsreferenz für Neigungs-/Orientierungsblöcke.

## Timer und Bewegung

### `Timer` {#block_sensors_timer_value_float}
<img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
Gibt den Timerwert in Sekunden zurück.

### `Timer zurücksetzen` {#block_sensors_timer_reset}
<img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
Setzt den Timer auf Null zurück.

## Port-Sensorblöcke

### `Technic Distanzsensor` {#block_hubs_all_sensors_port_technic_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_distance.svg')} alt="block_hubs_all_sensors_port_technic_sensor_distance.svg" />
Gibt Distanzwerte eines Technic-Distanzsensors zurück.

- Einheitenoptionen: `mm`, `cm`, `zoll`, `%`

### `Technic wenn Distanz ist` {#block_hubs_all_sensors_port_technic_sensor_when_distance_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg" />
Prüft/auslöst Distanzbedingungen für den Technic-Distanzsensor.

- Vergleichsoptionen: `näher als`, `weiter als`, `genau bei`
- Einheitenoptionen: `mm`, `cm`, `zoll`, `%`

### `Technic Farbsensorwert` {#block_hubs_all_sensors_port_technic_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_color.svg" />
Gibt den erkannten Farbwert des Technic-Sensors zurück.

- Ausgabeoptionen: `wert`, `text`

### `Technic wenn Farbe ist` {#block_hubs_all_sensors_port_technic_sensor_when_color_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_color_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_color_is.svg" />
Prüft/auslöst, wenn die erkannte Farbe der gewählten Farbe entspricht.

### `Technic reflektiertes Licht` {#block_hubs_all_sensors_port_technic_sensor_reflected_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_reflected_light.svg" />
Gibt die Intensität des reflektierten Lichts zurück.

### `Technic wenn reflektiertes Licht ist` {#block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg" />
Prüft/auslöst für Schwellwert von reflektiertem Licht.

### `Technic Umgebungslicht` {#block_hubs_all_sensors_port_technic_sensor_ambient_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_ambient_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_ambient_light.svg" />
Gibt die Intensität des Umgebungslichts zurück.

### `Technic wenn Umgebungslicht ist` {#block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is.svg" />
Prüft/auslöst für Schwellwert von Umgebungslicht.

### `Technic Rohfarbe` {#block_hubs_all_sensors_port_technic_sensor_raw_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_raw_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_raw_color.svg" />
Gibt Rohwerte der Farbkanäle des Technic-Sensors zurück.

- Kanaloptionen: `rot`, `grün`, `blau`

### `BOOST Distanzsensor` {#block_hubs_all_sensors_port_boost_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_distance.svg" />
Gibt Distanzwerte des BOOST-Sensors zurück.

- Einheitenoptionen: `%`, `cm`, `zoll`

### `BOOST wenn Distanz ist` {#block_hubs_all_sensors_port_boost_sensor_when_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_distance.svg" />
Prüft/auslöst Distanzbedingungen für BOOST.

- Vergleichsoptionen: `näher als`, `weiter als`, `genau bei`
- Einheitenoptionen: `%`, `cm`, `zoll`

### `BOOST Sensorfarbe` {#block_hubs_all_sensors_port_boost_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_color.svg" />
Gibt die vom BOOST-Sensor erkannte Farbe zurück.

- Ausgabeoptionen: `wert`, `text`

### `BOOST ist Farbe` {#block_hubs_all_sensors_port_boost_sensor_is_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_is_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_is_color.svg" />
Prüft, ob der BOOST-Sensor aktuell die gewählte Farbe erkennt.

### `BOOST reflektiertes Licht` {#block_hubs_all_sensors_port_boost_sensor_reflected_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_boost_sensor_reflected_light.svg" />
Gibt den Wert des reflektierten Lichts vom BOOST-Sensor zurück.

### `BOOST wenn reflektiertes Licht ist` {#block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg" />
Prüft/auslöst für Schwellwert von reflektiertem Licht beim BOOST-Sensor.

### `Technic Move Leistungsmodus setzen` {#block_hubs_technicmove_sensors_set_power_mode}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_sensors_set_power_mode.svg')} alt="block_hubs_technicmove_sensors_set_power_mode.svg" />
Setzt den Leistungsmodus von Technic Move.

- Modusoptionen: `normal`, `boost`

### `WeDo 2 Distanz` {#block_hubs_all_sensors_port_wedo2_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_sensor_distance.svg')} alt="block_hubs_all_sensors_port_wedo2_sensor_distance.svg" />
Gibt Distanzwerte des WeDo-2-Distanzsensors zurück.

- Einheitenoptionen: `%`, `cm`, `zoll`

### `WeDo 2 Neigung` {#block_hubs_all_sensors_port_wedo2_tilt}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_tilt.svg')} alt="block_hubs_all_sensors_port_wedo2_tilt.svg" />
Gibt Neigungswerte des WeDo-2-Neigungssensors zurück.

- Achsenoptionen: `pitch`, `roll`

## Hinweise zur Verwendung

- Sensor-Reporterblöcke mit `if`, `if/else` und `wait until` für reaktive Logik kombinieren.
- Sensorwerte mit Operator-Blöcken kombinieren, um Schwellwerte und Bedingungen zu bauen.
- `Gerätetyp` prüfen, bevor hardwareabhängige Befehle gesendet werden.
