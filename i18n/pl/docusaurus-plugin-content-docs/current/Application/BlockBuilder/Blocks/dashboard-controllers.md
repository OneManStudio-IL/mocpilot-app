---
id: DashboardControllers
title: Kontrolery pulpitu
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Kontrolery pulpitu

Bloki te służą do odczytu danych wejściowych użytkownika z elementów sterujących na ekranie, reagowania na działania użytkownika oraz aktualizacji stanu interfejsu pulpitu.

## Globalne bloki kontrolerów pulpitu

### `Ustaw kolor kontrolera` {#block_dashboard_controller_all_set_color}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_color.svg')} alt="block_dashboard_controller_all_set_color.svg" />

Zmienia wizualny kolor akcentu wybranego kontrolera pulpitu.

- Typ: blok polecenia
- Typowe użycie: wskazywanie stanów w czasie działania lub dynamiczna zmiana stylu kontrolera w zależności od warunków

### `Ustaw interaktywność kontrolera` {#block_dashboard_controller_all_set_interactivity}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_interactivity.svg')} alt="block_dashboard_controller_all_set_interactivity.svg" />

Steruje interaktywnością wybranego kontrolera pulpitu.  
Jeśli interaktywność jest wyłączona, kontroler nie reaguje na dotyk.

- Typ: blok polecenia
- Typowe użycie: tymczasowe blokowanie sterowania podczas określonej logiki lub stanów bezpieczeństwa
- Opcje stanu: `włącz`, `wyłącz`

## Bloki przycisków

### `Zdarzenie przycisku` {#block_dashboard_controller_button_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_event.svg')} alt="block_dashboard_controller_button_event.svg" />

Wyzwalane, gdy stan przycisku pulpitu ulega zmianie (naciśnięty/zwolniony).

- Typ: blok zdarzenia
- Wyjście: uruchamia połączony skrypt
- Opcje stanu: `naciśnięty`, `zwolniony`

### `Wartość przycisku (boolean)` {#block_dashboard_controller_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_value_boolean.svg')} alt="block_dashboard_controller_button_value_boolean.svg" />

Zwraca aktualny stan przycisku pulpitu.

- Typ: blok wartości
- Wyjście: `true`/`false`
- Opcje stanu: `naciśnięty`, `zwolniony`

## Bloki D-pad

### `Zdarzenie D-pad` {#block_dashboard_controller_dpad_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_event.svg')} alt="block_dashboard_controller_dpad_event.svg" />

Wyzwalane, gdy kierunek D-pada zmienia się lub odpowiada skonfigurowanemu kierunkowi.

- Typ: blok zdarzenia
- Wyjście: uruchamia połączony skrypt
- Opcje kierunku: `góra`, `dół`, `lewo`, `prawo`
- Opcje stanu przycisku: `naciśnięty`, `zwolniony`

### `Wartość D-pad (boolean)` {#block_dashboard_controller_dpad_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_value_boolean.svg')} alt="block_dashboard_controller_dpad_value_boolean.svg" />

Zwraca, czy wybrany kierunek D-pada jest aktywny.

- Typ: blok wartości
- Wyjście: `true`/`false`
- Opcje kierunku: `góra`, `dół`, `lewo`, `prawo`
- Opcje stanu przycisku: `naciśnięty`, `zwolniony`

## Bloki joysticka

### `Zdarzenie joysticka` {#block_dashboard_controller_joystick_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_event.svg')} alt="block_dashboard_controller_joystick_event.svg" />

Wyzwalane, gdy pozycja joysticka ulega zmianie.

- Typ: blok zdarzenia
- Wyjście: uruchamia połączony skrypt
- Opcje stanu: `góra`, `dół`, `lewo`, `prawo`, `ruch`, `zwolniony`

### `Wartość joysticka (float)` {#block_dashboard_controller_joystick_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_value_float.svg')} alt="block_dashboard_controller_joystick_value_float.svg" />

Zwraca wartość osi joysticka.

- Typ: blok wartości
- Wyjście: liczba (float), zwykle w znormalizowanym zakresie
- Opcje osi: `oś X`, `oś Y`

## Bloki pedałów

### `Zdarzenie pedałów` {#block_dashboard_controller_pedals_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_event.svg')} alt="block_dashboard_controller_pedals_event.svg" />

Wyzwalane, gdy zmienia się wejście pedałów.

- Typ: blok zdarzenia
- Wyjście: uruchamia połączony skrypt
- Opcje pedałów: `dowolny`, `hamulec`, `przyspieszenie`
- Opcje stanu: `ruch`, `naciśnięty`, `zwolniony`

### `Wartość pedałów (float)` {#block_dashboard_controller_pedals_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_float.svg')} alt="block_dashboard_controller_pedals_value_float.svg" />

Zwraca wartość analogową pedału.

- Typ: blok wartości
- Wyjście: liczba (float)

### `Wartość pedałów (boolean)` {#block_dashboard_controller_pedals_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_boolean.svg')} alt="block_dashboard_controller_pedals_value_boolean.svg" />

