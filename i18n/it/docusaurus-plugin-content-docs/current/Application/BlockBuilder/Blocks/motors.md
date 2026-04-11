---
id: Motors
title: Motori
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Motori

I blocchi motore vengono utilizzati per avviare, fermare, posizionare e regolare i motori collegati alle porte dell'hub.

## Blocchi di comando motore principali

### `Avvia motore` {#block_hubs_all_motors_port_start_motor}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor.svg')} alt="block_hubs_all_motors_port_start_motor.svg" />
Avvia il motore selezionato.

- Opzioni direzione: in senso orario / in senso antiorario

### `Ferma motore` {#block_hubs_all_motors_port_stop_motor}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_stop_motor.svg')} alt="block_hubs_all_motors_port_stop_motor.svg" />
Ferma il motore selezionato.

### `Esegui per` {#block_hubs_all_motors_port_run_for}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for.svg')} alt="block_hubs_all_motors_port_run_for.svg" />
Esegue il motore selezionato per il tempo/angolo/rotazione specificato in base alle impostazioni del blocco.

- Opzioni direzione: in senso orario / in senso antiorario
- Opzioni unità: `rotazioni`, `gradi`, `secondi`
- Nota: questa funzione richiede un motore sulla porta selezionata che supporti il controllo basato su encoder.

### `Avvia motore a velocita` {#block_hubs_all_motors_port_start_motor_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor_at_speed.svg')} alt="block_hubs_all_motors_port_start_motor_at_speed.svg" />
Avvia il motore con un valore di velocita esplicito.

### `Esegui per a velocita` {#block_hubs_all_motors_port_run_for_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for_at_speed.svg')} alt="block_hubs_all_motors_port_run_for_at_speed.svg" />
Esegue il motore per una durata/quantita target con velocita esplicita.

- Opzioni unità: `rotazioni`, `gradi`, `secondi`
- Nota: questa funzione richiede un motore sulla porta selezionata che supporti il controllo basato su encoder.

### `Imposta velocita motore` {#block_hubs_all_motors_port_set_motor_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_speed.svg')} alt="block_hubs_all_motors_port_set_motor_speed.svg" />
Imposta la velocita usata dai blocchi motore correlati.

## Blocchi posizione e movimento

### `Vai alla posizione` {#block_hubs_all_motors_port_go_to_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_position.svg')} alt="block_hubs_all_motors_port_go_to_position.svg" />
Sposta il motore alla posizione assoluta target.

- Opzioni percorso: `percorso piu breve`, `in senso orario`, `in senso antiorario`
- Nota: questa funzione richiede un motore sulla porta selezionata che supporti il controllo basato su encoder.

### `Vai alla posizione relativa` {#block_hubs_all_motors_port_go_to_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_relative_position.svg')} alt="block_hubs_all_motors_port_go_to_relative_position.svg" />
Sposta il motore con un offset relativo.

- Nota: questa funzione richiede un motore sulla porta selezionata che supporti il controllo basato su encoder.

### `BuWizz 3 vai alla posizione relativa` {#block_hubs_buwizz3_motors_port_go_to_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_motors_port_go_to_relative_position.svg')} alt="block_hubs_buwizz3_motors_port_go_to_relative_position.svg" />
Variante BuWizz 3 del blocco di posizionamento relativo.

- Nota: questa funzione richiede un motore sulla porta selezionata che supporti il controllo basato su encoder.

### `Imposta posizione relativa` {#block_hubs_all_motors_port_set_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_relative_position.svg')} alt="block_hubs_all_motors_port_set_relative_position.svg" />
Imposta il riferimento della posizione relativa del motore.

- Nota: questa funzione richiede un motore sulla porta selezionata che supporti il controllo basato su encoder.

### `Calibra cremagliera dello sterzo` {#block_hubs_all_motors_port_calibrate_steering_rack}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_calibrate_steering_rack.svg')} alt="block_hubs_all_motors_port_calibrate_steering_rack.svg" />
Calibra la posizione neutra/di riferimento della cremagliera dello sterzo.

- Requisito: il motore collegato alla porta selezionata deve supportare il tracciamento dell'angolo assoluto/relativo (encoder interno).
- Requisito meccanico: il movimento dell'asse sterzo deve essere fisicamente limitato a un intervallo valido (ad esempio con finecorsa della cremagliera/ingranaggi).
- Come funziona: il blocco esegue una scansione e misura l'intervallo di rotazione sterzo disponibile, quindi calcola i dati di calibrazione usati per la configurazione dello sterzo.
- Comportamento output: gli argomenti del blocco scrivono i risultati nelle variabili passate al blocco (comportamento simile al pass-by-reference). Queste variabili vengono mutate dal blocco e devono essere usate per leggere i risultati della calibrazione.

