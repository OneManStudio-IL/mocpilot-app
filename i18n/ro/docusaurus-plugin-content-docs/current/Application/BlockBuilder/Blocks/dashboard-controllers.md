---
id: DashboardControllers
title: Controale Dashboard
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Controale Dashboard

Aceste blocuri sunt utilizate pentru a citi inputul utilizatorului din controalele de pe ecran, pentru a reacționa la acțiunile utilizatorului și pentru a actualiza starea UI-ului dashboard-ului.

## Blocuri globale pentru controlerele dashboard

### `Setează culoarea controlerului` {#block_dashboard_controller_all_set_color}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_color.svg')} alt="block_dashboard_controller_all_set_color.svg" />

Schimbă culoarea de accent vizuală a controlerului dashboard selectat.

- Tip: bloc de comandă
- Utilizare tipică: indicarea stărilor în runtime sau schimbarea dinamică a stilului controlerului în funcție de condiții

### `Setează interactivitatea controlerului` {#block_dashboard_controller_all_set_interactivity}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_interactivity.svg')} alt="block_dashboard_controller_all_set_interactivity.svg" />

Controlează interactivitatea controlerului dashboard selectat.  
Dacă interactivitatea este dezactivată, controlerul nu reacționează la input tactil.

- Tip: bloc de comandă
- Utilizare tipică: blocarea temporară a controalelor în timpul unor logici specifice sau stări de siguranță
- Opțiuni stare: `activează`, `dezactivează`

## Blocuri pentru butoane

### `Eveniment buton` {#block_dashboard_controller_button_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_event.svg')} alt="block_dashboard_controller_button_event.svg" />

Se declanșează când butonul dashboard își schimbă starea (apăsat/eliberat).

- Tip: bloc de eveniment
- Output: pornește scriptul conectat
- Opțiuni stare: `apăsat`, `eliberat`

### `Valoare buton (boolean)` {#block_dashboard_controller_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_value_boolean.svg')} alt="block_dashboard_controller_button_value_boolean.svg" />

Raportează starea curentă a butonului dashboard.

- Tip: bloc de valoare
- Output: `true`/`false`
- Opțiuni stare: `apăsat`, `eliberat`

## Blocuri D-pad

### `Eveniment D-pad` {#block_dashboard_controller_dpad_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_event.svg')} alt="block_dashboard_controller_dpad_event.svg" />

Se declanșează când direcția D-pad se schimbă sau corespunde direcției configurate.

- Tip: bloc de eveniment
- Output: pornește scriptul conectat
- Opțiuni direcție: `sus`, `jos`, `stânga`, `dreapta`
- Opțiuni stare: `apăsat`, `eliberat`

### `Valoare D-pad (boolean)` {#block_dashboard_controller_dpad_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_value_boolean.svg')} alt="block_dashboard_controller_dpad_value_boolean.svg" />

Raportează dacă o direcție D-pad selectată este activă.

- Tip: bloc de valoare
- Output: `true`/`false`
- Opțiuni direcție: `sus`, `jos`, `stânga`, `dreapta`
- Opțiuni stare: `apăsat`, `eliberat`

## Blocuri joystick

### `Eveniment joystick` {#block_dashboard_controller_joystick_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_event.svg')} alt="block_dashboard_controller_joystick_event.svg" />

Se declanșează când poziția joystick-ului se schimbă.

- Tip: bloc de eveniment
- Output: pornește scriptul conectat
- Opțiuni stare: `sus`, `jos`, `stânga`, `dreapta`, `mișcat`, `eliberat`

### `Valoare joystick (float)` {#block_dashboard_controller_joystick_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_value_float.svg')} alt="block_dashboard_controller_joystick_value_float.svg" />

Raportează valoarea axei joystick-ului.

- Tip: bloc de valoare
- Output: numeric (float), de obicei într-un interval normalizat
- Opțiuni axă: `axa X`, `axa Y`

## Blocuri pedale

### `Eveniment pedale` {#block_dashboard_controller_pedals_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_event.svg')} alt="block_dashboard_controller_pedals_event.svg" />

Se declanșează când inputul pedalelor se schimbă.

- Tip: bloc de eveniment
- Output: pornește scriptul conectat
- Opțiuni pedală: `oricare`, `frână`, `accelerație`
- Opțiuni stare: `mișcat`, `apăsat`, `eliberat`

### `Valoare pedale (float)` {#block_dashboard_controller_pedals_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_float.svg')} alt="block_dashboard_controller_pedals_value_float.svg" />

Raportează valoarea analogică a pedalelor.

- Tip: bloc de valoare
- Output: numeric (float)

