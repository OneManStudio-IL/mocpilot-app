---
id: Events
title: Zdarzenia
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Zdarzenia

Kategoria **Zdarzenia** zawiera bloki, które uruchamiają skrypty, gdy wystąpi określony warunek.

## Zdarzenia podstawowe

### `Gdy program się uruchomi` {#block_event_when_program_started}

<img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />

Uruchamia ten skrypt jednokrotnie przy starcie programu profilu.

- Wyzwalacz: uruchomienie programu
- Typowe użycie: inicjalizacja zmiennych, domyślne stany silników, dźwięki startowe

### `Gdy` {#block_event_when}

<img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />

Uruchamia się, gdy wybrany warunek stanie się prawdziwy.

- Wyzwalacz: warunek
- Typowe użycie: rozgałęzianie logiki w zależności od stanu działania

### `Gdy timer większy niż` {#block_event_when_timer_greater_than}

<img src={useBaseUrl('/img/blocks/block_event_when_timer_greater_than.svg')} alt="block_event_when_timer_greater_than.svg" />

Uruchamia się, gdy wartość timera przekroczy określony próg.

- Wyzwalacz: upływ czasu
- Typowe użycie: opóźnione działania, fazy czasowe

### `Gdy odebrano wiadomość` {#block_event_when_message_recieved}

<img src={useBaseUrl('/img/blocks/block_event_when_message_recieved.svg')} alt="block_event_when_message_recieved.svg" />

Uruchamia skrypt po odebraniu pasującej wiadomości rozgłoszeniowej.

- Wyzwalacz: kanał wiadomości
- Typowe użycie: synchronizacja wielu skryptów

### `Nadaj komunikat` {#block_event_broadcast}

<img src={useBaseUrl('/img/blocks/block_event_broadcast.svg')} alt="block_event_broadcast.svg" />

Wysyła wiadomość do wszystkich skryptów nasłuchujących tego komunikatu.

- Wyzwalacz: natychmiastowe wysłanie
- Typowe użycie: powiadamianie innych skryptów bez oczekiwania

### `Nadaj komunikat i czekaj` {#block_event_broadcast_and_wait}

<img src={useBaseUrl('/img/blocks/block_event_broadcast_and_wait.svg')} alt="block_event_broadcast_and_wait.svg" />

Wysyła wiadomość i wstrzymuje ten skrypt, aż odbiorcy zakończą działanie.

- Wyzwalacz: natychmiastowe wysłanie + oczekiwanie
- Typowe użycie: sekwencyjne przepływy, gdzie kolejność ma znaczenie

## Zdarzenia huba

### `Naciśnięto przycisk huba` {#block_hubs_all_event_button_pressed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_button_pressed.svg')} alt="block_hubs_all_event_button_pressed.svg" />

Uruchamia się, gdy główny przycisk na hubie zostanie naciśnięty.

- Opcje stanu: `naciśnięty`, `zwolniony`, `zmieniony`
- Uwaga: dostępne opcje przycisków mogą się różnić w zależności od modelu huba.

### `Zmiana połączenia huba` {#block_hubs_all_event_connection_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_connection_changed.svg')} alt="block_hubs_all_event_connection_changed.svg" />

Uruchamia się, gdy stan połączenia huba ulega zmianie (połączony/rozłączony).

- Wyzwalacz: zmiana statusu połączenia
- Typowe użycie: obsługa ponownego łączenia i bezpieczne zachowanie po utracie połączenia

### `Zmiana baterii huba` {#block_hubs_all_event_battery_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_battery_changed.svg')} alt="block_hubs_all_event_battery_changed.svg" />

Uruchamia się, gdy zmienia się raportowany poziom baterii huba.

- Wyzwalacz: aktualizacja poziomu baterii
- Typowe użycie: logika ostrzeżeń o niskim poziomie baterii i tryby oszczędzania energii

### `Zmiana akcelerometru huba` {#block_hubs_all_event_accelerometer_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_accelerometer_changed.svg')} alt="block_hubs_all_event_accelerometer_changed.svg" />

Uruchamia się, gdy wartości przyspieszenia ulegają zmianie.

### `Zmiana nachylenia huba` {#block_hubs_all_event_tilt_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_changed.svg')} alt="block_hubs_all_event_tilt_changed.svg" />

Uruchamia się, gdy zmienia się wartość nachylenia.

- Opcje kąta: `dowolny`, `pitch`, `roll`, `yaw`
- Uwaga: `yaw` dostępny tylko na hubach, które go obsługują.

### `Zmiana orientacji huba` {#block_hubs_all_event_tilt_orientation_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_orientation_changed.svg')} alt="block_hubs_all_event_tilt_orientation_changed.svg" />

Uruchamia się, gdy zmienia się stan orientacji (np. przód/góra/dół/lewo/prawo).

## Zdarzenia portów czujników

### `Zdarzenie czujnika koloru Technic` {#block_hubs_all_event_port_technic_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_color.svg')} alt="block_hubs_all_event_port_technic_sensor_color.svg" />

Uruchamia się, gdy czujnik koloru Technic wykryje wybrany kolor.

### `Zdarzenie czujnika odległości Technic` {#block_hubs_all_event_port_technic_sensor_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_distance.svg')} alt="block_hubs_all_event_port_technic_sensor_distance.svg" />

Uruchamia się, gdy wartości czujnika odległości Technic spełniają wybrany warunek.

- Opcje porównania: `bliżej niż`, `dalej niż`, `dokładnie`
- Opcje jednostek: `mm`, `cm`, `cal`, `%`
- Uwaga: dostępne jednostki zależą od trybu czujnika i podłączonego urządzenia.

### `Zdarzenie czujnika odległości BOOST` {#block_hubs_all_event_port_boost_sensor_when_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_event_port_boost_sensor_when_distance.svg" />

Uruchamia się, gdy czujnik odległości BOOST osiągnie wybrany próg lub warunek.

- Opcje porównania: `bliżej niż`, `dalej niż`, `dokładnie`
- Opcje jednostek: `%`, `cm`, `cal`

### `Zdarzenie czujnika koloru BOOST` {#block_hubs_all_event_port_boost_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_color.svg')} alt="block_hubs_all_event_port_boost_sensor_color.svg" />

Uruchamia się, gdy czujnik BOOST wykryje wybrany kolor lub wartość.