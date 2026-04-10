---
id: Motors
title: 电机
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 电机

电机积木用于启动、停止、定位和调节连接到主控端口的电机。

## 核心电机命令积木

### `启动电机` {#block_hubs_all_motors_port_start_motor}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor.svg')} alt="block_hubs_all_motors_port_start_motor.svg" />
启动所选电机。

- 方向选项：顺时针 / 逆时针

### `停止电机` {#block_hubs_all_motors_port_stop_motor}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_stop_motor.svg')} alt="block_hubs_all_motors_port_stop_motor.svg" />
停止所选电机。

### `运行指定量` {#block_hubs_all_motors_port_run_for}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for.svg')} alt="block_hubs_all_motors_port_run_for.svg" />
根据积木设置，让所选电机按指定时间/角度/圈数运行。

- 方向选项：顺时针 / 逆时针
- 单位选项：`圈数`、`角度`、`秒`
- 说明：此功能要求所选端口上的电机支持基于编码器的控制。

### `以速度启动电机` {#block_hubs_all_motors_port_start_motor_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor_at_speed.svg')} alt="block_hubs_all_motors_port_start_motor_at_speed.svg" />
使用明确的速度值启动电机。

### `以速度运行指定量` {#block_hubs_all_motors_port_run_for_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for_at_speed.svg')} alt="block_hubs_all_motors_port_run_for_at_speed.svg" />
以明确的速度值，让电机运行指定时长/数量。

- 单位选项：`圈数`、`角度`、`秒`
- 说明：此功能要求所选端口上的电机支持基于编码器的控制。

### `设置电机速度` {#block_hubs_all_motors_port_set_motor_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_speed.svg')} alt="block_hubs_all_motors_port_set_motor_speed.svg" />
设置相关电机运行积木所使用的速度。

## 位置与运动积木

### `前往位置` {#block_hubs_all_motors_port_go_to_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_position.svg')} alt="block_hubs_all_motors_port_go_to_position.svg" />
将电机移动到目标绝对位置。

- 路径选项：`最短路径`、`顺时针`、`逆时针`
- 说明：此功能要求所选端口上的电机支持基于编码器的控制。

### `前往相对位置` {#block_hubs_all_motors_port_go_to_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_relative_position.svg')} alt="block_hubs_all_motors_port_go_to_relative_position.svg" />
按相对偏移量移动电机。

- 说明：此功能要求所选端口上的电机支持基于编码器的控制。

### `BuWizz 3 前往相对位置` {#block_hubs_buwizz3_motors_port_go_to_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_motors_port_go_to_relative_position.svg')} alt="block_hubs_buwizz3_motors_port_go_to_relative_position.svg" />
BuWizz 3 的相对定位积木版本。

- 说明：此功能要求所选端口上的电机支持基于编码器的控制。

### `设置相对位置` {#block_hubs_all_motors_port_set_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_relative_position.svg')} alt="block_hubs_all_motors_port_set_relative_position.svg" />
设置电机相对位置参考点。

- 说明：此功能要求所选端口上的电机支持基于编码器的控制。

### `校准转向齿条` {#block_hubs_all_motors_port_calibrate_steering_rack}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_calibrate_steering_rack.svg')} alt="block_hubs_all_motors_port_calibrate_steering_rack.svg" />
校准转向齿条的中位/参考位置。

- 要求：连接在所选端口上的电机必须支持绝对/相对角度跟踪（内置编码器）。
- 机械要求：转向轴运动必须在有效范围内有物理限位（例如通过齿条/齿轮端点限位）。
- 工作方式：该积木会扫描并测量可用转向旋转范围，然后计算用于转向配置的校准数据。
- 输出行为：积木参数会把结果写入传入的变量（类似函数按引用传参）。这些变量会被积木修改，可用于读取校准结果。

## 电机调节与安全积木

