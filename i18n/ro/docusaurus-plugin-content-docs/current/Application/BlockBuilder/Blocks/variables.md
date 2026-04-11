---
id: Variables
title: Variabile
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Variabile

Variabilele stochează valori care pot fi citite și actualizate în diferite stive de blocuri și scripturi.

## Blocuri de comandă pentru variabile

### `Setează variabila la` {#block_variables_set_to}

<img src={useBaseUrl('/img/blocks/block_variables_set_to.svg')} alt="block_variables_set_to.svg" />

Setează variabila selectată la valoarea specificată.

- Tip: bloc de comandă
- Utilizare tipică: inițializarea stării, suprascrierea valorii anterioare

### `Modifică variabila cu` {#block_variables_change_by}

<img src={useBaseUrl('/img/blocks/block_variables_change_by.svg')} alt="block_variables_change_by.svg" />

Adaugă valoarea specificată la variabila selectată.

- Tip: bloc de comandă
- Utilizare tipică: contoare, scor, distanță/timp acumulat

## Bloc reporter pentru variabilă

<img src={useBaseUrl('/img/blocks/variable.svg')} alt="variable.svg" />

Returnează valoarea curentă a variabilei selectate.

- Tip: bloc reporter
- Utilizare tipică: folosirea valorii variabilei în operatori, condiții și intrări de comandă