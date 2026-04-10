---
id: Events
title: Tapahtumat
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Tapahtumat

**Tapahtumat**-kategoria sisältää lohkoja, jotka käynnistävät skriptejä, kun ehto toteutuu. :contentReference[oaicite:0]{index=0}

## Perustapahtumat

### `Kun ohjelma käynnistyy` {#block_event_when_program_started}

<img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />

Käynnistää skriptin kerran ohjelman alussa.

- Laukaisin: ohjelman käynnistys
- Tyypillinen käyttö: alustukset, oletusarvot

### `Kun` {#block_event_when}

<img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />

Suorittaa, kun ehto on tosi.

- Laukaisin: ehto

### `Kun ajastin suurempi kuin` {#block_event_when_timer_greater_than}

<img src={useBaseUrl('/img/blocks/block_event_when_timer_greater_than.svg')} alt="block_event_when_timer_greater_than.svg" />

Suorittaa, kun ajastin ylittää arvon.

### `Kun viesti vastaanotettu` {#block_event_when_message_recieved}

<img src={useBaseUrl('/img/blocks/block_event_when_message_recieved.svg')} alt="block_event_when_message_recieved.svg" />

Käynnistää skriptin viestin saapuessa.

### `Lähetä viesti` {#block_event_broadcast}

<img src={useBaseUrl('/img/blocks/block_event_broadcast.svg')} alt="block_event_broadcast.svg" />

Lähettää viestin muille skripteille.

### `Lähetä viesti ja odota` {#block_event_broadcast_and_wait}

<img src={useBaseUrl('/img/blocks/block_event_broadcast_and_wait.svg')} alt="block_event_broadcast_and_wait.svg" />

Lähettää viestin ja odottaa.

## Hub-tapahtumat

### `Hubin painike painettu` {#block_hubs_all_event_button_pressed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_button_pressed.svg')} alt="block_hubs_all_event_button_pressed.svg" />

Suorittaa, kun painike painetaan.

- Tilat: `painettu`, `vapautettu`, `muuttunut`

### `Hubin yhteys muuttui` {#block_hubs_all_event_connection_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_connection_changed.svg')} alt="block_hubs_all_event_connection_changed.svg" />

Suorittaa, kun yhteys muuttuu.

### `Hubin akku muuttui` {#block_hubs_all_event_battery_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_battery_changed.svg')} alt="block_hubs_all_event_battery_changed.svg" />

Suorittaa, kun akun tila muuttuu.

### `Hubin kiihtyvyys muuttui` {#block_hubs_all_event_accelerometer_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_accelerometer_changed.svg')} alt="block_hubs_all_event_accelerometer_changed.svg" />

Suorittaa, kun kiihtyvyys muuttuu.

### `Hubin kallistus muuttui` {#block_hubs_all_event_tilt_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_changed.svg')} alt="block_hubs_all_event_tilt_changed.svg" />

Suorittaa, kun kallistus muuttuu.

### `Hubin suunta muuttui` {#block_hubs_all_event_tilt_orientation_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_orientation_changed.svg')} alt="block_hubs_all_event_tilt_orientation_changed.svg" />

Suorittaa, kun suunta muuttuu.

## Anturitapahtumat

### `Technic-värianturi tapahtuma` {#block_hubs_all_event_port_technic_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_color.svg')} alt="block_hubs_all_event_port_technic_sensor_color.svg" />

Suorittaa, kun väri havaitaan.

### `Technic-etäisyysanturi tapahtuma` {#block_hubs_all_event_port_technic_sensor_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_distance.svg')} alt="block_hubs_all_event_port_technic_sensor_distance.svg" />

Suorittaa, kun etäisyys täyttää ehdon.

### `BOOST-etäisyysanturi tapahtuma` {#block_hubs_all_event_port_boost_sensor_when_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_event_port_boost_sensor_when_distance.svg" />

Suorittaa, kun etäisyys saavutetaan.

### `BOOST-värianturi tapahtuma` {#block_hubs_all_event_port_boost_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_color.svg')} alt="block_hubs_all_event_port_boost_sensor_color.svg" />

Suorittaa, kun väri havaitaan.

## Käyttöhuomiot

- Tapahtumat voivat laukaista usein.
- Käytä viiveitä tai rajoja vakauden parantamiseksi.
- Käytä viestejä skriptien synkronointiin.