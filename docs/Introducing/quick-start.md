---
id: QuickStart
title: Quick start
description: "Install MOCPilot, sign in, create your first profile and drive a model in a few minutes."
---

import Screenshot from '@site/src/components/Screenshot';

# Quick start

This guide takes you from installing the app to driving your first model. You need a supported hub with a motor; see [supported devices](/docs/Introducing/SupportedDevices).

## 1. Install the app

MOCPilot is available on the App Store (iPhone, iPad, Mac), Google Play (Android) and the Microsoft Store (Windows). Links are on [mocpilot.com](https://mocpilot.com).

## 2. Sign in or continue without an account

On the first start the app asks you to sign in. You can sign in with email or login and password, with Google, or with Apple ID, or create a new account.

We recommend an account:

- your profiles and settings are stored on the server and synced across your devices;
- you can restore your data if you change or lose a device;
- purchases and MocPilot Pro work on all your devices.

**Continue without an account** also works, but then everything stays only on this device and is lost if the app is removed. You can sign in later in **Settings → Account**. See [Account](/docs/Application/Account/UserAccount).

## 3. Find your way around

- On a **phone**, the bottom bar has **Profiles**, **Settings** and **Help**.
- On a **tablet**, the same sections and **Account** are in the side bar.
- On a **computer**, use the top bar: menus on the left, Account, Settings and Notifications on the right.

See [Phone, tablet and desktop](/docs/Introducing/Layouts).

## 4. Create a profile

1. On the profiles page, tap **+** (phone) or choose **New Profile** (tablet and computer, or File → New Profile).
2. Choose the **program type**:
   - **Quick Links** if you want to drive a model with no code. Best for a first try.
   - **Logic Blocks** if you want events, loops, conditions and sensors.
3. Enter a **name**, optionally add a picture.
4. Tap **Create and start build** (phone) or **Create**.

<Screenshot name="create-profile-tiles" alt="New Profile page with the Logic Blocks and Quick Links tiles" width={900} />

The profile opens in the editor. More in [Create a profile](/docs/Application/Profiles/CreateProfile).

:::tip Want a ready model?
Open the **Profile Catalog** (**Search Online** on the profiles page) and install an official profile for your set. See [Catalog and publishing](/docs/Application/Profiles/Catalog).
:::

## 5. Add your hub

1. In the editor, open **My Hubs**.
2. Tap **Add a new Hub** in a free slot and choose your hub model, then **Add**.
3. Switch the hub on, press its button and wait until MOCPilot finds it.

<Screenshot name="my-hubs" alt="My Bluetooth Hubs page with hub slots" width={900} />

If the app asks for a firmware update, follow [Firmware updating](/docs/Application/Hubs/FirmwareUpdating). More in [Add and connect a hub](/docs/Application/Hubs/ConnectingHubs).

## 6. Place controls on the dashboard

1. Open **Dashboard**.
2. Tap **+** (Add Controller), choose a **Joystick** and tap **Add to dashboard**.
3. Drag it where you like. Tap it to change its size, colour or behaviour.

See [Add and arrange controls](/docs/Application/Dashboard/ArrangingControls).

## 7. Connect the control to a motor

**Quick Links:** drag the joystick input (for example *JOY1 Y axis*) from **Inputs** into the empty row, add the **Motor** operation and the **Hub** output from **Outputs**, then tap the port your motor is plugged into. The row is ready when it has no red frame. See [Quick Links](/docs/Application/Links/LinksIntroducing).

**Logic Blocks:** put a *when program started* block, a *forever* loop and a *set motor speed* block that takes the joystick value. See [Logic Blocks](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing) and [examples](/docs/Application/BlockBuilder/Examples).

## 8. Press Play

Press **Play** (▶). On a phone the dashboard opens full screen in landscape. Move the joystick: the motor turns. Press **Stop** to go back to editing.

That's it. Next:

- Learn all [control types](/docs/Application/Dashboard/ControlTypes).
- Make the dashboard beautiful with [themes](/docs/Application/Themes/ThemesOverview).
- Connect a [gamepad](/docs/Application/Dashboard/Gamepad).
- If something does not work, see [Troubleshooting](/docs/Help/Troubleshooting).
