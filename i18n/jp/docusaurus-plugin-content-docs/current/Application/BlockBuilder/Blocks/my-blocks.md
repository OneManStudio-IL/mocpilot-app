---
id: MyBlocks
title: マイブロック
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# マイブロック

マイブロックを使用すると、独自のカスタムブロックを作成できます。  
この機能は従来のプログラミングにおける関数に似ており、処理を一度定義して何度でも呼び出すことができます。

## 基本マイブロック

### `ブロックを作成`

新しいカスタムブロックを定義します。

- タイプ: 定義／設定ブロック
- 使用例: 繰り返し処理を1つの名前付きブロックにまとめる

### `マイブロック`（呼び出し）

作成済みのカスタムブロックを呼び出します。

- タイプ: スタックブロック（カスタムコマンド呼び出し）
- 使用例: 同じ処理を複数箇所で再利用する

## 可変引数の例

以下は異なる引数構成を持つマイブロックの例です。

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758091855.svg')} alt="block_myblock_1775758091855.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758113259.svg')} alt="block_myblock_1775758113259.svg" />
</div>

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758130609.svg')} alt="block_myblock_1775758130609.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758145135.svg')} alt="block_myblock_1775758145135.svg" />
</div>

## プログラム内での使用例

<img src={useBaseUrl('/img/my-blocks/my-blocks-usage-example.png')} alt="my-blocks-usage-example.png" />

この例では、`プログラム開始時` の下でカスタムブロックが呼び出され、  
`マイブロックの定義` スタック内には再利用可能なモーター制御ロジックが含まれています。

- 一般的な流れ: イベントブロックからカスタムブロックを呼び出す
- メリット: 1つの定義で複数箇所から利用可能

## マイブロックエディター

<img src={useBaseUrl('/img/my-blocks/my-blocks-editor-cropped.png')} alt="my-blocks-editor-cropped.png" />

「ブロックを作成」エディターでは、カスタムブロックの構造を設計できます。  
ラベルや入力（数値／テキスト／ブールなど）を追加し、定義スタック内で処理を実装します。

## マイブロックを使う理由

- 再利用性: 一度作成すれば何度でも使用可能
- 可読性: 長い処理をわかりやすい名前に置き換えられる
- 保守性: 修正は1か所だけで済む
- 構造化: 大きなプログラムを小さな単位に分割できる

## 注意

- カスタムブロックはプロジェクト単位で管理されます。
- 実装ではなく目的がわかる名前を付けることを推奨します。