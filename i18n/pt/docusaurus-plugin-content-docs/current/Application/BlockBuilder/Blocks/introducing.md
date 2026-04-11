---
id: BlocksIntroducing
title: Introdução aos blocos
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Introdução aos blocos

O MOCPilot utiliza um sistema de programação visual por blocos que é semelhante ao Scratch. :contentReference[oaicite:0]{index=0}  
Cada bloco tem um papel específico, e combinações válidas definem o fluxo de controle e de dados dentro de um script.  
Ele utiliza lógica de arrastar e soltar e padrões de interação semelhantes ao Scratch para oferecer uma forma conveniente e familiar de criar programas.

:::warning Aviso de compatibilidade
Este é um sistema de blocos diferente, com seu próprio conjunto de blocos e comportamento.  
Os programas do MOCPilot não são compatíveis com projetos do Scratch: não é possível importar programas do MOCPilot para o Scratch, nem programas do Scratch para o MOCPilot.
:::

## Formas de blocos e significado

### Blocos de início

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />
  <img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />
</div>

Iniciam um script quando um evento específico ocorre. Os blocos só podem ser anexados abaixo.

---

### Blocos de pilha

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
</div>

Blocos principais de comando que executam ações.

---

### Blocos C

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />
</div>

Blocos de controle em forma de C que contêm pilhas de blocos aninhados (loops/condições).

---

### Blocos repórter

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />
</div>

Retornam valores como números ou texto.

---

### Blocos booleanos

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />
</div>

Retornam apenas `true` ou `false`, geralmente usados em condições.

---

### Blocos de término

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />
</div>

Encerram scripts e não permitem blocos abaixo.

---

### Pilha de blocos

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks_stack.svg')} alt="blocks_stack.svg" />
</div>

Uma pilha de blocos é uma sequência de blocos conectados que executa como um único fluxo de script de cima para baixo.  
As pilhas normalmente começam com um bloco de evento e executam os blocos conectados em ordem.

---

## Modelo de execução de scripts

- Um script normalmente começa com um bloco de evento.
- Blocos conectados são executados de cima para baixo.
- Múltiplos scripts podem ser executados em paralelo.
- Blocos de mensagem/transmissão são usados para sincronizar scripts.
- Uma pilha de blocos é uma sequência de blocos conectados entre si.

## Dados e valores

- Blocos repórter podem ser usados dentro de entradas de comandos/condições.
- Variáveis armazenam valores reutilizáveis entre blocos e scripts.
- Listas armazenam coleções ordenadas para histórico, filas e dados de busca.

## Eventos e temporização

- Blocos de evento reagem a entrada do usuário, estado do hub, sensores ou mensagens.
- Eventos baseados em tempo ou sensores podem ser acionados frequentemente.
- Use limites, filtragem ou pequenas esperas para reduzir acionamentos repetidos.

## Hub, portas e controladores

- Blocos de hub atuam no contexto do hub e das portas.
- Alguns blocos estão disponíveis apenas para famílias/dispositivos específicos.
- Blocos de painel e gamepad fornecem entrada em tempo de execução e controle da interface.

## Fluxo de trabalho recomendado

1. Comece com um bloco de evento e um script mínimo.
2. Valide direção e intervalos de motores/sensores logo no início.
3. Extraia lógica repetida usando mensagens e scripts auxiliares.
4. Adicione proteções (limites, paradas, valores padrão) antes do ajuste final.

## Armadilhas comuns

- Ausência de bloco de evento inicial faz com que o script nunca comece.
- Seleção incorreta de hub/porta resulta em nenhum efeito visível.
- Misturar tipos de valor (texto/número/booleano) pode gerar lógica inválida.
- Eventos de alta frequência sem filtragem podem sobrecarregar o comportamento.

## Estrutura da documentação nesta seção

Use as páginas de categoria nesta ordem:

- Luz
- Motores
- Sensores
- Eventos
- Controle
- Operadores
- Variáveis
- Listas
- Meus Blocos
- Controladores do painel
- Gamepad