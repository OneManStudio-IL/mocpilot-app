---
id: HubFunctions
title: Hub-specific functions
description: "Special functions of Technic Move, BuWizz, SBrick, Mould King, Robot Inventor and other hubs in both editors."
---

# Hub-specific functions

All hubs with ports can run motors and lights. Some hubs can do more. In **Quick Links** these functions appear in the palette only when such a hub is in the profile; in **Logic Blocks** they are hub-specific blocks.

## Motors with encoders (LEGO® Technic, BOOST, Robot Inventor, BuWizz 3.0)

| Function | Quick Links | Logic Blocks |
|---|---|---|
| Speed control | Motor | Set motor speed, Start motor at speed |
| Steering servo with calibration | Servo (Manual / Auto) | Go to relative position, Calibrate steering rack |
| Turn by an angle | Run for degrees | Run for |
| Absolute position (angular motors) | Go to position | Go to position |
| Behaviour at stop: coast, brake, hold | Motor → At stop | Set motor behavior at stop |
| Hub acceleration presets | Motor → Hub acceleration | Set acceleration / deceleration |
| Speed, position, power, current as input | Hub input | Motor reporter blocks |

## Technic Move Hub

The hub of the LEGO® Technic remote-controlled cars (Porsche GT4 e-Performance, Lamborghini Revuelto, Batmobile™ Tumbler).

- Drive, steering and lights work by function rather than by port.
- **Steering** calibrates its own rack.
- **Brake**, **Boost** (power mode) and **Power pulse** (not supported by every firmware).
- **Hub configurations**: load a car profile into the hub in **My Hubs → Select config**. See [Technic Move Hub configurations](/docs/Application/Hubs/TechnicMoveHubConfigurations).
- Light blocks: *Technic Move light turn to*.

## BuWizz 2.0

- **Power mode**: Slow, Normal, Fast, Ludicrous. Quick Links: the **Power mode** operation; Logic Blocks: *set power mode*.
- Current power mode and **output voltage** as inputs.

## BuWizz 3.0 Pro

- **Port colour** LEDs: from a list or RGB.
- Motor current as input, relative positions.

## SBrick and SBrick Plus

- Motors and lights with speed control.
- No position control: Servo, Run for degrees and Go to position are not available.

## Mould King 4.0 and 6.0

- Commands only: no sensors, no buttons, no connection feedback.
- **Control channel** A, B or C: Quick Links **Channel** operation; Logic Blocks *set control channel*; or **Select channel** in My Hubs.
- Up to 3 Mould King 4.0 or 1 Mould King 6.0 per profile, one Mould King type per profile.

## Robot Inventor (LEGO® Large Hub)

- **LED matrix**: level bar, number or image (Quick Links), text and pixels (Logic Blocks).
- **Distance sensor lights** (the sensor's "eyes").
- **Stall detection** and motor power.
- Classic Bluetooth: not available on iPhone and iPad.

## LEGO® hubs with a colour LED

Technic, City, BOOST, Technic Move, WeDo 2.0, Robot Inventor and the remote: the hub LED colour can be set from a list or RGB (Quick Links **Hub LED**, Logic Blocks *set LED color*).

## LEGO® Powered Up Remote Control

Its buttons are inputs: drive a model with the physical remote through MOCPilot (Quick Links **Hub** input → Button; Logic Blocks hub button events).

## Built-in sensors

Battery level and voltage, board temperature, tilt (pitch, roll, yaw), acceleration and orientation are available for hubs that have them. Set **Hub orientation** (Quick Links) or *set tilt orientation* (Logic Blocks) to match how the hub is mounted.
