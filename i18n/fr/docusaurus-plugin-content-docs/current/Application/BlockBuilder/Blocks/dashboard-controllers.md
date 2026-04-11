---
id: DashboardControllers
title: Contrôleurs du tableau de bord
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Contrôleurs du tableau de bord

Ces blocs sont utilisés pour lire les entrées utilisateur depuis les contrôles à l’écran, réagir aux actions de l’utilisateur et mettre à jour l’état de l’interface du tableau de bord.

## Blocs globaux des contrôleurs du tableau de bord

### `Définir la couleur du contrôleur` {#block_dashboard_controller_all_set_color}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_color.svg')} alt="block_dashboard_controller_all_set_color.svg" />

Modifie la couleur d’accentuation visuelle du contrôleur sélectionné.

- Type : bloc de commande
- Utilisation typique : indiquer des états d’exécution ou modifier dynamiquement le style selon les conditions

### `Définir l’interactivité du contrôleur` {#block_dashboard_controller_all_set_interactivity}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_interactivity.svg')} alt="block_dashboard_controller_all_set_interactivity.svg" />

Contrôle l’interactivité du contrôleur sélectionné.  
Si l’interactivité est désactivée, le contrôleur ne réagit pas au toucher.

- Type : bloc de commande
- Utilisation typique : verrouiller temporairement les contrôles pour la sécurité ou la logique
- Options d’état : `activer`, `désactiver`

## Blocs de bouton

### `Événement bouton` {#block_dashboard_controller_button_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_event.svg')} alt="block_dashboard_controller_button_event.svg" />

Déclenché lorsque l’état du bouton change (appuyé/relâché).

- Type : bloc événement
- Sortie : démarre le script connecté
- Options d’état : `appuyé`, `relâché`

### `Valeur du bouton (booléen)` {#block_dashboard_controller_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_value_boolean.svg')} alt="block_dashboard_controller_button_value_boolean.svg" />

Retourne l’état actuel du bouton.

- Type : bloc valeur
- Sortie : `true`/`false`
- Options d’état : `appuyé`, `relâché`

## Blocs D-pad

### `Événement D-pad` {#block_dashboard_controller_dpad_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_event.svg')} alt="block_dashboard_controller_dpad_event.svg" />

Déclenché lorsque la direction du D-pad change ou correspond à la direction configurée.

- Type : bloc événement
- Sortie : démarre le script connecté
- Options de direction : `haut`, `bas`, `gauche`, `droite`
- Options d’état : `appuyé`, `relâché`

### `Valeur D-pad (booléen)` {#block_dashboard_controller_dpad_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_value_boolean.svg')} alt="block_dashboard_controller_dpad_value_boolean.svg" />

Retourne si une direction du D-pad est active.

- Type : bloc valeur
- Sortie : `true`/`false`
- Options de direction : `haut`, `bas`, `gauche`, `droite`
- Options d’état : `appuyé`, `relâché`

## Blocs joystick

### `Événement joystick` {#block_dashboard_controller_joystick_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_event.svg')} alt="block_dashboard_controller_joystick_event.svg" />

Déclenché lorsque la position du joystick change.

- Type : bloc événement
- Sortie : démarre le script connecté
- Options d’état : `haut`, `bas`, `gauche`, `droite`, `déplacé`, `relâché`

### `Valeur joystick (float)` {#block_dashboard_controller_joystick_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_value_float.svg')} alt="block_dashboard_controller_joystick_value_float.svg" />

Retourne la valeur de l’axe du joystick.

- Type : bloc valeur
- Sortie : numérique (float)
- Options d’axe : `axe x`, `axe y`

## Blocs pédales

### `Événement pédales` {#block_dashboard_controller_pedals_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_event.svg')} alt="block_dashboard_controller_pedals_event.svg" />

Déclenché lorsque l’entrée des pédales change.

- Type : bloc événement
- Sortie : démarre le script connecté
- Options : `toutes`, `frein`, `accélérateur`
- Options d’état : `déplacé`, `appuyé`, `relâché`

### `Valeur pédales (float)` {#block_dashboard_controller_pedals_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_float.svg')} alt="block_dashboard_controller_pedals_value_float.svg" />

Retourne la valeur analogique des pédales.

- Type : bloc valeur
- Sortie : numérique (float)

### `Valeur pédales (booléen)` {#block_dashboard_controller_pedals_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_boolean.svg')} alt="block_dashboard_controller_pedals_value_boolean.svg" />

Retourne un état basé sur l’appui ou le relâchement d’une pédale.

