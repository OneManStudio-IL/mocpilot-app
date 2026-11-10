---
id: ProfilesOverview
title: Profiles
description: "What a profile is, the profile list, search, sorting and favorites."
---

import Screenshot from '@site/src/components/Screenshot';

# Profiles

A **profile** is everything MOCPilot knows about one model: its hubs, its dashboard and its program. You keep one profile per model.

<Screenshot name="profiles-desktop" alt="My profiles list" width={900} />

## Where profiles come from

- **Your own profiles**, created with **New Profile**. See [Create a profile](/docs/Application/Profiles/CreateProfile).
- **Profiles from the catalog**: official profiles for LEGO® sets made by the MOCPilot team and community profiles from other builders. Installing one adds your own copy to the list. See [Catalog and publishing](/docs/Application/Profiles/Catalog).
- **Imported profiles**: `.dat` files someone shared with you. See [Manage profiles](/docs/Application/Profiles/ManageProfiles#import-a-profile).

All of them live in the same list.

## The profile list

The page is called **Profiles** on a phone and **My profiles** on a tablet or computer.

- **Search** finds profiles by name, hashtag, author, hub, set number or year.
- **Sort and filter** sorts by **Newest sets**, **Oldest sets**, **Name (A–Z)**, **Name (Z–A)**, **Author (A–Z)**, **Author (Z–A)** or **Hubs used**. **Only my profiles** hides profiles installed from the catalog.
- **Filter by hashtags** shows only profiles with the chosen hashtags.
- **Grid** / **Column** switches the card view (tablet and computer).
- **Favorite** profiles are always shown first.

A card shows the profile picture and name and, when known, the set number, release year and parts count. **Update available** means a new version of a catalog profile can be installed.

## Profile actions

| Action | Phone and tablet | Computer |
|---|---|---|
| Open (launch) | tap the card | double-click the card, or **Launch** |
| Edit name, picture, hashtags, description | **Edit** on the card | **Edit…** |
| Add to favorites | in **Edit profile** | **Add to Favorites** |
| Share as a file | **Share** | **Share…** |
| Update from the catalog | **Update** | **Update** |
| Publish to the catalog | in **Edit profile** | in **Edit profile** or **Publish Profile** |
| Delete | **Slide to delete the profile** in **Edit profile** | **Delete Profile** in **Edit profile** |

## Two kinds of programs

Each profile uses one of two program editors, chosen when it is created:

- **Quick Links**: rows that connect controls to motors and lights, no code. See [Quick Links](/docs/Application/Links/LinksIntroducing).
- **Logic Blocks**: a block program with events, loops, conditions and variables. See [Logic Blocks](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing).

:::info
A profile made in a newer version of MOCPilot may not open in an older one ("Profile is not compatible"). Update the app on that device.
:::
