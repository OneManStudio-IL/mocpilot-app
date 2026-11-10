---
id: Control
title: Control
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Control

Control blocks manage execution flow: waiting, loops, branching, and stopping scripts.

## Wait blocks

### `Wait` (Beginner) {#block_control_wait_for}

<img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />

Pauses the current script for a specified time.

### `Wait until` (Advanced) {#block_control_wait_until}

<img src={useBaseUrl('/img/blocks/block_control_wait_until.svg')} alt="block_control_wait_until.svg" />

Pauses the current script until a condition becomes true.

## Loop blocks

### `Repeat` (Advanced) {#block_control_repeat_for}

<img src={useBaseUrl('/img/blocks/block_control_repeat_for.svg')} alt="block_control_repeat_for.svg" />

Runs nested blocks a fixed number of times.

### `Repeat until` (Advanced) {#block_control_repeat_until}

<img src={useBaseUrl('/img/blocks/block_control_repeat_until.svg')} alt="block_control_repeat_until.svg" />

Runs nested blocks repeatedly until a condition becomes true.

### `Forever` (Advanced) {#block_control_repeat_forever}

<img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />

Runs nested blocks continuously until the program or script is stopped.

## Branch blocks

### `If` (Beginner) {#block_control_if}

<img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />

Runs nested blocks only when the condition is true.

### `If / Else` (Advanced) {#block_control_if_else}

<img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />

Runs one branch when the condition is true, otherwise runs the alternative branch.

### `Do this and this` (Guru) {#block_control_do_this_and_this}

<img src={useBaseUrl('/img/blocks/block_control_do_this_and_this.svg')} alt="block_control_do_this_and_this.svg" />

Runs two block stacks in sequence as part of one control flow operation.

## Stop blocks

### `Stop` (Beginner) {#block_control_stop}

<img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />

Stops script execution (scope depends on selected stop option).

- Stop options: `all`, `this stack`, `and exit program`

### `Stop other stacks` (Guru) {#block_control_stop_other_stacks}

<img src={useBaseUrl('/img/blocks/block_control_stop_other_stacks.svg')} alt="block_control_stop_other_stacks.svg" />

Stops all other running stacks while allowing the current stack to continue.

## Hub/control utility blocks

### `Set connect` (Beginner) {#block_hubs_control_set_connect}

<img src={useBaseUrl('/img/blocks/block_hubs_control_set_connect.svg')} alt="block_hubs_control_set_connect.svg" />

Controls hub connection state from control flow logic.

- Action options: `connect`, `disconnect`

### `Set hub configuration` (Advanced) {#block_hubs_set_hub_config}

<img src={useBaseUrl('/img/blocks/block_hubs_set_hub_config.svg')} alt="block_hubs_set_hub_config.svg" />

Sets the selected hub to one of its supported configuration profiles.

- Available only for hubs that expose hub configuration options.
- Typical use: switch a configurable hub, such as Technic Move Hub, to a different stored configuration before running the next blocks.

### `Hub configuration` (Advanced) {#block_hubs_all_control_hub_config}
<img src={useBaseUrl('/img/blocks/block_hubs_all_control_hub_config.svg')} alt="block_hubs_all_control_hub_config.svg" />
Returns the current configuration of the selected hub.

- Type: reporter block
- Output format options: `text`, `index`
- Available only for hubs that expose hub configuration options.
- Returns `NaN` when the selected hub is not connected or no configuration is available.

### `Is connected` (Beginner) {#block_hubs_all_sensors_is_connected}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_connected.svg')} alt="block_hubs_all_sensors_is_connected.svg" />

Returns whether the hub is currently connected.

- Type: boolean reporter block

### `BuWizz 2 set power mode` (Beginner) {#block_hubs_buwizz_sensors_set_power_mode}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_set_power_mode.svg')} alt="block_hubs_buwizz_sensors_set_power_mode.svg" />

Sets BuWizz 2 hub power mode.

- Mode options: `Slow`, `Normal`, `Fast`, `Ludicrous`

### `BuWizz 2 get power mode` (Guru) {#block_hubs_buwizz_sensors_get_power_mode}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_get_power_mode.svg')} alt="block_hubs_buwizz_sensors_get_power_mode.svg" />

Returns the currently active BuWizz 2 power mode.

- Output format options: `text`, `index`

### `MouldKing set control channel` (Advanced) {#block_hubs_mouldking_control_set_control_channel}

<img src={useBaseUrl('/img/blocks/block_hubs_mouldking_control_set_control_channel.svg')} alt="block_hubs_mouldking_control_set_control_channel.svg" />

Sets active control channel for supported MouldKing hub/controller.

- Channel options: `A`, `B`, `C`

### `MouldKing get control channel` (Advanced) {#block_hubs_mouldking_control_get_control_channel}

<img src={useBaseUrl('/img/blocks/block_hubs_mouldking_control_get_control_channel.svg')} alt="block_hubs_mouldking_control_get_control_channel.svg" />

Returns current active control channel for supported MouldKing hub/controller.

- Output format options: `text`, `index`
