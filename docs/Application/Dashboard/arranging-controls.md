---
id: ArrangingControls
title: Add and arrange controls
description: "Add controls from the palette, move them, change their size, duplicate, lock and delete them."
---

import Screenshot from '@site/src/components/Screenshot';

# Add and arrange controls

## Add a control

1. On the dashboard tap **+** (**Add Controller**). On a computer it opens as a window.
2. Choose a tab:
   - **Controls**: the controls of every [theme](/docs/Application/Themes/ThemesOverview), grouped as Joysticks, Sliders, Buttons and switches, Monitors;
   - **Special**: steering wheels and pedals;
   - **Saved**: designs you saved (see [Create controls from a theme](/docs/Application/Themes/CreatingControls)).
3. Select a control. On the right you can **Configure** it before adding: **Style** and **Settings** tabs, size.
4. Tap **Add to dashboard**. On a computer you can add several controls in a row.

<Screenshot name="controller-palette" alt="Add Controller palette" width={900} />

The control is placed in the first free area and gets a **NEW** badge. If there is no room, MOCPilot says so; make space or choose a smaller size.

Controls of themes you don't own show **Purchase** and **All with MocPilot Pro** instead of Add. See [Get, buy and update themes](/docs/Application/Themes/GettingThemes).

## Move

Press and drag a control in edit mode. When you release it, it snaps to the nearest grid cell. If it would overlap another control, it jumps back.

## Sizes

Every control has three sizes: **S**, **M** and **L**. Change it with **Size** in the control's properties. Sizes in grid cells (width × height):

| Control | S | M | L |
|---|---|---|---|
| Joystick, Directional Pad | 7×7 | 10×10 | 13×13 |
| Slider | 10×3 | 14×4 | 18×5 |
| Ver. slider | 3×10 | 4×14 | 5×18 |
| Button, Switch | 3×3 | 4×4 | 5×5 |
| Step switch | 8×3 | 12×4 | 16×5 |
| Ver. step switch | 3×8 | 4×12 | 5×16 |
| Monitor | 4×2 | 6×2 | 8×3 |
| Battery level, Speedometer | 6×6 | 8×8 | 10×10 |
| Tilt monitor | 8×4 | 12×6 | 16×8 |
| Steering wheel | 8×8 | 12×12 | 16×16 |
| Pedals | 11×8 | 16×12 | 21×16 |

The whole field is 40 × 20 cells. If a larger size does not fit, move the neighbours first.

## Select and edit

Tap (click) a control to select it and open its **properties**. See [Control properties](/docs/Application/Dashboard/ControlProperties).

## Context menu

Long-press (touch) or right-click (computer) a control:

- **Lock** / **Unlock**
- **Properties**
- **Change theme**: switch the control to another theme you own that has the same control type
- **Duplicate**: a copy with the same properties
- **Duplicate (Type Only)**: a new control of the same type with default properties
- **Delete**

Long-press or right-click an empty part of the field:

- **Lock all** / **Unlock all**
- **Delete N controller(s)**: deletes all unlocked controls

On a computer, with the properties panel open: **Esc** closes it, **Delete** / **Backspace** deletes the control, **⌘D / Ctrl+D** duplicates it.

## Lock controls

A **locked** control cannot be moved or deleted, so you don't knock it out of place while driving or editing. A lock icon is shown on it. Lock one control from its menu or with **Lock the controller** in its settings, or lock everything with **Lock all**.

## Control names

Each control has a short name shown on its frame in edit mode, such as **JOY1**, **SLDR2** or **BTN1**. The program refers to controls by these names: in Quick Links the input block says *JOY1*, in Logic Blocks the block has *JOY1* in its menu.

## Delete

Use **Delete** in the menu or the trash button in the properties. Locked controls cannot be deleted. A control used by the program cannot be deleted until you remove its rows or blocks.
