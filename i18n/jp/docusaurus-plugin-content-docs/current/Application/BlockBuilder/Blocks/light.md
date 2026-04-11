---
id: Light
title: ライト
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# ライト

このページでは、対応するハブのLEDやライト出力を制御するためのライトカテゴリブロックについて説明します。

## 共通ライトブロック

### `LEDの色を設定` {#block_hubs_all_light_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_led_color.svg')} alt="block_hubs_all_light_set_led_color.svg" />

事前定義された色を使用してハブのLEDカラーを設定します。

- タイプ: コマンドブロック
- 使用例: 状態表示（待機中、動作中、警告、エラー）

### `ライトを〜にする` {#block_hubs_all_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_to.svg')} alt="block_hubs_all_light_light_turn_to.svg" />

選択したライト出力を指定した明るさ／値に設定します。

- タイプ: コマンドブロック
- 使用例: ヘッドライトの明るさ調整、状態の強度表示

### `ライトをオフ` {#block_hubs_all_light_light_turn_off}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_off.svg')} alt="block_hubs_all_light_light_turn_off.svg" />

選択したライト出力をオフにします。

- タイプ: コマンドブロック
- 使用例: シャットダウン処理、省電力動作

### `Technic Move ライトを〜にする` {#block_hubs_technicmove_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_light_light_turn_to.svg')} alt="block_hubs_technicmove_light_light_turn_to.svg" />

Technic Moveハブ用の `ライトを〜にする` のバリエーションです。

- タイプ: コマンドブロック
- 使用例: Moveハブのライト出力レベル設定

## BuWizz 3 ライトブロック

### `BuWizz 3 LEDの色を設定` {#block_hubs_buwizz3_light_port_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color.svg')} alt="block_hubs_buwizz3_light_port_set_led_color.svg" />

選択したBuWizz 3ポートのLEDカラーを設定します（内蔵カラーパレット）。

- タイプ: コマンドブロック

### `BuWizz 3 LEDの色を設定（テキスト）` {#block_hubs_buwizz3_light_port_set_led_color_string}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_string.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_string.svg" />

テキストによる色指定でBuWizz 3のLEDカラーを設定します。

- タイプ: コマンドブロック
- 使用例: 変数による動的な色指定

### `BuWizz 3 LEDの色を設定（RGB）` {#block_hubs_buwizz3_light_port_set_led_color_rgb}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_rgb.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_rgb.svg" />

RGB値を使用してBuWizz 3のLEDカラーを設定します。

- タイプ: コマンドブロック
- 使用例: カスタムカラーやグラデーション制御