---
id: HubsAndPorts
title: Hub block and ports
description: "The Quick Links Hub block, choosing ports, port checks and the port-in-use question."
---

import Screenshot from '@site/src/components/Screenshot';

# Hub block and ports

The **Hub** output ends a row after an operation. There is one Hub block per hub in **My Hubs**; add hubs there first ("Add hubs in My Hubs or indicators on the dashboard: they appear here").

## What the Hub block shows

- the hub's name and a **connection dot** (connected or not);
- the **ports**: letter chips A, B, C, D (BuWizz and SBrick: 1–4; Mould King 6.0: A–F);
- a subtitle: "ports A, B", "choose ports", "whole hub" (after a whole-hub operation) or "drive, steering, lights" (Technic Move).

## Choose ports

Tap a port chip to use it; tap again to free it. One row can drive **several ports** at once, for example two drive motors on A and B.

Need two motors in opposite directions? Make two rows from the same input, one with **Invert**.

## One port, one row

A port belongs to one row. If you choose a port that another row already uses, MOCPilot asks:

> **Port is already used** — On "Technic Hub" port A is used in row 2 (Motor). Use it in this row? The other row loses this port and stops driving it.

**Use in this row** moves the port; **Cancel** keeps it where it was. A port used by two rows (for example in an old file) is marked as a problem: "Port A is also used in row 2".

<Screenshot name="port-in-use" alt="Port is already used dialog" width={700} />

## Port checks

MOCPilot knows what is plugged into each port of a connected hub and checks that the operation fits:

| Problem | Meaning |
|---|---|
| "Port A: the motor has no encoder" | Servo or Run for degrees need a motor with an encoder |
| "Port A: the motor has no absolute position (angular motors only)" | Go to position needs an angular motor |
| "Port A has a sensor, not a motor" | the device on the port is a sensor |
| "Port A takes simple speed commands only: no position control" | the hub or port cannot control positions (for example SBrick) |

Operations that a hub cannot do are not offered for it; if you change the hub, the row reports which operation does not fit, for example "Brake: Technic Move only".

## Technic Move Hub

The Technic Move Hub (in the LEGO® Technic remote-controlled cars) is driven by function, not by port: its Hub block shows **drive, steering, lights**. Use **Motor** for driving, **Servo** for steering, **Light** for the lights, and **Brake**, **Boost** and **Power pulse** for the special functions. Each function can be used by one row only ("Row 2 already drives this Technic Move").

To load a car configuration into the hub (Porsche, Lamborghini, Batmobile), use **My Hubs → Select config**. See [Technic Move Hub configurations](/docs/Application/Hubs/TechnicMoveHubConfigurations).

## Mould King

Mould King hubs only listen to commands, so they have no inputs and no connection feedback. Use the **Channel** operation to switch the hub's control channel.
