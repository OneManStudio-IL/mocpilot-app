---
id: Light
title: 灯光
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 灯光

本页介绍“灯光”分类中的积木，用于控制受支持主控上的 LED 与灯光输出。

## 常用灯光积木

### `设置 LED 颜色` {#block_hubs_all_light_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_led_color.svg')} alt="block_hubs_all_light_set_led_color.svg" />

使用预设颜色选项设置主控 LED 颜色。

- 类型：命令积木
- 常见用途：显示状态（就绪、运行中、警告、错误）

### `灯光调到` {#block_hubs_all_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_to.svg')} alt="block_hubs_all_light_light_turn_to.svg" />

将所选灯光输出设置为目标亮度/数值。

- 类型：命令积木
- 常见用途：前灯亮度、状态灯强度

### `关闭灯光` {#block_hubs_all_light_light_turn_off}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_off.svg')} alt="block_hubs_all_light_light_turn_off.svg" />

关闭所选灯光输出。

- 类型：命令积木
- 常见用途：关机流程、省电行为

### `Technic Move 灯光调到` {#block_hubs_technicmove_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_light_light_turn_to.svg')} alt="block_hubs_technicmove_light_light_turn_to.svg" />

`Light turn to` 的 Technic Move 主控/灯光目标版本。

- 类型：命令积木
- 常见用途：设置 Move 主控的灯光输出级别

## BuWizz 3 灯光积木

### `BuWizz 3 设置 LED 颜色` {#block_hubs_buwizz3_light_port_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color.svg')} alt="block_hubs_buwizz3_light_port_set_led_color.svg" />

使用内置颜色选项设置所选 BuWizz 3 端口上的 LED 颜色。

- 类型：命令积木

### `BuWizz 3 设置 LED 颜色（字符串）` {#block_hubs_buwizz3_light_port_set_led_color_string}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_string.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_string.svg" />

使用文本颜色值设置 BuWizz 3 的 LED 颜色。

- 类型：命令积木
- 常见用途：从变量动态读取颜色名称

### `BuWizz 3 设置 LED 颜色（RGB）` {#block_hubs_buwizz3_light_port_set_led_color_rgb}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_rgb.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_rgb.svg" />

使用明确的 RGB 通道值设置 BuWizz 3 的 LED 颜色。

- 类型：命令积木
- 常见用途：完全自定义颜色控制与渐变效果