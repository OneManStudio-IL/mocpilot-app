---
id: Events
title: Udalosti
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Udalosti

Kategória **Udalosti** obsahuje bloky, ktoré spúšťajú skripty, keď nastane určitá podmienka.

## Základné udalosti

### `Keď sa program spustí` {#block_event_when_program_started}

<img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />

Spustí tento skript raz pri začiatku programu.

- Spúšťač: spustenie programu
- Typické použitie: inicializácia premenných, predvolené stavy motorov, štartovacie zvuky

### `Keď` {#block_event_when}

<img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />

Spustí sa, keď sa vybraná podmienka stane pravdivou.

- Spúšťač: podmienka
- Typické použitie: vetvenie logiky podľa aktuálneho stavu

### `Keď časovač je väčší ako` {#block_event_when_timer_greater_than}

<img src={useBaseUrl('/img/blocks/block_event_when_timer_greater_than.svg')} alt="block_event_when_timer_greater_than.svg" />

Spustí sa, keď hodnota časovača prekročí nastavený limit.

- Spúšťač: uplynutý čas
- Typické použitie: oneskorené akcie, časované fázy

### `Keď je prijatá správa` {#block_event_when_message_recieved}

<img src={useBaseUrl('/img/blocks/block_event_when_message_recieved.svg')} alt="block_event_when_message_recieved.svg" />

Spustí skript po prijatí zodpovedajúcej správy.

- Spúšťač: správa
- Typické použitie: synchronizácia viacerých skriptov

### `Vysielaj správu` {#block_event_broadcast}

<img src={useBaseUrl('/img/blocks/block_event_broadcast.svg')} alt="block_event_broadcast.svg" />

Odošle správu všetkým skriptom, ktoré ju sledujú.

- Spúšťač: okamžité odoslanie
- Typické použitie: informovanie iných skriptov bez čakania

### `Vysielaj správu a čakaj` {#block_event_broadcast_and_wait}

<img src={useBaseUrl('/img/blocks/block_event_broadcast_and_wait.svg')} alt="block_event_broadcast_and_wait.svg" />

Odošle správu a pozastaví tento skript, kým ostatné skripty nedokončia vykonávanie.

- Spúšťač: odoslanie + čakanie
- Typické použitie: riadené sekvencie, kde záleží na poradí

## Udalosti hubu

### `Tlačidlo hubu` {#block_hubs_all_event_button_pressed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_button_pressed.svg')} alt="block_hubs_all_event_button_pressed.svg" />

Spustí sa pri zmene stavu tlačidla hubu.

- Možnosti stavu: `stlačené`, `uvoľnené`, `zmenené`
- Poznámka: dostupné tlačidlá závisia od modelu hubu.

### `Zmena pripojenia hubu` {#block_hubs_all_event_connection_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_connection_changed.svg')} alt="block_hubs_all_event_connection_changed.svg" />

Spustí sa pri zmene stavu pripojenia hubu.

- Spúšťač: zmena pripojenia
- Typické použitie: opätovné pripojenie, bezpečné správanie pri výpadku

### `Zmena batérie hubu` {#block_hubs_all_event_battery_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_battery_changed.svg')} alt="block_hubs_all_event_battery_changed.svg" />

Spustí sa pri zmene úrovne batérie hubu.

- Spúšťač: aktualizácia batérie
- Typické použitie: varovanie pri nízkej batérii

### `Zmena akcelerometra` {#block_hubs_all_event_accelerometer_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_accelerometer_changed.svg')} alt="block_hubs_all_event_accelerometer_changed.svg" />

Spustí sa pri zmene hodnôt zrýchlenia.

### `Zmena náklonu` {#block_hubs_all_event_tilt_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_changed.svg')} alt="block_hubs_all_event_tilt_changed.svg" />

Spustí sa pri zmene náklonu.

- Možnosti osi: `akýkoľvek`, `náklon`, `rotácia`, `yaw`

### `Zmena orientácie` {#block_hubs_all_event_tilt_orientation_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_orientation_changed.svg')} alt="block_hubs_all_event_tilt_orientation_changed.svg" />

Spustí sa pri zmene orientácie hubu.

## Udalosti senzorov portu

### `Udalosť farby Technic` {#block_hubs_all_event_port_technic_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_color.svg')} alt="block_hubs_all_event_port_technic_sensor_color.svg" />

Spustí sa, keď senzor farby deteguje vybranú farbu.

### `Udalosť vzdialenosti Technic` {#block_hubs_all_event_port_technic_sensor_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_distance.svg')} alt="block_hubs_all_event_port_technic_sensor_distance.svg" />

Spustí sa, keď vzdialenosť splní podmienku.

- Porovnania: `bližšie ako`, `ďalej ako`, `presne na`
- Jednotky: `mm`, `cm`, `palce`, `%`

### `Udalosť vzdialenosti BOOST` {#block_hubs_all_event_port_boost_sensor_when_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_event_port_boost_sensor_when_distance.svg" />

Spustí sa pri splnení podmienky vzdialenosti BOOST senzora.
