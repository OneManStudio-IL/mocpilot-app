---
id: Operators
title: Operadores
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Operadores

Os operadores são blocos do tipo Repórter e Booleano usados para cálculos, comparações, lógica e processamento de texto.

## Operadores aritméticos

### `Soma` {#block_operator_plus}

<img src={useBaseUrl('/img/blocks/block_operator_plus.svg')} alt="block_operator_plus.svg" />

Retorna a soma de dois valores.

### `Subtração` {#block_operator_minus}

<img src={useBaseUrl('/img/blocks/block_operator_minus.svg')} alt="block_operator_minus.svg" />

Retorna o resultado da subtração entre dois valores.

### `Multiplicação` {#block_operator_multiply}

<img src={useBaseUrl('/img/blocks/block_operator_multiply.svg')} alt="block_operator_multiply.svg" />

Retorna o produto de dois valores.

### `Divisão` {#block_operator_divide}

<img src={useBaseUrl('/img/blocks/block_operator_divide.svg')} alt="block_operator_divide.svg" />

Retorna o resultado da divisão entre dois valores.

### `Módulo` {#block_operator_modulus}

<img src={useBaseUrl('/img/blocks/block_operator_modulus.svg')} alt="block_operator_modulus.svg" />

Retorna o resto da divisão.

### `Arredondar` {#block_operator_round}

<img src={useBaseUrl('/img/blocks/block_operator_round.svg')} alt="block_operator_round.svg" />

Arredonda para o inteiro mais próximo (por exemplo `2.6 -> 3`).

### `Matemática simples` {#block_operator_math_single}

<img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />

Aplica uma função matemática de um único argumento.

Funções disponíveis:

- `valor absoluto`: valor absoluto
- `inteiro menor`: arredondar para baixo
- `inteiro maior`: arredondar para cima
- `raiz quadrada`: raiz quadrada
- `sin`: seno
- `cos`: cosseno
- `tan`: tangente
- `asin`: arco seno
- `acos`: arco cosseno
- `atan`: arco tangente
- `ln`: logaritmo natural (base `e`)
- `log`: logaritmo base `10`
- `e^`: elevar `e` à potência
- `10^`: elevar `10` à potência

### `Matemática dupla` {#block_operator_math_pair}

<img src={useBaseUrl('/img/blocks/block_operator_math_pair.svg')} alt="block_operator_math_pair.svg" />

Aplica uma função matemática com dois argumentos.

Funções disponíveis:

- `min`: menor valor
- `max`: maior valor
- `potência`: primeiro valor elevado ao segundo
- `atan2`: ângulo a partir de X/Y
- `hypot`: comprimento da hipotenusa
- `copysign`: valor com o sinal do segundo

### `Número aleatório` {#block_operator_pick_random}

<img src={useBaseUrl('/img/blocks/block_operator_pick_random.svg')} alt="block_operator_pick_random.svg" />

Retorna um número aleatório dentro do intervalo selecionado.

## Operadores de comparação

### `Igual` {#block_operator_equal}

<img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />

Retorna `true` quando dois valores são iguais.

### `Diferente` {#block_operator_not_equal}

<img src={useBaseUrl('/img/blocks/block_operator_not_equal.svg')} alt="block_operator_not_equal.svg" />

Retorna `true` quando dois valores são diferentes.

### `Maior que` {#block_operator_greater_than}

<img src={useBaseUrl('/img/blocks/block_operator_greater_than.svg')} alt="block_operator_greater_than.svg" />

Retorna `true` quando o valor da esquerda é maior que o da direita.

### `Menor que` {#block_operator_less_than}

<img src={useBaseUrl('/img/blocks/block_operator_less_than.svg')} alt="block_operator_less_than.svg" />

Retorna `true` quando o valor da esquerda é menor que o da direita.

### `Está entre` {#block_operator_is_in_between}

<img src={useBaseUrl('/img/blocks/block_operator_is_in_between.svg')} alt="block_operator_is_in_between.svg" />

Retorna `true` quando um valor está dentro de limites definidos.

## Operadores lógicos booleanos

### `E` {#block_operator_and}

<img src={useBaseUrl('/img/blocks/block_operator_and.svg')} alt="block_operator_and.svg" />

Retorna `true` apenas quando ambas as condições são verdadeiras.

### `Ou` {#block_operator_or}

<img src={useBaseUrl('/img/blocks/block_operator_or.svg')} alt="block_operator_or.svg" />

Retorna `true` quando pelo menos uma condição é verdadeira.

### `Não` {#block_operator_not}

<img src={useBaseUrl('/img/blocks/block_operator_not.svg')} alt="block_operator_not.svg" />

Inverte um valor booleano.

## Operadores de texto

### `Juntar` {#block_operator_join}

<img src={useBaseUrl('/img/blocks/block_operator_join.svg')} alt="block_operator_join.svg" />

Concatena dois textos.

### `Letra em` {#block_operator_letter_at}

<img src={useBaseUrl('/img/blocks/block_operator_letter_at.svg')} alt="block_operator_letter_at.svg" />

Retorna o caractere em uma posição específica do texto.

### `Tamanho do texto` {#block_operator_size_of_string}

<img src={useBaseUrl('/img/blocks/block_operator_size_of_string.svg')} alt="block_operator_size_of_string.svg" />

Retorna o comprimento do texto.

### `Texto contém` {#block_operator_string_contains}

<img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />

Retorna `true` se o texto contém a substring especificada.
