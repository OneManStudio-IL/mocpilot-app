---
id: PhoneSensors
title: Phone sensors
description: "Use the tilt and acceleration of your phone or tablet to control a model."
---

# Phone sensors

Your phone or tablet has motion sensors. MOCPilot can use them as input: tilt the phone to steer, shake it to trigger something, or show the phone's battery on the dashboard.

Phone sensors are available in **Logic Blocks** (category **Sensors**). Quick Links uses dashboard controls, the gamepad and hub sensors as inputs.

## Sensor blocks

| Block | Gives |
|---|---|
| `Device tilt` (pitch, roll) | the tilt of the device in degrees |
| `Device acceleration` (x, y, z) | the acceleration of the device, m/s² |
| `Device accelerometer` (x, y, z) | raw accelerometer values, m/s² |
| `Device % battery` | the battery level of the device |

Details: [Sensors](/docs/Application/BlockBuilder/Blocks/Sensors).

## Example: steer by tilting the phone

```text
When program started
Forever
    Go to position  (Hub 1, port B)  ←  Device tilt (roll) × 2
```

Use a motor with absolute position (an angular motor) on the steering.

Hold the phone in landscape like a steering wheel. Limit the value with the *is in between* or *min/max* operators so the steering does not hit its end stops.

## Tips

- Lock the screen rotation of the device, otherwise the system may rotate the screen while you tilt.
- Computers have no motion sensors; the blocks give zero there.
- To show the tilt on the dashboard, send the angles to a **Tilt monitor** (paid themes). See [Indicators and monitors](/docs/Application/Dashboard/Indicators).
- Hubs have their own tilt sensors too: see the hub sensor blocks and the Quick Links **Hub** input.
