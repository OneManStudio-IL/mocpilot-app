---
id: DashboardControllers
title: Dashboardbedieningselementen
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Dashboardbedieningselementen

Deze blokken worden gebruikt om gebruikersinvoer van schermbedieningselementen te lezen, te reageren op gebruikersacties en de status van de dashboard-UI bij te werken.

## Globale dashboard controllerblokken

### `Stel controllerkleur in` {#block_dashboard_controller_all_set_color}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_color.svg')} alt="block_dashboard_controller_all_set_color.svg" />

Wijzigt de visuele accentkleur van de geselecteerde dashboardcontroller.

- Type: opdrachtblok
- Typisch gebruik: runtime-status aangeven of dynamisch de stijl van de controller wijzigen op basis van voorwaarden

### `Stel controllerinteractiviteit in` {#block_dashboard_controller_all_set_interactivity}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_interactivity.svg')} alt="block_dashboard_controller_all_set_interactivity.svg" />

Beheert de interactiviteit van de geselecteerde dashboardcontroller.  
Als interactiviteit is uitgeschakeld, reageert de controller niet op aanraakinvoer.

- Type: opdrachtblok
- Typisch gebruik: tijdelijk vergrendelen van bedieningselementen tijdens specifieke logica of veiligheidsstatussen
- Statusopties: `inschakelen`, `uitschakelen`

## Knopblokken

### `Knopgebeurtenis` {#block_dashboard_controller_button_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_event.svg')} alt="block_dashboard_controller_button_event.svg" />

Wordt geactiveerd wanneer de knopstatus verandert (ingedrukt/vrijgegeven).

- Type: gebeurtenisblok
- Output: start verbonden script
- Statusopties: `ingedrukt`, `vrijgegeven`

### `Knopwaarde (boolean)` {#block_dashboard_controller_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_value_boolean.svg')} alt="block_dashboard_controller_button_value_boolean.svg" />

Geeft de huidige knopstatus weer.

- Type: waarde-blok
- Output: `true`/`false`
- Statusopties: `ingedrukt`, `vrijgegeven`

## D-pad blokken

### `D-pad gebeurtenis` {#block_dashboard_controller_dpad_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_event.svg')} alt="block_dashboard_controller_dpad_event.svg" />

Wordt geactiveerd wanneer de richting van de D-pad verandert of overeenkomt met de ingestelde richting.

- Type: gebeurtenisblok
- Output: start verbonden script
- Richtingsopties: `boven`, `onder`, `links`, `rechts`
- Knopstatusopties: `ingedrukt`, `vrijgegeven`

### `D-pad waarde (boolean)` {#block_dashboard_controller_dpad_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_value_boolean.svg')} alt="block_dashboard_controller_dpad_value_boolean.svg" />

Geeft aan of een geselecteerde D-pad richting actief is.

- Type: waarde-blok
- Output: `true`/`false`
- Richtingsopties: `boven`, `onder`, `links`, `rechts`
- Knopstatusopties: `ingedrukt`, `vrijgegeven`

## Joystickblokken

### `Joystick gebeurtenis` {#block_dashboard_controller_joystick_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_event.svg')} alt="block_dashboard_controller_joystick_event.svg" />

Wordt geactiveerd wanneer de joystickpositie verandert.

- Type: gebeurtenisblok
- Output: start verbonden script
- Statusopties: `boven`, `onder`, `links`, `rechts`, `bewogen`, `vrijgegeven`

### `Joystick waarde (float)` {#block_dashboard_controller_joystick_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_value_float.svg')} alt="block_dashboard_controller_joystick_value_float.svg" />

Geeft de waarde van de joystick-as weer.

- Type: waarde-blok
- Output: numeriek (float), meestal in een genormaliseerd bereik
- Asopties: `X-as`, `Y-as`

## Pedaalblokken

### `Pedaalgebeurtenis` {#block_dashboard_controller_pedals_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_event.svg')} alt="block_dashboard_controller_pedals_event.svg" />

Wordt geactiveerd wanneer pedaalinvoer verandert.

- Type: gebeurtenisblok
- Output: start verbonden script
- Pedaalopties: `elke`, `rem`, `acceleratie`
- Statusopties: `bewogen`, `ingedrukt`, `vrijgegeven`

### `Pedaalwaarde (float)` {#block_dashboard_controller_pedals_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_float.svg')} alt="block_dashboard_controller_pedals_value_float.svg" />

Geeft de analoge pedaalwaarde weer.

- Type: waarde-blok
- Output: numeriek (float)

### `Pedaalwaarde (boolean)` {#block_dashboard_controller_pedals_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_boolean.svg')} alt="block_dashboard_controller_pedals_value_boolean.svg" />

Geeft de geselecteerde status terug op basis van of een specifiek pedaal is ingedrukt of vrijgegeven.

