---
id: MyBlocks
title: My Blocks
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# My Blocks

My Blocks let you define your own custom reusable block.
This category is conceptually similar to creating a function in traditional programming: define behavior once, then call it many times.

## Core My Blocks

### `Make a Block`

Creates a new custom block definition.

- Type: definition/setup block
- Typical use: group repeated logic into one named block

### `MyBlock` (call block)

Calls a previously created custom block.

- Type: stack block (custom command call)
- Typical use: reuse the same logic in multiple places without duplicating block stacks

## Variadic examples

These examples show custom My Blocks with different argument signatures.

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758091855.svg')} alt="block_myblock_1775758091855.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758113259.svg')} alt="block_myblock_1775758113259.svg" />
</div>

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758130609.svg')} alt="block_myblock_1775758130609.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758145135.svg')} alt="block_myblock_1775758145135.svg" />
</div>

## Example usage in program stack

<img src={useBaseUrl('/img/my-blocks/my-blocks-usage-example.png')} alt="my-blocks-usage-example.png" />

This example shows a custom block call attached under `when program starts`, while the `define my block` stack contains the reusable motor logic.

- Typical flow: call custom block from event stacks
- Benefit: one definition, many call sites

## My Block editor view

<img src={useBaseUrl('/img/my-blocks/my-blocks-editor-cropped.png')} alt="my-blocks-editor-cropped.png" />

The Make a Block editor is used to design your custom block signature.
You can add labels and inputs (for example number/text and boolean inputs), then define implementation logic in the block definition stack.

## Why use My Blocks

- Reusability: write once, call many times.
- Readability: replace long repeated stacks with one meaningful name.
- Maintainability: update logic in one place instead of many copies.
- Structure: split large programs into smaller logical units.

## Notes

- Custom blocks are project-level and intended for reuse inside the same profile/project context.
- Prefer descriptive names that explain intent, not implementation details.
