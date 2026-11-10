---
id: WebEditor
title: Web editor
description: "Edit your MOCPilot profiles in the browser on mocpilot.com and drive the model through your phone."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Web editor on mocpilot.com

The web editor is MOCPilot running in your browser. It is the same app with the same editors, dashboard and themes, so everything in this documentation applies to it.

Browsers cannot talk to Bluetooth hubs, so the web editor is for **editing**. To drive the model, run the profile in the browser without hubs to check the logic, or use your phone as the hub connection (see below).

## Try it without an account

On [mocpilot.com](https://mocpilot.com), the **Try the editor** buttons open a demo profile, one for each editor (Logic Blocks and Quick Links). The demo needs no account and no hubs. All themes and special controls can be tried in the demo; nothing is saved.

## Edit your own profiles

1. Sign in on [mocpilot.com](https://mocpilot.com) with your MOCPilot account.
2. Open your profiles and click **Edit** on a profile.
3. Change hubs, the dashboard or the program as in the app.
4. Click **Back to the website**. The editor saves the profile, uploads it, and the change reaches the app on your devices through [sync](/docs/Application/Account/Sync).

Notes:

- You can only edit profiles of the account you are signed in with ("This profile is not in your account" otherwise).
- Your purchases and MocPilot Pro work in the browser as in the app.
- In a desktop browser the dashboard is a floating panel you can drag and resize.
- Themes are downloaded again on every visit (about 15 MB), so the first opening can take a moment.
- Import and export of `.dat` files are not available in the browser; use the app.

## Run a profile

The **Play** button in the web editor offers two ways:

- **Run in the browser**: all blocks and rows work except Bluetooth. Good for testing logic, monitors and the dashboard.
- **Run on a phone** (MocPilot Pro): the MOCPilot app on your phone connects the hubs and runs the profile; the browser page is the remote control.

### Connect your phone as the hub connection

1. In the web editor choose **Run on a phone**. The page shows a QR code and a 6-digit code (valid for 5 minutes).
2. On the phone open MOCPilot → **Settings → Connect a Remote Controller** (on a computer: the **QR** button in the top bar or **Connect to the Web Editor…**).
3. Scan the QR code or tap **Enter code** and type the 6 digits.
4. The phone shows **Remote control** with the number of connected hubs. Keep the app open: the phone connects the hubs and runs the profile, the browser only controls it.

Only the account that shows the QR code needs MocPilot Pro; the phone does not even need to be signed in. A connection lasts up to 12 hours.

:::caution Safety
If the phone loses the connection for about 4 seconds, it stops the profile and all motors. The browser shows **The phone disconnected** with a **Reconnect** button.
:::
