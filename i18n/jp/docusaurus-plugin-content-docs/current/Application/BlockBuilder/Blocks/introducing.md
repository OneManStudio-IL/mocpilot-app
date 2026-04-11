---
id: BlocksIntroducing
title: ブロック紹介
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# ブロック紹介

MOCPilotは、Scratchに似た見た目と操作感を持つビジュアルブロックプログラミングシステムを使用しています。  
各ブロックは特定の役割を持ち、有効な組み合わせによってスクリプト内の制御フローとデータフローが定義されます。  
ドラッグ＆ドロップ操作とScratch風のインタラクションにより、直感的で使いやすいプログラム作成が可能です。

:::warning 互換性に関する注意
これは独自のブロックシステムであり、専用のブロックセットと動作仕様を持っています。  
MOCPilotのプログラムはScratchプロジェクトと互換性がありません。  
MOCPilotのプログラムをScratchにインポートすることはできず、ScratchのプログラムもMOCPilotにインポートできません。
:::

## ブロックの形状と意味

### ハットブロック

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />
  <img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />
</div>

特定のイベントが発生したときにスクリプトを開始します。ブロックは下にのみ接続できます。

---

### スタックブロック

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
</div>

処理を実行する基本的なコマンドブロックです。

---

### C型ブロック

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />
</div>

内側にブロックを入れることができるC字型の制御ブロック（ループや条件分岐）。

---

### レポーターブロック

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />
</div>

数値や文字列などの値を返します。

---

### ブールブロック

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />
</div>

`true` または `false` のみを返し、主に条件で使用されます。

---

### キャップブロック

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />
</div>

スクリプトを終了し、下にブロックを接続できません。

---

### ブロックスタック

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks_stack.svg')} alt="blocks_stack.svg" />
</div>

ブロックスタックは、複数のブロックを連結した一連の処理です。  
上から下へ順番に実行されます。  
通常、イベントブロックから開始され、接続されたブロックが順に実行されます。

---

## スクリプト実行モデル

- スクリプトは通常、イベントブロックから開始されます。
- 接続されたブロックは上から下へ実行されます。
- 複数のスクリプトは並列に実行されます。
- メッセージ／ブロードキャストでスクリプトを同期できます。
- ブロックスタックは一連の処理単位です。

## データと値

- レポーターブロックは他のブロックの入力としてネストできます。
- 変数は値を保存し、スクリプト間で再利用できます。
- リストは履歴やキューなどのデータを保持します。

## イベントとタイミング

- イベントブロックはユーザー入力、ハブ状態、センサー、メッセージに反応します。
- タイマーやセンサーイベントは頻繁に発生する場合があります。
- 閾値やフィルタ、短い待機を使って過剰なトリガーを抑えます。

## ハブ・ポート・コントローラー

- ハブブロックは特定のハブやポートに対応します。
- 一部のブロックは特定のデバイスでのみ利用可能です。
- ダッシュボードやゲームパッドブロックは入力とUI制御を提供します。

## 推奨ワークフロー

1. イベントブロック1つと最小構成で開始する。
2. モーターやセンサーの方向・範囲を早期に確認する。
3. 繰り返し処理はメッセージで分離する。
4. 最終調整前に安全対策（制限・停止など）を追加する。

## よくあるミス

- イベントブロックがないとスクリプトは開始されません。
- ハブやポート設定の誤りで動作しない場合があります。
- 型の不一致（文字列／数値／ブール）に注意。
- 高頻度イベントの未制御で動作が不安定になる可能性があります。

## このセクションの構成

以下の順序でカテゴリページを参照してください：

- ライト
- モーター
- センサー
- イベント
- コントロール
- 演算
- 変数
- リスト
- マイブロック
- ダッシュボードコントローラー
- ゲームパッド