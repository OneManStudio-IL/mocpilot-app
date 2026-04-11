---
id: Light
title: Lumină
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Lumină

Această pagină documentează blocurile din categoria Lumină utilizate pentru a controla LED-urile și ieșirile de lumină pe hub-urile compatibile.

## Blocuri comune de lumină

### `Setează culoarea LED-ului` {#block_hubs_all_light_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_led_color.svg')} alt="block_hubs_all_light_set_led_color.svg" />

Setează culoarea LED-ului hub-ului folosind opțiuni de culori predefinite.

- Tip: bloc de comandă
- Utilizare tipică: afișarea stării (gata, în execuție, avertizare, eroare)

### `Setează lumina la` {#block_hubs_all_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_to.svg')} alt="block_hubs_all_light_light_turn_to.svg" />

Setează ieșirea de lumină selectată la o valoare/inten­sitate țintă.

- Tip: bloc de comandă
- Utilizare tipică: luminozitatea farurilor, intensitatea stării

### `Oprește lumina` {#block_hubs_all_light_light_turn_off}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_off.svg')} alt="block_hubs_all_light_light_turn_off.svg" />

Oprește ieșirea de lumină selectată.

- Tip: bloc de comandă
- Utilizare tipică: secvență de oprire, economisire baterie

### `Technic Move setează lumina la` {#block_hubs_technicmove_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_light_light_turn_to.svg')} alt="block_hubs_technicmove_light_light_turn_to.svg" />

Variantă a blocului `Setează lumina la` pentru hub-ul/lumina Technic Move.

- Tip: bloc de comandă
- Utilizare tipică: setarea nivelului de lumină pentru hub-ul Move

## Blocuri de lumină BuWizz 3

### `BuWizz 3 setează culoarea LED-ului` {#block_hubs_buwizz3_light_port_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color.svg')} alt="block_hubs_buwizz3_light_port_set_led_color.svg" />

Setează culoarea LED-ului pe portul BuWizz 3 selectat folosind opțiuni de culori integrate.

- Tip: bloc de comandă

### `BuWizz 3 setează culoarea LED-ului (text)` {#block_hubs_buwizz3_light_port_set_led_color_string}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_string.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_string.svg" />

Setează culoarea LED-ului BuWizz 3 folosind o valoare de culoare sub formă de text.

- Tip: bloc de comandă
- Utilizare tipică: utilizarea dinamică a numelor de culori din variabile

### `BuWizz 3 setează culoarea LED-ului (RGB)` {#block_hubs_buwizz3_light_port_set_led_color_rgb}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_rgb.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_rgb.svg" />

Setează culoarea LED-ului BuWizz 3 folosind canale RGB explicite.

- Tip: bloc de comandă
- Utilizare tipică: control complet al culorii și gradienți