---
id: Sensors
title: 传感器
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 传感器

传感器积木用于读取主控/设备状态，并为条件、事件和控制逻辑提供数据。

## 设备与主控传感器

### `主控电量` {#block_hubs_all_sensors_battery_level}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_battery_level.svg')} alt="block_hubs_all_sensors_battery_level.svg" />
返回当前主控电量。

### `设备电量 %` {#block_sensors_device_battery_level}
<img src={useBaseUrl('/img/blocks/block_sensors_device_battery_level.svg')} alt="block_sensors_device_battery_level.svg" />
返回运行 MOCPilot 的手机/平板设备当前电量（百分比）。

### `主板温度` {#block_hubs_all_sensors_board_temp}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_board_temp.svg')} alt="block_hubs_all_sensors_board_temp.svg" />
返回主控主板温度。

- 仅适用于 `BuWizz 2` 和 `BuWizz 3`。

### `按钮按下状态` {#block_hubs_all_sensors_button_pressed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_button_pressed.svg?v=20260409-2258')} alt="block_hubs_all_sensors_button_pressed.svg" />
检查所选主控按钮是否匹配所选状态。

- 状态选项：`按下`、`释放`
- 常见按钮选项：`中键`（取决于主控）

- 说明：可用按钮选项可能因主控型号而不同（不同主控可能暴露不同按钮集合）。

### `设备类型` {#block_hubs_all_motors_port_device_type}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_device_type.svg')} alt="block_hubs_all_motors_port_device_type.svg" />
返回所选端口连接的设备类型。

- 类型：数值积木（Reporter）
- 常见用途：在运行依赖特定设备的逻辑前先检测已连接设备

### `设备加速度计` {#block_sensors_device_accelerometer_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_accelerometer_sensor_data.svg')} alt="block_sensors_device_accelerometer_sensor_data.svg" />
返回设备传感器的原始加速度计数值。

- 轴选项：`x`、`y`、`z`

### `设备加速度` {#block_sensors_device_acceleration_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_acceleration_sensor_data.svg')} alt="block_sensors_device_acceleration_sensor_data.svg" />
返回设备传感器的加速度数据。

- 轴选项：`x`、`y`、`z`

## 朝向与倾斜传感器

### `倾斜` {#block_hubs_all_sensors_tilt}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_tilt.svg')} alt="block_hubs_all_sensors_tilt.svg" />
返回所选轴的倾斜角度。

- 轴选项：`俯仰`、`横滚`、`偏航`
- 说明：`偏航` 仅在支持偏航数据的主控上可用。

### `获取朝向` {#block_hubs_sensors_get_orientation}
<img src={useBaseUrl('/img/blocks/block_hubs_sensors_get_orientation.svg')} alt="block_hubs_sensors_get_orientation.svg" />
返回主控当前朝向状态。

- 输出格式选项：`文本`、`索引`
- 朝向取值：`前`、`上`、`右`、`后`、`下`、`左`

### `朝上方向是否为` {#block_hubs_all_sensors_is_orientation_up}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_orientation_up.svg')} alt="block_hubs_all_sensors_is_orientation_up.svg" />
检查主控朝向是否与所选“朝上”方向一致。

- 朝向选项：`前`、`上`、`右`、`后`、`下`、`左`

### `设置倾斜朝向` {#block_hubs_sensors_set_tilt_orientation}
<img src={useBaseUrl('/img/blocks/block_hubs_sensors_set_tilt_orientation.svg')} alt="block_hubs_sensors_set_tilt_orientation.svg" />
配置倾斜/朝向相关积木使用的朝向参考。

- 朝向选项：`前`、`上`、`右`、`后`、`下`、`左`

## 计时器与设备运动传感器

### `计时器` {#block_sensors_timer_value_float}
<img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
返回计时器值（秒）。

### `重置计时器` {#block_sensors_timer_reset}
<img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
将计时器重置为零。

## 端口传感器积木

