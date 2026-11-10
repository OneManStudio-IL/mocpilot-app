---
id: Light
title: Light
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Light

This page documents Light category blocks used to control LEDs and light outputs on supported hubs.

## Common light blocks

### `Set LED color` (Beginner) {#block_hubs_all_light_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_led_color.svg')} alt="block_hubs_all_light_set_led_color.svg" />

Sets hub LED color using predefined color options.

- Type: command block
- Typical use: show state (ready, running, warning, error)

### `Light turn to` (Beginner) {#block_hubs_all_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_to.svg')} alt="block_hubs_all_light_light_turn_to.svg" />

Sets selected light output to a target brightness/value.

- Type: command block
- Typical use: headlight brightness, status intensity

### `Light turn off` (Beginner) {#block_hubs_all_light_light_turn_off}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_off.svg')} alt="block_hubs_all_light_light_turn_off.svg" />

Turns selected light output off.

- Type: command block
- Typical use: shutdown sequence, battery-saving behavior

### `Technic Move light turn to` (Beginner) {#block_hubs_technicmove_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_light_light_turn_to.svg')} alt="block_hubs_technicmove_light_light_turn_to.svg" />

Variant of `Light turn to` for Technic Move hub/light target.

- Type: command block
- Typical use: set Move hub light output level

## Internal LED matrix blocks

### `Turn on light matrix` (Advanced) {#block_hubs_all_light_set_internal_led_matrix_image}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_image.svg')} alt="block_hubs_all_light_set_internal_led_matrix_image.svg" />

Displays the selected image on the hub's internal LED matrix and immediately continues to the next block in the stack. The image stays on the display until another block changes the internal LED matrix or the program stops.

- Type: command block
- Note: the selected hub must have an internal LED matrix.

### `Write on light matrix` (Beginner) {#block_hubs_all_light_set_internal_led_matrix_text}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_text.svg')} alt="block_hubs_all_light_set_internal_led_matrix_text.svg" />

Displays a text string on the hub's internal LED matrix by scrolling one letter at a time.

- Type: command block
- Note: the selected hub must have an internal LED matrix.

### `Turn off matrix pixels` (Beginner) {#block_hubs_all_light_turn_off_internal_led_matrix_pixels}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_turn_off_internal_led_matrix_pixels.svg')} alt="block_hubs_all_light_turn_off_internal_led_matrix_pixels.svg" />

Turns off all lights on the hub's internal LED matrix.

- Type: command block
- Note: the selected hub must have an internal LED matrix.

### `Set matrix pixel` (Advanced) {#block_hubs_all_light_set_internal_led_matrix_pixel}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_pixel.svg')} alt="block_hubs_all_light_set_internal_led_matrix_pixel.svg" />

Sets the brightness of one pixel on the hub's internal LED matrix. Only the selected pixel is updated; the rest of the display remains unchanged. Pixel position fields use column and row values, with pixel `1, 1` at the top-left corner.

- Type: command block
- Note: the selected hub must have an internal LED matrix.

### `Rotate matrix orientation` (Advanced) {#block_hubs_all_light_rotate_internal_led_matrix_orientation}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_rotate_internal_led_matrix_orientation.svg')} alt="block_hubs_all_light_rotate_internal_led_matrix_orientation.svg" />

Rotates the orientation of what is displayed on the hub's internal LED matrix clockwise or counterclockwise. Each rotation changes the display orientation by 90 degrees and affects Light blocks that run after it.

- Type: command block
- Note: the selected hub must have an internal LED matrix.

### `Set matrix orientation` (Advanced) {#block_hubs_all_light_set_internal_led_matrix_orientation}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_orientation.svg')} alt="block_hubs_all_light_set_internal_led_matrix_orientation.svg" />

Sets the orientation of what is displayed on the hub's internal LED matrix. The default orientation is upright, and the selected orientation affects Light blocks that run after it.

- Type: command block
- Orientation options: `upright`, `left`, `right`, `upside down`
- Note: the selected hub must have an internal LED matrix.

## Distance Sensor light blocks

### `Distance Sensor light up` (Beginner) {#block_hubs_all_light_port_distance_sensor_light_up}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_port_distance_sensor_light_up.svg')} alt="block_hubs_all_light_port_distance_sensor_light_up.svg" />

Sets the lights on the selected Distance Sensor. The block can turn individual sensor lights on or off, and can use a list reporter block to control the brightness of each light.

- Type: command block
- Note: available only for the MINDSTORMS Robot Inventor hub.

## BuWizz 3 light blocks

### `BuWizz 3 set LED color` (Beginner) {#block_hubs_buwizz3_light_port_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color.svg')} alt="block_hubs_buwizz3_light_port_set_led_color.svg" />

Sets LED color on selected BuWizz 3 port with built-in color options.

- Type: command block

### `BuWizz 3 set LED color (string)` (Guru) {#block_hubs_buwizz3_light_port_set_led_color_string}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_string.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_string.svg" />

Sets BuWizz 3 LED color using text color value.

- Type: command block
- Typical use: dynamic color names from variables

### `BuWizz 3 set LED color (RGB)` (Advanced) {#block_hubs_buwizz3_light_port_set_led_color_rgb}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_rgb.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_rgb.svg" />

Sets BuWizz 3 LED color using explicit RGB channels.

- Type: command block
- Typical use: full custom color control and gradients
