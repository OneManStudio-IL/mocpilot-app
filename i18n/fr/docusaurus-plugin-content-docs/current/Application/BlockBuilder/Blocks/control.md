---
id: Control
title: Contrôle
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Contrôle

Les blocs de contrôle gèrent le flux d’exécution : attente, boucles, conditions et arrêt des scripts.

## Blocs d’attente

### `Attendre` {#block_control_wait_for}

<img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />

Met en pause le script courant pendant une durée spécifiée.

### `Attendre jusqu’à` {#block_control_wait_until}

<img src={useBaseUrl('/img/blocks/block_control_wait_until.svg')} alt="block_control_wait_until.svg" />

Met en pause le script courant jusqu’à ce qu’une condition devienne vraie.

## Blocs de boucle

### `Répéter` {#block_control_repeat_for}

<img src={useBaseUrl('/img/blocks/block_control_repeat_for.svg')} alt="block_control_repeat_for.svg" />

Exécute les blocs imbriqués un nombre fixe de fois.

### `Répéter jusqu’à` {#block_control_repeat_until}

<img src={useBaseUrl('/img/blocks/block_control_repeat_until.svg')} alt="block_control_repeat_until.svg" />

Exécute les blocs imbriqués de manière répétée jusqu’à ce qu’une condition devienne vraie.

### `Toujours` {#block_control_repeat_forever}

<img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />

Exécute les blocs imbriqués en continu jusqu’à l’arrêt du programme ou du script.

## Blocs conditionnels

### `Si` {#block_control_if}

<img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />

Exécute les blocs imbriqués uniquement si la condition est vraie.

### `Si / Sinon` {#block_control_if_else}

<img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />

Exécute une branche si la condition est vraie, sinon exécute la branche alternative.

### `Faire ceci et cela` {#block_control_do_this_and_this}

<img src={useBaseUrl('/img/blocks/block_control_do_this_and_this.svg')} alt="block_control_do_this_and_this.svg" />

Exécute deux piles de blocs en séquence dans une seule opération de contrôle.

## Blocs d’arrêt

### `Arrêter` {#block_control_stop}

<img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />

Arrête l’exécution du script (la portée dépend de l’option choisie).

- Options d’arrêt : `tout`, `cette pile`, `et quitter le programme`

### `Arrêter les autres piles` {#block_control_stop_other_stacks}

<img src={useBaseUrl('/img/blocks/block_control_stop_other_stacks.svg')} alt="block_control_stop_other_stacks.svg" />

Arrête toutes les autres piles en cours d’exécution tout en laissant la pile actuelle continuer.

## Blocs utilitaires hub/contrôle

### `Définir connexion` {#block_hubs_control_set_connect}

<img src={useBaseUrl('/img/blocks/block_hubs_control_set_connect.svg')} alt="block_hubs_control_set_connect.svg" />

Contrôle l’état de connexion du hub depuis la logique de contrôle.

- Options d’action : `connecter`, `déconnecter`

### `Est connecté` {#block_hubs_all_sensors_is_connected}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_connected.svg')} alt="block_hubs_all_sensors_is_connected.svg" />

Retourne si le hub est actuellement connecté.

- Type : bloc reporter booléen

### `BuWizz 2 définir mode de puissance` {#block_hubs_buwizz_sensors_set_power_mode}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_set_power_mode.svg')} alt="block_hubs_buwizz_sensors_set_power_mode.svg" />

Définit le mode de puissance du hub BuWizz 2.

- Options de mode : `Slow`, `Normal`, `Fast`, `Ludicrous`

### `BuWizz 2 obtenir mode de puissance` {#block_hubs_buwizz_sensors_get_power_mode}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_get_power_mode.svg')} alt="block_hubs_buwizz_sensors_get_power_mode.svg" />

Retourne le mode de puissance actuellement actif du BuWizz 2.

- Options de sortie : `texte`, `index`

### `MouldKing définir canal de contrôle` {#block_hubs_mouldking_control_set_control_channel}

<img src={useBaseUrl('/img/blocks/block_hubs_mouldking_control_set_control_channel.svg')} alt="block_hubs_mouldking_control_set_control_channel.svg" />

Définit le canal de contrôle actif pour le hub/contrôleur MouldKing pris en charge.

- Options de canal : `A`, `B`, `C`

### `MouldKing obtenir canal de contrôle` {#block_hubs_mouldking_control_get_control_channel}

<img src={useBaseUrl('/img/blocks/block_hubs_mouldking_control_get_control_channel.svg')} alt="block_hubs_mouldking_control_get_control_channel.svg" />

Retourne le canal de contrôle actif pour le hub/contrôleur MouldKing pris en charge.

- Options de sortie : `texte`, `index`