Zwraca wybrany stan w zależności od tego, czy określony pedał jest naciśnięty lub zwolniony.

- Typ: blok wartości
- Wyjście: `true`/`false`
- Opcje pedałów: `hamulec`, `przyspieszenie`
- Opcje stanu: `naciśnięty`, `zwolniony`

## Bloki suwaka

### `Zdarzenie suwaka` {#block_dashboard_controller_slider_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_event.svg')} alt="block_dashboard_controller_slider_event.svg" />

Wyzwalane, gdy zmienia się wartość suwaka.

- Typ: blok zdarzenia
- Wyjście: uruchamia połączony skrypt
- Opcje stanu: `niski`, `wysoki`, `ruch`, `zwolniony`

### `Wartość suwaka (float)` {#block_dashboard_controller_slider_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_value_float.svg')} alt="block_dashboard_controller_slider_value_float.svg" />

Zwraca aktualną wartość suwaka.

- Typ: blok wartości
- Wyjście: liczba (float)

## Bloki krokowe (stepper)

### `Zdarzenie steppera` {#block_dashboard_controller_stepper_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_event.svg')} alt="block_dashboard_controller_stepper_event.svg" />

Wyzwalane, gdy wartość steppera zmienia się o krok.

- Typ: blok zdarzenia
- Wyjście: uruchamia połączony skrypt
- Opcje kroku: `dowolny`, `reset`, `minus`, `plus`
- Opcje stanu przycisku: `naciśnięty`, `zwolniony`

### `Wartość steppera (float)` {#block_dashboard_controller_stepper_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_value_float.svg')} alt="block_dashboard_controller_stepper_value_float.svg" />

Zwraca aktualną wartość steppera.

- Typ: blok wartości
- Wyjście: liczba (float)

## Bloki kierownicy

### `Zdarzenie kierownicy` {#block_dashboard_controller_steering_wheel_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_event.svg')} alt="block_dashboard_controller_steering_wheel_event.svg" />

Wyzwalane, gdy pozycja kierownicy się zmienia.

- Typ: blok zdarzenia
- Wyjście: uruchamia połączony skrypt
- Opcje stanu: `ruch`, `naciśnięty`, `zwolniony`

### `Wartość kierownicy (float)` {#block_dashboard_controller_steering_wheel_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_value_float.svg')} alt="block_dashboard_controller_steering_wheel_value_float.svg" />

Zwraca aktualną wartość kierownicy.

- Typ: blok wartości
- Wyjście: liczba (float)

### `Wartość kierownicy (boolean)` {#block_dashboard_controller_steeringwheel_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steeringwheel_value_boolean.svg')} alt="block_dashboard_controller_steeringwheel_value_boolean.svg" />

Zwraca wybrany stan w zależności od tego, czy kierownica jest naciśnięta lub zwolniona.

- Typ: blok wartości
- Wyjście: `true`/`false`
- Opcje stanu: `ruch`, `naciśnięty`, `zwolniony`

## Bloki przełącznika

### `Zdarzenie przełącznika` {#block_dashboard_controller_switch_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_event.svg')} alt="block_dashboard_controller_switch_event.svg" />

Wyzwalane, gdy stan przełącznika ulega zmianie.

- Typ: blok zdarzenia
- Wyjście: uruchamia połączony skrypt
- Opcje przełącznika: `włączony`, `wyłączony`

### `Wartość przełącznika (boolean)` {#block_dashboard_controller_switch_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_value_boolean.svg')} alt="block_dashboard_controller_switch_value_boolean.svg" />

Zwraca aktualny stan przełącznika.

- Typ: blok wartości
- Wyjście: `true`/`false`
- Opcje stanu: `włączony`, `wyłączony`

## Bloki monitora

### `Pokaż na monitorze` {#block_dashboard_controller_monitor_show}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_show.svg')} alt="block_dashboard_controller_monitor_show.svg" />

Wyświetla informacje (tekst lub wartość) na monitorze pulpitu.

- Typ: blok polecenia
- Typowe użycie: wyświetlanie poziomu baterii, kąta silnika, aktualnie podłączonego urządzenia do portu huba i innych informacji w czasie działania

### `Ustaw wartość monitora` {#block_dashboard_controller_monitor_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_set_value.svg')} alt="block_dashboard_controller_monitor_set_value.svg" />

Ustawia wartość całkowitą dla monitora prędkości (speedometru) na pulpicie.

- Typ: blok polecenia
- Typowe użycie: aktualizacja wartości monitora typu speedometr w czasie działania

### `Ustaw wartość nachylenia monitora` {#block_dashboard_controller_monitor_tilt_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_tilt_set_value.svg')} alt="block_dashboard_controller_monitor_tilt_set_value.svg" />

Ustawia wartość nachylenia (pitch/roll) dla monitora nachylenia na pulpicie.

- Typ: blok polecenia
- Typowe użycie: wyświetlanie wartości nachylenia w czasie działania
- Opcje osi: `pitch`, `roll`