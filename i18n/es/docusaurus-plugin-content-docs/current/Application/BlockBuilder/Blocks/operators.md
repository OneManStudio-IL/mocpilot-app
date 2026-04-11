---
id: Operators
title: Operadores
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Operadores

Los operadores son bloques de tipo Reporter y Booleano utilizados para cálculos, comparaciones, lógica y procesamiento de texto.

## Operadores aritméticos

### `Suma` {#block_operator_plus}

<img src={useBaseUrl('/img/blocks/block_operator_plus.svg')} alt="block_operator_plus.svg" />

Devuelve la suma de dos valores.

### `Resta` {#block_operator_minus}

<img src={useBaseUrl('/img/blocks/block_operator_minus.svg')} alt="block_operator_minus.svg" />

Devuelve la resta de dos valores.

### `Multiplicar` {#block_operator_multiply}

<img src={useBaseUrl('/img/blocks/block_operator_multiply.svg')} alt="block_operator_multiply.svg" />

Devuelve el producto de dos valores.

### `Dividir` {#block_operator_divide}

<img src={useBaseUrl('/img/blocks/block_operator_divide.svg')} alt="block_operator_divide.svg" />

Devuelve el resultado de la división de dos valores.

### `Módulo` {#block_operator_modulus}

<img src={useBaseUrl('/img/blocks/block_operator_modulus.svg')} alt="block_operator_modulus.svg" />

Devuelve el resto de una división.

### `Redondear` {#block_operator_round}

<img src={useBaseUrl('/img/blocks/block_operator_round.svg')} alt="block_operator_round.svg" />

Redondea al entero más cercano (por ejemplo `2.6 -> 3`).

### `Función matemática (una entrada)` {#block_operator_math_single}

<img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />

Aplica una función matemática de un solo argumento.

Funciones disponibles:

- `valor absoluto`: valor absoluto
- `entero menor`: redondear hacia abajo
- `entero mayor`: redondear hacia arriba
- `raíz cuadrada`: raíz cuadrada
- `sin`: seno
- `cos`: coseno
- `tan`: tangente
- `asin`: arcoseno
- `acos`: arcocoseno
- `atan`: arcotangente
- `ln`: logaritmo natural (base `e`)
- `log`: logaritmo base `10`
- `e^`: `e` elevado a la potencia
- `10^`: `10` elevado a la potencia

### `Función matemática (dos entradas)` {#block_operator_math_pair}

<img src={useBaseUrl('/img/blocks/block_operator_math_pair.svg')} alt="block_operator_math_pair.svg" />

Aplica una función matemática de dos argumentos.

Funciones disponibles:

- `mín`: menor valor
- `máx`: mayor valor
- `potencia`: potencia
- `atan2`: ángulo a partir de X/Y
- `hypot`: hipotenusa
- `copysign`: valor con signo de otro

### `Número aleatorio` {#block_operator_pick_random}

<img src={useBaseUrl('/img/blocks/block_operator_pick_random.svg')} alt="block_operator_pick_random.svg" />

Devuelve un número aleatorio dentro del rango seleccionado.

## Operadores de comparación

### `Igual` {#block_operator_equal}

<img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />

Devuelve `true` si los valores son iguales.

### `Distinto` {#block_operator_not_equal}

<img src={useBaseUrl('/img/blocks/block_operator_not_equal.svg')} alt="block_operator_not_equal.svg" />

Devuelve `true` si los valores son diferentes.

### `Mayor que` {#block_operator_greater_than}

<img src={useBaseUrl('/img/blocks/block_operator_greater_than.svg')} alt="block_operator_greater_than.svg" />

Devuelve `true` si el valor izquierdo es mayor.

### `Menor que` {#block_operator_less_than}

<img src={useBaseUrl('/img/blocks/block_operator_less_than.svg')} alt="block_operator_less_than.svg" />

Devuelve `true` si el valor izquierdo es menor.

### `Está entre` {#block_operator_is_in_between}

<img src={useBaseUrl('/img/blocks/block_operator_is_in_between.svg')} alt="block_operator_is_in_between.svg" />

Devuelve `true` si el valor está dentro del rango.

## Operadores lógicos

### `Y` {#block_operator_and}

<img src={useBaseUrl('/img/blocks/block_operator_and.svg')} alt="block_operator_and.svg" />

Devuelve `true` solo si ambas condiciones son verdaderas.

### `O` {#block_operator_or}

<img src={useBaseUrl('/img/blocks/block_operator_or.svg')} alt="block_operator_or.svg" />

Devuelve `true` si al menos una condición es verdadera.

### `No` {#block_operator_not}

<img src={useBaseUrl('/img/blocks/block_operator_not.svg')} alt="block_operator_not.svg" />

Invierte un valor booleano.

## Operadores de texto

### `Unir` {#block_operator_join}

<img src={useBaseUrl('/img/blocks/block_operator_join.svg')} alt="block_operator_join.svg" />

Concatena dos textos.

### `Letra en` {#block_operator_letter_at}

<img src={useBaseUrl('/img/blocks/block_operator_letter_at.svg')} alt="block_operator_letter_at.svg" />

Devuelve el carácter en una posición específica.

### `Longitud de texto` {#block_operator_size_of_string}

<img src={useBaseUrl('/img/blocks/block_operator_size_of_string.svg')} alt="block_operator_size_of_string.svg" />

Devuelve la longitud del texto.

### `Texto contiene` {#block_operator_string_contains}

<img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />

Devuelve `true` si el texto contiene una subcadena.