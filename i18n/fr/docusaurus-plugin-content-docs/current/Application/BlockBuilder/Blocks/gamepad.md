---
id: Gamepad
title: Manette
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Manette
Les blocs de manette sont utilisés pour réagir aux entrées du contrôleur et lire les valeurs actuelles de la manette.

## Blocs d’événement

### `Quand le bouton de la manette est` {#block_gamepad_event_when_button_is}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is.svg')} alt="block_gamepad_event_when_button_is.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is_sony.svg')} alt="block_gamepad_event_when_button_is_sony.svg" />
</div>

Se déclenche lorsque le bouton sélectionné correspond à l’état configuré.

- Type : bloc événement
- Boutons (Xbox) : `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Boutons (Sony) : `croix`, `cercle`, `carré`, `triangle`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- États : `appuyé`, `relâché`

### `Quand le D-pad de la manette est` {#block_gamepad_event_when_dpad_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_dpad_is.svg')} alt="block_gamepad_event_when_dpad_is.svg" />

Se déclenche lorsque la direction/état du D-pad correspond à la condition sélectionnée.

- Type : bloc événement
- Directions : `haut`, `bas`, `gauche`, `droite`
- États : `appuyé`, `relâché`

### `Quand le joystick de la manette est` {#block_gamepad_event_when_thumbstick_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_thumbstick_is.svg')} alt="block_gamepad_event_when_thumbstick_is.svg" />

Se déclenche lorsque la condition du joystick correspond aux options sélectionnées.

Selon les options actuelles, ce bloc prend en charge :

- Sélection du stick : `gauche` / `droite`
- Direction/état : `haut`, `bas`, `gauche`, `droite`, `déplacé`, `relâché`

- Type : bloc événement
- Utilisation typique : réagir au mouvement directionnel ou au relâchement

## Blocs de valeur

### `Valeur du bouton de la manette (booléen)` {#block_gamepad_button_value_boolean}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean.svg')} alt="block_gamepad_button_value_boolean.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean_sony.svg')} alt="block_gamepad_button_value_boolean_sony.svg" />
</div>

Retourne l’état actuel du bouton sélectionné.

- Type : bloc valeur
- Sortie : `true`/`false`
- Boutons (Xbox) : `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Boutons (Sony) : `croix`, `cercle`, `carré`, `triangle`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- États : `appuyé`, `relâché`

### `Valeur du D-pad de la manette (booléen)` {#block_gamepad_dpad_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_gamepad_dpad_button_value_boolean.svg')} alt="block_gamepad_dpad_button_value_boolean.svg" />

Retourne si la direction sélectionnée du D-pad est active.

- Type : bloc valeur
- Sortie : `true`/`false`
- Directions : `haut`, `bas`, `gauche`, `droite`
- États : `appuyé`, `relâché`

### `Valeur du joystick de la manette (float)` {#block_gamepad_thumbstick_value_float}

<img src={useBaseUrl('/img/blocks/block_gamepad_thumbstick_value_float.svg')} alt="block_gamepad_thumbstick_value_float.svg" />

Retourne la valeur numérique de l’axe du joystick.

- Type : bloc valeur
- Sortie : numérique (float)
- Plage par défaut : `-1` à `1`
- Plage optionnelle : `-100` à `100`
- Sticks : `gauche`, `droite`
- Axes : `axe x` / `axe y`

### `Valeur de pression du trigger de la manette (float)` {#block_gamepad_trigger_pressure_value_float}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float.svg')} alt="block_gamepad_trigger_pressure_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float_sony.svg')} alt="block_gamepad_trigger_pressure_value_float_sony.svg" />
</div>

Retourne la valeur de pression du trigger sélectionné.

- Type : bloc valeur
- Sortie : numérique (float)
- Plage par défaut : `-1` à `1`
- Plage optionnelle : `-100` à `100`
- Triggers (Xbox) : `LT`, `RT`
- Triggers (Sony) : `L2`, `R2`

## Notes d’utilisation

- Utilisez les blocs événement pour réagir immédiatement aux entrées.
- Utilisez les blocs valeur pour un polling continu.
- Pour un contrôle fluide, appliquez une zone morte et une mise à l’échelle.
- Combinez avec des blocs broadcast pour séparer la logique d’entrée et d’action.
- Dans les paramètres de la manette, la disposition peut être Xbox ou Sony.