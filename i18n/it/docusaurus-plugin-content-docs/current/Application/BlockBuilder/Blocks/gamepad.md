---
id: Gamepad
title: Gamepad
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Gamepad
I blocchi Gamepad vengono utilizzati per reagire all’input del controller e leggere i valori correnti dello stato del gamepad.

## Blocchi evento

### `Quando il pulsante del gamepad è` {#block_gamepad_event_when_button_is}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is.svg')} alt="block_gamepad_event_when_button_is.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is_sony.svg')} alt="block_gamepad_event_when_button_is_sony.svg" />
</div>

Si attiva quando il pulsante selezionato del gamepad corrisponde allo stato configurato.

- Tipo: blocco evento
- Opzioni pulsante (layout Xbox): `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Opzioni pulsante (layout Sony): `croce`, `cerchio`, `quadrato`, `triangolo`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- Opzioni stato: `premuto`, `rilasciato`

### `Quando il D-pad del gamepad è` {#block_gamepad_event_when_dpad_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_dpad_is.svg')} alt="block_gamepad_event_when_dpad_is.svg" />

Si attiva quando la direzione/stato del D-pad corrisponde alla condizione selezionata.

- Tipo: blocco evento
- Opzioni direzione: `su`, `giù`, `sinistra`, `destra`
- Opzioni stato: `premuto`, `rilasciato`

### `Quando la levetta del gamepad è` {#block_gamepad_event_when_thumbstick_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_thumbstick_is.svg')} alt="block_gamepad_event_when_thumbstick_is.svg" />

Si attiva quando la condizione della levetta corrisponde alle opzioni selezionate.

In base alle opzioni attuali, questo blocco supporta:

- Selezione levetta: `sinistra` / `destra`
- Selezione direzione/stato: `su`, `giù`, `sinistra`, `destra`, `spostato`, `rilasciato`
- Tipo: blocco evento
- Utilizzo tipico: reagire al movimento direzionale o al rilascio della levetta

## Blocchi valore

### `Valore pulsante gamepad (booleano)` {#block_gamepad_button_value_boolean}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean.svg')} alt="block_gamepad_button_value_boolean.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean_sony.svg')} alt="block_gamepad_button_value_boolean_sony.svg" />
</div>

Restituisce lo stato corrente del pulsante selezionato del gamepad.

- Tipo: blocco valore
- Output: `true`/`false`
- Opzioni pulsante (layout Xbox): `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Opzioni pulsante (layout Sony): `croce`, `cerchio`, `quadrato`, `triangolo`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- Opzioni stato: `premuto`, `rilasciato`

### `Valore D-pad gamepad (booleano)` {#block_gamepad_dpad_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_gamepad_dpad_button_value_boolean.svg')} alt="block_gamepad_dpad_button_value_boolean.svg" />

Restituisce se la direzione selezionata del D-pad è attualmente attiva.

- Tipo: blocco valore
- Output: `true`/`false`
- Opzioni direzione: `su`, `giù`, `sinistra`, `destra`
- Opzioni stato: `premuto`, `rilasciato`

### `Valore levetta gamepad (float)` {#block_gamepad_thumbstick_value_float}

<img src={useBaseUrl('/img/blocks/block_gamepad_thumbstick_value_float.svg')} alt="block_gamepad_thumbstick_value_float.svg" />

Restituisce il valore numerico dell’asse della levetta.

- Tipo: blocco valore
- Output: numerico (float)
- Intervallo predefinito: `-1` a `1`
- Intervallo opzionale nelle impostazioni gamepad: `-100` a `100`
- Opzioni levetta: `sinistra`, `destra`
- Opzioni asse: `asse X` / `asse Y`

### `Valore pressione trigger gamepad (float)` {#block_gamepad_trigger_pressure_value_float}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float.svg')} alt="block_gamepad_trigger_pressure_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float_sony.svg')} alt="block_gamepad_trigger_pressure_value_float_sony.svg" />
</div>

Restituisce il valore di pressione del trigger selezionato.

- Tipo: blocco valore
- Output: numerico (float)
- Intervallo predefinito: `-1` a `1`
- Intervallo opzionale nelle impostazioni gamepad: `-100` a `100`
- Opzioni trigger (layout Xbox): `LT`, `RT`
- Opzioni trigger (layout Sony): `L2`, `R2`
