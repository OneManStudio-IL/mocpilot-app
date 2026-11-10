---
id: CreateProfile
title: Create a profile
description: "Create a profile and choose between the Logic Blocks and Quick Links program editors."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# Create a profile

1. Open the profile list.
   - Phone: tap **+** → **New Profile**.
   - Tablet: **New Profile** in the header.
   - Computer: **File → New Profile** (⌘N / Ctrl+N).
2. Choose the **program type** (see below).
3. Fill in the profile details.
4. Tap **Create and start build** (phone) or **Create** (tablet and computer). The profile opens in the editor.

<Screenshot name="create-profile-tiles" alt="New Profile page" width={900} />

## Choose the program type

The program type decides which editor the profile uses. **It cannot be changed later.** If you want to try the other editor, create a second profile.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', margin: '16px 0'}}>
  <div>
    <img src={useBaseUrl('/img/illustrations/program_links.svg')} alt="Quick Links" style={{width: '100%', maxWidth: 320}} />
    <h3>Quick Links</h3>
    <p><em>Controlz-like · no code.</em> Connect dashboard controls to hub motors and lights row by row: input, processing, operation, hub. Ready in minutes.</p>
  </div>
  <div>
    <img src={useBaseUrl('/img/illustrations/program_blocks.svg')} alt="Logic Blocks" style={{width: '100%', maxWidth: 320}} />
    <h3>Logic Blocks</h3>
    <p><em>Robots · sensors · algorithms.</em> Program the model with blocks: events, loops, conditions, variables and sensor data. For robots and automation.</p>
  </div>
</div>

| | Quick Links | Logic Blocks |
|---|---|---|
| How you build | Rows: input → processing → operation → hub | Blocks snapped into scripts |
| Learning time | Minutes | Longer; more possibilities |
| Best for | Cars, trucks, trains, cranes: "this control moves that motor" | Robots, automatic sequences, sensor logic, games |
| Logic (if, loops, variables) | No (thresholds and toggles only) | Yes |
| Sensors | Hub sensors as inputs; values to indicators | All hub and phone sensors, any calculation |
| Smooth start, limits, dead zone | Ready blocks | Built with blocks |
| Servo steering with calibration | Ready block | Blocks |
| Gamepad | Yes | Yes |
| Several hubs | Yes | Yes |

**Not sure?** Start with Quick Links. If you later need logic, make a Logic Blocks profile for the model.

If you try to create a profile without choosing, the tiles are highlighted. Each tile has a **Documentation ↗** link to this documentation.

## Profile details

- **Picture**: tap (long-press on touch screens) the picture area to choose an image. Move the image vertically to pick the visible part. **Update image** and **Remove** change it later.
- **Name**: required and unique; "Profile with name … already exists" means you already have one with this name.
- **Block level** (Logic Blocks only): **Beginner**, **Advanced** or **Guru**. Controls which blocks are shown in the palette for this profile. You can change it later in Editor Settings. See [Working in the editor](/docs/Application/BlockBuilder/Editor#block-levels).
- **Hashtags**: describe the profile and help search. Hashtags come from a common list; they load when you are online.
- **Favorite**: favorite profiles are shown first in the list.

All details except the program type can be changed later in **Edit profile**.

## Next steps

1. Add hubs: [Add and connect a hub](/docs/Application/Hubs/ConnectingHubs).
2. Place controls: [Dashboard](/docs/Application/Dashboard/DashboardOverview).
3. Write the program: [Quick Links](/docs/Application/Links/LinksIntroducing) or [Logic Blocks](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing).

:::tip AI builder
With [MocPilot Pro](/docs/Application/Account/Pro) you can describe your model in words or by voice and let the AI builder create the hubs, dashboard and block program. See [AI builder](/docs/Application/BlockBuilder/Editor#ai-builder).
:::
