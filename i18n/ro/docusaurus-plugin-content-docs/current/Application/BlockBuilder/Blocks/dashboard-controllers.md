---
id: DashboardControllers
title: Dashboard controllers
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Dashboard controllers

These blocks are used to read user input from on-screen controls, react to user actions, and update dashboard UI state.

## Global dashboard controller blocks

### `Set controller color` {#block_dashboard_controller_all_set_color}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_color.svg')} alt="block_dashboard_controller_all_set_color.svg" />

Changes the visual accent color of the selected dashboard controller.

- Type: command block
- Typical use: indicate runtime states or dynamically change controller style based on conditions

### `Set controller interactivity` {#block_dashboard_controller_all_set_interactivity}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_interactivity.svg')} alt="block_dashboard_controller_all_set_interactivity.svg" />

Controls selected dashboard controller interactivity.
If interactivity is disabled, the controller does not react to touch input.

- Type: command block
- Typical use: temporarily lock controls during specific logic or safety states
- State options: `enable`, `disable`

## Button blocks

### `Button event` {#block_dashboard_controller_button_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_event.svg')} alt="block_dashboard_controller_button_event.svg" />

Triggers when the dashboard button changes state (pressed/released).

- Type: event block
- Output: starts connected script
- State options: `pressed`, `released`

### `Button value (boolean)` {#block_dashboard_controller_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_value_boolean.svg')} alt="block_dashboard_controller_button_value_boolean.svg" />

Reports current dashboard button state.

- Type: value block
- Output: `true`/`false`
- State options: `pressed`, `released`

## D-pad blocks

### `D-pad event` {#block_dashboard_controller_dpad_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_event.svg')} alt="block_dashboard_controller_dpad_event.svg" />

Triggers when D-pad direction changes or matches configured direction.

- Type: event block
- Output: starts connected script
- Direction options: `up`, `down`, `left`, `right`
- Button state options: `pressed`, `released`

### `D-pad value (boolean)` {#block_dashboard_controller_dpad_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_value_boolean.svg')} alt="block_dashboard_controller_dpad_value_boolean.svg" />

Reports whether a selected D-pad direction is active.

- Type: value block
- Output: `true`/`false`
- Direction options: `up`, `down`, `left`, `right`
- Button state options: `pressed`, `released`

## Joystick blocks

### `Joystick event` {#block_dashboard_controller_joystick_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_event.svg')} alt="block_dashboard_controller_joystick_event.svg" />

Triggers when joystick position changes.

- Type: event block
- Output: starts connected script
- State options: `up`, `down`, `left`, `right`, `moved`, `released`

### `Joystick value (float)` {#block_dashboard_controller_joystick_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_value_float.svg')} alt="block_dashboard_controller_joystick_value_float.svg" />

Reports joystick axis value.

- Type: value block
- Output: numeric (float), typically in a normalized range
- Axis options: `x-axis`, `y-axis`

## Pedals blocks

### `Pedals event` {#block_dashboard_controller_pedals_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_event.svg')} alt="block_dashboard_controller_pedals_event.svg" />

Triggers when pedal input changes.

- Type: event block
- Output: starts connected script
- Pedal options: `any`, `brake`, `acceleration`
- State options: `moved`, `pressed`, `released`

### `Pedals value (float)` {#block_dashboard_controller_pedals_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_float.svg')} alt="block_dashboard_controller_pedals_value_float.svg" />

Reports pedal analog value.

- Type: value block
- Output: numeric (float)

### `Pedals value (boolean)` {#block_dashboard_controller_pedals_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_boolean.svg')} alt="block_dashboard_controller_pedals_value_boolean.svg" />

Returns selected state based on whether a specific pedal is pressed or released.

- Type: value block
- Output: `true`/`false`
- Pedal options: `brake`, `acceleration`
- State options: `pressed`, `released`

## Slider blocks

### `Slider event` {#block_dashboard_controller_slider_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_event.svg')} alt="block_dashboard_controller_slider_event.svg" />

Triggers when slider value changes.

- Type: event block
- Output: starts connected script
- State options: `low`, `high`, `moved`, `released`

### `Slider value (float)` {#block_dashboard_controller_slider_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_value_float.svg')} alt="block_dashboard_controller_slider_value_float.svg" />

Reports current slider value.

- Type: value block
- Output: numeric (float)

## Stepper blocks

### `Stepper event` {#block_dashboard_controller_stepper_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_event.svg')} alt="block_dashboard_controller_stepper_event.svg" />

Triggers when stepper value changes by a step.

- Type: event block
- Output: starts connected script
- Step options: `any`, `reset`, `minus`, `plus`
- Button state options: `pressed`, `released`

### `Stepper value (float)` {#block_dashboard_controller_stepper_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_value_float.svg')} alt="block_dashboard_controller_stepper_value_float.svg" />

Reports current stepper value.

- Type: value block
- Output: numeric (float)

## Steering wheel blocks

### `Steering wheel event` {#block_dashboard_controller_steering_wheel_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_event.svg')} alt="block_dashboard_controller_steering_wheel_event.svg" />

Triggers when steering wheel position changes.

- Type: event block
- Output: starts connected script
- State options: `moved`, `pressed`, `released`

### `Steering wheel value (float)` {#block_dashboard_controller_steering_wheel_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_value_float.svg')} alt="block_dashboard_controller_steering_wheel_value_float.svg" />

Reports current steering wheel value.

- Type: value block
- Output: numeric (float)

### `Steering wheel value (boolean)` {#block_dashboard_controller_steeringwheel_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steeringwheel_value_boolean.svg')} alt="block_dashboard_controller_steeringwheel_value_boolean.svg" />

Returns selected state based on whether the steering wheel is pressed or released.

- Type: value block
- Output: `true`/`false`
- State options: `moved`, `pressed`, `released`

## Switch blocks

### `Switch event` {#block_dashboard_controller_switch_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_event.svg')} alt="block_dashboard_controller_switch_event.svg" />

Triggers when switch state changes.

- Type: event block
- Output: starts connected script
- Toggle options: `on`, `off`

### `Switch value (boolean)` {#block_dashboard_controller_switch_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_value_boolean.svg')} alt="block_dashboard_controller_switch_value_boolean.svg" />

Reports current switch state.

- Type: value block
- Output: `true`/`false`
- State options: `on`, `off`

## Monitor blocks

### `Monitor show` {#block_dashboard_controller_monitor_show}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_show.svg')} alt="block_dashboard_controller_monitor_show.svg" />

Displays information (text or value) on the dashboard monitor.

- Type: command block
- Typical use: show battery level, motor angle, current connected device on a hub port, and similar runtime info

### `Monitor set value` {#block_dashboard_controller_monitor_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_set_value.svg')} alt="block_dashboard_controller_monitor_set_value.svg" />

Sets integer value for a dashboard speedometer monitor.

- Type: command block
- Typical use: update speedometer-like monitor value in runtime

### `Monitor tilt set value` {#block_dashboard_controller_monitor_tilt_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_tilt_set_value.svg')} alt="block_dashboard_controller_monitor_tilt_set_value.svg" />

Sets tilt monitor value (pitch/roll) for dashboard tilt monitor.

- Type: command block
- Typical use: display runtime tilt values in dedicated tilt monitor
- Axis options: `pitch`, `roll`

## Usage notes

- Event blocks are best for reacting immediately to user input changes.
- Value blocks are best when you need current state inside loops/conditions.
- For smooth control, combine value blocks with scaling and dead-zone logic.
- Use interactivity/color blocks to reflect app states (armed, paused, error).
