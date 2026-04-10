---
id: DashboardControllers
title: Controladores del panel
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Controladores del panel

Estos bloques se utilizan para leer la entrada del usuario desde controles en pantalla, reaccionar a acciones del usuario y actualizar el estado de la interfaz del panel.

## Bloques globales de controladores

### `Establecer color del controlador` {#block_dashboard_controller_all_set_color}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_color.svg')} alt="block_dashboard_controller_all_set_color.svg" />

Cambia el color de acento visual del controlador seleccionado.

- Tipo: bloque de comando
- Uso típico: indicar estados en tiempo de ejecución o cambiar dinámicamente el estilo del controlador según condiciones

### `Establecer interactividad del controlador` {#block_dashboard_controller_all_set_interactivity}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_interactivity.svg')} alt="block_dashboard_controller_all_set_interactivity.svg" />

Controla la interactividad del controlador seleccionado.  
Si la interactividad está desactivada, el controlador no responde al tacto.

- Tipo: bloque de comando
- Uso típico: bloquear controles temporalmente durante lógica específica o estados de seguridad
- Opciones: `activar`, `desactivar`

## Bloques de botones

### `Evento de botón` {#block_dashboard_controller_button_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_event.svg')} alt="block_dashboard_controller_button_event.svg" />

Se activa cuando el botón cambia de estado (presionado/soltado).

- Tipo: bloque de evento
- Salida: inicia el script conectado
- Estados: `presionado`, `soltado`

### `Valor de botón (booleano)` {#block_dashboard_controller_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_value_boolean.svg')} alt="block_dashboard_controller_button_value_boolean.svg" />

Devuelve el estado actual del botón.

- Tipo: bloque de valor
- Salida: `true`/`false`
- Estados: `presionado`, `soltado`

## Bloques de D-pad

### `Evento de D-pad` {#block_dashboard_controller_dpad_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_event.svg')} alt="block_dashboard_controller_dpad_event.svg" />

Se activa cuando cambia la dirección del D-pad o coincide con la dirección configurada.

- Tipo: bloque de evento
- Salida: inicia el script conectado
- Direcciones: `arriba`, `abajo`, `izquierda`, `derecha`
- Estados: `presionado`, `soltado`

### `Valor de D-pad (booleano)` {#block_dashboard_controller_dpad_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_value_boolean.svg')} alt="block_dashboard_controller_dpad_value_boolean.svg" />

Indica si una dirección del D-pad está activa.

- Tipo: bloque de valor
- Salida: `true`/`false`
- Direcciones: `arriba`, `abajo`, `izquierda`, `derecha`
- Estados: `presionado`, `soltado`

## Bloques de joystick

### `Evento de joystick` {#block_dashboard_controller_joystick_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_event.svg')} alt="block_dashboard_controller_joystick_event.svg" />

Se activa cuando cambia la posición del joystick.

- Tipo: bloque de evento
- Salida: inicia el script conectado
- Estados: `arriba`, `abajo`, `izquierda`, `derecha`, `movido`, `soltado`

### `Valor de joystick (float)` {#block_dashboard_controller_joystick_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_value_float.svg')} alt="block_dashboard_controller_joystick_value_float.svg" />

Devuelve el valor del eje del joystick.

- Tipo: bloque de valor
- Salida: numérico (float), normalmente en un rango normalizado
- Ejes: `eje x`, `eje y`

## Bloques de pedales

### `Evento de pedales` {#block_dashboard_controller_pedals_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_event.svg')} alt="block_dashboard_controller_pedals_event.svg" />

Se activa cuando cambia la entrada de los pedales.

- Tipo: bloque de evento
- Salida: inicia el script conectado
- Opciones: `cualquiera`, `freno`, `aceleración`
- Estados: `movido`, `presionado`, `soltado`

### `Valor de pedales (float)` {#block_dashboard_controller_pedals_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_float.svg')} alt="block_dashboard_controller_pedals_value_float.svg" />

Devuelve el valor analógico del pedal.

- Tipo: bloque de valor
- Salida: numérico (float)

### `Valor de pedales (booleano)` {#block_dashboard_controller_pedals_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_boolean.svg')} alt="block_dashboard_controller_pedals_value_boolean.svg" />

Devuelve el estado según si un pedal está presionado o soltado.

- Tipo: bloque de valor
- Salida: `true`/`false`
- Opciones: `freno`, `aceleración`
- Estados: `presionado`, `soltado`

