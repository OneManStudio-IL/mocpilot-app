---
id: Gamepad
title: Gamepad
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Gamepad
Gamepad-blokke bruges til at reagere på controller-input og læse aktuelle gamepad-tilstandsværdier.

## Event-blokke

### `Når gamepad-knap er` {#block_gamepad_event_when_button_is}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is.svg')} alt="block_gamepad_event_when_button_is.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is_sony.svg')} alt="block_gamepad_event_when_button_is_sony.svg" />
</div>

Udløses når den valgte gamepad-knap matcher den konfigurerede tilstand.

- Type: event-blok
- Knapindstillinger (Xbox-layout): `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Knapindstillinger (Sony-layout): `kryds`, `cirkel`, `kvadrat`, `trekant`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- Tilstande: `trykket`, `sluppet`

### `Når gamepad D-pad er` {#block_gamepad_event_when_dpad_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_dpad_is.svg')} alt="block_gamepad_event_when_dpad_is.svg" />

Udløses når D-pad retning/tilstand matcher den valgte betingelse.

- Type: event-blok
- Retninger: `op`, `ned`, `venstre`, `højre`
- Tilstande: `trykket`, `sluppet`

### `Når gamepad joystick er` {#block_gamepad_event_when_thumbstick_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_thumbstick_is.svg')} alt="block_gamepad_event_when_thumbstick_is.svg" />

Udløses når joystick-betingelsen matcher de valgte indstillinger.

Baseret på de aktuelle indstillinger understøtter denne blok:

- Valg af joystick: `venstre` / `højre`
- Retning/tilstand: `op`, `ned`, `venstre`, `højre`, `flyttet`, `sluppet`

- Type: event-blok
- Typisk brug: reagere på bevægelse eller slip af joystick

## Værdi-blokke

### `Gamepad knapværdi (boolean)` {#block_gamepad_button_value_boolean}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean.svg')} alt="block_gamepad_button_value_boolean.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean_sony.svg')} alt="block_gamepad_button_value_boolean_sony.svg" />
</div>

Returnerer den aktuelle tilstand for den valgte gamepad-knap.

- Type: værdi-blok
- Output: `true`/`false`
- Knapindstillinger (Xbox-layout): `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Knapindstillinger (Sony-layout): `kryds`, `cirkel`, `kvadrat`, `trekant`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- Tilstande: `trykket`, `sluppet`

### `Gamepad D-pad værdi (boolean)` {#block_gamepad_dpad_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_gamepad_dpad_button_value_boolean.svg')} alt="block_gamepad_dpad_button_value_boolean.svg" />

Returnerer om den valgte D-pad retning er aktiv.

- Type: værdi-blok
- Output: `true`/`false`
- Retninger: `op`, `ned`, `venstre`, `højre`
- Tilstande: `trykket`, `sluppet`

### `Gamepad joystick værdi (float)` {#block_gamepad_thumbstick_value_float}

<img src={useBaseUrl('/img/blocks/block_gamepad_thumbstick_value_float.svg')} alt="block_gamepad_thumbstick_value_float.svg" />

Returnerer numerisk joystick-akseværdi.

- Type: værdi-blok
- Output: numerisk (float)
- Standardområde: `-1` til `1`
- Valgfrit område i indstillinger: `-100` til `100`
- Joystick: `venstre`, `højre`
- Akser: `x-akse` / `y-akse`

### `Gamepad trigger tryk værdi (float)` {#block_gamepad_trigger_pressure_value_float}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float.svg')} alt="block_gamepad_trigger_pressure_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float_sony.svg')} alt="block_gamepad_trigger_pressure_value_float_sony.svg" />
</div>

Returnerer tryk-værdien for den valgte trigger.

- Type: værdi-blok
- Output: numerisk (float)
- Standardområde: `-1` til `1`
- Valgfrit område i indstillinger: `-100` til `100`
- Trigger (Xbox-layout): `LT`, `RT`
- Trigger (Sony-layout): `L2`, `R2`