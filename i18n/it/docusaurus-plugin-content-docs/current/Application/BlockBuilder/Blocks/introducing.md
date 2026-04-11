---
id: BlocksIntroducing
title: Introduzione ai blocchi
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Introduzione ai blocchi

MOCPilot utilizza un sistema di programmazione visuale a blocchi simile a Scratch per aspetto e utilizzo.
Ogni blocco ha un ruolo specifico e le combinazioni valide definiscono il flusso di controllo e il flusso dei dati all'interno di uno script.
Utilizza la logica drag-and-drop e schemi di interazione in stile Scratch per offrire un modo comodo e familiare di creare programmi.

:::warning Avviso di compatibilita
Questo e un sistema a blocchi diverso, con un proprio set di blocchi e comportamenti.
I programmi MOCPilot non sono compatibili con i progetti Scratch: i programmi MOCPilot non possono essere importati in Scratch e i programmi Scratch non possono essere importati in MOCPilot.
:::

## Forme dei blocchi e significato

### Blocchi cappello

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />
  <img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />
</div>

Avviano uno script quando si verifica un evento specifico. I blocchi possono essere collegati solo sotto.

---

### Blocchi stack

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
</div>

Blocchi di comando principali che eseguono azioni.

---

### Blocchi C

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />
</div>

Blocchi di controllo a forma di C che contengono stack di blocchi annidati (cicli/condizioni).

---

### Blocchi reporter

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />
</div>

Restituiscono valori come numeri o stringhe.

---

### Blocchi booleani

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />
</div>

Restituiscono solo `true` o `false`, tipicamente usati nelle condizioni.

---

### Blocchi cap

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />
</div>

Terminano gli script e non consentono blocchi sotto.

---

### Stack di blocchi

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks_stack.svg')} alt="blocks_stack.svg" />
</div>

Uno stack di blocchi e una sequenza di blocchi collegati che viene eseguita come un unico flusso di script dall'alto verso il basso.
Gli stack iniziano di solito con un blocco evento e poi eseguono in ordine i blocchi collegati.

---

## Modello di esecuzione degli script

- Uno script inizia di solito da un blocco evento.
- I blocchi stack collegati vengono eseguiti dall'alto verso il basso.
- Piu script possono essere eseguiti in parallelo.
- I blocchi messaggio/broadcast vengono usati per sincronizzare gli script.
- Uno stack di blocchi e una sequenza di blocchi collegati tra loro.

## Dati e valori

- I blocchi reporter possono essere annidati negli input di comandi/condizioni.
- Le variabili memorizzano valori riutilizzabili tra blocchi e script.
- Le liste memorizzano raccolte ordinate per cronologia, code e dati di ricerca.

## Eventi e temporizzazione

- I blocchi evento reagiscono all'input utente, allo stato dell'hub, ai sensori o ai messaggi.
- Gli eventi basati su timer e sensori possono attivarsi frequentemente.
- Usa soglie, filtri o brevi attese per ridurre attivazioni ripetute rumorose.

## Hub, porte e controller

- I blocchi hub lavorano nel contesto di hub e porte.
- Alcuni blocchi sono disponibili solo per famiglie di hub/dispositivi specifici.
- I blocchi dashboard e gamepad forniscono input runtime e controllo dell'interfaccia.

## Flusso di lavoro consigliato

1. Inizia con un blocco evento e uno script minimo.
2. Valida presto direzione e intervalli di motori/sensori.
3. Estrai la logica ripetuta con messaggi e script di supporto.
4. Aggiungi protezioni (limiti, stop, valori di fallback) prima della messa a punto finale.

## Errori comuni

- L'assenza di un blocco evento di ingresso significa che lo script non parte mai.
- Una selezione errata di hub/porta non produce effetti visibili.
- Mescolare tipi di valore (testo/numero/booleano) puo produrre logica non valida.
- Eventi ad alta frequenza senza filtro possono sovraccaricare il comportamento.

## Struttura della documentazione in questa sezione

Usa le pagine di categoria in questo ordine:

- Luce
- Motori
- Sensori
- Eventi
- Controllo
- Operatori
- Variabili
- Liste
- I miei blocchi
- Controller dashboard
- Gamepad
