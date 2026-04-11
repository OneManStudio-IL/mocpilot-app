---
id: Variables
title: Variáveis
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Variáveis

Variáveis armazenam valores que podem ser lidos e atualizados entre diferentes pilhas de blocos e scripts.

## Blocos de comando de variáveis

### `Definir variável para` {#block_variables_set_to}

<img src={useBaseUrl('/img/blocks/block_variables_set_to.svg')} alt="block_variables_set_to.svg" />

Define a variável selecionada para o valor especificado.

- Tipo: bloco de comando
- Uso típico: inicializar estado, substituir valor anterior

### `Alterar variável por` {#block_variables_change_by}

<img src={useBaseUrl('/img/blocks/block_variables_change_by.svg')} alt="block_variables_change_by.svg" />

Adiciona o valor especificado à variável selecionada.

- Tipo: bloco de comando
- Uso típico: contadores, pontuação, distância/tempo acumulado

## Bloco repórter de variável

<img src={useBaseUrl('/img/blocks/variable.svg')} alt="variable.svg" />

Retorna o valor atual da variável selecionada.

- Tipo: bloco repórter
- Uso típico: usar o valor da variável em operadores, condições e entradas de comandos