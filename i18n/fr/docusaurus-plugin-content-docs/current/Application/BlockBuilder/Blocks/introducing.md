---
id: BlocksIntroducing
title: Introduction aux blocs
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Introduction aux blocs

MOCPilot utilise un système de programmation visuelle par blocs qui ressemble à Scratch.
Chaque bloc a un rôle spécifique, et des combinaisons valides définissent le flux de contrôle et le flux de données dans un script.
Il utilise une logique de glisser-déposer et des interactions de type Scratch pour offrir une manière pratique et familière de créer des programmes.

:::warning Avis de compatibilité
Il s’agit d’un système de blocs différent avec son propre ensemble de blocs et son propre comportement.
Les programmes MOCPilot ne sont pas compatibles avec les projets Scratch : les programmes MOCPilot ne peuvent pas être importés dans Scratch, et les programmes Scratch ne peuvent pas être importés dans MOCPilot.
:::

## Formes des blocs et signification

### Blocs chapeau

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />
  <img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />
</div>

Démarrent un script lorsqu’un événement spécifique se produit. Les blocs ne peuvent être attachés qu’en dessous.

---

### Blocs pile

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
</div>

Blocs de commande principaux qui exécutent des actions.

---

### Blocs en C

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />
</div>

Blocs de contrôle en forme de C qui contiennent des piles de blocs imbriqués (boucles/conditions).

---

### Blocs reporter

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />
</div>

Renvoient des valeurs comme des nombres ou du texte.

---

### Blocs booléens

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />
</div>

Renvoient uniquement `true` ou `false`, généralement utilisés dans les conditions.

---

### Blocs de fin

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />
</div>

Terminent les scripts et ne permettent pas d’ajouter de blocs en dessous.

---

### Pile de blocs

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks_stack.svg')} alt="blocks_stack.svg" />
</div>

Une pile de blocs est une séquence de blocs connectés qui s’exécute comme un seul flux de script de haut en bas. :contentReference[oaicite:0]{index=0}  
Les piles commencent généralement par un bloc événement, puis exécutent les blocs attachés dans l’ordre.

---

## Modèle d’exécution des scripts

- Un script commence généralement par un bloc événement.
- Les blocs connectés s’exécutent de haut en bas.
- Plusieurs scripts peuvent s’exécuter en parallèle.
- Les blocs de message/diffusion sont utilisés pour synchroniser les scripts.
- Une pile de blocs est une séquence de blocs connectés entre eux.

## Données et valeurs

- Les blocs reporter peuvent être imbriqués dans des entrées de commande/condition.
- Les variables stockent des valeurs réutilisables entre les blocs et les scripts.
- Les listes stockent des collections ordonnées pour l’historique, les files d’attente et les recherches.

## Événements et timing

- Les blocs événement réagissent aux entrées utilisateur, à l’état du hub, aux capteurs ou aux messages.
- Les événements basés sur le temps ou les capteurs peuvent se déclencher fréquemment.
- Utilisez des seuils, des filtres ou de courtes pauses pour réduire les déclenchements répétitifs.

## Hub, ports et contrôleurs

- Les blocs hub ciblent le contexte du hub et des ports.
- Certains blocs sont disponibles uniquement pour des familles de hubs/appareils spécifiques.
- Les blocs de tableau de bord et de manette fournissent des entrées en temps réel et le contrôle de l’interface.

## Flux de travail recommandé

1. Commencez avec un bloc événement et un script minimal.
2. Vérifiez tôt les directions et plages des moteurs/capteurs.
3. Extrayez la logique répétée avec des messages et des scripts auxiliaires.
4. Ajoutez des sécurités (limites, arrêts, valeurs de secours) avant l’ajustement final.

## Pièges courants

- Absence de bloc événement → le script ne démarre jamais.
- Mauvaise sélection du hub/port → aucun effet visible.
- Mélange de types de valeurs (texte/nombre/booléen) → logique invalide.
- Événements trop fréquents sans filtrage → comportement instable.

## Structure de la documentation dans cette section

Utilisez les pages de catégorie dans cet ordre :

- Lumière
- Moteurs
- Capteurs
- Événements
- Contrôle
- Opérateurs
- Variables
- Listes
- Mes blocs
- Contrôleurs du tableau de bord
- Manette