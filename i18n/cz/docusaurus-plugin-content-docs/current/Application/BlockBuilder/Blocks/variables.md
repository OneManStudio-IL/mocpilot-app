---
id: Variables
title: Proměnné
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Proměnné

Proměnné ukládají hodnoty, které lze číst a měnit napříč blokovými sekvencemi a skripty.

## Příkazové bloky proměnných

### `Nastavit proměnnou na` {#block_variables_set_to}

<img src={useBaseUrl('/img/blocks/block_variables_set_to.svg')} alt="block_variables_set_to.svg" />

Nastaví vybranou proměnnou na zadanou hodnotu.

- Typ: příkazový blok
- Typické použití: inicializace stavu, přepsání předchozí hodnoty

### `Změnit proměnnou o` {#block_variables_change_by}

<img src={useBaseUrl('/img/blocks/block_variables_change_by.svg')} alt="block_variables_change_by.svg" />

Přičte zadanou hodnotu k vybrané proměnné.

- Typ: příkazový blok
- Typické použití: počítadla, skóre, kumulovaná vzdálenost/čas

## Reportér hodnoty proměnné

<img src={useBaseUrl('/img/blocks/variable.svg')} alt="variable.svg" />

Vrací aktuální hodnotu vybrané proměnné.

- Typ: reportovací blok
- Typické použití: použití hodnoty proměnné v operátorech, podmínkách a vstupech příkazů