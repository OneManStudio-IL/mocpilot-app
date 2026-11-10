---
id: Inputs
title: Inputs
description: "Quick Links inputs: dashboard controls, the gamepad, hub buttons and hub sensors."
---

# Inputs

An input starts every row. The **Inputs** tab of the palette lists:

- one block per **dashboard control** (joysticks and D-pads: one block per axis);
- one **Gamepad** block;
- one **Hub** block per hub of the profile (except Mould King, which has no sensors or buttons).

If the tab is empty: "Add controllers on the dashboard or hubs in My Hubs: they appear here".

## Controller

A control from your dashboard, referred to by its name: **JOY1**, **SLDR1**, **BTN2**…

| Control | Channel | Signal |
|---|---|---|
| Joystick | **X axis** or **Y axis** | value −1…1 |
| Slider | — | value |
| Wheel (steering wheel) | — | value −1…1 |
| Pedals | — | value (accelerator, brake) |
| D-pad | **Up / down** or **Left / right** | −1, 0 or +1 |
| Button | — | on while pressed |
| Switch | — | on / off |
| Stepper (step switch) | — | the current step |

Settings: **Controller** (which control) and **Channel** (axis or direction).

When you add, rename or change a control on the dashboard, the palette and the rows update automatically. If you change a joystick to "Only horizontal", rows using its Y axis report "… does not move along this axis".

## Gamepad

One block for the whole gamepad; choose the **Input**:

- **Sticks**: Left stick Y, Left stick X, Right stick Y, Right stick X (value −1…1);
- **Triggers**: RT, LT (PlayStation: R2, L2) (value);
- **Face buttons**: A, B, X, Y (PlayStation: Cross, Circle, Square, Triangle) (on/off);
- **Bumpers**: LB, RB (PlayStation: L1, R1) (on/off);
- **D-pad**: Up, Down, Left, Right (on/off).

Labels follow **Gamepad buttons layout** on the [Gamepad page](/docs/Application/Dashboard/Gamepad). Turn on **Enable gamepad blocks** there first.

## Hub

A hub can be an input too: its buttons and sensors. Settings: **Hub**, **Button or sensor**, **Port** (for devices on ports) and **Hub orientation** (for tilt and acceleration: how the hub is mounted in the model). Only what this hub supports is listed.

| Button or sensor | Unit | Notes |
|---|---|---|
| **Button 1, 2…** | on/off | the hub button; buttons of the LEGO® Powered Up remote |
| **Battery** | % | |
| **Battery voltage** | V | |
| **Output voltage** | V | BuWizz 2.0 |
| **Temperature** | °C | |
| **Tilt pitch / roll / yaw** | ° | built-in tilt sensor |
| **Acceleration X / Y / Z** | m/s² | |
| **Motor speed** | % | port |
| **Motor angle** | ° | relative, port |
| **Motor position** | ° | absolute (angular motors), port |
| **Motor power** | % | port, Robot Inventor |
| **Motor current** | A | port |
| **Distance sensor** | | port |
| **Color sensor** | | port |
| **Reflected light / Ambient light** | % | port |
| **Tilt sensor pitch / roll** | ° | WeDo 2.0 / BOOST tilt sensor on a port |
| **Power mode** | 1–4 | BuWizz 2.0 |
| **Connected** | on/off | whether the hub is connected |

The value travels along the row scaled to −1…1. A **Monitor** indicator placed directly after a sensor shows the real value with its unit, such as "7.85 V" or "−12°".

Typical uses:

- *Battery* → *Indicator* (Battery level);
- *Distance sensor* → *Threshold* (Below 20 %) → *Motor for time*: back off when something is close;
- *Button 1* (Powered Up remote) → *Motor*: drive with the physical remote.
