---
id: DashboardControllers
title: Dashboard-controllere
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Dashboard-controllere

Disse blokke bruges til at læse brugerinput fra skærmkontroller, reagere på brugerhandlinger og opdatere dashboardets UI-tilstand. :contentReference[oaicite:0]{index=0}

## Globale dashboard-controller blokke

### `Sæt controllerfarve` {#block_dashboard_controller_all_set_color}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_color.svg')} alt="block_dashboard_controller_all_set_color.svg" />

Ændrer den visuelle accentfarve for den valgte dashboard-controller.

- Type: kommando-blok
- Typisk brug: indikere runtime-tilstande eller dynamisk ændre controllerens stil baseret på betingelser

### `Sæt controller interaktivitet` {#block_dashboard_controller_all_set_interactivity}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_interactivity.svg')} alt="block_dashboard_controller_all_set_interactivity.svg" />

Styrer interaktiviteten for den valgte dashboard-controller.  
Hvis interaktivitet er deaktiveret, reagerer controlleren ikke på berøring.

- Type: kommando-blok
- Typisk brug: midlertidigt låse kontroller under specifik logik eller sikkerhedstilstande
- Tilstande: `aktivér`, `deaktivér`

## Knap-blokke

### `Knap-hændelse` {#block_dashboard_controller_button_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_event.svg')} alt="block_dashboard_controller_button_event.svg" />

Udløses når knappen ændrer tilstand (trykket/sluppet).

- Type: event-blok
- Output: starter tilknyttet script
- Tilstande: `trykket`, `sluppet`

### `Knap-værdi (boolean)` {#block_dashboard_controller_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_value_boolean.svg')} alt="block_dashboard_controller_button_value_boolean.svg" />

Returnerer den aktuelle knaptilstand.

- Type: værdi-blok
- Output: `true`/`false`
- Tilstande: `trykket`, `sluppet`

## D-pad blokke

### `D-pad hændelse` {#block_dashboard_controller_dpad_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_event.svg')} alt="block_dashboard_controller_dpad_event.svg" />

Udløses når D-pad retning ændres eller matcher den valgte retning.

- Type: event-blok
- Output: starter tilknyttet script
- Retninger: `op`, `ned`, `venstre`, `højre`
- Tilstande: `trykket`, `sluppet`

### `D-pad værdi (boolean)` {#block_dashboard_controller_dpad_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_value_boolean.svg')} alt="block_dashboard_controller_dpad_value_boolean.svg" />

Returnerer om en valgt D-pad retning er aktiv.

- Type: værdi-blok
- Output: `true`/`false`
- Retninger: `op`, `ned`, `venstre`, `højre`
- Tilstande: `trykket`, `sluppet`

## Joystick blokke

### `Joystick hændelse` {#block_dashboard_controller_joystick_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_event.svg')} alt="block_dashboard_controller_joystick_event.svg" />

Udløses når joystick-position ændres.

- Type: event-blok
- Output: starter tilknyttet script
- Tilstande: `op`, `ned`, `venstre`, `højre`, `flyttet`, `sluppet`

### `Joystick værdi (float)` {#block_dashboard_controller_joystick_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_value_float.svg')} alt="block_dashboard_controller_joystick_value_float.svg" />

Returnerer joystick-akseværdi.

- Type: værdi-blok
- Output: numerisk (float), typisk i normaliseret område
- Akser: `x-akse`, `y-akse`

## Pedal blokke

### `Pedal hændelse` {#block_dashboard_controller_pedals_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_event.svg')} alt="block_dashboard_controller_pedals_event.svg" />

Udløses når pedalinput ændres.

- Type: event-blok
- Output: starter tilknyttet script
- Pedaler: `alle`, `bremse`, `acceleration`
- Tilstande: `flyttet`, `trykket`, `sluppet`

### `Pedal værdi (float)` {#block_dashboard_controller_pedals_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_float.svg')} alt="block_dashboard_controller_pedals_value_float.svg" />

Returnerer pedalens analoge værdi.

- Type: værdi-blok
- Output: numerisk (float)

### `Pedal værdi (boolean)` {#block_dashboard_controller_pedals_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_boolean.svg')} alt="block_dashboard_controller_pedals_value_boolean.svg" />

