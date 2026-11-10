---
id: ManageProfiles
title: Manage profiles
description: "Edit, share, import, export and delete MOCPilot profiles."
---

# Manage profiles

## Edit profile details

Open **Edit** (phone, tablet) or **Edit…** (computer) on a profile card. In **Edit profile** you can change:

- the **picture** and the **name**;
- **hashtags**;
- the **description** ("what this profile does, which model it is for, how to drive it");
- **Favorite**.

From here you can also publish the profile to the catalog and delete it.

The program type cannot be changed. To move a model to the other editor, create a new profile.

## Share (export) a profile

**Share…** packs the profile into one `.dat` file (named like `Technic Buggy_<id>.dat`) and opens the system share sheet. Send it by message or mail, or save it to files.

The file contains the hubs, dashboard and program. It does not contain purchases: themes and special controls the receiver does not own are replaced or locked when they edit it (see [below](#paid-themes-in-shared-profiles)).

## Import a profile

1. On the profile list choose **Import Profile…** (phone: **+** → **Import Profile…**; computer: **File → Import Profile…**, ⌘O / Ctrl+O).
2. Pick a `.dat` file ("MOCPilot profile").

If you already have this profile:

- a different version: choose **Replace**, **Save as copy** (adds " (copy)" to the name) or **Cancel**;
- exactly the same file: it is not loaded again.

A file that is not a profile is rejected.

:::tip Duplicate a profile
There is no separate "duplicate" command. To get a copy, share the profile to a file and import it with **Save as copy**.
:::

## Delete a profile

Open **Edit profile**:

- phone and tablet: **Slide to delete the profile**;
- computer: **Delete Profile**, then confirm.

The profile is deleted from this device and from the server (with sync on, it also disappears from your other devices). It cannot be undone; share it to a file first if you may need it.

## Profiles from the catalog

A profile installed from the [Profile Catalog](/docs/Application/Profiles/Catalog) is your copy:

- while you don't change it, it runs exactly as published and can be updated with **Update** when the author releases a new version;
- the first change shows a warning: after it, the profile no longer receives catalog updates.

## Paid themes in shared profiles

Profiles can use paid [themes](/docs/Application/Themes/ThemesOverview) and special controls (steering wheel, pedals). When you edit a profile that uses products you don't own:

- controls of themes you don't own are switched to the free **Basic** theme;
- special controls with no free equivalent are locked until purchased;
- products you own stay as they are.

An unchanged catalog profile runs with all its products, even ones you don't own.

## Sync

With an account and profile sync on, every change is uploaded and appears on your other devices. See [Sync between devices](/docs/Application/Account/Sync).

If you open a profile that is already being edited on another device, MOCPilot asks: **View only** (changes are not saved) or **Take over editing**.
