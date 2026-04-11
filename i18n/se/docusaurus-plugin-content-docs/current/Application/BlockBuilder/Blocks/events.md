---
id: Events
title: Händelser
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Händelser

Kategorin **Händelser** innehåller block som startar skript när ett villkor inträffar.

## Grundläggande händelser

### `När programmet startar` {#block_event_when_program_started}

<img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />

Startar detta skript en gång när profilprogrammet börjar.

- Utlösare: programstart
- Typisk användning: initiera variabler, standardtillstånd för motorer, startljud

### `När` {#block_event_when}

<img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />

Körs när ett valt villkor blir sant.

- Utlösare: villkorsbaserad
- Typisk användning: förgrena logik baserat på körtidstillstånd

### `När timer är större än` {#block_event_when_timer_greater_than}

<img src={useBaseUrl('/img/blocks/block_event_when_timer_greater_than.svg')} alt="block_event_when_timer_greater_than.svg" />

Körs när timervärdet passerar ett tröskelvärde.

- Utlösare: förfluten tid
- Typisk användning: fördröjda åtgärder, tidsstyrda faser

### `När meddelande tas emot` {#block_event_when_message_recieved}

<img src={useBaseUrl('/img/blocks/block_event_when_message_recieved.svg')} alt="block_event_when_message_recieved.svg" />

Startar ett skript när ett matchande broadcast-meddelande tas emot.

- Utlösare: meddelandekanal
- Typisk användning: synkronisera flera skript

### `Skicka meddelande` {#block_event_broadcast}

<img src={useBaseUrl('/img/blocks/block_event_broadcast.svg')} alt="block_event_broadcast.svg" />

Skickar ett meddelande till alla skript som lyssnar efter det meddelandet.

- Utlösare: omedelbar sändning
- Typisk användning: meddela andra skript utan att vänta

### `Skicka meddelande och vänta` {#block_event_broadcast_and_wait}

<img src={useBaseUrl('/img/blocks/block_event_broadcast_and_wait.svg')} alt="block_event_broadcast_and_wait.svg" />

Skickar ett meddelande och pausar detta skript tills lyssnarna är klara.

- Utlösare: omedelbar sändning + vänta
- Typisk användning: stegvisa flöden där ordningen är viktig

## Hubbhändelser

### `Hubbknapp nedtryckt` {#block_hubs_all_event_button_pressed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_button_pressed.svg')} alt="block_hubs_all_event_button_pressed.svg" />

Körs när huvudknappen på hubben trycks ned.

- Tillståndsalternativ: `nedtryckt`, `släppt`, `ändrad`
- Obs: tillgängliga knappalternativ kan skilja sig mellan olika hubbmodeller (olika hubbar kan exponera olika uppsättningar knappar).

### `Hubbanslutning ändrad` {#block_hubs_all_event_connection_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_connection_changed.svg')} alt="block_hubs_all_event_connection_changed.svg" />

Körs när hubbens anslutningstillstånd ändras (ansluten eller frånkopplad).

- Utlösare: ändring av hubbens anslutningsstatus
- Typisk användning: hantering av återanslutning och säkert fallback-beteende efter länkbortfall

### `Hubbbatteri ändrat` {#block_hubs_all_event_battery_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_battery_changed.svg')} alt="block_hubs_all_event_battery_changed.svg" />

Körs när rapporterad batterinivå för hubben ändras.

- Utlösare: uppdatering av batterinivå (för hubbar som rapporterar batteristatus)
- Typisk användning: logik för låg batterinivå och byte till energisparläge

### `Hubbaccelerometer ändrad` {#block_hubs_all_event_accelerometer_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_accelerometer_changed.svg')} alt="block_hubs_all_event_accelerometer_changed.svg" />

Körs när accelerationsvärden ändras.

### `Hubblutning ändrad` {#block_hubs_all_event_tilt_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_changed.svg')} alt="block_hubs_all_event_tilt_changed.svg" />

Körs när lutningsvärdet ändras.

- Vinkelalternativ: `valfri`, `pitch`, `roll`, `yaw`
- Obs: `yaw` är endast tillgängligt på hubbar som tillhandahåller yaw-data.

### `Hubborientering ändrad` {#block_hubs_all_event_tilt_orientation_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_orientation_changed.svg')} alt="block_hubs_all_event_tilt_orientation_changed.svg" />

Körs när orienteringstillståndet ändras (till exempel fram/upp/ner/vänster/höger).

## Sensorporthändelser

### `Technic färgsensorhändelse` {#block_hubs_all_event_port_technic_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_color.svg')} alt="block_hubs_all_event_port_technic_sensor_color.svg" />

Körs när Technic-färgsensorn rapporterar en vald färg.

### `Technic avståndssensorhändelse` {#block_hubs_all_event_port_technic_sensor_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_distance.svg')} alt="block_hubs_all_event_port_technic_sensor_distance.svg" />

Körs när Technic-avståndssensorns värden matchar det valda villkoret.

- Jämförelsealternativ: `närmare än`, `längre bort än`, `exakt vid`
- Enhetsalternativ: `mm`, `cm`, `tum`, `%`
- Obs: tillgängliga enheter kan bero på sensorns läge och ansluten enhet.

### `BOOST avståndssensorhändelse` {#block_hubs_all_event_port_boost_sensor_when_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_event_port_boost_sensor_when_distance.svg" />

Körs när BOOST-avståndssensorn når valt tröskelvärde/villkor.

- Jämförelsealternativ: `närmare än`, `längre bort än`, `exakt vid`
- Enhetsalternativ: `%`, `cm`, `tum`

### `BOOST färgsensorhändelse` {#block_hubs_all_event_port_boost_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_color.svg')} alt="block_hubs_all_event_port_boost_sensor_color.svg" />

Körs när BOOST-sensorn detekterar en vald färg/värde.
