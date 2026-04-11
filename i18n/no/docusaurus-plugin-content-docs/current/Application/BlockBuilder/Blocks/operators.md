---
id: Operators
title: Operatorer
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Operatorer

Operatorer er rapportør- og boolske blokker som brukes til beregninger, sammenligninger, logikk og tekstbehandling.

## Aritmetiske operatorer

### `Pluss` {#block_operator_plus}

<img src={useBaseUrl('/img/blocks/block_operator_plus.svg')} alt="block_operator_plus.svg" />

Returnerer summen av to verdier.

### `Minus` {#block_operator_minus}

<img src={useBaseUrl('/img/blocks/block_operator_minus.svg')} alt="block_operator_minus.svg" />

Returnerer resultatet av subtraksjon mellom to verdier.

### `Multipliser` {#block_operator_multiply}

<img src={useBaseUrl('/img/blocks/block_operator_multiply.svg')} alt="block_operator_multiply.svg" />

Returnerer produktet av to verdier.

### `Del` {#block_operator_divide}

<img src={useBaseUrl('/img/blocks/block_operator_divide.svg')} alt="block_operator_divide.svg" />

Returnerer resultatet av divisjon mellom to verdier.

### `Modulus` {#block_operator_modulus}

<img src={useBaseUrl('/img/blocks/block_operator_modulus.svg')} alt="block_operator_modulus.svg" />

Returnerer resten etter divisjon.

### `Avrund` {#block_operator_round}

<img src={useBaseUrl('/img/blocks/block_operator_round.svg')} alt="block_operator_round.svg" />

Avrunder til nærmeste heltall (for eksempel `2.6 -> 3`).

### `Matte (én verdi)` {#block_operator_math_single}

<img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />

Bruker en matematisk funksjon med ett argument.

Tilgjengelige funksjoner:

- `abs`: absoluttverdi
- `floor`: rund ned
- `ceiling`: rund opp
- `sqrt`: kvadratrot
- `sin`: sinus
- `cos`: cosinus
- `tan`: tangens
- `asin`: invers sinus
- `acos`: invers cosinus
- `atan`: invers tangens
- `ln`: naturlig logaritme (base `e`)
- `log`: logaritme base `10`
- `e^`: `e` opphøyd i verdi
- `10^`: `10` opphøyd i verdi

### `Matte (to verdier)` {#block_operator_math_pair}

<img src={useBaseUrl('/img/blocks/block_operator_math_pair.svg')} alt="block_operator_math_pair.svg" />

Bruker en matematisk funksjon med to argumenter.

Tilgjengelige funksjoner:

- `min`: minste verdi
- `max`: største verdi
- `pow`: første verdi opphøyd i andre
- `atan2`: vinkel fra X/Y
- `hypot`: hypotenuslengde
- `copysign`: første verdi med fortegn fra andre

### `Velg tilfeldig` {#block_operator_pick_random}

<img src={useBaseUrl('/img/blocks/block_operator_pick_random.svg')} alt="block_operator_pick_random.svg" />

Returnerer et tilfeldig tall innenfor valgt område.

## Sammenligningsoperatorer

### `Lik` {#block_operator_equal}

<img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />

Returnerer `true` når to verdier er like.

### `Ikke lik` {#block_operator_not_equal}

<img src={useBaseUrl('/img/blocks/block_operator_not_equal.svg')} alt="block_operator_not_equal.svg" />

Returnerer `true` når to verdier ikke er like.

### `Større enn` {#block_operator_greater_than}

<img src={useBaseUrl('/img/blocks/block_operator_greater_than.svg')} alt="block_operator_greater_than.svg" />

Returnerer `true` når venstre verdi er større enn høyre.

### `Mindre enn` {#block_operator_less_than}

<img src={useBaseUrl('/img/blocks/block_operator_less_than.svg')} alt="block_operator_less_than.svg" />

Returnerer `true` når venstre verdi er mindre enn høyre.

### `Er mellom` {#block_operator_is_in_between}

<img src={useBaseUrl('/img/blocks/block_operator_is_in_between.svg')} alt="block_operator_is_in_between.svg" />

Returnerer `true` når en verdi ligger innenfor angitte grenser.

## Boolsk logikk

### `Og` {#block_operator_and}

<img src={useBaseUrl('/img/blocks/block_operator_and.svg')} alt="block_operator_and.svg" />

Returnerer `true` kun når begge betingelser er `true`.

### `Eller` {#block_operator_or}

<img src={useBaseUrl('/img/blocks/block_operator_or.svg')} alt="block_operator_or.svg" />

Returnerer `true` når minst én betingelse er `true`.

### `Ikke` {#block_operator_not}

<img src={useBaseUrl('/img/blocks/block_operator_not.svg')} alt="block_operator_not.svg" />

Inverterer en boolsk verdi.

## Tekstoperatorer

### `Slå sammen` {#block_operator_join}

<img src={useBaseUrl('/img/blocks/block_operator_join.svg')} alt="block_operator_join.svg" />

Slår sammen to tekstverdier.

### `Tegn på posisjon` {#block_operator_letter_at}

<img src={useBaseUrl('/img/blocks/block_operator_letter_at.svg')} alt="block_operator_letter_at.svg" />

Returnerer tegn på valgt posisjon i tekst.

### `Lengde på tekst` {#block_operator_size_of_string}

<img src={useBaseUrl('/img/blocks/block_operator_size_of_string.svg')} alt="block_operator_size_of_string.svg" />

Returnerer lengden på teksten.

### `Tekst inneholder` {#block_operator_string_contains}

<img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />

Returnerer `true` hvis teksten inneholder spesifisert delstreng.