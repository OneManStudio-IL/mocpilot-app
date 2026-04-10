---
id: Lists
title: Списки
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Списки

Списки хранят упорядоченные наборы значений и подходят для очередей, истории и таблиц данных.

## Блоки изменения списка

### `Добавить значение в список` {#block_lists_add}

<img src={useBaseUrl('/img/blocks/block_lists_add.svg')} alt="block_lists_add.svg" />

Добавляет значение в конец выбранного списка.

### `Вставить по индексу` {#block_lists_insert_at}

<img src={useBaseUrl('/img/blocks/block_lists_insert_at.svg')} alt="block_lists_insert_at.svg" />

Вставляет значение в выбранную позицию списка.

### `Заменить по индексу` {#block_lists_replace_at}

<img src={useBaseUrl('/img/blocks/block_lists_replace_at.svg')} alt="block_lists_replace_at.svg" />

Заменяет значение в выбранной позиции списка.

### `Удалить` {#block_lists_delete}

<img src={useBaseUrl('/img/blocks/block_lists_delete.svg')} alt="block_lists_delete.svg" />

Удаляет элемент по выбранному индексу (или в выбранном режиме удаления).

### `Очистить все` {#block_lists_clear_all}

<img src={useBaseUrl('/img/blocks/block_lists_clear_all.svg')} alt="block_lists_clear_all.svg" />

Удаляет все элементы из выбранного списка.

## Блоки чтения/проверки списка

### `Элемент по индексу` {#block_lists_item_at}

<img src={useBaseUrl('/img/blocks/block_lists_item_at.svg')} alt="block_lists_item_at.svg" />

Возвращает значение по выбранному индексу.

### `Индекс значения` {#block_lists_index_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_index_of_value.svg')} alt="block_lists_index_of_value.svg" />

Возвращает индекс первого совпадающего значения в списке.

### `Содержит значение` {#block_lists_contains_value}

<img src={useBaseUrl('/img/blocks/block_lists_contains_value.svg')} alt="block_lists_contains_value.svg" />

Возвращает, содержит ли список указанное значение.

### `Размер списка` {#block_lists_size_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_size_of_value.svg')} alt="block_lists_size_of_value.svg" />

Возвращает количество элементов в выбранном списке.

## Репортер значения списка

<img src={useBaseUrl('/img/blocks/list.svg')} alt="list.svg" />

Возвращает текущее значение выбранного списка.

- Тип: репортер-блок
- Пример формата вывода: `[item1,item2,item3]`
- Типичное применение: просмотр текущего содержимого списка или передача значения списка в совместимые блоки

## Примечания по использованию

- Используйте списки для истории, точек маршрута, записей датчиков и пресетов.
- Перед чтением по индексу проверяйте размер списка, чтобы избежать неверного доступа.
- Комбинируйте `contains` и `index of` для логики поиска.
