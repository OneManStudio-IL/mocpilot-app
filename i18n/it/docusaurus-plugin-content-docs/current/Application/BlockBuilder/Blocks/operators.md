---
id: Operators
title: Operatori
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Operatori

Gli operatori sono blocchi di tipo Reporter e Booleano utilizzati per calcoli, confronti, logica e gestione delle stringhe.

## Operatori aritmetici

### `Somma` {#block_operator_plus}

<img src={useBaseUrl('/img/blocks/block_operator_plus.svg')} alt="block_operator_plus.svg" />

Restituisce la somma di due valori.

### `Sottrai` {#block_operator_minus}

<img src={useBaseUrl('/img/blocks/block_operator_minus.svg')} alt="block_operator_minus.svg" />

Restituisce il risultato della sottrazione di due valori.

### `Moltiplica` {#block_operator_multiply}

<img src={useBaseUrl('/img/blocks/block_operator_multiply.svg')} alt="block_operator_multiply.svg" />

Restituisce il prodotto di due valori.

### `Dividi` {#block_operator_divide}

<img src={useBaseUrl('/img/blocks/block_operator_divide.svg')} alt="block_operator_divide.svg" />

Restituisce il risultato della divisione di due valori.

### `Modulo` {#block_operator_modulus}

<img src={useBaseUrl('/img/blocks/block_operator_modulus.svg')} alt="block_operator_modulus.svg" />

Restituisce il resto della divisione.

### `Arrotonda` {#block_operator_round}

<img src={useBaseUrl('/img/blocks/block_operator_round.svg')} alt="block_operator_round.svg" />

Arrotonda all’intero più vicino (ad esempio `2.6 -> 3`).

### `Funzione matematica (singola)` {#block_operator_math_single}

<img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />

Applica una funzione matematica a un singolo argomento.

Funzioni disponibili:

- `valore assoluto`: valore assoluto di un numero
- `intero minore`: arrotonda per difetto all’intero più vicino
- `intero maggiore`: arrotonda per eccesso all’intero più vicino
- `radice quadrata`: radice quadrata
- `sin`: seno (basato su angolo)
- `cos`: coseno (basato su angolo)
- `tan`: tangente (basata su angolo)
- `asin`: arco seno
- `acos`: arco coseno
- `atan`: arco tangente
- `ln`: logaritmo naturale (base `e`)
- `log`: logaritmo in base `10`
- `e^`: eleva `e` alla potenza dell’input
- `10^`: eleva `10` alla potenza dell’input

### `Funzione matematica (doppia)` {#block_operator_math_pair}

<img src={useBaseUrl('/img/blocks/block_operator_math_pair.svg')} alt="block_operator_math_pair.svg" />

Applica una funzione matematica a due argomenti.

Funzioni disponibili:

- `min`: il più piccolo tra due valori
- `max`: il più grande tra due valori
- `potenza`: il primo valore elevato alla potenza del secondo
- `atan2`: angolo da coppia X/Y
- `hypot`: lunghezza dell’ipotenusa da due componenti
- `copysign`: primo valore con il segno del secondo

### `Numero casuale` {#block_operator_pick_random}

<img src={useBaseUrl('/img/blocks/block_operator_pick_random.svg')} alt="block_operator_pick_random.svg" />

Restituisce un numero casuale nell’intervallo selezionato.

## Operatori di confronto

### `Uguale` {#block_operator_equal}

<img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />

Restituisce `true` quando due valori sono uguali.

### `Diverso` {#block_operator_not_equal}

<img src={useBaseUrl('/img/blocks/block_operator_not_equal.svg')} alt="block_operator_not_equal.svg" />

Restituisce `true` quando due valori sono diversi.

### `Maggiore di` {#block_operator_greater_than}

<img src={useBaseUrl('/img/blocks/block_operator_greater_than.svg')} alt="block_operator_greater_than.svg" />

Restituisce `true` quando il valore di sinistra è maggiore di quello di destra.

### `Minore di` {#block_operator_less_than}

<img src={useBaseUrl('/img/blocks/block_operator_less_than.svg')} alt="block_operator_less_than.svg" />

Restituisce `true` quando il valore di sinistra è minore di quello di destra.

### `È compreso tra` {#block_operator_is_in_between}

<img src={useBaseUrl('/img/blocks/block_operator_is_in_between.svg')} alt="block_operator_is_in_between.svg" />

Restituisce `true` quando un valore è compreso tra i limiti specificati.

## Operatori logici booleani

### `E` {#block_operator_and}

<img src={useBaseUrl('/img/blocks/block_operator_and.svg')} alt="block_operator_and.svg" />

Restituisce `true` solo quando entrambe le condizioni sono `true`.

### `Oppure` {#block_operator_or}

<img src={useBaseUrl('/img/blocks/block_operator_or.svg')} alt="block_operator_or.svg" />

Restituisce `true` quando almeno una condizione è `true`.

### `Non` {#block_operator_not}

<img src={useBaseUrl('/img/blocks/block_operator_not.svg')} alt="block_operator_not.svg" />

Inverte un valore booleano.

## Operatori di testo

### `Unisci` {#block_operator_join}

<img src={useBaseUrl('/img/blocks/block_operator_join.svg')} alt="block_operator_join.svg" />

Concatena due valori di testo.

### `Lettera alla posizione` {#block_operator_letter_at}

<img src={useBaseUrl('/img/blocks/block_operator_letter_at.svg')} alt="block_operator_letter_at.svg" />

Restituisce il carattere alla posizione selezionata nel testo.

### `Lunghezza della stringa` {#block_operator_size_of_string}

<img src={useBaseUrl('/img/blocks/block_operator_size_of_string.svg')} alt="block_operator_size_of_string.svg" />

Restituisce la lunghezza della stringa.

### `Testo contiene` {#block_operator_string_contains}

<img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />

Restituisce `true` se il testo contiene la sottostringa specificata.