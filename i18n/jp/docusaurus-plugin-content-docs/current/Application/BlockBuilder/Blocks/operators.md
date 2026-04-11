---
id: Operators
title: 演算
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 演算

演算ブロックは、計算、比較、論理処理、文字列操作を行うためのレポーターブロックおよびブールブロックです。

## 算術演算

### `足し算` {#block_operator_plus}

<img src={useBaseUrl('/img/blocks/block_operator_plus.svg')} alt="block_operator_plus.svg" />

2つの値の合計を返します。

### `引き算` {#block_operator_minus}

<img src={useBaseUrl('/img/blocks/block_operator_minus.svg')} alt="block_operator_minus.svg" />

2つの値の差を返します。

### `掛け算` {#block_operator_multiply}

<img src={useBaseUrl('/img/blocks/block_operator_multiply.svg')} alt="block_operator_multiply.svg" />

2つの値の積を返します。

### `割り算` {#block_operator_divide}

<img src={useBaseUrl('/img/blocks/block_operator_divide.svg')} alt="block_operator_divide.svg" />

2つの値の商を返します。

### `余り` {#block_operator_modulus}

<img src={useBaseUrl('/img/blocks/block_operator_modulus.svg')} alt="block_operator_modulus.svg" />

割り算の余りを返します。

### `四捨五入` {#block_operator_round}

<img src={useBaseUrl('/img/blocks/block_operator_round.svg')} alt="block_operator_round.svg" />

最も近い整数に丸めます（例: `2.6 → 3`）。

### `数学（単項）` {#block_operator_math_single}

<img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />

1つの引数に対して数学関数を適用します。

使用可能な関数：

- `abs`: 絶対値
- `floor`: 切り捨て
- `ceiling`: 切り上げ
- `sqrt`: 平方根
- `sin`: サイン（角度）
- `cos`: コサイン（角度）
- `tan`: タンジェント（角度）
- `asin`: 逆サイン
- `acos`: 逆コサイン
- `atan`: 逆タンジェント
- `ln`: 自然対数
- `log`: 常用対数
- `e^`: eの累乗
- `10^`: 10の累乗

### `数学（2項）` {#block_operator_math_pair}

<img src={useBaseUrl('/img/blocks/block_operator_math_pair.svg')} alt="block_operator_math_pair.svg" />

2つの引数に対して数学関数を適用します。

使用可能な関数：

- `min`: 小さい方の値
- `max`: 大きい方の値
- `pow`: 累乗
- `atan2`: 座標から角度を算出
- `hypot`: 斜辺の長さ
- `copysign`: 符号コピー

### `乱数` {#block_operator_pick_random}

<img src={useBaseUrl('/img/blocks/block_operator_pick_random.svg')} alt="block_operator_pick_random.svg" />

指定範囲内のランダムな値を返します。

## 比較演算

### `等しい` {#block_operator_equal}

<img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />

2つの値が等しい場合に `true` を返します。

### `等しくない` {#block_operator_not_equal}

<img src={useBaseUrl('/img/blocks/block_operator_not_equal.svg')} alt="block_operator_not_equal.svg" />

2つの値が等しくない場合に `true` を返します。

### `より大きい` {#block_operator_greater_than}

<img src={useBaseUrl('/img/blocks/block_operator_greater_than.svg')} alt="block_operator_greater_than.svg" />

左の値が右の値より大きい場合に `true` を返します。

### `より小さい` {#block_operator_less_than}

<img src={useBaseUrl('/img/blocks/block_operator_less_than.svg')} alt="block_operator_less_than.svg" />

左の値が右の値より小さい場合に `true` を返します。

### `範囲内` {#block_operator_is_in_between}

<img src={useBaseUrl('/img/blocks/block_operator_is_in_between.svg')} alt="block_operator_is_in_between.svg" />

値が指定範囲内にある場合に `true` を返します。

## 論理演算

### `かつ` {#block_operator_and}

<img src={useBaseUrl('/img/blocks/block_operator_and.svg')} alt="block_operator_and.svg" />

両方の条件が `true` の場合のみ `true` を返します。

### `または` {#block_operator_or}

<img src={useBaseUrl('/img/blocks/block_operator_or.svg')} alt="block_operator_or.svg" />

いずれかの条件が `true` の場合に `true` を返します。

### `ではない` {#block_operator_not}

<img src={useBaseUrl('/img/blocks/block_operator_not.svg')} alt="block_operator_not.svg" />

ブール値を反転します。

## 文字列演算

### `結合` {#block_operator_join}

<img src={useBaseUrl('/img/blocks/block_operator_join.svg')} alt="block_operator_join.svg" />

2つの文字列を連結します。

### `〜番目の文字` {#block_operator_letter_at}

<img src={useBaseUrl('/img/blocks/block_operator_letter_at.svg')} alt="block_operator_letter_at.svg" />

指定位置の文字を返します。

### `文字数` {#block_operator_size_of_string}

<img src={useBaseUrl('/img/blocks/block_operator_size_of_string.svg')} alt="block_operator_size_of_string.svg" />

文字列の長さを返します。

### `文字列に含まれるか` {#block_operator_string_contains}

<img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />

指定した文字列が含まれている場合に `true` を返します。