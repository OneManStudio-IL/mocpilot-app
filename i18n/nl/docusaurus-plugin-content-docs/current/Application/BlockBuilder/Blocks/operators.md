---
id: Operators
title: Operatoren
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Operatoren

Operatoren zijn rapporteur- en booleaanse blokken die worden gebruikt voor berekeningen, vergelijkingen, logica en tekstverwerking. :contentReference[oaicite:0]{index=0}

## Rekenkundige operatoren

### `Optellen` {#block_operator_plus}

<img src={useBaseUrl('/img/blocks/block_operator_plus.svg')} alt="block_operator_plus.svg" />

Geeft de som van twee waarden terug.

### `Aftrekken` {#block_operator_minus}

<img src={useBaseUrl('/img/blocks/block_operator_minus.svg')} alt="block_operator_minus.svg" />

Geeft het resultaat van de aftrekking van twee waarden terug.

### `Vermenigvuldigen` {#block_operator_multiply}

<img src={useBaseUrl('/img/blocks/block_operator_multiply.svg')} alt="block_operator_multiply.svg" />

Geeft het product van twee waarden terug.

### `Delen` {#block_operator_divide}

<img src={useBaseUrl('/img/blocks/block_operator_divide.svg')} alt="block_operator_divide.svg" />

Geeft het resultaat van de deling van twee waarden terug.

### `Modulo` {#block_operator_modulus}

<img src={useBaseUrl('/img/blocks/block_operator_modulus.svg')} alt="block_operator_modulus.svg" />

Geeft de rest na deling terug.

### `Afronden` {#block_operator_round}

<img src={useBaseUrl('/img/blocks/block_operator_round.svg')} alt="block_operator_round.svg" />

Rondt af naar het dichtstbijzijnde gehele getal (bijvoorbeeld `2.6 -> 3`).

### `Enkele wiskundige functie` {#block_operator_math_single}

<img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />

Past een wiskundige functie met één argument toe.

Beschikbare functies:

- `abs`: absolute waarde van een getal  
- `floor`: afronden naar beneden  
- `ceiling`: afronden naar boven  
- `sqrt`: vierkantswortel  
- `sin`: sinus (hoekgebaseerd)  
- `cos`: cosinus (hoekgebaseerd)  
- `tan`: tangens (hoekgebaseerd)  
- `asin`: inverse sinus  
- `acos`: inverse cosinus  
- `atan`: inverse tangens  
- `ln`: natuurlijke logaritme (basis `e`)  
- `log`: logaritme basis `10`  
- `e^`: `e` tot de macht van invoer  
- `10^`: `10` tot de macht van invoer  

### `Wiskundige functie (2 waarden)` {#block_operator_math_pair}

<img src={useBaseUrl('/img/blocks/block_operator_math_pair.svg')} alt="block_operator_math_pair.svg" />

Past een wiskundige functie met twee argumenten toe.

Beschikbare functies:

- `min`: kleinste van twee waarden  
- `max`: grootste van twee waarden  
- `pow`: eerste waarde tot de macht van de tweede  
- `atan2`: hoek uit X/Y-paar  
- `hypot`: lengte van de hypotenusa uit twee componenten  
- `copysign`: eerste waarde met teken van tweede waarde  

### `Kies willekeurig` {#block_operator_pick_random}

<img src={useBaseUrl('/img/blocks/block_operator_pick_random.svg')} alt="block_operator_pick_random.svg" />

Geeft een willekeurig getal binnen het geselecteerde bereik terug.

## Vergelijkingsoperatoren

### `Gelijk` {#block_operator_equal}

<img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />

Geeft `true` terug wanneer twee waarden gelijk zijn.

### `Niet gelijk` {#block_operator_not_equal}

<img src={useBaseUrl('/img/blocks/block_operator_not_equal.svg')} alt="block_operator_not_equal.svg" />

Geeft `true` terug wanneer twee waarden niet gelijk zijn.

### `Groter dan` {#block_operator_greater_than}

<img src={useBaseUrl('/img/blocks/block_operator_greater_than.svg')} alt="block_operator_greater_than.svg" />

Geeft `true` terug wanneer de linker waarde groter is dan de rechter waarde.

### `Kleiner dan` {#block_operator_less_than}

<img src={useBaseUrl('/img/blocks/block_operator_less_than.svg')} alt="block_operator_less_than.svg" />

Geeft `true` terug wanneer de linker waarde kleiner is dan de rechter waarde.

### `Ligt tussen` {#block_operator_is_in_between}

<img src={useBaseUrl('/img/blocks/block_operator_is_in_between.svg')} alt="block_operator_is_in_between.svg" />

Geeft `true` terug wanneer een waarde binnen de opgegeven grenzen ligt.

## Booleaanse logica-operatoren

### `En` {#block_operator_and}

<img src={useBaseUrl('/img/blocks/block_operator_and.svg')} alt="block_operator_and.svg" />

Geeft alleen `true` terug wanneer beide voorwaarden `true` zijn.

### `Of` {#block_operator_or}

<img src={useBaseUrl('/img/blocks/block_operator_or.svg')} alt="block_operator_or.svg" />

Geeft `true` terug wanneer minstens één voorwaarde `true` is.

### `Niet` {#block_operator_not}

<img src={useBaseUrl('/img/blocks/block_operator_not.svg')} alt="block_operator_not.svg" />

Keert een booleaanse waarde om.

## Tekstoperatoren

### `Samenvoegen` {#block_operator_join}

<img src={useBaseUrl('/img/blocks/block_operator_join.svg')} alt="block_operator_join.svg" />

Voegt twee tekstwaarden samen.

### `Letter op` {#block_operator_letter_at}

<img src={useBaseUrl('/img/blocks/block_operator_letter_at.svg')} alt="block_operator_letter_at.svg" />

Geeft het teken op een geselecteerde positie in de tekst terug.

### `Lengte van tekst` {#block_operator_size_of_string}

<img src={useBaseUrl('/img/blocks/block_operator_size_of_string.svg')} alt="block_operator_size_of_string.svg" />

Geeft de lengte van de tekst terug.

### `Tekst bevat` {#block_operator_string_contains}

<img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />

Geeft `true` terug als de tekst de opgegeven substring bevat.