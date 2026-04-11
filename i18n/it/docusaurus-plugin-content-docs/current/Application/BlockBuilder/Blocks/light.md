---
id: Light
title: Luce
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Luce

Questa pagina documenta i blocchi della categoria Luce usati per controllare LED e uscite luminose sugli hub supportati.

## Blocchi luce comuni

### `Imposta colore LED` {#block_hubs_all_light_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_led_color.svg')} alt="block_hubs_all_light_set_led_color.svg" />

Imposta il colore del LED dell'hub usando opzioni colore predefinite.

- Tipo: blocco comando
- Uso tipico: mostrare lo stato (pronto, in esecuzione, avviso, errore)

### `Luce imposta su` {#block_hubs_all_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_to.svg')} alt="block_hubs_all_light_light_turn_to.svg" />

Imposta l'uscita luce selezionata a una luminosità/valore target.

- Tipo: blocco comando
- Uso tipico: luminosità fari, intensità stato

### `Spegni luce` {#block_hubs_all_light_light_turn_off}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_off.svg')} alt="block_hubs_all_light_light_turn_off.svg" />

Spegne l'uscita luce selezionata.

- Tipo: blocco comando
- Uso tipico: sequenza di spegnimento, risparmio batteria

### `Technic Move luce imposta su` {#block_hubs_technicmove_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_light_light_turn_to.svg')} alt="block_hubs_technicmove_light_light_turn_to.svg" />

Variante di `Luce imposta su` per target hub/luce Technic Move.

- Tipo: blocco comando
- Uso tipico: impostare il livello di uscita luce dell'hub Move

## Blocchi luce BuWizz 3

### `BuWizz 3 imposta colore LED` {#block_hubs_buwizz3_light_port_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color.svg')} alt="block_hubs_buwizz3_light_port_set_led_color.svg" />

Imposta il colore LED sulla porta BuWizz 3 selezionata con opzioni colore integrate.

- Tipo: blocco comando

### `BuWizz 3 imposta colore LED (stringa)` {#block_hubs_buwizz3_light_port_set_led_color_string}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_string.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_string.svg" />

Imposta il colore LED BuWizz 3 usando un valore colore testuale.

- Tipo: blocco comando
- Uso tipico: nomi colore dinamici da variabili

### `BuWizz 3 imposta colore LED (RGB)` {#block_hubs_buwizz3_light_port_set_led_color_rgb}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_rgb.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_rgb.svg" />

Imposta il colore LED BuWizz 3 usando canali RGB espliciti.

- Tipo: blocco comando
- Uso tipico: controllo colore completamente personalizzato e gradienti
