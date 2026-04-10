---
id: BlocksIntroducing
title: 积木介绍
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 积木介绍

MOCPilot 使用可视化积木编程系统，外观和交互方式与 Scratch 类似。
每个积木都有特定作用，合法的组合方式决定了脚本中的控制流和数据流。
它采用拖拽逻辑和类似 Scratch 的交互模式，提供方便且熟悉的编程体验。

:::warning 兼容性说明
这是一个不同的积木系统，拥有自己的积木集合和行为方式。
MOCPilot 程序与 Scratch 项目不兼容：MOCPilot 程序无法导入到 Scratch，Scratch 程序也无法导入到 MOCPilot。
:::

## 积木形状与含义

### 帽形积木

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />
  <img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />
</div>

当特定事件发生时启动脚本。此类积木只能在下方连接其他积木。

---

### 堆叠积木

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
</div>

执行动作的主要命令积木。

---

### C 形积木

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />
</div>

用于控制流程的 C 形积木，可包含嵌套积木堆（循环/条件）。

---

### 数值积木

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />
</div>

返回数值或字符串等结果。

---

### 布尔积木

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />
</div>

只返回 `true` 或 `false`，通常用于条件判断。

---

### 封口积木

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />
</div>

用于结束脚本，且下方不能再连接积木。

---

### 积木堆

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks_stack.svg')} alt="blocks_stack.svg" />
</div>

积木堆是由多个相连积木组成的序列，作为一条脚本流程从上到下运行。
积木堆通常从事件积木开始，然后按顺序执行后续连接的积木。

---

## 脚本执行模型

- 脚本通常从一个事件积木开始。
- 连接的堆叠积木按从上到下顺序运行。
- 多条脚本可以并行运行。
- 消息/广播积木用于同步不同脚本。
- 积木堆是由多个积木连接而成的序列。

## 数据与数值

- Reporter 积木可以嵌套到命令或条件输入中。
- 变量用于在积木和脚本之间存储可复用的值。
- 列表用于存储有序集合，例如历史记录、队列和查找数据。

## 事件与时序

- 事件积木可响应用户输入、主控状态、传感器或消息。
- 基于计时器和传感器的事件可能会频繁触发。
- 可使用阈值、过滤或短暂等待来减少噪声式重复触发。

## 主控、端口与控制器

- 主控相关积木面向主控与端口上下文。
- 某些积木仅适用于特定主控系列或设备。
- Dashboard 和 Gamepad 积木提供运行时输入与界面控制。

## 推荐工作流程

1. 从一个事件积木和最小可运行脚本开始。
2. 尽早验证电机/传感器方向与取值范围。
3. 使用消息和辅助脚本抽取重复逻辑。
4. 在最终调参前加入保护措施（限值、停止、兜底值）。

## 常见问题

- 缺少事件入口积木会导致脚本无法启动。
- 主控或端口选择错误会导致看不到执行效果。
- 混用不同值类型（文本/数字/布尔）可能导致逻辑异常。
- 高频事件若不做过滤，可能导致行为过载。

## 本节文档结构

请按以下顺序阅读分类页面：

- 灯光
- 电机
- 传感器
- 事件
- 控制
- 运算
- 变量
- 列表
- 我的积木
- 仪表盘控制器
- 游戏手柄
