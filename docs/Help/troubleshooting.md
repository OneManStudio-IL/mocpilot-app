---
id: Troubleshooting
title: Troubleshooting
description: "Solutions for common problems with hubs, motors, the dashboard, sync and purchases."
---

# Troubleshooting

## Hubs

**The hub is not found**
- Turn Bluetooth on and allow MOCPilot to use Bluetooth (and on Android, location/nearby devices) in the system settings.
- Switch the hub on and press its button right before scanning; tap **Start scan** again.
- Make sure the hub is not connected to another phone or app (LEGO® apps, another remote). Close them.
- Replace or charge the batteries.
- Robot Inventor: not available on iPhone and iPad.

**The hub disconnects**
- Keep the device closer; walls, metal and other 2.4 GHz devices reduce the range.
- Low batteries cause disconnects under load: charge or replace them.
- Some hubs switch off after a while without commands; reconnect in **My Hubs**.

**"Firmware update required"**
- MOCPilot needs a supported firmware for Technic, Technic Move, BOOST and City hubs. Follow [Firmware updating](/docs/Application/Hubs/FirmwareUpdating). If an update failed, see [Firmware recovery](/docs/Application/Hubs/RecoveryHubFirmware).

**Mould King does not react**
- Mould King only receives commands. Use **Connect again**, check the channel (**Select channel**), and use only one Mould King type per profile.

## Motors and the program

**The motor does not move**
- Is the program running (**Play**)? Is the hub connected?
- Is the motor on the port the program uses? Check the [hub monitor](/docs/Application/Hubs/ConnectingHubs#hub-monitor).
- Quick Links: open **Problems**; follow the live values along the row. See [Running and fixing problems](/docs/Application/Links/Problems).
- Logic Blocks: does the script start with an event block? Use **Monitor** to watch values.

**The motor turns the wrong way**
- Quick Links: add **Invert** to the row. Logic Blocks: multiply the value by −1.

**The motor creeps or hums when the joystick is released**
- Quick Links: add **Dead zone**. Logic Blocks: ignore small values with *is in between*.

**Servo steering is off-centre or hits the end**
- Quick Links: Servo in **Auto** calibration, or **Manual** with **Set as zero** and **Centre**; reduce the **Angle**. Logic Blocks: *Calibrate steering rack*.
- Servo, Run for degrees and Go to position need motors with an encoder; simple motors and SBrick ports take speed only.

**Motors keep running after Stop**
- Logic Blocks: turn on **Stop hub ports when program stops** in Editor Settings.

## Dashboard

**I can't move or delete a control**
- It is locked: **Unlock** it in its menu. A control used by the program cannot be deleted until its rows or blocks are removed.

**"There is no available space on the dashboard"**
- Move or shrink other controls, or choose a smaller size.

**A theme or control is locked**
- You don't own it: buy it or get [MocPilot Pro](/docs/Application/Account/Pro), or switch it to the Basic theme with **Change theme**.

## Profiles and sync

**My profiles are not on my other device**
- Sign in with the same account on both devices and turn on **Account → Cloud sync → Profiles**. Check the internet connection.

**"Profile is not compatible"**
- The profile was made with a newer version of MOCPilot. Update the app.

**I lost my profiles after reinstalling**
- In guest mode profiles are only on the device and are lost with the app. With an account and sync on, sign in again and they come back.

## Purchases

**A purchase is missing**
- Sign in with the account you bought with, then **Account → Purchases → Restore**.
- "Subscription linked to another account": the store account's Pro belongs to another MOCPilot account.

## Still stuck?

Use **Help → Ask a question** or **Report a bug** in the app (computer: **Help** menu). The reply arrives in **Notifications** and by email.
