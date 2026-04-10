---
id: Variables
title: Variables
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Variables

Variables store values that can be read and updated across block stacks and scripts.

## Variable command blocks

### `Set variable to` {#block_variables_set_to}

<img src={useBaseUrl('/img/blocks/block_variables_set_to.svg')} alt="block_variables_set_to.svg" />

Sets selected variable to the specified value.

- Type: command block
- Typical use: initialize state, overwrite previous value

### `Change variable by` {#block_variables_change_by}

<img src={useBaseUrl('/img/blocks/block_variables_change_by.svg')} alt="block_variables_change_by.svg" />

Adds the specified amount to selected variable.

- Type: command block
- Typical use: counters, score, accumulated distance/time

## Variable value reporter

<img src={useBaseUrl('/img/blocks/variable.svg')} alt="variable.svg" />

Returns the current value of the selected variable.

- Type: reporter block
- Typical use: use variable value inside operators, conditions, and command inputs

## Usage notes

- Initialize important variables at program start.
- Use `change by` for incremental updates to avoid repetitive get/set logic.
- Keep variable names descriptive (`speed_target`, `is_armed`, `lap_count`).
