---
id: BlocksIntroducing
title: Úvod do blokov
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Úvod do blokov

MOCPilot používa vizuálny systém blokového programovania, ktorý je podobný Scratch.
Každý blok má konkrétnu úlohu a správne kombinácie definujú tok riadenia a tok dát v skripte.
Používa logiku drag-and-drop a interakčné vzory podobné Scratch, aby poskytol pohodlný a známy spôsob tvorby programov.

:::warning Upozornenie na kompatibilitu
Toto je odlišný blokový systém s vlastnou sadou blokov a správaním.
Programy MOCPilot nie sú kompatibilné so Scratch projektmi: programy MOCPilot nie je možné importovať do Scratch a Scratch programy nie je možné importovať do MOCPilot.
:::

## Tvary blokov a ich význam

### Štartovacie bloky

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />
  <img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />
</div>

Spúšťajú skript pri vzniku konkrétnej udalosti. Bloky sa môžu pripájať iba pod ne.

---

### Príkazové bloky

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
</div>

Základné bloky vykonávajúce akcie.

---

### C-bloky (riadiace bloky)

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />
</div>

Bloky v tvare „C“, ktoré obsahujú vnorené bloky (cykly/podmienky).

---

### Reporter bloky

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />
</div>

Vraciajú hodnoty, napríklad čísla alebo text.

---

### Boolovské bloky

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />
</div>

Vraciajú iba `true` alebo `false`, typicky používané v podmienkach.

---

### Ukončovacie bloky

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />
</div>

Ukončujú skripty a neumožňujú pripojenie ďalších blokov pod ne.

---

### Zásobník blokov

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks_stack.svg')} alt="blocks_stack.svg" />
</div>

Zásobník blokov je sekvencia prepojených blokov, ktorá sa vykonáva ako jeden tok skriptu zhora nadol.
Zvyčajne začína blokom udalosti a následne vykonáva pripojené bloky v poradí.

---

## Model vykonávania skriptu

- Skript zvyčajne začína blokom udalosti.  
- Prepojené bloky sa vykonávajú zhora nadol.  
- Viacero skriptov môže bežať paralelne.  
- Bloky správ/vysielania sa používajú na synchronizáciu skriptov.  
- Zásobník blokov je sekvencia blokov prepojených spolu.  

## Dáta a hodnoty

- Reporter bloky je možné vkladať do vstupov príkazov alebo podmienok.  
- Premenné ukladajú opakovane použiteľné hodnoty medzi blokmi a skriptmi.  
- Zoznamy ukladajú usporiadané kolekcie pre históriu, fronty a vyhľadávanie.  

## Udalosti a časovanie

- Bloky udalostí reagujú na vstup používateľa, stav hubu, senzory alebo správy.  
- Udalosti založené na časovači alebo senzoroch sa môžu spúšťať často.  
- Používaj prahy, filtrovanie alebo krátke čakania na obmedzenie nadmerného spúšťania.  

## Hub, porty a ovládače

- Bloky hubu pracujú s kontextom hubu a portov.  
- Niektoré bloky sú dostupné iba pre konkrétne zariadenia alebo rodiny hubov.  
- Bloky dashboardu a gamepadu poskytujú vstup počas behu a ovládanie UI.  

## Odporúčaný postup

1. Začni s jedným blokom udalosti a jednoduchým skriptom.  
2. Over smer motorov a rozsahy senzorov na začiatku.  
3. Vyčleň opakovanú logiku pomocou správ a pomocných skriptov.  
4. Pridaj bezpečnostné opatrenia (limity, zastavenia, náhradné hodnoty).  

## Časté chyby

- Chýbajúci blok udalosti znamená, že skript sa nikdy nespustí.  
- Nesprávny výber hubu/portu spôsobí, že sa nič nestane.  
- Miešanie typov hodnôt (text/číslo/boolean) môže viesť k nesprávnej logike.  
- Udalosti s vysokou frekvenciou bez filtrovania môžu spôsobiť nestabilné správanie.  

## Štruktúra dokumentácie v tejto sekcii

Používaj kategórie v tomto poradí:

- Svetlo  
- Motory  
- Senzory  
- Udalosti  
- Ovládanie  
- Operátory  
- Premenné  
- Zoznamy  
- Moje bloky  
- Ovládací panel  
- Gamepad  