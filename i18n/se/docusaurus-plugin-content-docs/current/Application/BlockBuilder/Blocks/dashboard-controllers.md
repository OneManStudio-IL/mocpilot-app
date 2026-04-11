---
id: DashboardControllers
title: Dashboard-kontroller
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Dashboard-kontroller

Dessa block används för att läsa användarinmatning från kontroller på skärmen, reagera på användaråtgärder och uppdatera dashboard-gränssnittets tillstånd.

## Globala dashboard-kontrollblock

### `Ställ in kontrollfärg` {#block_dashboard_controller_all_set_color}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_color.svg')} alt="block_dashboard_controller_all_set_color.svg" />

Ändrar den visuella accentfärgen för vald dashboard-kontroll.

- Typ: kommandoblock
- Typisk användning: visa körtidstillstånd eller dynamiskt ändra kontrollens stil baserat på villkor

### `Ställ in kontrollens interaktivitet` {#block_dashboard_controller_all_set_interactivity}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_interactivity.svg')} alt="block_dashboard_controller_all_set_interactivity.svg" />

Styr interaktiviteten för vald dashboard-kontroll.
Om interaktivitet är inaktiverad reagerar kontrollen inte på touchinmatning.

- Typ: kommandoblock
- Typisk användning: tillfälligt låsa kontroller under särskild logik eller säkerhetstillstånd
- Tillståndsalternativ: `aktivera`, `inaktivera`

## Knappblock

### `Knapphändelse` {#block_dashboard_controller_button_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_event.svg')} alt="block_dashboard_controller_button_event.svg" />

Utlöses när dashboard-knappen byter tillstånd (nedtryckt/släppt).

- Typ: händelseblock
- Utdata: startar anslutet skript
- Tillståndsalternativ: `nedtryckt`, `släppt`

### `Knappvärde (booleskt)` {#block_dashboard_controller_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_value_boolean.svg')} alt="block_dashboard_controller_button_value_boolean.svg" />

Rapporterar aktuellt tillstånd för dashboard-knappen.

- Typ: värdeblock
- Utdata: `true`/`false`
- Tillståndsalternativ: `nedtryckt`, `släppt`

## D-pad-block

### `D-pad-händelse` {#block_dashboard_controller_dpad_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_event.svg')} alt="block_dashboard_controller_dpad_event.svg" />

Utlöses när D-pad-riktningen ändras eller matchar den konfigurerade riktningen.

- Typ: händelseblock
- Utdata: startar anslutet skript
- Riktningsalternativ: `upp`, `ner`, `vänster`, `höger`
- Knappstatusalternativ: `nedtryckt`, `släppt`

### `D-pad-värde (booleskt)` {#block_dashboard_controller_dpad_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_value_boolean.svg')} alt="block_dashboard_controller_dpad_value_boolean.svg" />

Rapporterar om en vald D-pad-riktning är aktiv.

- Typ: värdeblock
- Utdata: `true`/`false`
- Riktningsalternativ: `upp`, `ner`, `vänster`, `höger`
- Knappstatusalternativ: `nedtryckt`, `släppt`

## Joystickblock

### `Joystickhändelse` {#block_dashboard_controller_joystick_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_event.svg')} alt="block_dashboard_controller_joystick_event.svg" />

Utlöses när joystickens position ändras.

- Typ: händelseblock
- Utdata: startar anslutet skript
- Tillståndsalternativ: `upp`, `ner`, `vänster`, `höger`, `flyttad`, `släppt`

### `Joystickvärde (float)` {#block_dashboard_controller_joystick_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_value_float.svg')} alt="block_dashboard_controller_joystick_value_float.svg" />

Rapporterar joystickens axelvärde.

- Typ: värdeblock
- Utdata: numeriskt (float), vanligtvis inom ett normaliserat intervall
- Axelalternativ: `x-axel`, `y-axel`

## Pedalblock

### `Pedalhändelse` {#block_dashboard_controller_pedals_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_event.svg')} alt="block_dashboard_controller_pedals_event.svg" />

Utlöses när pedalinmatning ändras.

- Typ: händelseblock
- Utdata: startar anslutet skript
- Pedalalternativ: `valfri`, `broms`, `acceleration`
- Tillståndsalternativ: `flyttad`, `nedtryckt`, `släppt`

### `Pedalvärde (float)` {#block_dashboard_controller_pedals_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_float.svg')} alt="block_dashboard_controller_pedals_value_float.svg" />

Rapporterar pedalens analoga värde.

- Typ: värdeblock
- Utdata: numeriskt (float)

### `Pedalvärde (booleskt)` {#block_dashboard_controller_pedals_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_boolean.svg')} alt="block_dashboard_controller_pedals_value_boolean.svg" />

