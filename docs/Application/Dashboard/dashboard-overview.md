---
id: DashboardOverview
title: Dashboard editor
description: "The MOCPilot dashboard: the field, the grid, the toolbar, background and undo."
---

import Screenshot from '@site/src/components/Screenshot';

# Dashboard editor

The **dashboard** is your remote control: the screen with joysticks, sliders, buttons and monitors you drive the model with. Each profile has one dashboard.

Open it with the **Dashboard** button in the editor (⌘2 / Ctrl+2 on a computer).

- **Phone and tablet**: the dashboard opens over the editor, full screen.
- **Computer**: the dashboard opens in its own **Dashboard** window, so you can keep it next to the program.
- **Web editor**: a floating panel you can drag and resize.

<Screenshot name="dashboard-edit" alt="Dashboard in edit mode with the dot grid" width={900} />

## The field and the grid

- The field always has a **2:1** shape and fits the screen, so a dashboard looks the same on a phone, a tablet and a computer.
- In edit mode a **dot grid** of 40 × 20 cells is shown. Controls snap to the grid.
- Controls cannot overlap. If a control does not fit, it goes back to where it was.

## Toolbar

| Button | What it does |
|---|---|
| ← | back to the program editor |
| Undo / Redo | undo and redo dashboard changes |
| **+** (Add Controller) | opens the controller palette; see [Add and arrange controls](/docs/Application/Dashboard/ArrangingControls) |
| ⚙ (Dashboard Settings) | background image and grid options (below) |
| ▶ / ■ | Play / Stop |

On a computer the Dashboard window also has menus: **File** (Close Profile, Open in Separate Window, Dashboard Settings…), **Edit** (Undo, Redo, Add Controller…) and **View** (Blocks ⌘1, Dashboard ⌘2).

In Play mode the grid and the editing buttons are hidden.

## Undo and redo

The dashboard has its own history, separate from the program. Every move, resize, property change, addition and deletion can be undone.

## Dashboard Settings

- **Background image**: **Select** an image for the dashboard background or **Remove** it. The image is stored in the profile.
- **Image fill mode**: Stretch, Preserve aspect fit, Preserve aspect crop, Tile, Tile vertically, Tile horizontally or Pad.
- **Image parent**: **Workarea** (only the field) or **Whole screen**.
- **Image opacity**, **Enable image blur** and **Blur value**: make the background calmer so controls stand out.
- **Hide dots**: hides the grid dots.

## Controls and the program

A control gives values; the program decides what they do. A control that is used by the program cannot be deleted until the program stops using it ("release its associated blocks from program usage"). In Quick Links, remove the rows that use it; in Logic Blocks, remove its blocks.

## Read more

- [Add and arrange controls](/docs/Application/Dashboard/ArrangingControls): adding, moving, sizes, locking
- [Control types](/docs/Application/Dashboard/ControlTypes)
- [Control properties](/docs/Application/Dashboard/ControlProperties)
- [Indicators and monitors](/docs/Application/Dashboard/Indicators)
