---
id: DashboardControllers
title: Ovladače dashboardu
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Ovladače dashboardu

Tyto bloky se používají ke čtení uživatelského vstupu z ovládacích prvků na obrazovce, reakci na akce uživatele a aktualizaci stavu UI dashboardu.

## Globální bloky ovladačů dashboardu

### `Nastavit barvu ovladače` {#block_dashboard_controller_all_set_color}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_color.svg')} alt="block_dashboard_controller_all_set_color.svg" />

Změní zvýrazňovací barvu vybraného ovladače dashboardu.

- Typ: příkazový blok
- Typické použití: indikace běhových stavů nebo dynamická změna stylu ovladače podle podmínek

### `Nastavit interaktivitu ovladače` {#block_dashboard_controller_all_set_interactivity}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_interactivity.svg')} alt="block_dashboard_controller_all_set_interactivity.svg" />

Řídí interaktivitu vybraného ovladače dashboardu.
Pokud je interaktivita zakázána, ovladač nereaguje na dotykový vstup.

- Typ: příkazový blok
- Typické použití: dočasné uzamčení ovládání při specifické logice nebo v bezpečnostních stavech
- Možnosti stavu: `povolit`, `zakázat`

## Bloky tlačítek

### `Událost tlačítka` {#block_dashboard_controller_button_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_event.svg')} alt="block_dashboard_controller_button_event.svg" />

Spustí se, když tlačítko dashboardu změní stav (stisknuto/uvolněno).

- Typ: blok události
- Výstup: spustí připojený skript
- Možnosti stavu: `stisknuto`, `uvolněno`

### `Hodnota tlačítka (boolean)` {#block_dashboard_controller_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_value_boolean.svg')} alt="block_dashboard_controller_button_value_boolean.svg" />

Vrací aktuální stav tlačítka dashboardu.

- Typ: blok hodnoty
- Výstup: `true`/`false`
- Možnosti stavu: `stisknuto`, `uvolněno`

## Bloky D-padu

### `Událost D-padu` {#block_dashboard_controller_dpad_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_event.svg')} alt="block_dashboard_controller_dpad_event.svg" />

Spustí se, když se směr D-padu změní nebo odpovídá nastavenému směru.

- Typ: blok události
- Výstup: spustí připojený skript
- Možnosti směru: `nahoru`, `dolů`, `vlevo`, `vpravo`
- Možnosti stavu tlačítka: `stisknuto`, `uvolněno`

### `Hodnota D-padu (boolean)` {#block_dashboard_controller_dpad_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_value_boolean.svg')} alt="block_dashboard_controller_dpad_value_boolean.svg" />

Vrací, zda je vybraný směr D-padu aktivní.

- Typ: blok hodnoty
- Výstup: `true`/`false`
- Možnosti směru: `nahoru`, `dolů`, `vlevo`, `vpravo`
- Možnosti stavu tlačítka: `stisknuto`, `uvolněno`

## Bloky joysticku

### `Událost joysticku` {#block_dashboard_controller_joystick_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_event.svg')} alt="block_dashboard_controller_joystick_event.svg" />

Spustí se, když se změní poloha joysticku.

- Typ: blok události
- Výstup: spustí připojený skript
- Možnosti stavu: `nahoru`, `dolů`, `vlevo`, `vpravo`, `pohnut`, `uvolněno`

### `Hodnota joysticku (float)` {#block_dashboard_controller_joystick_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_value_float.svg')} alt="block_dashboard_controller_joystick_value_float.svg" />

Vrací hodnotu osy joysticku.

- Typ: blok hodnoty
- Výstup: číselný (float), obvykle v normalizovaném rozsahu
- Možnosti osy: `osa X`, `osa Y`

## Bloky pedálů

### `Událost pedálů` {#block_dashboard_controller_pedals_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_event.svg')} alt="block_dashboard_controller_pedals_event.svg" />

Spustí se, když se změní vstup pedálů.

- Typ: blok události
- Výstup: spustí připojený skript
- Možnosti pedálu: `jakýkoli`, `brzda`, `zrychlení`
- Možnosti stavu: `pohnut`, `stisknuto`, `uvolněno`

### `Hodnota pedálů (float)` {#block_dashboard_controller_pedals_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_float.svg')} alt="block_dashboard_controller_pedals_value_float.svg" />

Vrací analogovou hodnotu pedálů.

- Typ: blok hodnoty
- Výstup: číselný (float)

### `Hodnota pedálů (boolean)` {#block_dashboard_controller_pedals_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_boolean.svg')} alt="block_dashboard_controller_pedals_value_boolean.svg" />

Vrací vybraný stav podle toho, zda je konkrétní pedál stisknutý nebo uvolněný.

- Typ: blok hodnoty
- Výstup: `true`/`false`
- Možnosti pedálu: `brzda`, `zrychlení`
- Možnosti stavu: `stisknuto`, `uvolněno`

## Bloky posuvníku

