---
id: Sensors
title: Sensors
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Sensors

Sensor blocks read hub/device state and provide data for conditions, events, and control logic.

## Device and hub sensors

### `Hub battery level` (Beginner) {#block_hubs_all_sensors_battery_level}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_battery_level.svg')} alt="block_hubs_all_sensors_battery_level.svg" />
Returns current hub battery level.

### `Hub battery voltage` (Advanced) {#block_hubs_all_sensors_battery_voltage}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_battery_voltage.svg')} alt="block_hubs_all_sensors_battery_voltage.svg" />
Returns the selected hub battery voltage in volts.

- Type: numeric reporter block
- Available only for hubs that report battery voltage.
- Returns `NaN` when the selected hub is not connected.

### `Device % battery` (Beginner) {#block_sensors_device_battery_level}
<img src={useBaseUrl('/img/blocks/block_sensors_device_battery_level.svg')} alt="block_sensors_device_battery_level.svg" />
Returns the current battery level of the phone/tablet device running MOCPilot (in percent).

### `Board temperature` (Advanced) {#block_hubs_all_sensors_board_temp}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_board_temp.svg')} alt="block_hubs_all_sensors_board_temp.svg" />
Returns hub board temperature.

- Available only for `BuWizz 2` and `BuWizz 3`.

### `Hub accelerometer` (Guru) {#block_hubs_all_sensors_accelerometer}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_accelerometer.svg')} alt="block_hubs_all_sensors_accelerometer.svg" />
Returns raw accelerometer data reported by the selected hub.

- Axis options: `x`, `y`, `z`

### `Hub acceleration` (Guru) {#block_hubs_all_sensors_acceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_acceleration.svg')} alt="block_hubs_all_sensors_acceleration.svg" />
Returns acceleration data reported by the selected hub.

- Axis options: `x`, `y`, `z`

### `Button pressed` (Beginner) {#block_hubs_all_sensors_button_pressed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_button_pressed.svg?v=20260409-2258')} alt="block_hubs_all_sensors_button_pressed.svg" />
Checks whether a selected hub button matches the selected state.

- State options: `pressed`, `released`
- Typical button option: `center` (hub-dependent)

- Note: available button options may differ by hub model (different hubs can expose different button sets).

### `Device type` (Beginner) {#block_hubs_all_motors_port_device_type}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_device_type.svg')} alt="block_hubs_all_motors_port_device_type.svg" />
Returns connected device type for the selected port.

- Type: reporter block
- Typical use: detect what device is connected before running device-specific logic

### `Device accelerometer` (Guru) {#block_sensors_device_accelerometer_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_accelerometer_sensor_data.svg')} alt="block_sensors_device_accelerometer_sensor_data.svg" />
Returns raw accelerometer values from device sensors.

- Axis options: `x`, `y`, `z`

### `Device acceleration` (Guru) {#block_sensors_device_acceleration_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_acceleration_sensor_data.svg')} alt="block_sensors_device_acceleration_sensor_data.svg" />
Returns acceleration data from device sensors.

- Axis options: `x`, `y`, `z`

## Orientation and tilt sensors

### `Device tilt` (Advanced) {#block_sensors_device_tilt_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_tilt_sensor_data.svg')} alt="block_sensors_device_tilt_sensor_data.svg" />
Returns tilt data from the phone/tablet device running MOCPilot.

- Axis options: `pitch`, `roll`

### `Tilt` (Beginner) {#block_hubs_all_sensors_tilt}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_tilt.svg')} alt="block_hubs_all_sensors_tilt.svg" />
Returns tilt angle for the selected axis.

- Axis options: `pitch`, `roll`, `yaw`
- Note: `yaw` is available only on hubs that provide yaw data.

### `Get orientation` (Beginner) {#block_hubs_sensors_get_orientation}
<img src={useBaseUrl('/img/blocks/block_hubs_sensors_get_orientation.svg')} alt="block_hubs_sensors_get_orientation.svg" />
Returns current orientation state of the hub.

- Output format options: `text`, `index`
- Orientation values: `Front`, `Top`, `Right`, `Back`, `Bottom`, `Left`

### `Is orientation up` (Beginner) {#block_hubs_all_sensors_is_orientation_up}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_orientation_up.svg')} alt="block_hubs_all_sensors_is_orientation_up.svg" />
Checks whether the hub orientation matches selected "up" orientation.

- Orientation options: `Front`, `Top`, `Right`, `Back`, `Bottom`, `Left`

### `Set tilt orientation` (Advanced) {#block_hubs_sensors_set_tilt_orientation}
<img src={useBaseUrl('/img/blocks/block_hubs_sensors_set_tilt_orientation.svg')} alt="block_hubs_sensors_set_tilt_orientation.svg" />
Configures orientation reference used by tilt/orientation-related blocks.

- Orientation options: `Front`, `Top`, `Right`, `Back`, `Bottom`, `Left`

## Timer and device motion sensors

### `Timer` (Advanced) {#block_sensors_timer_value_float}
<img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
Returns timer value in seconds.

### `Reset timer` (Advanced) {#block_sensors_timer_reset}
<img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
Resets the timer to zero.

## Port sensor blocks

### `Technic distance sensor` (Beginner) {#block_hubs_all_sensors_port_technic_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_distance.svg')} alt="block_hubs_all_sensors_port_technic_sensor_distance.svg" />
Returns distance values from a Technic distance sensor.

