---
id: Events
title: 事件
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 事件

**事件** 分类包含在条件发生时启动脚本的积木。

## 核心事件

### `当程序启动时` {#block_event_when_program_started}

<img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />

当配置程序开始时，此脚本执行一次。

- 触发方式：程序启动
- 常见用途：初始化变量、电机默认状态、启动提示音

### `当` {#block_event_when}

<img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />

当所选条件变为真时运行。

- 触发方式：基于条件
- 常见用途：根据运行时状态进行逻辑分支

### `当计时器大于` {#block_event_when_timer_greater_than}

<img src={useBaseUrl('/img/blocks/block_event_when_timer_greater_than.svg')} alt="block_event_when_timer_greater_than.svg" />

当计时器值超过阈值时运行。

- 触发方式：经过时间
- 常见用途：延时动作、定时阶段

### `当收到消息` {#block_event_when_message_recieved}

<img src={useBaseUrl('/img/blocks/block_event_when_message_recieved.svg')} alt="block_event_when_message_recieved.svg" />

当收到匹配的广播消息时启动脚本。

- 触发方式：消息通道
- 常见用途：同步多个脚本

### `广播` {#block_event_broadcast}

<img src={useBaseUrl('/img/blocks/block_event_broadcast.svg')} alt="block_event_broadcast.svg" />

向所有监听该消息的脚本发送消息。

- 触发方式：立即发送
- 常见用途：无需等待地通知其他脚本

### `广播并等待` {#block_event_broadcast_and_wait}

<img src={useBaseUrl('/img/blocks/block_event_broadcast_and_wait.svg')} alt="block_event_broadcast_and_wait.svg" />

发送消息并暂停当前脚本，直到监听方执行完成。

- 触发方式：立即发送 + 等待
- 常见用途：有执行顺序要求的分阶段流程

## 主控事件

### `主控按钮按下` {#block_hubs_all_event_button_pressed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_button_pressed.svg')} alt="block_hubs_all_event_button_pressed.svg" />

当主控主按钮被按下时运行。

- 状态选项：`按下`、`释放`、`变化`
- 说明：可用按钮选项可能因主控型号而不同（不同主控可能暴露不同按钮集合）。

### `主控连接状态变化` {#block_hubs_all_event_connection_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_connection_changed.svg')} alt="block_hubs_all_event_connection_changed.svg" />

当主控连接状态发生变化（已连接或已断开）时运行。

- 触发方式：主控连接状态变化
- 常见用途：断线重连处理，以及链路丢失后的安全兜底行为

### `主控电量变化` {#block_hubs_all_event_battery_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_battery_changed.svg')} alt="block_hubs_all_event_battery_changed.svg" />

当主控上报的电量发生变化时运行。

- 触发方式：电量更新（适用于支持电量上报的主控）
- 常见用途：低电量告警逻辑和省电模式切换

### `主控加速度变化` {#block_hubs_all_event_accelerometer_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_accelerometer_changed.svg')} alt="block_hubs_all_event_accelerometer_changed.svg" />

当加速度数值变化时运行。

### `主控倾斜变化` {#block_hubs_all_event_tilt_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_changed.svg')} alt="block_hubs_all_event_tilt_changed.svg" />

当倾斜值变化时运行。

- 角度选项：`任意`、`俯仰`、`横滚`、`偏航`
- 说明：`偏航` 仅在支持偏航数据的主控上可用。

### `主控朝向变化` {#block_hubs_all_event_tilt_orientation_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_orientation_changed.svg')} alt="block_hubs_all_event_tilt_orientation_changed.svg" />

当朝向状态变化时运行（例如前/上/下/左/右）。

## 传感器端口事件

### `Technic 颜色传感器事件` {#block_hubs_all_event_port_technic_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_color.svg')} alt="block_hubs_all_event_port_technic_sensor_color.svg" />

当 Technic 颜色传感器上报所选颜色时运行。


### `Technic 距离传感器事件` {#block_hubs_all_event_port_technic_sensor_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_distance.svg')} alt="block_hubs_all_event_port_technic_sensor_distance.svg" />

当 Technic 距离传感器数值满足所选条件时运行。

- 比较选项：`小于`、`大于`、`等于`
- 单位选项：`毫米`、`厘米`、`英寸`、`百分比`
- 说明：可用单位可能取决于传感器模式和已连接设备。

### `BOOST 距离传感器事件` {#block_hubs_all_event_port_boost_sensor_when_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_event_port_boost_sensor_when_distance.svg" />

当 BOOST 距离传感器达到所选阈值/条件时运行。

- 比较选项：`小于`、`大于`、`等于`
- 单位选项：`百分比`、`厘米`、`英寸`

### `BOOST 颜色传感器事件` {#block_hubs_all_event_port_boost_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_color.svg')} alt="block_hubs_all_event_port_boost_sensor_color.svg" />

当 BOOST 传感器检测到所选颜色/数值时运行。