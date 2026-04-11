---
id: Control
title: Control
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Control

Los bloques de control gestionan el flujo de ejecución: esperas, bucles, condiciones y detención de scripts.

## Bloques de espera

### `Esperar` {#block_control_wait_for}

<img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />

Pausa el script actual durante un tiempo especificado.

### `Esperar hasta` {#block_control_wait_until}

<img src={useBaseUrl('/img/blocks/block_control_wait_until.svg')} alt="block_control_wait_until.svg" />

Pausa el script actual hasta que una condición se cumpla.

## Bloques de bucle

### `Repetir` {#block_control_repeat_for}

<img src={useBaseUrl('/img/blocks/block_control_repeat_for.svg')} alt="block_control_repeat_for.svg" />

Ejecuta los bloques internos un número fijo de veces.

### `Repetir hasta` {#block_control_repeat_until}

<img src={useBaseUrl('/img/blocks/block_control_repeat_until.svg')} alt="block_control_repeat_until.svg" />

Ejecuta los bloques internos repetidamente hasta que una condición se cumpla.

### `Por siempre` {#block_control_repeat_forever}

<img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />

Ejecuta los bloques internos continuamente hasta que el programa o script se detenga.

## Bloques de condición

### `Si` {#block_control_if}

<img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />

Ejecuta los bloques internos solo cuando la condición es verdadera.

### `Si / Si no` {#block_control_if_else}

<img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />

Ejecuta una rama cuando la condición es verdadera; de lo contrario, ejecuta la rama alternativa.

### `Haz esto y esto` {#block_control_do_this_and_this}

<img src={useBaseUrl('/img/blocks/block_control_do_this_and_this.svg')} alt="block_control_do_this_and_this.svg" />

Ejecuta dos secuencias de bloques como parte de una única operación de control.

## Bloques de detención

### `Detener` {#block_control_stop}

<img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />

Detiene la ejecución del script (el alcance depende de la opción seleccionada).

- Opciones: `todo`, `este bloque`, `y salir del programa`

### `Detener otros bloques` {#block_control_stop_other_stacks}

<img src={useBaseUrl('/img/blocks/block_control_stop_other_stacks.svg')} alt="block_control_stop_other_stacks.svg" />

Detiene todos los demás bloques en ejecución mientras permite que el bloque actual continúe.

## Bloques de utilidad (hub/control)

### `Establecer conexión` {#block_hubs_control_set_connect}

<img src={useBaseUrl('/img/blocks/block_hubs_control_set_connect.svg')} alt="block_hubs_control_set_connect.svg" />

Controla el estado de conexión del hub desde la lógica de control.

- Opciones: `conectar`, `desconectar`

### `Está conectado` {#block_hubs_all_sensors_is_connected}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_connected.svg')} alt="block_hubs_all_sensors_is_connected.svg" />

Devuelve si el hub está actualmente conectado.

- Tipo: bloque booleano (reporter)

### `BuWizz 2 establecer modo de potencia` {#block_hubs_buwizz_sensors_set_power_mode}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_set_power_mode.svg')} alt="block_hubs_buwizz_sensors_set_power_mode.svg" />

Establece el modo de potencia del hub BuWizz 2.

- Modos: `Slow`, `Normal`, `Fast`, `Ludicrous`

### `BuWizz 2 obtener modo de potencia` {#block_hubs_buwizz_sensors_get_power_mode}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_get_power_mode.svg')} alt="block_hubs_buwizz_sensors_get_power_mode.svg" />

Devuelve el modo de potencia actual del BuWizz 2.

- Formato de salida: `texto`, `índice`

### `MouldKing establecer canal de control` {#block_hubs_mouldking_control_set_control_channel}

<img src={useBaseUrl('/img/blocks/block_hubs_mouldking_control_set_control_channel.svg')} alt="block_hubs_mouldking_control_set_control_channel.svg" />

Establece el canal de control activo para el hub/controlador MouldKing.

- Canales: `A`, `B`, `C`

### `MouldKing obtener canal de control` {#block_hubs_mouldking_control_get_control_channel}

<img src={useBaseUrl('/img/blocks/block_hubs_mouldking_control_get_control_channel.svg')} alt="block_hubs_mouldking_control_get_control_channel.svg" />

Devuelve el canal de control activo actual.

- Formato de salida: `texto`, `índice`