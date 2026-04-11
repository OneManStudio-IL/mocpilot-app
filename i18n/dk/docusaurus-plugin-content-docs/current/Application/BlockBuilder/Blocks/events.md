---
id: Events
title: Hændelser
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Hændelser

Kategorien **Hændelser** indeholder blokke, der starter scripts, når en betingelse opstår.

## Grundlæggende hændelser

### `Når program starter` {#block_event_when_program_started}

<img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />

Starter dette script én gang, når profilens program starter.

- Trigger: programstart
- Typisk brug: initialisere variabler, standard-motortilstande, opstartslyde

### `Når` {#block_event_when}

<img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />

Kører når en valgt betingelse bliver sand.

- Trigger: betingelsesbaseret
- Typisk brug: forgrene logik ud fra runtime-tilstand

### `Når timer er større end` {#block_event_when_timer_greater_than}

<img src={useBaseUrl('/img/blocks/block_event_when_timer_greater_than.svg')} alt="block_event_when_timer_greater_than.svg" />

Kører når timerværdien passerer en tærskel.

- Trigger: forløbet tid
- Typisk brug: forsinkede handlinger, tidsstyrede faser

### `Når besked modtages` {#block_event_when_message_recieved}

<img src={useBaseUrl('/img/blocks/block_event_when_message_recieved.svg')} alt="block_event_when_message_recieved.svg" />

Starter et script, når en matchende broadcast-besked modtages.

- Trigger: beskedkanal
- Typisk brug: synkronisere flere scripts

### `Broadcast` {#block_event_broadcast}

<img src={useBaseUrl('/img/blocks/block_event_broadcast.svg')} alt="block_event_broadcast.svg" />

Sender en besked til alle scripts, der lytter efter den besked.

- Trigger: øjeblikkelig afsendelse
- Typisk brug: give besked til andre scripts uden at vente

### `Broadcast og vent` {#block_event_broadcast_and_wait}

<img src={useBaseUrl('/img/blocks/block_event_broadcast_and_wait.svg')} alt="block_event_broadcast_and_wait.svg" />

Sender en besked og pauser dette script, indtil modtagere er færdige.

- Trigger: øjeblikkelig afsendelse + vent
- Typisk brug: trinvis flow hvor rækkefølge betyder noget

## Hub-hændelser

### `Hub-knap trykket` {#block_hubs_all_event_button_pressed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_button_pressed.svg')} alt="block_hubs_all_event_button_pressed.svg" />

Kører når hovedknappen på hubben ændrer tilstand.

- Tilstandsmuligheder: `trykket`, `frigivet`, `ændret`
- Bemærk: tilgængelige knapmuligheder kan variere efter hub-model (forskellige hubs kan have forskellige knapsæt).

### `Hub-forbindelse ændret` {#block_hubs_all_event_connection_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_connection_changed.svg')} alt="block_hubs_all_event_connection_changed.svg" />

Kører når hubbens forbindelsestilstand ændres (forbundet eller frakoblet).

- Trigger: ændring af hub-forbindelsesstatus
- Typisk brug: håndtering af genforbindelse og sikker fallback-adfærd efter forbindelsestab

### `Hub-batteri ændret` {#block_hubs_all_event_battery_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_battery_changed.svg')} alt="block_hubs_all_event_battery_changed.svg" />

Kører når det rapporterede batteriniveau for hubben ændres.

- Trigger: opdatering af batteriniveau (for hubs der rapporterer batteritilstand)
- Typisk brug: lav-batteri-advarsler og skift til strømbesparende tilstand

### `Hub-accelerometer ændret` {#block_hubs_all_event_accelerometer_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_accelerometer_changed.svg')} alt="block_hubs_all_event_accelerometer_changed.svg" />

Kører når accelerationsværdier ændres.

### `Hub-tilt ændret` {#block_hubs_all_event_tilt_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_changed.svg')} alt="block_hubs_all_event_tilt_changed.svg" />

Kører når tilt-værdi ændres.

- Vinkelmuligheder: `enhver`, `hældning`, `rulning`, `gyring`
- Bemærk: `gyring` er kun tilgængelig på hubs, der leverer yaw-data.

### `Hub-orientering ændret` {#block_hubs_all_event_tilt_orientation_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_orientation_changed.svg')} alt="block_hubs_all_event_tilt_orientation_changed.svg" />

Kører når orienteringstilstand ændres (f.eks. foran/op/ned/venstre/højre).

## Sensorport-hændelser

### `Technic farvesensor-hændelse` {#block_hubs_all_event_port_technic_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_color.svg')} alt="block_hubs_all_event_port_technic_sensor_color.svg" />

Kører når Technic-farvesensoren rapporterer en valgt farve.


### `Technic afstandssensor-hændelse` {#block_hubs_all_event_port_technic_sensor_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_distance.svg')} alt="block_hubs_all_event_port_technic_sensor_distance.svg" />

Kører når Technic-afstandssensorens værdier matcher den valgte betingelse.

- Sammenligningsmuligheder: `nærmere end`, `længere end`, `præcis ved`
- Enhedsmuligheder: `mm`, `cm`, `tommer`, `%`
- Bemærk: tilgængelige enheder kan afhænge af sensortilstand og tilsluttet enhed.

### `BOOST sensorafstand-hændelse` {#block_hubs_all_event_port_boost_sensor_when_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_event_port_boost_sensor_when_distance.svg" />

Kører når BOOST-afstandssensoren når den valgte tærskel/betingelse.

- Sammenligningsmuligheder: `nærmere end`, `længere end`, `præcis ved`
- Enhedsmuligheder: `%`, `cm`, `tommer`

### `BOOST sensorfarve-hændelse` {#block_hubs_all_event_port_boost_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_color.svg')} alt="block_hubs_all_event_port_boost_sensor_color.svg" />

Kører når BOOST-sensoren registrerer en valgt farve.