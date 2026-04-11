---
id: Variables
title: Premenné
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Premenné

Premenné ukladajú hodnoty, ktoré je možné čítať a meniť naprieč blokmi a skriptmi.

## Príkazové bloky premenných

### `Nastav premennú na` {#block_variables_set_to}

<img src={useBaseUrl('/img/blocks/block_variables_set_to.svg')} alt="block_variables_set_to.svg" />

Nastaví vybranú premennú na zadanú hodnotu.

- Typ: príkazový blok  
- Typické použitie: inicializácia stavu, prepísanie predchádzajúcej hodnoty  

### `Zmeň premennú o` {#block_variables_change_by}

<img src={useBaseUrl('/img/blocks/block_variables_change_by.svg')} alt="block_variables_change_by.svg" />

Pripočíta zadanú hodnotu k vybranej premennej.

- Typ: príkazový blok  
- Typické použitie: počítadlá, skóre, kumulovaná vzdialenosť/čas  

## Blok hodnoty premennej

<img src={useBaseUrl('/img/blocks/variable.svg')} alt="variable.svg" />

Vracia aktuálnu hodnotu vybranej premennej.

- Typ: reporter blok  
- Typické použitie: použitie hodnoty premennej v operátoroch, podmienkach a vstupoch príkazov