- Type : bloc valeur
- Sortie : `true`/`false`
- Options : `frein`, `accélérateur`
- Options d’état : `appuyé`, `relâché`

## Blocs curseur

### `Événement curseur` {#block_dashboard_controller_slider_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_event.svg')} alt="block_dashboard_controller_slider_event.svg" />

Déclenché lorsque la valeur du curseur change.

- Type : bloc événement
- Sortie : démarre le script connecté
- Options d’état : `bas`, `haut`, `déplacé`, `relâché`

### `Valeur curseur (float)` {#block_dashboard_controller_slider_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_value_float.svg')} alt="block_dashboard_controller_slider_value_float.svg" />

Retourne la valeur actuelle du curseur.

- Type : bloc valeur
- Sortie : numérique (float)

## Blocs stepper

### `Événement stepper` {#block_dashboard_controller_stepper_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_event.svg')} alt="block_dashboard_controller_stepper_event.svg" />

Déclenché lorsque la valeur change d’un pas.

- Type : bloc événement
- Sortie : démarre le script connecté
- Options : `tous`, `reset`, `moins`, `plus`
- Options d’état : `appuyé`, `relâché`

### `Valeur stepper (float)` {#block_dashboard_controller_stepper_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_value_float.svg')} alt="block_dashboard_controller_stepper_value_float.svg" />

Retourne la valeur actuelle.

- Type : bloc valeur
- Sortie : numérique (float)

## Blocs volant

### `Événement volant` {#block_dashboard_controller_steering_wheel_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_event.svg')} alt="block_dashboard_controller_steering_wheel_event.svg" />

Déclenché lorsque la position du volant change.

- Type : bloc événement
- Sortie : démarre le script connecté
- Options d’état : `déplacé`, `appuyé`, `relâché`

### `Valeur volant (float)` {#block_dashboard_controller_steering_wheel_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_value_float.svg')} alt="block_dashboard_controller_steering_wheel_value_float.svg" />

Retourne la valeur actuelle du volant.

- Type : bloc valeur
- Sortie : numérique (float)

### `Valeur volant (booléen)` {#block_dashboard_controller_steeringwheel_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steeringwheel_value_boolean.svg')} alt="block_dashboard_controller_steeringwheel_value_boolean.svg" />

Retourne l’état du volant (appuyé ou relâché).

- Type : bloc valeur
- Sortie : `true`/`false`
- Options d’état : `déplacé`, `appuyé`, `relâché`

## Blocs interrupteur

### `Événement interrupteur` {#block_dashboard_controller_switch_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_event.svg')} alt="block_dashboard_controller_switch_event.svg" />

Déclenché lorsque l’état change.

- Type : bloc événement
- Sortie : démarre le script connecté
- Options : `activé`, `désactivé`

### `Valeur interrupteur (booléen)` {#block_dashboard_controller_switch_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_value_boolean.svg')} alt="block_dashboard_controller_switch_value_boolean.svg" />

Retourne l’état actuel.

- Type : bloc valeur
- Sortie : `true`/`false`
- Options : `activé`, `désactivé`

## Blocs moniteur

### `Afficher sur le moniteur` {#block_dashboard_controller_monitor_show}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_show.svg')} alt="block_dashboard_controller_monitor_show.svg" />

Affiche une information (texte ou valeur).

- Type : bloc de commande
- Utilisation typique : afficher niveau batterie, angle moteur, appareil connecté, etc.

### `Définir valeur du moniteur` {#block_dashboard_controller_monitor_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_set_value.svg')} alt="block_dashboard_controller_monitor_set_value.svg" />

Définit une valeur entière pour un compteur.

- Type : bloc de commande
- Utilisation typique : mettre à jour une valeur type compteur de vitesse

### `Définir valeur d’inclinaison du moniteur` {#block_dashboard_controller_monitor_tilt_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_tilt_set_value.svg')} alt="block_dashboard_controller_monitor_tilt_set_value.svg" />

Définit la valeur d’inclinaison (tangage/roulis).

- Type : bloc de commande
- Utilisation typique : afficher l’inclinaison en temps réel
- Axes : `tangage`, `roulis`

## Notes d’utilisation

- Les blocs événement réagissent immédiatement aux changements.
- Les blocs valeur servent à lire l’état dans des boucles ou conditions.
- Pour un contrôle fluide, combinez avec des zones mortes et une mise à l’échelle.
- Utilisez les blocs couleur/interactivité pour refléter l’état de l’application (armé, pause, erreur).
