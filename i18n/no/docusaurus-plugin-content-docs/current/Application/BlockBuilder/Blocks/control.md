---
id: Control
title: Kontroll
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Kontroll

Kontrollblokker styrer kjørelogikken: venting, løkker, forgrening og stopping av skript.

## Venteblokker

### `Vent` {#block_control_wait_for}

<img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />

Setter det nåværende skriptet på pause i en spesifisert tid.

### `Vent til` {#block_control_wait_until}

<img src={useBaseUrl('/img/blocks/block_control_wait_until.svg')} alt="block_control_wait_until.svg" />

Setter det nåværende skriptet på pause til en betingelse blir sann.

## Løkkeblokker

### `Gjenta` {#block_control_repeat_for}

<img src={useBaseUrl('/img/blocks/block_control_repeat_for.svg')} alt="block_control_repeat_for.svg" />

Kjører innebygde blokker et fast antall ganger.

### `Gjenta til` {#block_control_repeat_until}

<img src={useBaseUrl('/img/blocks/block_control_repeat_until.svg')} alt="block_control_repeat_until.svg" />

Kjører innebygde blokker gjentatte ganger til en betingelse blir sann.

### `For alltid` {#block_control_repeat_forever}

<img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />

Kjører innebygde blokker kontinuerlig til programmet eller skriptet stoppes.

## Forgreningsblokker

### `Hvis` {#block_control_if}

<img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />

Kjører innebygde blokker kun når betingelsen er sann.

### `Hvis / Ellers` {#block_control_if_else}

<img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />

Kjører én gren når betingelsen er sann, ellers kjøres den alternative grenen.

### `Gjør dette og dette` {#block_control_do_this_and_this}

<img src={useBaseUrl('/img/blocks/block_control_do_this_and_this.svg')} alt="block_control_do_this_and_this.svg" />

Kjører to blokkstabler i sekvens som en del av én kontrollflytoperasjon.

## Stoppblokker

### `Stopp` {#block_control_stop}

<img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />

Stopper kjøring av skript (omfang avhenger av valgt stoppalternativ).

- Stoppalternativer: `alle`, `denne stakken`, `og avslutt programmet`

### `Stopp andre stabler` {#block_control_stop_other_stacks}

<img src={useBaseUrl('/img/blocks/block_control_stop_other_stacks.svg')} alt="block_control_stop_other_stacks.svg" />

Stopper alle andre kjørende stabler mens den nåværende fortsetter.

## Hub-/kontrollverktøyblokker

### `Sett tilkobling` {#block_hubs_control_set_connect}

<img src={useBaseUrl('/img/blocks/block_hubs_control_set_connect.svg')} alt="block_hubs_control_set_connect.svg" />

Styrer hubens tilkoblingsstatus fra kontrollflytlogikk.

- Handlingsalternativer: `koble til`, `koble fra`

### `Er tilkoblet` {#block_hubs_all_sensors_is_connected}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_connected.svg')} alt="block_hubs_all_sensors_is_connected.svg" />

Returnerer om huben for øyeblikket er tilkoblet.

- Type: boolsk rapporteringsblokk

### `BuWizz 2 sett effektmodus` {#block_hubs_buwizz_sensors_set_power_mode}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_set_power_mode.svg')} alt="block_hubs_buwizz_sensors_set_power_mode.svg" />

Setter effektmodus for BuWizz 2-huben.

- Modusalternativer: `Sakte`, `Normal`, `Rask`, `Ludicrous`

### `BuWizz 2 hent effektmodus` {#block_hubs_buwizz_sensors_get_power_mode}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_get_power_mode.svg')} alt="block_hubs_buwizz_sensors_get_power_mode.svg" />

Returnerer gjeldende effektmodus for BuWizz 2.

- Utdataformatalternativer: `tekst`, `indeks`

### `MouldKing sett kontrollkanal` {#block_hubs_mouldking_control_set_control_channel}

<img src={useBaseUrl('/img/blocks/block_hubs_mouldking_control_set_control_channel.svg')} alt="block_hubs_mouldking_control_set_control_channel.svg" />

Setter aktiv kontrollkanal for støttet MouldKing-hub/kontroller.

- Kanalalternativer: `A`, `B`, `C`

### `MouldKing hent kontrollkanal` {#block_hubs_mouldking_control_get_control_channel}

<img src={useBaseUrl('/img/blocks/block_hubs_mouldking_control_get_control_channel.svg')} alt="block_hubs_mouldking_control_get_control_channel.svg" />

Returnerer gjeldende aktiv kontrollkanal for støttet MouldKing-hub/kontroller.

- Utdataformatalternativer: `tekst`, `indeks`