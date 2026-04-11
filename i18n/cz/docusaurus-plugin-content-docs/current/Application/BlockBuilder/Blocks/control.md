---
id: Control
title: Ovládání
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Ovládání

Bloky ovládání řídí tok vykonávání: čekání, cykly, větvení a zastavení skriptů.

## Bloky čekání

### `Čekat` {#block_control_wait_for}
<img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />
Pozastaví aktuální skript na zadaný čas.

### `Čekat dokud` {#block_control_wait_until}
<img src={useBaseUrl('/img/blocks/block_control_wait_until.svg')} alt="block_control_wait_until.svg" />
Pozastaví aktuální skript, dokud podmínka nebude pravdivá.

## Bloky cyklu

### `Opakovat` {#block_control_repeat_for}
<img src={useBaseUrl('/img/blocks/block_control_repeat_for.svg')} alt="block_control_repeat_for.svg" />
Spustí vnořené bloky pevně daný počet opakování.

### `Opakovat dokud` {#block_control_repeat_until}
<img src={useBaseUrl('/img/blocks/block_control_repeat_until.svg')} alt="block_control_repeat_until.svg" />
Opakuje vnořené bloky, dokud podmínka nebude pravdivá.

### `Stále` {#block_control_repeat_forever}
<img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />
Spouští vnořené bloky nepřetržitě, dokud není program nebo skript zastaven.

## Bloky větvení

### `Pokud` {#block_control_if}
<img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />
Spustí vnořené bloky jen tehdy, když je podmínka pravdivá.

### `Pokud / Jinak` {#block_control_if_else}
<img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />
Spustí jednu větev při pravdivé podmínce, jinak alternativní větev.

### `Udělej toto a toto` {#block_control_do_this_and_this}
<img src={useBaseUrl('/img/blocks/block_control_do_this_and_this.svg')} alt="block_control_do_this_and_this.svg" />
Spustí dvě blokové sekvence po sobě v rámci jedné řídicí operace.

## Bloky zastavení

### `Zastavit` {#block_control_stop}
<img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />
Zastaví vykonávání skriptu (rozsah závisí na zvolené možnosti zastavení).

- Možnosti zastavení: `vše`, `tento stack`, `a ukončit program`

### `Zastavit ostatní stacky` {#block_control_stop_other_stacks}
<img src={useBaseUrl('/img/blocks/block_control_stop_other_stacks.svg')} alt="block_control_stop_other_stacks.svg" />
Zastaví všechny ostatní běžící stacky, ale aktuální stack pokračuje.

## Utility bloky hubu/ovládání

### `Nastavit připojení` {#block_hubs_control_set_connect}
<img src={useBaseUrl('/img/blocks/block_hubs_control_set_connect.svg')} alt="block_hubs_control_set_connect.svg" />
Řídí stav připojení hubu z logiky skriptu.

- Možnosti akce: `připojit`, `odpojit`

### `Je připojeno` {#block_hubs_all_sensors_is_connected}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_connected.svg')} alt="block_hubs_all_sensors_is_connected.svg" />
Vrací, zda je hub aktuálně připojen.

- Typ: booleovský reportovací blok

### `BuWizz 2 nastavit režim výkonu` {#block_hubs_buwizz_sensors_set_power_mode}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_set_power_mode.svg')} alt="block_hubs_buwizz_sensors_set_power_mode.svg" />
Nastaví režim výkonu hubu BuWizz 2.

- Možnosti režimu: `Slow`, `Normal`, `Fast`, `Ludicrous`

### `BuWizz 2 získat režim výkonu` {#block_hubs_buwizz_sensors_get_power_mode}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_get_power_mode.svg')} alt="block_hubs_buwizz_sensors_get_power_mode.svg" />
Vrací aktuálně aktivní režim výkonu BuWizz 2.

- Možnosti výstupu: `text`, `index`

### `MouldKing nastavit řídicí kanál` {#block_hubs_mouldking_control_set_control_channel}
<img src={useBaseUrl('/img/blocks/block_hubs_mouldking_control_set_control_channel.svg')} alt="block_hubs_mouldking_control_set_control_channel.svg" />
Nastaví aktivní řídicí kanál pro podporovaný hub/ovladač MouldKing.

- Možnosti kanálu: `A`, `B`, `C`

### `MouldKing získat řídicí kanál` {#block_hubs_mouldking_control_get_control_channel}
<img src={useBaseUrl('/img/blocks/block_hubs_mouldking_control_get_control_channel.svg')} alt="block_hubs_mouldking_control_get_control_channel.svg" />
Vrací aktuálně aktivní řídicí kanál pro podporovaný hub/ovladač MouldKing.

- Možnosti výstupu: `text`, `index`