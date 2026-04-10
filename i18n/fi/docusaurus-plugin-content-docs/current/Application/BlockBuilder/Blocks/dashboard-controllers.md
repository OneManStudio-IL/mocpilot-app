---
id: DashboardControllers
title: Ohjauspaneelin ohjaimet
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Ohjauspaneelin ohjaimet

Näitä lohkoja käytetään lukemaan käyttäjän syötteitä näytön ohjaimista, reagoimaan käyttäjän toimintoihin ja päivittämään käyttöliittymän tilaa.

## Yleiset ohjainlohkot

### `Aseta ohjaimen väri` {#block_dashboard_controller_all_set_color}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_color.svg')} alt="block_dashboard_controller_all_set_color.svg" />

Muuttaa valitun ohjaimen korostusväriä.

- Tyyppi: komentolohko
- Tyypillinen käyttö: näyttää tilat (valmis, käynnissä, virhe)

### `Aseta ohjaimen interaktiivisuus` {#block_dashboard_controller_all_set_interactivity}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_interactivity.svg')} alt="block_dashboard_controller_all_set_interactivity.svg" />

Määrittää, voiko ohjainta käyttää.  
Jos pois päältä, ohjain ei reagoi kosketukseen.

- Tyyppi: komentolohko
- Vaihtoehdot: `ota käyttöön`, `poista käytöstä`

## Painikelohkot

### `Painiketapahtuma` {#block_dashboard_controller_button_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_event.svg')} alt="block_dashboard_controller_button_event.svg" />

Käynnistyy, kun painike muuttuu (painettu/vapautettu).

- Tyyppi: tapahtumalohko
- Tilat: `painettu`, `vapautettu`

### `Painikkeen arvo (boolean)` {#block_dashboard_controller_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_value_boolean.svg')} alt="block_dashboard_controller_button_value_boolean.svg" />

Palauttaa painikkeen tilan.

- Tyyppi: arvopalauttava lohko
- Tuloste: `true`/`false`

## D-pad-lohkot

### `D-pad-tapahtuma` {#block_dashboard_controller_dpad_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_event.svg')} alt="block_dashboard_controller_dpad_event.svg" />

Käynnistyy, kun suunta muuttuu.

- Tyyppi: tapahtumalohko
- Suunnat: `ylös`, `alas`, `vasen`, `oikea`

### `D-pad-arvo (boolean)` {#block_dashboard_controller_dpad_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_value_boolean.svg')} alt="block_dashboard_controller_dpad_value_boolean.svg" />

Palauttaa, onko suunta aktiivinen.

- Tyyppi: arvopalauttava lohko
- Tuloste: `true`/`false`

## Joystick-lohkot

### `Joystick-tapahtuma` {#block_dashboard_controller_joystick_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_event.svg')} alt="block_dashboard_controller_joystick_event.svg" />

Käynnistyy, kun joystick liikkuu.

- Tyyppi: tapahtumalohko
- Tilat: `ylös`, `alas`, `vasen`, `oikea`, `liikkui`, `vapautettu`

### `Joystick-arvo (float)` {#block_dashboard_controller_joystick_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_value_float.svg')} alt="block_dashboard_controller_joystick_value_float.svg" />

Palauttaa joystickin arvon.

- Tyyppi: arvopalauttava lohko
- Akselit: `X-akseli`, `Y-akseli`

## Poljinlohkot

### `Poljin-tapahtuma` {#block_dashboard_controller_pedals_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_event.svg')} alt="block_dashboard_controller_pedals_event.svg" />

Käynnistyy, kun poljin muuttuu.

- Tyyppi: tapahtumalohko
- Vaihtoehdot: `mikä tahansa`, `jarru`, `kaasu`

### `Polkimen arvo (float)` {#block_dashboard_controller_pedals_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_float.svg')} alt="block_dashboard_controller_pedals_value_float.svg" />

Palauttaa polkimen arvon.

### `Polkimen arvo (boolean)` {#block_dashboard_controller_pedals_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_boolean.svg')} alt="block_dashboard_controller_pedals_value_boolean.svg" />

Palauttaa tilan.

## Liukusäädinlohkot

### `Liukusäädin-tapahtuma` {#block_dashboard_controller_slider_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_event.svg')} alt="block_dashboard_controller_slider_event.svg" />

Käynnistyy, kun arvo muuttuu.

### `Liukusäätimen arvo (float)` {#block_dashboard_controller_slider_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_value_float.svg')} alt="block_dashboard_controller_slider_value_float.svg" />

Palauttaa arvon.

## Stepper-lohkot

### `Stepper-tapahtuma` {#block_dashboard_controller_stepper_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_event.svg')} alt="block_dashboard_controller_stepper_event.svg" />

Käynnistyy askelmuutoksessa.

### `Stepper-arvo (float)` {#block_dashboard_controller_stepper_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_value_float.svg')} alt="block_dashboard_controller_stepper_value_float.svg" />

Palauttaa arvon.

## Ohjauspyörälohkot

### `Ohjauspyörä-tapahtuma` {#block_dashboard_controller_steering_wheel_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_event.svg')} alt="block_dashboard_controller_steering_wheel_event.svg" />

Käynnistyy, kun ohjauspyörä liikkuu.

### `Ohjauspyörän arvo (float)` {#block_dashboard_controller_steering_wheel_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_value_float.svg')} alt="block_dashboard_controller_steering_wheel_value_float.svg" />

Palauttaa arvon.

## Kytkinlohkot

### `Kytkin-tapahtuma` {#block_dashboard_controller_switch_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_event.svg')} alt="block_dashboard_controller_switch_event.svg" />

Käynnistyy tilan muuttuessa.

- Tilat: `päälle`, `pois`

### `Kytkimen arvo (boolean)` {#block_dashboard_controller_switch_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_value_boolean.svg')} alt="block_dashboard_controller_switch_value_boolean.svg" />

Palauttaa tilan.

## Monitorilohkot

### `Näytä monitorissa` {#block_dashboard_controller_monitor_show}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_show.svg')} alt="block_dashboard_controller_monitor_show.svg" />

Näyttää tiedon.

### `Aseta monitorin arvo` {#block_dashboard_controller_monitor_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_set_value.svg')} alt="block_dashboard_controller_monitor_set_value.svg" />

Asettaa arvon.

### `Aseta kallistus` {#block_dashboard_controller_monitor_tilt_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_tilt_set_value.svg')} alt="block_dashboard_controller_monitor_tilt_set_value.svg" />

Asettaa kallistuksen.

## Käyttöhuomiot

- Tapahtumalohkot reagoivat nopeasti.
- Arvolohkot käytetään ehdoissa.
- Yhdistä skaalaus ja dead-zone sujuvaan ohjaukseen.
