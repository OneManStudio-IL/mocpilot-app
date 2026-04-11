---
id: Light
title: Lumière
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Lumière

Cette page décrit les blocs de la catégorie Lumière utilisés pour contrôler les LED et les sorties lumineuses sur les hubs compatibles.

## Blocs lumineux communs

### `Définir la couleur de la LED` {#block_hubs_all_light_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_led_color.svg')} alt="block_hubs_all_light_set_led_color.svg" />

Définit la couleur de la LED du hub en utilisant des options de couleur prédéfinies.

- Type : bloc de commande
- Utilisation typique : indiquer un état (prêt, en cours, avertissement, erreur)

### `Allumer la lumière à` {#block_hubs_all_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_to.svg')} alt="block_hubs_all_light_light_turn_to.svg" />

Définit la sortie lumineuse sélectionnée à une luminosité/valeur cible.

- Type : bloc de commande
- Utilisation typique : intensité des phares, indication d’état

### `Éteindre la lumière` {#block_hubs_all_light_light_turn_off}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_off.svg')} alt="block_hubs_all_light_light_turn_off.svg" />

Éteint la sortie lumineuse sélectionnée.

- Type : bloc de commande
- Utilisation typique : séquence d’arrêt, économie de batterie

### `Technic Move allumer la lumière à` {#block_hubs_technicmove_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_light_light_turn_to.svg')} alt="block_hubs_technicmove_light_light_turn_to.svg" />

Variante de `Allumer la lumière à` pour le hub Technic Move.

- Type : bloc de commande
- Utilisation typique : définir le niveau de sortie lumineuse du hub Move

## Blocs lumineux BuWizz 3

### `BuWizz 3 définir la couleur de la LED` {#block_hubs_buwizz3_light_port_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color.svg')} alt="block_hubs_buwizz3_light_port_set_led_color.svg" />

Définit la couleur de la LED sur le port BuWizz 3 sélectionné avec des options intégrées.

- Type : bloc de commande

### `BuWizz 3 définir la couleur de la LED (texte)` {#block_hubs_buwizz3_light_port_set_led_color_string}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_string.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_string.svg" />

Définit la couleur de la LED BuWizz 3 à partir d’une valeur texte.

- Type : bloc de commande
- Utilisation typique : couleurs dynamiques provenant de variables

### `BuWizz 3 définir la couleur de la LED (RGB)` {#block_hubs_buwizz3_light_port_set_led_color_rgb}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_rgb.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_rgb.svg" />

Définit la couleur de la LED BuWizz 3 à l’aide des canaux RGB.

- Type : bloc de commande
- Utilisation typique : contrôle complet des couleurs et dégradés

## Notes d’utilisation

- Les capacités d’éclairage dépendent du hub et de l’appareil connecté.
- Si une commande lumineuse n’a aucun effet visible, vérifiez le type d’appareil et le port cible.
- Les blocs de capteurs qui lisent la lumière réfléchie/ambiante sont documentés dans la page **Sensors**.