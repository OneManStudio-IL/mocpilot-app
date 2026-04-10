---
id: MyBlocks
title: 我的模块
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 我的模块

“我的模块”允许你定义自己的可复用自定义积木。
这个分类在概念上类似传统编程中的函数：定义一次行为，多次调用。

## 核心模块

### `创建一个块`

创建一个新的自定义积木定义。

- 类型：定义/设置积木
- 常见用途：将重复逻辑归纳到一个命名积木中

### `MyBlock` (call block)

调用之前创建的自定义积木。

- 类型：堆叠积木（自定义命令调用）
- 常见用途：在多个位置复用同一逻辑，而无需复制整段积木堆

## 可变参数示例

这些示例展示了不同参数签名的自定义模块。

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758091855.svg')} alt="block_myblock_1775758091855.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758113259.svg')} alt="block_myblock_1775758113259.svg" />
</div>

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758130609.svg')} alt="block_myblock_1775758130609.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758145135.svg')} alt="block_myblock_1775758145135.svg" />
</div>

## 程序积木堆中的使用示例

<img src={useBaseUrl('/img/my-blocks/my-blocks-usage-example.png')} alt="my-blocks-usage-example.png" />

该示例展示了在 `当程序启动时` 下方调用自定义积木，同时 `定义我的积木` 积木堆中包含可复用的电机逻辑。

- 典型流程：从事件积木堆中调用自定义积木
- 优势：一次定义，多处调用

## My Block 编辑器视图

<img src={useBaseUrl('/img/my-blocks/my-blocks-editor-cropped.png')} alt="my-blocks-editor-cropped.png" />

Make a Block 编辑器用于设计自定义积木签名。
你可以添加标签和输入（例如数字/文本输入与布尔输入），然后在积木定义堆中编写实现逻辑。

## 为什么使用 My Blocks

- 可复用性：写一次，多次调用。
- 可读性：用一个语义明确的名称替代冗长重复的积木堆。
- 可维护性：在一个位置更新逻辑，而不是修改多份副本。
- 结构化：将大型程序拆分为更小的逻辑单元。

## 说明

- 自定义积木是项目级别，主要用于在同一配置/项目上下文中复用。
- 建议使用能表达意图的命名，而不是实现细节命名。
