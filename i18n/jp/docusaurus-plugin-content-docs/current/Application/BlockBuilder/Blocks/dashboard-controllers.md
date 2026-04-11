---
id: DashboardControllers
title: ダッシュボードコントローラー
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# ダッシュボードコントローラー

これらのブロックは、画面上のコントロールからユーザー入力を取得し、ユーザー操作に反応し、ダッシュボードのUI状態を更新するために使用されます。

## グローバルダッシュボードコントローラーブロック

### `コントローラーの色を設定` {#block_dashboard_controller_all_set_color}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_color.svg')} alt="block_dashboard_controller_all_set_color.svg" />

選択したダッシュボードコントローラーの表示アクセントカラーを変更します。

- タイプ: コマンドブロック
- 使用例: 実行時の状態を示す、または条件に応じてコントローラーのスタイルを動的に変更する

### `コントローラーの操作性を設定` {#block_dashboard_controller_all_set_interactivity}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_interactivity.svg')} alt="block_dashboard_controller_all_set_interactivity.svg" />

選択したダッシュボードコントローラーの操作可否を制御します。  
操作が無効の場合、コントローラーはタッチ入力に反応しません。

- タイプ: コマンドブロック
- 使用例: 特定のロジックや安全状態の間、一時的に操作をロックする
- 状態オプション: `有効`, `無効`

## ボタンブロック

### `ボタンイベント` {#block_dashboard_controller_button_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_event.svg')} alt="block_dashboard_controller_button_event.svg" />

ダッシュボードボタンの状態が変化したときに実行されます（押下／解放）。

- タイプ: イベントブロック
- 出力: 接続されたスクリプトを開始
- 状態オプション: `押された`, `離された`

### `ボタン値（ブール）` {#block_dashboard_controller_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_value_boolean.svg')} alt="block_dashboard_controller_button_value_boolean.svg" />

現在のボタン状態を返します。

- タイプ: 値ブロック
- 出力: `true` / `false`
- 状態オプション: `押された`, `離された`

## 十字キー（D-pad）ブロック

### `十字キーイベント` {#block_dashboard_controller_dpad_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_event.svg')} alt="block_dashboard_controller_dpad_event.svg" />

方向が変化したとき、または設定した方向と一致したときに実行されます。

- タイプ: イベントブロック
- 出力: 接続されたスクリプトを開始
- 方向オプション: `上`, `下`, `左`, `右`
- 状態オプション: `押された`, `離された`

### `十字キー値（ブール）` {#block_dashboard_controller_dpad_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_value_boolean.svg')} alt="block_dashboard_controller_dpad_value_boolean.svg" />

選択した方向がアクティブかどうかを返します。

- タイプ: 値ブロック
- 出力: `true` / `false`
- 方向オプション: `上`, `下`, `左`, `右`
- 状態オプション: `押された`, `離された`

## ジョイスティックブロック

### `ジョイスティックイベント` {#block_dashboard_controller_joystick_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_event.svg')} alt="block_dashboard_controller_joystick_event.svg" />

ジョイスティックの位置が変化したときに実行されます。

- タイプ: イベントブロック
- 出力: 接続されたスクリプトを開始
- 状態オプション: `上`, `下`, `左`, `右`, `移動`, `解放`

### `ジョイスティック値（数値）` {#block_dashboard_controller_joystick_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_value_float.svg')} alt="block_dashboard_controller_joystick_value_float.svg" />

ジョイスティックの軸の値を返します。

- タイプ: 値ブロック
- 出力: 数値（float）
- 軸オプション: `X軸`, `Y軸`

## ペダルブロック

### `ペダルイベント` {#block_dashboard_controller_pedals_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_event.svg')} alt="block_dashboard_controller_pedals_event.svg" />

ペダル入力が変化したときに実行されます。

- タイプ: イベントブロック
- 出力: 接続されたスクリプトを開始
- ペダルオプション: `任意`, `ブレーキ`, `アクセル`
- 状態オプション: `移動`, `押された`, `離された`

### `ペダル値（数値）` {#block_dashboard_controller_pedals_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_float.svg')} alt="block_dashboard_controller_pedals_value_float.svg" />

ペダルのアナログ値を返します。

- タイプ: 値ブロック
- 出力: 数値（float）

