---
id: Sensors
title: Capteurs
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Capteurs

Les blocs de capteurs lisent l’état du hub/appareil et fournissent des données pour les conditions, les événements et la logique de contrôle.

## Capteurs du hub et de l’appareil

### `Hub battery level` {#block_hubs_all_sensors_battery_level}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_battery_level.svg')} alt="block_hubs_all_sensors_battery_level.svg" />
Retourne le niveau actuel de la batterie du hub.

### `Device % battery` {#block_sensors_device_battery_level}
<img src={useBaseUrl('/img/blocks/block_sensors_device_battery_level.svg')} alt="block_sensors_device_battery_level.svg" />
Retourne le niveau actuel de la batterie du téléphone/de la tablette exécutant MOCPilot (en pourcentage).

### `Board temperature` {#block_hubs_all_sensors_board_temp}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_board_temp.svg')} alt="block_hubs_all_sensors_board_temp.svg" />
Retourne la température de la carte du hub.

- Disponible uniquement pour `BuWizz 2` et `BuWizz 3`.

### `Button pressed` {#block_hubs_all_sensors_button_pressed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_button_pressed.svg?v=20260409-2258')} alt="block_hubs_all_sensors_button_pressed.svg" />
Vérifie si un bouton sélectionné du hub correspond à l’état sélectionné.

- Options d’état : `pressé`, `relâché`
- Option de bouton typique : `centre` (dépend du hub)
- Remarque : les options de bouton disponibles peuvent varier selon le modèle de hub (différents hubs peuvent exposer différents ensembles de boutons).

### `Type d’appareil` {#block_hubs_all_motors_port_device_type}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_device_type.svg')} alt="block_hubs_all_motors_port_device_type.svg" />
Retourne le type d’appareil connecté pour le port sélectionné.

- Type : bloc reporter
- Utilisation typique : détecter quel appareil est connecté avant d’exécuter une logique spécifique à l’appareil

### `Device accelerometer` {#block_sensors_device_accelerometer_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_accelerometer_sensor_data.svg')} alt="block_sensors_device_accelerometer_sensor_data.svg" />
Retourne les valeurs brutes de l’accéléromètre à partir des capteurs de l’appareil.

- Options d’axe : `x`, `y`, `z`

### `Device acceleration` {#block_sensors_device_acceleration_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_acceleration_sensor_data.svg')} alt="block_sensors_device_acceleration_sensor_data.svg" />
Retourne les données d’accélération à partir des capteurs de l’appareil.

- Options d’axe : `x`, `y`, `z`

## Capteurs d’orientation et d’inclinaison

### `Tilt` {#block_hubs_all_sensors_tilt}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_tilt.svg')} alt="block_hubs_all_sensors_tilt.svg" />
Retourne l’angle d’inclinaison pour l’axe sélectionné.

- Options d’axe : `tangage`, `roulis`, `lacet`
- Remarque : `lacet` est disponible uniquement sur les hubs qui fournissent des données de lacet.

### `Get orientation` {#block_hubs_sensors_get_orientation}
<img src={useBaseUrl('/img/blocks/block_hubs_sensors_get_orientation.svg')} alt="block_hubs_sensors_get_orientation.svg" />
Retourne l’état d’orientation actuel du hub.

- Options de format de sortie : `texte`, `index`
- Valeurs d’orientation : `Avant`, `Haut`, `Droite`, `Arrière`, `Bas`, `Gauche`

### `Is orientation up` {#block_hubs_all_sensors_is_orientation_up}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_orientation_up.svg')} alt="block_hubs_all_sensors_is_orientation_up.svg" />
Vérifie si l’orientation du hub correspond à l’orientation « vers le haut » sélectionnée.

- Options d’orientation : `Avant`, `Haut`, `Droite`, `Arrière`, `Bas`, `Gauche`

### `Set tilt orientation` {#block_hubs_sensors_set_tilt_orientation}
<img src={useBaseUrl('/img/blocks/block_hubs_sensors_set_tilt_orientation.svg')} alt="block_hubs_sensors_set_tilt_orientation.svg" />
Configure la référence d’orientation utilisée par les blocs liés à l’inclinaison et à l’orientation.

- Options d’orientation : `Avant`, `Haut`, `Droite`, `Arrière`, `Bas`, `Gauche`

## Minuteur et capteurs de mouvement de l’appareil

### `Timer` {#block_sensors_timer_value_float}
<img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
Retourne la valeur du minuteur en secondes.

### `Reset timer` {#block_sensors_timer_reset}
<img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
Réinitialise le minuteur à zéro.

