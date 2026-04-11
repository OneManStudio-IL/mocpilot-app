---
id: DashboardControllers
title: Controller dashboard
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Controller dashboard

Questi blocchi vengono utilizzati per leggere l’input dell’utente dai controlli su schermo, reagire alle azioni dell’utente e aggiornare lo stato dell’interfaccia dashboard.

## Blocchi globali del controller dashboard

### `Imposta colore controller` {#block_dashboard_controller_all_set_color}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_color.svg')} alt="block_dashboard_controller_all_set_color.svg" />

Modifica il colore di accento visivo del controller dashboard selezionato.

- Tipo: blocco di comando
- Utilizzo tipico: indicare stati di runtime o modificare dinamicamente lo stile del controller in base alle condizioni

### `Imposta interattività controller` {#block_dashboard_controller_all_set_interactivity}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_interactivity.svg')} alt="block_dashboard_controller_all_set_interactivity.svg" />

Controlla l’interattività del controller dashboard selezionato.  
Se l’interattività è disabilitata, il controller non reagisce al tocco.

- Tipo: blocco di comando
- Utilizzo tipico: bloccare temporaneamente i controlli durante logiche specifiche o stati di sicurezza
- Opzioni stato: `abilita`, `disabilita`

## Blocchi pulsante

### `Evento pulsante` {#block_dashboard_controller_button_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_event.svg')} alt="block_dashboard_controller_button_event.svg" />

Si attiva quando il pulsante della dashboard cambia stato (premuto/rilasciato).

- Tipo: blocco evento
- Output: avvia lo script collegato
- Opzioni stato: `premuto`, `rilasciato`

### `Valore pulsante (booleano)` {#block_dashboard_controller_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_value_boolean.svg')} alt="block_dashboard_controller_button_value_boolean.svg" />

Restituisce lo stato corrente del pulsante della dashboard.

- Tipo: blocco valore
- Output: `true`/`false`
- Opzioni stato: `premuto`, `rilasciato`

## Blocchi D-pad

### `Evento D-pad` {#block_dashboard_controller_dpad_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_event.svg')} alt="block_dashboard_controller_dpad_event.svg" />

Si attiva quando la direzione del D-pad cambia o corrisponde alla direzione configurata.

- Tipo: blocco evento
- Output: avvia lo script collegato
- Opzioni direzione: `su`, `giù`, `sinistra`, `destra`
- Opzioni stato: `premuto`, `rilasciato`

### `Valore D-pad (booleano)` {#block_dashboard_controller_dpad_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_value_boolean.svg')} alt="block_dashboard_controller_dpad_value_boolean.svg" />

Restituisce se una direzione selezionata del D-pad è attiva.

- Tipo: blocco valore
- Output: `true`/`false`
- Opzioni direzione: `su`, `giù`, `sinistra`, `destra`
- Opzioni stato: `premuto`, `rilasciato`

## Blocchi joystick

### `Evento joystick` {#block_dashboard_controller_joystick_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_event.svg')} alt="block_dashboard_controller_joystick_event.svg" />

Si attiva quando la posizione del joystick cambia.

- Tipo: blocco evento
- Output: avvia lo script collegato
- Opzioni stato: `su`, `giù`, `sinistra`, `destra`, `spostato`, `rilasciato`

### `Valore joystick (float)` {#block_dashboard_controller_joystick_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_value_float.svg')} alt="block_dashboard_controller_joystick_value_float.svg" />

Restituisce il valore dell’asse del joystick.

- Tipo: blocco valore
- Output: numerico (float), tipicamente in un intervallo normalizzato
- Opzioni asse: `asse X`, `asse Y`

## Blocchi pedali

### `Evento pedali` {#block_dashboard_controller_pedals_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_event.svg')} alt="block_dashboard_controller_pedals_event.svg" />

Si attiva quando l’input dei pedali cambia.

- Tipo: blocco evento
- Output: avvia lo script collegato
- Opzioni pedale: `qualsiasi`, `freno`, `accelerazione`
- Opzioni stato: `spostato`, `premuto`, `rilasciato`

### `Valore pedali (float)` {#block_dashboard_controller_pedals_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_float.svg')} alt="block_dashboard_controller_pedals_value_float.svg" />

Restituisce il valore analogico dei pedali.

- Tipo: blocco valore
- Output: numerico (float)

### `Valore pedali (booleano)` {#block_dashboard_controller_pedals_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_boolean.svg')} alt="block_dashboard_controller_pedals_value_boolean.svg" />

