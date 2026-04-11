---
id: DashboardControllers
title: Controladores do painel
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Controladores do painel

Estes blocos são usados para ler a entrada do usuário a partir de controles na tela, reagir às ações do usuário e atualizar o estado da interface do painel.

## Blocos globais de controladores do painel

### `Definir cor do controlador` {#block_dashboard_controller_all_set_color}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_color.svg')} alt="block_dashboard_controller_all_set_color.svg" />

Altera a cor de destaque visual do controlador de painel selecionado.

- Tipo: bloco de comando
- Uso típico: indicar estados em tempo de execução ou alterar dinamicamente o estilo do controlador com base em condições

### `Definir interatividade do controlador` {#block_dashboard_controller_all_set_interactivity}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_interactivity.svg')} alt="block_dashboard_controller_all_set_interactivity.svg" />

Controla a interatividade do controlador de painel selecionado.  
Se a interatividade estiver desativada, o controlador não reage ao toque.

- Tipo: bloco de comando
- Uso típico: bloquear temporariamente controles durante lógica específica ou estados de segurança
- Opções de estado: `ativar`, `desativar`

## Blocos de botão

### `Evento do botão` {#block_dashboard_controller_button_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_event.svg')} alt="block_dashboard_controller_button_event.svg" />

Aciona quando o estado do botão do painel muda (pressionado/solto).

- Tipo: bloco de evento
- Saída: inicia o script conectado
- Opções de estado: `pressionado`, `solto`

### `Valor do botão (booleano)` {#block_dashboard_controller_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_value_boolean.svg')} alt="block_dashboard_controller_button_value_boolean.svg" />

Retorna o estado atual do botão do painel.

- Tipo: bloco de valor
- Saída: `true`/`false`
- Opções de estado: `pressionado`, `solto`

## Blocos de D-pad

### `Evento do D-pad` {#block_dashboard_controller_dpad_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_event.svg')} alt="block_dashboard_controller_dpad_event.svg" />

Aciona quando a direção do D-pad muda ou corresponde à direção configurada.

- Tipo: bloco de evento
- Saída: inicia o script conectado
- Opções de direção: `cima`, `baixo`, `esquerda`, `direita`
- Opções de estado do botão: `pressionado`, `solto`

### `Valor do D-pad (booleano)` {#block_dashboard_controller_dpad_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_value_boolean.svg')} alt="block_dashboard_controller_dpad_value_boolean.svg" />

Indica se a direção selecionada do D-pad está ativa.

- Tipo: bloco de valor
- Saída: `true`/`false`
- Opções de direção: `cima`, `baixo`, `esquerda`, `direita`
- Opções de estado do botão: `pressionado`, `solto`

## Blocos de joystick

### `Evento do joystick` {#block_dashboard_controller_joystick_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_event.svg')} alt="block_dashboard_controller_joystick_event.svg" />

Aciona quando a posição do joystick muda.

- Tipo: bloco de evento
- Saída: inicia o script conectado
- Opções de estado: `cima`, `baixo`, `esquerda`, `direita`, `movido`, `solto`

### `Valor do joystick (float)` {#block_dashboard_controller_joystick_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_value_float.svg')} alt="block_dashboard_controller_joystick_value_float.svg" />

Retorna o valor do eixo do joystick.

- Tipo: bloco de valor
- Saída: numérico (float), normalmente em um intervalo normalizado
- Opções de eixo: `eixo x`, `eixo y`

## Blocos de pedais

### `Evento dos pedais` {#block_dashboard_controller_pedals_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_event.svg')} alt="block_dashboard_controller_pedals_event.svg" />

Aciona quando a entrada dos pedais muda.

- Tipo: bloco de evento
- Saída: inicia o script conectado
- Opções de pedal: `qualquer`, `freio`, `aceleração`
- Opções de estado: `movido`, `pressionado`, `solto`

### `Valor dos pedais (float)` {#block_dashboard_controller_pedals_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_float.svg')} alt="block_dashboard_controller_pedals_value_float.svg" />

Retorna o valor analógico dos pedais.

- Tipo: bloco de valor
- Saída: numérico (float)

### `Valor dos pedais (booleano)` {#block_dashboard_controller_pedals_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_boolean.svg')} alt="block_dashboard_controller_pedals_value_boolean.svg" />

Retorna o estado selecionado com base se um pedal específico está pressionado ou solto.

