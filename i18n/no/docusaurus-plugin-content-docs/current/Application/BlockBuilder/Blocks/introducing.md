---
id: BlocksIntroducing
title: Introduksjon til blokker
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Introduksjon til blokker

MOCPilot bruker et visuelt blokkbasert programmeringssystem som ligner på Scratch i utseende og bruk.
Hver blokk har en spesifikk rolle, og gyldige kombinasjoner definerer kontrollflyt og dataflyt i et skript.
Systemet bruker dra-og-slipp-logikk og Scratch-lignende interaksjonsmønstre for å gi en enkel og kjent måte å bygge programmer på.

:::warning Kompatibilitetsmerknad
Dette er et annet blokksystem med egne blokker og egen oppførsel.  
MOCPilot-programmer er ikke kompatible med Scratch-prosjekter: MOCPilot-programmer kan ikke importeres til Scratch, og Scratch-programmer kan ikke importeres til MOCPilot.
:::

## Blokkformer og betydning

### Startblokker (Hat Blocks)

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />
  <img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />
</div>

Starter et skript når en spesifikk hendelse oppstår. Blokker kan kun festes under.

---

### Stabelblokker

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
</div>

Hovedblokker som utfører handlinger.

---

### C-blokker

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />
</div>

C-formede kontrollblokker som inneholder nestede blokkstabler (løkker/betingelser).

---

### Rapportørblokker

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />
</div>

Returnerer verdier som tall eller tekst.

---

### Boolske blokker

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />
</div>

Returnerer kun `true` eller `false`, brukes vanligvis i betingelser.

---

### Sluttblokker

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />
</div>

Avslutter skript og tillater ikke blokker under.

---

### Blokkstabel

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks_stack.svg')} alt="blocks_stack.svg" />
</div>

En blokkstabel er en sekvens av sammenkoblede blokker som kjøres som én flyt fra topp til bunn.  
Stabler starter vanligvis med en hendelsesblokk og kjører deretter tilkoblede blokker i rekkefølge.

---

## Utførelsesmodell for skript

- Et skript starter vanligvis med en hendelsesblokk.
- Tilkoblede blokker kjøres fra topp til bunn.
- Flere skript kan kjøre parallelt.
- Meldings-/kringkastingsblokker brukes for å synkronisere skript.
- En blokkstabel er en sekvens av sammenkoblede blokker.

## Data og verdier

- Rapportørblokker kan brukes inne i kommando- og betingelsesfelt.
- Variabler lagrer gjenbrukbare verdier på tvers av blokker og skript.
- Lister lagrer ordnede samlinger for historikk, køer og oppslag.

## Hendelser og timing

- Hendelsesblokker reagerer på brukerinput, hub-status, sensorer eller meldinger.
- Tids- og sensorbaserte hendelser kan trigges ofte.
- Bruk terskler, filtrering eller korte pauser for å redusere støy fra gjentatte triggere.

## Hub, porter og kontrollere

- Hub-blokker opererer på hub- og portkontekst.
- Noen blokker er kun tilgjengelige for spesifikke hub-typer/enheter.
- Dashboard- og gamepad-blokker gir runtime-input og UI-kontroll.

## Anbefalt arbeidsflyt

1. Start med én hendelsesblokk og et minimalt skript.
2. Verifiser motor-/sensorretning og verdiområder tidlig.
3. Gjenbruk logikk med meldinger og hjelpeskript.
4. Legg til sikkerhetsmekanismer (grenser, stopp, fallback-verdier) før finjustering.

## Vanlige fallgruver

- Manglende startblokk gjør at skriptet aldri starter.
- Feil hub-/portvalg gir ingen synlig effekt.
- Blanding av verdityper (tekst/tall/boolsk) kan gi ugyldig logikk.
- Høyfrekvente hendelser uten filtrering kan overbelaste systemet.

## Dokumentasjonsstruktur i denne seksjonen

Bruk kategorisider i denne rekkefølgen:

- Lys
- Motorer
- Sensorer
- Hendelser
- Kontroll
- Operatorer
- Variabler
- Lister
- Mine blokker
- Dashboard-kontrollere
- Gamepad