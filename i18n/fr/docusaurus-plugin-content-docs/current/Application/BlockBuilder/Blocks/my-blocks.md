---
id: MyBlocks
title: Mes blocs
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Mes blocs

Les blocs personnalisés permettent de définir vos propres blocs réutilisables.
Cette catégorie est conceptuellement similaire à la création d’une fonction en programmation traditionnelle : définir un comportement une fois, puis l’appeler plusieurs fois.

## Blocs principaux

### `Créer un bloc`

Crée une nouvelle définition de bloc personnalisé.

- Type : bloc de définition/configuration
- Utilisation typique : regrouper une logique répétée dans un seul bloc nommé

### `Mon bloc` (bloc d’appel)

Appelle un bloc personnalisé précédemment créé.

- Type : bloc empilable (appel de commande personnalisée)
- Utilisation typique : réutiliser la même logique à plusieurs endroits sans dupliquer les blocs

## Exemples variadiques

Ces exemples montrent des blocs personnalisés avec différentes signatures d’arguments.

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758091855.svg')} alt="block_myblock_1775758091855.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758113259.svg')} alt="block_myblock_1775758113259.svg" />
</div>

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758130609.svg')} alt="block_myblock_1775758130609.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758145135.svg')} alt="block_myblock_1775758145135.svg" />
</div>

## Exemple d’utilisation dans une pile de programme

<img src={useBaseUrl('/img/my-blocks/my-blocks-usage-example.png')} alt="my-blocks-usage-example.png" />

Cet exemple montre un appel de bloc personnalisé attaché sous `quand le programme démarre`, tandis que la pile `définir mon bloc` contient la logique moteur réutilisable.

- Flux typique : appeler un bloc personnalisé depuis des piles d’événements
- Avantage : une seule définition, plusieurs points d’appel

## Vue de l’éditeur de blocs

<img src={useBaseUrl('/img/my-blocks/my-blocks-editor-cropped.png')} alt="my-blocks-editor-cropped.png" />

L’éditeur **Créer un bloc** est utilisé pour concevoir la signature du bloc personnalisé.
Vous pouvez ajouter des libellés et des entrées (par exemple des entrées numériques/textuelles et booléennes), puis définir la logique d’implémentation dans la pile de définition du bloc.

## Pourquoi utiliser les blocs personnalisés

- Réutilisabilité : écrire une fois, utiliser plusieurs fois.
- Lisibilité : remplacer des piles longues et répétitives par un nom clair.
- Maintenabilité : mettre à jour la logique à un seul endroit.
- Structure : diviser les grands programmes en unités logiques plus petites.

## Notes d’utilisation

- Les blocs personnalisés sont au niveau du projet et destinés à être réutilisés dans le même contexte/profil.
- Privilégiez des noms descriptifs qui expliquent l’intention, et non les détails d’implémentation.