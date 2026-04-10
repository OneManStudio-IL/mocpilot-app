---
id: BlocksIntroducing
title: Introduktion Til Blokke
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Introduktion Til Blokke

MOCPilot bruger et visuelt blokprogrammeringssystem, der ligner Scratch i både udseende og brug.
Hver blok har en specifik rolle, og gyldige kombinationer definerer kontrolflow og dataflow i et script.
Det bruger træk-og-slip-logik og Scratch-lignende interaktionsmønstre for at give en praktisk og velkendt måde at bygge programmer på.

:::warning Kompatibilitetsmeddelelse
Dette er et andet bloksystem med sit eget bloksæt og sin egen adfærd.
MOCPilot-programmer er ikke kompatible med Scratch-projekter: MOCPilot-programmer kan ikke importeres til Scratch, og Scratch-programmer kan ikke importeres til MOCPilot.
:::

## Blokformer og betydning

### Hat-blokke

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />
  <img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />
</div>

Starter et script, når en bestemt hændelse opstår. Blokke kan kun sættes under.

---

### Stak-blokke

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
</div>

Primære kommandoblokke, der udfører handlinger.

---

### C-blokke

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />
</div>

C-formede kontrolblokke, der indeholder indlejrede blokstakke (løkker/betingelser).

---

### Reporter-blokke

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />
</div>

Returnerer værdier som tal eller tekst.

---

### Booleske blokke

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />
</div>

Returnerer kun `true` eller `false`, typisk brugt i betingelser.

---

### Afslutningsblokke

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />
</div>

Afslutter scripts og tillader ikke blokke under.

---

### Blokstak

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks_stack.svg')} alt="blocks_stack.svg" />
</div>

En blokstak er en sekvens af forbundne blokke, der kører som ét samlet scriptflow fra top til bund.
Stakke starter normalt med en hændelsesblok og udfører derefter de tilknyttede blokke i rækkefølge.

---

## Script-udførelsesmodel

- Et script starter normalt fra en hændelsesblok.
- Forbundne stak-blokke kører fra top til bund.
- Flere scripts kan køre parallelt.
- Besked-/broadcast-blokke bruges til at synkronisere scripts.
- En blokstak er en sekvens af blokke, der er forbundet med hinanden.

## Data og værdier

- Reporter-blokke kan indlejres i input til kommandoer/betingelser.
- Variabler gemmer genbrugelige værdier på tværs af blokke og scripts.
- Lister gemmer ordnede samlinger til historik, køer og opslag.

## Hændelser og timing

- Hændelsesblokke reagerer på brugerinput, hub-tilstand, sensorer eller beskeder.
- Timer- og sensorbaserede hændelser kan udløses ofte.
- Brug tærskler, filtrering eller korte ventetider for at reducere støjende gentagne triggere.

## Hub, porte og controllere

- Hub-blokke målretter hub- og portkontekst.
- Nogle blokke er kun tilgængelige for specifikke hub-familier/enheder.
- Dashboard- og gamepad-blokke giver input under kørsel og UI-kontrol.

## Anbefalet arbejdsgang

1. Start med én hændelsesblok og et minimalt script.
2. Bekræft tidligt motor-/sensorretning og intervaller.
3. Udtræk gentaget logik med beskeder og hjælpescripts.
4. Tilføj sikkerhedsforanstaltninger (grænser, stop, fallback-værdier) før endelig finjustering.

## Almindelige faldgruber

- Manglende hændelses-startblok betyder, at scriptet aldrig starter.
- Forkert valg af hub/port giver ingen synlig effekt.
- Blandede værdi-typer (tekst/tal/boolean) kan give ugyldig logik.
- Højfrekvente hændelser uden filtrering kan overbelaste adfærden.

## Dokumentationsstruktur i denne sektion

Brug kategorisider i denne rækkefølge:

- Lys
- Motorer
- Sensorer
- Hændelser
- Kontrol
- Operatorer
- Variabler
- Lister
- Mine Blokke
- Dashboard-controllere
- Gamepad
