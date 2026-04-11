---
id: Operators
title: Operaattorit
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Operaattorit

Operaattorit ovat Reporter- ja Boolean-lohkoja, joita käytetään laskentaan, vertailuihin, logiikkaan ja tekstin käsittelyyn.

## Aritmeettiset operaattorit

### `Yhteenlasku` {#block_operator_plus}

<img src={useBaseUrl('/img/blocks/block_operator_plus.svg')} alt="block_operator_plus.svg" />

Palauttaa kahden arvon summan.

### `Vähennys` {#block_operator_minus}

<img src={useBaseUrl('/img/blocks/block_operator_minus.svg')} alt="block_operator_minus.svg" />

Palauttaa kahden arvon erotuksen.

### `Kertolasku` {#block_operator_multiply}

<img src={useBaseUrl('/img/blocks/block_operator_multiply.svg')} alt="block_operator_multiply.svg" />

Palauttaa kahden arvon tulon.

### `Jakolasku` {#block_operator_divide}

<img src={useBaseUrl('/img/blocks/block_operator_divide.svg')} alt="block_operator_divide.svg" />

Palauttaa kahden arvon jakolaskun tuloksen.

### `Jakojäännös` {#block_operator_modulus}

<img src={useBaseUrl('/img/blocks/block_operator_modulus.svg')} alt="block_operator_modulus.svg" />

Palauttaa jakolaskun jakojäännöksen.

### `Pyöristä` {#block_operator_round}

<img src={useBaseUrl('/img/blocks/block_operator_round.svg')} alt="block_operator_round.svg" />

Pyöristää lähimpään kokonaislukuun (esimerkiksi `2.6 -> 3`).

### `Matematiikka (yksi arvo)` {#block_operator_math_single}

<img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />

Suorittaa yhden argumentin matemaattisen funktion.

Saatavilla olevat funktiot:

- `abs`: luvun itseisarvo
- `floor`: pyöristää alaspäin
- `ceiling`: pyöristää ylöspäin
- `sqrt`: neliöjuuri
- `sin`: sini
- `cos`: kosini
- `tan`: tangentti
- `asin`: arkussini
- `acos`: arkuskosini
- `atan`: arkustangentti
- `ln`: luonnollinen logaritmi
- `log`: kymmenkantainen logaritmi
- `e^`: e potenssiin
- `10^`: 10 potenssiin

### `Matematiikka (kaksi arvoa)` {#block_operator_math_pair}

<img src={useBaseUrl('/img/blocks/block_operator_math_pair.svg')} alt="block_operator_math_pair.svg" />

Suorittaa kahden argumentin matemaattisen funktion.

Saatavilla olevat funktiot:

- `min`: pienempi arvo
- `max`: suurempi arvo
- `pow`: potenssi
- `atan2`: kulma X/Y-arvoista
- `hypot`: hypotenuusa
- `copysign`: arvo toisen etumerkillä

### `Satunnaisluku` {#block_operator_pick_random}

<img src={useBaseUrl('/img/blocks/block_operator_pick_random.svg')} alt="block_operator_pick_random.svg" />

Palauttaa satunnaisluvun valitulta alueelta.

## Vertailuoperaattorit

### `Yhtäsuuri` {#block_operator_equal}

<img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />

Palauttaa `true`, jos arvot ovat yhtä suuret.

### `Erisuuri` {#block_operator_not_equal}

<img src={useBaseUrl('/img/blocks/block_operator_not_equal.svg')} alt="block_operator_not_equal.svg" />

Palauttaa `true`, jos arvot eivät ole yhtä suuret.

### `Suurempi kuin` {#block_operator_greater_than}

<img src={useBaseUrl('/img/blocks/block_operator_greater_than.svg')} alt="block_operator_greater_than.svg" />

Palauttaa `true`, jos vasen arvo on suurempi.

### `Pienempi kuin` {#block_operator_less_than}

<img src={useBaseUrl('/img/blocks/block_operator_less_than.svg')} alt="block_operator_less_than.svg" />

Palauttaa `true`, jos vasen arvo on pienempi.

### `On välillä` {#block_operator_is_in_between}

<img src={useBaseUrl('/img/blocks/block_operator_is_in_between.svg')} alt="block_operator_is_in_between.svg" />

Palauttaa `true`, jos arvo on annetulla välillä.

## Boolean-logiikkaoperaattorit

### `Ja` {#block_operator_and}

<img src={useBaseUrl('/img/blocks/block_operator_and.svg')} alt="block_operator_and.svg" />

Palauttaa `true`, jos molemmat ehdot ovat `true`.

### `Tai` {#block_operator_or}

<img src={useBaseUrl('/img/blocks/block_operator_or.svg')} alt="block_operator_or.svg" />

Palauttaa `true`, jos vähintään yksi ehto on `true`.

### `Ei` {#block_operator_not}

<img src={useBaseUrl('/img/blocks/block_operator_not.svg')} alt="block_operator_not.svg" />

Kääntää boolean-arvon.

## Tekstioperaattorit

### `Yhdistä` {#block_operator_join}

<img src={useBaseUrl('/img/blocks/block_operator_join.svg')} alt="block_operator_join.svg" />

Yhdistää kaksi tekstiä.

### `Kirjain kohdassa` {#block_operator_letter_at}

<img src={useBaseUrl('/img/blocks/block_operator_letter_at.svg')} alt="block_operator_letter_at.svg" />

Palauttaa merkin valitusta kohdasta.

### `Tekstin pituus` {#block_operator_size_of_string}

<img src={useBaseUrl('/img/blocks/block_operator_size_of_string.svg')} alt="block_operator_size_of_string.svg" />

Palauttaa merkkijonon pituuden.

### `Teksti sisältää` {#block_operator_string_contains}

<img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />

Palauttaa `true`, jos teksti sisältää annetun osan.