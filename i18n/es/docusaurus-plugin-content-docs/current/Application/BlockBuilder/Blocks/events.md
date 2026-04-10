---
id: Events
title: Eventos
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Eventos

La categoría **Eventos** contiene bloques que inician scripts cuando ocurre una condición.

## Eventos principales

### `Cuando el programa inicia` {#block_event_when_program_started}

<img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />

Inicia este script una vez cuando comienza el programa del perfil.

- Disparador: inicio del programa
- Uso típico: inicializar variables, estados por defecto de motores, sonidos de arranque

### `Cuando` {#block_event_when}

<img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />

Se ejecuta cuando una condición seleccionada se vuelve verdadera.

- Disparador: basado en condición
- Uso típico: lógica condicional según el estado en ejecución

### `Cuando el temporizador sea mayor que` {#block_event_when_timer_greater_than}

<img src={useBaseUrl('/img/blocks/block_event_when_timer_greater_than.svg')} alt="block_event_when_timer_greater_than.svg" />

Se ejecuta cuando el valor del temporizador supera un umbral.

- Disparador: tiempo transcurrido
- Uso típico: acciones con retraso, fases temporizadas

### `Cuando se recibe mensaje` {#block_event_when_message_recieved}

<img src={useBaseUrl('/img/blocks/block_event_when_message_recieved.svg')} alt="block_event_when_message_recieved.svg" />

Inicia un script cuando se recibe un mensaje coincidente.

- Disparador: canal de mensajes
- Uso típico: sincronizar múltiples scripts

### `Enviar mensaje` {#block_event_broadcast}

<img src={useBaseUrl('/img/blocks/block_event_broadcast.svg')} alt="block_event_broadcast.svg" />

Envía un mensaje a todos los scripts que escuchan ese mensaje.

- Disparador: envío inmediato
- Uso típico: notificar a otros scripts sin esperar

### `Enviar mensaje y esperar` {#block_event_broadcast_and_wait}

<img src={useBaseUrl('/img/blocks/block_event_broadcast_and_wait.svg')} alt="block_event_broadcast_and_wait.svg" />

Envía un mensaje y pausa este script hasta que los receptores finalicen.

- Disparador: envío inmediato + espera
- Uso típico: flujos por etapas donde el orden es importante

## Eventos del hub

### `Botón del hub presionado` {#block_hubs_all_event_button_pressed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_button_pressed.svg')} alt="block_hubs_all_event_button_pressed.svg" />

Se ejecuta cuando se presiona el botón principal del hub.

- Estados: `presionado`, `soltado`, `cambiado`
- Nota: las opciones pueden variar según el modelo de hub.

### `Conexión del hub cambiada` {#block_hubs_all_event_connection_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_connection_changed.svg')} alt="block_hubs_all_event_connection_changed.svg" />

Se ejecuta cuando cambia el estado de conexión del hub.

- Disparador: cambio de conexión
- Uso típico: reconexión y comportamiento seguro tras pérdida de conexión

### `Batería del hub cambiada` {#block_hubs_all_event_battery_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_battery_changed.svg')} alt="block_hubs_all_event_battery_changed.svg" />

Se ejecuta cuando cambia el nivel de batería del hub.

- Disparador: actualización de batería
- Uso típico: advertencias de batería baja y ahorro de energía

### `Acelerómetro del hub cambiado` {#block_hubs_all_event_accelerometer_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_accelerometer_changed.svg')} alt="block_hubs_all_event_accelerometer_changed.svg" />

Se ejecuta cuando cambian los valores de aceleración.

### `Inclinación del hub cambiada` {#block_hubs_all_event_tilt_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_changed.svg')} alt="block_hubs_all_event_tilt_changed.svg" />

Se ejecuta cuando cambia la inclinación.

- Ángulos: `cualquiera`, `inclinación`, `balanceo`, `guiñada`
- Nota: `guiñada` solo está disponible en algunos hubs.

### `Orientación del hub cambiada` {#block_hubs_all_event_tilt_orientation_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_orientation_changed.svg')} alt="block_hubs_all_event_tilt_orientation_changed.svg" />

Se ejecuta cuando cambia la orientación (por ejemplo: frente, arriba, abajo, izquierda, derecha).

## Eventos de puertos de sensores

### `Evento sensor de color Technic` {#block_hubs_all_event_port_technic_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_color.svg')} alt="block_hubs_all_event_port_technic_sensor_color.svg" />

Se ejecuta cuando el sensor de color Technic detecta un color seleccionado.


### `Evento sensor de distancia Technic` {#block_hubs_all_event_port_technic_sensor_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_distance.svg')} alt="block_hubs_all_event_port_technic_sensor_distance.svg" />

Se ejecuta cuando el sensor de distancia Technic cumple una condición.

- Comparación: `más cerca que`, `más lejos que`, `exactamente en`
- Unidades: `mm`, `cm`, `pulgadas`, `%`
- Nota: las unidades dependen del modo del sensor.

### `Evento sensor de distancia BOOST` {#block_hubs_all_event_port_boost_sensor_when_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_event_port_boost_sensor_when_distance.svg" />

Se ejecuta cuando el sensor BOOST alcanza un umbral.

- Comparación: `más cerca que`, `más lejos que`, `exactamente en`
- Unidades: `%`, `cm`, `pulgadas`

### `Evento sensor de color BOOST` {#block_hubs_all_event_port_boost_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_color.svg')} alt="block_hubs_all_event_port_boost_sensor_color.svg" />

Se ejecuta cuando el sensor BOOST detecta un color o valor.

## Notas de uso

- Los eventos pueden activarse con mucha frecuencia (especialmente sensores).
- Para estabilidad, usa umbrales o pequeños retrasos.
- Usa mensajes (broadcast) para coordinar scripts en lugar de duplicar lógica.