- Tipo: bloco de valor
- Saída: `true`/`false`
- Opções de pedal: `freio`, `aceleração`
- Opções de estado: `pressionado`, `solto`

## Blocos de slider

### `Evento do slider` {#block_dashboard_controller_slider_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_event.svg')} alt="block_dashboard_controller_slider_event.svg" />

Aciona quando o valor do slider muda.

- Tipo: bloco de evento
- Saída: inicia o script conectado
- Opções de estado: `baixo`, `alto`, `movido`, `solto`

### `Valor do slider (float)` {#block_dashboard_controller_slider_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_value_float.svg')} alt="block_dashboard_controller_slider_value_float.svg" />

Retorna o valor atual do slider.

- Tipo: bloco de valor
- Saída: numérico (float)

## Blocos de stepper

### `Evento do stepper` {#block_dashboard_controller_stepper_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_event.svg')} alt="block_dashboard_controller_stepper_event.svg" />

Aciona quando o valor do stepper muda por um passo.

- Tipo: bloco de evento
- Saída: inicia o script conectado
- Opções de passo: `qualquer`, `reset`, `menos`, `mais`
- Opções de estado do botão: `pressionado`, `solto`

### `Valor do stepper (float)` {#block_dashboard_controller_stepper_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_value_float.svg')} alt="block_dashboard_controller_stepper_value_float.svg" />

Retorna o valor atual do stepper.

- Tipo: bloco de valor
- Saída: numérico (float)

## Blocos de volante

### `Evento do volante` {#block_dashboard_controller_steering_wheel_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_event.svg')} alt="block_dashboard_controller_steering_wheel_event.svg" />

Aciona quando a posição do volante muda.

- Tipo: bloco de evento
- Saída: inicia o script conectado
- Opções de estado: `movido`, `pressionado`, `solto`

### `Valor do volante (float)` {#block_dashboard_controller_steering_wheel_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_value_float.svg')} alt="block_dashboard_controller_steering_wheel_value_float.svg" />

Retorna o valor atual do volante.

- Tipo: bloco de valor
- Saída: numérico (float)

### `Valor do volante (booleano)` {#block_dashboard_controller_steeringwheel_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steeringwheel_value_boolean.svg')} alt="block_dashboard_controller_steeringwheel_value_boolean.svg" />

Retorna o estado selecionado com base se o volante está pressionado ou solto.

- Tipo: bloco de valor
- Saída: `true`/`false`
- Opções de estado: `movido`, `pressionado`, `solto`

## Blocos de switch

### `Evento do switch` {#block_dashboard_controller_switch_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_event.svg')} alt="block_dashboard_controller_switch_event.svg" />

Aciona quando o estado do switch muda.

- Tipo: bloco de evento
- Saída: inicia o script conectado
- Opções de alternância: `ligado`, `desligado`

### `Valor do switch (booleano)` {#block_dashboard_controller_switch_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_value_boolean.svg')} alt="block_dashboard_controller_switch_value_boolean.svg" />

Retorna o estado atual do switch.

- Tipo: bloco de valor
- Saída: `true`/`false`
- Opções de estado: `ligado`, `desligado`

## Blocos de monitor

### `Mostrar monitor` {#block_dashboard_controller_monitor_show}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_show.svg')} alt="block_dashboard_controller_monitor_show.svg" />

Exibe informações (texto ou valor) no monitor do painel.

- Tipo: bloco de comando
- Uso típico: mostrar nível de bateria, ângulo do motor, dispositivo conectado na porta do hub e outras informações em tempo de execução

### `Definir valor do monitor` {#block_dashboard_controller_monitor_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_set_value.svg')} alt="block_dashboard_controller_monitor_set_value.svg" />

Define um valor inteiro para o monitor de velocímetro do painel.

- Tipo: bloco de comando
- Uso típico: atualizar valor do monitor tipo velocímetro em tempo de execução

### `Definir valor de inclinação do monitor` {#block_dashboard_controller_monitor_tilt_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_tilt_set_value.svg')} alt="block_dashboard_controller_monitor_tilt_set_value.svg" />

Define o valor de inclinação (pitch/roll) para o monitor de inclinação do painel.

- Tipo: bloco de comando
- Uso típico: exibir valores de inclinação em tempo de execução em um monitor dedicado
- Opções de eixo: `pitch`, `roll`
