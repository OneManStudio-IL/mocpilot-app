---
id: Control
title: Sterowanie
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Sterowanie

Bloki sterowania zarządzają przepływem wykonywania: oczekiwaniem, pętlami, rozgałęzieniami oraz zatrzymywaniem skryptów.

## Bloki oczekiwania

### `Czekaj` {#block_control_wait_for}

<img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />

Wstrzymuje bieżący skrypt na określony czas.

### `Czekaj aż` {#block_control_wait_until}

<img src={useBaseUrl('/img/blocks/block_control_wait_until.svg')} alt="block_control_wait_until.svg" />

Wstrzymuje bieżący skrypt, aż warunek stanie się prawdziwy.

## Bloki pętli

### `Powtórz` {#block_control_repeat_for}

<img src={useBaseUrl('/img/blocks/block_control_repeat_for.svg')} alt="block_control_repeat_for.svg" />

Uruchamia zagnieżdżone bloki określoną liczbę razy.

### `Powtarzaj aż` {#block_control_repeat_until}

<img src={useBaseUrl('/img/blocks/block_control_repeat_until.svg')} alt="block_control_repeat_until.svg" />

Uruchamia zagnieżdżone bloki wielokrotnie, aż warunek stanie się prawdziwy.

### `Zawsze` {#block_control_repeat_forever}

<img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />

Uruchamia zagnieżdżone bloki ciągle, aż program lub skrypt zostanie zatrzymany.

## Bloki warunkowe

### `Jeżeli` {#block_control_if}

<img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />

Uruchamia zagnieżdżone bloki tylko wtedy, gdy warunek jest spełniony.

### `Jeżeli / W przeciwnym razie` {#block_control_if_else}

<img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />

Uruchamia jedną gałąź, gdy warunek jest spełniony, w przeciwnym razie uruchamia alternatywną gałąź.

### `Wykonaj to i to` {#block_control_do_this_and_this}

<img src={useBaseUrl('/img/blocks/block_control_do_this_and_this.svg')} alt="block_control_do_this_and_this.svg" />

Uruchamia dwa stosy bloków sekwencyjnie jako część jednej operacji sterowania.

## Bloki zatrzymania

### `Zatrzymaj` {#block_control_stop}

<img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />

Zatrzymuje wykonywanie skryptu (zakres zależy od wybranej opcji zatrzymania).

- Opcje zatrzymania: `wszystko`, `ten stos`, `i zakończ program`

### `Zatrzymaj inne stosy` {#block_control_stop_other_stacks}

<img src={useBaseUrl('/img/blocks/block_control_stop_other_stacks.svg')} alt="block_control_stop_other_stacks.svg" />

Zatrzymuje wszystkie inne uruchomione stosy, pozwalając bieżącemu stosowi kontynuować.

## Bloki narzędziowe huba/sterowania

### `Ustaw połączenie` {#block_hubs_control_set_connect}

<img src={useBaseUrl('/img/blocks/block_hubs_control_set_connect.svg')} alt="block_hubs_control_set_connect.svg" />

Steruje stanem połączenia huba z poziomu logiki sterowania.

- Opcje akcji: `połącz`, `rozłącz`

### `Czy połączony` {#block_hubs_all_sensors_is_connected}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_connected.svg')} alt="block_hubs_all_sensors_is_connected.svg" />

Zwraca informację, czy hub jest aktualnie połączony.

- Typ: blok raportujący (boolean)

### `BuWizz 2 ustaw tryb mocy` {#block_hubs_buwizz_sensors_set_power_mode}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_set_power_mode.svg')} alt="block_hubs_buwizz_sensors_set_power_mode.svg" />

Ustawia tryb mocy huba BuWizz 2.

- Opcje trybu: `Slow`, `Normal`, `Fast`, `Ludicrous`

### `BuWizz 2 pobierz tryb mocy` {#block_hubs_buwizz_sensors_get_power_mode}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_get_power_mode.svg')} alt="block_hubs_buwizz_sensors_get_power_mode.svg" />

Zwraca aktualnie aktywny tryb mocy BuWizz 2.

- Opcje formatu wyjścia: `tekst`, `indeks`

### `MouldKing ustaw kanał sterowania` {#block_hubs_mouldking_control_set_control_channel}

<img src={useBaseUrl('/img/blocks/block_hubs_mouldking_control_set_control_channel.svg')} alt="block_hubs_mouldking_control_set_control_channel.svg" />

Ustawia aktywny kanał sterowania dla obsługiwanego huba/kontrolera MouldKing.

- Opcje kanału: `A`, `B`, `C`

### `MouldKing pobierz kanał sterowania` {#block_hubs_mouldking_control_get_control_channel}

<img src={useBaseUrl('/img/blocks/block_hubs_mouldking_control_get_control_channel.svg')} alt="block_hubs_mouldking_control_get_control_channel.svg" />

Zwraca aktualnie aktywny kanał sterowania dla obsługiwanego huba/kontrolera MouldKing.

- Opcje formatu wyjścia: `tekst`, `indeks`