### `ペダル値（ブール）` {#block_dashboard_controller_pedals_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_boolean.svg')} alt="block_dashboard_controller_pedals_value_boolean.svg" />

ペダルが押されたかどうかに基づいた状態を返します。

- タイプ: 値ブロック
- 出力: `true` / `false`
- ペダルオプション: `ブレーキ`, `アクセル`
- 状態オプション: `押された`, `離された`

## スライダーブロック

### `スライダーイベント` {#block_dashboard_controller_slider_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_event.svg')} alt="block_dashboard_controller_slider_event.svg" />

スライダーの値が変化したときに実行されます。

- タイプ: イベントブロック
- 出力: 接続されたスクリプトを開始
- 状態オプション: `低`, `高`, `移動`, `解放`

### `スライダー値（数値）` {#block_dashboard_controller_slider_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_value_float.svg')} alt="block_dashboard_controller_slider_value_float.svg" />

現在のスライダー値を返します。

- タイプ: 値ブロック
- 出力: 数値（float）

## ステッパーブロック

### `ステッパーイベント` {#block_dashboard_controller_stepper_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_event.svg')} alt="block_dashboard_controller_stepper_event.svg" />

ステップ単位で値が変化したときに実行されます。

- タイプ: イベントブロック
- 出力: 接続されたスクリプトを開始
- ステップオプション: `任意`, `リセット`, `マイナス`, `プラス`
- 状態オプション: `押された`, `離された`

### `ステッパー値（数値）` {#block_dashboard_controller_stepper_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_value_float.svg')} alt="block_dashboard_controller_stepper_value_float.svg" />

現在のステッパー値を返します。

- タイプ: 値ブロック
- 出力: 数値（float）

## ステアリングホイールブロック

### `ステアリングイベント` {#block_dashboard_controller_steering_wheel_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_event.svg')} alt="block_dashboard_controller_steering_wheel_event.svg" />

ハンドルの位置が変化したときに実行されます。

- タイプ: イベントブロック
- 出力: 接続されたスクリプトを開始
- 状態オプション: `移動`, `押された`, `離された`

### `ステアリング値（数値）` {#block_dashboard_controller_steering_wheel_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_value_float.svg')} alt="block_dashboard_controller_steering_wheel_value_float.svg" />

現在のステアリング値を返します。

- タイプ: 値ブロック
- 出力: 数値（float）

### `ステアリング値（ブール）` {#block_dashboard_controller_steeringwheel_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steeringwheel_value_boolean.svg')} alt="block_dashboard_controller_steeringwheel_value_boolean.svg" />

ハンドルの押下状態を返します。

- タイプ: 値ブロック
- 出力: `true` / `false`
- 状態オプション: `移動`, `押された`, `離された`

## スイッチブロック

### `スイッチイベント` {#block_dashboard_controller_switch_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_event.svg')} alt="block_dashboard_controller_switch_event.svg" />

スイッチの状態が変化したときに実行されます。

- タイプ: イベントブロック
- 出力: 接続されたスクリプトを開始
- 切替オプション: `オン`, `オフ`

### `スイッチ値（ブール）` {#block_dashboard_controller_switch_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_value_boolean.svg')} alt="block_dashboard_controller_switch_value_boolean.svg" />

現在のスイッチ状態を返します。

- タイプ: 値ブロック
- 出力: `true` / `false`
- 状態オプション: `オン`, `オフ`

## モニターブロック

### `モニター表示` {#block_dashboard_controller_monitor_show}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_show.svg')} alt="block_dashboard_controller_monitor_show.svg" />

ダッシュボードモニターに情報（テキストまたは値）を表示します。

- タイプ: コマンドブロック
- 使用例: バッテリー残量、モーター角度、接続デバイスなどの表示

### `モニター値を設定` {#block_dashboard_controller_monitor_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_set_value.svg')} alt="block_dashboard_controller_monitor_set_value.svg" />

スピードメーターモニターの整数値を設定します。

- タイプ: コマンドブロック
- 使用例: 実行中の速度表示更新

### `モニター傾きを設定` {#block_dashboard_controller_monitor_tilt_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_tilt_set_value.svg')} alt="block_dashboard_controller_monitor_tilt_set_value.svg" />

傾きモニター（ピッチ／ロール）の値を設定します。

- タイプ: コマンドブロック
- 使用例: 傾き値のリアルタイム表示
- 軸オプション: `ピッチ`, `ロール`