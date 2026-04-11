---
id: Motors
title: Motoren
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Motoren

Motorblöcke dienen zum Starten, Stoppen, Positionieren und Feinabstimmen von Motoren an Hub-Ports.

## Grundlegende Motorbefehle

### `Motor starten` {#block_hubs_all_motors_port_start_motor}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor.svg')} alt="block_hubs_all_motors_port_start_motor.svg" />
Startet den ausgewählten Motor.

- Richtungsoptionen: `im Uhrzeigersinn` / `gegen den Uhrzeigersinn`

### `Motor stoppen` {#block_hubs_all_motors_port_stop_motor}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_stop_motor.svg')} alt="block_hubs_all_motors_port_stop_motor.svg" />
Stoppt den ausgewählten Motor.

### `Ausführen für` {#block_hubs_all_motors_port_run_for}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for.svg')} alt="block_hubs_all_motors_port_run_for.svg" />
Lässt den ausgewählten Motor für angegebene Zeit/Winkel/Umdrehungen laufen.

- Richtungsoptionen: `im Uhrzeigersinn` / `gegen den Uhrzeigersinn`
- Einheitenoptionen: `umdrehungen`, `grad`, `sekunden`

### `Motor starten mit Geschwindigkeit` {#block_hubs_all_motors_port_start_motor_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor_at_speed.svg')} alt="block_hubs_all_motors_port_start_motor_at_speed.svg" />
Startet den Motor mit explizitem Geschwindigkeitswert.

### `Ausführen für mit Geschwindigkeit` {#block_hubs_all_motors_port_run_for_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for_at_speed.svg')} alt="block_hubs_all_motors_port_run_for_at_speed.svg" />
Lässt den Motor für Zielzeit/Zielmenge mit expliziter Geschwindigkeit laufen.

- Einheitenoptionen: `umdrehungen`, `grad`, `sekunden`

### `Motorgeschwindigkeit setzen` {#block_hubs_all_motors_port_set_motor_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_speed.svg')} alt="block_hubs_all_motors_port_set_motor_speed.svg" />
Setzt die Geschwindigkeit, die von zugehörigen Motorblöcken verwendet wird.

## Positions- und Bewegungsblöcke

### `Gehe zu Position` {#block_hubs_all_motors_port_go_to_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_position.svg')} alt="block_hubs_all_motors_port_go_to_position.svg" />
Bewegt den Motor zur absoluten Zielposition.

- Pfadoptionen: `kürzester Weg`, `im Uhrzeigersinn`, `gegen den Uhrzeigersinn`

### `Gehe zu relativer Position` {#block_hubs_all_motors_port_go_to_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_relative_position.svg')} alt="block_hubs_all_motors_port_go_to_relative_position.svg" />
Bewegt den Motor um einen relativen Offset.

### `BuWizz 3 gehe zu relativer Position` {#block_hubs_buwizz3_motors_port_go_to_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_motors_port_go_to_relative_position.svg')} alt="block_hubs_buwizz3_motors_port_go_to_relative_position.svg" />
Variante der relativen Positionierung für BuWizz 3.

### `Relative Position setzen` {#block_hubs_all_motors_port_set_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_relative_position.svg')} alt="block_hubs_all_motors_port_set_relative_position.svg" />
Setzt die Referenz der relativen Motorposition.

### `Lenkgestänge kalibrieren` {#block_hubs_all_motors_port_calibrate_steering_rack}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_calibrate_steering_rack.svg')} alt="block_hubs_all_motors_port_calibrate_steering_rack.svg" />
Kalibriert die Neutral-/Referenzposition des Lenkgestänges.

## Feinabstimmung und Sicherheit

### `Motorverhalten bei Stopp setzen` {#block_hubs_all_motors_port_set_motor_to_at_stop}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_to_at_stop.svg')} alt="block_hubs_all_motors_port_set_motor_to_at_stop.svg" />
Setzt den Stoppmodus des Motors.

- Modusoptionen: `bremse`, `halte Position`, `auslaufen`

### `Blockiererkennung setzen` {#block_hubs_all_motors_port_set_motors_stall_detection}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motors_stall_detection.svg')} alt="block_hubs_all_motors_port_set_motors_stall_detection.svg" />
Aktiviert oder deaktiviert die Blockiererkennung.

### `Beschleunigung setzen` {#block_hubs_all_motors_port_set_acceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_acceleration.svg')} alt="block_hubs_all_motors_port_set_acceleration.svg" />
Setzt das Beschleunigungsprofil des Motors.

### `Verzögerung setzen` {#block_hubs_all_motors_port_set_deceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_deceleration.svg')} alt="block_hubs_all_motors_port_set_deceleration.svg" />
Setzt das Verzögerungsprofil des Motors.

## Motor-Reporterblöcke

### `Position` {#block_hubs_all_motors_port_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_position.svg')} alt="block_hubs_all_motors_port_position.svg" />
Gibt die aktuelle Motorposition zurück.

### `Relative Position` {#block_hubs_all_motors_port_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_relative_position.svg')} alt="block_hubs_all_motors_port_relative_position.svg" />
Gibt die aktuelle relative Position zurück.

### `Geschwindigkeit` {#block_hubs_all_motors_port_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_speed.svg')} alt="block_hubs_all_motors_port_speed.svg" />
Gibt die aktuelle Motorgeschwindigkeit zurück.

### `Leistung` {#block_hubs_all_motors_port_power}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_power.svg')} alt="block_hubs_all_motors_port_power.svg" />
Gibt den aktuellen Motorleistungswert zurück.

## Technic-Move-Motorblöcke

### `Motoren starten mit Geschwindigkeit` {#block_hubs_technicmove_motors_start_motors_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_start_motors_at_speed.svg')} alt="block_hubs_technicmove_motors_start_motors_at_speed.svg" />
Startet die Technic-Move-Antriebsmotoren mit gewählter Geschwindigkeit.

### `Motoren stoppen` {#block_hubs_technicmove_motors_stop_motors}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_stop_motors.svg')} alt="block_hubs_technicmove_motors_stop_motors.svg" />
Stoppt die Technic-Move-Antriebsmotoren.

### `Bremse` {#block_hubs_technicmove_motors_brake}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_brake.svg')} alt="block_hubs_technicmove_motors_brake.svg" />
Setzt das Bremsverhalten der Technic-Move-Motoren.

- Bremsoptionen: `aus`, `ein`

### `Lenkgestänge setzen auf` {#block_hubs_technicmove_motors_set_steering_rack_to}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_set_steering_rack_to.svg')} alt="block_hubs_technicmove_motors_set_steering_rack_to.svg" />
Setzt die Zielposition/-wert des Lenkgestänges.

### `Lenkgestänge kalibrieren` {#block_hubs_technicmove_motors_calibrate_steering_rack}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_calibrate_steering_rack.svg')} alt="block_hubs_technicmove_motors_calibrate_steering_rack.svg" />
Kalibriert das Technic-Move-Lenkgestänge.