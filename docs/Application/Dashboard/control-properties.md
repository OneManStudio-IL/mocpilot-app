---
id: ControlProperties
title: Control properties
description: "Change a control's size, colour, icon, behaviour and theme in its properties."
---

import Screenshot from '@site/src/components/Screenshot';

# Control properties

Tap (click) a control in edit mode to open its properties.

- **Phone and tablet**: a panel over the dashboard; tap outside to close it.
- **Computer**: a side panel; you can keep working on the dashboard while it is open.

<Screenshot name="controller-properties" alt="Control properties panel with Style and Settings tabs" width={900} />

The header shows the control's name (for example **JOY1**), the trash button, the duplicate menu and **OK**.

## Style tab

- **Size**: S, M or L. See [sizes](/docs/Application/Dashboard/ArrangingControls#sizes).
- **Accent color**: the main colour of the control.
- **Icon**: a picture on the control (buttons, switches, monitors), chosen from more than 260 icons.
- Theme options, depending on the theme, for example **Colored carbon**, **Colored bezels** and **Show race lines** in Racing, **Indicator segments count** in Building machinery, **Display values** in Aura.
- **Change theme**: switch the control to another theme you own with the same control type.

## Settings tab

Common settings:

- **Lock the controller**: a locked control cannot be moved or deleted.
- **Interactivity**: a non-interactive control does not register presses.

Settings of each type:

| Control | Settings |
|---|---|
| Joystick | **Axes type**: Both axes (X, Y), Only horizontal (X), Only vertical (Y) |
| Slider, Ver. slider | **Return to zero**, **Negative values**, **Step value** |
| Step switch, Ver. step switch | **Steps count** (1–100), **Negative values**, **Enable reset** |
| Monitor | **Text layout**, **Text overflow**, **Maximum lines**, **Scroll direction**, **Scroll speed**, **Show scrollbar**, **Interactive scrolling**, **Text alignment**, **Text scale** |
| Tilt monitor | **Invert pitching**, **Invert rolling** |
| Steering wheel | **Steering wheel angle**, **Sound effects** |
| Pedals | **Engine inertia**, **Reverse speed**, **Sound effects** |

Number settings have a **Reset** button that restores the default.

## Change properties from the program

In Logic Blocks, blocks can change a control while the program runs: set its colour, switch its interactivity, show values on monitors. See [Dashboard controller blocks](/docs/Application/BlockBuilder/Blocks/DashboardControllers).
