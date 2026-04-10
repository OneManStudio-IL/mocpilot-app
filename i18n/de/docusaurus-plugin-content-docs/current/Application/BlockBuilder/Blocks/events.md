---
id: Events
title: Ereignisse
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Ereignisse

Die Kategorie **Ereignisse** enthält Blöcke, die Skripte starten, wenn eine Bedingung eintritt.

## Grundlegende Ereignisse

### `Wenn Programm startet` {#block_event_when_program_started}
<img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />
Startet dieses Skript einmal beim Start des Profilprogramms.

### `Wenn` {#block_event_when}
<img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />
Wird ausgeführt, wenn die ausgewählte Bedingung wahr wird.

### `Wenn Timer größer als` {#block_event_when_timer_greater_than}
<img src={useBaseUrl('/img/blocks/block_event_when_timer_greater_than.svg')} alt="block_event_when_timer_greater_than.svg" />
Wird ausgeführt, wenn der Timerwert einen Schwellwert überschreitet.

### `Wenn Nachricht empfangen` {#block_event_when_message_recieved}
<img src={useBaseUrl('/img/blocks/block_event_when_message_recieved.svg')} alt="block_event_when_message_recieved.svg" />
Startet ein Skript, wenn eine passende Broadcast-Nachricht empfangen wird.

### `Sende` {#block_event_broadcast}
<img src={useBaseUrl('/img/blocks/block_event_broadcast.svg')} alt="block_event_broadcast.svg" />
Sendet eine Nachricht an alle Skripte, die auf diese Nachricht hören.

### `Sende und warte` {#block_event_broadcast_and_wait}
<img src={useBaseUrl('/img/blocks/block_event_broadcast_and_wait.svg')} alt="block_event_broadcast_and_wait.svg" />
Sendet eine Nachricht und pausiert dieses Skript, bis alle Empfänger fertig sind.

## Hub-Ereignisse

### `Hub-Taste gedrückt` {#block_hubs_all_event_button_pressed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_event_button_pressed.svg')} alt="block_hubs_all_event_button_pressed.svg" />
Wird bei Statusänderung der Haupttaste am Hub ausgelöst.

- Statusoptionen: `gedrückt`, `losgelassen`, `geändert`

### `Hub-Verbindung geändert` {#block_hubs_all_event_connection_changed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_event_connection_changed.svg')} alt="block_hubs_all_event_connection_changed.svg" />
Wird ausgelöst, wenn sich der Verbindungsstatus des Hubs ändert.

### `Hub-Batterie geändert` {#block_hubs_all_event_battery_changed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_event_battery_changed.svg')} alt="block_hubs_all_event_battery_changed.svg" />
Wird ausgelöst, wenn sich der gemeldete Batteriestand des Hubs ändert.

### `Hub-Beschleunigung geändert` {#block_hubs_all_event_accelerometer_changed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_event_accelerometer_changed.svg')} alt="block_hubs_all_event_accelerometer_changed.svg" />
Wird bei Änderung der Beschleunigungswerte ausgelöst.

### `Hub-Neigung geändert` {#block_hubs_all_event_tilt_changed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_changed.svg')} alt="block_hubs_all_event_tilt_changed.svg" />
Wird bei Änderung des Neigungswerts ausgelöst.

- Winkeloptionen: `beliebig`, `pitch`, `roll`, `yaw`

### `Hub-Orientierung geändert` {#block_hubs_all_event_tilt_orientation_changed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_orientation_changed.svg')} alt="block_hubs_all_event_tilt_orientation_changed.svg" />
Wird bei Orientierungsänderung ausgelöst.

## Port-Sensor-Ereignisse

### `Technic Farbsensor-Ereignis` {#block_hubs_all_event_port_technic_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_color.svg')} alt="block_hubs_all_event_port_technic_sensor_color.svg" />
Wird ausgelöst, wenn der Technic-Farbsensor die gewählte Farbe/Wert liefert.

- Einheitenoptionen: `prozent`, `cm`, `zoll`

### `Technic Distanzsensor-Ereignis` {#block_hubs_all_event_port_technic_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_distance.svg')} alt="block_hubs_all_event_port_technic_sensor_distance.svg" />
Wird ausgelöst, wenn Distanzwerte des Technic-Sensors die Bedingung erfüllen.

- Vergleichsoptionen: `näher als`, `weiter als`, `genau bei`
- Einheitenoptionen: `mm`, `cm`, `zoll`, `prozent`

### `BOOST Distanzsensor-Ereignis` {#block_hubs_all_event_port_boost_sensor_when_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_event_port_boost_sensor_when_distance.svg" />
Wird ausgelöst, wenn der BOOST-Distanzsensor den gewählten Schwellwert erreicht.

- Vergleichsoptionen: `näher als`, `weiter als`, `genau bei`
- Einheitenoptionen: `prozent`, `cm`, `zoll`

### `BOOST Farbsensor-Ereignis` {#block_hubs_all_event_port_boost_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_color.svg')} alt="block_hubs_all_event_port_boost_sensor_color.svg" />
Wird ausgelöst, wenn der BOOST-Sensor die gewählte Farbe/Wert erkennt.

## Hinweise

- Ereignisblöcke können sehr häufig auslösen.
- Für stabiles Verhalten Schwellenwerte, Filterung oder kurze Wartezeiten verwenden.
- Für Skriptkoordination bevorzugt Broadcast-Nachrichten nutzen.
