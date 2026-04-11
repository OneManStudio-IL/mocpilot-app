---
id: Variables
title: 変数
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 変数

変数は値を保存し、ブロックスタックやスクリプト間で読み取りおよび更新することができます。

## 変数操作ブロック

### `変数を〜にする` {#block_variables_set_to}

<img src={useBaseUrl('/img/blocks/block_variables_set_to.svg')} alt="block_variables_set_to.svg" />

選択した変数に指定した値を設定します。

- タイプ: コマンドブロック
- 使用例: 初期化、値の上書き

### `変数を〜ずつ変える` {#block_variables_change_by}

<img src={useBaseUrl('/img/blocks/block_variables_change_by.svg')} alt="block_variables_change_by.svg" />

選択した変数に指定した値を加算します。

- タイプ: コマンドブロック
- 使用例: カウンター、スコア、累積距離や時間

## 変数値レポーター

<img src={useBaseUrl('/img/blocks/variable.svg')} alt="variable.svg" />

選択した変数の現在の値を返します。

- タイプ: レポーターブロック
- 使用例: 条件や演算、コマンド入力で使用