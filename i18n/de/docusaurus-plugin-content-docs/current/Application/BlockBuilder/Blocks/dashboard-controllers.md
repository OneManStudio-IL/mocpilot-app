---
id: DashboardControllers
title: Dashboard-Controller
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Dashboard-Controller

Diese Blöcke lesen Benutzereingaben aus On-Screen-Controllern, reagieren auf Aktionen und aktualisieren den UI-Status.

## Globale Dashboard-Controller-Blöcke

### `Controller-Farbe setzen` {#block_dashboard_controller_all_set_color}
<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_color.svg')} alt="block_dashboard_controller_all_set_color.svg" />
Ändert die Akzentfarbe des ausgewählten Dashboard-Controllers.

### `Controller-Interaktivität setzen` {#block_dashboard_controller_all_set_interactivity}
<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_interactivity.svg')} alt="block_dashboard_controller_all_set_interactivity.svg" />
Steuert die Interaktivität des ausgewählten Dashboard-Controllers.

- Statusoptionen: `aktivieren`, `deaktivieren`

## Tastenblöcke

### `Tastenereignis` {#block_dashboard_controller_button_event}
<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_event.svg')} alt="block_dashboard_controller_button_event.svg" />
Wird ausgelöst, wenn sich der Zustand der Dashboard-Taste ändert.

- Statusoptionen: `gedrückt`, `losgelassen`

### `Tastenwert (boolean)` {#block_dashboard_controller_button_value_boolean}
<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_value_boolean.svg')} alt="block_dashboard_controller_button_value_boolean.svg" />
Gibt den aktuellen Zustand der Dashboard-Taste zurück.

- Statusoptionen: `gedrückt`, `losgelassen`

## D-Pad-Blöcke

### `D-Pad-Ereignis` {#block_dashboard_controller_dpad_event}
<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_event.svg')} alt="block_dashboard_controller_dpad_event.svg" />
Wird ausgelöst, wenn Richtung/Zustand des D-Pads geändert wird.

- Richtungsoptionen: `oben`, `unten`, `links`, `rechts`
- Statusoptionen: `gedrückt`, `losgelassen`

### `D-Pad-Wert (boolean)` {#block_dashboard_controller_dpad_value_boolean}
<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_value_boolean.svg')} alt="block_dashboard_controller_dpad_value_boolean.svg" />
Gibt zurück, ob eine gewählte D-Pad-Richtung aktiv ist.

- Richtungsoptionen: `oben`, `unten`, `links`, `rechts`
- Statusoptionen: `gedrückt`, `losgelassen`

## Joystick-Blöcke

### `Joystick-Ereignis` {#block_dashboard_controller_joystick_event}
<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_event.svg')} alt="block_dashboard_controller_joystick_event.svg" />
Wird ausgelöst, wenn sich die Joystick-Position ändert.

- Statusoptionen: `oben`, `unten`, `links`, `rechts`, `bewegt`, `losgelassen`

### `Joystick-Wert (float)` {#block_dashboard_controller_joystick_value_float}
<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_value_float.svg')} alt="block_dashboard_controller_joystick_value_float.svg" />
Gibt den Joystick-Achsenwert zurück.

- Achsenoptionen: `x-axis`, `y-axis`

## Pedal-Blöcke

### `Pedal-Ereignis` {#block_dashboard_controller_pedals_event}
<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_event.svg')} alt="block_dashboard_controller_pedals_event.svg" />
Wird ausgelöst, wenn sich Pedaleingaben ändern.

- Pedaloptionen: `any`, `brake`, `acceleration`
- Statusoptionen: `bewegt`, `gedrückt`, `losgelassen`

### `Pedal-Wert (float)` {#block_dashboard_controller_pedals_value_float}
<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_float.svg')} alt="block_dashboard_controller_pedals_value_float.svg" />
Gibt den analogen Pedalwert zurück.

### `Pedal-Wert (boolean)` {#block_dashboard_controller_pedals_value_boolean}
<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_boolean.svg')} alt="block_dashboard_controller_pedals_value_boolean.svg" />
Gibt den gewählten Pedalstatus zurück.

