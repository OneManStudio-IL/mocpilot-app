---
id: Gamepad
title: 游戏手柄
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 游戏手柄
游戏手柄积木用于响应控制器输入并读取当前手柄状态值。

## 事件积木

### `当手柄按钮为` {#block_gamepad_event_when_button_is}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is.svg')} alt="block_gamepad_event_when_button_is.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is_sony.svg')} alt="block_gamepad_event_when_button_is_sony.svg" />
</div>

当所选手柄按钮与配置状态匹配时触发。

- 类型：事件积木
- 按钮选项（Xbox 布局）：`A`、`B`、`X`、`Y`、`LB`、`RB`、`LT`、`RT`、`LSB`、`RSB`
- 按钮选项（Sony 布局）：`叉`、`圆`、`方形`、`三角形`、`L1`、`R1`、`L2`、`R2`、`L3`、`R3`
- 状态选项：`按下`、`释放`

### `当手柄方向键为` {#block_gamepad_event_when_dpad_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_dpad_is.svg')} alt="block_gamepad_event_when_dpad_is.svg" />

当方向键方向/状态与所选条件匹配时触发。

- 类型：事件积木
- 方向选项：`上`、`下`、`左`、`右`
- 状态选项：`按下`、`释放`

### `当手柄摇杆为` {#block_gamepad_event_when_thumbstick_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_thumbstick_is.svg')} alt="block_gamepad_event_when_thumbstick_is.svg" />

当摇杆条件匹配所选选项时触发。

根据当前选项，该积木支持：

- 摇杆选择：`左` / `右`
- 方向/状态选择：`上`、`下`、`左`、`右`、`移动`、`释放`

- 类型：事件积木
- 常见用途：响应方向移动或摇杆释放

## 数值积木

### `手柄按钮值（布尔）` {#block_gamepad_button_value_boolean}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean.svg')} alt="block_gamepad_button_value_boolean.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean_sony.svg')} alt="block_gamepad_button_value_boolean_sony.svg" />
</div>

返回所选手柄按钮的当前状态。

- 类型：值积木
- 输出：`true`/`false`
- 按钮选项（Xbox 布局）：`A`、`B`、`X`、`Y`、`LB`、`RB`、`LT`、`RT`、`LSB`、`RSB`
- 按钮选项（Sony 布局）：`叉`、`圆`、`方形`、`三角形`、`L1`、`R1`、`L2`、`R2`、`L3`、`R3`
- 状态选项：`按下`、`释放`

### `手柄方向键值（布尔）` {#block_gamepad_dpad_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_gamepad_dpad_button_value_boolean.svg')} alt="block_gamepad_dpad_button_value_boolean.svg" />

返回所选方向键方向当前是否激活。

- 类型：值积木
- 输出：`true`/`false`
- 方向选项：`上`、`下`、`左`、`右`
- 状态选项：`按下`、`释放`

### `手柄摇杆值（浮点）` {#block_gamepad_thumbstick_value_float}

<img src={useBaseUrl('/img/blocks/block_gamepad_thumbstick_value_float.svg')} alt="block_gamepad_thumbstick_value_float.svg" />

返回摇杆轴的数值。

- 类型：值积木
- 输出：数值（浮点）
- 默认范围：`-1` 到 `1`
- 游戏手柄设置中的可选范围：`-100` 到 `100`
- 摇杆选项：`左`、`右`
- 轴选项：`X 轴` / `Y 轴`

### `手柄扳机压力值（浮点）` {#block_gamepad_trigger_pressure_value_float}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float.svg')} alt="block_gamepad_trigger_pressure_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float_sony.svg')} alt="block_gamepad_trigger_pressure_value_float_sony.svg" />
</div>

返回所选扳机的压力值。

- 类型：值积木
- 输出：数值（浮点）
- 默认范围：`-1` 到 `1`
- 游戏手柄设置中的可选范围：`-100` 到 `100`
- 扳机选项（Xbox 布局）：`LT`、`RT`
- 扳机选项（Sony 布局）：`L2`、`R2`

## 使用说明

- 使用事件积木可在输入状态变化时立即响应。
- 使用值积木可在循环和控制计算中持续轮询当前值。
- 为获得平滑电机控制，请对摇杆/扳机值应用死区和缩放处理。
- 可结合广播积木，将输入处理与动作逻辑解耦。
- 在游戏手柄设置中，可在 Xbox 风格与 Sony PlayStation 风格按键映射之间切换。