- Type: waarde-blok
- Output: `true`/`false`
- Pedaalopties: `rem`, `acceleratie`
- Statusopties: `ingedrukt`, `vrijgegeven`

## Schuifregelaarblokken

### `Schuifregelaar gebeurtenis` {#block_dashboard_controller_slider_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_event.svg')} alt="block_dashboard_controller_slider_event.svg" />

Wordt geactiveerd wanneer de schuifregelaarwaarde verandert.

- Type: gebeurtenisblok
- Output: start verbonden script
- Statusopties: `laag`, `hoog`, `bewogen`, `vrijgegeven`

### `Schuifregelaar waarde (float)` {#block_dashboard_controller_slider_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_value_float.svg')} alt="block_dashboard_controller_slider_value_float.svg" />

Geeft de huidige waarde van de schuifregelaar weer.

- Type: waarde-blok
- Output: numeriek (float)

## Stapblokken

### `Stapgebeurtenis` {#block_dashboard_controller_stepper_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_event.svg')} alt="block_dashboard_controller_stepper_event.svg" />

Wordt geactiveerd wanneer de stapwaarde verandert.

- Type: gebeurtenisblok
- Output: start verbonden script
- Stapopties: `elk`, `reset`, `min`, `plus`
- Knopstatusopties: `ingedrukt`, `vrijgegeven`

### `Stapwaarde (float)` {#block_dashboard_controller_stepper_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_value_float.svg')} alt="block_dashboard_controller_stepper_value_float.svg" />

Geeft de huidige stapwaarde weer.

- Type: waarde-blok
- Output: numeriek (float)

## Stuurwielblokken

### `Stuurwiel gebeurtenis` {#block_dashboard_controller_steering_wheel_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_event.svg')} alt="block_dashboard_controller_steering_wheel_event.svg" />

Wordt geactiveerd wanneer de stuurwielpositie verandert.

- Type: gebeurtenisblok
- Output: start verbonden script
- Statusopties: `bewogen`, `ingedrukt`, `vrijgegeven`

### `Stuurwiel waarde (float)` {#block_dashboard_controller_steering_wheel_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_value_float.svg')} alt="block_dashboard_controller_steering_wheel_value_float.svg" />

Geeft de huidige stuurwielwaarde weer.

- Type: waarde-blok
- Output: numeriek (float)

### `Stuurwiel waarde (boolean)` {#block_dashboard_controller_steeringwheel_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steeringwheel_value_boolean.svg')} alt="block_dashboard_controller_steeringwheel_value_boolean.svg" />

Geeft de geselecteerde status terug op basis van of het stuurwiel is ingedrukt of vrijgegeven.

- Type: waarde-blok
- Output: `true`/`false`
- Statusopties: `bewogen`, `ingedrukt`, `vrijgegeven`

## Schakelaarblokken

### `Schakelaar gebeurtenis` {#block_dashboard_controller_switch_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_event.svg')} alt="block_dashboard_controller_switch_event.svg" />

Wordt geactiveerd wanneer de schakelaarstatus verandert.

- Type: gebeurtenisblok
- Output: start verbonden script
- Toggle-opties: `ingeschakeld`, `uit`

### `Schakelaar waarde (boolean)` {#block_dashboard_controller_switch_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_value_boolean.svg')} alt="block_dashboard_controller_switch_value_boolean.svg" />

Geeft de huidige schakelaarstatus weer.

- Type: waarde-blok
- Output: `true`/`false`
- Statusopties: `ingeschakeld`, `uit`

## Monitorblokken

### `Monitor tonen` {#block_dashboard_controller_monitor_show}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_show.svg')} alt="block_dashboard_controller_monitor_show.svg" />

Toont informatie (tekst of waarde) op de dashboardmonitor.

- Type: opdrachtblok
- Typisch gebruik: batterijstatus, motorhoek, huidig verbonden apparaat op een hubpoort en soortgelijke runtime-informatie tonen

### `Monitor waarde instellen` {#block_dashboard_controller_monitor_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_set_value.svg')} alt="block_dashboard_controller_monitor_set_value.svg" />

Stelt een integerwaarde in voor een dashboard snelheidsmeter-monitor.

- Type: opdrachtblok
- Typisch gebruik: bijwerken van een snelheidsmeter-achtige monitor tijdens runtime

### `Monitor kanteling waarde instellen` {#block_dashboard_controller_monitor_tilt_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_tilt_set_value.svg')} alt="block_dashboard_controller_monitor_tilt_set_value.svg" />

Stelt de kantelwaarde (helling/rol) in voor de dashboard kantelmonitor.

- Type: opdrachtblok
- Typisch gebruik: runtime kantelwaarden weergeven in een speciale kantelmonitor
- Asopties: `helling`, `rol`
