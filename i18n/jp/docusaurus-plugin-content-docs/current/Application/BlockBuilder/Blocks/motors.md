---
id: Motors
title: モーター
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# モーター

モーターブロックは、ハブのポートに接続されたモーターの開始、停止、位置制御、および動作調整に使用されます。

## 基本モーター制御ブロック

### `モーターを開始` {#block_hubs_all_motors_port_start_motor}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor.svg')} alt="block_hubs_all_motors_port_start_motor.svg" />
選択したモーターを開始します。

- 方向オプション: `時計回り`, `反時計回り`

### `モーターを停止` {#block_hubs_all_motors_port_stop_motor}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_stop_motor.svg')} alt="block_hubs_all_motors_port_stop_motor.svg" />
選択したモーターを停止します。

### `〜の間動かす` {#block_hubs_all_motors_port_run_for}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for.svg')} alt="block_hubs_all_motors_port_run_for.svg" />
指定した時間／角度／回転数の間モーターを動かします。

- 方向オプション: `時計回り`, `反時計回り`
- 単位オプション: `回転`, `度`, `秒`
- 注: エンコーダ対応モーターが必要です。

### `速度を指定してモーターを開始` {#block_hubs_all_motors_port_start_motor_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor_at_speed.svg')} alt="block_hubs_all_motors_port_start_motor_at_speed.svg" />
指定した速度でモーターを開始します。

### `速度を指定して〜の間動かす` {#block_hubs_all_motors_port_run_for_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for_at_speed.svg')} alt="block_hubs_all_motors_port_run_for_at_speed.svg" />
指定した速度で一定時間／量モーターを動かします。

- 単位オプション: `回転`, `度`, `秒`
- 注: エンコーダ対応モーターが必要です。

### `モーター速度を設定` {#block_hubs_all_motors_port_set_motor_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_speed.svg')} alt="block_hubs_all_motors_port_set_motor_speed.svg" />
他のモーターブロックで使用される速度を設定します。

## 位置制御ブロック

### `位置へ移動` {#block_hubs_all_motors_port_go_to_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_position.svg')} alt="block_hubs_all_motors_port_go_to_position.svg" />
指定した絶対位置へ移動します。

- 経路オプション: `最短`, `時計回り`, `反時計回り`
- 注: エンコーダ対応モーターが必要です。

### `相対位置へ移動` {#block_hubs_all_motors_port_go_to_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_relative_position.svg')} alt="block_hubs_all_motors_port_go_to_relative_position.svg" />
現在位置からの相対量で移動します。

- 注: エンコーダ対応モーターが必要です。

### `BuWizz 3 相対位置へ移動` {#block_hubs_buwizz3_motors_port_go_to_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_motors_port_go_to_relative_position.svg')} alt="block_hubs_buwizz3_motors_port_go_to_relative_position.svg" />
BuWizz 3用の相対位置移動ブロックです。

- 注: エンコーダ対応モーターが必要です。

### `相対位置を設定` {#block_hubs_all_motors_port_set_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_relative_position.svg')} alt="block_hubs_all_motors_port_set_relative_position.svg" />
相対位置の基準を設定します。

- 注: エンコーダ対応モーターが必要です。

### `ステアリングをキャリブレーション` {#block_hubs_all_motors_port_calibrate_steering_rack}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_calibrate_steering_rack.svg')} alt="block_hubs_all_motors_port_calibrate_steering_rack.svg" />
ステアリングの基準位置をキャリブレーションします。

- 要件: エンコーダ対応モーターが必要です。
- 機械条件: ステアリングの可動範囲に物理的制限が必要です。
- 動作: 可動範囲を測定し、キャリブレーションデータを計算します。
- 出力: 結果は引数として渡された変数に書き込まれます。

## モーター調整・安全ブロック

### `停止時の動作を設定` {#block_hubs_all_motors_port_set_motor_to_at_stop}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_to_at_stop.svg')} alt="block_hubs_all_motors_port_set_motor_to_at_stop.svg" />
停止時の動作モードを設定します。

- オプション: `ブレーキ`, `位置保持`, `惰性`
- 注: エンコーダ対応モーターが必要です。

### `スタック検出を設定` {#block_hubs_all_motors_port_set_motors_stall_detection}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motors_stall_detection.svg')} alt="block_hubs_all_motors_port_set_motors_stall_detection.svg" />
スタック（停止）検出を有効／無効にします。

- 注: MINDSTORMS Robot Inventorのみ対応

### `加速を設定` {#block_hubs_all_motors_port_set_acceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_acceleration.svg')} alt="block_hubs_all_motors_port_set_acceleration.svg" />
加速プロファイルを設定します。

- オプション: `デフォルト`, `速い`, `バランス`, `スムーズ`, `遅い`, `とても遅い`
- 注: エンコーダ対応モーターが必要です。

### `減速を設定` {#block_hubs_all_motors_port_set_deceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_deceleration.svg')} alt="block_hubs_all_motors_port_set_deceleration.svg" />
減速プロファイルを設定します。

- オプション: `デフォルト`, `速い`, `バランス`, `スムーズ`, `遅い`, `とても遅い`
- 注: エンコーダ対応モーターが必要です。

## モーターレポーターブロック

### `位置` {#block_hubs_all_motors_port_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_position.svg')} alt="block_hubs_all_motors_port_position.svg" />
現在の位置を返します。

### `相対位置` {#block_hubs_all_motors_port_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_relative_position.svg')} alt="block_hubs_all_motors_port_relative_position.svg" />
現在の相対位置を返します。

### `速度` {#block_hubs_all_motors_port_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_speed.svg')} alt="block_hubs_all_motors_port_speed.svg" />
現在の速度を返します。

### `出力` {#block_hubs_all_motors_port_power}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_power.svg')} alt="block_hubs_all_motors_port_power.svg" />
現在の出力値を返します。

- 注: MINDSTORMS Robot Inventorのみ対応

## Technic Move モーターブロック

### `モーターを速度で開始` {#block_hubs_technicmove_motors_start_motors_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_start_motors_at_speed.svg')} alt="block_hubs_technicmove_motors_start_motors_at_speed.svg" />
Technic Moveの駆動モーターを指定速度で開始します。

### `モーターを停止` {#block_hubs_technicmove_motors_stop_motors}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_stop_motors.svg')} alt="block_hubs_technicmove_motors_stop_motors.svg" />
Technic Moveの駆動モーターを停止します。

### `ブレーキ` {#block_hubs_technicmove_motors_brake}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_brake.svg')} alt="block_hubs_technicmove_motors_brake.svg" />
ブレーキ動作を適用します。

- オプション: `オフ`, `オン`

### `ステアリングを〜に設定` {#block_hubs_technicmove_motors_set_steering_rack_to}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_set_steering_rack_to.svg')} alt="block_hubs_technicmove_motors_set_steering_rack_to.svg" />
ステアリング位置を設定します。

### `ステアリングをキャリブレーション` {#block_hubs_technicmove_motors_calibrate_steering_rack}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_calibrate_steering_rack.svg')} alt="block_hubs_technicmove_motors_calibrate_steering_rack.svg" />
Technic Moveのステアリングをキャリブレーションします。

- 注: モーター軸には物理的な可動制限が必要です。