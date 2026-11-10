---
id: SupportedDevices
title: Supported hubs, motors and sensors
description: "Hubs, motors and sensors that work with MOCPilot."
---

import { SupportedHubsTable, SupportedMotorsTable, SupportedSensorsTable } from '@site/src/components/SupportedDevices';

# Supported devices

MOCPilot works with these hubs, motors and sensors. Every hub works with both program editors, [Quick Links](/docs/Application/Links/LinksIntroducing) and [Logic Blocks](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing).

## Hubs

<SupportedHubsTable />

Notes:

- A profile has 5 hub slots: 2 are free, 3 more come with an additional hub slot purchase or [MocPilot Pro](/docs/Application/Account/Pro).
- **Mould King** hubs only receive commands (no sensors, no feedback). Only one Mould King type can be used in a profile: up to 3 Mould King 4.0 hubs or 1 Mould King 6.0.
- The **Robot Inventor** hub (LEGO® Large Hub) uses classic Bluetooth and is not available on iPhone and iPad.
- Firmware updates and recovery are available for Technic Hub, Technic Move Hub, BOOST Move Hub and City Hub. See [Firmware updating](/docs/Application/Hubs/FirmwareUpdating).
- What each hub can do beyond motors and lights is described in [Hub-specific functions](/docs/Application/Hubs/HubFunctions).

## Motors

<SupportedMotorsTable />

Motors with an encoder (angular motors, Technic L and XL) report speed and position, so they can be used as servos, turn by degrees and go to positions. Simple motors (train motor, simple medium linear motor) take speed only.

## Sensors and lights

<SupportedSensorsTable />

The hubs' built-in sensors (battery, tilt, acceleration, temperature) and the sensors of your phone or tablet can be used too. See [Phone sensors](/docs/Application/Dashboard/PhoneSensors).
