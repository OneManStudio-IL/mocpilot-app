---
id: Control
title: Controllo
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Controllo

I blocchi di controllo gestiscono il flusso di esecuzione: attese, cicli, diramazioni e arresto degli script.

## Blocchi di attesa

### `Attendi` {#block_control_wait_for}

<img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />

Mette in pausa lo script corrente per un tempo specificato.

### `Attendi fino a quando` {#block_control_wait_until}

<img src={useBaseUrl('/img/blocks/block_control_wait_until.svg')} alt="block_control_wait_until.svg" />

Mette in pausa lo script corrente fino a quando una condizione diventa vera.

## Blocchi di ciclo

### `Ripeti` {#block_control_repeat_for}

<img src={useBaseUrl('/img/blocks/block_control_repeat_for.svg')} alt="block_control_repeat_for.svg" />

Esegue i blocchi annidati un numero fisso di volte.

### `Ripeti fino a quando` {#block_control_repeat_until}

<img src={useBaseUrl('/img/blocks/block_control_repeat_until.svg')} alt="block_control_repeat_until.svg" />

Esegue i blocchi annidati ripetutamente fino a quando una condizione diventa vera.

### `Per sempre` {#block_control_repeat_forever}

<img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />

Esegue i blocchi annidati continuamente fino a quando il programma o lo script viene fermato.

## Blocchi di diramazione

### `Se` {#block_control_if}

<img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />

Esegue i blocchi annidati solo quando la condizione è vera.

### `Se / Altrimenti` {#block_control_if_else}

<img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />

Esegue un ramo quando la condizione è vera, altrimenti esegue il ramo alternativo.

### `Fai questo e questo` {#block_control_do_this_and_this}

<img src={useBaseUrl('/img/blocks/block_control_do_this_and_this.svg')} alt="block_control_do_this_and_this.svg" />

Esegue due sequenze di blocchi una dopo l’altra come parte di un’unica operazione di controllo.

## Blocchi di arresto

### `Ferma` {#block_control_stop}

<img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />

Interrompe l’esecuzione dello script (l’ambito dipende dall’opzione selezionata).

- Opzioni di arresto: `tutto`, `questo script`, `e termina il programma`

### `Ferma altri script` {#block_control_stop_other_stacks}

<img src={useBaseUrl('/img/blocks/block_control_stop_other_stacks.svg')} alt="block_control_stop_other_stacks.svg" />

Interrompe tutte le altre sequenze in esecuzione consentendo allo stesso tempo alla sequenza corrente di continuare.

## Blocchi di utilità hub/controllo

### `Imposta connessione` {#block_hubs_control_set_connect}

<img src={useBaseUrl('/img/blocks/block_hubs_control_set_connect.svg')} alt="block_hubs_control_set_connect.svg" />

Controlla lo stato di connessione dell’hub tramite la logica di controllo.

- Opzioni azione: `connetti`, `disconnetti`

### `È connesso` {#block_hubs_all_sensors_is_connected}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_connected.svg')} alt="block_hubs_all_sensors_is_connected.svg" />

Restituisce se l’hub è attualmente connesso.

- Tipo: blocco reporter booleano

### `BuWizz 2 imposta modalità potenza` {#block_hubs_buwizz_sensors_set_power_mode}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_set_power_mode.svg')} alt="block_hubs_buwizz_sensors_set_power_mode.svg" />

Imposta la modalità di potenza dell’hub BuWizz 2.

- Opzioni modalità: `Slow`, `Normal`, `Fast`, `Ludicrous`

### `BuWizz 2 ottieni modalità potenza` {#block_hubs_buwizz_sensors_get_power_mode}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_get_power_mode.svg')} alt="block_hubs_buwizz_sensors_get_power_mode.svg" />

Restituisce la modalità di potenza attualmente attiva del BuWizz 2.

- Opzioni formato di output: `testo`, `indice`

### `MouldKing imposta canale di controllo` {#block_hubs_mouldking_control_set_control_channel}

<img src={useBaseUrl('/img/blocks/block_hubs_mouldking_control_set_control_channel.svg')} alt="block_hubs_mouldking_control_set_control_channel.svg" />

Imposta il canale di controllo attivo per hub/controller MouldKing supportati.

- Opzioni canale: `A`, `B`, `C`

### `MouldKing ottieni canale di controllo` {#block_hubs_mouldking_control_get_control_channel}

<img src={useBaseUrl('/img/blocks/block_hubs_mouldking_control_get_control_channel.svg')} alt="block_hubs_mouldking_control_get_control_channel.svg" />

Restituisce il canale di controllo attivo corrente per hub/controller MouldKing supportati.

- Opzioni formato di output: `testo`, `indice`
