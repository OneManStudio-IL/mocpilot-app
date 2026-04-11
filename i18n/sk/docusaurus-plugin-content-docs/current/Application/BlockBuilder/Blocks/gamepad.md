---
id: Gamepad
title: Gamepad
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Gamepad
Bloky Gamepad sa používajú na reakciu na vstup z ovládača a na čítanie aktuálnych hodnôt jeho stavu.

## Bloky udalostí

### `Keď tlačidlo gamepadu je` {#block_gamepad_event_when_button_is}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is.svg')} alt="block_gamepad_event_when_button_is.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is_sony.svg')} alt="block_gamepad_event_when_button_is_sony.svg" />
</div>

Spustí sa, keď vybrané tlačidlo gamepadu zodpovedá nastavenému stavu.

- Typ: blok udalosti
- Možnosti tlačidiel (Xbox rozloženie): `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Možnosti tlačidiel (Sony rozloženie): `krížik`, `kruh`, `štvorec`, `trojuholník`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- Možnosti stavu: `stlačené`, `uvoľnené`

### `Keď smerový kríž je` {#block_gamepad_event_when_dpad_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_dpad_is.svg')} alt="block_gamepad_event_when_dpad_is.svg" />

Spustí sa, keď smer alebo stav smerového kríža zodpovedá vybranej podmienke.

- Typ: blok udalosti
- Možnosti smeru: `hore`, `dole`, `vľavo`, `vpravo`
- Možnosti stavu: `stlačené`, `uvoľnené`

### `Keď páčka gamepadu je` {#block_gamepad_event_when_thumbstick_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_thumbstick_is.svg')} alt="block_gamepad_event_when_thumbstick_is.svg" />

Spustí sa, keď stav páčky zodpovedá vybraným možnostiam.

Podľa aktuálnych možností tento blok podporuje:

- Výber páčky: `ľavá` / `pravá`
- Výber smeru/stavu: `hore`, `dole`, `vľavo`, `vpravo`, `pohyb`, `uvoľnené`

- Typ: blok udalosti
- Typické použitie: reakcia na pohyb páčky alebo jej uvoľnenie

## Bloky hodnôt

### `Hodnota tlačidla gamepadu (boolean)` {#block_gamepad_button_value_boolean}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean.svg')} alt="block_gamepad_button_value_boolean.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean_sony.svg')} alt="block_gamepad_button_value_boolean_sony.svg" />
</div>

Vracia aktuálny stav vybraného tlačidla gamepadu.

- Typ: blok hodnoty
- Výstup: `true` / `false`
- Možnosti tlačidiel (Xbox): `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Možnosti tlačidiel (Sony): `krížik`, `kruh`, `štvorec`, `trojuholník`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- Možnosti stavu: `stlačené`, `uvoľnené`

### `Hodnota smerového kríža (boolean)` {#block_gamepad_dpad_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_gamepad_dpad_button_value_boolean.svg')} alt="block_gamepad_dpad_button_value_boolean.svg" />

Vracia, či je vybraný smer smerového kríža aktuálne aktívny.

- Typ: blok hodnoty
- Výstup: `true` / `false`
- Možnosti smeru: `hore`, `dole`, `vľavo`, `vpravo`
- Možnosti stavu: `stlačené`, `uvoľnené`

### `Hodnota páčky gamepadu (float)` {#block_gamepad_thumbstick_value_float}

<img src={useBaseUrl('/img/blocks/block_gamepad_thumbstick_value_float.svg')} alt="block_gamepad_thumbstick_value_float.svg" />

Vracia číselnú hodnotu osi páčky.

- Typ: blok hodnoty
- Výstup: číslo (float)
- Predvolený rozsah: `-1` až `1`
- Voliteľný rozsah v nastaveniach: `-100` až `100`
- Možnosti páčky: `ľavá`, `pravá`
- Možnosti osi: `x-os` / `y-os`

### `Hodnota tlaku spúšte (float)` {#block_gamepad_trigger_pressure_value_float}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float.svg')} alt="block_gamepad_trigger_pressure_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float_sony.svg')} alt="block_gamepad_trigger_pressure_value_float_sony.svg" />
</div>

Vracia hodnotu tlaku spúšte pre vybranú spúšť.

- Typ: blok hodnoty
- Výstup: číslo (float)
- Predvolený rozsah: `-1` až `1`
- Voliteľný rozsah v nastaveniach: `-100` až `100`
- Možnosti spúšte (Xbox): `LT`, `RT`
- Možnosti spúšte (Sony): `L2`, `R2`