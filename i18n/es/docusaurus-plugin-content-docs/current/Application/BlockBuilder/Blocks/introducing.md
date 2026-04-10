---
id: BlocksIntroducing
title: Introducción a los bloques
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Introducción a los bloques

MOCPilot utiliza un sistema de programación visual basado en bloques, similar a Scratch.  
Cada bloque tiene un propósito específico, y las combinaciones válidas definen el flujo de control y de datos dentro de un script.  
Se basa en lógica de arrastrar y soltar y patrones de interacción tipo Scratch para ofrecer una forma cómoda y familiar de crear programas.

:::warning Aviso de compatibilidad
Este es un sistema de bloques diferente, con su propio conjunto de bloques y comportamiento.  
Los programas de MOCPilot no son compatibles con proyectos de Scratch: no se pueden importar entre sí.
:::

## Formas de bloques y significado

### Bloques de inicio

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />
  <img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />
</div>

Inician un script cuando ocurre un evento. Solo permiten bloques debajo.

---

### Bloques de pila

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
</div>

Bloques principales que ejecutan acciones.

---

### Bloques en C

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />
</div>

Bloques de control con forma de “C” que contienen otros bloques (bucles/condiciones).

---

### Bloques reporteros

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />
</div>

Devuelven valores como números o texto.

---

### Bloques booleanos

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />
</div>

Devuelven `true` o `false`, usados normalmente en condiciones.

---

### Bloques de cierre

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />
</div>

Finalizan scripts y no permiten bloques debajo.

---

### Pila de bloques

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks_stack.svg')} alt="blocks_stack.svg" />
</div>

Una pila de bloques es una secuencia conectada que se ejecuta de arriba hacia abajo como un único flujo.  
Normalmente comienza con un bloque de evento.

---

## Modelo de ejecución

- Un script normalmente comienza con un bloque de evento.
- Los bloques conectados se ejecutan de arriba hacia abajo.
- Varios scripts pueden ejecutarse en paralelo.
- Los mensajes (broadcast) se usan para sincronizar scripts.
- Una pila es una secuencia de bloques conectados.

## Datos y valores

- Los bloques reporteros pueden anidarse dentro de otros bloques.
- Las variables almacenan valores reutilizables.
- Las listas almacenan colecciones ordenadas.

## Eventos y tiempo

- Los eventos reaccionan a entradas, sensores o mensajes.
- Algunos eventos pueden dispararse con mucha frecuencia.
- Usa filtros o pequeñas esperas para evitar ruido.

## Hub, puertos y controladores

- Los bloques del hub operan sobre el hub y sus puertos.
- Algunos bloques solo están disponibles para dispositivos específicos.
- Dashboard y Gamepad proporcionan entrada y control en tiempo real.

## Flujo recomendado

1. Empieza con un evento y un script simple.
2. Verifica motores y sensores desde el inicio.
3. Extrae lógica repetida en scripts auxiliares.
4. Añade protecciones antes de ajustar el comportamiento final.

## Errores comunes

- Falta de bloque de inicio → el script no se ejecuta.
- Puerto o hub incorrecto → sin efecto visible.
- Mezclar tipos de datos → lógica inválida.
- Eventos frecuentes sin control → comportamiento inestable.

## Estructura de documentación

Usa las categorías en este orden:

- Luz
- Motores
- Sensores
- Eventos
- Control
- Operadores
- Variables
- Listas
- Mis bloques
- Controladores del panel
- Gamepad