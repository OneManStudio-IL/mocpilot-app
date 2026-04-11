---
id: DashboardControllers
title: Ovládací panel
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Ovládací panel

Bloky ovládacieho panela sa používajú na čítanie vstupu používateľa z ovládacích prvkov na obrazovke, reakciu na akcie používateľa a aktualizáciu stavu rozhrania panela.

## Globálne bloky ovládacieho panela

### `Nastav farbu ovládača` {#block_dashboard_controller_all_set_color}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_color.svg')} alt="block_dashboard_controller_all_set_color.svg" />

Zmení vizuálnu farbu zvýraznenia vybraného ovládača.

- Typ: príkazový blok  
- Typické použitie: indikácia stavu počas behu, dynamická zmena vzhľadu  

### `Nastav interaktivitu ovládača` {#block_dashboard_controller_all_set_interactivity}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_interactivity.svg')} alt="block_dashboard_controller_all_set_interactivity.svg" />

Ovláda interaktivitu vybraného ovládača.  
Ak je interaktivita vypnutá, ovládač nereaguje na dotyk.

- Typ: príkazový blok  
- Typické použitie: dočasné zablokovanie ovládania  
- Možnosti stavu: `povolené`, `vypnuté`  

## Bloky tlačidiel

### `Udalosť tlačidla` {#block_dashboard_controller_button_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_event.svg')} alt="block_dashboard_controller_button_event.svg" />

Spustí sa, keď tlačidlo zmení stav.

- Typ: blok udalosti  
- Možnosti stavu: `stlačené`, `uvoľnené`  

### `Hodnota tlačidla (boolean)` {#block_dashboard_controller_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_value_boolean.svg')} alt="block_dashboard_controller_button_value_boolean.svg" />

Vracia aktuálny stav tlačidla.

- Typ: blok hodnoty  
- Výstup: `true` / `false`  
- Možnosti stavu: `stlačené`, `uvoľnené`  

## Bloky smerového kríža (D-pad)

### `Udalosť smerového kríža` {#block_dashboard_controller_dpad_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_event.svg')} alt="block_dashboard_controller_dpad_event.svg" />

Spustí sa, keď sa zmení smer alebo stav smerového kríža.

- Typ: blok udalosti  
- Možnosti smeru: `hore`, `dole`, `vľavo`, `vpravo`  
- Možnosti stavu: `stlačené`, `uvoľnené`  

### `Hodnota smerového kríža (boolean)` {#block_dashboard_controller_dpad_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_value_boolean.svg')} alt="block_dashboard_controller_dpad_value_boolean.svg" />

Vracia, či je smer aktívny.

- Typ: blok hodnoty  
- Výstup: `true` / `false`  

## Bloky joysticku

### `Udalosť joysticku` {#block_dashboard_controller_joystick_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_event.svg')} alt="block_dashboard_controller_joystick_event.svg" />

Spustí sa pri zmene joysticku.

- Typ: blok udalosti  
- Možnosti stavu: `hore`, `dole`, `vľavo`, `vpravo`, `pohyb`, `uvoľnené`  

### `Hodnota joysticku (float)` {#block_dashboard_controller_joystick_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_value_float.svg')} alt="block_dashboard_controller_joystick_value_float.svg" />

Vracia hodnotu joysticku.

- Typ: blok hodnoty  
- Výstup: číslo (float)  

## Bloky pedálov

### `Udalosť pedálov` {#block_dashboard_controller_pedals_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_event.svg')} alt="block_dashboard_controller_pedals_event.svg" />

Spustí sa pri zmene pedálov.

- Typ: blok udalosti  
- Možnosti pedála: `ľubovoľný`, `brzda`, `plyn`  
- Možnosti stavu: `pohyb`, `stlačené`, `uvoľnené`  

### `Hodnota pedálov (float)` {#block_dashboard_controller_pedals_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_float.svg')} alt="block_dashboard_controller_pedals_value_float.svg" />

Vracia analógovú hodnotu pedálov.

### `Hodnota pedálov (boolean)` {#block_dashboard_controller_pedals_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_boolean.svg')} alt="block_dashboard_controller_pedals_value_boolean.svg" />

Vracia stav pedálov.

- Výstup: `true` / `false`  

## Bloky posuvníka

### `Udalosť posuvníka` {#block_dashboard_controller_slider_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_event.svg')} alt="block_dashboard_controller_slider_event.svg" />

Spustí sa pri zmene posuvníka.

- Možnosti stavu: `minimum`, `maximum`, `pohyb`, `uvoľnené`  

### `Hodnota posuvníka (float)` {#block_dashboard_controller_slider_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_value_float.svg')} alt="block_dashboard_controller_slider_value_float.svg" />

Vracia hodnotu posuvníka.

## Bloky krokovača

### `Udalosť krokovača` {#block_dashboard_controller_stepper_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_event.svg')} alt="block_dashboard_controller_stepper_event.svg" />

Spustí sa pri zmene hodnoty.

- Možnosti: `ľubovoľný`, `reset`, `mínus`, `plus`  

### `Hodnota krokovača (float)` {#block_dashboard_controller_stepper_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_value_float.svg')} alt="block_dashboard_controller_stepper_value_float.svg" />

Vracia hodnotu krokovača.

## Bloky volantu

### `Udalosť volantu` {#block_dashboard_controller_steering_wheel_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_event.svg')} alt="block_dashboard_controller_steering_wheel_event.svg" />

Spustí sa pri zmene volantu.

### `Hodnota volantu (float)` {#block_dashboard_controller_steering_wheel_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_value_float.svg')} alt="block_dashboard_controller_steering_wheel_value_float.svg" />

Vracia hodnotu volantu.

### `Hodnota volantu (boolean)` {#block_dashboard_controller_steeringwheel_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steeringwheel_value_boolean.svg')} alt="block_dashboard_controller_steeringwheel_value_boolean.svg" />

Vracia stav volantu.

## Bloky prepínača

### `Udalosť prepínača` {#block_dashboard_controller_switch_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_event.svg')} alt="block_dashboard_controller_switch_event.svg" />

Spustí sa pri zmene stavu prepínača.

- Možnosti: `povolené`, `vypnuté`  

### `Hodnota prepínača (boolean)` {#block_dashboard_controller_switch_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_value_boolean.svg')} alt="block_dashboard_controller_switch_value_boolean.svg" />

Vracia stav prepínača.

## Bloky monitoru

### `Zobraz monitor` {#block_dashboard_controller_monitor_show}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_show.svg')} alt="block_dashboard_controller_monitor_show.svg" />

Zobrazuje hodnotu alebo text na monitore.

### `Nastav hodnotu monitoru` {#block_dashboard_controller_monitor_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_set_value.svg')} alt="block_dashboard_controller_monitor_set_value.svg" />

Nastaví číselnú hodnotu (napr. tachometer).

### `Nastav náklon monitoru` {#block_dashboard_controller_monitor_tilt_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_tilt_set_value.svg')} alt="block_dashboard_controller_monitor_tilt_set_value.svg" />

Nastaví hodnotu náklonu.

- Osi: `náklon`, `rotácia`
