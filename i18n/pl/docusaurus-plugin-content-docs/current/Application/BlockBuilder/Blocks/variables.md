---
id: Variables
title: Zmienne
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Zmienne

Zmienne przechowują wartości, które mogą być odczytywane i aktualizowane w różnych stosach bloków oraz skryptach.

## Bloki poleceń zmiennych

### `Ustaw zmienną na` {#block_variables_set_to}

<img src={useBaseUrl('/img/blocks/block_variables_set_to.svg')} alt="block_variables_set_to.svg" />

Ustawia wybraną zmienną na określoną wartość.

- Typ: blok polecenia
- Typowe użycie: inicjalizacja stanu, nadpisanie poprzedniej wartości

### `Zmień zmienną o` {#block_variables_change_by}

<img src={useBaseUrl('/img/blocks/block_variables_change_by.svg')} alt="block_variables_change_by.svg" />

Dodaje określoną wartość do wybranej zmiennej.

- Typ: blok polecenia
- Typowe użycie: liczniki, wynik, sumowanie dystansu/czasu

## Blok raportujący wartość zmiennej

<img src={useBaseUrl('/img/blocks/variable.svg')} alt="variable.svg" />

Zwraca aktualną wartość wybranej zmiennej.

- Typ: blok raportujący
- Typowe użycie: użycie wartości zmiennej w operatorach, warunkach i wejściach poleceń