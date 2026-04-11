---
id: Gamepad
title: Gamepad
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Gamepad
Bloki gamepada służą do reagowania na wejścia kontrolera oraz odczytu aktualnych wartości stanu gamepada.

## Bloki zdarzeń

### `Gdy przycisk gamepada jest` {#block_gamepad_event_when_button_is}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is.svg')} alt="block_gamepad_event_when_button_is.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is_sony.svg')} alt="block_gamepad_event_when_button_is_sony.svg" />
</div>

Wyzwalane, gdy wybrany przycisk gamepada odpowiada skonfigurowanemu stanowi.

- Typ: blok zdarzenia
- Opcje przycisków (układ Xbox): `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Opcje przycisków (układ Sony): `krzyżyk`, `kółko`, `kwadrat`, `trójkąt`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- Opcje stanu: `naciśnięty`, `zwolniony`

### `Gdy D-pad gamepada jest` {#block_gamepad_event_when_dpad_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_dpad_is.svg')} alt="block_gamepad_event_when_dpad_is.svg" />

Wyzwalane, gdy kierunek lub stan D-pada odpowiada wybranemu warunkowi.

- Typ: blok zdarzenia
- Opcje kierunku: `góra`, `dół`, `lewo`, `prawo`
- Opcje stanu: `naciśnięty`, `zwolniony`

### `Gdy drążek gamepada jest` {#block_gamepad_event_when_thumbstick_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_thumbstick_is.svg')} alt="block_gamepad_event_when_thumbstick_is.svg" />

Wyzwalane, gdy warunek drążka odpowiada wybranym opcjom.

Na podstawie dostępnych opcji blok obsługuje:

- Wybór drążka: `lewy` / `prawy`
- Wybór kierunku/stanu: `góra`, `dół`, `lewo`, `prawo`, `ruch`, `zwolniony`

- Typ: blok zdarzenia
- Typowe użycie: reagowanie na ruch kierunkowy lub zwolnienie drążka

## Bloki wartości

### `Wartość przycisku gamepada (boolean)` {#block_gamepad_button_value_boolean}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean.svg')} alt="block_gamepad_button_value_boolean.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean_sony.svg')} alt="block_gamepad_button_value_boolean_sony.svg" />
</div>

Zwraca aktualny stan wybranego przycisku gamepada.

- Typ: blok wartości
- Wyjście: `true`/`false`
- Opcje przycisków (układ Xbox): `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Opcje przycisków (układ Sony): `krzyżyk`, `kółko`, `kwadrat`, `trójkąt`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- Opcje stanu: `naciśnięty`, `zwolniony`

### `Wartość przycisku D-pad gamepada (boolean)` {#block_gamepad_dpad_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_gamepad_dpad_button_value_boolean.svg')} alt="block_gamepad_dpad_button_value_boolean.svg" />

Zwraca, czy wybrany kierunek D-pada jest aktualnie aktywny.

- Typ: blok wartości
- Wyjście: `true`/`false`
- Opcje kierunku: `góra`, `dół`, `lewo`, `prawo`
- Opcje stanu: `naciśnięty`, `zwolniony`

### `Wartość drążka gamepada (float)` {#block_gamepad_thumbstick_value_float}

<img src={useBaseUrl('/img/blocks/block_gamepad_thumbstick_value_float.svg')} alt="block_gamepad_thumbstick_value_float.svg" />

Zwraca wartość osi drążka.

- Typ: blok wartości
- Wyjście: liczba (float)
- Domyślny zakres: `-1` do `1`
- Opcjonalny zakres w ustawieniach gamepada: `-100` do `100`
- Opcje drążka: `lewy`, `prawy`
- Opcje osi: `oś X` / `oś Y`

### `Wartość nacisku triggera (float)` {#block_gamepad_trigger_pressure_value_float}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float.svg')} alt="block_gamepad_trigger_pressure_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float_sony.svg')} alt="block_gamepad_trigger_pressure_value_float_sony.svg" />
</div>

Zwraca wartość nacisku dla wybranego triggera.

- Typ: blok wartości
- Wyjście: liczba (float)
- Domyślny zakres: `-1` do `1`
- Opcjonalny zakres w ustawieniach gamepada: `-100` do `100`
- Opcje triggerów (układ Xbox): `LT`, `RT`
- Opcje triggerów (układ Sony): `L2`, `R2`