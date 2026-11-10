---
id: Layouts
title: Phone, tablet and desktop
description: "Where everything is in the MOCPilot phone, tablet and desktop layouts."
---

import Screenshot from '@site/src/components/Screenshot';

# Phone, tablet and desktop

MOCPilot has three layouts. The app chooses one automatically:

- **Phone**: iPhone and Android phones.
- **Tablet**: iPad and Android tablets (7 inches and larger).
- **Desktop**: Mac and Windows computers, and the [web editor](/docs/Introducing/WebEditor) in a browser.

Profiles, editors and the dashboard are the same everywhere; only the navigation differs.

## Phone

<Screenshot name="profiles-phone" alt="Profiles page on a phone with the bottom bar" width={360} />

- The **bottom bar** has three sections: **Profiles**, **Settings**, **Help**.
- **Account** is at the top of **Settings**.
- The profiles page header has **+** (New Profile, Import Profile…, Search Online), the **bell** (Notifications), the **QR** button (connect a remote controller) and the search field.
- The main screens are in portrait. When you open a profile, the app switches to **landscape and full screen**, so the editor and the dashboard get the whole screen. Closing the profile returns to portrait.
- In the editor, round floating buttons give quick access to Home, Undo, Redo, AI builder, Editor Settings, Gamepad, My Hubs, Dashboard, Monitor and Play/Stop.

## Tablet

<Screenshot name="profiles-tablet" alt="Profiles page on a tablet with the side bar" width={900} />

- The **side bar** on the left has **Profiles**, **Settings**, **Help** and **Account**. It can be collapsed to icons with the side bar button in the header.
- The profiles header has the view switch (**Grid** / **Column**), **New Profile**, **Import Profile…**, **Search Online**, **Sort and filter**, **Filter by hashtags** and the Notifications bell.
- On wide screens, Settings and Help open next to the list.
- A profile opens in landscape; the editor uses the same floating buttons as on a phone.

## Desktop (Mac and Windows)

<Screenshot name="profiles-desktop" alt="My profiles on a computer" width={900} />

- The **top bar** has menus: **File** (New Profile, Import Profile…, Search Online, Quit), **View** (full screen), **Window** and **Help** (MOCPilot Help, Ask a Question, Report a Bug, About MOCPilot). On a Mac the same menus are in the system menu bar.
- On the right: the **Account** button, **Settings** (⌘, / Ctrl+,), **Notifications** and the **QR** button for remote control.
- Settings, Help, Account, New Profile, Edit Profile, the Profile Catalog and other pages open as **windows** above the profile list.
- Click a profile card to see its actions (Launch, Edit…, Add to Favorites, Share…); double-click launches it.
- In the editor, the **Dashboard** opens in its **own window**, so you can see the program and the dashboard side by side.

### Keyboard shortcuts

| Action | Mac | Windows |
|---|---|---|
| New profile | ⌘N | Ctrl+N |
| Import profile | ⌘O | Ctrl+O |
| Close profile | ⌘W | Ctrl+W |
| Run / Stop | ⌘R / ⌘. | Ctrl+R / Ctrl+. |
| Undo / Redo | ⌘Z / ⇧⌘Z | Ctrl+Z / Ctrl+Shift+Z |
| Show the dashboard | ⌘2 | Ctrl+2 |
| Block palette | ⌘P | Ctrl+P |
| Zoom in / out / actual size | ⌘+ / ⌘− / ⌘0 | Ctrl++ / Ctrl+− / Ctrl+0 |
| My Hubs | ⇧⌘H | Ctrl+Shift+H |
| Monitor (Logic Blocks) | ⇧⌘M | Ctrl+Shift+M |
| AI builder | ⇧⌘I | Ctrl+Shift+I |
| Settings | ⌘, | Ctrl+, |
| Full screen | ⌃⌘F | F11 |

## The profile editor on every layout

The editor has no tabs. The **program** (Quick Links rows or Logic Blocks) fills the screen, and buttons open the other parts:

| Button | Opens |
|---|---|
| **My Hubs** | [hub slots](/docs/Application/Hubs/ConnectingHubs) of the profile |
| **Dashboard** | the [dashboard](/docs/Application/Dashboard/DashboardOverview) |
| **Gamepad** | [gamepad settings](/docs/Application/Dashboard/Gamepad) |
| **Monitor** | variable and list values (Logic Blocks only) |
| **Editor Settings** | [editor options](/docs/Application/BlockBuilder/Editor#editor-settings) |
| **AI builder** | the [AI builder](/docs/Application/BlockBuilder/Editor#ai-builder) (MocPilot Pro) |
| **Problems** | rows that cannot run (Quick Links only) |
| **Play / Stop** | runs and stops the program |
