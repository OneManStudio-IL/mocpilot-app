---
id: Operators
title: 运算
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 运算

运算类是用于计算、比较、逻辑判断和字符串处理的 Reporter 与布尔积木。

## 算术运算

### `加` {#block_operator_plus}

<img src={useBaseUrl('/img/blocks/block_operator_plus.svg')} alt="block_operator_plus.svg" />

返回两个值的和。

### `减` {#block_operator_minus}

<img src={useBaseUrl('/img/blocks/block_operator_minus.svg')} alt="block_operator_minus.svg" />

返回两个值相减的结果。

### `乘` {#block_operator_multiply}

<img src={useBaseUrl('/img/blocks/block_operator_multiply.svg')} alt="block_operator_multiply.svg" />

返回两个值的乘积。

### `除` {#block_operator_divide}

<img src={useBaseUrl('/img/blocks/block_operator_divide.svg')} alt="block_operator_divide.svg" />

返回两个值相除的结果。

### `取模` {#block_operator_modulus}

<img src={useBaseUrl('/img/blocks/block_operator_modulus.svg')} alt="block_operator_modulus.svg" />

返回除法运算后的余数。

### `四舍五入` {#block_operator_round}

<img src={useBaseUrl('/img/blocks/block_operator_round.svg')} alt="block_operator_round.svg" />

四舍五入到最接近的整数（例如 `2.6 -> 3`）。

### `单参数数学` {#block_operator_math_single}

<img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />

应用单参数数学函数。

可用函数：

- `绝对值`：数字的绝对值
- `小于整数`：向下取整到最接近整数
- `大于整数`：向上取整到最接近整数
- `sqrt`：平方根
- `sin`：正弦（基于角度）
- `cos`：余弦（基于角度）
- `tan`：正切（基于角度）
- `asin`：反正弦
- `acos`：反余弦
- `atan`：反正切
- `ln`：自然对数（底数为 `e`）
- `log`：以 `10` 为底的对数
- `e^`：`e` 的输入次幂
- `10^`：`10` 的输入次幂

### `双参数数学` {#block_operator_math_pair}

<img src={useBaseUrl('/img/blocks/block_operator_math_pair.svg')} alt="block_operator_math_pair.svg" />

应用双参数数学函数。

可用函数：

- `最小`：两个值中较小的值
- `最大`：两个值中较大的值
- `幂`：第一个值的第二个值次幂
- `atan2`：根据 X/Y 值对计算角度
- `hypot`：根据两个分量计算斜边长度
- `copysign`：第一个值，符号取自第二个值

### `随机取值` {#block_operator_pick_random}

<img src={useBaseUrl('/img/blocks/block_operator_pick_random.svg')} alt="block_operator_pick_random.svg" />

返回所选范围内的随机数。

## 比较运算

### `等于` {#block_operator_equal}

<img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />

当两个值相等时返回 `true`。

### `不等于` {#block_operator_not_equal}

<img src={useBaseUrl('/img/blocks/block_operator_not_equal.svg')} alt="block_operator_not_equal.svg" />

当两个值不相等时返回 `true`。

### `大于` {#block_operator_greater_than}

<img src={useBaseUrl('/img/blocks/block_operator_greater_than.svg')} alt="block_operator_greater_than.svg" />

当左侧值大于右侧值时返回 `true`。

### `小于` {#block_operator_less_than}

<img src={useBaseUrl('/img/blocks/block_operator_less_than.svg')} alt="block_operator_less_than.svg" />

当左侧值小于右侧值时返回 `true`。

### `是否在区间内` {#block_operator_is_in_between}

<img src={useBaseUrl('/img/blocks/block_operator_is_in_between.svg')} alt="block_operator_is_in_between.svg" />

当数值位于指定边界内时返回 `true`。

## 布尔逻辑运算

### `并且` {#block_operator_and}

<img src={useBaseUrl('/img/blocks/block_operator_and.svg')} alt="block_operator_and.svg" />

仅当两个条件都为 `true` 时返回 `true`。

### `或者` {#block_operator_or}

<img src={useBaseUrl('/img/blocks/block_operator_or.svg')} alt="block_operator_or.svg" />

当至少一个条件为 `true` 时返回 `true`。

### `非` {#block_operator_not}

<img src={useBaseUrl('/img/blocks/block_operator_not.svg')} alt="block_operator_not.svg" />

对布尔值取反。

## 文本运算

### `拼接` {#block_operator_join}

<img src={useBaseUrl('/img/blocks/block_operator_join.svg')} alt="block_operator_join.svg" />

将两个文本值连接在一起。

### `第几个字符` {#block_operator_letter_at}

<img src={useBaseUrl('/img/blocks/block_operator_letter_at.svg')} alt="block_operator_letter_at.svg" />

返回文本中指定位置的字符。

### `字符串长度` {#block_operator_size_of_string}

<img src={useBaseUrl('/img/blocks/block_operator_size_of_string.svg')} alt="block_operator_size_of_string.svg" />

返回字符串长度。

### `字符串包含` {#block_operator_string_contains}

<img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />

如果文本包含指定子串，则返回 `true`。

## 使用说明

- 使用运算积木为 `如果`、`等待直到` 和事件过滤构建条件。
- 在电机控制中，将数值传入速度/功率积木前，先做归一化与限幅。
- 在 `除` 和 `取模` 中避免除数为零。
