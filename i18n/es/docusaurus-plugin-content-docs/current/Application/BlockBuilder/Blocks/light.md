---
id: Light
title: Luz
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Luz

Esta página documenta los bloques de la categoría Luz, utilizados para controlar LEDs y salidas de iluminación en hubs compatibles.

## Bloques de luz comunes

### `Establecer color del LED` {#block_hubs_all_light_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_led_color.svg')} alt="block_hubs_all_light_set_led_color.svg" />

Establece el color del LED del hub usando opciones predefinidas.

- Tipo: bloque de comando
- Uso típico: mostrar estado (listo, en ejecución, advertencia, error)

### `Encender luz a` {#block_hubs_all_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_to.svg')} alt="block_hubs_all_light_light_turn_to.svg" />

Ajusta la luz seleccionada a un nivel de brillo o valor objetivo.

- Tipo: bloque de comando
- Uso típico: brillo de faros, intensidad de estado

### `Apagar luz` {#block_hubs_all_light_light_turn_off}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_off.svg')} alt="block_hubs_all_light_light_turn_off.svg" />

Apaga la salida de luz seleccionada.

- Tipo: bloque de comando
- Uso típico: apagado del sistema, ahorro de batería

### `Technic Move encender luz a` {#block_hubs_technicmove_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_light_light_turn_to.svg')} alt="block_hubs_technicmove_light_light_turn_to.svg" />

Variante de `Encender luz a` para el hub Technic Move.

- Tipo: bloque de comando
- Uso típico: ajustar el nivel de luz del hub Move

## Bloques de luz BuWizz 3

### `BuWizz 3 establecer color LED` {#block_hubs_buwizz3_light_port_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color.svg')} alt="block_hubs_buwizz3_light_port_set_led_color.svg" />

Establece el color del LED en el puerto seleccionado del BuWizz 3.

- Tipo: bloque de comando

### `BuWizz 3 establecer color LED (texto)` {#block_hubs_buwizz3_light_port_set_led_color_string}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_string.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_string.svg" />

Establece el color del LED usando un valor de texto.

- Tipo: bloque de comando
- Uso típico: colores dinámicos desde variables

### `BuWizz 3 establecer color LED (RGB)` {#block_hubs_buwizz3_light_port_set_led_color_rgb}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_rgb.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_rgb.svg" />

Establece el color del LED usando valores RGB.

- Tipo: bloque de comando
- Uso típico: control completo de color y gradientes

## Notas de uso

- Las capacidades de iluminación dependen del hub y del dispositivo conectado.
- Si no hay efecto visible, verifica el tipo de dispositivo y el puerto.
- Los sensores de luz están documentados en la página **Sensores**.