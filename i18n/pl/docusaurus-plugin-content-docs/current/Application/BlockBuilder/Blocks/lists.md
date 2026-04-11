---
id: Lists
title: Listy
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Listy

Listy przechowują uporządkowane kolekcje wartości i są modyfikowane za pomocą dedykowanych bloków raportujących i poleceń.

## Bloki modyfikacji listy

### `Dodaj wartość do listy` {#block_lists_add}

<img src={useBaseUrl('/img/blocks/block_lists_add.svg')} alt="block_lists_add.svg" />

Dodaje wartość na koniec wybranej listy.

### `Wstaw na pozycji` {#block_lists_insert_at}

<img src={useBaseUrl('/img/blocks/block_lists_insert_at.svg')} alt="block_lists_insert_at.svg" />

Wstawia wartość na wybranej pozycji w liście.

### `Zastąp na pozycji` {#block_lists_replace_at}

<img src={useBaseUrl('/img/blocks/block_lists_replace_at.svg')} alt="block_lists_replace_at.svg" />

Zastępuje element na wybranej pozycji nową wartością.

### `Usuń` {#block_lists_delete}

<img src={useBaseUrl('/img/blocks/block_lists_delete.svg')} alt="block_lists_delete.svg" />

Usuwa element na wybranej pozycji (lub zgodnie z wybranym trybem usuwania).

### `Wyczyść wszystko` {#block_lists_clear_all}

<img src={useBaseUrl('/img/blocks/block_lists_clear_all.svg')} alt="block_lists_clear_all.svg" />

Usuwa wszystkie elementy z wybranej listy.

## Bloki wartości/sprawdzeń listy

### `Element na pozycji` {#block_lists_item_at}

<img src={useBaseUrl('/img/blocks/block_lists_item_at.svg')} alt="block_lists_item_at.svg" />

Zwraca wartość na wybranej pozycji.

### `Indeks wartości` {#block_lists_index_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_index_of_value.svg')} alt="block_lists_index_of_value.svg" />

Zwraca indeks pierwszego pasującego elementu w liście.

### `Zawiera wartość` {#block_lists_contains_value}

<img src={useBaseUrl('/img/blocks/block_lists_contains_value.svg')} alt="block_lists_contains_value.svg" />

Zwraca informację, czy lista zawiera określoną wartość.

### `Rozmiar listy` {#block_lists_size_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_size_of_value.svg')} alt="block_lists_size_of_value.svg" />

Zwraca liczbę elementów w wybranej liście.

## Blok raportujący listy

<img src={useBaseUrl('/img/blocks/list.svg')} alt="list.svg" />

Zwraca aktualną wartość wybranej listy.

- Typ: blok raportujący
- Przykładowy format wyjścia: `[item1,item2,item3]`
- Typowe użycie: podgląd zawartości listy lub przekazanie jej wartości do innych kompatybilnych bloków