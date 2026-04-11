---
id: Light
title: Valo
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Valo

Tällä sivulla kuvataan Valo-kategorian lohkot, joita käytetään LEDien ja valojen ohjaamiseen tuetuissa hubeissa.

## Yleiset valolohkot

### `Aseta LED-väri` {#block_hubs_all_light_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_led_color.svg')} alt="block_hubs_all_light_set_led_color.svg" />

Asettaa hubin LEDin värin valmiista vaihtoehdoista.

- Tyyppi: komentolohko
- Tyypillinen käyttö: tilan näyttäminen (valmis, käynnissä, varoitus, virhe)

### `Aseta valo` {#block_hubs_all_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_to.svg')} alt="block_hubs_all_light_light_turn_to.svg" />

Asettaa valitun valon kirkkauden tai arvon.

- Tyyppi: komentolohko
- Tyypillinen käyttö: ajovalot, tilan kirkkaus

### `Sammuta valo` {#block_hubs_all_light_light_turn_off}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_off.svg')} alt="block_hubs_all_light_light_turn_off.svg" />

Sammuttaa valitun valon.

- Tyyppi: komentolohko
- Tyypillinen käyttö: sammutus, virransäästö

### `Technic Move aseta valo` {#block_hubs_technicmove_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_light_light_turn_to.svg')} alt="block_hubs_technicmove_light_light_turn_to.svg" />

`Aseta valo` -lohkon versio Technic Move -hubille.

- Tyyppi: komentolohko
- Tyypillinen käyttö: Move-hubin valon säätö

## BuWizz 3 -valolohkot

### `BuWizz 3 aseta LED-väri` {#block_hubs_buwizz3_light_port_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color.svg')} alt="block_hubs_buwizz3_light_port_set_led_color.svg" />

Asettaa LED-värin valitussa BuWizz 3 -portissa.

- Tyyppi: komentolohko

### `BuWizz 3 aseta LED-väri (teksti)` {#block_hubs_buwizz3_light_port_set_led_color_string}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_string.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_string.svg" />

Asettaa LED-värin tekstiarvon avulla.

- Tyyppi: komentolohko
- Tyypillinen käyttö: dynaamiset värit muuttujista

### `BuWizz 3 aseta LED-väri (RGB)` {#block_hubs_buwizz3_light_port_set_led_color_rgb}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_rgb.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_rgb.svg" />

Asettaa LED-värin RGB-arvoilla.

- Tyyppi: komentolohko
- Tyypillinen käyttö: tarkka väriohjaus ja gradientit