- Unit options: `mm`, `cm`, `inch`, `%`

### `Technic when distance is` (Beginner) {#block_hubs_all_sensors_port_technic_sensor_when_distance_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg" />
Triggers/checks distance condition for a Technic distance sensor.

- Compare options: `closer than`, `farther than`, `exactly at`
- Unit options: `mm`, `cm`, `inch`, `%`

### `Technic sensor set mode` (Advanced) {#block_hubs_all_sensors_port_technic_sensor_set_mode}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_set_mode.svg')} alt="block_hubs_all_sensors_port_technic_sensor_set_mode.svg" />
This block sets the Technic color sensor to the selected mode.

- Note: Changing the Color Sensor mode can affect your program in unexpected ways. For example, the Technic color sensor can't read colors or reflected light when it's in `"ambient"` mode.

### `Technic color sensor value` (Beginner) {#block_hubs_all_sensors_port_technic_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_color.svg" />
Returns detected color value from a Technic distance sensor.

- Output options: `value`, `string`

### `Technic when color is` (Beginner) {#block_hubs_all_sensors_port_technic_sensor_when_color_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_color_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_color_is.svg" />
Triggers/checks when detected color matches selected color.

### `Technic reflected light` (Beginner) {#block_hubs_all_sensors_port_technic_sensor_reflected_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_reflected_light.svg" />
Returns reflected light intensity.

### `Technic when reflected light is` (Beginner) {#block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg" />
Triggers/checks reflected light threshold condition.

- Compare options: `<`, `=`, `>`

### `Technic ambient light` (Beginner) {#block_hubs_all_sensors_port_technic_sensor_ambient_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_ambient_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_ambient_light.svg" />
Returns ambient light intensity.

### `Technic when ambient light is` (Beginner) {#block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is.svg" />
Triggers/checks ambient light threshold condition.

- Compare options: `<`, `=`, `>`

### `Technic raw color` (Beginner) {#block_hubs_all_sensors_port_technic_sensor_raw_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_raw_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_raw_color.svg" />
Returns raw color channel value from Technic sensor.

- Channel options: `red`, `green`, `blue`

### `BOOST sensor distance` (Beginner) {#block_hubs_all_sensors_port_boost_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_distance.svg" />
Returns distance from a BOOST distance sensor.

- Unit options: `%`, `cm`, `inch`

### `BOOST when distance is` (Beginner) {#block_hubs_all_sensors_port_boost_sensor_when_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_distance.svg" />
Triggers/checks distance condition for BOOST distance sensor.

- Compare options: `closer than`, `farther than`, `exactly at`
- Unit options: `%`, `cm`, `inch`

### `BOOST sensor color` (Beginner) {#block_hubs_all_sensors_port_boost_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_color.svg" />
Returns color detected by a BOOST sensor.

- Output options: `value`, `string`

### `BOOST is color` (Beginner) {#block_hubs_all_sensors_port_boost_sensor_is_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_is_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_is_color.svg" />
Checks whether BOOST sensor currently detects selected color.

### `BOOST reflected light` (Beginner) {#block_hubs_all_sensors_port_boost_sensor_reflected_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_boost_sensor_reflected_light.svg" />
Returns reflected light value from BOOST sensor.

### `BOOST when reflected light is` (Beginner) {#block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg" />
Triggers/checks reflected light threshold condition for BOOST sensor.

- Compare options: `<`, `=`, `>`

### `Technic Move set power mode` (Beginner) {#block_hubs_technicmove_sensors_set_power_mode}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_sensors_set_power_mode.svg')} alt="block_hubs_technicmove_sensors_set_power_mode.svg" />
Sets Technic Move power mode.

- Mode options: `normal`, `boost`

### `BuWizz output voltage` (Guru) {#block_hubs_buwizz_sensors_get_output_voltage}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_get_output_voltage.svg')} alt="block_hubs_buwizz_sensors_get_output_voltage.svg" />
Returns the current output voltage reported by a BuWizz hub.

- Available only for supported BuWizz hubs.

### `BuWizz port current` (Guru) {#block_hubs_buwizz_sensors_port_get_current}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_port_get_current.svg')} alt="block_hubs_buwizz_sensors_port_get_current.svg" />
Returns the current draw reported for the selected BuWizz hub port.

- Available only for supported BuWizz hubs and ports.

### `WeDo 2 distance` (Beginner) {#block_hubs_all_sensors_port_wedo2_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_sensor_distance.svg')} alt="block_hubs_all_sensors_port_wedo2_sensor_distance.svg" />
Returns distance from WeDo 2 distance sensor.

- Unit options: `%`, `cm`, `inch`

### `WeDo 2 when distance is` (Beginner) {#block_hubs_all_sensors_port_wedo2_sensor_when_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_sensor_when_distance.svg')} alt="block_hubs_all_sensors_port_wedo2_sensor_when_distance.svg" />
Triggers/checks distance condition for a WeDo 2 distance sensor.

- Compare options: `closer than`, `farther than`, `exactly at`
- Unit options: `%`, `cm`, `inch`

### `WeDo 2 tilt` (Beginner) {#block_hubs_all_sensors_port_wedo2_tilt}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_tilt.svg')} alt="block_hubs_all_sensors_port_wedo2_tilt.svg" />
Returns tilt value from WeDo 2 tilt sensor.

- Axis options: `pitch`, `roll`
