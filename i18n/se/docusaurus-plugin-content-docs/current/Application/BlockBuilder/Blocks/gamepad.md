---
id: Gamepad
title: Gamepad
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Gamepad
Gamepad-block används för att reagera på kontrollerinmatning och läsa aktuella värden från gamepadens tillstånd.

## Händelseblock

### `När gamepad-knapp är` {#block_gamepad_event_when_button_is}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is.svg')} alt="block_gamepad_event_when_button_is.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is_sony.svg')} alt="block_gamepad_event_when_button_is_sony.svg" />
</div>

Utlöses när den valda gamepad-knappen matchar det konfigurerade tillståndet.

- Typ: händelseblock
- Knappalternativ (Xbox-layout): `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Knappalternativ (Sony-layout): `kryss`, `cirkel`, `fyrkant`, `triangel`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- Tillståndsalternativ: `nedtryckt`, `släppt`

### `När gamepad-D-pad är` {#block_gamepad_event_when_dpad_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_dpad_is.svg')} alt="block_gamepad_event_when_dpad_is.svg" />

Utlöses när D-padens riktning/tillstånd matchar det valda villkoret.

- Typ: händelseblock
- Riktningsalternativ: `upp`, `ner`, `vänster`, `höger`
- Tillståndsalternativ: `nedtryckt`, `släppt`

### `När gamepad-spak är` {#block_gamepad_event_when_thumbstick_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_thumbstick_is.svg')} alt="block_gamepad_event_when_thumbstick_is.svg" />

Utlöses när spakens villkor matchar de valda alternativen.

Baserat på aktuella alternativ stöder detta block:

- Val av spak: `vänster` / `höger`
- Val av riktning/tillstånd: `upp`, `ner`, `vänster`, `höger`, `flyttad`, `släppt`

- Typ: händelseblock
- Typisk användning: reagera på riktningsrörelse eller när spaken släpps

## Värdeblock

### `Gamepad-knappvärde (booleskt)` {#block_gamepad_button_value_boolean}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean.svg')} alt="block_gamepad_button_value_boolean.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean_sony.svg')} alt="block_gamepad_button_value_boolean_sony.svg" />
</div>

Returnerar aktuellt tillstånd för vald gamepad-knapp.

- Typ: värdeblock
- Utdata: `true`/`false`
- Knappalternativ (Xbox-layout): `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Knappalternativ (Sony-layout): `kryss`, `cirkel`, `fyrkant`, `triangel`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- Tillståndsalternativ: `nedtryckt`, `släppt`

### `Gamepad-D-pad-knappvärde (booleskt)` {#block_gamepad_dpad_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_gamepad_dpad_button_value_boolean.svg')} alt="block_gamepad_dpad_button_value_boolean.svg" />

Returnerar om den valda D-pad-riktningen för närvarande är aktiv.

- Typ: värdeblock
- Utdata: `true`/`false`
- Riktningsalternativ: `upp`, `ner`, `vänster`, `höger`
- Tillståndsalternativ: `nedtryckt`, `släppt`

### `Gamepad-spakvärde (float)` {#block_gamepad_thumbstick_value_float}

<img src={useBaseUrl('/img/blocks/block_gamepad_thumbstick_value_float.svg')} alt="block_gamepad_thumbstick_value_float.svg" />

Returnerar numeriskt axelvärde för spaken.

- Typ: värdeblock
- Utdata: numeriskt (float)
- Standardintervall: `-1` till `1`
- Valfritt intervall i gamepad-inställningar: `-100` till `100`
- Spakalternativ: `vänster`, `höger`
- Axelalternativ: `x-axel` / `y-axel`

### `Gamepad-triggertryckvärde (float)` {#block_gamepad_trigger_pressure_value_float}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float.svg')} alt="block_gamepad_trigger_pressure_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float_sony.svg')} alt="block_gamepad_trigger_pressure_value_float_sony.svg" />
</div>

Returnerar triggertrycksvärdet för den valda triggern.

- Typ: värdeblock
- Utdata: numeriskt (float)
- Standardintervall: `-1` till `1`
- Valfritt intervall i gamepad-inställningar: `-100` till `100`
- Triggeralternativ (Xbox-layout): `LT`, `RT`
- Triggeralternativ (Sony-layout): `L2`, `R2`
