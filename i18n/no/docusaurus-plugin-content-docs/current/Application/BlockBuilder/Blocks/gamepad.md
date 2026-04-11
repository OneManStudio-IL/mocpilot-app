---
id: Gamepad
title: Gamepad
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Gamepad
Gamepad-blokker brukes til å reagere på kontrollerinput og lese gjeldende tilstandsverdier fra gamepad.

## Hendelsesblokker

### `Når gamepad-knapp er` {#block_gamepad_event_when_button_is}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is.svg')} alt="block_gamepad_event_when_button_is.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is_sony.svg')} alt="block_gamepad_event_when_button_is_sony.svg" />
</div>

Utløses når valgt gamepad-knapp matcher konfigurert tilstand.

- Type: hendelsesblokk
- Knappvalg (Xbox-layout): `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Knappvalg (Sony-layout): `kryss`, `sirkel`, `firkant`, `trekant`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- Tilstandsvalg: `trykket`, `sluppet`

### `Når gamepad D-pad er` {#block_gamepad_event_when_dpad_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_dpad_is.svg')} alt="block_gamepad_event_when_dpad_is.svg" />

Utløses når D-pad-retning/tilstand matcher valgt betingelse.

- Type: hendelsesblokk
- Retningsvalg: `opp`, `ned`, `venstre`, `høyre`
- Tilstandsvalg: `trykket`, `sluppet`

### `Når gamepad styrespak er` {#block_gamepad_event_when_thumbstick_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_thumbstick_is.svg')} alt="block_gamepad_event_when_thumbstick_is.svg" />

Utløses når styrespakens tilstand matcher valgte alternativer.

Basert på nåværende alternativer støtter denne blokken:

- Valg av spak: `venstre` / `høyre`
- Retning/tilstand: `opp`, `ned`, `venstre`, `høyre`, `flyttet`, `sluppet`

- Type: hendelsesblokk
- Typisk bruk: reagere på retningsbevegelse eller når spaken slippes

## Verdiblokker

### `Gamepad-knappverdi (boolsk)` {#block_gamepad_button_value_boolean}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean.svg')} alt="block_gamepad_button_value_boolean.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean_sony.svg')} alt="block_gamepad_button_value_boolean_sony.svg" />
</div>

Returnerer gjeldende tilstand for valgt gamepad-knapp.

- Type: verdiblokk
- Output: `true`/`false`
- Knappvalg (Xbox-layout): `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Knappvalg (Sony-layout): `kryss`, `sirkel`, `firkant`, `trekant`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- Tilstandsvalg: `trykket`, `sluppet`

### `Gamepad D-pad-knappverdi (boolsk)` {#block_gamepad_dpad_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_gamepad_dpad_button_value_boolean.svg')} alt="block_gamepad_dpad_button_value_boolean.svg" />

Returnerer om valgt D-pad-retning for øyeblikket er aktiv.

- Type: verdiblokk
- Output: `true`/`false`
- Retningsvalg: `opp`, `ned`, `venstre`, `høyre`
- Tilstandsvalg: `trykket`, `sluppet`

### `Gamepad styrespakverdi (float)` {#block_gamepad_thumbstick_value_float}

<img src={useBaseUrl('/img/blocks/block_gamepad_thumbstick_value_float.svg')} alt="block_gamepad_thumbstick_value_float.svg" />

Returnerer numerisk verdi for styrespak-akse.

- Type: verdiblokk
- Output: numerisk (float)
- Standardområde: `-1` til `1`
- Valgfritt område i gamepad-innstillinger: `-100` til `100`
- Spakvalg: `venstre`, `høyre`
- Aksevalg: `x-akse` / `y-akse`

### `Gamepad trigger-trykkverdi (float)` {#block_gamepad_trigger_pressure_value_float}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float.svg')} alt="block_gamepad_trigger_pressure_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float_sony.svg')} alt="block_gamepad_trigger_pressure_value_float_sony.svg" />
</div>

Returnerer trigger-trykkverdi for valgt trigger.

- Type: verdiblokk
- Output: numerisk (float)
- Standardområde: `-1` til `1`
- Valgfritt område i gamepad-innstillinger: `-100` til `100`
- Triggervalg (Xbox-layout): `LT`, `RT`
- Triggervalg (Sony-layout): `L2`, `R2`