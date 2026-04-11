---
id: Gamepad
title: Gamepad
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Gamepad
Gamepad-blokken worden gebruikt om te reageren op controllerinvoer en de huidige gamepadstatuswaarden uit te lezen.

## Gebeurtenisblokken

### `Wanneer gamepad-knop is` {#block_gamepad_event_when_button_is}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is.svg')} alt="block_gamepad_event_when_button_is.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is_sony.svg')} alt="block_gamepad_event_when_button_is_sony.svg" />
</div>

Wordt geactiveerd wanneer de geselecteerde gamepad-knop overeenkomt met de ingestelde status.

- Type: gebeurtenisblok
- Knopopties (Xbox-indeling): `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Knopopties (Sony-indeling): `kruis`, `cirkel`, `vierkant`, `driehoek`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- Statusopties: `ingedrukt`, `losgelaten`

### `Wanneer gamepad D-pad is` {#block_gamepad_event_when_dpad_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_dpad_is.svg')} alt="block_gamepad_event_when_dpad_is.svg" />

Wordt geactiveerd wanneer de D-pad richting/status overeenkomt met de geselecteerde voorwaarde.

- Type: gebeurtenisblok
- Richtingsopties: `boven`, `onder`, `links`, `rechts`
- Statusopties: `ingedrukt`, `losgelaten`

### `Wanneer gamepad thumbstick is` {#block_gamepad_event_when_thumbstick_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_thumbstick_is.svg')} alt="block_gamepad_event_when_thumbstick_is.svg" />

Wordt geactiveerd wanneer de thumbstickvoorwaarde overeenkomt met de geselecteerde opties.

Op basis van de huidige opties ondersteunt dit blok:

- Stickselectie: `links` / `rechts`
- Richting/status: `boven`, `onder`, `links`, `rechts`, `bewogen`, `losgelaten`

- Type: gebeurtenisblok
- Typisch gebruik: reageren op richtingbeweging of loslaten van de stick

## Waardeblokken

### `Gamepad knopwaarde (boolean)` {#block_gamepad_button_value_boolean}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean.svg')} alt="block_gamepad_button_value_boolean.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean_sony.svg')} alt="block_gamepad_button_value_boolean_sony.svg" />
</div>

Geeft de huidige status van de geselecteerde gamepad-knop terug.

- Type: waarde-blok
- Output: `true`/`false`
- Knopopties (Xbox-indeling): `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Knopopties (Sony-indeling): `kruis`, `cirkel`, `vierkant`, `driehoek`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- Statusopties: `ingedrukt`, `losgelaten`

### `Gamepad D-pad knopwaarde (boolean)` {#block_gamepad_dpad_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_gamepad_dpad_button_value_boolean.svg')} alt="block_gamepad_dpad_button_value_boolean.svg" />

Geeft aan of de geselecteerde D-pad richting momenteel actief is.

- Type: waarde-blok
- Output: `true`/`false`
- Richtingsopties: `boven`, `onder`, `links`, `rechts`
- Statusopties: `ingedrukt`, `losgelaten`

### `Gamepad thumbstick waarde (float)` {#block_gamepad_thumbstick_value_float}

<img src={useBaseUrl('/img/blocks/block_gamepad_thumbstick_value_float.svg')} alt="block_gamepad_thumbstick_value_float.svg" />

Geeft de numerieke waarde van de thumbstick-as terug.

- Type: waarde-blok
- Output: numeriek (float)
- Standaardbereik: `-1` tot `1`
- Optioneel bereik in gamepadinstellingen: `-100` tot `100`
- Stickopties: `links`, `rechts`
- Asopties: `x-as` / `y-as`

### `Gamepad triggerdruk waarde (float)` {#block_gamepad_trigger_pressure_value_float}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float.svg')} alt="block_gamepad_trigger_pressure_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float_sony.svg')} alt="block_gamepad_trigger_pressure_value_float_sony.svg" />
</div>

Geeft de drukwaarde van de geselecteerde trigger terug.

- Type: waarde-blok
- Output: numeriek (float)
- Standaardbereik: `-1` tot `1`
- Optioneel bereik in gamepadinstellingen: `-100` tot `100`
- Triggeropties (Xbox-indeling): `LT`, `RT`
- Triggeropties (Sony-indeling): `L2`, `R2`