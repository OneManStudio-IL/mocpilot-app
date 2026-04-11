---
id: Variables
title: Variables
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Variables

Les variables stockent des valeurs qui peuvent être lues et mises à jour à travers les blocs et les scripts.

## Blocs de commande de variables

### `Set variable to` {#block_variables_set_to}

<img src={useBaseUrl('/img/blocks/block_variables_set_to.svg')} alt="block_variables_set_to.svg" />

Définit la variable sélectionnée à la valeur spécifiée.

- Type : bloc de commande
- Utilisation typique : initialiser un état, écraser une valeur précédente

### `Change variable by` {#block_variables_change_by}

<img src={useBaseUrl('/img/blocks/block_variables_change_by.svg')} alt="block_variables_change_by.svg" />

Ajoute la valeur spécifiée à la variable sélectionnée.

- Type : bloc de commande
- Utilisation typique : compteurs, score, distance/temps accumulés

## Bloc reporter de valeur de variable

<img src={useBaseUrl('/img/blocks/variable.svg')} alt="variable.svg" />

Retourne la valeur actuelle de la variable sélectionnée.

- Type : bloc reporter
- Utilisation typique : utiliser la valeur de la variable dans des opérateurs, des conditions et des entrées de commandes