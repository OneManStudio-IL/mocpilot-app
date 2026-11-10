---
id: Operations
title: Operations and outputs
description: "Quick Links operations (Motor, Servo, Light and more) and outputs (Hub, Indicator, Hub LED, LED matrix, Calibrate servos)."
---

# Operations and outputs

The **Outputs** tab of the palette contains operations and outputs.

- An **operation** says *what* to do (turn a motor, steer, blink a light). It is always followed by a **Hub** output that says *where* (which hub, which ports).
- A **direct output** (Indicator, Hub LED, LED matrix, Calibrate servos) ends the row by itself, without an operation.

Common operations are always listed. Hub-specific operations appear only when a hub in the profile supports them.

## Operations for motors and lights

### Motor

Runs the motor at the input's value: the further you push, the faster; 0 stops it. Settings appear only if the hub supports them:

- **At stop**: Hub default, Coast, Brake, Hold position;
- **Hub acceleration**: Hub default, Fast, Balanced, Smooth, Slow, Very slow (the hub's own ramp; for your own ramp use the **Smooth** block);
- **Stall detection**: Hub default, On, Off (Robot Inventor).

### Servo

Steering with a motor that has an encoder: the input −1…1 turns the motor to *centre + value × angle*. Release the stick and the wheels return to the centre.

- **Calibration**: **Manual** or **Auto**.
- **Angle**: ±30°, ±45°, ±60°, ±90°, ±120°, ±180°, ±1, 2, 3 or 5 turns (default ±90°).
- **Centre**: −20°…+20°, to fine-tune straight-ahead.
- **Turn speed**: 25–100 %.

**Manual**: turn the axle to the middle and tap **Set as zero**; nudge with **◀ 5°** / **5° ▶**.

**Auto**: at every start the motor turns to both end stops, the middle becomes zero and the travel becomes the angle (angle and centre are hidden). **Calibrate now** runs it immediately. The steering must have end stops. Messages: "Calibrating: the motor turns to both end stops…", "Calibrated: the servo turns ±…°, the centre is zero", "Calibration failed: check the hub, the motor and that the axle has end stops".

On a **Technic Move Hub** the hub steers its own rack and calibrates it itself; only the calibration mode applies.

### Motor for time

Runs the motor for a set **Time** (0.5, 1, 2, 3, 5 or 10 s) when the input turns on. Speed and direction come from the input value. For doors, tippers, a horn motor.

### Run for degrees

Turns the motor once per press by **Degrees** (45°, 90°, 180°, 1, 2, 3, 5 or 10 turns) at **Speed** 25–100 %. The sign of the input gives the direction. Needs a motor with an encoder.

### Go to position

Moves the motor to **Position when on** (0–315° in 45° steps) and, when the input turns off, to **Position when off** or **Stay**. Takes the shortest way. Angular motors (absolute position) only.

### Light

Drives LEGO® lights on a port.

- **Brightness**: 25–100 %; with a value input, the brightness follows the value.
- **Blink: on** (No blink, 0.25–2 s) and **Blink: off** (Same as on, 0.25–2 s): turn signals, beacons.

Not available on WeDo 2.0 ports.

### Port colour (BuWizz 3.0 Pro)

Sets the colour of the port LEDs of a BuWizz 3.0 Pro. **Colour**: **From the list** (**Colour when on** / **Colour when off**) or **RGB** (Red, Green, Blue 0–255).

### Sensor lights

Lights the segments of the Technic distance sensor's "eyes": **Lights** (All, Top, Bottom, Left, Right, Diagonal) and **Brightness**. One port only. Robot Inventor and SPIKE hubs.

## Whole-hub operations

These control the whole hub, so the Hub block after them has no ports.

| Operation | Hub | Does |
|---|---|---|
| **Brake** | Technic Move | brakes while the input is on |
| **Boost** | Technic Move | boost power mode while on, normal when off |
| **Power pulse** | Technic Move | one power pulse per press (not every Technic Move firmware supports it) |
| **Power mode** | BuWizz 2.0 | **Mode when on**: Slow, Normal, Fast, Ludicrous; **Mode when off**: Keep or a mode |
| **Channel** | Mould King | **Channel when on**: A, B, C; **Channel when off**: Keep or a channel |

## Outputs

### Hub

The hub and its ports. See [Hub block and ports](/docs/Application/Links/HubsAndPorts).

### Indicator

Shows the value on a dashboard monitor. Settings: **Dashboard indicator** and **Axis** (Tilt X / Tilt Y for a Tilt monitor).

- **Monitor** (text monitor): shows the value; right after a hub sensor it shows the real value with its unit.
- **Battery level** and **Speedometer** (value monitors).
- **Tilt monitor**: one row per axis.

The indicator shows the value as it is, so the row must not have an operation. See [Indicators and monitors](/docs/Application/Dashboard/Indicators).

### Hub LED

The colour light of the hub. **Colour**: **From the list**, with **Colour when on** (default Red) and **Colour when off** (default Off), or **RGB**. Colours: Off, Pink, Purple, Blue, Light blue, Light green, Green, Yellow, Orange, Red, White.

Available on LEGO® hubs (Technic, City, BOOST, Technic Move, WeDo 2.0, Robot Inventor, the remote); not on BuWizz, SBrick or Mould King.

### LED matrix

The light matrix of Robot Inventor and SPIKE hubs. **Show**: **Level bar**, **Number** or **Image when on** (Heart, Smile, Sad, Check, Cross, Arrow up/down/left/right, All on). **Orientation**: Keep, Upright, Upside down, Left, Right.

### Calibrate servos

On press, recalibrates every Servo in **Auto** mode in the program. Put it on a dashboard button: *BTN3* → *Calibrate servos*.

## When the program stops

Motors stop, the LED matrix is cleared, port colours and sensor lights go off.
