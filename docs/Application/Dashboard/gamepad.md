---
id: Gamepad
title: Gamepad
description: "Drive your model with an Xbox or PlayStation style gamepad."
---

import Screenshot from '@site/src/components/Screenshot';

# Gamepad

A physical gamepad is often nicer than a touch screen: real sticks, triggers and buttons. MOCPilot works with Bluetooth and USB gamepads that the device's system supports (Xbox and PlayStation style controllers on iPhone, iPad, Android, Mac and Windows).

The gamepad works together with the dashboard; you can use both at the same time.

## Connect a gamepad

1. Pair the gamepad with your phone, tablet or computer in the system's Bluetooth settings (or plug it in by USB).
2. Open a profile and tap **Gamepad** in the editor.
3. The page header shows **Gamepad: (name)**. "Gamepad is not connected" means the system does not see it yet.

<Screenshot name="gamepad" alt="Gamepad page" width={900} />

## Gamepad page

- **Enable gamepad blocks**: turns on the gamepad inputs for this profile. Without it, Quick Links rows with the Gamepad input report "Turn on gamepad blocks on the Gamepad page (top bar)", and Logic Blocks does not show the Gamepad category.
- **Gamepad buttons layout**: **Xbox** (A, B, X, Y, LB, RB, LT, RT) or **Sony PS** (Cross, Circle, Square, Triangle, L1, R1, L2, R2). The editors label buttons by this choice.
- **Gamepad values range** (Logic Blocks): sticks give **-1..1** or **-100..100**.
- **Select gamepad**: when more than one gamepad is connected.
- **Test gamepad** → **Test**: a live tester that shows buttons, triggers, sticks and the D-pad, so you can check everything before using it.

The settings are stored in the profile.

## Use the gamepad in Quick Links

Drag the **Gamepad** input into a row and choose its **Input**:

- sticks: Left stick Y, Left stick X, Right stick Y, Right stick X;
- triggers: RT / LT (R2 / L2);
- face buttons: A, B, X, Y (Cross, Circle, Square, Triangle);
- bumpers: LB / RB (L1 / R1);
- D-pad: Up, Down, Left, Right.

Example: *Gamepad* (Left stick Y) → *Smooth* → *Motor* → *Hub* (port A). See [Inputs](/docs/Application/Links/Inputs#gamepad).

## Use the gamepad in Logic Blocks

The **Gamepad** category has event blocks (*when gamepad button is …*, *when gamepad D-pad is …*, *when gamepad thumbstick is …*) and value blocks (button, D-pad, thumbstick, trigger pressure). See [Gamepad blocks](/docs/Application/BlockBuilder/Blocks/Gamepad).

## Profiles for publishing

A profile can be published to the catalog with only a gamepad and no dashboard controls: the requirement is "a dashboard controller or the gamepad".
