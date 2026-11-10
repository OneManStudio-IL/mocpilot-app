---
id: PlayMode
title: Driving a model (Play)
description: "Run a profile, drive the model, stop it and what happens on stop or disconnect."
---

import Screenshot from '@site/src/components/Screenshot';

# Driving a model (Play)

A profile has two modes:

- **Edit**: you change hubs, the dashboard and the program.
- **Play**: the program runs and the dashboard controls drive the model.

## Start and stop

Press **Play** (▶) in the editor or on the dashboard (computer: **Program → Run**, ⌘R / Ctrl+R). Press **Stop** (■) to return to editing (⌘. / Ctrl+.).

<Screenshot name="dashboard-run" alt="Dashboard in Play mode" width={900} />

In Play mode:

- the dashboard grid dots, the add and settings buttons are hidden;
- controls react to touch and the gamepad;
- monitors and indicators show live values;
- in Quick Links, the editor shows live values between the blocks of every row and cannot be edited;
- in Logic Blocks, the program stays editable while it runs, so you can tune it live.

## On a phone or tablet

Opening a profile switches a phone to landscape and full screen, so the dashboard uses the whole screen. Turn on **Keep screen on** in Settings so the screen does not go dark while you drive. See [Settings](/docs/Application/Account/Settings).

## Before you press Play

- Switch the hubs on and check that they are connected in **My Hubs** (the badge on the button shows how many are connected).
- In Quick Links, check the **Problems** button: a red "!" means some rows cannot run. See [Running and fixing problems](/docs/Application/Links/Problems).
- Put the model on a stand or keep it away from the table edge for the first try.

## When the program stops

- **Quick Links** stops all motors used by the rows and resets outputs (LED matrix cleared, port colours and sensor lights off).
- **Logic Blocks** stops the hub ports if **Stop hub ports when program stops** is on in Editor Settings.
- If a hub disconnects during Play, its motors stop. In Quick Links a "Connected" hub input can show this on the dashboard.
- With a remote controller (web editor or another device), losing the connection for about 4 seconds stops the profile and all motors.

## Drive from another device

With [MocPilot Pro](/docs/Application/Account/Pro) you can run the profile on one device (which connects the hubs) and control it from another one or from the web editor. See [Web editor](/docs/Introducing/WebEditor#run-a-profile).
