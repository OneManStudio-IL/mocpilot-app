---
id: BlocksIntroducing
title: Introductie van blokken
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Introductie van blokken

MOCPilot gebruikt een visueel blokprogrammeringssysteem dat lijkt op en aanvoelt als Scratch.
Elk blok heeft een specifieke rol, en geldige combinaties bepalen de besturingsstroom en gegevensstroom binnen een script.
Het maakt gebruik van drag-and-drop logica en interactiepatronen vergelijkbaar met Scratch om een handige en vertrouwde manier te bieden om programma’s te bouwen. :contentReference[oaicite:0]{index=0}

:::warning Compatibiliteitsmelding
Dit is een ander bloksysteem met een eigen set blokken en gedrag.  
MOCPilot-programma’s zijn niet compatibel met Scratch-projecten: MOCPilot-programma’s kunnen niet in Scratch worden geïmporteerd en Scratch-programma’s kunnen niet in MOCPilot worden geïmporteerd.
:::

## Blokvormen en betekenis

### Startblokken

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />
  <img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />
</div>

Starten een script wanneer een specifieke gebeurtenis plaatsvindt. Blokken kunnen alleen eronder worden gekoppeld.

---

### Stapelblokken (Stack Blocks)

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
</div>

Hoofdopdrachtblokken die acties uitvoeren.

---

### C-blokken

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />
</div>

C-vormige besturingsblokken die geneste blokstapels bevatten (lussen/voorwaarden).

---

### Rapporteurblokken

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />
</div>

Geven waarden terug zoals getallen of tekst.

---

### Booleaanse blokken

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />
</div>

Geven alleen `true` of `false` terug, meestal gebruikt in voorwaarden.

---

### Eindblokken

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />
</div>

Beëindigen scripts en laten geen blokken eronder toe.

---

### Blokstapel

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks_stack.svg')} alt="blocks_stack.svg" />
</div>

Een blokstapel is een reeks verbonden blokken die als één script van boven naar beneden wordt uitgevoerd.  
Stapelblokken beginnen meestal met een gebeurtenisblok en voeren daarna de gekoppelde blokken in volgorde uit.

---

## Script-uitvoeringsmodel

- Een script start meestal met een gebeurtenisblok.
- Verbonden stapelblokken worden van boven naar beneden uitgevoerd.
- Meerdere scripts kunnen parallel draaien.
- Bericht-/broadcastblokken worden gebruikt om scripts te synchroniseren.
- Een blokstapel is een reeks verbonden blokken.

## Gegevens en waarden

- Rapporteurblokken kunnen genest worden in invoervelden van opdrachten/voorwaarden.
- Variabelen slaan herbruikbare waarden op tussen blokken en scripts.
- Lijsten slaan geordende verzamelingen op voor geschiedenis, wachtrijen en opzoekgegevens.

## Gebeurtenissen en timing

- Gebeurtenisblokken reageren op gebruikersinvoer, hubstatus, sensoren of berichten.
- Timer- en sensorgebaseerde gebeurtenissen kunnen vaak worden geactiveerd.
- Gebruik drempels, filtering of korte wachttijden om herhaalde triggers te verminderen.

## Hub, poorten en controllers

- Hubblokken werken binnen de context van hub en poort.
- Sommige blokken zijn alleen beschikbaar voor specifieke hubfamilies/apparaten.
- Dashboard- en gamepadblokken bieden runtime-invoer en UI-besturing.

## Aanbevolen workflow

1. Begin met één gebeurtenisblok en een minimaal script.
2. Controleer vroegtijdig motor-/sensorrichting en bereik.
3. Hergebruik logica met berichten en hulpscripts.
4. Voeg beveiligingen toe (limieten, stops, fallbackwaarden) vóór finetuning.

## Veelvoorkomende valkuilen

- Geen startblok → script wordt nooit uitgevoerd.
- Verkeerde hub-/poortselectie → geen zichtbaar effect.
- Mengen van waardetypen (tekst/getal/boolean) kan ongeldige logica veroorzaken.
- Hoogfrequente gebeurtenissen zonder filtering kunnen gedrag overbelasten.

## Documentatiestructuur in deze sectie

Gebruik categoriepagina’s in deze volgorde:

- Light
- Motors
- Sensors
- Gebeurtenissen
- Besturing
- Operators
- Variabelen
- Lijsten
- Mijn blokken
- Dashboardbedieningselementen
- Gamepad