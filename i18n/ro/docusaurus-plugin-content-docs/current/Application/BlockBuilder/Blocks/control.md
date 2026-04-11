---
id: Control
title: Control
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Control

Blocurile de control gestionează fluxul de execuție: așteptare, bucle, ramificare și oprirea scripturilor.

## Blocuri de așteptare

### `Așteaptă` {#block_control_wait_for}

<img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />

Pune în pauză scriptul curent pentru un timp specificat.

### `Așteaptă până când` {#block_control_wait_until}

<img src={useBaseUrl('/img/blocks/block_control_wait_until.svg')} alt="block_control_wait_until.svg" />

Pune în pauză scriptul curent până când o condiție devine adevărată.

## Blocuri de buclă

### `Repetă` {#block_control_repeat_for}

<img src={useBaseUrl('/img/blocks/block_control_repeat_for.svg')} alt="block_control_repeat_for.svg" />

Execută blocurile incluse de un număr fix de ori.

### `Repetă până când` {#block_control_repeat_until}

<img src={useBaseUrl('/img/blocks/block_control_repeat_until.svg')} alt="block_control_repeat_until.svg" />

Execută blocurile incluse în mod repetat până când o condiție devine adevărată.

### `La nesfârșit` {#block_control_repeat_forever}

<img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />

Execută blocurile incluse continuu până când programul sau scriptul este oprit.

## Blocuri de ramificare

### `Dacă` {#block_control_if}

<img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />

Execută blocurile incluse doar atunci când condiția este adevărată.

### `Dacă / Altfel` {#block_control_if_else}

<img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />

Execută o ramură atunci când condiția este adevărată, altfel execută ramura alternativă.

### `Fă asta și asta` {#block_control_do_this_and_this}

<img src={useBaseUrl('/img/blocks/block_control_do_this_and_this.svg')} alt="block_control_do_this_and_this.svg" />

Execută două stive de blocuri în secvență ca parte a unei singure operații de control.

## Blocuri de oprire

### `Oprește` {#block_control_stop}

<img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />

Oprește execuția scriptului (domeniul depinde de opțiunea selectată).

- Opțiuni de oprire: `toate`, `acest stack`, `și ieși din program`

### `Oprește celelalte stack-uri` {#block_control_stop_other_stacks}

<img src={useBaseUrl('/img/blocks/block_control_stop_other_stacks.svg')} alt="block_control_stop_other_stacks.svg" />

Oprește toate celelalte stack-uri care rulează, permițând în același timp stack-ului curent să continue.

## Blocuri utilitare hub/control

### `Setează conectarea` {#block_hubs_control_set_connect}

<img src={useBaseUrl('/img/blocks/block_hubs_control_set_connect.svg')} alt="block_hubs_control_set_connect.svg" />

Controlează starea conexiunii hub-ului din logica fluxului de control.

- Opțiuni acțiune: `conectare`, `deconectare`

### `Este conectat` {#block_hubs_all_sensors_is_connected}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_connected.svg')} alt="block_hubs_all_sensors_is_connected.svg" />

Returnează dacă hub-ul este conectat în prezent.

- Tip: bloc reporter boolean

### `BuWizz 2 setează modul de putere` {#block_hubs_buwizz_sensors_set_power_mode}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_set_power_mode.svg')} alt="block_hubs_buwizz_sensors_set_power_mode.svg" />

Setează modul de putere al hub-ului BuWizz 2.

- Opțiuni mod: `Slow`, `Normal`, `Fast`, `Ludicrous`

### `BuWizz 2 obține modul de putere` {#block_hubs_buwizz_sensors_get_power_mode}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_get_power_mode.svg')} alt="block_hubs_buwizz_sensors_get_power_mode.svg" />

Returnează modul de putere activ în prezent pentru BuWizz 2.

- Opțiuni format ieșire: `text`, `index`

### `MouldKing setează canalul de control` {#block_hubs_mouldking_control_set_control_channel}

<img src={useBaseUrl('/img/blocks/block_hubs_mouldking_control_set_control_channel.svg')} alt="block_hubs_mouldking_control_set_control_channel.svg" />

Setează canalul de control activ pentru hub/controller MouldKing suportat.

- Opțiuni canal: `A`, `B`, `C`

### `MouldKing obține canalul de control` {#block_hubs_mouldking_control_get_control_channel}

<img src={useBaseUrl('/img/blocks/block_hubs_mouldking_control_get_control_channel.svg')} alt="block_hubs_mouldking_control_get_control_channel.svg" />

Returnează canalul de control activ curent pentru hub/controller MouldKing suportat.

- Opțiuni format ieșire: `text`, `index`