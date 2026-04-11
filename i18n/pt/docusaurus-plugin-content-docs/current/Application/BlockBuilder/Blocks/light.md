---
id: Light
title: Luz
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Luz

Esta página documenta os blocos da categoria Luz usados para controlar LEDs e saídas de luz em hubs compatíveis.

## Blocos de luz comuns

### `Definir cor do LED` {#block_hubs_all_light_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_led_color.svg')} alt="block_hubs_all_light_set_led_color.svg" />

Define a cor do LED do hub usando opções de cores predefinidas.

- Tipo: bloco de comando
- Uso típico: indicar estado (pronto, em execução, aviso, erro)

### `Definir intensidade da luz` {#block_hubs_all_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_to.svg')} alt="block_hubs_all_light_light_turn_to.svg" />

Define a saída de luz selecionada para um valor/intensidade desejado.

- Tipo: bloco de comando
- Uso típico: brilho de faróis, intensidade de status

### `Desligar luz` {#block_hubs_all_light_light_turn_off}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_off.svg')} alt="block_hubs_all_light_light_turn_off.svg" />

Desliga a saída de luz selecionada.

- Tipo: bloco de comando
- Uso típico: sequência de desligamento, economia de bateria

### `Technic Move definir intensidade da luz` {#block_hubs_technicmove_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_light_light_turn_to.svg')} alt="block_hubs_technicmove_light_light_turn_to.svg" />

Variante de `Definir intensidade da luz` para o hub/luz Technic Move.

- Tipo: bloco de comando
- Uso típico: definir nível de saída de luz do hub Move

## Blocos de luz BuWizz 3

### `BuWizz 3 definir cor do LED` {#block_hubs_buwizz3_light_port_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color.svg')} alt="block_hubs_buwizz3_light_port_set_led_color.svg" />

Define a cor do LED na porta selecionada do BuWizz 3 usando opções internas.

- Tipo: bloco de comando

### `BuWizz 3 definir cor do LED (texto)` {#block_hubs_buwizz3_light_port_set_led_color_string}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_string.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_string.svg" />

Define a cor do LED do BuWizz 3 usando um valor de texto.

- Tipo: bloco de comando
- Uso típico: cores dinâmicas vindas de variáveis

### `BuWizz 3 definir cor do LED (RGB)` {#block_hubs_buwizz3_light_port_set_led_color_rgb}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_rgb.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_rgb.svg" />

Define a cor do LED do BuWizz 3 usando canais RGB explícitos.

- Tipo: bloco de comando
- Uso típico: controle completo de cores personalizadas e gradientes