### `Událost posuvníku` {#block_dashboard_controller_slider_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_event.svg')} alt="block_dashboard_controller_slider_event.svg" />

Spustí se, když se změní hodnota posuvníku.

- Typ: blok události
- Výstup: spustí připojený skript
- Možnosti stavu: `nízký`, `vysoký`, `pohnut`, `uvolněno`

### `Hodnota posuvníku (float)` {#block_dashboard_controller_slider_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_value_float.svg')} alt="block_dashboard_controller_slider_value_float.svg" />

Vrací aktuální hodnotu posuvníku.

- Typ: blok hodnoty
- Výstup: číselný (float)

## Bloky krokovače

### `Událost krokovače` {#block_dashboard_controller_stepper_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_event.svg')} alt="block_dashboard_controller_stepper_event.svg" />

Spustí se, když se hodnota krokovače změní o krok.

- Typ: blok události
- Výstup: spustí připojený skript
- Možnosti kroku: `jakýkoli`, `resetovat`, `minus`, `plus`
- Možnosti stavu tlačítka: `stisknuto`, `uvolněno`

### `Hodnota krokovače (float)` {#block_dashboard_controller_stepper_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_value_float.svg')} alt="block_dashboard_controller_stepper_value_float.svg" />

Vrací aktuální hodnotu krokovače.

- Typ: blok hodnoty
- Výstup: číselný (float)

## Bloky volantu

### `Událost volantu` {#block_dashboard_controller_steering_wheel_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_event.svg')} alt="block_dashboard_controller_steering_wheel_event.svg" />

Spustí se, když se změní poloha volantu.

- Typ: blok události
- Výstup: spustí připojený skript
- Možnosti stavu: `pohnut`, `stisknuto`, `uvolněno`

### `Hodnota volantu (float)` {#block_dashboard_controller_steering_wheel_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_value_float.svg')} alt="block_dashboard_controller_steering_wheel_value_float.svg" />

Vrací aktuální hodnotu volantu.

- Typ: blok hodnoty
- Výstup: číselný (float)

### `Hodnota volantu (boolean)` {#block_dashboard_controller_steeringwheel_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steeringwheel_value_boolean.svg')} alt="block_dashboard_controller_steeringwheel_value_boolean.svg" />

Vrací vybraný stav podle toho, zda je volant stisknutý nebo uvolněný.

- Typ: blok hodnoty
- Výstup: `true`/`false`
- Možnosti stavu: `pohnut`, `stisknuto`, `uvolněno`

## Bloky přepínače

### `Událost přepínače` {#block_dashboard_controller_switch_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_event.svg')} alt="block_dashboard_controller_switch_event.svg" />

Spustí se, když se změní stav přepínače.

- Typ: blok události
- Výstup: spustí připojený skript
- Možnosti přepnutí: `povoleno`, `vypnuto`

### `Hodnota přepínače (boolean)` {#block_dashboard_controller_switch_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_value_boolean.svg')} alt="block_dashboard_controller_switch_value_boolean.svg" />

Vrací aktuální stav přepínače.

- Typ: blok hodnoty
- Výstup: `true`/`false`
- Možnosti stavu: `povoleno`, `vypnuto`

## Bloky monitoru

### `Monitor zobrazit` {#block_dashboard_controller_monitor_show}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_show.svg')} alt="block_dashboard_controller_monitor_show.svg" />

Zobrazí informace (text nebo hodnotu) na monitoru dashboardu.

- Typ: příkazový blok
- Typické použití: zobrazení úrovně baterie, úhlu motoru, aktuálně připojeného zařízení na portu hubu a podobných běhových informací

### `Monitor nastavit hodnotu` {#block_dashboard_controller_monitor_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_set_value.svg')} alt="block_dashboard_controller_monitor_set_value.svg" />

Nastaví celočíselnou hodnotu pro monitor rychloměru dashboardu.

- Typ: příkazový blok
- Typické použití: aktualizace hodnoty monitoru typu rychloměr za běhu

### `Monitor náklonu nastavit hodnotu` {#block_dashboard_controller_monitor_tilt_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_tilt_set_value.svg')} alt="block_dashboard_controller_monitor_tilt_set_value.svg" />

Nastaví hodnotu monitoru náklonu (náklon/rotace) pro monitor náklonu dashboardu.

- Typ: příkazový blok
- Typické použití: zobrazení běhových hodnot náklonu ve vyhrazeném monitoru náklonu
- Možnosti osy: `náklon`, `rotace`

## Poznámky k použití

- Bloky událostí jsou nejlepší pro okamžitou reakci na změny uživatelského vstupu.
- Bloky hodnot jsou nejlepší, když potřebujete aktuální stav uvnitř smyček/podmínek.
- Pro plynulé ovládání kombinujte bloky hodnot se škálováním a logikou mrtvé zóny.
- Bloky interaktivity/barvy použijte k odražení stavů aplikace (aktivní, pozastaveno, chyba).