Restituisce lo stato selezionato in base al fatto che un pedale sia premuto o rilasciato.

- Tipo: blocco valore
- Output: `true`/`false`
- Opzioni pedale: `freno`, `accelerazione`
- Opzioni stato: `premuto`, `rilasciato`

## Blocchi slider

### `Evento slider` {#block_dashboard_controller_slider_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_event.svg')} alt="block_dashboard_controller_slider_event.svg" />

Si attiva quando il valore dello slider cambia.

- Tipo: blocco evento
- Output: avvia lo script collegato
- Opzioni stato: `basso`, `alto`, `spostato`, `rilasciato`

### `Valore slider (float)` {#block_dashboard_controller_slider_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_value_float.svg')} alt="block_dashboard_controller_slider_value_float.svg" />

Restituisce il valore corrente dello slider.

- Tipo: blocco valore
- Output: numerico (float)

## Blocchi stepper

### `Evento stepper` {#block_dashboard_controller_stepper_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_event.svg')} alt="block_dashboard_controller_stepper_event.svg" />

Si attiva quando il valore dello stepper cambia di un passo.

- Tipo: blocco evento
- Output: avvia lo script collegato
- Opzioni passo: `qualsiasi`, `reset`, `meno`, `più`
- Opzioni stato: `premuto`, `rilasciato`

### `Valore stepper (float)` {#block_dashboard_controller_stepper_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_value_float.svg')} alt="block_dashboard_controller_stepper_value_float.svg" />

Restituisce il valore corrente dello stepper.

- Tipo: blocco valore
- Output: numerico (float)

## Blocchi volante

### `Evento volante` {#block_dashboard_controller_steering_wheel_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_event.svg')} alt="block_dashboard_controller_steering_wheel_event.svg" />

Si attiva quando la posizione del volante cambia.

- Tipo: blocco evento
- Output: avvia lo script collegato
- Opzioni stato: `spostato`, `premuto`, `rilasciato`

### `Valore volante (float)` {#block_dashboard_controller_steering_wheel_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_value_float.svg')} alt="block_dashboard_controller_steering_wheel_value_float.svg" />

Restituisce il valore corrente del volante.

- Tipo: blocco valore
- Output: numerico (float)

### `Valore volante (booleano)` {#block_dashboard_controller_steeringwheel_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steeringwheel_value_boolean.svg')} alt="block_dashboard_controller_steeringwheel_value_boolean.svg" />

Restituisce lo stato selezionato in base al fatto che il volante sia premuto o rilasciato.

- Tipo: blocco valore
- Output: `true`/`false`
- Opzioni stato: `spostato`, `premuto`, `rilasciato`

## Blocchi interruttore

### `Evento interruttore` {#block_dashboard_controller_switch_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_event.svg')} alt="block_dashboard_controller_switch_event.svg" />

Si attiva quando lo stato dell’interruttore cambia.

- Tipo: blocco evento
- Output: avvia lo script collegato
- Opzioni stato: `abilitato`, `spento`

### `Valore interruttore (booleano)` {#block_dashboard_controller_switch_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_value_boolean.svg')} alt="block_dashboard_controller_switch_value_boolean.svg" />

Restituisce lo stato corrente dell’interruttore.

- Tipo: blocco valore
- Output: `true`/`false`
- Opzioni stato: `abilitato`, `spento`

## Blocchi monitor

### `Mostra monitor` {#block_dashboard_controller_monitor_show}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_show.svg')} alt="block_dashboard_controller_monitor_show.svg" />

Visualizza informazioni (testo o valore) sul monitor della dashboard.

- Tipo: blocco di comando
- Utilizzo tipico: mostrare livello batteria, angolo motore, dispositivo connesso su una porta del hub e altre informazioni runtime

### `Imposta valore monitor` {#block_dashboard_controller_monitor_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_set_value.svg')} alt="block_dashboard_controller_monitor_set_value.svg" />

Imposta il valore intero per un monitor tachimetro della dashboard.

- Tipo: blocco di comando
- Utilizzo tipico: aggiornare il valore del tachimetro in tempo reale

### `Imposta valore inclinazione monitor` {#block_dashboard_controller_monitor_tilt_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_tilt_set_value.svg')} alt="block_dashboard_controller_monitor_tilt_set_value.svg" />

Imposta il valore di inclinazione (beccheggio/rollio) per il monitor di inclinazione della dashboard.

- Tipo: blocco di comando
- Utilizzo tipico: visualizzare valori di inclinazione in tempo reale
- Opzioni asse: `beccheggio`, `rollio`
