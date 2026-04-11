---
id: Gamepad
title: Gamepad
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Gamepad
Os blocos de gamepad são usados para reagir à entrada do controle e ler os valores atuais do estado do gamepad.

## Blocos de evento

### `Quando o botão do gamepad estiver` {#block_gamepad_event_when_button_is}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is.svg')} alt="block_gamepad_event_when_button_is.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is_sony.svg')} alt="block_gamepad_event_when_button_is_sony.svg" />
</div>

Aciona quando o botão selecionado do gamepad corresponde ao estado configurado.

- Tipo: bloco de evento
- Opções de botão (layout Xbox): `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Opções de botão (layout Sony): `cruz`, `círculo`, `quadrado`, `triângulo`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- Opções de estado: `pressionado`, `solto`

### `Quando o D-pad do gamepad estiver` {#block_gamepad_event_when_dpad_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_dpad_is.svg')} alt="block_gamepad_event_when_dpad_is.svg" />

Aciona quando a direção/estado do D-pad corresponde à condição selecionada.

- Tipo: bloco de evento
- Opções de direção: `cima`, `baixo`, `esquerda`, `direita`
- Opções de estado: `pressionado`, `solto`

### `Quando o thumbstick do gamepad estiver` {#block_gamepad_event_when_thumbstick_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_thumbstick_is.svg')} alt="block_gamepad_event_when_thumbstick_is.svg" />

Aciona quando a condição do thumbstick corresponde às opções selecionadas.

Com base nas opções atuais, este bloco suporta:

- Seleção de stick: `esquerdo` / `direito`
- Seleção de direção/estado: `cima`, `baixo`, `esquerda`, `direita`, `movido`, `solto`

- Tipo: bloco de evento
- Uso típico: reagir ao movimento direcional ou liberação do stick

## Blocos de valor

### `Valor do botão do gamepad (booleano)` {#block_gamepad_button_value_boolean}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean.svg')} alt="block_gamepad_button_value_boolean.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean_sony.svg')} alt="block_gamepad_button_value_boolean_sony.svg" />
</div>

Retorna o estado atual do botão selecionado do gamepad.

- Tipo: bloco de valor
- Saída: `true`/`false`
- Opções de botão (layout Xbox): `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Opções de botão (layout Sony): `cruz`, `círculo`, `quadrado`, `triângulo`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- Opções de estado: `pressionado`, `solto`

### `Valor do botão do D-pad do gamepad (booleano)` {#block_gamepad_dpad_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_gamepad_dpad_button_value_boolean.svg')} alt="block_gamepad_dpad_button_value_boolean.svg" />

Retorna se a direção selecionada do D-pad está atualmente ativa.

- Tipo: bloco de valor
- Saída: `true`/`false`
- Opções de direção: `cima`, `baixo`, `esquerda`, `direita`
- Opções de estado: `pressionado`, `solto`

### `Valor do thumbstick do gamepad (float)` {#block_gamepad_thumbstick_value_float}

<img src={useBaseUrl('/img/blocks/block_gamepad_thumbstick_value_float.svg')} alt="block_gamepad_thumbstick_value_float.svg" />

Retorna o valor numérico do eixo do thumbstick.

- Tipo: bloco de valor
- Saída: numérico (float)
- Intervalo padrão: `-1` a `1`
- Intervalo opcional nas configurações do gamepad: `-100` a `100`
- Opções de stick: `esquerdo`, `direito`
- Opções de eixo: `eixo x` / `eixo y`

### `Valor da pressão do gatilho do gamepad (float)` {#block_gamepad_trigger_pressure_value_float}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float.svg')} alt="block_gamepad_trigger_pressure_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float_sony.svg')} alt="block_gamepad_trigger_pressure_value_float_sony.svg" />
</div>

Retorna o valor de pressão do gatilho selecionado.

- Tipo: bloco de valor
- Saída: numérico (float)
- Intervalo padrão: `-1` a `1`
- Intervalo opcional nas configurações do gamepad: `-100` a `100`
- Opções de gatilho (layout Xbox): `LT`, `RT`
- Opções de gatilho (layout Sony): `L2`, `R2`