## Blocs de capteurs par port

### `Technic distance sensor` {#block_hubs_all_sensors_port_technic_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_distance.svg')} alt="block_hubs_all_sensors_port_technic_sensor_distance.svg" />
Retourne les valeurs de distance d’un capteur de distance Technic.

- Options d’unité : `mm`, `cm`, `pouces`, `%`

### `Technic when distance is` {#block_hubs_all_sensors_port_technic_sensor_when_distance_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg" />
Déclenche/vérifie une condition de distance pour un capteur de distance Technic.

- Options de comparaison : `plus proche que`, `plus loin que`, `exactement à`
- Options d’unité : `mm`, `cm`, `pouces`, `%`

### `Technic color sensor value` {#block_hubs_all_sensors_port_technic_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_color.svg" />
Retourne la valeur de la couleur détectée par un capteur de distance Technic.

- Options de sortie : `valeur`, `chaîne`

### `Technic when color is` {#block_hubs_all_sensors_port_technic_sensor_when_color_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_color_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_color_is.svg" />
Déclenche/vérifie lorsque la couleur détectée correspond à la couleur sélectionnée.

### `Technic reflected light` {#block_hubs_all_sensors_port_technic_sensor_reflected_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_reflected_light.svg" />
Retourne l’intensité de la lumière réfléchie.

### `Technic when reflected light is` {#block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg" />
Déclenche/vérifie une condition de seuil de lumière réfléchie.

- Options de comparaison : `<`, `=`, `>`

### `Technic ambient light` {#block_hubs_all_sensors_port_technic_sensor_ambient_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_ambient_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_ambient_light.svg" />
Retourne l’intensité de la lumière ambiante.

### `Technic when ambient light is` {#block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is.svg" />
Déclenche/vérifie une condition de seuil de lumière ambiante.

- Options de comparaison : `<`, `=`, `>`

### `Technic raw color` {#block_hubs_all_sensors_port_technic_sensor_raw_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_raw_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_raw_color.svg" />
Retourne la valeur brute du canal de couleur à partir du capteur Technic.

- Options de canal : `rouge`, `vert`, `bleu`

### `BOOST sensor distance` {#block_hubs_all_sensors_port_boost_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_distance.svg" />
Retourne la distance mesurée par un capteur de distance BOOST.

- Options d’unité : `%`, `cm`, `pouces`

### `BOOST when distance is` {#block_hubs_all_sensors_port_boost_sensor_when_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_distance.svg" />
Déclenche/vérifie une condition de distance pour un capteur de distance BOOST.

- Options de comparaison : `plus proche que`, `plus loin que`, `exactement à`
- Options d’unité : `%`, `cm`, `pouces`

### `BOOST sensor color` {#block_hubs_all_sensors_port_boost_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_color.svg" />
Retourne la couleur détectée par un capteur BOOST.

- Options de sortie : `valeur`, `chaîne`

### `BOOST is color` {#block_hubs_all_sensors_port_boost_sensor_is_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_is_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_is_color.svg" />
Vérifie si le capteur BOOST détecte actuellement la couleur sélectionnée.

### `BOOST reflected light` {#block_hubs_all_sensors_port_boost_sensor_reflected_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_boost_sensor_reflected_light.svg" />
Retourne la valeur de la lumière réfléchie du capteur BOOST.

### `BOOST when reflected light is` {#block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg" />
Déclenche/vérifie une condition de seuil de lumière réfléchie pour le capteur BOOST.

- Options de comparaison : `<`, `=`, `>`

### `Technic Move set power mode` {#block_hubs_technicmove_sensors_set_power_mode}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_sensors_set_power_mode.svg')} alt="block_hubs_technicmove_sensors_set_power_mode.svg" />
Définit le mode de puissance Technic Move.

- Options de mode : `normal`, `boost`

### `WeDo 2 distance` {#block_hubs_all_sensors_port_wedo2_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_sensor_distance.svg')} alt="block_hubs_all_sensors_port_wedo2_sensor_distance.svg" />
Retourne la distance mesurée par un capteur de distance WeDo 2.

- Options d’unité : `%`, `cm`, `pouces`

### `WeDo 2 tilt` {#block_hubs_all_sensors_port_wedo2_tilt}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_tilt.svg')} alt="block_hubs_all_sensors_port_wedo2_tilt.svg" />
Retourne la valeur d’inclinaison d’un capteur d’inclinaison WeDo 2.

- Options d’axe : `tangage`, `roulis`
