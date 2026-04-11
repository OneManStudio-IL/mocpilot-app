---
id: Motors
title: Moteurs
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Moteurs

Les blocs moteurs sont utilisés pour démarrer, arrêter, positionner et régler les moteurs connectés aux ports du hub.

## Blocs de commande principaux des moteurs

### `Démarrer le moteur` {#block_hubs_all_motors_port_start_motor}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor.svg')} alt="block_hubs_all_motors_port_start_motor.svg" />
Démarre le moteur sélectionné.

- Options de direction : sens horaire / sens antihoraire

### `Arrêter le moteur` {#block_hubs_all_motors_port_stop_motor}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_stop_motor.svg')} alt="block_hubs_all_motors_port_stop_motor.svg" />
Arrête le moteur sélectionné.

### `Exécuter pendant` {#block_hubs_all_motors_port_run_for}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for.svg')} alt="block_hubs_all_motors_port_run_for.svg" />
Fait fonctionner le moteur sélectionné pendant une durée/un angle/un nombre de rotations défini selon les paramètres du bloc.

- Options de direction : sens horaire / sens antihoraire
- Options d’unité : `rotations`, `degrés`, `secondes`
- Remarque : cette fonction nécessite un moteur connecté au port sélectionné qui prend en charge le contrôle basé sur l’encodeur.

### `Démarrer le moteur à la vitesse` {#block_hubs_all_motors_port_start_motor_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor_at_speed.svg')} alt="block_hubs_all_motors_port_start_motor_at_speed.svg" />
Démarre le moteur avec une valeur de vitesse explicite.

### `Exécuter pendant à la vitesse` {#block_hubs_all_motors_port_run_for_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for_at_speed.svg')} alt="block_hubs_all_motors_port_run_for_at_speed.svg" />
Fait fonctionner le moteur pendant une durée/quantité cible avec une vitesse explicite.

- Options d’unité : `rotations`, `degrés`, `secondes`
- Remarque : cette fonction nécessite un moteur connecté au port sélectionné qui prend en charge le contrôle basé sur l’encodeur.

### `Définir la vitesse du moteur` {#block_hubs_all_motors_port_set_motor_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_speed.svg')} alt="block_hubs_all_motors_port_set_motor_speed.svg" />
Définit la vitesse utilisée par les blocs d’exécution du moteur associés.

## Blocs de position et de mouvement

### `Aller à la position` {#block_hubs_all_motors_port_go_to_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_position.svg')} alt="block_hubs_all_motors_port_go_to_position.svg" />
Déplace le moteur vers une position absolue cible.

- Options de trajectoire : `chemin le plus court`, `sens horaire`, `sens antihoraire`
- Remarque : cette fonction nécessite un moteur connecté au port sélectionné qui prend en charge le contrôle basé sur l’encodeur.

### `Aller à la position relative` {#block_hubs_all_motors_port_go_to_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_relative_position.svg')} alt="block_hubs_all_motors_port_go_to_relative_position.svg" />
Déplace le moteur d’un décalage relatif.

- Remarque : cette fonction nécessite un moteur connecté au port sélectionné qui prend en charge le contrôle basé sur l’encodeur.

### `BuWizz 3 aller à la position relative` {#block_hubs_buwizz3_motors_port_go_to_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_motors_port_go_to_relative_position.svg')} alt="block_hubs_buwizz3_motors_port_go_to_relative_position.svg" />
Variante BuWizz 3 du bloc de positionnement relatif.

- Remarque : cette fonction nécessite un moteur connecté au port sélectionné qui prend en charge le contrôle basé sur l’encodeur.

### `Définir la position relative` {#block_hubs_all_motors_port_set_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_relative_position.svg')} alt="block_hubs_all_motors_port_set_relative_position.svg" />
Définit la référence de position relative du moteur.

- Remarque : cette fonction nécessite un moteur connecté au port sélectionné qui prend en charge le contrôle basé sur l’encodeur.

### `Calibrer la crémaillère de direction` {#block_hubs_all_motors_port_calibrate_steering_rack}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_calibrate_steering_rack.svg')} alt="block_hubs_all_motors_port_calibrate_steering_rack.svg" />
Calibre la position neutre/de référence de la crémaillère de direction.

- Exigence : le moteur connecté au port sélectionné doit prendre en charge le suivi d’angle absolu/relatif (encodeur interne).
- Exigence mécanique : le mouvement de l’axe de direction doit être physiquement limité à une plage valide (par exemple avec les butées de fin de course de la crémaillère/de l’engrenage).
- Fonctionnement : le bloc balaie et mesure la plage de rotation disponible de la direction, puis calcule les données de calibration utilisées pour la configuration de la direction.
- Comportement de sortie : les arguments du bloc écrivent les résultats dans les variables passées au bloc (comportement similaire à un passage par référence). Ces variables sont modifiées par le bloc et doivent être utilisées pour lire les résultats de calibration.

