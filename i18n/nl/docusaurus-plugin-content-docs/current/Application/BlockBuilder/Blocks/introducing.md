---
id: BlocksIntroducing
title: Blocks Introducing
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Blocks Introducing

MOCPilot uses a visual block programming system that looks and feels similar to Scratch.
Each block has a specific role, and valid combinations define control flow and data flow through a script.
It uses drag-and-drop logic and Scratch-like interaction patterns to provide a convenient and familiar way to build programs.

:::warning Compatibility Notice
This is a different block system with its own block set and behavior.
MOCPilot programs are not compatible with Scratch projects: MOCPilot programs cannot be imported into Scratch, and Scratch programs cannot be imported into MOCPilot.
:::

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

## Script execution model

- A script usually starts from an event block.
- Connected stack blocks run top to bottom.
- Multiple scripts can run in parallel.
- Message/broadcast blocks are used to synchronize scripts.
- A block stack is a sequence of blocks connected together.

## Data and values

- Reporter blocks can be nested inside command/condition inputs.
- Variables store reusable values across blocks and scripts.
- Lists store ordered collections for history, queues, and lookup data.

## Events and timing

- Event blocks react to user input, hub state, sensors, or messages.
- Timer- and sensor-based events may trigger frequently.
- Use thresholds, filtering, or short waits to reduce noisy repeated triggers.

## Hub, ports, and controllers

- Hub blocks target hub and port context.
- Some blocks are available only for specific hub families/devices.
- Dashboard and gamepad blocks provide runtime input and UI control.

## Recommended workflow

1. Start with one event block and a minimal script.
2. Validate motor/sensor direction and ranges early.
3. Extract repeated logic with messages and helper scripts.
4. Add safeguards (limits, stops, fallback values) before final tuning.

## Common pitfalls

- Missing event entry block means script never starts.
- Wrong hub/port selection causes no visible effect.
- Mixing value types (text/number/boolean) can produce invalid logic.
- High-frequency events without filtering can overload behavior.

## Documentation structure in this section

Use category pages in this order:

- Light
- Motors
- Sensors
- Events
- Control
- Operators
- Variables
- Lists
- My Blocks
- Dashboard controllers
- Gamepad
