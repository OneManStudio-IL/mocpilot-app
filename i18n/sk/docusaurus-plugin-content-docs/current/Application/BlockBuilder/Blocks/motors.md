---
id: Motors
title: Motors
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Motors

Motor blocks are used to start, stop, position, and tune motors connected to hub ports.

## Core motor command blocks

### `Start motor` {#block_hubs_all_motors_port_start_motor}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor.svg')} alt="block_hubs_all_motors_port_start_motor.svg" />
Starts selected motor.

- Direction options: clockwise / counterclockwise

### `Stop motor` {#block_hubs_all_motors_port_stop_motor}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_stop_motor.svg')} alt="block_hubs_all_motors_port_stop_motor.svg" />
Stops selected motor.

### `Run for` {#block_hubs_all_motors_port_run_for}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for.svg')} alt="block_hubs_all_motors_port_run_for.svg" />
Runs selected motor for specified time/angle/rotation based on block settings.

- Direction options: clockwise / counterclockwise
- Unit options: `rotations`, `degrees`, `seconds`
- Note: this feature requires a motor on the selected port that supports encoder-based control.

### `Start motor at speed` {#block_hubs_all_motors_port_start_motor_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor_at_speed.svg')} alt="block_hubs_all_motors_port_start_motor_at_speed.svg" />
Starts motor with explicit speed value.

### `Run for at speed` {#block_hubs_all_motors_port_run_for_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for_at_speed.svg')} alt="block_hubs_all_motors_port_run_for_at_speed.svg" />
Runs motor for a target duration/amount with explicit speed.

- Unit options: `rotations`, `degrees`, `seconds`
- Note: this feature requires a motor on the selected port that supports encoder-based control.

### `Set motor speed` {#block_hubs_all_motors_port_set_motor_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_speed.svg')} alt="block_hubs_all_motors_port_set_motor_speed.svg" />
Sets speed used by related motor run blocks.

## Position and movement blocks

### `Go to position` {#block_hubs_all_motors_port_go_to_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_position.svg')} alt="block_hubs_all_motors_port_go_to_position.svg" />
Moves motor to target absolute position.

- Path options: `shortest path`, `clockwise`, `counterclockwise`
- Note: this feature requires a motor on the selected port that supports encoder-based control.

### `Go to relative position` {#block_hubs_all_motors_port_go_to_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_relative_position.svg')} alt="block_hubs_all_motors_port_go_to_relative_position.svg" />
Moves motor by a relative offset.

- Note: this feature requires a motor on the selected port that supports encoder-based control.

### `BuWizz 3 go to relative position` {#block_hubs_buwizz3_motors_port_go_to_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_motors_port_go_to_relative_position.svg')} alt="block_hubs_buwizz3_motors_port_go_to_relative_position.svg" />
BuWizz 3 variant of relative positioning block.

- Note: this feature requires a motor on the selected port that supports encoder-based control.

### `Set relative position` {#block_hubs_all_motors_port_set_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_relative_position.svg')} alt="block_hubs_all_motors_port_set_relative_position.svg" />
Sets motor relative-position reference.

- Note: this feature requires a motor on the selected port that supports encoder-based control.

### `Calibrate steering rack` {#block_hubs_all_motors_port_calibrate_steering_rack}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_calibrate_steering_rack.svg')} alt="block_hubs_all_motors_port_calibrate_steering_rack.svg" />
Calibrates steering rack neutral/reference position.

- Requirement: the motor connected to the selected port must support absolute/relative angle tracking (internal encoder).
- Mechanical requirement: steering axis movement must be physically limited to a valid range (for example with steering rack/gearing end limits).
- How it works: the block sweeps and measures the available steering rotation range, then computes calibration data used for steering configuration.
- Output behavior: block arguments write results into variables passed to the block (function-like pass-by-reference behavior). Those variables are mutated by the block and should be used to read calibration results.

## Motor tuning and safety blocks

### `Set motor behavior at stop` {#block_hubs_all_motors_port_set_motor_to_at_stop}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_to_at_stop.svg')} alt="block_hubs_all_motors_port_set_motor_to_at_stop.svg" />
Sets motor stop mode (for example brake/hold/float based on available options).

- Stop mode options: `brake`, `hold position`, `coast`
- Note: this feature requires a motor on the selected port that supports encoder-based control.

### `Set stall detection` {#block_hubs_all_motors_port_set_motors_stall_detection}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motors_stall_detection.svg')} alt="block_hubs_all_motors_port_set_motors_stall_detection.svg" />
Enables or disables stall detection.

- Note: available only for the MINDSTORMS Robot Inventor hub.

### `Set acceleration` {#block_hubs_all_motors_port_set_acceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_acceleration.svg')} alt="block_hubs_all_motors_port_set_acceleration.svg" />
Sets motor acceleration profile/rate.

- Profile options: `default`, `fast`, `balanced`, `smooth`, `slow`, `very slow`
- Note: this feature requires a motor on the selected port that supports encoder-based control.

### `Set deceleration` {#block_hubs_all_motors_port_set_deceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_deceleration.svg')} alt="block_hubs_all_motors_port_set_deceleration.svg" />
Sets motor deceleration profile/rate.

- Profile options: `default`, `fast`, `balanced`, `smooth`, `slow`, `very slow`
- Note: this feature requires a motor on the selected port that supports encoder-based control.

## Motor reporter blocks

### `Position` {#block_hubs_all_motors_port_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_position.svg')} alt="block_hubs_all_motors_port_position.svg" />
Returns current motor position.

### `Relative position` {#block_hubs_all_motors_port_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_relative_position.svg')} alt="block_hubs_all_motors_port_relative_position.svg" />
Returns current relative position value.

### `Speed` {#block_hubs_all_motors_port_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_speed.svg')} alt="block_hubs_all_motors_port_speed.svg" />
Returns current motor speed.

### `Power` {#block_hubs_all_motors_port_power}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_power.svg')} alt="block_hubs_all_motors_port_power.svg" />
Returns current motor power value.

- Note: available only for the MINDSTORMS Robot Inventor hub.

## Technic Move motor blocks

### `Start motors at speed` {#block_hubs_technicmove_motors_start_motors_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_start_motors_at_speed.svg')} alt="block_hubs_technicmove_motors_start_motors_at_speed.svg" />
Starts Technic Move drive motors at selected speed.

### `Stop motors` {#block_hubs_technicmove_motors_stop_motors}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_stop_motors.svg')} alt="block_hubs_technicmove_motors_stop_motors.svg" />
Stops Technic Move drive motors.

### `Brake` {#block_hubs_technicmove_motors_brake}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_brake.svg')} alt="block_hubs_technicmove_motors_brake.svg" />
Applies brake behavior to Technic Move motors.

- Brake options: `off`, `on`

### `Set steering rack to` {#block_hubs_technicmove_motors_set_steering_rack_to}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_set_steering_rack_to.svg')} alt="block_hubs_technicmove_motors_set_steering_rack_to.svg" />
Sets steering rack target position/value.

### `Calibrate steering rack` {#block_hubs_technicmove_motors_calibrate_steering_rack}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_calibrate_steering_rack.svg')} alt="block_hubs_technicmove_motors_calibrate_steering_rack.svg" />
Calibrates the Technic Move steering rack using the hub's internal calibration algorithm and automatic steering range detection.

- Note: the motor axis must be mechanically limited (for example, by a steering rack mechanism).