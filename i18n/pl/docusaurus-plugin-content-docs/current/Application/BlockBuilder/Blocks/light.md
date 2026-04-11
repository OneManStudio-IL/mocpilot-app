---
id: Light
title: Światło
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Światło

Ta strona opisuje bloki kategorii Światło używane do sterowania diodami LED i wyjściami świetlnymi w obsługiwanych hubach.

## Wspólne bloki światła

### `Ustaw kolor LED` {#block_hubs_all_light_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_led_color.svg')} alt="block_hubs_all_light_set_led_color.svg" />

Ustawia kolor diody LED huba przy użyciu predefiniowanych opcji kolorów.

- Typ: blok polecenia
- Typowe użycie: wskazywanie stanu (gotowy, w trakcie działania, ostrzeżenie, błąd)

### `Ustaw światło na` {#block_hubs_all_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_to.svg')} alt="block_hubs_all_light_light_turn_to.svg" />

Ustawia wybrane wyjście światła na docelową jasność/wartość.

- Typ: blok polecenia
- Typowe użycie: jasność świateł, intensywność stanu

### `Wyłącz światło` {#block_hubs_all_light_light_turn_off}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_off.svg')} alt="block_hubs_all_light_light_turn_off.svg" />

Wyłącza wybrane wyjście światła.

- Typ: blok polecenia
- Typowe użycie: sekwencja wyłączania, oszczędzanie baterii

### `Technic Move ustaw światło na` {#block_hubs_technicmove_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_light_light_turn_to.svg')} alt="block_hubs_technicmove_light_light_turn_to.svg" />

Wariant bloku `Ustaw światło na` dla huba Technic Move.

- Typ: blok polecenia
- Typowe użycie: ustawienie poziomu światła w hubie Move

## Bloki światła BuWizz 3

### `BuWizz 3 ustaw kolor LED` {#block_hubs_buwizz3_light_port_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color.svg')} alt="block_hubs_buwizz3_light_port_set_led_color.svg" />

Ustawia kolor LED na wybranym porcie BuWizz 3 przy użyciu wbudowanych opcji kolorów.

- Typ: blok polecenia

### `BuWizz 3 ustaw kolor LED (tekst)` {#block_hubs_buwizz3_light_port_set_led_color_string}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_string.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_string.svg" />

Ustawia kolor LED BuWizz 3 przy użyciu wartości tekstowej.

- Typ: blok polecenia
- Typowe użycie: dynamiczne nazwy kolorów z zmiennych

### `BuWizz 3 ustaw kolor LED (RGB)` {#block_hubs_buwizz3_light_port_set_led_color_rgb}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_rgb.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_rgb.svg" />

Ustawia kolor LED BuWizz 3 przy użyciu wartości RGB.

- Typ: blok polecenia
- Typowe użycie: pełna kontrola kolorów i gradientów