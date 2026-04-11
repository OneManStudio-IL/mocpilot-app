---
id: Operators
title: Operatory
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Operatory

Operatory to bloki raportujące i logiczne używane do obliczeń, porównań, logiki oraz przetwarzania tekstu.

## Operatory arytmetyczne

### `Dodaj` {#block_operator_plus}

<img src={useBaseUrl('/img/blocks/block_operator_plus.svg')} alt="block_operator_plus.svg" />

Zwraca sumę dwóch wartości.

### `Odejmij` {#block_operator_minus}

<img src={useBaseUrl('/img/blocks/block_operator_minus.svg')} alt="block_operator_minus.svg" />

Zwraca wynik odejmowania dwóch wartości.

### `Pomnóż` {#block_operator_multiply}

<img src={useBaseUrl('/img/blocks/block_operator_multiply.svg')} alt="block_operator_multiply.svg" />

Zwraca iloczyn dwóch wartości.

### `Podziel` {#block_operator_divide}

<img src={useBaseUrl('/img/blocks/block_operator_divide.svg')} alt="block_operator_divide.svg" />

Zwraca wynik dzielenia dwóch wartości.

### `Modulo` {#block_operator_modulus}

<img src={useBaseUrl('/img/blocks/block_operator_modulus.svg')} alt="block_operator_modulus.svg" />

Zwraca resztę z dzielenia.

### `Zaokrąglij` {#block_operator_round}

<img src={useBaseUrl('/img/blocks/block_operator_round.svg')} alt="block_operator_round.svg" />

Zaokrągla do najbliższej liczby całkowitej (np. `2.6 -> 3`).

### `Funkcja matematyczna (1 argument)` {#block_operator_math_single}

<img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />

Stosuje funkcję matematyczną z jednym argumentem.

Dostępne funkcje:

- `abs`: wartość bezwzględna
- `floor`: zaokrąglenie w dół
- `ceiling`: zaokrąglenie w górę
- `sqrt`: pierwiastek kwadratowy
- `sin`: sinus
- `cos`: cosinus
- `tan`: tangens
- `asin`: arcsinus
- `acos`: arccosinus
- `atan`: arctangens
- `ln`: logarytm naturalny (podstawa `e`)
- `log`: logarytm dziesiętny
- `e^`: potęga liczby `e`
- `10^`: potęga liczby `10`

### `Funkcja matematyczna (2 argumenty)` {#block_operator_math_pair}

<img src={useBaseUrl('/img/blocks/block_operator_math_pair.svg')} alt="block_operator_math_pair.svg" />

Stosuje funkcję matematyczną z dwoma argumentami.

Dostępne funkcje:

- `min`: mniejsza z dwóch wartości
- `max`: większa z dwóch wartości
- `pow`: potęga (pierwsza wartość do potęgi drugiej)
- `atan2`: kąt z pary X/Y
- `hypot`: długość przeciwprostokątnej
- `copysign`: pierwsza wartość z znakiem drugiej

### `Losuj` {#block_operator_pick_random}

<img src={useBaseUrl('/img/blocks/block_operator_pick_random.svg')} alt="block_operator_pick_random.svg" />

Zwraca losową liczbę z wybranego zakresu.

## Operatory porównania

### `Równe` {#block_operator_equal}

<img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />

Zwraca `true`, gdy wartości są równe.

### `Nierówne` {#block_operator_not_equal}

<img src={useBaseUrl('/img/blocks/block_operator_not_equal.svg')} alt="block_operator_not_equal.svg" />

Zwraca `true`, gdy wartości są różne.

### `Większe niż` {#block_operator_greater_than}

<img src={useBaseUrl('/img/blocks/block_operator_greater_than.svg')} alt="block_operator_greater_than.svg" />

Zwraca `true`, gdy lewa wartość jest większa od prawej.

### `Mniejsze niż` {#block_operator_less_than}

<img src={useBaseUrl('/img/blocks/block_operator_less_than.svg')} alt="block_operator_less_than.svg" />

Zwraca `true`, gdy lewa wartość jest mniejsza od prawej.

### `W zakresie` {#block_operator_is_in_between}

<img src={useBaseUrl('/img/blocks/block_operator_is_in_between.svg')} alt="block_operator_is_in_between.svg" />

Zwraca `true`, gdy wartość znajduje się w określonym zakresie.

## Operatory logiczne

### `I` {#block_operator_and}

<img src={useBaseUrl('/img/blocks/block_operator_and.svg')} alt="block_operator_and.svg" />

Zwraca `true` tylko wtedy, gdy oba warunki są `true`.

### `Lub` {#block_operator_or}

<img src={useBaseUrl('/img/blocks/block_operator_or.svg')} alt="block_operator_or.svg" />

Zwraca `true`, gdy co najmniej jeden warunek jest `true`.

### `Nie` {#block_operator_not}

<img src={useBaseUrl('/img/blocks/block_operator_not.svg')} alt="block_operator_not.svg" />

Odwraca wartość logiczną.

## Operatory tekstowe

### `Połącz` {#block_operator_join}

<img src={useBaseUrl('/img/blocks/block_operator_join.svg')} alt="block_operator_join.svg" />

Łączy dwa teksty.

### `Litera na pozycji` {#block_operator_letter_at}

<img src={useBaseUrl('/img/blocks/block_operator_letter_at.svg')} alt="block_operator_letter_at.svg" />

Zwraca znak na wybranej pozycji w tekście.

### `Długość tekstu` {#block_operator_size_of_string}

<img src={useBaseUrl('/img/blocks/block_operator_size_of_string.svg')} alt="block_operator_size_of_string.svg" />

Zwraca długość tekstu.

### `Tekst zawiera` {#block_operator_string_contains}

<img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />

Zwraca `true`, jeśli tekst zawiera podany fragment.