---
id: Editor
title: Working in the editor
description: "Palette, dragging blocks, zoom, context menus, undo, Monitor, Editor Settings and the AI builder in Logic Blocks."
---

import Screenshot from '@site/src/components/Screenshot';

# Working in the editor

<Screenshot name="blocks-editor" alt="Logic Blocks editor" width={900} />

## Palette and program area

- Open or hide the palette with **View → Block Palette** (⌘P / Ctrl+P).
- Pick a category, drag a block into the program area and drop it under another block to attach it. A preview shows where it will snap.
- Drag a stack by its top block; drag a block from the middle to take it and everything below it.
- Drop blocks back on the palette to delete them.
- Variables, lists, messages and My Blocks are created with buttons in their categories (**Make a variable**, **Make a list**, **Add message**, **Make a Block**) or in **Edit → New Variable… / New List… / New Message… / New Block…**.

## Zoom and move

- Pinch (touch) or **View → Zoom In / Zoom Out / Actual Size** (⌘+ / ⌘− / ⌘0).
- Drag the empty area to move around.
- The context menu of the empty area: **Zoom +**, **Zoom -**, **Reset zoom**, **Delete N blocks**.

## Block menu

Long-press (touch) or right-click a block:

- **Edit**: change its values;
- **Duplicate**;
- **Delete block** / **Delete N blocks**;
- **About block**: opens the block's description in this documentation;
- **Export block as SVG** / **Export all blocks as SVG**: save a picture for a tutorial or forum post.

A block that is linked to a dashboard control can only be deleted after it is released from that control.

## Undo and redo

**Edit → Undo / Redo** (⌘Z / ⇧⌘Z, Ctrl+Z / Ctrl+Shift+Z) or the floating buttons.

- One drag is one step; quick edits of the same value merge into one step.
- Undo works even while the program runs.
- Creating or deleting variables, lists, messages or My Blocks is a step too; undoing it stops a running program.
- Values stored in variables and lists are not undone.
- The dashboard has its own undo history.

## Monitor

**Monitor** (⇧⌘M / Ctrl+Shift+M) shows the current values of variables and lists while the program runs. On a computer it can be opened in a separate window. Great for debugging.

## Editor Settings

- **Launch block by clicking**: clicking a block runs it, to test it alone; if the program is stopped, this also starts the program.
- **Stop hub ports when program stops**: stops all motors and lights when you press Stop. Leave it on unless you need motors to keep a state.
- **Select blocks level**: Beginner, Advanced or Guru.

## Block levels

| Level | Shows |
|---|---|
| **Beginner** | the simplest blocks; a calm palette for children and first steps |
| **Advanced** | common logic and device blocks |
| **Guru** | the complete block set |

The level is stored per profile. Blocks already in the program keep working when you lower the level.

## AI builder

With [MocPilot Pro](/docs/Application/Account/Pro), the **AI builder** (sparkle button, ⇧⌘I / Ctrl+Shift+I) builds a profile from a description in words or by voice: the hubs, the dashboard and the block program.

- Describe the model, naming the hub and the ports: "A car with a Technic Hub: the drive motor is on port A, the steering motor on port C works as a servo, the lights are on port D. Steering joystick on the left, throttle on the right, a button that switches the lights."
- Then refine it in the dialogue: "Make the steering slower", "add a stop button", "duplicate it on my gamepad".
- Every AI change can be undone with **Undo the last AI change**, and you can keep editing the blocks yourself.
- **Dictate** uses voice input (on Windows: Win+H).

### How to get a good result {#ai-builder-tips}

:::tip Say which hub you use, what is connected to each port and what it should do
A one-line request like "a car with lights" is not enough: the AI has to guess the hub, the ports and what each motor does, and the result will probably need fixing. Include:

- **The hub**: Technic Hub, City Hub, BOOST Move Hub, Robot Inventor, Technic Move Hub…
- **What is on each port**: a drive motor, a steering motor (servo), lights, a sensor.
- **What each one should do**: drive, steer with calibration, switch on and off, a speed limit.
- **How you want to control it**: joysticks, sliders, buttons, a gamepad.
:::

Example: "A crane with a Technic Hub: the rotation motor is on port A, the boom motor on port B, the hook winch on port C. A slider for rotation, up/down buttons for the boom, a joystick for the hook, the boom speed limited to 50%."

If something is still not right, say what to change in the dialogue instead of starting over.

Limits: about 30 requests a day; profiles with several hubs, pedals or a steering wheel, BuWizz and SBrick are kept but not created by the AI. The AI builder only builds and edits profiles.

## Desktop menus

| Menu | Items |
|---|---|
| File | Close Profile (⌘W) |
| Edit | Undo, Redo, New Variable…, New List…, New Message…, New Block… |
| View | Block Palette, Zoom In, Zoom Out, Actual Size |
| Program | Run (⌘R), Stop (⌘.) |
