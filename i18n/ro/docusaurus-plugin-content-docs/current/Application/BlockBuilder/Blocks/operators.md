---
id: Operators
title: Operatori
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Operatori

Operatorii sunt blocuri de tip Reporter și Boolean utilizate pentru calcule, comparații, logică și procesarea textului.

## Operatori aritmetici

### `Plus` {#block_operator_plus}

<img src={useBaseUrl('/img/blocks/block_operator_plus.svg')} alt="block_operator_plus.svg" />

Returnează suma a două valori.

### `Minus` {#block_operator_minus}

<img src={useBaseUrl('/img/blocks/block_operator_minus.svg')} alt="block_operator_minus.svg" />

Returnează rezultatul scăderii a două valori.

### `Înmulțește` {#block_operator_multiply}

<img src={useBaseUrl('/img/blocks/block_operator_multiply.svg')} alt="block_operator_multiply.svg" />

Returnează produsul a două valori.

### `Împarte` {#block_operator_divide}

<img src={useBaseUrl('/img/blocks/block_operator_divide.svg')} alt="block_operator_divide.svg" />

Returnează rezultatul împărțirii a două valori.

### `Modulo` {#block_operator_modulus}

<img src={useBaseUrl('/img/blocks/block_operator_modulus.svg')} alt="block_operator_modulus.svg" />

Returnează restul după împărțire.

### `Rotunjește` {#block_operator_round}

<img src={useBaseUrl('/img/blocks/block_operator_round.svg')} alt="block_operator_round.svg" />

Rotunjește la cel mai apropiat număr întreg (de exemplu `2.6 -> 3`).

### `Matematică simplă` {#block_operator_math_single}

<img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />

Aplică o funcție matematică cu un singur argument.

Funcții disponibile:

- `valoare absolută`: valoare absolută
- `întreg mai mic`: rotunjire în jos
- `întreg mai mare`: rotunjire în sus
- `rădăcina pătrată`: rădăcină pătrată
- `sin`: sinus
- `cos`: cosinus
- `tan`: tangentă
- `asin`: arcsinus
- `acos`: arccosinus
- `atan`: arctangentă
- `ln`: logaritm natural (baza `e`)
- `log`: logaritm în baza `10`
- `e^`: ridică `e` la puterea valorii
- `10^`: ridică `10` la puterea valorii

### `Matematică pereche` {#block_operator_math_pair}

<img src={useBaseUrl('/img/blocks/block_operator_math_pair.svg')} alt="block_operator_math_pair.svg" />

Aplică o funcție matematică cu doi argumenti.

Funcții disponibile:

- `min`: valoarea mai mică
- `max`: valoarea mai mare
- `putere`: prima valoare la puterea celei de-a doua
- `atan2`: unghi din pereche X/Y
- `hypot`: lungimea ipotenuzei
- `copysign`: valoare cu semnul celei de-a doua

### `Alege aleator` {#block_operator_pick_random}

<img src={useBaseUrl('/img/blocks/block_operator_pick_random.svg')} alt="block_operator_pick_random.svg" />

Returnează un număr aleator în intervalul selectat.

## Operatori de comparație

### `Egal` {#block_operator_equal}

<img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />

Returnează `true` când două valori sunt egale.

### `Diferit` {#block_operator_not_equal}

<img src={useBaseUrl('/img/blocks/block_operator_not_equal.svg')} alt="block_operator_not_equal.svg" />

Returnează `true` când două valori sunt diferite.

### `Mai mare decât` {#block_operator_greater_than}

<img src={useBaseUrl('/img/blocks/block_operator_greater_than.svg')} alt="block_operator_greater_than.svg" />

Returnează `true` când valoarea din stânga este mai mare decât cea din dreapta.

### `Mai mic decât` {#block_operator_less_than}

<img src={useBaseUrl('/img/blocks/block_operator_less_than.svg')} alt="block_operator_less_than.svg" />

Returnează `true` când valoarea din stânga este mai mică decât cea din dreapta.

### `Este între` {#block_operator_is_in_between}

<img src={useBaseUrl('/img/blocks/block_operator_is_in_between.svg')} alt="block_operator_is_in_between.svg" />

Returnează `true` când o valoare este în intervalul specificat.

## Operatori logici

### `Și` {#block_operator_and}

<img src={useBaseUrl('/img/blocks/block_operator_and.svg')} alt="block_operator_and.svg" />

Returnează `true` doar dacă ambele condiții sunt `true`.

### `Sau` {#block_operator_or}

<img src={useBaseUrl('/img/blocks/block_operator_or.svg')} alt="block_operator_or.svg" />

Returnează `true` dacă cel puțin o condiție este `true`.

### `Nu` {#block_operator_not}

<img src={useBaseUrl('/img/blocks/block_operator_not.svg')} alt="block_operator_not.svg" />

Inversează o valoare booleană.

## Operatori text

### `Concatenează` {#block_operator_join}

<img src={useBaseUrl('/img/blocks/block_operator_join.svg')} alt="block_operator_join.svg" />

Concatenează două valori de tip text.

### `Caracter la` {#block_operator_letter_at}

<img src={useBaseUrl('/img/blocks/block_operator_letter_at.svg')} alt="block_operator_letter_at.svg" />

Returnează caracterul de la poziția selectată.

### `Dimensiunea textului` {#block_operator_size_of_string}

<img src={useBaseUrl('/img/blocks/block_operator_size_of_string.svg')} alt="block_operator_size_of_string.svg" />

Returnează lungimea textului.

### `Textul conține` {#block_operator_string_contains}

<img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />

Returnează `true` dacă textul conține subșirul specificat.
