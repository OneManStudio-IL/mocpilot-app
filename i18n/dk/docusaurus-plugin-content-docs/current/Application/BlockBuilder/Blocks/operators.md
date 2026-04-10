---
id: Operators
title: Operatorer
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Operatorer

Operatorer er Reporter- og booleske blokke, der bruges til beregninger, sammenligninger, logik og tekstbehandling.

## Aritmetiske operatorer

### `Plus` {#block_operator_plus}

<img src={useBaseUrl('/img/blocks/block_operator_plus.svg')} alt="block_operator_plus.svg" />

Returnerer summen af to værdier.

### `Minus` {#block_operator_minus}

<img src={useBaseUrl('/img/blocks/block_operator_minus.svg')} alt="block_operator_minus.svg" />

Returnerer resultatet af subtraktion af to værdier.

### `Gange` {#block_operator_multiply}

<img src={useBaseUrl('/img/blocks/block_operator_multiply.svg')} alt="block_operator_multiply.svg" />

Returnerer produktet af to værdier.

### `Divider` {#block_operator_divide}

<img src={useBaseUrl('/img/blocks/block_operator_divide.svg')} alt="block_operator_divide.svg" />

Returnerer resultatet af division af to værdier.

### `Modulo` {#block_operator_modulus}

<img src={useBaseUrl('/img/blocks/block_operator_modulus.svg')} alt="block_operator_modulus.svg" />

Returnerer resten efter division.

### `Afrund` {#block_operator_round}

<img src={useBaseUrl('/img/blocks/block_operator_round.svg')} alt="block_operator_round.svg" />

Afrunder til nærmeste heltal (for eksempel `2.6 -> 3`).

### `Math single` {#block_operator_math_single}

<img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />

Anvender en matematisk funktion med ét argument.

Tilgængelige funktioner:

- `absolutværdi`: absolut værdi af et tal
- `heltal mindre`: rund ned til nærmeste heltal
- `heltal større`: rund op til nærmeste heltal
- `kvadratrod`: kvadratrod
- `sin`: sinus (vinkelbaseret)
- `cos`: cosinus (vinkelbaseret)
- `tan`: tangens (vinkelbaseret)
- `asin`: invers sinus
- `acos`: invers cosinus
- `atan`: invers tangens
- `ln`: naturlig logaritme (base `e`)
- `log`: logaritme med base `10`
- `e^`: opløft `e` i input-værdien
- `10^`: opløft `10` i input-værdien

### `Math pair` {#block_operator_math_pair}

<img src={useBaseUrl('/img/blocks/block_operator_math_pair.svg')} alt="block_operator_math_pair.svg" />

Anvender en matematisk funktion med to argumenter.

Tilgængelige funktioner:

- `min`: den mindste af to værdier
- `max`: den største af to værdier
- `potens`: første værdi opløftet i anden værdi
- `atan2`: vinkel fra X/Y-par
- `hypot`: hypotenuselængde fra to komponenter
- `copysign`: første værdi med fortegnet fra anden værdi

### `Vælg tilfældigt` {#block_operator_pick_random}

<img src={useBaseUrl('/img/blocks/block_operator_pick_random.svg')} alt="block_operator_pick_random.svg" />

Returnerer et tilfældigt tal i det valgte interval.

## Sammenligningsoperatorer

### `Lig med` {#block_operator_equal}

<img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />

Returnerer `true`, når to værdier er ens.

### `Ikke lig med` {#block_operator_not_equal}

<img src={useBaseUrl('/img/blocks/block_operator_not_equal.svg')} alt="block_operator_not_equal.svg" />

Returnerer `true`, når to værdier ikke er ens.

### `Større end` {#block_operator_greater_than}

<img src={useBaseUrl('/img/blocks/block_operator_greater_than.svg')} alt="block_operator_greater_than.svg" />

Returnerer `true`, når venstre værdi er større end højre værdi.

### `Mindre end` {#block_operator_less_than}

<img src={useBaseUrl('/img/blocks/block_operator_less_than.svg')} alt="block_operator_less_than.svg" />

Returnerer `true`, når venstre værdi er mindre end højre værdi.

### `Er mellem` {#block_operator_is_in_between}

<img src={useBaseUrl('/img/blocks/block_operator_is_in_between.svg')} alt="block_operator_is_in_between.svg" />

Returnerer `true`, når en værdi ligger inden for de angivne grænser.

## Booleske logikoperatorer

### `Og` {#block_operator_and}

<img src={useBaseUrl('/img/blocks/block_operator_and.svg')} alt="block_operator_and.svg" />

Returnerer kun `true`, når begge betingelser er `true`.

### `Eller` {#block_operator_or}

<img src={useBaseUrl('/img/blocks/block_operator_or.svg')} alt="block_operator_or.svg" />

Returnerer `true`, når mindst én betingelse er `true`.

### `Ikke` {#block_operator_not}

<img src={useBaseUrl('/img/blocks/block_operator_not.svg')} alt="block_operator_not.svg" />

Inverterer en boolesk værdi.

## Tekstoperatorer

### `Slutte` {#block_operator_join}

<img src={useBaseUrl('/img/blocks/block_operator_join.svg')} alt="block_operator_join.svg" />

Sammenkæder to tekstværdier.

### `Bogstav ved` {#block_operator_letter_at}

<img src={useBaseUrl('/img/blocks/block_operator_letter_at.svg')} alt="block_operator_letter_at.svg" />

Returnerer tegn ved en valgt position i tekst.

### `Længde af tekst` {#block_operator_size_of_string}

<img src={useBaseUrl('/img/blocks/block_operator_size_of_string.svg')} alt="block_operator_size_of_string.svg" />

Returnerer tekstens længde.

### `Tekst indeholder` {#block_operator_string_contains}

<img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />

Returnerer `true`, hvis tekst indeholder den angivne delstreng.

## Brugsnoter

- Brug operatorblokke til at bygge betingelser for `hvis`, `vent indtil` og hændelsesfiltre.
- Til motorstyring: normalisér og begræns værdier, før de sendes til hastigheds-/effektblokke.
- Undgå at dividere med nul i `Divider` og `Modulo`.
