---
id: Gamepad
title: Gamepad
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Gamepad
Gamepad blocks are used to react to controller input and read current gamepad state values.

## Event blocks

### `When gamepad button is` {#block_gamepad_event_when_button_is}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is.svg')} alt="block_gamepad_event_when_button_is.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is_sony.svg')} alt="block_gamepad_event_when_button_is_sony.svg" />
</div>

Triggers when the selected gamepad button matches the configured state.

- Type: event block
- Button options (Xbox layout): `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Button options (Sony layout): `cross`, `circle`, `square`, `triangle`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- State options: `pressed`, `released`

### `When gamepad D-pad is` {#block_gamepad_event_when_dpad_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_dpad_is.svg')} alt="block_gamepad_event_when_dpad_is.svg" />

Triggers when D-pad direction/state matches the selected condition.

- Type: event block
- Direction options: `up`, `down`, `left`, `right`
- State options: `pressed`, `released`

### `When gamepad thumbstick is` {#block_gamepad_event_when_thumbstick_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_thumbstick_is.svg')} alt="block_gamepad_event_when_thumbstick_is.svg" />

Triggers when thumbstick condition matches selected options.

Based on current options, this block supports:

- Stick selection: `left` / `right`
- Direction/state selection: `up`, `down`, `left`, `right`, `moved`, `released`

- Type: event block
- Typical use: react to directional movement or stick release

## Value blocks

### `Gamepad button value (boolean)` {#block_gamepad_button_value_boolean}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean.svg')} alt="block_gamepad_button_value_boolean.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean_sony.svg')} alt="block_gamepad_button_value_boolean_sony.svg" />
</div>

Returns current state of selected gamepad button.

- Type: value block
- Output: `true`/`false`
- Button options (Xbox layout): `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Button options (Sony layout): `cross`, `circle`, `square`, `triangle`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- State options: `pressed`, `released`

### `Gamepad D-pad button value (boolean)` {#block_gamepad_dpad_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_gamepad_dpad_button_value_boolean.svg')} alt="block_gamepad_dpad_button_value_boolean.svg" />

Returns whether selected D-pad direction is currently active.

- Type: value block
- Output: `true`/`false`
- Direction options: `up`, `down`, `left`, `right`
- State options: `pressed`, `released`

### `Gamepad thumbstick value (float)` {#block_gamepad_thumbstick_value_float}

<img src={useBaseUrl('/img/blocks/block_gamepad_thumbstick_value_float.svg')} alt="block_gamepad_thumbstick_value_float.svg" />

Returns numeric thumbstick axis value.

- Type: value block
- Output: numeric (float)
- Default range: `-1` to `1`
- Optional range in gamepad settings: `-100` to `100`
- Stick options: `left`, `right`
- Axis options: `x-axis` / `y-axis`

### `Gamepad trigger pressure value (float)` {#block_gamepad_trigger_pressure_value_float}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float.svg')} alt="block_gamepad_trigger_pressure_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float_sony.svg')} alt="block_gamepad_trigger_pressure_value_float_sony.svg" />
</div>

Returns trigger pressure value for selected trigger.

- Type: value block
- Output: numeric (float)
- Default range: `-1` to `1`
- Optional range in gamepad settings: `-100` to `100`
- Trigger options (Xbox layout): `LT`, `RT`
- Trigger options (Sony layout): `L2`, `R2`

## Usage notes

- Use event blocks for immediate reaction to input state changes.
- Use value blocks for continuous polling in loops and control math.
- For smooth motor control, apply dead-zone and scaling to thumbstick/trigger values.
- Combine with broadcast blocks to separate input handling from action logic.
- In gamepad settings, button labels/layout can be switched between Xbox-style and Sony PlayStation-style mapping.
