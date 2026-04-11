---
id: Events
title: Hendelser
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Hendelser

**Hendelser**-kategorien inneholder blokker som starter skript når en betingelse oppstår.

## Kjernehendelser

### `Når programmet starter` {#block_event_when_program_started}

<img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />

Starter dette skriptet én gang når profilprogrammet begynner.

- Trigger: programstart
- Typisk bruk: initialisere variabler, standard motorstatus, oppstartslyder

### `Når` {#block_event_when}

<img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />

Kjører når en valgt betingelse blir sann.

- Trigger: betingelsesbasert
- Typisk bruk: forgrene logikk basert på kjøretidstilstand

### `Når timer er større enn` {#block_event_when_timer_greater_than}

<img src={useBaseUrl('/img/blocks/block_event_when_timer_greater_than.svg')} alt="block_event_when_timer_greater_than.svg" />

Kjører når timerværdien passerer en terskel.

- Trigger: forløpt tid
- Typisk bruk: forsinkede handlinger, tidsstyrte faser

### `Når melding mottatt` {#block_event_when_message_recieved}

<img src={useBaseUrl('/img/blocks/block_event_when_message_recieved.svg')} alt="block_event_when_message_recieved.svg" />

Starter et skript når en tilsvarende kringkastingsmelding mottas.

- Trigger: meldingskanal
- Typisk bruk: synkronisere flere skript

### `Kringkast` {#block_event_broadcast}

<img src={useBaseUrl('/img/blocks/block_event_broadcast.svg')} alt="block_event_broadcast.svg" />

Sender en melding til alle skript som lytter etter den.

- Trigger: umiddelbar sending
- Typisk bruk: varsle andre skript uten å vente

### `Kringkast og vent` {#block_event_broadcast_and_wait}

<img src={useBaseUrl('/img/blocks/block_event_broadcast_and_wait.svg')} alt="block_event_broadcast_and_wait.svg" />

Sender en melding og setter dette skriptet på pause til mottakerne er ferdige.

- Trigger: umiddelbar sending + vent
- Typisk bruk: sekvensielle flyter der rekkefølge er viktig

## Hub-hendelser

### `Hub-knapp trykket` {#block_hubs_all_event_button_pressed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_button_pressed.svg')} alt="block_hubs_all_event_button_pressed.svg" />

Kjører når hovedknappen på huben trykkes.

- Tilstandsvalg: `trykket`, `sluppet`, `endret`
- Merk: tilgjengelige knappvalg kan variere etter hub-modell (ulike huber kan ha forskjellige knapper).

### `Hub-tilkobling endret` {#block_hubs_all_event_connection_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_connection_changed.svg')} alt="block_hubs_all_event_connection_changed.svg" />

Kjører når hubens tilkoblingsstatus endres (tilkoblet eller frakoblet).

- Trigger: endring i tilkoblingsstatus
- Typisk bruk: håndtering av gjenoppretting av tilkobling og sikker fallback etter brudd

### `Hub-batteri endret` {#block_hubs_all_event_battery_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_battery_changed.svg')} alt="block_hubs_all_event_battery_changed.svg" />

Kjører når rapportert batterinivå på huben endres.

- Trigger: oppdatering av batterinivå (for huber som støtter dette)
- Typisk bruk: lavt batteri-varsling og energisparemodus

### `Hub-akselerasjon endret` {#block_hubs_all_event_accelerometer_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_accelerometer_changed.svg')} alt="block_hubs_all_event_accelerometer_changed.svg" />

Kjører når akselerasjonsverdier endres.

### `Hub-tilt endret` {#block_hubs_all_event_tilt_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_changed.svg')} alt="block_hubs_all_event_tilt_changed.svg" />

Kjører når tilt-verdi endres.

- Vinkelvalg: `hvilken som helst`, `stigning`, `rulling`, `yaw`
- Merk: `yaw` er kun tilgjengelig på huber som støtter det.

### `Hub-orientering endret` {#block_hubs_all_event_tilt_orientation_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_orientation_changed.svg')} alt="block_hubs_all_event_tilt_orientation_changed.svg" />

Kjører når orienteringstilstanden endres (for eksempel front/opp/ned/venstre/høyre).

## Sensorport-hendelser

### `Technic fargesensor-hendelse` {#block_hubs_all_event_port_technic_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_color.svg')} alt="block_hubs_all_event_port_technic_sensor_color.svg" />

Kjører når Technic fargesensor rapporterer valgt farge.

### `Technic avstandssensor-hendelse` {#block_hubs_all_event_port_technic_sensor_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_distance.svg')} alt="block_hubs_all_event_port_technic_sensor_distance.svg" />

Kjører når Technic avstandssensorverdier matcher valgt betingelse.

- Sammenligningsvalg: `nærmere enn`, `lengre enn`, `nøyaktig på`
- Enhetsvalg: `mm`, `cm`, `tommer`, `%`
- Merk: tilgjengelige enheter kan avhenge av sensormodus og tilkoblet enhet.

### `BOOST avstandssensor-hendelse` {#block_hubs_all_event_port_boost_sensor_when_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_event_port_boost_sensor_when_distance.svg" />

Kjører når BOOST avstandssensor når valgt terskel/betingelse.

- Sammenligningsvalg: `nærmere enn`, `lengre enn`, `nøyaktig på`
- Enhetsvalg: `%`, `cm`, `tommer`

### `BOOST fargesensor-hendelse` {#block_hubs_all_event_port_boost_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_color.svg')} alt="block_hubs_all_event_port_boost_sensor_color.svg" />

Kjører når BOOST-sensor oppdager valgt farge/verdi.
