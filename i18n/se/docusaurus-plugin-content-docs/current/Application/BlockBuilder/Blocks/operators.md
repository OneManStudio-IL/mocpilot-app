---
id: Operators
title: Operators
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Operators

Operators are Reporter and Boolean blocks used for calculations, comparisons, logic, and string processing.

## Arithmetic operators

### `Plus` {#block_operator_plus}

<img src={useBaseUrl('/img/blocks/block_operator_plus.svg')} alt="block_operator_plus.svg" />

Returns the sum of two values.

### `Minus` {#block_operator_minus}

<img src={useBaseUrl('/img/blocks/block_operator_minus.svg')} alt="block_operator_minus.svg" />

Returns the subtraction result of two values.

### `Multiply` {#block_operator_multiply}

<img src={useBaseUrl('/img/blocks/block_operator_multiply.svg')} alt="block_operator_multiply.svg" />

Returns the product of two values.

### `Divide` {#block_operator_divide}

<img src={useBaseUrl('/img/blocks/block_operator_divide.svg')} alt="block_operator_divide.svg" />

Returns the division result of two values.

### `Modulus` {#block_operator_modulus}

<img src={useBaseUrl('/img/blocks/block_operator_modulus.svg')} alt="block_operator_modulus.svg" />

Returns the remainder after division.

### `Round` {#block_operator_round}

<img src={useBaseUrl('/img/blocks/block_operator_round.svg')} alt="block_operator_round.svg" />

Rounds to nearest integer (for example `2.6 -> 3`).

### `Math single` {#block_operator_math_single}

<img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />

Applies a single-argument math function.

Available functions:

- `abs`: absolute value of a number
- `floor`: round down to nearest integer
- `ceiling`: round up to nearest integer
- `sqrt`: square root
- `sin`: sine (angle-based)
- `cos`: cosine (angle-based)
- `tan`: tangent (angle-based)
- `asin`: inverse sine
- `acos`: inverse cosine
- `atan`: inverse tangent
- `ln`: natural logarithm (base `e`)
- `log`: logarithm base `10`
- `e^`: raise `e` to power of input
- `10^`: raise `10` to power of input

### `Math pair` {#block_operator_math_pair}

<img src={useBaseUrl('/img/blocks/block_operator_math_pair.svg')} alt="block_operator_math_pair.svg" />

Applies a two-argument math function.

Available functions:

- `min`: smaller of two values
- `max`: larger of two values
- `pow`: first value raised to second value power
- `atan2`: angle from X/Y pair
- `hypot`: hypotenuse length from two components
- `copysign`: first value with sign of second value

### `Pick random` {#block_operator_pick_random}

<img src={useBaseUrl('/img/blocks/block_operator_pick_random.svg')} alt="block_operator_pick_random.svg" />

Returns a random number in the selected range.

## Comparison operators

### `Equal` {#block_operator_equal}

<img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />

Returns `true` when two values are equal.

### `Not equal` {#block_operator_not_equal}

<img src={useBaseUrl('/img/blocks/block_operator_not_equal.svg')} alt="block_operator_not_equal.svg" />

Returns `true` when two values are not equal.

### `Greater than` {#block_operator_greater_than}

<img src={useBaseUrl('/img/blocks/block_operator_greater_than.svg')} alt="block_operator_greater_than.svg" />

Returns `true` when left value is greater than right value.

### `Less than` {#block_operator_less_than}

<img src={useBaseUrl('/img/blocks/block_operator_less_than.svg')} alt="block_operator_less_than.svg" />

Returns `true` when left value is less than right value.

### `Is in between` {#block_operator_is_in_between}

<img src={useBaseUrl('/img/blocks/block_operator_is_in_between.svg')} alt="block_operator_is_in_between.svg" />

Returns `true` when a value is inside specified bounds.

## Boolean logic operators

### `And` {#block_operator_and}

<img src={useBaseUrl('/img/blocks/block_operator_and.svg')} alt="block_operator_and.svg" />

Returns `true` only when both conditions are `true`.

### `Or` {#block_operator_or}

<img src={useBaseUrl('/img/blocks/block_operator_or.svg')} alt="block_operator_or.svg" />

Returns `true` when at least one condition is `true`.

### `Not` {#block_operator_not}

<img src={useBaseUrl('/img/blocks/block_operator_not.svg')} alt="block_operator_not.svg" />

Inverts a boolean value.

## Text operators

### `Join` {#block_operator_join}

<img src={useBaseUrl('/img/blocks/block_operator_join.svg')} alt="block_operator_join.svg" />

Concatenates two text values.

### `Letter at` {#block_operator_letter_at}

<img src={useBaseUrl('/img/blocks/block_operator_letter_at.svg')} alt="block_operator_letter_at.svg" />

Returns character at a selected position in text.

### `Size of string` {#block_operator_size_of_string}

<img src={useBaseUrl('/img/blocks/block_operator_size_of_string.svg')} alt="block_operator_size_of_string.svg" />

Returns string length.

### `String contains` {#block_operator_string_contains}

<img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />

Returns `true` if text contains specified substring.