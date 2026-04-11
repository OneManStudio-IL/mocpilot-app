---
id: Gamepad
title: ゲームパッド
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# ゲームパッド

ゲームパッドブロックは、コントローラー入力に反応し、現在のゲームパッド状態を取得するために使用されます。

## イベントブロック

### `ゲームパッドのボタンが〜のとき` {#block_gamepad_event_when_button_is}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is.svg')} alt="block_gamepad_event_when_button_is.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is_sony.svg')} alt="block_gamepad_event_when_button_is_sony.svg" />
</div>

選択したゲームパッドボタンが指定した状態と一致したときに実行されます。

- タイプ: イベントブロック
- ボタン（Xbox配置）: `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- ボタン（Sony配置）: `バツ`, `マル`, `シカク`, `サンカク`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- 状態オプション: `押された`, `離された`

### `ゲームパッドの十字キーが〜のとき` {#block_gamepad_event_when_dpad_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_dpad_is.svg')} alt="block_gamepad_event_when_dpad_is.svg" />

十字キーの方向または状態が条件と一致したときに実行されます。

- タイプ: イベントブロック
- 方向オプション: `上`, `下`, `左`, `右`
- 状態オプション: `押された`, `離された`

### `ゲームパッドのスティックが〜のとき` {#block_gamepad_event_when_thumbstick_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_thumbstick_is.svg')} alt="block_gamepad_event_when_thumbstick_is.svg" />

スティックの状態が条件と一致したときに実行されます。

対応内容：

- スティック選択: `左` / `右`
- 方向／状態: `上`, `下`, `左`, `右`, `移動`, `解放`

- タイプ: イベントブロック
- 使用例: スティック操作やリリースに応じた処理

## 値ブロック

### `ゲームパッドボタンの値（ブール）` {#block_gamepad_button_value_boolean}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean.svg')} alt="block_gamepad_button_value_boolean.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean_sony.svg')} alt="block_gamepad_button_value_boolean_sony.svg" />
</div>

選択したボタンの現在の状態を返します。

- タイプ: 値ブロック
- 出力: `true` / `false`
- ボタン（Xbox配置）: `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- ボタン（Sony配置）: `バツ`, `マル`, `シカク`, `サンカク`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- 状態オプション: `押された`, `離された`

### `ゲームパッド十字キーの値（ブール）` {#block_gamepad_dpad_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_gamepad_dpad_button_value_boolean.svg')} alt="block_gamepad_dpad_button_value_boolean.svg" />

選択した方向がアクティブかどうかを返します。

- タイプ: 値ブロック
- 出力: `true` / `false`
- 方向オプション: `上`, `下`, `左`, `右`
- 状態オプション: `押された`, `離された`

### `ゲームパッドスティックの値（数値）` {#block_gamepad_thumbstick_value_float}

<img src={useBaseUrl('/img/blocks/block_gamepad_thumbstick_value_float.svg')} alt="block_gamepad_thumbstick_value_float.svg" />

スティック軸の数値を返します。

- タイプ: 値ブロック
- 出力: 数値（float）
- デフォルト範囲: `-1` ～ `1`
- 設定による範囲: `-100` ～ `100`
- スティック: `左`, `右`
- 軸: `X軸` / `Y軸`

### `トリガー圧力の値（数値）` {#block_gamepad_trigger_pressure_value_float}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float.svg')} alt="block_gamepad_trigger_pressure_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float_sony.svg')} alt="block_gamepad_trigger_pressure_value_float_sony.svg" />
</div>

選択したトリガーの押し込み量を返します。

- タイプ: 値ブロック
- 出力: 数値（float）
- デフォルト範囲: `-1` ～ `1`
- 設定による範囲: `-100` ～ `100`
- トリガー（Xbox配置）: `LT`, `RT`
- トリガー（Sony配置）: `L2`, `R2`