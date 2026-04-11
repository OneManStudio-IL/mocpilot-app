---
id: Variables
title: Variabili
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Variabili

Le variabili memorizzano valori che possono essere letti e aggiornati tra blocchi e script.

## Blocchi di comando delle variabili

### `Imposta variabile a` {#block_variables_set_to}

<img src={useBaseUrl('/img/blocks/block_variables_set_to.svg')} alt="block_variables_set_to.svg" />

Imposta la variabile selezionata al valore specificato.

- Tipo: blocco di comando
- Utilizzo tipico: inizializzare uno stato, sovrascrivere un valore precedente

### `Cambia variabile di` {#block_variables_change_by}

<img src={useBaseUrl('/img/blocks/block_variables_change_by.svg')} alt="block_variables_change_by.svg" />

Aggiunge il valore specificato alla variabile selezionata.

- Tipo: blocco di comando
- Utilizzo tipico: contatori, punteggio, distanza/tempo accumulati

## Blocco reporter del valore della variabile

<img src={useBaseUrl('/img/blocks/variable.svg')} alt="variable.svg" />

Restituisce il valore corrente della variabile selezionata.

- Tipo: blocco reporter
- Utilizzo tipico: usare il valore della variabile all’interno di operatori, condizioni e input dei comandi