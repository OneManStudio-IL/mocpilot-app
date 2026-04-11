---
id: Events
title: Eventos
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Eventos

A categoria **Eventos** contém blocos que iniciam scripts quando uma condição acontece.

## Eventos principais

### `Quando o programa iniciar` {#block_event_when_program_started}

<img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />

Inicia este script uma vez quando o programa do perfil começa.

- Gatilho: início do programa
- Uso típico: inicializar variáveis, estados padrão de motores, sons de inicialização

### `Quando` {#block_event_when}

<img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />

Executa quando uma condição selecionada se torna verdadeira.

- Gatilho: baseado em condição
- Uso típico: lógica de ramificação com base no estado em tempo de execução

### `Quando o temporizador for maior que` {#block_event_when_timer_greater_than}

<img src={useBaseUrl('/img/blocks/block_event_when_timer_greater_than.svg')} alt="block_event_when_timer_greater_than.svg" />

Executa quando o valor do temporizador ultrapassa um limite.

- Gatilho: tempo decorrido
- Uso típico: ações com atraso, fases temporizadas

### `Quando mensagem recebida` {#block_event_when_message_recieved}

<img src={useBaseUrl('/img/blocks/block_event_when_message_recieved.svg')} alt="block_event_when_message_recieved.svg" />

Inicia um script quando uma mensagem transmitida correspondente é recebida.

- Gatilho: canal de mensagem
- Uso típico: sincronizar múltiplos scripts

### `Transmitir` {#block_event_broadcast}

<img src={useBaseUrl('/img/blocks/block_event_broadcast.svg')} alt="block_event_broadcast.svg" />

Envia uma mensagem para todos os scripts que estão ouvindo essa mensagem.

- Gatilho: envio imediato
- Uso típico: notificar outros scripts sem esperar

### `Transmitir e aguardar` {#block_event_broadcast_and_wait}

<img src={useBaseUrl('/img/blocks/block_event_broadcast_and_wait.svg')} alt="block_event_broadcast_and_wait.svg" />

Envia uma mensagem e pausa este script até que os receptores terminem.

- Gatilho: envio imediato + espera
- Uso típico: fluxos em etapas onde a ordem é importante

## Eventos do hub

### `Botão do hub pressionado` {#block_hubs_all_event_button_pressed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_button_pressed.svg')} alt="block_hubs_all_event_button_pressed.svg" />

Executa quando o botão principal do hub é pressionado.

- Opções de estado: `pressionado`, `solto`, `alterado`
- Nota: as opções disponíveis podem variar conforme o modelo do hub.

### `Conexão do hub alterada` {#block_hubs_all_event_connection_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_connection_changed.svg')} alt="block_hubs_all_event_connection_changed.svg" />

Executa quando o estado de conexão do hub muda (conectado ou desconectado).

- Gatilho: mudança de conexão do hub
- Uso típico: reconexão e comportamento seguro após perda de conexão

### `Bateria do hub alterada` {#block_hubs_all_event_battery_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_battery_changed.svg')} alt="block_hubs_all_event_battery_changed.svg" />

Executa quando o nível de bateria do hub muda.

- Gatilho: atualização do nível de bateria
- Uso típico: aviso de bateria baixa e economia de energia

### `Acelerômetro do hub alterado` {#block_hubs_all_event_accelerometer_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_accelerometer_changed.svg')} alt="block_hubs_all_event_accelerometer_changed.svg" />

Executa quando os valores de aceleração mudam.

### `Inclinação do hub alterada` {#block_hubs_all_event_tilt_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_changed.svg')} alt="block_hubs_all_event_tilt_changed.svg" />

Executa quando o valor de inclinação muda.

- Opções de ângulo: `qualquer`, `inclinação`, `rotação`, `guinada`
- Nota: `guinada` está disponível apenas em hubs que suportam esse dado.

### `Orientação do hub alterada` {#block_hubs_all_event_tilt_orientation_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_orientation_changed.svg')} alt="block_hubs_all_event_tilt_orientation_changed.svg" />

Executa quando o estado de orientação muda (por exemplo: frente/cima/baixo/esquerda/direita).

## Eventos de porta de sensor

### `Evento do sensor de cor Technic` {#block_hubs_all_event_port_technic_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_color.svg')} alt="block_hubs_all_event_port_technic_sensor_color.svg" />

Executa quando o sensor de cor Technic detecta uma cor selecionada.

### `Evento do sensor de distância Technic` {#block_hubs_all_event_port_technic_sensor_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_distance.svg')} alt="block_hubs_all_event_port_technic_sensor_distance.svg" />

Executa quando os valores do sensor de distância Technic correspondem à condição selecionada.

- Opções de comparação: `mais perto que`, `mais longe que`, `exatamente em`
- Opções de unidade: `mm`, `cm`, `polegadas`, `%`
- Nota: as unidades disponíveis podem depender do modo do sensor.

### `Evento do sensor de distância BOOST` {#block_hubs_all_event_port_boost_sensor_when_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_event_port_boost_sensor_when_distance.svg" />

Executa quando o sensor de distância BOOST atinge a condição/limite definido.

- Opções de comparação: `mais perto que`, `mais longe que`, `exatamente em`
- Opções de unidade: `%`, `cm`, `polegadas`

### `Evento do sensor de cor BOOST` {#block_hubs_all_event_port_boost_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_color.svg')} alt="block_hubs_all_event_port_boost_sensor_color.svg" />

Executa quando o sensor BOOST detecta uma cor/valor selecionado.