Returnerer valgt tilstand afhængigt af om en pedal er trykket eller sluppet.

- Type: værdi-blok
- Output: `true`/`false`
- Pedaler: `bremse`, `acceleration`
- Tilstande: `trykket`, `sluppet`

## Slider blokke

### `Slider hændelse` {#block_dashboard_controller_slider_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_event.svg')} alt="block_dashboard_controller_slider_event.svg" />

Udløses når slider-værdi ændres.

- Type: event-blok
- Output: starter tilknyttet script
- Tilstande: `lav`, `høj`, `flyttet`, `sluppet`

### `Slider værdi (float)` {#block_dashboard_controller_slider_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_value_float.svg')} alt="block_dashboard_controller_slider_value_float.svg" />

Returnerer den aktuelle slider-værdi.

- Type: værdi-blok
- Output: numerisk (float)

## Stepper blokke

### `Stepper hændelse` {#block_dashboard_controller_stepper_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_event.svg')} alt="block_dashboard_controller_stepper_event.svg" />

Udløses når stepper-værdien ændres med et trin.

- Type: event-blok
- Output: starter tilknyttet script
- Trin: `alle`, `nulstil`, `minus`, `plus`
- Tilstande: `trykket`, `sluppet`

### `Stepper værdi (float)` {#block_dashboard_controller_stepper_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_value_float.svg')} alt="block_dashboard_controller_stepper_value_float.svg" />

Returnerer den aktuelle stepper-værdi.

- Type: værdi-blok
- Output: numerisk (float)

## Rat blokke

### `Rat hændelse` {#block_dashboard_controller_steering_wheel_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_event.svg')} alt="block_dashboard_controller_steering_wheel_event.svg" />

Udløses når ratposition ændres.

- Type: event-blok
- Output: starter tilknyttet script
- Tilstande: `flyttet`, `trykket`, `sluppet`

### `Rat værdi (float)` {#block_dashboard_controller_steering_wheel_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_value_float.svg')} alt="block_dashboard_controller_steering_wheel_value_float.svg" />

Returnerer den aktuelle ratværdi.

- Type: værdi-blok
- Output: numerisk (float)

### `Rat værdi (boolean)` {#block_dashboard_controller_steeringwheel_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steeringwheel_value_boolean.svg')} alt="block_dashboard_controller_steeringwheel_value_boolean.svg" />

Returnerer valgt tilstand afhængigt af om rattet er trykket eller sluppet.

- Type: værdi-blok
- Output: `true`/`false`
- Tilstande: `flyttet`, `trykket`, `sluppet`

## Kontakt blokke

### `Kontakt hændelse` {#block_dashboard_controller_switch_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_event.svg')} alt="block_dashboard_controller_switch_event.svg" />

Udløses når kontakten ændrer tilstand.

- Type: event-blok
- Output: starter tilknyttet script
- Tilstande: `tændt`, `slukket`

### `Kontakt værdi (boolean)` {#block_dashboard_controller_switch_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_value_boolean.svg')} alt="block_dashboard_controller_switch_value_boolean.svg" />

Returnerer den aktuelle kontakt-tilstand.

- Type: værdi-blok
- Output: `true`/`false`
- Tilstande: `tændt`, `slukket`

## Monitor blokke

### `Vis på monitor` {#block_dashboard_controller_monitor_show}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_show.svg')} alt="block_dashboard_controller_monitor_show.svg" />

Viser information (tekst eller værdi) på dashboard-monitoren.

- Type: kommando-blok
- Typisk brug: vise batteriniveau, motorvinkel, tilsluttet enhed osv.

### `Sæt monitorværdi` {#block_dashboard_controller_monitor_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_set_value.svg')} alt="block_dashboard_controller_monitor_set_value.svg" />

Sætter en heltalsværdi for en speedometer-monitor.

- Type: kommando-blok
- Typisk brug: opdatere speedometer-visning under runtime

### `Sæt tilt monitorværdi` {#block_dashboard_controller_monitor_tilt_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_tilt_set_value.svg')} alt="block_dashboard_controller_monitor_tilt_set_value.svg" />

Sætter tilt-værdi (pitch/roll) for tilt-monitor.

- Type: kommando-blok
- Typisk brug: vise hældningsdata
- Akser: `pitch`, `roll`