### `Technic 距离传感器` {#block_hubs_all_sensors_port_technic_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_distance.svg')} alt="block_hubs_all_sensors_port_technic_sensor_distance.svg" />
返回 Technic 距离传感器的距离值。

- 单位选项：`毫米`、`厘米`、`英寸`、`百分比`

### `Technic 当距离为` {#block_hubs_all_sensors_port_technic_sensor_when_distance_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg" />
触发/检查 Technic 距离传感器的距离条件。

- 比较选项：`小于`、`大于`、`等于`
- 单位选项：`毫米`、`厘米`、`英寸`、`百分比`

### `Technic 颜色传感器值` {#block_hubs_all_sensors_port_technic_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_color.svg" />
返回 Technic 距离传感器检测到的颜色值。

- 输出选项：`数值`、`字符串`

### `Technic 当颜色为` {#block_hubs_all_sensors_port_technic_sensor_when_color_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_color_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_color_is.svg" />
当检测到的颜色与所选颜色匹配时触发/检查。

### `Technic 反射光` {#block_hubs_all_sensors_port_technic_sensor_reflected_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_reflected_light.svg" />
返回反射光强度。

### `Technic 当反射光为` {#block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg" />
触发/检查反射光阈值条件。

- 比较选项：`<`、`=`、`>`

### `Technic 环境光` {#block_hubs_all_sensors_port_technic_sensor_ambient_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_ambient_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_ambient_light.svg" />
返回环境光强度。

### `Technic 当环境光为` {#block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is.svg" />
触发/检查环境光阈值条件。

- 比较选项：`<`、`=`、`>`

### `Technic 原始颜色` {#block_hubs_all_sensors_port_technic_sensor_raw_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_raw_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_raw_color.svg" />
返回 Technic 传感器的原始颜色通道值。

- 通道选项：`红`、`绿`、`蓝`

### `BOOST 传感器距离` {#block_hubs_all_sensors_port_boost_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_distance.svg" />
返回 BOOST 距离传感器的距离值。

- 单位选项：`百分比`、`厘米`、`英寸`

### `BOOST 当距离为` {#block_hubs_all_sensors_port_boost_sensor_when_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_distance.svg" />
触发/检查 BOOST 距离传感器的距离条件。

- 比较选项：`小于`、`大于`、`等于`
- 单位选项：`百分比`、`厘米`、`英寸`

### `BOOST 传感器颜色` {#block_hubs_all_sensors_port_boost_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_color.svg" />
返回 BOOST 传感器检测到的颜色。

- 输出选项：`数值`、`字符串`

### `BOOST 是否为颜色` {#block_hubs_all_sensors_port_boost_sensor_is_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_is_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_is_color.svg" />
检查 BOOST 传感器当前是否检测到所选颜色。

### `BOOST 反射光` {#block_hubs_all_sensors_port_boost_sensor_reflected_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_boost_sensor_reflected_light.svg" />
返回 BOOST 传感器的反射光数值。

### `BOOST 当反射光为` {#block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg" />
触发/检查 BOOST 传感器的反射光阈值条件。

- 比较选项：`<`、`=`、`>`

### `Technic Move 设置功率模式` {#block_hubs_technicmove_sensors_set_power_mode}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_sensors_set_power_mode.svg')} alt="block_hubs_technicmove_sensors_set_power_mode.svg" />
设置 Technic Move 功率模式。

- 模式选项：`正常`、`增压`

### `WeDo 2 距离` {#block_hubs_all_sensors_port_wedo2_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_sensor_distance.svg')} alt="block_hubs_all_sensors_port_wedo2_sensor_distance.svg" />
返回 WeDo 2 距离传感器的距离值。

- 单位选项：`百分比`、`厘米`、`英寸`

### `WeDo 2 倾斜` {#block_hubs_all_sensors_port_wedo2_tilt}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_tilt.svg')} alt="block_hubs_all_sensors_port_wedo2_tilt.svg" />
返回 WeDo 2 倾斜传感器的倾斜值。

- 轴选项：`俯仰`、`横滚`