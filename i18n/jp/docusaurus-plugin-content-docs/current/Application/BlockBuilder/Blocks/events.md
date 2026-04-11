---
id: Events
title: イベント
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# イベント

**イベント**カテゴリには、特定の条件が発生したときにスクリプトを開始するブロックが含まれます。

## 基本イベント

### `プログラム開始時` {#block_event_when_program_started}

<img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />

プロファイルのプログラムが開始されたときに、このスクリプトを一度だけ実行します。

- トリガー: プログラム起動
- 使用例: 変数の初期化、モーターの初期状態設定、起動音の再生

### `〜のとき` {#block_event_when}

<img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />

選択した条件が真になったときに実行されます。

- トリガー: 条件ベース
- 使用例: 実行中の状態に応じた分岐処理

### `タイマーが〜より大きいとき` {#block_event_when_timer_greater_than}

<img src={useBaseUrl('/img/blocks/block_event_when_timer_greater_than.svg')} alt="block_event_when_timer_greater_than.svg" />

タイマーの値が指定値を超えたときに実行されます。

- トリガー: 経過時間
- 使用例: 遅延処理、時間ベースのフェーズ制御

### `メッセージを受信したとき` {#block_event_when_message_recieved}

<img src={useBaseUrl('/img/blocks/block_event_when_message_recieved.svg')} alt="block_event_when_message_recieved.svg" />

一致するブロードキャストメッセージを受信したときにスクリプトを開始します。

- トリガー: メッセージチャンネル
- 使用例: 複数スクリプトの同期

### `ブロードキャスト` {#block_event_broadcast}

<img src={useBaseUrl('/img/blocks/block_event_broadcast.svg')} alt="block_event_broadcast.svg" />

そのメッセージを待機しているすべてのスクリプトに送信します。

- トリガー: 即時送信
- 使用例: 他のスクリプトへ通知（待機なし）

### `ブロードキャストして待機` {#block_event_broadcast_and_wait}

<img src={useBaseUrl('/img/blocks/block_event_broadcast_and_wait.svg')} alt="block_event_broadcast_and_wait.svg" />

メッセージを送信し、受信側の処理が完了するまでこのスクリプトを一時停止します。

- トリガー: 即時送信＋待機
- 使用例: 実行順序が重要な処理フロー

## ハブイベント

### `ハブボタンが押されたとき` {#block_hubs_all_event_button_pressed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_button_pressed.svg')} alt="block_hubs_all_event_button_pressed.svg" />

ハブのメインボタンが押されたときに実行されます。

- 状態オプション: `押された`, `離された`, `変更された`
- 注: 利用可能なボタンはハブモデルによって異なります。

### `ハブ接続が変更されたとき` {#block_hubs_all_event_connection_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_connection_changed.svg')} alt="block_hubs_all_event_connection_changed.svg" />

ハブの接続状態が変化したときに実行されます（接続／切断）。

- トリガー: 接続状態の変化
- 使用例: 再接続処理や安全なフォールバック動作

### `ハブバッテリーが変化したとき` {#block_hubs_all_event_battery_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_battery_changed.svg')} alt="block_hubs_all_event_battery_changed.svg" />

ハブのバッテリーレベルが変化したときに実行されます。

- トリガー: バッテリー更新
- 使用例: 低電力警告や省電力モードへの切替

### `ハブ加速度が変化したとき` {#block_hubs_all_event_accelerometer_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_accelerometer_changed.svg')} alt="block_hubs_all_event_accelerometer_changed.svg" />

加速度の値が変化したときに実行されます。

### `ハブ傾きが変化したとき` {#block_hubs_all_event_tilt_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_changed.svg')} alt="block_hubs_all_event_tilt_changed.svg" />

傾きの値が変化したときに実行されます。

- 角度オプション: `任意`, `ピッチ`, `ロール`, `ヨー`
- 注: `ヨー`は対応ハブのみ利用可能

### `ハブ向きが変化したとき` {#block_hubs_all_event_tilt_orientation_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_orientation_changed.svg')} alt="block_hubs_all_event_tilt_orientation_changed.svg" />

向き（前／上／下／左／右）が変化したときに実行されます。

## センサーポートイベント

### `Technic カラーセンサーイベント` {#block_hubs_all_event_port_technic_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_color.svg')} alt="block_hubs_all_event_port_technic_sensor_color.svg" />

Technicカラーセンサーが指定した色を検出したときに実行されます。

### `Technic 距離センサーイベント` {#block_hubs_all_event_port_technic_sensor_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_distance.svg')} alt="block_hubs_all_event_port_technic_sensor_distance.svg" />

距離センサーの値が条件に一致したときに実行されます。

- 比較オプション: `より近い`, `より遠い`, `正確に`
- 単位オプション: `mm`, `cm`, `インチ`, `%`
- 注: 単位はセンサーモードに依存

### `BOOST 距離センサーイベント` {#block_hubs_all_event_port_boost_sensor_when_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_event_port_boost_sensor_when_distance.svg" />

BOOST距離センサーが条件に達したときに実行されます。

- 比較オプション: `より近い`, `より遠い`, `正確に`
- 単位オプション: `%`, `cm`, `インチ`

### `BOOST カラーセンサーイベント` {#block_hubs_all_event_port_boost_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_color.svg')} alt="block_dashboard_controller_boost_sensor_color.svg" />

BOOSTセンサーが指定された色または値を検出したときに実行されます。
