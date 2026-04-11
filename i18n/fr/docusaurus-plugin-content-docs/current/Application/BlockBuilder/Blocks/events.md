---
id: Events
title: Événements
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Événements

La catégorie **Événements** contient des blocs qui démarrent des scripts lorsqu’une condition se produit.

## Événements principaux

### `Quand le programme démarre` {#block_event_when_program_started}

<img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />

Démarre ce script une seule fois lorsque le programme du profil commence.

- Déclencheur : lancement du programme
- Utilisation typique : initialiser les variables, états par défaut des moteurs, sons de démarrage

### `Quand` {#block_event_when}

<img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />

Exécute lorsque la condition sélectionnée devient vraie.

- Déclencheur : basé sur une condition
- Utilisation typique : logique conditionnelle selon l’état du programme

### `Quand le minuteur est supérieur à` {#block_event_when_timer_greater_than}

<img src={useBaseUrl('/img/blocks/block_event_when_timer_greater_than.svg')} alt="block_event_when_timer_greater_than.svg" />

Exécute lorsque la valeur du minuteur dépasse un seuil.

- Déclencheur : temps écoulé
- Utilisation typique : actions différées, phases temporisées

### `Quand message reçu` {#block_event_when_message_recieved}

<img src={useBaseUrl('/img/blocks/block_event_when_message_recieved.svg')} alt="block_event_when_message_recieved.svg" />

Démarre un script lorsqu’un message diffusé correspondant est reçu.

- Déclencheur : canal de message
- Utilisation typique : synchroniser plusieurs scripts

### `Diffuser` {#block_event_broadcast}

<img src={useBaseUrl('/img/blocks/block_event_broadcast.svg')} alt="block_event_broadcast.svg" />

Envoie un message à tous les scripts en écoute.

- Déclencheur : envoi immédiat
- Utilisation typique : notifier d’autres scripts sans attendre

### `Diffuser et attendre` {#block_event_broadcast_and_wait}

<img src={useBaseUrl('/img/blocks/block_event_broadcast_and_wait.svg')} alt="block_event_broadcast_and_wait.svg" />

Envoie un message et met en pause ce script jusqu’à la fin des scripts récepteurs.

- Déclencheur : envoi + attente
- Utilisation typique : flux séquentiels où l’ordre est important

## Événements du hub

### `Bouton du hub pressé` {#block_hubs_all_event_button_pressed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_button_pressed.svg')} alt="block_hubs_all_event_button_pressed.svg" />

Exécute lorsque le bouton principal du hub est pressé.

- Options d’état : `pressé`, `relâché`, `changé`
- Remarque : les boutons disponibles peuvent varier selon le modèle de hub.

### `Connexion du hub modifiée` {#block_hubs_all_event_connection_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_connection_changed.svg')} alt="block_hubs_all_event_connection_changed.svg" />

Exécute lorsque l’état de connexion du hub change.

- Déclencheur : changement de connexion
- Utilisation typique : gestion de reconnexion et sécurité après perte de lien

### `Batterie du hub modifiée` {#block_hubs_all_event_battery_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_battery_changed.svg')} alt="block_hubs_all_event_battery_changed.svg" />

Exécute lorsque le niveau de batterie change.

- Déclencheur : mise à jour du niveau
- Utilisation typique : avertissement batterie faible, économie d’énergie

### `Accéléromètre du hub modifié` {#block_hubs_all_event_accelerometer_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_accelerometer_changed.svg')} alt="block_hubs_all_event_accelerometer_changed.svg" />

Exécute lorsque les valeurs d’accélération changent.

### `Inclinaison du hub modifiée` {#block_hubs_all_event_tilt_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_changed.svg')} alt="block_hubs_all_event_tilt_changed.svg" />

Exécute lorsque l’inclinaison change.

- Options : `toutes`, `tangage`, `roulis`, `lacet`
- Remarque : `lacet` dépend du hub.

### `Orientation du hub modifiée` {#block_hubs_all_event_tilt_orientation_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_orientation_changed.svg')} alt="block_hubs_all_event_tilt_orientation_changed.svg" />

Exécute lorsque l’orientation change (avant/haut/bas/gauche/droite).

## Événements des capteurs (ports)

### `Événement capteur de couleur Technic` {#block_hubs_all_event_port_technic_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_color.svg')} alt="block_hubs_all_event_port_technic_sensor_color.svg" />

Exécute lorsque le capteur détecte une couleur.

### `Événement capteur de distance Technic` {#block_hubs_all_event_port_technic_sensor_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_distance.svg')} alt="block_hubs_all_event_port_technic_sensor_distance.svg" />

Exécute lorsque la distance correspond à la condition.

- Options : `plus proche que`, `plus loin que`, `exactement à`
- Unités : `mm`, `cm`, `pouces`, `%`

### `Événement capteur de distance BOOST` {#block_hubs_all_event_port_boost_sensor_when_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_event_port_boost_sensor_when_distance.svg" />

Exécute lorsque la distance atteint la condition.

- Options : `plus proche que`, `plus loin que`, `exactement à`

### `Événement capteur de couleur BOOST` {#block_hubs_all_event_port_boost_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_color.svg')} alt="block_hubs_all_event_port_boost_sensor_color.svg" />

Exécute lorsque le capteur détecte une couleur.