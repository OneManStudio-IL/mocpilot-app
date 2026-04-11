---
id: Sensors
title: センサー
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# センサー

センサーブロックは、ハブやデバイスの状態を読み取り、条件分岐、イベント、制御ロジックにデータを提供します。

## デバイス・ハブセンサー

### `ハブのバッテリー残量` {#block_hubs_all_sensors_battery_level}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_battery_level.svg')} alt="block_hubs_all_sensors_battery_level.svg" />
現在のハブのバッテリー残量を返します。

### `デバイスのバッテリー（%）` {#block_sensors_device_battery_level}
<img src={useBaseUrl('/img/blocks/block_sensors_device_battery_level.svg')} alt="block_sensors_device_battery_level.svg" />
MOCPilotが動作している端末（スマートフォン／タブレット）のバッテリー残量（％）を返します。

### `基板温度` {#block_hubs_all_sensors_board_temp}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_board_temp.svg')} alt="block_hubs_all_sensors_board_temp.svg" />
ハブの基板温度を返します。

- `BuWizz 2` および `BuWizz 3` のみ対応

### `ボタンが〜のとき` {#block_hubs_all_sensors_button_pressed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_button_pressed.svg?v=20260409-2258')} alt="block_hubs_all_sensors_button_pressed.svg" />
選択したハブボタンが指定状態と一致するかを判定します。

- 状態オプション: `押された`, `離された`
- ボタン例: `中央`
- 注: 利用可能なボタンはハブにより異なります

### `接続デバイスの種類` {#block_hubs_all_motors_port_device_type}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_device_type.svg')} alt="block_hubs_all_motors_port_device_type.svg" />
指定ポートに接続されているデバイスの種類を返します。

- タイプ: レポーターブロック
- 使用例: 接続機器に応じた処理分岐

### `デバイス加速度センサー` {#block_sensors_device_accelerometer_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_accelerometer_sensor_data.svg')} alt="block_sensors_device_accelerometer_sensor_data.svg" />
デバイスの加速度センサーの生データを返します。

- 軸オプション: `x`, `y`, `z`

### `デバイス加速度` {#block_sensors_device_acceleration_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_acceleration_sensor_data.svg')} alt="block_sensors_device_acceleration_sensor_data.svg" />
デバイスの加速度データを返します。

- 軸オプション: `x`, `y`, `z`

## 姿勢・傾きセンサー

### `傾き` {#block_hubs_all_sensors_tilt}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_tilt.svg')} alt="block_hubs_all_sensors_tilt.svg" />
指定軸の傾き角度を返します。

- 軸オプション: `ピッチ`, `ロール`, `ヨー`
- 注: `ヨー`は対応ハブのみ

### `向きを取得` {#block_hubs_sensors_get_orientation}
<img src={useBaseUrl('/img/blocks/block_hubs_sensors_get_orientation.svg')} alt="block_hubs_sensors_get_orientation.svg" />
現在のハブの向きを返します。

- 出力形式: `テキスト`, `インデックス`
- 値: `前`, `上`, `右`, `後`, `下`, `左`

### `向きが上か` {#block_hubs_all_sensors_is_orientation_up}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_orientation_up.svg')} alt="block_hubs_all_sensors_is_orientation_up.svg" />
指定した向きが「上」と一致するかを判定します。

- 向きオプション: `前`, `上`, `右`, `後`, `下`, `左`

### `傾き基準を設定` {#block_hubs_sensors_set_tilt_orientation}
<img src={useBaseUrl('/img/blocks/block_hubs_sensors_set_tilt_orientation.svg')} alt="block_hubs_sensors_set_tilt_orientation.svg" />
傾き・向きブロックの基準方向を設定します。

- 向きオプション: `前`, `上`, `右`, `後`, `下`, `左`

## タイマー・モーション

### `タイマー` {#block_sensors_timer_value_float}
<img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
秒単位のタイマー値を返します。

### `タイマーをリセット` {#block_sensors_timer_reset}
<img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
タイマーを0にリセットします。

## ポートセンサー

### `Technic 距離センサー` {#block_hubs_all_sensors_port_technic_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_distance.svg')} alt="block_hubs_all_sensors_port_technic_sensor_distance.svg" />
距離センサーの値を返します。

- 単位: `mm`, `cm`, `インチ`, `%`

### `Technic 距離が〜のとき` {#block_hubs_all_sensors_port_technic_sensor_when_distance_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg" />
距離条件を判定します。

- 比較: `より近い`, `より遠い`, `ちょうど`
- 単位: `mm`, `cm`, `インチ`, `%`

### `Technic 色センサー値` {#block_hubs_all_sensors_port_technic_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_color.svg" />
検出された色を返します。

- 出力: `値`, `文字列`

### `Technic 色が〜のとき` {#block_hubs_all_sensors_port_technic_sensor_when_color_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_color_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_color_is.svg" />
指定した色と一致するかを判定します。

### `Technic 反射光` {#block_hubs_all_sensors_port_technic_sensor_reflected_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_reflected_light.svg" />
反射光の強さを返します。

### `Technic 反射光が〜のとき` {#block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg" />
反射光条件を判定します。

- 比較: `<`, `=`, `>`

### `Technic 環境光` {#block_hubs_all_sensors_port_technic_sensor_ambient_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_ambient_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_ambient_light.svg" />
環境光の強さを返します。

### `Technic 環境光が〜のとき` {#block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is.svg" />
環境光条件を判定します。

- 比較: `<`, `=`, `>`

### `Technic 生カラー` {#block_hubs_all_sensors_port_technic_sensor_raw_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_raw_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_raw_color.svg" />
RGBチャンネルの値を返します。

- チャンネル: `赤`, `緑`, `青`

### `BOOST 距離センサー` {#block_hubs_all_sensors_port_boost_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_distance.svg" />
距離を返します。

- 単位: `%`, `cm`, `インチ`

### `BOOST 距離が〜のとき` {#block_hubs_all_sensors_port_boost_sensor_when_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_distance.svg" />
距離条件を判定します。

- 比較: `より近い`, `より遠い`, `ちょうど`

### `BOOST 色センサー` {#block_hubs_all_sensors_port_boost_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_color.svg" />
検出された色を返します。

### `BOOST 色かどうか` {#block_hubs_all_sensors_port_boost_sensor_is_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_is_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_is_color.svg" />
指定色と一致するかを判定します。

### `BOOST 反射光` {#block_hubs_all_sensors_port_boost_sensor_reflected_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_boost_sensor_reflected_light.svg" />
反射光の値を返します。

### `BOOST 反射光が〜のとき` {#block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg" />
反射光条件を判定します。

### `Technic Move 電力モードを設定` {#block_hubs_technicmove_sensors_set_power_mode}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_sensors_set_power_mode.svg')} alt="block_hubs_technicmove_sensors_set_power_mode.svg" />
電力モードを設定します。

- モード: `通常`, `ブースト`

### `WeDo 2 距離センサー` {#block_hubs_all_sensors_port_wedo2_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_sensor_distance.svg')} alt="block_hubs_all_sensors_port_wedo2_sensor_distance.svg" />
距離を返します。

### `WeDo 2 傾き` {#block_hubs_all_sensors_port_wedo2_tilt}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_tilt.svg')} alt="block_hubs_all_sensors_port_wedo2_tilt.svg" />
傾き値を返します。

- 軸: `ピッチ`, `ロール`