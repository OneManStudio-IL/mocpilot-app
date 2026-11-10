---
id: BlocksIntroducing
title: Introducing Logic Blocks
description: "Logic Blocks is the visual block programming editor of MOCPilot: events, loops, conditions, variables and sensors."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# Logic Blocks

**Logic Blocks** is the block programming editor of MOCPilot. You build programs by snapping blocks together, in a way that will feel familiar if you know Scratch: events, loops, conditions, variables, lists, your own blocks, and blocks for motors, lights, sensors, dashboard controls and the gamepad.

Choose Logic Blocks when the model needs logic: robots, automatic sequences, sensor reactions, startup checks, games. For simply connecting controls to motors, [Quick Links](/docs/Application/Links/LinksIntroducing) is faster.

<img src={useBaseUrl('/img/illustrations/editor_blocks.svg')} alt="Logic Blocks program" style={{width: '100%', maxWidth: 720}} />

:::warning Not Scratch
Logic Blocks has its own block set and behaviour. MOCPilot programs cannot be imported into Scratch, and Scratch projects cannot be imported into MOCPilot.
:::

## The editor at a glance

<Screenshot name="blocks-editor" alt="Logic Blocks editor with palette and program" width={900} />

- The **palette** lists block categories: **Events**, **Control**, **Operators**, **Variables**, **Lists**, **My Blocks**, **Sensors**, and, when your profile has them, **Motors**, **Light**, **Dashboard controllers** and **Gamepad**.
- The **program area** is where you drag blocks and build scripts.
- The top bar has **My Hubs**, **Dashboard**, **Gamepad**, **Monitor**, **Editor Settings**, the **AI builder** and **Play/Stop**.

Details in [Working in the editor](/docs/Application/BlockBuilder/Editor).

## How a program runs

- A script starts with an **event** block (a hat block): *when program started*, *when button … is pressed*, *when message received*…
- The blocks attached below run from top to bottom.
- Several scripts run **at the same time**. Use messages (*broadcast*) to coordinate them.
- **Loops** (*forever*, *repeat*, *repeat until*) keep a script going; **conditions** (*if*, *if / else*, *wait until*) make decisions.
- **Reporter** blocks (round) give values and fit into inputs of other blocks; **boolean** blocks (pointed) give true/false for conditions.
- **Variables** and **lists** keep values between blocks and scripts.

## Block shapes and meaning

### Hat Blocks

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />
  <img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />
</div>

Start a script when a specific event occurs. Blocks can only be attached below.

---

### Stack Blocks

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
</div>

Main command blocks that perform actions.

---

### C Blocks

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />
</div>

C-shaped control blocks that contain nested block stacks (loops/conditions).

---

### Reporter Blocks

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />
</div>

Return values such as numbers or strings.

---

### Boolean Blocks

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />
</div>

Return only `true` or `false`, typically used in conditions.

---

### Cap Blocks

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />
</div>

End scripts and do not allow blocks below.

---

### Blocks Stack

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks_stack.svg')} alt="blocks_stack.svg" />
</div>

A block stack is a sequence of connected blocks that runs as one script flow from top to bottom.
Stacks usually start with an event block and then execute attached blocks in order.

---


## Hubs, ports and controls

- Motor and light blocks take a **hub** and **port**. The categories Motors and Light appear only when a hub in the profile supports them, and some blocks only for specific hubs (for example BuWizz power modes or Technic Move functions).
- Dashboard blocks refer to controls by name (**JOY1**, **BTN2**). A control that is used by blocks cannot be deleted from the dashboard until its blocks are removed.
- Gamepad blocks appear when **Enable gamepad blocks** is on in the [Gamepad page](/docs/Application/Dashboard/Gamepad).

## Block levels

Each profile has a **block level**: **Beginner** shows the simplest blocks, **Advanced** adds common logic and device blocks, **Guru** shows the complete set. Choose it when creating the profile or in Editor Settings.

## Recommended workflow

1. Start with one event block and a minimal script; press **Play** and check that it works.
2. Check motor directions and value ranges early (use a Monitor).
3. Split the program into small scripts that talk with messages; move repeated logic into [My Blocks](/docs/Application/BlockBuilder/Blocks/MyBlocks).
4. Add safety: limits, stops, a startup check, what happens when a hub disconnects.

## Common pitfalls

- A script without an event block never starts.
- The wrong hub or port selected: nothing visible happens.
- Mixing text, numbers and booleans gives unexpected results.
- Very frequent events without filtering (for example a sensor event on every tiny change) can overload the program; use thresholds or short waits.

## Block reference

- [Events](/docs/Application/BlockBuilder/Blocks/Events) · [Control](/docs/Application/BlockBuilder/Blocks/Control) · [Operators](/docs/Application/BlockBuilder/Blocks/Operators)
- [Variables](/docs/Application/BlockBuilder/Blocks/Variables) · [Lists](/docs/Application/BlockBuilder/Blocks/Lists) · [My Blocks](/docs/Application/BlockBuilder/Blocks/MyBlocks)
- [Motors](/docs/Application/BlockBuilder/Blocks/Motors) · [Light](/docs/Application/BlockBuilder/Blocks/Light) · [Sensors](/docs/Application/BlockBuilder/Blocks/Sensors)
- [Dashboard controllers](/docs/Application/BlockBuilder/Blocks/DashboardControllers) · [Gamepad](/docs/Application/BlockBuilder/Blocks/Gamepad)

In the app, long-press (right-click) a block → **About block** opens its description here.

Ready programs: [Examples](/docs/Application/BlockBuilder/Examples).
