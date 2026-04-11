---
id: Gamepad
title: Peliohjain
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Peliohjain
Peliohjainlohkot reagoivat ohjaimen syötteisiin ja lukevat peliohjaimen nykyisen tilan.

## Tapahtumalohkot

### `Kun peliohjaimen painike on` {#block_gamepad_event_when_button_is}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is.svg')} alt="block_gamepad_event_when_button_is.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is_sony.svg')} alt="block_gamepad_event_when_button_is_sony.svg" />
</div>

Käynnistyy, kun valittu peliohjaimen painike vastaa asetettua tilaa.

- Tyyppi: tapahtumalohko
- Painikkeet (Xbox-asettelu): `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Painikkeet (Sony-asettelu): `risti`, `ympyrä`, `neliö`, `kolmio`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- Tilavaihtoehdot: `painettu`, `vapautettu`

### `Kun peliohjaimen D-pad on` {#block_gamepad_event_when_dpad_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_dpad_is.svg')} alt="block_gamepad_event_when_dpad_is.svg" />

Käynnistyy, kun D-padin suunta tai tila vastaa valittua ehtoa.

- Tyyppi: tapahtumalohko
- Suuntavaihtoehdot: `ylös`, `alas`, `vasen`, `oikea`
- Tilavaihtoehdot: `painettu`, `vapautettu`

### `Kun peliohjaimen ohjain­tikku on` {#block_gamepad_event_when_thumbstick_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_thumbstick_is.svg')} alt="block_gamepad_event_when_thumbstick_is.svg" />

Käynnistyy, kun ohjain­tikun tila vastaa valittuja asetuksia.

Tämä lohko tukee:

- Tikun valinta: `vasen` / `oikea`
- Suunta/tila: `ylös`, `alas`, `vasen`, `oikea`, `liikkunut`, `vapautettu`
- Tyyppi: tapahtumalohko
- Tyypillinen käyttö: reagoida liikkeeseen tai vapautukseen

## Arvolohkot

### `Peliohjaimen painikkeen arvo (boolean)` {#block_gamepad_button_value_boolean}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean.svg')} alt="block_gamepad_button_value_boolean.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean_sony.svg')} alt="block_gamepad_button_value_boolean_sony.svg" />
</div>

Palauttaa valitun peliohjaimen painikkeen nykyisen tilan.

- Tyyppi: arvolohko
- Tuloste: `true`/`false`
- Painikkeet (Xbox-asettelu): `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Painikkeet (Sony-asettelu): `risti`, `ympyrä`, `neliö`, `kolmio`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- Tilavaihtoehdot: `painettu`, `vapautettu`

### `Peliohjaimen D-pad -painikkeen arvo (boolean)` {#block_gamepad_dpad_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_gamepad_dpad_button_value_boolean.svg')} alt="block_gamepad_dpad_button_value_boolean.svg" />

Palauttaa, onko valittu D-padin suunta aktiivinen.

- Tyyppi: arvolohko
- Tuloste: `true`/`false`
- Suuntavaihtoehdot: `ylös`, `alas`, `vasen`, `oikea`
- Tilavaihtoehdot: `painettu`, `vapautettu`

### `Peliohjaimen ohjain­tikun arvo (float)` {#block_gamepad_thumbstick_value_float}

<img src={useBaseUrl('/img/blocks/block_gamepad_thumbstick_value_float.svg')} alt="block_gamepad_thumbstick_value_float.svg" />

Palauttaa ohjain­tikun akselin numeerisen arvon.

- Tyyppi: arvolohko
- Tuloste: numeerinen (float)
- Oletusalue: `-1` ... `1`
- Valinnainen alue asetuksissa: `-100` ... `100`
- Tikkuvaihtoehdot: `vasen`, `oikea`
- Akselit: `x-akseli` / `y-akseli`

### `Peliohjaimen liipaisimen arvo (float)` {#block_gamepad_trigger_pressure_value_float}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float.svg')} alt="block_gamepad_trigger_pressure_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float_sony.svg')} alt="block_gamepad_trigger_pressure_value_float_sony.svg" />
</div>

Palauttaa valitun liipaisimen painearvon.

- Tyyppi: arvolohko
- Tuloste: numeerinen (float)
- Oletusalue: `-1` ... `1`
- Valinnainen alue asetuksissa: `-100` ... `100`
- Liipaisimet (Xbox-asettelu): `LT`, `RT`
- Liipaisimet (Sony-asettelu): `L2`, `R2`