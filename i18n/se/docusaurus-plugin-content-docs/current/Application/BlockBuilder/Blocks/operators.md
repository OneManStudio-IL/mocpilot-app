---
id: Operators
title: Operatorer
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Operatorer

Operatorer är Reporter- och Booleska block som används för beräkningar, jämförelser, logik och stränghantering.

## Aritmetiska operatorer

### `Addition` {#block_operator_plus}

<img src={useBaseUrl('/img/blocks/block_operator_plus.svg')} alt="block_operator_plus.svg" />

Returnerar summan av två värden.

### `Subtraktion` {#block_operator_minus}

<img src={useBaseUrl('/img/blocks/block_operator_minus.svg')} alt="block_operator_minus.svg" />

Returnerar subtraktionsresultatet av två värden.

### `Multiplicera` {#block_operator_multiply}

<img src={useBaseUrl('/img/blocks/block_operator_multiply.svg')} alt="block_operator_multiply.svg" />

Returnerar produkten av två värden.

### `Dividera` {#block_operator_divide}

<img src={useBaseUrl('/img/blocks/block_operator_divide.svg')} alt="block_operator_divide.svg" />

Returnerar divisionsresultatet av två värden.

### `Rest` {#block_operator_modulus}

<img src={useBaseUrl('/img/blocks/block_operator_modulus.svg')} alt="block_operator_modulus.svg" />

Returnerar resten efter division.

### `Avrunda` {#block_operator_round}

<img src={useBaseUrl('/img/blocks/block_operator_round.svg')} alt="block_operator_round.svg" />

Avrundar till närmaste heltal (till exempel `2.6 -> 3`).

### `Matematik (enkel)` {#block_operator_math_single}

<img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />

Tillämpar en matematisk funktion med ett argument.

Tillgängliga funktioner:

- `absolutvärde`: absolutvärdet av ett tal
- `heltal mindre`: avrunda nedåt till närmaste heltal
- `heltal större`: avrunda uppåt till närmaste heltal
- `kvadratrot`: kvadratrot
- `sin`: sinus (vinkelbaserad)
- `cos`: cosinus (vinkelbaserad)
- `tan`: tangent (vinkelbaserad)
- `asin`: invers sinus
- `acos`: invers cosinus
- `atan`: invers tangent
- `ln`: naturlig logaritm (bas `e`)
- `log`: logaritm med bas `10`
- `e^`: höj `e` till indatavärdets potens
- `10^`: höj `10` till indatavärdets potens

### `Matematik (par)` {#block_operator_math_pair}

<img src={useBaseUrl('/img/blocks/block_operator_math_pair.svg')} alt="block_operator_math_pair.svg" />

Tillämpar en matematisk funktion med två argument.

Tillgängliga funktioner:

- `min`: det mindre av två värden
- `max`: det större av två värden
- `potens`: första värdet upphöjt till andra värdets potens
- `atan2`: vinkel från X/Y-par
- `hypot`: hypotenusans längd från två komponenter
- `copysign`: första värdet med andra värdets tecken

### `Slumptal` {#block_operator_pick_random}

<img src={useBaseUrl('/img/blocks/block_operator_pick_random.svg')} alt="block_operator_pick_random.svg" />

Returnerar ett slumpmässigt tal inom det valda intervallet.

## Jämförelseoperatorer

### `Lika med` {#block_operator_equal}

<img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />

Returnerar `true` när två värden är lika.

### `Inte lika med` {#block_operator_not_equal}

<img src={useBaseUrl('/img/blocks/block_operator_not_equal.svg')} alt="block_operator_not_equal.svg" />

Returnerar `true` när två värden inte är lika.

### `Större än` {#block_operator_greater_than}

<img src={useBaseUrl('/img/blocks/block_operator_greater_than.svg')} alt="block_operator_greater_than.svg" />

Returnerar `true` när vänstra värdet är större än det högra värdet.

### `Mindre än` {#block_operator_less_than}

<img src={useBaseUrl('/img/blocks/block_operator_less_than.svg')} alt="block_operator_less_than.svg" />

Returnerar `true` när vänstra värdet är mindre än det högra värdet.

### `Är mellan` {#block_operator_is_in_between}

<img src={useBaseUrl('/img/blocks/block_operator_is_in_between.svg')} alt="block_operator_is_in_between.svg" />

Returnerar `true` när ett värde ligger inom angivna gränser.

## Booleska logikoperatorer

### `Och` {#block_operator_and}

<img src={useBaseUrl('/img/blocks/block_operator_and.svg')} alt="block_operator_and.svg" />

Returnerar `true` endast när båda villkoren är `true`.

### `Eller` {#block_operator_or}

<img src={useBaseUrl('/img/blocks/block_operator_or.svg')} alt="block_operator_or.svg" />

Returnerar `true` när minst ett villkor är `true`.

### `Inte` {#block_operator_not}

<img src={useBaseUrl('/img/blocks/block_operator_not.svg')} alt="block_operator_not.svg" />

Inverterar ett booleskt värde.

## Textoperatorer

### `Sammanfoga` {#block_operator_join}

<img src={useBaseUrl('/img/blocks/block_operator_join.svg')} alt="block_operator_join.svg" />

Sammanfogar två textvärden.

### `Tecken vid position` {#block_operator_letter_at}

<img src={useBaseUrl('/img/blocks/block_operator_letter_at.svg')} alt="block_operator_letter_at.svg" />

Returnerar tecknet på en vald position i texten.

### `Stränglängd` {#block_operator_size_of_string}

<img src={useBaseUrl('/img/blocks/block_operator_size_of_string.svg')} alt="block_operator_size_of_string.svg" />

Returnerar strängens längd.

### `Text innehåller` {#block_operator_string_contains}

<img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />

Returnerar `true` om texten innehåller den angivna delsträngen.