Returnerar valt tillstånd beroende på om en specifik pedal är nedtryckt eller släppt.

- Typ: värdeblock
- Utdata: `true`/`false`
- Pedalalternativ: `broms`, `acceleration`
- Tillståndsalternativ: `nedtryckt`, `släppt`

## Reglageblock

### `Reglagehändelse` {#block_dashboard_controller_slider_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_event.svg')} alt="block_dashboard_controller_slider_event.svg" />

Utlöses när reglagesvärdet ändras.

- Typ: händelseblock
- Utdata: startar anslutet skript
- Tillståndsalternativ: `låg`, `hög`, `flyttad`, `släppt`

### `Reglagevärde (float)` {#block_dashboard_controller_slider_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_value_float.svg')} alt="block_dashboard_controller_slider_value_float.svg" />

Rapporterar aktuellt reglagesvärde.

- Typ: värdeblock
- Utdata: numeriskt (float)

## Stepperblock

### `Stepperhändelse` {#block_dashboard_controller_stepper_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_event.svg')} alt="block_dashboard_controller_stepper_event.svg" />

Utlöses när steppervärdet ändras med ett steg.

- Typ: händelseblock
- Utdata: startar anslutet skript
- Stegalternativ: `valfri`, `återställ`, `minus`, `plus`
- Knappstatusalternativ: `nedtryckt`, `släppt`

### `Steppervärde (float)` {#block_dashboard_controller_stepper_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_value_float.svg')} alt="block_dashboard_controller_stepper_value_float.svg" />

Rapporterar aktuellt steppervärde.

- Typ: värdeblock
- Utdata: numeriskt (float)

## Rattblock

### `Ratthändelse` {#block_dashboard_controller_steering_wheel_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_event.svg')} alt="block_dashboard_controller_steering_wheel_event.svg" />

Utlöses när rattens position ändras.

- Typ: händelseblock
- Utdata: startar anslutet skript
- Tillståndsalternativ: `flyttad`, `nedtryckt`, `släppt`

### `Rattvärde (float)` {#block_dashboard_controller_steering_wheel_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_value_float.svg')} alt="block_dashboard_controller_steering_wheel_value_float.svg" />

Rapporterar aktuellt rattvärde.

- Typ: värdeblock
- Utdata: numeriskt (float)

### `Rattvärde (booleskt)` {#block_dashboard_controller_steeringwheel_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steeringwheel_value_boolean.svg')} alt="block_dashboard_controller_steeringwheel_value_boolean.svg" />

Returnerar valt tillstånd beroende på om ratten är nedtryckt eller släppt.

- Typ: värdeblock
- Utdata: `true`/`false`
- Tillståndsalternativ: `flyttad`, `nedtryckt`, `släppt`

## Växelblock

### `Växelhändelse` {#block_dashboard_controller_switch_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_event.svg')} alt="block_dashboard_controller_switch_event.svg" />

Utlöses när växelns tillstånd ändras.

- Typ: händelseblock
- Utdata: startar anslutet skript
- Växlingsalternativ: `på`, `av`

### `Växelvärde (booleskt)` {#block_dashboard_controller_switch_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_value_boolean.svg')} alt="block_dashboard_controller_switch_value_boolean.svg" />

Rapporterar aktuellt växeltillstånd.

- Typ: värdeblock
- Utdata: `true`/`false`
- Tillståndsalternativ: `på`, `av`

## Monitorblock

### `Visa monitor` {#block_dashboard_controller_monitor_show}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_show.svg')} alt="block_dashboard_controller_monitor_show.svg" />

Visar information (text eller värde) på dashboard-monitorn.

- Typ: kommandoblock
- Typisk användning: visa batterinivå, motorvinkel, aktuell ansluten enhet på en hubbport och liknande körtidsinformation

### `Ställ in monitorvärde` {#block_dashboard_controller_monitor_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_set_value.svg')} alt="block_dashboard_controller_monitor_set_value.svg" />

Ställer in heltalsvärdet för en hastighetsmätar-monitor på dashboarden.

- Typ: kommandoblock
- Typisk användning: uppdatera hastighetsmätarens värde under körning

### `Ställ in monitorlutningsvärde` {#block_dashboard_controller_monitor_tilt_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_tilt_set_value.svg')} alt="block_dashboard_controller_monitor_tilt_set_value.svg" />

Ställer in lutningsmonitorns värde (pitch/roll) för dashboardens lutningsmonitor.

- Typ: kommandoblock
- Typisk användning: visa lutningsvärden under körning i en dedikerad lutningsmonitor
- Axelalternativ: `pitch`, `roll`