### `Valoare pedale (boolean)` {#block_dashboard_controller_pedals_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_boolean.svg')} alt="block_dashboard_controller_pedals_value_boolean.svg" />

Returnează starea selectată în funcție de dacă o pedală specifică este apăsată sau eliberată.

- Tip: bloc de valoare
- Output: `true`/`false`
- Opțiuni pedală: `frână`, `accelerație`
- Opțiuni stare: `apăsat`, `eliberat`

## Blocuri slider

### `Eveniment slider` {#block_dashboard_controller_slider_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_event.svg')} alt="block_dashboard_controller_slider_event.svg" />

Se declanșează când valoarea sliderului se schimbă.

- Tip: bloc de eveniment
- Output: pornește scriptul conectat
- Opțiuni stare: `minim`, `maxim`, `mișcat`, `eliberat`

### `Valoare slider (float)` {#block_dashboard_controller_slider_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_value_float.svg')} alt="block_dashboard_controller_slider_value_float.svg" />

Raportează valoarea curentă a sliderului.

- Tip: bloc de valoare
- Output: numeric (float)

## Blocuri stepper

### `Eveniment stepper` {#block_dashboard_controller_stepper_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_event.svg')} alt="block_dashboard_controller_stepper_event.svg" />

Se declanșează când valoarea stepperului se modifică cu un pas.

- Tip: bloc de eveniment
- Output: pornește scriptul conectat
- Opțiuni pas: `oricare`, `reset`, `minus`, `plus`
- Opțiuni stare: `apăsat`, `eliberat`

### `Valoare stepper (float)` {#block_dashboard_controller_stepper_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_value_float.svg')} alt="block_dashboard_controller_stepper_value_float.svg" />

Raportează valoarea curentă a stepperului.

- Tip: bloc de valoare
- Output: numeric (float)

## Blocuri volan

### `Eveniment volan` {#block_dashboard_controller_steering_wheel_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_event.svg')} alt="block_dashboard_controller_steering_wheel_event.svg" />

Se declanșează când poziția volanului se schimbă.

- Tip: bloc de eveniment
- Output: pornește scriptul conectat
- Opțiuni stare: `mișcat`, `apăsat`, `eliberat`

### `Valoare volan (float)` {#block_dashboard_controller_steering_wheel_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_value_float.svg')} alt="block_dashboard_controller_steering_wheel_value_float.svg" />

Raportează valoarea curentă a volanului.

- Tip: bloc de valoare
- Output: numeric (float)

### `Valoare volan (boolean)` {#block_dashboard_controller_steeringwheel_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steeringwheel_value_boolean.svg')} alt="block_dashboard_controller_steeringwheel_value_boolean.svg" />

Returnează starea selectată în funcție de dacă volanul este apăsat sau eliberat.

- Tip: bloc de valoare
- Output: `true`/`false`
- Opțiuni stare: `mișcat`, `apăsat`, `eliberat`

## Blocuri switch

### `Eveniment switch` {#block_dashboard_controller_switch_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_event.svg')} alt="block_dashboard_controller_switch_event.svg" />

Se declanșează când starea switch-ului se schimbă.

- Tip: bloc de eveniment
- Output: pornește scriptul conectat
- Opțiuni toggle: `pornit`, `oprit`

### `Valoare switch (boolean)` {#block_dashboard_controller_switch_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_value_boolean.svg')} alt="block_dashboard_controller_switch_value_boolean.svg" />

Raportează starea curentă a switch-ului.

- Tip: bloc de valoare
- Output: `true`/`false`
- Opțiuni stare: `pornit`, `oprit`

## Blocuri monitor

### `Afișează pe monitor` {#block_dashboard_controller_monitor_show}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_show.svg')} alt="block_dashboard_controller_monitor_show.svg" />

Afișează informații (text sau valoare) pe monitorul dashboard.

- Tip: bloc de comandă
- Utilizare tipică: afișarea nivelului bateriei, unghiului motorului, dispozitivului conectat pe port etc.

### `Setează valoare monitor` {#block_dashboard_controller_monitor_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_set_value.svg')} alt="block_dashboard_controller_monitor_set_value.svg" />

Setează o valoare întreagă pentru un monitor de tip vitezometru.

- Tip: bloc de comandă
- Utilizare tipică: actualizarea valorii monitorului în runtime

### `Setează valoare monitor înclinare` {#block_dashboard_controller_monitor_tilt_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_tilt_set_value.svg')} alt="block_dashboard_controller_monitor_tilt_set_value.svg" />

Setează valoarea de înclinare (înclinare/rotire) pentru monitorul de înclinare.

- Tip: bloc de comandă
- Utilizare tipică: afișarea valorilor de înclinare în runtime
- Opțiuni axă: `înclinare`, `rotire`