## Bloques de deslizador

### `Evento de deslizador` {#block_dashboard_controller_slider_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_event.svg')} alt="block_dashboard_controller_slider_event.svg" />

Se activa cuando cambia el valor del deslizador.

- Tipo: bloque de evento
- Salida: inicia el script conectado
- Estados: `bajo`, `alto`, `movido`, `soltado`

### `Valor de deslizador (float)` {#block_dashboard_controller_slider_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_value_float.svg')} alt="block_dashboard_controller_slider_value_float.svg" />

Devuelve el valor actual del deslizador.

- Tipo: bloque de valor
- Salida: numérico (float)

## Bloques de stepper

### `Evento de stepper` {#block_dashboard_controller_stepper_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_event.svg')} alt="block_dashboard_controller_stepper_event.svg" />

Se activa cuando el valor cambia por un paso.

- Tipo: bloque de evento
- Salida: inicia el script conectado
- Opciones: `cualquiera`, `reiniciar`, `menos`, `más`
- Estados: `presionado`, `soltado`

### `Valor de stepper (float)` {#block_dashboard_controller_stepper_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_value_float.svg')} alt="block_dashboard_controller_stepper_value_float.svg" />

Devuelve el valor actual.

- Tipo: bloque de valor
- Salida: numérico (float)

## Bloques de volante

### `Evento de volante` {#block_dashboard_controller_steering_wheel_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_event.svg')} alt="block_dashboard_controller_steering_wheel_event.svg" />

Se activa cuando cambia la posición del volante.

- Tipo: bloque de evento
- Salida: inicia el script conectado
- Estados: `movido`, `presionado`, `soltado`

### `Valor de volante (float)` {#block_dashboard_controller_steering_wheel_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_value_float.svg')} alt="block_dashboard_controller_steering_wheel_value_float.svg" />

Devuelve el valor actual del volante.

- Tipo: bloque de valor
- Salida: numérico (float)

### `Valor de volante (booleano)` {#block_dashboard_controller_steeringwheel_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steeringwheel_value_boolean.svg')} alt="block_dashboard_controller_steeringwheel_value_boolean.svg" />

Devuelve el estado según si el volante está presionado o soltado.

- Tipo: bloque de valor
- Salida: `true`/`false`
- Estados: `movido`, `presionado`, `soltado`

## Bloques de interruptor

### `Evento de interruptor` {#block_dashboard_controller_switch_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_event.svg')} alt="block_dashboard_controller_switch_event.svg" />

Se activa cuando cambia el estado del interruptor.

- Tipo: bloque de evento
- Salida: inicia el script conectado
- Opciones: `encendido`, `apagado`

### `Valor de interruptor (booleano)` {#block_dashboard_controller_switch_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_value_boolean.svg')} alt="block_dashboard_controller_switch_value_boolean.svg" />

Devuelve el estado actual del interruptor.

- Tipo: bloque de valor
- Salida: `true`/`false`
- Estados: `encendido`, `apagado`

## Bloques de monitor

### `Mostrar en monitor` {#block_dashboard_controller_monitor_show}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_show.svg')} alt="block_dashboard_controller_monitor_show.svg" />

Muestra información (texto o valor) en el monitor del panel.

- Tipo: bloque de comando
- Uso típico: mostrar nivel de batería, ángulo del motor, dispositivo conectado, etc.

### `Establecer valor del monitor` {#block_dashboard_controller_monitor_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_set_value.svg')} alt="block_dashboard_controller_monitor_set_value.svg" />

Establece un valor entero para un monitor tipo velocímetro.

- Tipo: bloque de comando
- Uso típico: actualizar valores tipo velocímetro en tiempo de ejecución

### `Establecer valor de inclinación del monitor` {#block_dashboard_controller_monitor_tilt_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_tilt_set_value.svg')} alt="block_dashboard_controller_monitor_tilt_set_value.svg" />

Establece el valor de inclinación (pitch/roll).

- Tipo: bloque de comando
- Uso típico: mostrar valores de inclinación
- Ejes: `pitch`, `roll`

## Notas de uso

- Usa bloques de evento para reaccionar inmediatamente a cambios de entrada.
- Usa bloques de valor cuando necesites el estado actual en bucles o condiciones.
- Para control suave, combina valores con escalado y lógica de zona muerta.
- Usa bloques de interactividad/color para reflejar estados de la aplicación (armado, pausa, error).