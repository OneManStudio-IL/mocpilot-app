---
id: Variables
title: Змінні
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Змінні

Змінні зберігають значення, які можна читати й змінювати у різних стеках блоків і скриптах.

## Командні блоки змінних

### `Встановити змінну в` {#block_variables_set_to}

<img src={useBaseUrl('/img/blocks/block_variables_set_to.svg')} alt="block_variables_set_to.svg" />

Встановлює вибрану змінну у вказане значення.

- Тип: командний блок
- Типове використання: ініціалізація стану, перезапис попереднього значення

### `Змінити змінну на` {#block_variables_change_by}

<img src={useBaseUrl('/img/blocks/block_variables_change_by.svg')} alt="block_variables_change_by.svg" />

Додає вказану величину до вибраної змінної.

- Тип: командний блок
- Типове використання: лічильники, рахунок, накопичена відстань/час

## Репортер значення змінної

<img src={useBaseUrl('/img/blocks/variable.svg')} alt="variable.svg" />

Повертає поточне значення вибраної змінної.

- Тип: репортер-блок
- Типове використання: використання значення змінної в операторах, умовах і параметрах команд