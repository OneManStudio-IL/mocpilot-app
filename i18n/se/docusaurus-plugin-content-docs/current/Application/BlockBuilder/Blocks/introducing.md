---
id: BlocksIntroducing
title: Introduktion till block
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Introduktion till block

MOCPilot använder ett visuellt blockprogrammeringssystem som ser ut och känns likt Scratch.
Varje block har en specifik roll, och giltiga kombinationer definierar kontrollflöde och dataflöde genom ett skript.
Det använder dra-och-släpp-logik och Scratch-liknande interaktionsmönster för att ge ett bekvämt och välbekant sätt att bygga program.

:::warning Kompatibilitetsmeddelande
Detta är ett annat blocksystem med sin egen uppsättning block och sitt eget beteende.
MOCPilot-program är inte kompatibla med Scratch-projekt: MOCPilot-program kan inte importeras till Scratch, och Scratch-program kan inte importeras till MOCPilot.
:::

## Blockformer och betydelse

### Hattblock

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />
  <img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />
</div>

Startar ett skript när en specifik händelse inträffar. Block kan bara fästas under.

---

### Stackblock

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
</div>

Huvudsakliga kommandoblock som utför åtgärder.

---

### C-block

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />
</div>

C-formade kontrollblock som innehåller nästlade blockstaplar (loopar/villkor).

---

### Reporterblock

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />
</div>

Returnerar värden som tal eller strängar.

---

### Booleska block

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />
</div>

Returnerar endast `true` eller `false`, används vanligtvis i villkor.

---

### Slutblock

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />
</div>

Avslutar skript och tillåter inte block under.

---

### Blockstapel

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks_stack.svg')} alt="blocks_stack.svg" />
</div>

En blockstapel är en sekvens av sammanlänkade block som körs som ett skriptflöde uppifrån och ned.
Staplar börjar vanligtvis med ett händelseblock och kör sedan de anslutna blocken i ordning.

---

## Modell för skriptexekvering

- Ett skript startar vanligtvis från ett händelseblock.
- Anslutna stackblock körs uppifrån och ned.
- Flera skript kan köras parallellt.
- Meddelande-/broadcast-block används för att synkronisera skript.
- En blockstapel är en sekvens av block som är kopplade till varandra.

## Data och värden

- Reporterblock kan nästlas inuti kommando-/villkorsinmatningar.
- Variabler lagrar återanvändbara värden mellan block och skript.
- Listor lagrar ordnade samlingar för historik, köer och uppslagsdata.

## Händelser och timing

- Händelseblock reagerar på användarinmatning, hubbtillstånd, sensorer eller meddelanden.
- Timer- och sensorbaserade händelser kan utlösas ofta.
- Använd tröskelvärden, filtrering eller korta väntetider för att minska brusiga upprepade utlösningar.

## Hubbar, portar och kontroller

- Hubbblock riktar sig mot hubb- och portkontext.
- Vissa block är endast tillgängliga för specifika hubbfamiljer/enheter.
- Dashboard- och gamepad-block ger körtidsinmatning och gränssnittsstyrning.

## Rekommenderat arbetsflöde

1. Börja med ett händelseblock och ett minimalt skript.
2. Verifiera motor-/sensorriktning och intervall tidigt.
3. Bryt ut upprepad logik med meddelanden och hjälpskript.
4. Lägg till skydd (gränser, stopp, fallback-värden) före slutlig justering.

## Vanliga fallgropar

- Om händelsens startblock saknas startar skriptet aldrig.
- Fel hubb-/portval ger ingen synlig effekt.
- Att blanda värdetyper (text/tal/boolesk) kan ge ogiltig logik.
- Högfrekventa händelser utan filtrering kan överbelasta beteendet.

## Dokumentationsstruktur i den här sektionen

Använd kategorisidorna i denna ordning:

- Ljus
- Motorer
- Sensorer
- Händelser
- Kontroll
- Operatorer
- Variabler
- Listor
- Mina block
- Dashboard-kontroller
- Gamepad
