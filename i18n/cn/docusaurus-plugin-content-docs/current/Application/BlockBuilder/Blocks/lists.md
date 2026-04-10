---
id: Lists
title: 列表
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 列表

列表用于存储有序的数据集合，并通过专用的列表 Reporter 与堆叠积木进行操作。

## 列表修改积木

### `将值添加到列表` {#block_lists_add}

<img src={useBaseUrl('/img/blocks/block_lists_add.svg')} alt="block_lists_add.svg" />

将一个值追加到所选列表末尾。

### `在位置插入` {#block_lists_insert_at}

<img src={useBaseUrl('/img/blocks/block_lists_insert_at.svg')} alt="block_lists_insert_at.svg" />

在列表的所选索引位置插入一个值。

### `替换位置` {#block_lists_replace_at}

<img src={useBaseUrl('/img/blocks/block_lists_replace_at.svg')} alt="block_lists_replace_at.svg" />

将所选索引位置的项替换为新值。

### `删除` {#block_lists_delete}

<img src={useBaseUrl('/img/blocks/block_lists_delete.svg')} alt="block_lists_delete.svg" />

删除所选索引位置的项（或按所选删除模式删除）。

### `清空全部` {#block_lists_clear_all}

<img src={useBaseUrl('/img/blocks/block_lists_clear_all.svg')} alt="block_lists_clear_all.svg" />

移除所选列表中的所有项。

## 列表取值/检查积木

### `位置的项` {#block_lists_item_at}

<img src={useBaseUrl('/img/blocks/block_lists_item_at.svg')} alt="block_lists_item_at.svg" />

返回所选索引位置的值。

### `值的索引` {#block_lists_index_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_index_of_value.svg')} alt="block_lists_index_of_value.svg" />

返回列表中第一个匹配值的索引。

### `包含值` {#block_lists_contains_value}

<img src={useBaseUrl('/img/blocks/block_lists_contains_value.svg')} alt="block_lists_contains_value.svg" />

返回列表是否包含指定值。

### `列表长度` {#block_lists_size_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_size_of_value.svg')} alt="block_lists_size_of_value.svg" />

返回所选列表中的项数量。

## 列表值积木

<img src={useBaseUrl('/img/blocks/list.svg')} alt="list.svg" />

返回所选列表的当前值。

- 类型：数值积木（Reporter）
- 输出格式示例：`[item1,item2,item3]`
- 常见用途：查看当前列表内容，或将列表值传入兼容积木

## 使用说明

- 列表适用于历史缓冲、路径点、记录的传感器样本和预设数据。
- 按索引读取前先检查列表长度，避免无效访问。
- 可结合 `包含值` 与 `值的索引` 构建查找逻辑。
