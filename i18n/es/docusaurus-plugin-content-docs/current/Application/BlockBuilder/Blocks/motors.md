---
id: Motors
title: Motores
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Motores

Los bloques de motores se utilizan para iniciar, detener, posicionar y ajustar motores conectados a los puertos del hub.

## Bloques principales de control de motores

### `Iniciar motor` {#block_hubs_all_motors_port_start_motor}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor.svg')} alt="block_hubs_all_motors_port_start_motor.svg" />
Inicia el motor seleccionado.

- Opciones de dirección: horario / antihorario

### `Detener motor` {#block_hubs_all_motors_port_stop_motor}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_stop_motor.svg')} alt="block_hubs_all_motors_port_stop_motor.svg" />
Detiene el motor seleccionado.

### `Ejecutar durante` {#block_hubs_all_motors_port_run_for}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for.svg')} alt="block_hubs_all_motors_port_run_for.svg" />
Ejecuta el motor durante el tiempo/ángulo/rotación especificados según la configuración del bloque.

- Opciones de dirección: horario / antihorario
- Opciones de unidad: `rotaciones`, `grados`, `segundos`
- Nota: esta función requiere un motor que soporte control basado en encoder.

### `Iniciar motor a velocidad` {#block_hubs_all_motors_port_start_motor_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor_at_speed.svg')} alt="block_hubs_all_motors_port_start_motor_at_speed.svg" />
Inicia el motor con una velocidad explícita.

### `Ejecutar durante a velocidad` {#block_hubs_all_motors_port_run_for_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for_at_speed.svg')} alt="block_hubs_all_motors_port_run_for_at_speed.svg" />
Ejecuta el motor durante una duración/cantidad objetivo con velocidad definida.

- Opciones de unidad: `rotaciones`, `grados`, `segundos`
- Nota: requiere motor con encoder.

### `Establecer velocidad del motor` {#block_hubs_all_motors_port_set_motor_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_speed.svg')} alt="block_hubs_all_motors_port_set_motor_speed.svg" />
Define la velocidad usada por otros bloques de motor.

## Bloques de posición y movimiento

### `Ir a posición` {#block_hubs_all_motors_port_go_to_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_position.svg')} alt="block_hubs_all_motors_port_go_to_position.svg" />
Mueve el motor a una posición absoluta objetivo.

- Opciones de trayectoria: `camino más corto`, `horario`, `antihorario`
- Nota: requiere motor con encoder.

### `Ir a posición relativa` {#block_hubs_all_motors_port_go_to_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_relative_position.svg')} alt="block_hubs_all_motors_port_go_to_relative_position.svg" />
Mueve el motor por un desplazamiento relativo.

- Nota: requiere motor con encoder.

### `BuWizz 3 ir a posición relativa` {#block_hubs_buwizz3_motors_port_go_to_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_motors_port_go_to_relative_position.svg')} alt="block_hubs_buwizz3_motors_port_go_to_relative_position.svg" />
Variante de posicionamiento relativo para BuWizz 3.

- Nota: requiere motor con encoder.

### `Establecer posición relativa` {#block_hubs_all_motors_port_set_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_relative_position.svg')} alt="block_hubs_all_motors_port_set_relative_position.svg" />
Establece la referencia de posición relativa del motor.

- Nota: requiere motor con encoder.

### `Calibrar cremallera de dirección` {#block_hubs_all_motors_port_calibrate_steering_rack}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_calibrate_steering_rack.svg')} alt="block_hubs_all_motors_port_calibrate_steering_rack.svg" />
Calibra la posición neutra/referencia de la dirección.

- Requisito: el motor debe soportar medición de ángulo (encoder interno).
- Requisito mecánico: el movimiento debe estar limitado físicamente.
- Funcionamiento: el bloque recorre el rango de movimiento y calcula los datos de calibración.
- Salida: escribe los resultados en variables pasadas al bloque.

## Bloques de ajuste y seguridad

### `Establecer comportamiento al detener` {#block_hubs_all_motors_port_set_motor_to_at_stop}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_to_at_stop.svg')} alt="block_hubs_all_motors_port_set_motor_to_at_stop.svg" />
Define el modo de parada del motor.

- Opciones: `frenar`, `mantener posición`, `libre`
- Nota: requiere motor con encoder.

### `Configurar detección de bloqueo` {#block_hubs_all_motors_port_set_motors_stall_detection}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motors_stall_detection.svg')} alt="block_hubs_all_motors_port_set_motors_stall_detection.svg" />
Activa o desactiva la detección de bloqueo.

- Nota: disponible solo en el hub MINDSTORMS Robot Inventor.

### `Establecer aceleración` {#block_hubs_all_motors_port_set_acceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_acceleration.svg')} alt="block_hubs_all_motors_port_set_acceleration.svg" />
Define el perfil de aceleración.

- Opciones: `por defecto`, `rápido`, `equilibrado`, `suave`, `lento`, `muy lento`
- Nota: requiere motor con encoder.

### `Establecer desaceleración` {#block_hubs_all_motors_port_set_deceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_deceleration.svg')} alt="block_hubs_all_motors_port_set_deceleration.svg" />
Define el perfil de desaceleración.

- Opciones: `por defecto`, `rápido`, `equilibrado`, `suave`, `lento`, `muy lento`
- Nota: requiere motor con encoder.

## Bloques reporteros de motor

### `Posición` {#block_hubs_all_motors_port_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_position.svg')} alt="block_hubs_all_motors_port_position.svg" />
Devuelve la posición actual del motor.

### `Posición relativa` {#block_hubs_all_motors_port_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_relative_position.svg')} alt="block_hubs_all_motors_port_relative_position.svg" />
Devuelve la posición relativa actual.

### `Velocidad` {#block_hubs_all_motors_port_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_speed.svg')} alt="block_hubs_all_motors_port_speed.svg" />
Devuelve la velocidad actual del motor.

### `Potencia` {#block_hubs_all_motors_port_power}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_power.svg')} alt="block_hubs_all_motors_port_power.svg" />
Devuelve la potencia actual del motor.

- Nota: disponible solo en el hub MINDSTORMS Robot Inventor.

## Bloques de motor Technic Move

### `Iniciar motores a velocidad` {#block_hubs_technicmove_motors_start_motors_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_start_motors_at_speed.svg')} alt="block_hubs_technicmove_motors_start_motors_at_speed.svg" />
Inicia los motores de tracción Technic Move a la velocidad seleccionada.

### `Detener motores` {#block_hubs_technicmove_motors_stop_motors}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_stop_motors.svg')} alt="block_hubs_technicmove_motors_stop_motors.svg" />
Detiene los motores Technic Move.

### `Frenar` {#block_hubs_technicmove_motors_brake}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_brake.svg')} alt="block_hubs_technicmove_motors_brake.svg" />
Aplica comportamiento de frenado.

- Opciones: `apagado`, `activado`

### `Establecer dirección a` {#block_hubs_technicmove_motors_set_steering_rack_to}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_set_steering_rack_to.svg')} alt="block_hubs_technicmove_motors_set_steering_rack_to.svg" />
Establece la posición de la dirección.

### `Calibrar dirección` {#block_hubs_technicmove_motors_calibrate_steering_rack}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_calibrate_steering_rack.svg')} alt="block_hubs_technicmove_motors_calibrate_steering_rack.svg" />
Calibra la dirección automáticamente.

- Nota: requiere límites mecánicos.