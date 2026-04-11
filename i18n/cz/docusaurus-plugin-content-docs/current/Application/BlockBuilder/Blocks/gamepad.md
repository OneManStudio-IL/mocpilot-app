---
id: Gamepad
title: Gamepad
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Gamepad
Bloky gamepadu slouží k reakci na vstup z ovladače a ke čtení aktuálních stavových hodnot gamepadu.

## Bloky událostí

### `Když je tlačítko gamepadu` {#block_gamepad_event_when_button_is}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is.svg')} alt="block_gamepad_event_when_button_is.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is_sony.svg')} alt="block_gamepad_event_when_button_is_sony.svg" />
</div>

Spustí se, když vybrané tlačítko gamepadu odpovídá nastavenému stavu.

- Typ: blok události
- Možnosti tlačítek (rozložení Xbox): `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Možnosti tlačítek (rozložení Sony): `kříž`, `kruh`, `čtverec`, `trojúhelník`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- Možnosti stavu: `stisknuto`, `uvolněno`

### `Když je D-pad gamepadu` {#block_gamepad_event_when_dpad_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_dpad_is.svg')} alt="block_gamepad_event_when_dpad_is.svg" />

Spustí se, když směr/stav D-padu odpovídá vybrané podmínce.

- Typ: blok události
- Možnosti směru: `nahoru`, `dolů`, `vlevo`, `vpravo`
- Možnosti stavu: `stisknuto`, `uvolněno`

### `Když je páčka gamepadu` {#block_gamepad_event_when_thumbstick_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_thumbstick_is.svg')} alt="block_gamepad_event_when_thumbstick_is.svg" />

Spustí se, když podmínka páčky odpovídá vybraným možnostem.

Podle aktuálních možností tento blok podporuje:

- Výběr páčky: `levý` / `pravý`
- Výběr směru/stavu: `nahoru`, `dolů`, `vlevo`, `vpravo`, `pohnut`, `uvolněno`

- Typ: blok události
- Typické použití: reakce na směrový pohyb nebo uvolnění páčky

## Bloky hodnot

### `Hodnota tlačítka gamepadu (boolean)` {#block_gamepad_button_value_boolean}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean.svg')} alt="block_gamepad_button_value_boolean.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean_sony.svg')} alt="block_gamepad_button_value_boolean_sony.svg" />
</div>

Vrací aktuální stav vybraného tlačítka gamepadu.

- Typ: blok hodnoty
- Výstup: `true`/`false`
- Možnosti tlačítek (rozložení Xbox): `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Možnosti tlačítek (rozložení Sony): `kříž`, `kruh`, `čtverec`, `trojúhelník`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- Možnosti stavu: `stisknuto`, `uvolněno`

### `Hodnota tlačítka D-pad gamepadu (boolean)` {#block_gamepad_dpad_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_gamepad_dpad_button_value_boolean.svg')} alt="block_gamepad_dpad_button_value_boolean.svg" />

Vrací, zda je vybraný směr D-padu aktuálně aktivní.

- Typ: blok hodnoty
- Výstup: `true`/`false`
- Možnosti směru: `nahoru`, `dolů`, `vlevo`, `vpravo`
- Možnosti stavu: `stisknuto`, `uvolněno`

### `Hodnota páčky gamepadu (float)` {#block_gamepad_thumbstick_value_float}

<img src={useBaseUrl('/img/blocks/block_gamepad_thumbstick_value_float.svg')} alt="block_gamepad_thumbstick_value_float.svg" />

Vrací číselnou hodnotu osy páčky.

- Typ: blok hodnoty
- Výstup: číselný (float)
- Výchozí rozsah: `-1` až `1`
- Volitelný rozsah v nastavení gamepadu: `-100` až `100`
- Možnosti páčky: `levý`, `pravý`
- Možnosti osy: `osa X` / `osa Y`

### `Hodnota stisku triggeru gamepadu (float)` {#block_gamepad_trigger_pressure_value_float}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float.svg')} alt="block_gamepad_trigger_pressure_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float_sony.svg')} alt="block_gamepad_trigger_pressure_value_float_sony.svg" />
</div>

Vrací hodnotu stisku pro vybraný trigger.

- Typ: blok hodnoty
- Výstup: číselný (float)
- Výchozí rozsah: `-1` až `1`
- Volitelný rozsah v nastavení gamepadu: `-100` až `100`
- Možnosti triggerů (rozložení Xbox): `LT`, `RT`
- Možnosti triggerů (rozložení Sony): `L2`, `R2`