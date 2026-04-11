---
id: Events
title: Eventi
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Eventi

La categoria **Eventi** contiene blocchi che avviano script quando si verifica una condizione.

## Eventi principali

### `Quando il programma inizia` {#block_event_when_program_started}

<img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />

Avvia questo script una volta quando inizia il programma del profilo.

- Attivazione: avvio programma
- Uso tipico: inizializzare variabili, stati motore predefiniti, suoni di avvio

### `Quando` {#block_event_when}

<img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />

Esegue quando una condizione selezionata diventa vera.

- Attivazione: basata su condizione
- Uso tipico: diramare la logica in base allo stato a runtime

### `Quando il timer è maggiore di` {#block_event_when_timer_greater_than}

<img src={useBaseUrl('/img/blocks/block_event_when_timer_greater_than.svg')} alt="block_event_when_timer_greater_than.svg" />

Esegue quando il valore del timer supera una soglia.

- Attivazione: tempo trascorso
- Uso tipico: azioni ritardate, fasi temporizzate

### `Quando il messaggio è ricevuto` {#block_event_when_message_recieved}

<img src={useBaseUrl('/img/blocks/block_event_when_message_recieved.svg')} alt="block_event_when_message_recieved.svg" />

Avvia uno script quando viene ricevuto un messaggio broadcast corrispondente.

- Attivazione: canale messaggi
- Uso tipico: sincronizzare più script

### `Trasmettere` {#block_event_broadcast}

<img src={useBaseUrl('/img/blocks/block_event_broadcast.svg')} alt="block_event_broadcast.svg" />

Invia un messaggio a tutti gli script in ascolto di quel messaggio.

- Attivazione: invio immediato
- Uso tipico: notificare altri script senza attendere

### `Trasmettere e aspettare` {#block_event_broadcast_and_wait}

<img src={useBaseUrl('/img/blocks/block_event_broadcast_and_wait.svg')} alt="block_event_broadcast_and_wait.svg" />

Invia un messaggio e mette in pausa questo script finché gli ascoltatori non completano.

- Attivazione: invio immediato + attesa
- Uso tipico: flussi a fasi dove l'ordine è importante

## Eventi hub

### `Pulsante hub premuto` {#block_hubs_all_event_button_pressed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_button_pressed.svg')} alt="block_hubs_all_event_button_pressed.svg" />

Esegue quando viene premuto il pulsante principale sull'hub.

- Opzioni stato: `premuto`, `rilasciato`, `cambiato`
- Nota: le opzioni disponibili per i pulsanti possono variare in base al modello di hub (hub diversi possono esporre set di pulsanti diversi).

### `Connessione hub cambiata` {#block_hubs_all_event_connection_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_connection_changed.svg')} alt="block_hubs_all_event_connection_changed.svg" />

Esegue quando cambia lo stato di connessione dell'hub (connesso o disconnesso).

- Attivazione: cambio stato connessione hub
- Uso tipico: gestire riconnessioni e comportamento di fallback sicuro dopo una perdita di collegamento

### `Batteria hub cambiata` {#block_hubs_all_event_battery_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_battery_changed.svg')} alt="block_hubs_all_event_battery_changed.svg" />

Esegue quando cambia il livello batteria dell'hub riportato.

- Attivazione: aggiornamento livello batteria (per hub che riportano lo stato batteria)
- Uso tipico: logica di avviso batteria scarica e passaggio a modalità risparmio energetico

### `Accelerometro hub cambiato` {#block_hubs_all_event_accelerometer_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_accelerometer_changed.svg')} alt="block_hubs_all_event_accelerometer_changed.svg" />

Esegue quando cambiano i valori di accelerazione.

### `Inclinazione hub cambiata` {#block_hubs_all_event_tilt_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_changed.svg')} alt="block_hubs_all_event_tilt_changed.svg" />

Esegue quando cambia il valore di inclinazione.

- Opzioni angolo: `qualsiasi`, `beccheggio`, `rollio`, `imbardata`
- Nota: `imbardata` è disponibile solo sugli hub che forniscono dati di imbardata.

### `Orientamento hub cambiato` {#block_hubs_all_event_tilt_orientation_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_orientation_changed.svg')} alt="block_hubs_all_event_tilt_orientation_changed.svg" />

Esegue quando cambia lo stato di orientamento (ad esempio davanti/su/giù/sinistra/destra).

## Eventi sensori porta

### `Evento sensore colore Technic` {#block_hubs_all_event_port_technic_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_color.svg')} alt="block_hubs_all_event_port_technic_sensor_color.svg" />

Esegue quando il sensore colore Technic riporta un colore selezionato.


### `Evento sensore distanza Technic` {#block_hubs_all_event_port_technic_sensor_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_distance.svg')} alt="block_hubs_all_event_port_technic_sensor_distance.svg" />

Esegue quando i valori del sensore distanza Technic corrispondono alla condizione selezionata.

- Opzioni confronto: `più vicino di`, `più lontano di`, `esattamente a`
- Opzioni unità: `mm`, `cm`, `pollici`, `%`
- Nota: le unità disponibili possono dipendere dalla modalità del sensore e dal dispositivo collegato.

### `Evento sensore distanza BOOST` {#block_hubs_all_event_port_boost_sensor_when_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_event_port_boost_sensor_when_distance.svg" />

Esegue quando il sensore distanza BOOST raggiunge la soglia/condizione scelta.

- Opzioni confronto: `più vicino di`, `più lontano di`, `esattamente a`
- Opzioni unità: `%`, `cm`, `pollici`

### `Evento sensore colore BOOST` {#block_hubs_all_event_port_boost_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_color.svg')} alt="block_hubs_all_event_port_boost_sensor_color.svg" />

Esegue quando il sensore BOOST rileva un colore selezionato.
