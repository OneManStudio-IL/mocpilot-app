---
id: Events
title: Události
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Události

Kategorie **Události** obsahuje bloky, které spouštějí skripty při splnění podmínky.

## Základní události

### `Když program začne` {#block_event_when_program_started}
<img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />
Spustí tento skript jednou při startu programu profilu.

### `Když` {#block_event_when}
<img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />
Spustí se, když se vybraná podmínka stane pravdivou.

### `Když časovač je větší než` {#block_event_when_timer_greater_than}
<img src={useBaseUrl('/img/blocks/block_event_when_timer_greater_than.svg')} alt="block_event_when_timer_greater_than.svg" />
Spustí se, když hodnota časovače překročí práh.

### `Když je přijata zpráva` {#block_event_when_message_recieved}
<img src={useBaseUrl('/img/blocks/block_event_when_message_recieved.svg')} alt="block_event_when_message_recieved.svg" />
Spustí skript při přijetí odpovídající vysílané zprávy.

### `Vyslat` {#block_event_broadcast}
<img src={useBaseUrl('/img/blocks/block_event_broadcast.svg')} alt="block_event_broadcast.svg" />
Pošle zprávu všem skriptům, které ji poslouchají.

### `Vyslat a čekat` {#block_event_broadcast_and_wait}
<img src={useBaseUrl('/img/blocks/block_event_broadcast_and_wait.svg')} alt="block_event_broadcast_and_wait.svg" />
Pošle zprávu a pozastaví tento skript, dokud posluchači neskončí.

## Události hubu

### `Stisk tlačítka hubu` {#block_hubs_all_event_button_pressed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_event_button_pressed.svg')} alt="block_hubs_all_event_button_pressed.svg" />
Spustí se při změně stavu hlavního tlačítka hubu.

- Možnosti stavu: `stisknuto`, `uvolněno`, `změněno`

### `Změna připojení hubu` {#block_hubs_all_event_connection_changed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_event_connection_changed.svg')} alt="block_hubs_all_event_connection_changed.svg" />
Spustí se při změně stavu připojení hubu.

### `Změna baterie hubu` {#block_hubs_all_event_battery_changed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_event_battery_changed.svg')} alt="block_hubs_all_event_battery_changed.svg" />
Spustí se při změně hlášené úrovně baterie hubu.

### `Změna akcelerometru hubu` {#block_hubs_all_event_accelerometer_changed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_event_accelerometer_changed.svg')} alt="block_hubs_all_event_accelerometer_changed.svg" />
Spustí se při změně hodnot zrychlení.

### `Změna náklonu hubu` {#block_hubs_all_event_tilt_changed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_changed.svg')} alt="block_hubs_all_event_tilt_changed.svg" />
Spustí se při změně hodnoty náklonu.

- Možnosti úhlu: `jakýkoli`, `náklon`, `rotace`, `kormidlování`

### `Změna orientace hubu` {#block_hubs_all_event_tilt_orientation_changed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_orientation_changed.svg')} alt="block_hubs_all_event_tilt_orientation_changed.svg" />
Spustí se při změně orientace.

## Události senzorů na portech

### `Událost barvy senzoru Technic` {#block_hubs_all_event_port_technic_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_color.svg')} alt="block_hubs_all_event_port_technic_sensor_color.svg" />
Spustí se, když senzor barvy Technic vrátí vybranou barvu/hodnotu.

- Možnosti jednotek: `procent`, `cm`, `palce`

### `Událost vzdálenosti senzoru Technic` {#block_hubs_all_event_port_technic_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_distance.svg')} alt="block_hubs_all_event_port_technic_sensor_distance.svg" />
Spustí se, když hodnoty senzoru vzdálenosti Technic odpovídají podmínce.

- Možnosti porovnání: `blíže než`, `dál než`, `přesně na`
- Možnosti jednotek: `mm`, `cm`, `palce`, `procent`

### `Událost vzdálenosti senzoru BOOST` {#block_hubs_all_event_port_boost_sensor_when_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_event_port_boost_sensor_when_distance.svg" />
Spustí se, když senzor vzdálenosti BOOST dosáhne vybraného prahu/podmínky.

- Možnosti porovnání: `blíže než`, `dál než`, `přesně na`
- Možnosti jednotek: `procent`, `cm`, `palce`

### `Událost barvy senzoru BOOST` {#block_hubs_all_event_port_boost_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_color.svg')} alt="block_hubs_all_event_port_boost_sensor_color.svg" />
Spustí se, když senzor BOOST detekuje vybranou barvu/hodnotu.

## Poznámky

- Událostní bloky se mohou spouštět velmi často.
- Pro stabilní chování přidejte prahy, filtrování nebo krátká čekání.
- Pro koordinaci skriptů preferujte vysílání zpráv.