## Blocchi regolazione e sicurezza motore

### `Imposta comportamento motore all'arresto` {#block_hubs_all_motors_port_set_motor_to_at_stop}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_to_at_stop.svg')} alt="block_hubs_all_motors_port_set_motor_to_at_stop.svg" />
Imposta la modalita di arresto del motore (ad esempio freno/mantieni posizione/inerzia in base alle opzioni disponibili).

- Opzioni modalita arresto: `freno`, `mantieni posizione`, `inerzia`
- Nota: questa funzione richiede un motore sulla porta selezionata che supporti il controllo basato su encoder.

### `Imposta rilevamento stallo` {#block_hubs_all_motors_port_set_motors_stall_detection}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motors_stall_detection.svg')} alt="block_hubs_all_motors_port_set_motors_stall_detection.svg" />
Abilita o disabilita il rilevamento dello stallo.

- Nota: disponibile solo per l'hub MINDSTORMS Robot Inventor.

### `Imposta accelerazione` {#block_hubs_all_motors_port_set_acceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_acceleration.svg')} alt="block_hubs_all_motors_port_set_acceleration.svg" />
Imposta il profilo/tasso di accelerazione del motore.

- Opzioni profilo: `predefinito`, `veloce`, `bilanciato`, `morbido`, `lento`, `molto lento`
- Nota: questa funzione richiede un motore sulla porta selezionata che supporti il controllo basato su encoder.

### `Imposta decelerazione` {#block_hubs_all_motors_port_set_deceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_deceleration.svg')} alt="block_hubs_all_motors_port_set_deceleration.svg" />
Imposta il profilo/tasso di decelerazione del motore.

- Opzioni profilo: `predefinito`, `veloce`, `bilanciato`, `morbido`, `lento`, `molto lento`
- Nota: questa funzione richiede un motore sulla porta selezionata che supporti il controllo basato su encoder.

## Blocchi reporter motore

### `Posizione` {#block_hubs_all_motors_port_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_position.svg')} alt="block_hubs_all_motors_port_position.svg" />
Restituisce la posizione corrente del motore.

### `Posizione relativa` {#block_hubs_all_motors_port_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_relative_position.svg')} alt="block_hubs_all_motors_port_relative_position.svg" />
Restituisce il valore corrente della posizione relativa.

### `Velocita` {#block_hubs_all_motors_port_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_speed.svg')} alt="block_hubs_all_motors_port_speed.svg" />
Restituisce la velocita corrente del motore.

### `Potenza` {#block_hubs_all_motors_port_power}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_power.svg')} alt="block_hubs_all_motors_port_power.svg" />
Restituisce il valore corrente di potenza del motore.

- Nota: disponibile solo per l'hub MINDSTORMS Robot Inventor.

## Blocchi motore Technic Move

### `Avvia motori a velocita` {#block_hubs_technicmove_motors_start_motors_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_start_motors_at_speed.svg')} alt="block_hubs_technicmove_motors_start_motors_at_speed.svg" />
Avvia i motori di trazione Technic Move alla velocita selezionata.

### `Ferma motori` {#block_hubs_technicmove_motors_stop_motors}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_stop_motors.svg')} alt="block_hubs_technicmove_motors_stop_motors.svg" />
Ferma i motori di trazione Technic Move.

### `Freno` {#block_hubs_technicmove_motors_brake}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_brake.svg')} alt="block_hubs_technicmove_motors_brake.svg" />
Applica il comportamento di frenata ai motori Technic Move.

- Opzioni freno: `spento`, `abilitato`

### `Imposta cremagliera dello sterzo a` {#block_hubs_technicmove_motors_set_steering_rack_to}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_set_steering_rack_to.svg')} alt="block_hubs_technicmove_motors_set_steering_rack_to.svg" />
Imposta la posizione/valore target della cremagliera dello sterzo.

### `Calibra cremagliera dello sterzo` {#block_hubs_technicmove_motors_calibrate_steering_rack}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_calibrate_steering_rack.svg')} alt="block_hubs_technicmove_motors_calibrate_steering_rack.svg" />
Calibra la cremagliera dello sterzo Technic Move usando l'algoritmo di calibrazione interno dell'hub e il rilevamento automatico dell'intervallo sterzo.

- Nota: l'asse del motore deve essere meccanicamente limitato (ad esempio da un meccanismo a cremagliera).
