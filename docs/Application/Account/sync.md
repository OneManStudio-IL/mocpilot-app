---
id: Sync
title: Sync between devices
description: "Keep MOCPilot profiles and settings in sync across phones, tablets, computers and the web editor."
---

# Sync between devices

With an account, MOCPilot keeps your profiles and settings the same on every device: phone, tablet, computer and the [web editor](/docs/Introducing/WebEditor).

## Turn sync on or off

**Account → Cloud sync** (**Setup cloud sync**) has two switches:

- **Profiles**: every change to your profiles is uploaded and appears on all devices signed in to your account.
- **Settings**: app settings follow you too.

:::caution Turning profile sync off
If you disable profile sync, your profile data is **removed from the server** and synchronization between your devices stops. The profiles saved on this device remain available. Confirm with **I understand, do**.
:::

## How it works

- Changes are saved on the device first and uploaded when you are online ("Syncing profiles…").
- Other devices download the new version when they are online.
- Purchases are not synced as files; they belong to your account and are available everywhere you sign in.
- Profiles added on the website (**Add to account** in the catalog) or edited in the web editor arrive through sync.

## Conflicts

If the same profile was changed on two devices before they synced, MOCPilot shows the **Profile synchronization** dialog and lets you choose which version to keep.

If you open a profile that is being edited on another device right now, you can choose **View only** (changes are not saved) or **Take over editing**.

## Tips

- Before publishing a profile to the catalog, make sure it is synced: the catalog takes it from your account.
- To move profiles to an account-less device, use **Share** and **Import** with `.dat` files. See [Manage profiles](/docs/Application/Profiles/ManageProfiles).
