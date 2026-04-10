---
id: DashboardControllers
title: 仪表盘控制器
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 仪表盘控制器

这些积木用于读取屏幕控制器的用户输入、响应用户操作，并更新仪表盘 UI 状态。

## 全局仪表盘控制器积木

### `设置控制器颜色` {#block_dashboard_controller_all_set_color}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_color.svg')} alt="block_dashboard_controller_all_set_color.svg" />

更改所选仪表盘控制器的视觉强调色。

- 类型：命令积木
- 常见用途：指示运行状态，或根据条件动态改变控制器样式

### `设置控制器交互性` {#block_dashboard_controller_all_set_interactivity}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_interactivity.svg')} alt="block_dashboard_controller_all_set_interactivity.svg" />

控制所选仪表盘控制器是否可交互。
若禁用交互，控制器将不响应触摸输入。

- 类型：命令积木
- 常见用途：在特定逻辑阶段或安全状态下临时锁定控制
- 状态选项：`启用`、`禁用`

## 按钮积木

### `按钮事件` {#block_dashboard_controller_button_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_event.svg')} alt="block_dashboard_controller_button_event.svg" />

当仪表盘按钮状态变化（按下/释放）时触发。

- 类型：事件积木
- 输出：启动已连接脚本
- 状态选项：`按下`、`释放`

### `按钮值（布尔）` {#block_dashboard_controller_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_value_boolean.svg')} alt="block_dashboard_controller_button_value_boolean.svg" />

返回当前仪表盘按钮状态。

- 类型：值积木
- 输出：`true`/`false`
- 状态选项：`按下`、`释放`

## 方向键积木

### `方向键事件` {#block_dashboard_controller_dpad_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_event.svg')} alt="block_dashboard_controller_dpad_event.svg" />

当方向键方向变化或匹配配置方向时触发。

- 类型：事件积木
- 输出：启动已连接脚本
- 方向选项：`上`、`下`、`左`、`右`
- 按键状态选项：`按下`、`释放`

### `方向键值（布尔）` {#block_dashboard_controller_dpad_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_value_boolean.svg')} alt="block_dashboard_controller_dpad_value_boolean.svg" />

返回所选方向键方向当前是否激活。

- 类型：值积木
- 输出：`true`/`false`
- 方向选项：`上`、`下`、`左`、`右`
- 按键状态选项：`按下`、`释放`

## 摇杆积木

### `摇杆事件` {#block_dashboard_controller_joystick_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_event.svg')} alt="block_dashboard_controller_joystick_event.svg" />

当摇杆位置变化时触发。

- 类型：事件积木
- 输出：启动已连接脚本
- 状态选项：`上`、`下`、`左`、`右`、`移动`、`释放`

### `摇杆值（浮点）` {#block_dashboard_controller_joystick_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_value_float.svg')} alt="block_dashboard_controller_joystick_value_float.svg" />

返回摇杆轴数值。

- 类型：值积木
- 输出：数值（浮点），通常为归一化范围
- 轴选项：`X 轴`、`Y 轴`

## 踏板积木

### `踏板事件` {#block_dashboard_controller_pedals_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_event.svg')} alt="block_dashboard_controller_pedals_event.svg" />

当踏板输入变化时触发。

- 类型：事件积木
- 输出：启动已连接脚本
- 踏板选项：`任意`、`刹车`、`油门`
- 状态选项：`移动`、`按下`、`释放`

### `踏板值（浮点）` {#block_dashboard_controller_pedals_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_float.svg')} alt="block_dashboard_controller_pedals_value_float.svg" />

返回踏板模拟量数值。

- 类型：值积木
- 输出：数值（浮点）

### `踏板值（布尔）` {#block_dashboard_controller_pedals_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_boolean.svg')} alt="block_dashboard_controller_pedals_value_boolean.svg" />

根据特定踏板是否按下或释放，返回所选状态。

- 类型：值积木
- 输出：`true`/`false`
- 踏板选项：`刹车`、`油门`
- 状态选项：`按下`、`释放`

## 滑杆积木

