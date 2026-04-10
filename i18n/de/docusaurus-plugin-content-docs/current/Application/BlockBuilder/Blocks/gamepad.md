---
id: Gamepad
title: Gamepad
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Gamepad
Gamepad-Blöcke reagieren auf Controller-Eingaben und lesen aktuelle Gamepad-Zustandswerte.

## Ereignisblöcke

### `Wenn Gamepad-Taste ist` {#block_gamepad_event_when_button_is}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is.svg')} alt="block_gamepad_event_when_button_is.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is_sony.svg')} alt="block_gamepad_event_when_button_is_sony.svg" />
</div>

Wird ausgelöst, wenn die ausgewählte Gamepad-Taste dem konfigurierten Zustand entspricht.

- Typ: Ereignisblock
- Tastenoptionen (Xbox-Layout): `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Tastenoptionen (Sony-Layout): `kreuz`, `kreis`, `quadrat`, `dreieck`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- Statusoptionen: `gedrückt`, `losgelassen`

### `Wenn Gamepad-D-Pad ist` {#block_gamepad_event_when_dpad_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_dpad_is.svg')} alt="block_gamepad_event_when_dpad_is.svg" />

Wird ausgelöst, wenn Richtung/Zustand des D-Pads der Bedingung entspricht.

- Typ: Ereignisblock
- Richtungsoptionen: `oben`, `unten`, `links`, `rechts`
- Statusoptionen: `gedrückt`, `losgelassen`

### `Wenn Gamepad-Stick ist` {#block_gamepad_event_when_thumbstick_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_thumbstick_is.svg')} alt="block_gamepad_event_when_thumbstick_is.svg" />

Wird ausgelöst, wenn die Stick-Bedingung den gewählten Optionen entspricht.

- Stickauswahl: `links` / `rechts`
- Richtungs-/Statusauswahl: `oben`, `unten`, `links`, `rechts`, `bewegt`, `losgelassen`

## Werteblöcke

### `Gamepad-Tastenwert (boolean)` {#block_gamepad_button_value_boolean}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean.svg')} alt="block_gamepad_button_value_boolean.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean_sony.svg')} alt="block_gamepad_button_value_boolean_sony.svg" />
</div>

Gibt den aktuellen Zustand der ausgewählten Gamepad-Taste zurück.

- Typ: Werteblock
- Ausgabe: `true`/`false`
- Tastenoptionen (Xbox-Layout): `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Tastenoptionen (Sony-Layout): `kreuz`, `kreis`, `quadrat`, `dreieck`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- Statusoptionen: `gedrückt`, `losgelassen`

### `Gamepad-D-Pad-Tastenwert (boolean)` {#block_gamepad_dpad_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_gamepad_dpad_button_value_boolean.svg')} alt="block_gamepad_dpad_button_value_boolean.svg" />

Gibt zurück, ob die gewählte D-Pad-Richtung aktuell aktiv ist.

- Typ: Werteblock
- Ausgabe: `true`/`false`
- Richtungsoptionen: `oben`, `unten`, `links`, `rechts`
- Statusoptionen: `gedrückt`, `losgelassen`

### `Gamepad-Stickwert (float)` {#block_gamepad_thumbstick_value_float}

<img src={useBaseUrl('/img/blocks/block_gamepad_thumbstick_value_float.svg')} alt="block_gamepad_thumbstick_value_float.svg" />

Gibt den numerischen Stick-Achsenwert zurück.

- Typ: Werteblock
- Ausgabe: numerisch (float)
- Standardbereich: `-1` bis `1`
- Optionaler Bereich in Gamepad-Einstellungen: `-100` bis `100`
- Stickoptionen: `links`, `rechts`
- Achsenoptionen: `x-axis`, `y-axis`

### `Gamepad-Triggerdruck-Wert (float)` {#block_gamepad_trigger_pressure_value_float}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float.svg')} alt="block_gamepad_trigger_pressure_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float_sony.svg')} alt="block_gamepad_trigger_pressure_value_float_sony.svg" />
</div>

Gibt den Trigger-Druckwert für den ausgewählten Trigger zurück.

- Typ: Werteblock
- Ausgabe: numerisch (float)
- Standardbereich: `-1` bis `1`
- Optionaler Bereich in Gamepad-Einstellungen: `-100` bis `100`
- Triggeroptionen (Xbox-Layout): `LT`, `RT`
- Triggeroptionen (Sony-Layout): `L2`, `R2`

## Hinweise zur Verwendung

- Ereignisblöcke für unmittelbare Reaktionen auf Eingabezustandsänderungen nutzen.
- Werteblöcke für kontinuierliches Polling in Schleifen und Steuerberechnungen nutzen.
- Für sanfte Motorsteuerung Dead-Zone und Skalierung auf Stick-/Triggerwerte anwenden.