## Blocs de réglage et de sécurité du moteur

### `Définir le comportement du moteur à l’arrêt` {#block_hubs_all_motors_port_set_motor_to_at_stop}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_to_at_stop.svg')} alt="block_hubs_all_motors_port_set_motor_to_at_stop.svg" />
Définit le mode d’arrêt du moteur (par exemple frein/maintien/libre selon les options disponibles).

- Options du mode d’arrêt : `frein`, `maintenir la position`, `roue libre`
- Remarque : cette fonction nécessite un moteur connecté au port sélectionné qui prend en charge le contrôle basé sur l’encodeur.

### `Définir la détection de blocage` {#block_hubs_all_motors_port_set_motors_stall_detection}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motors_stall_detection.svg')} alt="block_hubs_all_motors_port_set_motors_stall_detection.svg" />
Active ou désactive la détection de blocage.

- Remarque : disponible uniquement pour le hub MINDSTORMS Robot Inventor.

### `Définir l’accélération` {#block_hubs_all_motors_port_set_acceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_acceleration.svg')} alt="block_hubs_all_motors_port_set_acceleration.svg" />
Définit le profil/taux d’accélération du moteur.

- Options de profil : `par défaut`, `rapide`, `équilibré`, `fluide`, `lent`, `très lent`
- Remarque : cette fonction nécessite un moteur connecté au port sélectionné qui prend en charge le contrôle basé sur l’encodeur.

### `Définir la décélération` {#block_hubs_all_motors_port_set_deceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_deceleration.svg')} alt="block_hubs_all_motors_port_set_deceleration.svg" />
Définit le profil/taux de décélération du moteur.

- Options de profil : `par défaut`, `rapide`, `équilibré`, `fluide`, `lent`, `très lent`
- Remarque : cette fonction nécessite un moteur connecté au port sélectionné qui prend en charge le contrôle basé sur l’encodeur.

## Blocs reporter du moteur

### `Position` {#block_hubs_all_motors_port_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_position.svg')} alt="block_hubs_all_motors_port_position.svg" />
Retourne la position actuelle du moteur.

### `Position relative` {#block_hubs_all_motors_port_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_relative_position.svg')} alt="block_hubs_all_motors_port_relative_position.svg" />
Retourne la valeur actuelle de la position relative.

### `Vitesse` {#block_hubs_all_motors_port_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_speed.svg')} alt="block_hubs_all_motors_port_speed.svg" />
Retourne la vitesse actuelle du moteur.

### `Puissance` {#block_hubs_all_motors_port_power}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_power.svg')} alt="block_hubs_all_motors_port_power.svg" />
Retourne la valeur actuelle de puissance du moteur.

- Remarque : disponible uniquement pour le hub MINDSTORMS Robot Inventor.

## Blocs moteur Technic Move

### `Démarrer les moteurs à la vitesse` {#block_hubs_technicmove_motors_start_motors_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_start_motors_at_speed.svg')} alt="block_hubs_technicmove_motors_start_motors_at_speed.svg" />
Démarre les moteurs d’entraînement Technic Move à la vitesse sélectionnée.

### `Arrêter les moteurs` {#block_hubs_technicmove_motors_stop_motors}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_stop_motors.svg')} alt="block_hubs_technicmove_motors_stop_motors.svg" />
Arrête les moteurs d’entraînement Technic Move.

### `Frein` {#block_hubs_technicmove_motors_brake}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_brake.svg')} alt="block_hubs_technicmove_motors_brake.svg" />
Applique le comportement de freinage aux moteurs Technic Move.

- Options de frein : `éteint`, `activé`

### `Définir la crémaillère de direction à` {#block_hubs_technicmove_motors_set_steering_rack_to}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_set_steering_rack_to.svg')} alt="block_hubs_technicmove_motors_set_steering_rack_to.svg" />
Définit la position/valeur cible de la crémaillère de direction.

### `Calibrer la crémaillère de direction` {#block_hubs_technicmove_motors_calibrate_steering_rack}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_calibrate_steering_rack.svg')} alt="block_hubs_technicmove_motors_calibrate_steering_rack.svg" />
Calibre la crémaillère de direction Technic Move à l’aide de l’algorithme interne du hub et de la détection automatique de la plage de direction.

- Remarque : l’axe du moteur doit être mécaniquement limité (par exemple par un mécanisme de crémaillère de direction).