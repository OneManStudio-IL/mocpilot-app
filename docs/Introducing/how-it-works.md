---
id: HowItWorks
title: How MOCPilot works
description: "Profiles, dashboard, hubs and program — the four parts of every MOCPilot model."
---

import HowItWorks from '@site/src/components/HowItWorks';
import Screenshot from '@site/src/components/Screenshot';

# How MOCPilot works

Everything in MOCPilot is built from four parts. Once you know them, every screen makes sense.

<HowItWorks />

## 1. Profile: one model

A **profile** holds everything about one model: its hubs, its dashboard and its program. Create one profile per model, for example "Technic Buggy" or "Crane Truck".

When you create a profile you choose its **program type**, Logic Blocks or Quick Links. It cannot be changed later. See [Create a profile](/docs/Application/Profiles/CreateProfile).

## 2. Hubs: the model's electronics

**Hubs** are the Bluetooth bricks in your model with motors, lights and sensors on their ports. A profile has hub **slots**. You add the hubs of your model to the slots once, and MOCPilot connects to them when you open the profile. See [Hubs](/docs/Application/Hubs/HubsOverview).

## 3. Dashboard: your remote

The **dashboard** is the screen you drive with. You place controls on a grid: joysticks, sliders, buttons, switches, step switches, monitors, and with special products steering wheels and pedals. A control does nothing by itself; it gives values to the program. See [Dashboard](/docs/Application/Dashboard/DashboardOverview).

A gamepad can be used too, together with the dashboard or instead of it. See [Gamepad](/docs/Application/Dashboard/Gamepad).

## 4. Program: what connects them

The **program** decides what happens when you move a control: which motor turns, how fast, which light blinks, what the monitor shows.

- In **Quick Links** the program is a list of rows: *input → processing → operation → hub*. See [Quick Links](/docs/Application/Links/LinksIntroducing).
- In **Logic Blocks** the program is made of blocks: events, loops, conditions, variables and sensors. See [Logic Blocks](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing).

## 5. Play

Press **Play** (▶). The program starts, the dashboard controls become live and the model obeys. Press **Stop** to return to editing. See [Driving a model](/docs/Application/Profiles/PlayMode).

<Screenshot name="links-editor" alt="Quick Links program: dashboard controls connected to hub ports" width={900} />

## A typical session

1. Open or [create a profile](/docs/Application/Profiles/CreateProfile).
2. Add your hubs in **My Hubs** and switch them on.
3. Place controls on the **Dashboard**.
4. Connect them to motors and lights in the **program**.
5. Press **Play**, drive, adjust and repeat.

## What is stored where

- Profiles are saved on your device. With an account and cloud sync on, they are also stored on the server and appear on all your devices. See [Sync between devices](/docs/Application/Account/Sync).
- Themes and other purchases belong to your account. See [MocPilot Pro and purchases](/docs/Application/Account/Pro).
