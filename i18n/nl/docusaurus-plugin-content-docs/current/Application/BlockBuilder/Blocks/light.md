---
id: Light
title: Licht
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Licht

Deze pagina beschrijft blokken uit de categorie Licht die worden gebruikt om LED’s en lichtuitgangen op ondersteunde hubs te bedienen.

## Algemene lichtblokken

### `Stel LED-kleur in` {#block_hubs_all_light_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_led_color.svg')} alt="block_hubs_all_light_set_led_color.svg" />

Stelt de LED-kleur van de hub in met vooraf gedefinieerde kleuropties.

- Type: opdrachtblok
- Typisch gebruik: status weergeven (gereed, actief, waarschuwing, fout)

### `Licht instellen op` {#block_hubs_all_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_to.svg')} alt="block_hubs_all_light_light_turn_to.svg" />

Stelt de geselecteerde lichtuitgang in op een doelhelderheid/waarde.

- Type: opdrachtblok
- Typisch gebruik: koplamphelderheid, statusintensiteit

### `Licht uitschakelen` {#block_hubs_all_light_light_turn_off}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_off.svg')} alt="block_hubs_all_light_light_turn_off.svg" />

Schakelt de geselecteerde lichtuitgang uit.

- Type: opdrachtblok
- Typisch gebruik: uitschakelprocedure, energiebesparend gedrag

### `Technic Move licht instellen op` {#block_hubs_technicmove_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_light_light_turn_to.svg')} alt="block_hubs_technicmove_light_light_turn_to.svg" />

Variant van `Licht instellen op` voor Technic Move hub/lichtdoel.

- Type: opdrachtblok
- Typisch gebruik: instellen van het lichtniveau van de Move hub

## BuWizz 3 lichtblokken

### `BuWizz 3 stel LED-kleur in` {#block_hubs_buwizz3_light_port_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color.svg')} alt="block_hubs_buwizz3_light_port_set_led_color.svg" />

Stelt de LED-kleur in op de geselecteerde BuWizz 3-poort met ingebouwde kleuropties.

- Type: opdrachtblok

### `BuWizz 3 stel LED-kleur in (tekst)` {#block_hubs_buwizz3_light_port_set_led_color_string}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_string.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_string.svg" />

Stelt de LED-kleur van BuWizz 3 in met een tekstwaarde.

- Type: opdrachtblok
- Typisch gebruik: dynamische kleurnamen vanuit variabelen

### `BuWizz 3 stel LED-kleur in (RGB)` {#block_hubs_buwizz3_light_port_set_led_color_rgb}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_rgb.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_rgb.svg" />

Stelt de LED-kleur van BuWizz 3 in met expliciete RGB-kanalen.

- Type: opdrachtblok
- Typisch gebruik: volledige aangepaste kleurcontrole en verlopen