### `设置停止时电机行为` {#block_hubs_all_motors_port_set_motor_to_at_stop}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_to_at_stop.svg')} alt="block_hubs_all_motors_port_set_motor_to_at_stop.svg" />
设置电机停止模式（例如根据可用选项选择刹车/保持/滑行）。

- 停止模式选项：`刹车`、`保持位置`、`滑行`
- 说明：此功能要求所选端口上的电机支持基于编码器的控制。

### `设置堵转检测` {#block_hubs_all_motors_port_set_motors_stall_detection}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motors_stall_detection.svg')} alt="block_hubs_all_motors_port_set_motors_stall_detection.svg" />
启用或禁用堵转检测。

- 说明：仅适用于 MINDSTORMS Robot Inventor 主控。

### `设置加速度` {#block_hubs_all_motors_port_set_acceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_acceleration.svg')} alt="block_hubs_all_motors_port_set_acceleration.svg" />
设置电机加速度曲线/速率。

- 曲线选项：`默认`、`快速`、`平衡`、`平滑`、`慢速`、`很慢`
- 说明：此功能要求所选端口上的电机支持基于编码器的控制。

### `设置减速度` {#block_hubs_all_motors_port_set_deceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_deceleration.svg')} alt="block_hubs_all_motors_port_set_deceleration.svg" />
设置电机减速度曲线/速率。

- 曲线选项：`默认`、`快速`、`平衡`、`平滑`、`慢速`、`很慢`
- 说明：此功能要求所选端口上的电机支持基于编码器的控制。

## 电机数值积木

### `位置` {#block_hubs_all_motors_port_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_position.svg')} alt="block_hubs_all_motors_port_position.svg" />
返回当前电机位置。

### `相对位置` {#block_hubs_all_motors_port_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_relative_position.svg')} alt="block_hubs_all_motors_port_relative_position.svg" />
返回当前相对位置值。

### `速度` {#block_hubs_all_motors_port_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_speed.svg')} alt="block_hubs_all_motors_port_speed.svg" />
返回当前电机速度。

### `功率` {#block_hubs_all_motors_port_power}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_power.svg')} alt="block_hubs_all_motors_port_power.svg" />
返回当前电机功率值。

- 说明：仅适用于 MINDSTORMS Robot Inventor 主控。

## Technic Move 电机积木

### `以速度启动电机组` {#block_hubs_technicmove_motors_start_motors_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_start_motors_at_speed.svg')} alt="block_hubs_technicmove_motors_start_motors_at_speed.svg" />
以所选速度启动 Technic Move 驱动电机。

### `停止电机组` {#block_hubs_technicmove_motors_stop_motors}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_stop_motors.svg')} alt="block_hubs_technicmove_motors_stop_motors.svg" />
停止 Technic Move 驱动电机。

### `刹车` {#block_hubs_technicmove_motors_brake}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_brake.svg')} alt="block_hubs_technicmove_motors_brake.svg" />
对 Technic Move 电机应用刹车行为。

- 刹车选项：`关`、`开`

### `将转向齿条设为` {#block_hubs_technicmove_motors_set_steering_rack_to}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_set_steering_rack_to.svg')} alt="block_hubs_technicmove_motors_set_steering_rack_to.svg" />
设置转向齿条目标位置/数值。

### `校准转向齿条` {#block_hubs_technicmove_motors_calibrate_steering_rack}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_calibrate_steering_rack.svg')} alt="block_hubs_technicmove_motors_calibrate_steering_rack.svg" />
使用主控内部校准算法和自动转向范围检测来校准 Technic Move 转向齿条。

- 说明：电机轴必须具备机械限位（例如通过转向齿条机构实现）。

## 使用说明

- 绝对目标请使用 `前往位置`，增量运动请使用 `前往相对位置`。
- 使用加速度/减速度调节可获得更平滑的启动与停止效果。
- 当机构在负载下可能卡住时，请启用堵转检测。
