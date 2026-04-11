---
id: MyBlocks
title: Meus Blocos
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Meus Blocos

Meus Blocos permitem que você defina seus próprios blocos reutilizáveis personalizados.  
Esta categoria é conceitualmente semelhante à criação de uma função na programação tradicional: definir um comportamento uma vez e reutilizá-lo várias vezes.

## Blocos principais de Meus Blocos

### `Criar um bloco`

Cria uma nova definição de bloco personalizado.

- Tipo: bloco de definição/configuração
- Uso típico: agrupar lógica repetida em um único bloco nomeado

### `MeuBloco` (bloco de chamada)

Chama um bloco personalizado previamente criado.

- Tipo: bloco de pilha (chamada de comando personalizado)
- Uso típico: reutilizar a mesma lógica em vários lugares sem duplicar pilhas de blocos

## Exemplos variádicos

Estes exemplos mostram blocos personalizados com diferentes assinaturas de argumentos.

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758091855.svg')} alt="block_myblock_1775758091855.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758113259.svg')} alt="block_myblock_1775758113259.svg" />
</div>

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758130609.svg')} alt="block_myblock_1775758130609.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758145135.svg')} alt="block_myblock_1775758145135.svg" />
</div>

## Exemplo de uso em uma pilha de programa

<img src={useBaseUrl('/img/my-blocks/my-blocks-usage-example.png')} alt="my-blocks-usage-example.png" />

Este exemplo mostra uma chamada de bloco personalizado conectada ao bloco `quando o programa iniciar`, enquanto a pilha `definir meu bloco` contém a lógica reutilizável do motor.

- Fluxo típico: chamar blocos personalizados a partir de pilhas de eventos
- Benefício: uma definição, múltiplos pontos de uso

## Visualização do editor de Meus Blocos

<img src={useBaseUrl('/img/my-blocks/my-blocks-editor-cropped.png')} alt="my-blocks-editor-cropped.png" />

O editor Criar um bloco é usado para definir a assinatura do seu bloco personalizado.  
Você pode adicionar rótulos e entradas (por exemplo, entradas numéricas/texto e booleanas) e depois definir a lógica de implementação na pilha de definição do bloco.

## Por que usar Meus Blocos

- Reutilização: escreva uma vez, use várias vezes.
- Legibilidade: substitua pilhas longas por um nome significativo.
- Manutenção: atualize a lógica em um único lugar.
- Estrutura: divida programas grandes em unidades menores.

## Notas

- Blocos personalizados são específicos do projeto e destinados ao uso dentro do mesmo contexto de perfil/projeto.
- Prefira nomes descritivos que expliquem a intenção, não os detalhes de implementação.