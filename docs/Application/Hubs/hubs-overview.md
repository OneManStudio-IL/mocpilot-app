---
id: HubsOverview
title: Hubs
description: "Hubs in MOCPilot profiles: supported hubs, hub slots and what each hub can do."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Hubs

A **hub** is the Bluetooth brick of your model: motors, lights and sensors plug into its ports, and MOCPilot talks to it over Bluetooth.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '16px', alignItems: 'end', margin: '16px 0'}}>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/technic_hub_p.webp')} alt="Technic Hub" style={{maxWidth: 110}} /><div>Technic Hub</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/technic_move_hub_p.webp')} alt="Technic Move Hub" style={{maxWidth: 110}} /><div>Technic Move</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/city_hub_p.webp')} alt="City Hub" style={{maxWidth: 110}} /><div>City Hub</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/buwizz3_hub_p.webp')} alt="BuWizz 3.0 Pro" style={{maxWidth: 110}} /><div>BuWizz 3.0</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/sbrick_hub_p.webp')} alt="SBrick" style={{maxWidth: 110}} /><div>SBrick</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/mould_king_4_p.webp')} alt="Mould King" style={{maxWidth: 110}} /><div>Mould King</div></div>
</div>

## Supported hubs

| Hub | Notes |
|---|---|
| LEGO® Technic™ Hub (88012) | 4 ports, tilt and acceleration sensors |
| LEGO® Technic™ Move Hub | in LEGO Technic remote-controlled cars; drive, steering, lights; [configurations](/docs/Application/Hubs/TechnicMoveHubConfigurations) |
| LEGO® Hub / City Hub (88009) | 2 ports, trains and City sets |
| LEGO® Move Hub / BOOST (88006) | 2 built-in motors + 2 ports |
| LEGO® Remote Control (88010) | its buttons are inputs |
| LEGO® WeDo 2.0 Smart Hub | 2 ports |
| LEGO® Large Hub / Robot Inventor (88016) | 6 ports, light matrix; not on iPhone and iPad |
| BuWizz 2.0 | power modes |
| BuWizz 3.0 Pro | port colour LEDs |
| SBrick, SBrick Plus | speed control, no positions |
| Mould King 4.0, 6.0 | commands only, control channels |

Full list with motors and sensors: [Supported devices](/docs/Introducing/SupportedDevices).

## Hub slots

Each profile has **5 hub slots**:

- **2 slots are free**;
- **3 more** are unlocked with **Unlock Slot** (an *Additional hub slot* purchase, one per slot) or all at once with [MocPilot Pro](/docs/Application/Account/Pro).

Purchased slots belong to your account and work in all your profiles.

Limits for Mould King: only one Mould King type per profile, up to 3 Mould King 4.0 or 1 Mould King 6.0 (they share the phone's Bluetooth advertising transmitter).

## Hubs in the program

- In **Quick Links**, every hub of the profile appears in the palette as a **Hub** output (and a **Hub** input for its buttons and sensors). Operations a hub cannot do are not shown for it. See [Hub block and ports](/docs/Application/Links/HubsAndPorts).
- In **Logic Blocks**, motor, light and sensor blocks take the hub slot and port. See [Motors](/docs/Application/BlockBuilder/Blocks/Motors).

## Read more

- [Add and connect a hub](/docs/Application/Hubs/ConnectingHubs)
- [Hub-specific functions](/docs/Application/Hubs/HubFunctions)
- [Firmware updating](/docs/Application/Hubs/FirmwareUpdating) and [firmware recovery](/docs/Application/Hubs/RecoveryHubFirmware)
