---
id: Lists
title: リスト
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# リスト

リストは順序付きの値の集合を保存し、専用のリスト用レポーターブロックおよびスタックブロックによって操作されます。

## リスト操作ブロック

### `リストに追加` {#block_lists_add}

<img src={useBaseUrl('/img/blocks/block_lists_add.svg')} alt="block_lists_add.svg" />

選択したリストの末尾に値を追加します。

### `〜番目に挿入` {#block_lists_insert_at}

<img src={useBaseUrl('/img/blocks/block_lists_insert_at.svg')} alt="block_lists_insert_at.svg" />

指定した位置に値を挿入します。

### `〜番目を置き換え` {#block_lists_replace_at}

<img src={useBaseUrl('/img/blocks/block_lists_replace_at.svg')} alt="block_lists_replace_at.svg" />

指定した位置の値を新しい値に置き換えます。

### `削除` {#block_lists_delete}

<img src={useBaseUrl('/img/blocks/block_lists_delete.svg')} alt="block_lists_delete.svg" />

指定した位置の要素を削除します（または削除モードに従います）。

### `すべて削除` {#block_lists_clear_all}

<img src={useBaseUrl('/img/blocks/block_lists_clear_all.svg')} alt="block_lists_clear_all.svg" />

選択したリストのすべての要素を削除します。

## リスト値・判定ブロック

### `〜番目の項目` {#block_lists_item_at}

<img src={useBaseUrl('/img/blocks/block_lists_item_at.svg')} alt="block_lists_item_at.svg" />

指定した位置の値を返します。

### `値の位置` {#block_lists_index_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_index_of_value.svg')} alt="block_lists_index_of_value.svg" />

一致する最初の値の位置を返します。

### `値を含むか` {#block_lists_contains_value}

<img src={useBaseUrl('/img/blocks/block_lists_contains_value.svg')} alt="block_lists_contains_value.svg" />

リストに指定した値が含まれているかを返します。

### `リストの長さ` {#block_lists_size_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_size_of_value.svg')} alt="block_lists_size_of_value.svg" />

リスト内の要素数を返します。

## リスト値レポーター

<img src={useBaseUrl('/img/blocks/list.svg')} alt="list.svg" />

選択したリストの現在の値を返します。

- タイプ: レポーターブロック
- 出力例: `[item1,item2,item3]`
- 使用例: リスト内容の確認や他ブロックへの入力