- Pedaloptionen: `brake`, `acceleration`
- Statusoptionen: `gedrückt`, `losgelassen`

## Slider-Blöcke

### `Slider-Ereignis` {#block_dashboard_controller_slider_event}
<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_event.svg')} alt="block_dashboard_controller_slider_event.svg" />
Wird ausgelöst, wenn sich der Sliderwert ändert.

- Statusoptionen: `low`, `high`, `bewegt`, `losgelassen`

### `Slider-Wert (float)` {#block_dashboard_controller_slider_value_float}
<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_value_float.svg')} alt="block_dashboard_controller_slider_value_float.svg" />
Gibt den aktuellen Sliderwert zurück.

## Stepper-Blöcke

### `Stepper-Ereignis` {#block_dashboard_controller_stepper_event}
<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_event.svg')} alt="block_dashboard_controller_stepper_event.svg" />
Wird ausgelöst, wenn sich der Stepperwert um einen Schritt ändert.

- Schrittoptionen: `any`, `reset`, `minus`, `plus`
- Statusoptionen: `gedrückt`, `losgelassen`

### `Stepper-Wert (float)` {#block_dashboard_controller_stepper_value_float}
<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_value_float.svg')} alt="block_dashboard_controller_stepper_value_float.svg" />
Gibt den aktuellen Stepperwert zurück.

## Lenkrad-Blöcke

### `Lenkrad-Ereignis` {#block_dashboard_controller_steering_wheel_event}
<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_event.svg')} alt="block_dashboard_controller_steering_wheel_event.svg" />
Wird ausgelöst, wenn sich die Lenkradposition ändert.

- Statusoptionen: `bewegt`, `gedrückt`, `losgelassen`

### `Lenkrad-Wert (float)` {#block_dashboard_controller_steering_wheel_value_float}
<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_value_float.svg')} alt="block_dashboard_controller_steering_wheel_value_float.svg" />
Gibt den aktuellen Lenkradwert zurück.

### `Lenkrad-Wert (boolean)` {#block_dashboard_controller_steeringwheel_value_boolean}
<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steeringwheel_value_boolean.svg')} alt="block_dashboard_controller_steeringwheel_value_boolean.svg" />
Gibt den ausgewählten Lenkradstatus zurück.

- Statusoptionen: `bewegt`, `gedrückt`, `losgelassen`

## Schalter-Blöcke

### `Schalter-Ereignis` {#block_dashboard_controller_switch_event}
<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_event.svg')} alt="block_dashboard_controller_switch_event.svg" />
Wird ausgelöst, wenn sich der Schalterzustand ändert.

- Umschaltoptionen: `ein`, `aus`

### `Schalter-Wert (boolean)` {#block_dashboard_controller_switch_value_boolean}
<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_value_boolean.svg')} alt="block_dashboard_controller_switch_value_boolean.svg" />
Gibt den aktuellen Schalterzustand zurück.

- Statusoptionen: `ein`, `aus`

## Monitor-Blöcke

### `Monitor anzeigen` {#block_dashboard_controller_monitor_show}
<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_show.svg')} alt="block_dashboard_controller_monitor_show.svg" />
Zeigt Informationen (Text oder Wert) auf dem Dashboard-Monitor an.

### `Monitor-Wert setzen` {#block_dashboard_controller_monitor_set_value}
<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_set_value.svg')} alt="block_dashboard_controller_monitor_set_value.svg" />
Setzt einen Ganzzahlwert für den Dashboard-Tacho-Monitor.

### `Neigungsmonitor-Wert setzen` {#block_dashboard_controller_monitor_tilt_set_value}
<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_tilt_set_value.svg')} alt="block_dashboard_controller_monitor_tilt_set_value.svg" />
Setzt den Neigungsmonitorwert (pitch/roll).

- Achsenoptionen: `pitch`, `roll`

## Hinweise zur Verwendung

- Ereignisblöcke sind ideal für sofortige Reaktionen auf Eingabeänderungen.
- Werteblöcke sind ideal, wenn aktueller Zustand in Schleifen/Bedingungen benötigt wird.
- Für weiche Steuerung Werteblöcke mit Skalierung und Dead-Zone-Logik kombinieren.
