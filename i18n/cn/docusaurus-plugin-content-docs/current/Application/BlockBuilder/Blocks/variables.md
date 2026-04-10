---
id: Variables
title: 变量
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 变量

变量用于存储可在积木堆和脚本之间读取与更新的值。

## 变量命令积木

### `将变量设为` {#block_variables_set_to}

<img src={useBaseUrl('/img/blocks/block_variables_set_to.svg')} alt="block_variables_set_to.svg" />

将所选变量设置为指定值。

- 类型：命令积木
- 常见用途：初始化状态、覆盖旧值

### `将变量增加` {#block_variables_change_by}

<img src={useBaseUrl('/img/blocks/block_variables_change_by.svg')} alt="block_variables_change_by.svg" />

将所选变量增加指定数值。

- 类型：命令积木
- 常见用途：计数器、分数、累计距离/时间

## 变量值积木

<img src={useBaseUrl('/img/blocks/variable.svg')} alt="variable.svg" />

返回所选变量的当前值。

- 类型：数值积木（Reporter）
- 常见用途：在运算、条件和命令输入中使用变量值

## 使用说明

- 在程序启动时初始化关键变量。
- 对增量更新使用 `将变量增加`，避免重复的读写赋值逻辑。
- 变量命名应具有可读性（如 `speed_target`、`is_armed`、`lap_count`）。
