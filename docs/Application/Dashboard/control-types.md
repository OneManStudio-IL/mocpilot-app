---
id: ControlTypes
title: Control types
description: "Joystick, directional pad, sliders, buttons, switches, step switches, monitors, steering wheel and pedals."
---

# Control types

Every [theme](/docs/Application/Themes/ThemesOverview) draws the same set of control types in its own style. The free **Basic** theme has the first nine types; paid themes add three monitors; steering wheels and pedals are special products.

| Control | Name on the dashboard | Gives the program | Available in |
|---|---|---|---|
| Joystick | JOY | X and Y axes | all themes |
| Directional Pad | DPAD | up / down / left / right buttons | all themes |
| Slider | SLDR | a value | all themes |
| Ver. slider | VSLDR | a value | all themes |
| Button | BTN | pressed / released | all themes |
| Switch | SWCH | on / off | all themes |
| Step switch | STPR | a step number | all themes |
| Ver. step switch | VSTPR | a step number | all themes |
| Monitor | MNTR | shows text or a value | all themes |
| Battery level | MNTBT | shows a level | paid themes |
| Speedometer | MNTSP | shows a speed | paid themes |
| Tilt monitor | MNTLT | shows pitch and roll | paid themes |
| Steering wheel | SW | a steering value | special product |
| Pedals | PDL | throttle and brake | special product |

## Joystick

A stick that springs back to the centre. It gives an **X** (left/right) and a **Y** (up/down) value; the centre is zero.

- **Axes type**: **Both axes (X, Y)**, **Only horizontal (X)** or **Only vertical (Y)**. A one-axis joystick is easier to use for throttle or steering alone.
- Typical use: Y for driving, X for steering; or one joystick per track of a tank.

## Directional Pad

Four buttons: up, down, left, right. Each one is pressed or released. In Quick Links a D-pad axis gives −1, 0 or +1 (**Up / down** or **Left / right**), handy for step-by-step movements like a crane hook.

## Slider and Ver. slider

A handle that moves along a track: horizontal or vertical.

- **Return to zero**: the handle springs back when released (like a throttle), or stays where you leave it (like a speed setting for a train).
- **Negative values**: the zero is in the middle, so the slider gives negative and positive values (forward and reverse).
- **Step value**: the slider moves in steps.

## Button

Pressed while you hold it, released when you let go. Use it for a horn, a short movement, or with a **Toggle** block in Quick Links to make it switch something on and off.

## Switch

Stays on or off: tap to change. Use it for lights, modes, a winch lock.

## Step switch and Ver. step switch

A **−** / **+** control that counts steps, like a gearbox or train speed levels.

- **Steps count**: 1 to 100 (default 10).
- **Negative values**: allows steps below zero (reverse levels).
- **Enable reset**: tapping the value returns it to zero.

## Monitor

Shows text or a number from the program: speed, battery, a mode name, a sensor value.

- **Text layout** single or multi-line, **Text overflow** (Clip, Wrap, Marquee, Scroll), **Maximum lines**, scrolling options, **Text alignment** and **Text scale**.

## Battery level, Speedometer, Tilt monitor

Graphic indicators in the paid themes. The program sets their value: a hub's battery, a motor's speed, the tilt of a hub. **Tilt monitor** has **Invert pitching** and **Invert rolling**. See [Indicators and monitors](/docs/Application/Dashboard/Indicators).

## Steering wheel

A wheel you turn with a finger, in three styles: **Supercar**, **Heavy truck** and **Off-road vehicle**.

- **Steering wheel angle** (20–120°): how far the wheel turns on screen; it does not change the value sent to the program.
- **Sound effects**.

## Pedals

Accelerator and brake pedals, in the same three styles.

- **Engine inertia** (0–200): how slowly the speed builds up and fades, like a heavy vehicle.
- **Reverse speed** (10–100): how fast the model reverses.
- **Sound effects**.

Steering wheel and pedals are special products: buy them separately or get them with [MocPilot Pro](/docs/Application/Account/Pro).

## Interactivity

Every interactive control has **Interactivity** (on by default). A non-interactive control does not react to touches; the program can switch interactivity on and off, for example to block the throttle until a startup check is done.
