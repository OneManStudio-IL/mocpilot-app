---
id: ConnectingHubs
title: Add and connect a hub
description: "Add a hub to a profile slot, connect it, rename it and watch its sensors in the hub monitor."
---

import Screenshot from '@site/src/components/Screenshot';

# Add and connect a hub

Hubs are added to a profile once. After that, MOCPilot connects to them when you open the profile.

## Add a hub

1. Open the profile and tap **My Hubs** (⇧⌘H / Ctrl+Shift+H). The page **My Bluetooth Hubs** shows the slots.
2. In a free slot tap **Add a new Hub**.
3. Choose your hub in the list. The filter at the top shows **All**, **LEGO**, **SBrick**, **BuWizz** or **Mould King**. Tap **Add**.
4. Follow the instructions: **Press the button on the Hub** and **Wait for the search to find the Hub**. Use **Start scan** to search again.

<Screenshot name="add-hub" alt="Choosing a hub to add" width={900} />

When the hub is found it is connected and stays in the slot.

<Screenshot name="my-hubs" alt="My Bluetooth Hubs with connected hubs and free slots" width={900} />

## The slot menu

Tap the menu of a hub slot:

- **Connect** / **Disconnect**;
- **Rename hub**: give the hub a name stored in the hub itself (connected hubs that support it);
- **Update firmware**: when a newer firmware is available; see [Firmware updating](/docs/Application/Hubs/FirmwareUpdating);
- **Recover hub firmware**: when the hub is in recovery mode; see [Firmware recovery](/docs/Application/Hubs/RecoveryHubFirmware);
- **Select config**: Technic Move configurations; see [Technic Move Hub configurations](/docs/Application/Hubs/TechnicMoveHubConfigurations);
- **Select channel**: Mould King control channel;
- **Delete Hub**: removes the hub from the profile.

The **My Hubs** button in the editor shows how many hubs are connected.

## Hub monitor

Open a connected hub to see its **hub monitor**:

- hub: model, name, firmware, battery, charging, board temperature, configuration, orientation, tilt (pitch, roll, yaw), accelerometer;
- each port: the device plugged in and its speed, position, relative position, colour, reflected and ambient light or distance.

Use it to check which motor is on which port and which way it turns before writing the program.

## Connection tips

- Switch the hub on just before connecting; many hubs switch off after a few minutes without a connection.
- Keep the phone close to the hub; walls and metal reduce the range.
- One hub can be connected to one device at a time. Close other apps that use the hub (LEGO® apps, other remotes).
- **Bluetooth is Off**: turn Bluetooth on and allow MOCPilot to use it in the system settings.
- **The Hub not found**: press the hub button again, restart the scan, change the batteries.
- **Mould King** hubs do not "connect"; MOCPilot sends commands by Bluetooth advertising. If the hub does not react, use **Connect again** and check the channel.

More in [Troubleshooting](/docs/Help/Troubleshooting#hubs).
