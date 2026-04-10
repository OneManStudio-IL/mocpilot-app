---
id: BlocksIntroducing
title: Úvod do Bloků
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Úvod do Bloků

MOCPilot používá vizuální systém blokového programování, který vzhledem i chováním připomíná Scratch.
Každý blok má konkrétní roli a platné kombinace určují řízení toku i toku dat ve skriptu.
Využívá logiku přetahování a interakční vzory podobné Scratchi, aby bylo vytváření programů pohodlné a známé.

:::warning Upozornění na kompatibilitu
Jde o odlišný blokový systém s vlastní sadou bloků a vlastním chováním.
Programy MOCPilot nejsou kompatibilní s projekty Scratch: programy MOCPilot nelze importovat do Scratch a programy Scratch nelze importovat do MOCPilot.
:::

## Tvary bloků a jejich význam

### Startovní bloky (Hat)

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />
  <img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />
</div>

Spustí skript při výskytu konkrétní události. Další bloky lze připojit pouze pod něj.

---

### Příkazové bloky (Stack)

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
</div>

Hlavní příkazové bloky, které provádějí akce.

---

### C bloky

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />
</div>

Řídicí bloky tvaru C, které obsahují vnořené blokové sekvence (cykly/podmínky).

---

### Reportovací bloky (Reporter)

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />
</div>

Vrací hodnoty, například čísla nebo text.

---

### Booleovské bloky

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />
</div>

Vrací pouze `true` nebo `false`, obvykle se používají v podmínkách.

---

### Ukončovací bloky (Cap)

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />
</div>

Ukončí skript a neumožní připojení bloků pod sebe.

---

### Bloková sekvence

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks_stack.svg')} alt="blocks_stack.svg" />
</div>

Bloková sekvence je řada propojených bloků, která běží jako jeden tok skriptu shora dolů.
Sekvence obvykle začíná událostním blokem a následně provádí připojené bloky v daném pořadí.

---

## Model běhu skriptu

- Skript obvykle začíná událostním blokem.
- Propojené stack bloky se spouštějí shora dolů.
- Více skriptů může běžet paralelně.
- Pro synchronizaci skriptů se používají bloky zpráv/vysílání.
- Bloková sekvence je sada bloků propojených dohromady.

## Data a hodnoty

- Reportovací bloky lze vnořovat do vstupů příkazů/podmínek.
- Proměnné ukládají znovu použitelné hodnoty napříč bloky a skripty.
- Seznamy ukládají uspořádané kolekce pro historii, fronty a vyhledávací data.

## Události a časování

- Událostní bloky reagují na vstup uživatele, stav hubu, senzory nebo zprávy.
- Události založené na časovači a senzorech se mohou spouštět často.
- Pro omezení rušivých opakovaných spuštění používejte prahy, filtrování nebo krátké čekání.

## Hub, porty a ovladače

- Hub bloky pracují v kontextu hubu a portu.
- Některé bloky jsou dostupné jen pro konkrétní rodiny hubů/zařízení.
- Bloky dashboardu a gamepadu poskytují vstupy za běhu a ovládání UI.

## Doporučený postup

1. Začněte jedním událostním blokem a minimálním skriptem.
2. Včas ověřte směr a rozsahy motorů/senzorů.
3. Opakovanou logiku oddělte pomocí zpráv a pomocných skriptů.
4. Před finálním laděním přidejte ochrany (limity, zastavení, záložní hodnoty).

## Časté chyby

- Chybějící vstupní událostní blok znamená, že se skript nikdy nespustí.
- Špatně zvolený hub/port způsobí, že neuvidíte žádný efekt.
- Míchání typů hodnot (text/číslo/boolean) může vést k neplatné logice.
- Události s vysokou frekvencí bez filtrování mohou přetížit chování programu.

## Struktura dokumentace v této sekci

Používejte stránky kategorií v tomto pořadí:

- Světla
- Motory
- Senzory
- Události
- Ovládání
- Operátory
- Proměnné
- Seznamy
- Moje bloky
- Ovladače dashboardu
- Gamepad
