---
id: Control
title: Besturing
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Besturing

Controlblokken beheren de uitvoeringsstroom: wachten, lussen, vertakkingen en het stoppen van scripts.

## Wachtblokken

### `Wacht` {#block_control_wait_for}

<img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />

Pauzeert het huidige script voor een opgegeven tijd.

### `Wacht tot` {#block_control_wait_until}

<img src={useBaseUrl('/img/blocks/block_control_wait_until.svg')} alt="block_control_wait_until.svg" />

Pauzeert het huidige script totdat een voorwaarde waar wordt.

## Lusblokken

### `Herhaal` {#block_control_repeat_for}

<img src={useBaseUrl('/img/blocks/block_control_repeat_for.svg')} alt="block_control_repeat_for.svg" />

Voert geneste blokken een vast aantal keren uit.

### `Herhaal tot` {#block_control_repeat_until}

<img src={useBaseUrl('/img/blocks/block_control_repeat_until.svg')} alt="block_control_repeat_until.svg" />

Voert geneste blokken herhaaldelijk uit totdat een voorwaarde waar wordt.

### `Altijd` {#block_control_repeat_forever}

<img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />

Voert geneste blokken continu uit totdat het programma of script wordt gestopt.

## Vertakkingsblokken

### `Als` {#block_control_if}

<img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />

Voert geneste blokken alleen uit wanneer de voorwaarde waar is.

### `Als / Anders` {#block_control_if_else}

<img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />

Voert één tak uit wanneer de voorwaarde waar is, anders wordt de alternatieve tak uitgevoerd.

### `Doe dit en dit` {#block_control_do_this_and_this}

<img src={useBaseUrl('/img/blocks/block_control_do_this_and_this.svg')} alt="block_control_do_this_and_this.svg" />

Voert twee blokstapels na elkaar uit als onderdeel van één controlestroomoperatie.

## Stopblokken

### `Stop` {#block_control_stop}

<img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />

Stopt de uitvoering van het script (bereik hangt af van de geselecteerde stopoptie).

- Stopopties: `alles`, `deze stack`, `en programma beëindigen`

### `Stop andere stacks` {#block_control_stop_other_stacks}

<img src={useBaseUrl('/img/blocks/block_control_stop_other_stacks.svg')} alt="block_control_stop_other_stacks.svg" />

Stopt alle andere actieve stacks terwijl de huidige stack blijft doorgaan.

## Hub-/besturingshulpmiddelen

### `Verbinding instellen` {#block_hubs_control_set_connect}

<img src={useBaseUrl('/img/blocks/block_hubs_control_set_connect.svg')} alt="block_hubs_control_set_connect.svg" />

Beheert de verbindingsstatus van de hub vanuit de controlestroomlogica.

- Actieopties: `verbinden`, `verbinding verbreken`

### `Is verbonden` {#block_hubs_all_sensors_is_connected}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_connected.svg')} alt="block_hubs_all_sensors_is_connected.svg" />

Geeft terug of de hub momenteel verbonden is.

- Type: boolean rapportblok

### `BuWizz 2 stel vermogensmodus in` {#block_hubs_buwizz_sensors_set_power_mode}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_set_power_mode.svg')} alt="block_hubs_buwizz_sensors_set_power_mode.svg" />

Stelt de vermogensmodus van de BuWizz 2 hub in.

- Modusopties: `Slow`, `Normal`, `Fast`, `Ludicrous`

### `BuWizz 2 haal vermogensmodus op` {#block_hubs_buwizz_sensors_get_power_mode}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_get_power_mode.svg')} alt="block_hubs_buwizz_sensors_get_power_mode.svg" />

Geeft de momenteel actieve vermogensmodus van de BuWizz 2 terug.

- Uitvoerformaatopties: `tekst`, `index`

### `MouldKing stel besturingskanaal in` {#block_hubs_mouldking_control_set_control_channel}

<img src={useBaseUrl('/img/blocks/block_hubs_mouldking_control_set_control_channel.svg')} alt="block_hubs_mouldking_control_set_control_channel.svg" />

Stelt het actieve besturingskanaal in voor ondersteunde MouldKing hub/controller.

- Kanaalopties: `A`, `B`, `C`

### `MouldKing haal besturingskanaal op` {#block_hubs_mouldking_control_get_control_channel}

<img src={useBaseUrl('/img/blocks/block_hubs_mouldking_control_get_control_channel.svg')} alt="block_hubs_mouldking_control_get_control_channel.svg" />

Geeft het huidige actieve besturingskanaal terug voor ondersteunde MouldKing hub/controller.

- Uitvoerformaatopties: `tekst`, `index`