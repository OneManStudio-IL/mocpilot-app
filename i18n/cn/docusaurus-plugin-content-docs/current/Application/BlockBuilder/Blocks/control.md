---
id: Control
title: 控制
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 控制

控制类积木用于管理执行流程：等待、循环、分支以及停止脚本。

## 等待积木

### `等待` {#block_control_wait_for}

<img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />

将当前脚本暂停指定时间。

### `等待直到` {#block_control_wait_until}

<img src={useBaseUrl('/img/blocks/block_control_wait_until.svg')} alt="block_control_wait_until.svg" />

将当前脚本暂停，直到条件变为真。

## 循环积木

### `重复` {#block_control_repeat_for}

<img src={useBaseUrl('/img/blocks/block_control_repeat_for.svg')} alt="block_control_repeat_for.svg" />

按固定次数重复执行嵌套积木。

### `重复直到` {#block_control_repeat_until}

<img src={useBaseUrl('/img/blocks/block_control_repeat_until.svg')} alt="block_control_repeat_until.svg" />

重复执行嵌套积木，直到条件变为真。

### `永远重复` {#block_control_repeat_forever}

<img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />

持续执行嵌套积木，直到程序或脚本被停止。

## 分支积木

### `如果` {#block_control_if}

<img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />

仅在条件为真时执行嵌套积木。

### `如果 / 否则` {#block_control_if_else}

<img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />

当条件为真时执行一个分支，否则执行另一个分支。

### `执行这个和这个` {#block_control_do_this_and_this}

<img src={useBaseUrl('/img/blocks/block_control_do_this_and_this.svg')} alt="block_control_do_this_and_this.svg" />

在一次控制流程操作中，按顺序执行两个积木堆。

## 停止积木

### `停止` {#block_control_stop}

<img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />

停止脚本执行（作用范围取决于所选停止选项）。

- 停止选项：`全部`、`当前积木堆`、`并退出程序`

### `停止其他积木堆` {#block_control_stop_other_stacks}

<img src={useBaseUrl('/img/blocks/block_control_stop_other_stacks.svg')} alt="block_control_stop_other_stacks.svg" />

停止所有其他正在运行的积木堆，同时允许当前积木堆继续执行。

## 主控/控制工具积木

### `设置连接` {#block_hubs_control_set_connect}

<img src={useBaseUrl('/img/blocks/block_hubs_control_set_connect.svg')} alt="block_hubs_control_set_connect.svg" />

在控制流程逻辑中控制主控连接状态。

- 动作选项：`连接`、`断开连接`

### `是否已连接` {#block_hubs_all_sensors_is_connected}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_connected.svg')} alt="block_hubs_all_sensors_is_connected.svg" />

返回主控当前是否已连接。

- 类型：布尔数值积木

### `BuWizz 2 设置功率模式` {#block_hubs_buwizz_sensors_set_power_mode}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_set_power_mode.svg')} alt="block_hubs_buwizz_sensors_set_power_mode.svg" />

设置 BuWizz 2 主控功率模式。

- 模式选项：`Slow`, `Normal`, `Fast`, `Ludicrous`

### `BuWizz 2 获取功率模式` {#block_hubs_buwizz_sensors_get_power_mode}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_get_power_mode.svg')} alt="block_hubs_buwizz_sensors_get_power_mode.svg" />

返回当前激活的 BuWizz 2 功率模式。

- 输出格式选项：`文本`、`索引`

### `MouldKing 设置控制通道` {#block_hubs_mouldking_control_set_control_channel}

<img src={useBaseUrl('/img/blocks/block_hubs_mouldking_control_set_control_channel.svg')} alt="block_hubs_mouldking_control_set_control_channel.svg" />

为受支持的 MouldKing 主控/控制器设置当前控制通道。

- 通道选项：`A`、`B`、`C`

### `MouldKing 获取控制通道` {#block_hubs_mouldking_control_get_control_channel}

<img src={useBaseUrl('/img/blocks/block_hubs_mouldking_control_get_control_channel.svg')} alt="block_hubs_mouldking_control_get_control_channel.svg" />

返回受支持的 MouldKing 主控/控制器当前控制通道。

- 输出格式选项：`文本`、`索引`