### `滑杆事件` {#block_dashboard_controller_slider_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_event.svg')} alt="block_dashboard_controller_slider_event.svg" />

当滑杆值变化时触发。

- 类型：事件积木
- 输出：启动已连接脚本
- 状态选项：`低位`、`高位`、`移动`、`释放`

### `滑杆值（浮点）` {#block_dashboard_controller_slider_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_value_float.svg')} alt="block_dashboard_controller_slider_value_float.svg" />

返回当前滑杆值。

- 类型：值积木
- 输出：数值（浮点）

## 步进器积木

### `步进器事件` {#block_dashboard_controller_stepper_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_event.svg')} alt="block_dashboard_controller_stepper_event.svg" />

当步进器值按步长变化时触发。

- 类型：事件积木
- 输出：启动已连接脚本
- 步进选项：`任意`、`重置`、`减`、`加`
- 按键状态选项：`按下`、`释放`

### `步进器值（浮点）` {#block_dashboard_controller_stepper_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_value_float.svg')} alt="block_dashboard_controller_stepper_value_float.svg" />

返回当前步进器值。

- 类型：值积木
- 输出：数值（浮点）

## 方向盘积木

### `方向盘事件` {#block_dashboard_controller_steering_wheel_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_event.svg')} alt="block_dashboard_controller_steering_wheel_event.svg" />

当方向盘位置变化时触发。

- 类型：事件积木
- 输出：启动已连接脚本
- 状态选项：`移动`、`按下`、`释放`

### `方向盘值（浮点）` {#block_dashboard_controller_steering_wheel_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_value_float.svg')} alt="block_dashboard_controller_steering_wheel_value_float.svg" />

返回当前方向盘值。

- 类型：值积木
- 输出：数值（浮点）

### `方向盘值（布尔）` {#block_dashboard_controller_steeringwheel_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steeringwheel_value_boolean.svg')} alt="block_dashboard_controller_steeringwheel_value_boolean.svg" />

根据方向盘是否按下或释放，返回所选状态。

- 类型：值积木
- 输出：`true`/`false`
- 状态选项：`移动`、`按下`、`释放`

## 开关积木

### `开关事件` {#block_dashboard_controller_switch_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_event.svg')} alt="block_dashboard_controller_switch_event.svg" />

当开关状态变化时触发。

- 类型：事件积木
- 输出：启动已连接脚本
- 切换选项：`开`、`关`

### `开关值（布尔）` {#block_dashboard_controller_switch_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_value_boolean.svg')} alt="block_dashboard_controller_switch_value_boolean.svg" />

返回当前开关状态。

- 类型：值积木
- 输出：`true`/`false`
- 状态选项：`开`、`关`

## 监视器积木

### `监视器显示` {#block_dashboard_controller_monitor_show}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_show.svg')} alt="block_dashboard_controller_monitor_show.svg" />

在仪表盘监视器上显示信息（文本或数值）。

- 类型：命令积木
- 常见用途：显示电量、电机角度、主控端口当前连接设备等运行时信息

### `监视器设置数值` {#block_dashboard_controller_monitor_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_set_value.svg')} alt="block_dashboard_controller_monitor_set_value.svg" />

为仪表盘速度表监视器设置整数值。

- 类型：命令积木
- 常见用途：运行时更新类似速度表的监视器数值

### `倾斜监视器设置数值` {#block_dashboard_controller_monitor_tilt_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_tilt_set_value.svg')} alt="block_dashboard_controller_monitor_tilt_set_value.svg" />

为仪表盘倾斜监视器设置倾斜值（俯仰/横滚）。

- 类型：命令积木
- 常见用途：在专用倾斜监视器中显示运行时倾斜数值
- 轴选项：`俯仰`、`横滚`

## 使用说明

- 事件积木最适合在用户输入变化时立即响应。
- 值积木最适合在循环/条件中读取当前状态。
- 为获得平滑控制，可将值积木与缩放和死区逻辑结合使用。
- 使用交互性/颜色积木来反映应用状态（已启用、暂停、错误）。
