---
id: Lists
title: Списки
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Списки

Списки зберігають впорядковані колекції значень і керуються окремими list Reporter та Stack блоками.

## Блоки зміни списку

### `Додати значення до списку` {#block_lists_add}

<img src={useBaseUrl('/img/blocks/block_lists_add.svg')} alt="block_lists_add.svg" />

Додає значення в кінець вибраного списку.

### `Вставити на позицію` {#block_lists_insert_at}

<img src={useBaseUrl('/img/blocks/block_lists_insert_at.svg')} alt="block_lists_insert_at.svg" />

Вставляє значення у вибраний індекс списку.

### `Замінити на позиції` {#block_lists_replace_at}

<img src={useBaseUrl('/img/blocks/block_lists_replace_at.svg')} alt="block_lists_replace_at.svg" />

Замінює елемент у вибраному індексі на нове значення.

### `Видалити` {#block_lists_delete}

<img src={useBaseUrl('/img/blocks/block_lists_delete.svg')} alt="block_lists_delete.svg" />

Видаляє елемент у вибраному індексі (або в обраному режимі видалення).

### `Очистити все` {#block_lists_clear_all}

<img src={useBaseUrl('/img/blocks/block_lists_clear_all.svg')} alt="block_lists_clear_all.svg" />

Видаляє всі елементи з вибраного списку.

## Блоки читання/перевірки списку

### `Елемент на позиції` {#block_lists_item_at}

<img src={useBaseUrl('/img/blocks/block_lists_item_at.svg')} alt="block_lists_item_at.svg" />

Повертає значення за вибраним індексом.

### `Індекс значення` {#block_lists_index_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_index_of_value.svg')} alt="block_lists_index_of_value.svg" />

Повертає індекс першого відповідного значення у списку.

### `Містить значення` {#block_lists_contains_value}

<img src={useBaseUrl('/img/blocks/block_lists_contains_value.svg')} alt="block_lists_contains_value.svg" />

Повертає, чи містить список вказане значення.

### `Розмір списку` {#block_lists_size_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_size_of_value.svg')} alt="block_lists_size_of_value.svg" />

Повертає кількість елементів у вибраному списку.

## Репортер значення списку

<img src={useBaseUrl('/img/blocks/list.svg')} alt="list.svg" />

Повертає поточне значення вибраного списку.

- Тип: репортер-блок
- Приклад формату виводу: `[item1,item2,item3]`
- Типове використання: перегляд поточного вмісту списку або передача значення списку в сумісні блоки

## Примітки щодо використання

- Використовуйте списки для буферів історії, маршрутних точок, збережених зразків датчиків і пресетів.
- Перевіряйте розмір списку перед читанням за індексом, щоб уникнути некоректного доступу.
- Комбінуйте `contains` і `index of` для логіки пошуку.
