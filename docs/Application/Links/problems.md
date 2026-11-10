---
id: Problems
title: Running and fixing problems
description: "Problems panel, red frames, live values and common Quick Links messages."
---

import Screenshot from '@site/src/components/Screenshot';

# Running and fixing problems

## Is everything ready?

The **Problems** button in the editor's top bar shows:

- a **green check**: "All rows are ready";
- a **red "!"**: "Problems: N".

Tap it to open the problems panel (a side panel on a phone, a menu on a tablet or computer). It lists "Row N — reason"; tap an item to jump to that row. The block that causes the problem has a **red frame**. When everything is fine: "Every row that is turned on can run."

<Screenshot name="links-problems" alt="Problems panel with a row that is not ready" width={900} />

Rows with problems do not run; the other rows do.

## Common messages

| Message | What to do |
|---|---|
| Drag an input and an output (a hub or a dashboard indicator) into the row | the row is empty or has only one end |
| Add an input at the start of the row | drag a control, gamepad or hub input first |
| Add an operation before the hub: motor, servo, light | a Hub output needs an operation before it |
| Choose at least one port on the hub | tap a port chip on the Hub block |
| Choose a dashboard controller | tap the input block and pick a control |
| … does not move along this axis | the joystick is set to one axis; pick the other axis or change the joystick |
| "…" does not work with this controller | the processing or operation does not fit this input |
| Port A: the motor has no encoder | use a motor with an encoder or another operation |
| Port A has a sensor, not a motor | check what is plugged into the port |
| Port A is also used in row 2 | each port can be used by one row |
| Turn on gamepad blocks on the Gamepad page (top bar) | open **Gamepad** and turn on **Enable gamepad blocks** |
| The indicator shows the value as it is: remove the operation | an Indicator row has no operation |
| Choose a hub with a colour LED (LEGO hubs) | Hub LED works on LEGO® hubs only |
| Port colours are available on BuWizz 3 only | Port colour needs a BuWizz 3.0 Pro |
| No servo in Auto calibration mode in this program | Calibrate servos needs a Servo in Auto mode |
| This block needs a newer version of the app | the profile was made in a newer version; update MOCPilot |
| The row is turned off | turn it on in the row menu |

## Live values

While the program runs, each joint between blocks shows the value passing through it. Move a control and follow the value along the row:

- nothing changes at the input: the control or gamepad is not sending; check the channel or axis;
- the value changes but the motor does not move: check the hub connection dot and the port;
- the value is small after **Limit** or **Dead zone**: adjust their settings.

## The model does not move

1. Is the hub connected? Look at **My Hubs** and the connection dot on the Hub block.
2. Is the right port chosen? Motors are plugged in where you think?
3. Is the row turned on and without a red frame?
4. Is the program running (Play)?
5. Is the battery charged? Add a *Battery → Indicator* row to see it.

More in [Troubleshooting](/docs/Help/Troubleshooting).
