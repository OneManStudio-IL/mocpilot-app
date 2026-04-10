---
id: Control
title: Kontrol
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Kontrol

Kontrolblokke styrer udførelsesflow: venten, løkker, forgrening og stop af scripts.

## Venteblokke

### `Vent` {#block_control_wait_for}

<img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />

Pauser det aktuelle script i en angivet tid.

### `Vent indtil` {#block_control_wait_until}

<img src={useBaseUrl('/img/blocks/block_control_wait_until.svg')} alt="block_control_wait_until.svg" />

Pauser det aktuelle script, indtil en betingelse bliver sand.

## Løkkeblokke

### `Gentag` {#block_control_repeat_for}

<img src={useBaseUrl('/img/blocks/block_control_repeat_for.svg')} alt="block_control_repeat_for.svg" />

Kører indlejrede blokke et fast antal gange.

### `Gentag indtil` {#block_control_repeat_until}

<img src={useBaseUrl('/img/blocks/block_control_repeat_until.svg')} alt="block_control_repeat_until.svg" />

Kører indlejrede blokke gentagne gange, indtil en betingelse bliver sand.

### `For evigt` {#block_control_repeat_forever}

<img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />

Kører indlejrede blokke kontinuerligt, indtil programmet eller scriptet stoppes.

## Forgreningsblokke

### `Hvis` {#block_control_if}

<img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />

Kører indlejrede blokke kun når betingelsen er sand.

### `Hvis / Ellers` {#block_control_if_else}

<img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />

Kører én gren når betingelsen er sand, ellers køres den alternative gren.

### `Gør dette og dette` {#block_control_do_this_and_this}

<img src={useBaseUrl('/img/blocks/block_control_do_this_and_this.svg')} alt="block_control_do_this_and_this.svg" />

Kører to blokstakke sekventielt som del af én kontrolflow-operation.

## Stopblokke

### `Stop` {#block_control_stop}

<img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />

Stopper script-udførelse (omfang afhænger af valgt stopmulighed).

- Stopmuligheder: `all`, `this stack`, `and exit program`

### `Stop andre stakke` {#block_control_stop_other_stacks}

<img src={useBaseUrl('/img/blocks/block_control_stop_other_stacks.svg')} alt="block_control_stop_other_stacks.svg" />

Stopper alle andre kørende stakke, mens den aktuelle stak fortsætter.

## Hub-/kontrol-hjælpeblokke

### `Sæt forbindelse` {#block_hubs_control_set_connect}

<img src={useBaseUrl('/img/blocks/block_hubs_control_set_connect.svg')} alt="block_hubs_control_set_connect.svg" />

Styrer hub-forbindelsestilstand fra kontrolflow-logik.

- Handlingsmuligheder: `forbinde`, `afbryd`

### `Er forbundet` {#block_hubs_all_sensors_is_connected}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_connected.svg')} alt="block_hubs_all_sensors_is_connected.svg" />

Returnerer om hubben aktuelt er forbundet.

- Type: boolesk reporterblok

### `BuWizz 2 sæt strømtilstand` {#block_hubs_buwizz_sensors_set_power_mode}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_set_power_mode.svg')} alt="block_hubs_buwizz_sensors_set_power_mode.svg" />

Sætter strømtilstand for BuWizz 2-hub.

- Tilstandsmuligheder: `slow`, `normal`, `fast`, `ludicrous`

### `BuWizz 2 hent strømtilstand` {#block_hubs_buwizz_sensors_get_power_mode}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_get_power_mode.svg')} alt="block_hubs_buwizz_sensors_get_power_mode.svg" />

Returnerer den aktuelt aktive BuWizz 2-strømtilstand.

- Outputformat-muligheder: tekst, indeks

### `MouldKing sæt kontrolkanal` {#block_hubs_mouldking_control_set_control_channel}

<img src={useBaseUrl('/img/blocks/block_hubs_mouldking_control_set_control_channel.svg')} alt="block_hubs_mouldking_control_set_control_channel.svg" />

Sætter aktiv kontrolkanal for understøttet MouldKing-hub/controller.

- Kanalmuligheder: `A`, `B`, `C`

### `MouldKing hent kontrolkanal` {#block_hubs_mouldking_control_get_control_channel}

<img src={useBaseUrl('/img/blocks/block_hubs_mouldking_control_get_control_channel.svg')} alt="block_hubs_mouldking_control_get_control_channel.svg" />

Returnerer den aktuelle aktive kontrolkanal for understøttet MouldKing-hub/controller.

- Outputformat-muligheder: tekst, indeks

## Brugsnoter

- Brug `wait until` sammen med booleske reporterblokke fra Sensorer/Operatorer.
- Tilføj sikkerhedsbetingelser i løkker for at undgå endeløs utilsigtet adfærd.
- Foretræk `if / else` når både sand/falsk-stier skal håndteres eksplicit.
