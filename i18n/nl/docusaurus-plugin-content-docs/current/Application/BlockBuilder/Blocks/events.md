---
id: Events
title: Gebeurtenissen
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Gebeurtenissen

De categorie **Gebeurtenissen** bevat blokken die scripts starten wanneer een voorwaarde optreedt.

## Kerngebeurtenissen

### `Wanneer programma gestart` {#block_event_when_program_started}

<img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />

Start dit script één keer wanneer het profielprogramma begint.

- Trigger: programmastart
- Typisch gebruik: initialiseren van variabelen, standaard motorstatussen, opstartgeluiden

### `Wanneer` {#block_event_when}

<img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />

Wordt uitgevoerd wanneer een geselecteerde voorwaarde waar wordt.

- Trigger: voorwaarde-gebaseerd
- Typisch gebruik: logica vertakken op basis van runtime-status

### `Wanneer timer groter dan` {#block_event_when_timer_greater_than}

<img src={useBaseUrl('/img/blocks/block_event_when_timer_greater_than.svg')} alt="block_event_when_timer_greater_than.svg" />

Wordt uitgevoerd wanneer de timerwaarde een drempel overschrijdt.

- Trigger: verstreken tijd
- Typisch gebruik: vertraagde acties, tijdgebaseerde fasen

### `Wanneer bericht ontvangen` {#block_event_when_message_recieved}

<img src={useBaseUrl('/img/blocks/block_event_when_message_recieved.svg')} alt="block_event_when_message_recieved.svg" />

Start een script wanneer een overeenkomend broadcastbericht wordt ontvangen.

- Trigger: berichtkanaal
- Typisch gebruik: synchronisatie van meerdere scripts

### `Broadcast` {#block_event_broadcast}

<img src={useBaseUrl('/img/blocks/block_event_broadcast.svg')} alt="block_event_broadcast.svg" />

Stuurt een bericht naar alle scripts die naar dat bericht luisteren.

- Trigger: directe verzending
- Typisch gebruik: andere scripts informeren zonder te wachten

### `Broadcast en wacht` {#block_event_broadcast_and_wait}

<img src={useBaseUrl('/img/blocks/block_event_broadcast_and_wait.svg')} alt="block_event_broadcast_and_wait.svg" />

Stuurt een bericht en pauzeert dit script totdat de luisteraars klaar zijn.

- Trigger: directe verzending + wachten
- Typisch gebruik: gefaseerde workflows waarbij volgorde belangrijk is

## Hubgebeurtenissen

### `Hubknop ingedrukt` {#block_hubs_all_event_button_pressed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_button_pressed.svg')} alt="block_hubs_all_event_button_pressed.svg" />

Wordt uitgevoerd wanneer de hoofdknop op de hub wordt ingedrukt.

- Statusopties: `ingedrukt`, `vrijgegeven`, `gewijzigd`
- Opmerking: beschikbare knopopties kunnen verschillen per hubmodel (verschillende hubs kunnen verschillende knoppen hebben).

### `Hubverbinding gewijzigd` {#block_hubs_all_event_connection_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_connection_changed.svg')} alt="block_hubs_all_event_connection_changed.svg" />

Wordt uitgevoerd wanneer de verbindingsstatus van de hub verandert (verbonden of losgekoppeld).

- Trigger: wijziging van hubverbindingsstatus
- Typisch gebruik: herverbindingslogica en veilige fallback na verbindingsverlies

### `Hubbatterij gewijzigd` {#block_hubs_all_event_battery_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_battery_changed.svg')} alt="block_hubs_all_event_battery_changed.svg" />

Wordt uitgevoerd wanneer het batterijniveau van de hub verandert.

- Trigger: batterij-update (voor hubs die batterijniveau rapporteren)
- Typisch gebruik: waarschuwingen voor lage batterij en energiebesparende modus

### `Hubversnelling gewijzigd` {#block_hubs_all_event_accelerometer_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_accelerometer_changed.svg')} alt="block_hubs_all_event_accelerometer_changed.svg" />

Wordt uitgevoerd wanneer versnellingswaarden veranderen.

### `Hubkanteling gewijzigd` {#block_hubs_all_event_tilt_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_changed.svg')} alt="block_hubs_all_event_tilt_changed.svg" />

Wordt uitgevoerd wanneer de kantelwaarde verandert.

- Hoekopties: `elke`, `helling`, `rol`, `gieren`
- Opmerking: `gieren` is alleen beschikbaar op hubs die gier-data leveren.

### `Huboriëntatie gewijzigd` {#block_hubs_all_event_tilt_orientation_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_orientation_changed.svg')} alt="block_hubs_all_event_tilt_orientation_changed.svg" />

Wordt uitgevoerd wanneer de oriëntatiestatus verandert (bijvoorbeeld voor/omhoog/omlaag/links/rechts).

## Sensorpoort gebeurtenissen

### `Technic kleursensor gebeurtenis` {#block_hubs_all_event_port_technic_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_color.svg')} alt="block_hubs_all_event_port_technic_sensor_color.svg" />

Wordt uitgevoerd wanneer de Technic kleursensor een geselecteerde kleur detecteert.

### `Technic afstandssensor gebeurtenis` {#block_hubs_all_event_port_technic_sensor_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_distance.svg')} alt="block_hubs_all_event_port_technic_sensor_distance.svg" />

Wordt uitgevoerd wanneer de waarden van de Technic afstandssensor voldoen aan de geselecteerde voorwaarde.

- Vergelijkopties: `dichterbij dan`, `verder dan`, `precies op`
- Eenheidsopties: `mm`, `cm`, `duim`, `%`
- Opmerking: beschikbare eenheden kunnen afhangen van de sensormodus en het aangesloten apparaat.

### `BOOST afstandssensor gebeurtenis` {#block_hubs_all_event_port_boost_sensor_when_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_event_port_boost_sensor_when_distance.svg" />

Wordt uitgevoerd wanneer de BOOST afstandssensor de gekozen drempel/voorwaarde bereikt.

- Vergelijkopties: `dichterbij dan`, `verder dan`, `precies op`
- Eenheidsopties: `%`, `cm`, `duim`

### `BOOST kleursensor gebeurtenis` {#block_hubs_all_event_port_boost_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_color.svg')} alt="block_hubs_all_event_port_boost_sensor_color.svg" />

Wordt uitgevoerd wanneer de BOOST sensor een geselecteerde kleur/waarde detecteert.
