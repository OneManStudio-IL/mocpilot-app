---
id: Lists
title: Listes
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Listes

Les listes stockent des collections ordonnées de valeurs et sont manipulées par des blocs dédiés de type Reporter et Stack.

## Blocs de modification de liste

### `Ajouter une valeur à la liste` {#block_lists_add}

<img src={useBaseUrl('/img/blocks/block_lists_add.svg')} alt="block_lists_add.svg" />

Ajoute une valeur à la fin de la liste sélectionnée.

### `Insérer à` {#block_lists_insert_at}

<img src={useBaseUrl('/img/blocks/block_lists_insert_at.svg')} alt="block_lists_insert_at.svg" />

Insère une valeur à l’index sélectionné dans la liste.

### `Remplacer à` {#block_lists_replace_at}

<img src={useBaseUrl('/img/blocks/block_lists_replace_at.svg')} alt="block_lists_replace_at.svg" />

Remplace l’élément à l’index sélectionné par une nouvelle valeur.

### `Supprimer` {#block_lists_delete}

<img src={useBaseUrl('/img/blocks/block_lists_delete.svg')} alt="block_lists_delete.svg" />

Supprime l’élément à l’index sélectionné (ou selon le mode de suppression choisi).

### `Tout effacer` {#block_lists_clear_all}

<img src={useBaseUrl('/img/blocks/block_lists_clear_all.svg')} alt="block_lists_clear_all.svg" />

Supprime tous les éléments de la liste sélectionnée.

## Blocs de valeur/vérification de liste

### `Élément à` {#block_lists_item_at}

<img src={useBaseUrl('/img/blocks/block_lists_item_at.svg')} alt="block_lists_item_at.svg" />

Retourne la valeur à l’index sélectionné.

### `Index de la valeur` {#block_lists_index_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_index_of_value.svg')} alt="block_lists_index_of_value.svg" />

Retourne l’index de la première valeur correspondante dans la liste.

### `Contient la valeur` {#block_lists_contains_value}

<img src={useBaseUrl('/img/blocks/block_lists_contains_value.svg')} alt="block_lists_contains_value.svg" />

Retourne si la liste contient une valeur spécifiée.

### `Taille de la liste` {#block_lists_size_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_size_of_value.svg')} alt="block_lists_size_of_value.svg" />

Retourne le nombre d’éléments dans la liste sélectionnée.

## Bloc reporter de liste

<img src={useBaseUrl('/img/blocks/list.svg')} alt="list.svg" />

Retourne la valeur actuelle de la liste sélectionnée.

- Type : bloc reporter
- Exemple de format de sortie : `[item1,item2,item3]`
- Utilisation typique : inspecter le contenu de la liste ou passer la liste à des blocs compatibles

## Notes d’utilisation

- Utilisez les listes pour les historiques, points de passage, échantillons de capteurs et préréglages.
- Vérifiez la taille de la liste avant d’accéder à un index pour éviter les erreurs.
- Combinez `contient` et `index de` pour la logique de recherche.