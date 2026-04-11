---
id: Gamepad
title: Gamepad
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Gamepad
Blocurile Gamepad sunt utilizate pentru a reacționa la inputul controllerului și pentru a citi valorile curente ale stării gamepad-ului.

## Blocuri de eveniment

### `Când butonul gamepad-ului este` {#block_gamepad_event_when_button_is}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is.svg')} alt="block_gamepad_event_when_button_is.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is_sony.svg')} alt="block_gamepad_event_when_button_is_sony.svg" />
</div>

Se declanșează când butonul selectat al gamepad-ului corespunde stării configurate.

- Tip: bloc de eveniment
- Opțiuni buton (layout Xbox): `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Opțiuni buton (layout Sony): `cross`, `cerc`, `pătrat`, `triunghi`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- Opțiuni stare: `apăsat`, `eliberat`

### `Când D-pad-ul gamepad-ului este` {#block_gamepad_event_when_dpad_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_dpad_is.svg')} alt="block_gamepad_event_when_dpad_is.svg" />

Se declanșează când direcția/starea D-pad corespunde condiției selectate.

- Tip: bloc de eveniment
- Opțiuni direcție: `sus`, `jos`, `stânga`, `dreapta`
- Opțiuni stare: `apăsat`, `eliberat`

### `Când stick-ul gamepad-ului este` {#block_gamepad_event_when_thumbstick_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_thumbstick_is.svg')} alt="block_gamepad_event_when_thumbstick_is.svg" />

Se declanșează când condiția stick-ului corespunde opțiunilor selectate.

Pe baza opțiunilor curente, acest bloc suportă:

- Selectare stick: `stânga` / `dreapta`
- Selectare direcție/stare: `sus`, `jos`, `stânga`, `dreapta`, `mișcat`, `eliberat`

- Tip: bloc de eveniment
- Utilizare tipică: reacție la mișcare direcțională sau eliberarea stick-ului

## Blocuri de valoare

### `Valoare buton gamepad (boolean)` {#block_gamepad_button_value_boolean}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean.svg')} alt="block_gamepad_button_value_boolean.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean_sony.svg')} alt="block_gamepad_button_value_boolean_sony.svg" />
</div>

Returnează starea curentă a butonului selectat al gamepad-ului.

- Tip: bloc de valoare
- Output: `true`/`false`
- Opțiuni buton (layout Xbox): `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Opțiuni buton (layout Sony): `cross`, `cerc`, `pătrat`, `triunghi`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- Opțiuni stare: `apăsat`, `eliberat`

### `Valoare buton D-pad gamepad (boolean)` {#block_gamepad_dpad_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_gamepad_dpad_button_value_boolean.svg')} alt="block_gamepad_dpad_button_value_boolean.svg" />

Returnează dacă direcția selectată a D-pad-ului este activă în prezent.

- Tip: bloc de valoare
- Output: `true`/`false`
- Opțiuni direcție: `sus`, `jos`, `stânga`, `dreapta`
- Opțiuni stare: `apăsat`, `eliberat`

### `Valoare stick gamepad (float)` {#block_gamepad_thumbstick_value_float}

<img src={useBaseUrl('/img/blocks/block_gamepad_thumbstick_value_float.svg')} alt="block_gamepad_thumbstick_value_float.svg" />

Returnează valoarea numerică a axei stick-ului.

- Tip: bloc de valoare
- Output: numeric (float)
- Interval implicit: `-1` până la `1`
- Interval opțional în setările gamepad-ului: `-100` până la `100`
- Opțiuni stick: `stânga`, `dreapta`
- Opțiuni axă: `axa X` / `axa Y`

### `Valoare presiune trigger gamepad (float)` {#block_gamepad_trigger_pressure_value_float}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float.svg')} alt="block_gamepad_trigger_pressure_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float_sony.svg')} alt="block_gamepad_trigger_pressure_value_float_sony.svg" />
</div>

Returnează valoarea presiunii trigger-ului selectat.

- Tip: bloc de valoare
- Output: numeric (float)
- Interval implicit: `-1` până la `1`
- Interval opțional în setările gamepad-ului: `-100` până la `100`
- Opțiuni trigger (layout Xbox): `LT`, `RT`
- Opțiuni trigger (layout Sony): `L2`, `R2`