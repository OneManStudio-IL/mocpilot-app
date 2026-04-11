---
id: Events
title: Events
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Events

The **Events** category contains blocks that start scripts when a condition happens.

## Core events

### `When program started` {#block_event_when_program_started}

<img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />

Starts this script once when the profile program begins.

- Trigger: program launch
- Typical use: initialize variables, default motor states, startup sounds

### `When` {#block_event_when}

<img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />

Runs when a selected condition becomes true.

- Trigger: condition-based
- Typical use: branch logic based on runtime state

### `When timer greater than` {#block_event_when_timer_greater_than}

<img src={useBaseUrl('/img/blocks/block_event_when_timer_greater_than.svg')} alt="block_event_when_timer_greater_than.svg" />

Runs when timer value passes a threshold.

- Trigger: elapsed time
- Typical use: delayed actions, timed phases

### `When message received` {#block_event_when_message_recieved}

<img src={useBaseUrl('/img/blocks/block_event_when_message_recieved.svg')} alt="block_event_when_message_recieved.svg" />

Starts a script when a matching broadcast message is received.

- Trigger: message channel
- Typical use: synchronize multiple scripts

### `Broadcast` {#block_event_broadcast}

<img src={useBaseUrl('/img/blocks/block_event_broadcast.svg')} alt="block_event_broadcast.svg" />

Sends a message to all scripts listening for that message.

- Trigger: immediate send
- Typical use: notify other scripts without waiting

### `Broadcast and wait` {#block_event_broadcast_and_wait}

<img src={useBaseUrl('/img/blocks/block_event_broadcast_and_wait.svg')} alt="block_event_broadcast_and_wait.svg" />

Sends a message and pauses this script until listeners complete.

- Trigger: immediate send + wait
- Typical use: staged flows where order matters

## Hub events

### `Hub button pressed` {#block_hubs_all_event_button_pressed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_button_pressed.svg')} alt="block_hubs_all_event_button_pressed.svg" />

Runs when the main button on the hub is pressed.

- State options: `pressed`, `released`, `changed`
- Note: available button options may differ by hub model (different hubs can expose different button sets).

### `Hub connection changed` {#block_hubs_all_event_connection_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_connection_changed.svg')} alt="block_hubs_all_event_connection_changed.svg" />

Runs when the hub connection state changes (connected or disconnected).

- Trigger: hub connection status change
- Typical use: reconnection handling and safe fallback behavior after link loss

### `Hub battery changed` {#block_hubs_all_event_battery_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_battery_changed.svg')} alt="block_hubs_all_event_battery_changed.svg" />

Runs when reported hub battery level changes.

- Trigger: battery level update (for hubs that report battery state)
- Typical use: low-battery warning logic and power-saving mode switching

### `Hub accelerometer changed` {#block_hubs_all_event_accelerometer_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_accelerometer_changed.svg')} alt="block_hubs_all_event_accelerometer_changed.svg" />

Runs when acceleration values change.

### `Hub tilt changed` {#block_hubs_all_event_tilt_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_changed.svg')} alt="block_hubs_all_event_tilt_changed.svg" />

Runs when tilt value changes.

- Angle options: `any`, `pitch`, `roll`, `yaw`
- Note: `yaw` is available only on hubs that provide yaw data.

### `Hub orientation changed` {#block_hubs_all_event_tilt_orientation_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_orientation_changed.svg')} alt="block_hubs_all_event_tilt_orientation_changed.svg" />

Runs when orientation state changes (for example, front/up/down/left/right).

## Sensor port events

### `Technic color sensor event` {#block_hubs_all_event_port_technic_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_color.svg')} alt="block_hubs_all_event_port_technic_sensor_color.svg" />

Runs when the Technic color sensor reports a selected color.


### `Technic distance sensor event` {#block_hubs_all_event_port_technic_sensor_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_distance.svg')} alt="block_hubs_all_event_port_technic_sensor_distance.svg" />

Runs when Technic distance sensor values match the selected condition.

- Compare options: `closer than`, `farther than`, `exactly at`
- Unit options: `mm`, `cm`, `inch`, `%`
- Note: available units can depend on sensor mode and connected device.

### `BOOST sensor distance event` {#block_hubs_all_event_port_boost_sensor_when_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_event_port_boost_sensor_when_distance.svg" />

Runs when the BOOST distance sensor reaches the chosen threshold/condition.

- Compare options: `closer than`, `farther than`, `exactly at`
- Unit options: `%`, `cm`, `inch`

### `BOOST sensor color event` {#block_hubs_all_event_port_boost_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_color.svg')} alt="block_hubs_all_event_port_boost_sensor_color.svg" />

Runs when the BOOST sensor detects a selected color/value.