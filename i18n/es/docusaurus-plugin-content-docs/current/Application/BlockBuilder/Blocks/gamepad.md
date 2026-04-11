---
id: Gamepad
title: Gamepad
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Gamepad
Los bloques de Gamepad se utilizan para reaccionar a la entrada del controlador y leer los valores actuales del estado del gamepad.

## Bloques de evento

### `Cuando el botón del gamepad esté` {#block_gamepad_event_when_button_is}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is.svg')} alt="block_gamepad_event_when_button_is.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is_sony.svg')} alt="block_gamepad_event_when_button_is_sony.svg" />
</div>

Se activa cuando el botón seleccionado coincide con el estado configurado.

- Tipo: bloque de evento
- Opciones de botón (Xbox): `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Opciones de botón (Sony): `cruz`, `circulo`, `cuadrado`, `triángulo`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- Estados: `presionado`, `soltado`

### `Cuando el D-pad del gamepad esté` {#block_gamepad_event_when_dpad_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_dpad_is.svg')} alt="block_gamepad_event_when_dpad_is.svg" />

Se activa cuando la dirección o estado del D-pad coincide con la condición seleccionada.

- Tipo: bloque de evento
- Direcciones: `arriba`, `abajo`, `izquierda`, `derecha`
- Estados: `presionado`, `soltado`

### `Cuando el joystick del gamepad esté` {#block_gamepad_event_when_thumbstick_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_thumbstick_is.svg')} alt="block_gamepad_event_when_thumbstick_is.svg" />

Se activa cuando la condición del joystick coincide con las opciones seleccionadas.

Este bloque soporta:

- Selección de joystick: `izquierdo` / `derecho`
- Dirección/estado: `arriba`, `abajo`, `izquierda`, `derecha`, `movido`, `soltado`

- Tipo: bloque de evento
- Uso típico: reaccionar al movimiento o liberación del joystick

## Bloques de valor

### `Valor de botón del gamepad (booleano)` {#block_gamepad_button_value_boolean}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean.svg')} alt="block_gamepad_button_value_boolean.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean_sony.svg')} alt="block_gamepad_button_value_boolean_sony.svg" />
</div>

Devuelve el estado actual del botón seleccionado.

- Tipo: bloque de valor
- Salida: `true`/`false`
- Opciones de botón (Xbox): `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Opciones de botón (Sony): `cruz`, `circulo`, `cuadrado`, `triángulo`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- Estados: `presionado`, `soltado`

### `Valor del D-pad del gamepad (booleano)` {#block_gamepad_dpad_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_gamepad_dpad_button_value_boolean.svg')} alt="block_gamepad_dpad_button_value_boolean.svg" />

Devuelve si la dirección seleccionada del D-pad está activa.

- Tipo: bloque de valor
- Salida: `true`/`false`
- Direcciones: `arriba`, `abajo`, `izquierda`, `derecha`
- Estados: `presionado`, `soltado`

### `Valor del joystick del gamepad (float)` {#block_gamepad_thumbstick_value_float}

<img src={useBaseUrl('/img/blocks/block_gamepad_thumbstick_value_float.svg')} alt="block_gamepad_thumbstick_value_float.svg" />

Devuelve el valor numérico del eje del joystick.

- Tipo: bloque de valor
- Salida: numérico (float)
- Rango por defecto: `-1` a `1`
- Rango opcional en configuración: `-100` a `100`
- Joystick: `izquierdo`, `derecho`
- Ejes: `eje x` / `eje y`

### `Valor de presión del gatillo (float)` {#block_gamepad_trigger_pressure_value_float}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float.svg')} alt="block_gamepad_trigger_pressure_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float_sony.svg')} alt="block_gamepad_trigger_pressure_value_float_sony.svg" />
</div>

Devuelve el valor de presión del gatillo seleccionado.

- Tipo: bloque de valor
- Salida: numérico (float)
- Rango por defecto: `-1` a `1`
- Rango opcional en configuración: `-100` a `100`
- Gatillos (Xbox): `LT`, `RT`
- Gatillos (Sony): `L2`, `R2`