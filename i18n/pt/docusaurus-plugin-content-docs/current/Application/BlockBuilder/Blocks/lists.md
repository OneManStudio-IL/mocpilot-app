---
id: Lists
title: Listas
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Listas

Listas armazenam coleções ordenadas de valores e são manipuladas por blocos específicos do tipo Repórter e Pilha.

## Blocos de modificação de listas

### `Adicionar valor à lista` {#block_lists_add}

<img src={useBaseUrl('/img/blocks/block_lists_add.svg')} alt="block_lists_add.svg" />

Adiciona um valor ao final da lista selecionada.

### `Inserir em` {#block_lists_insert_at}

<img src={useBaseUrl('/img/blocks/block_lists_insert_at.svg')} alt="block_lists_insert_at.svg" />

Insere um valor no índice selecionado da lista.

### `Substituir em` {#block_lists_replace_at}

<img src={useBaseUrl('/img/blocks/block_lists_replace_at.svg')} alt="block_lists_replace_at.svg" />

Substitui o item no índice selecionado por um novo valor.

### `Excluir` {#block_lists_delete} 

<img src={useBaseUrl('/img/blocks/block_lists_delete.svg')} alt="block_lists_delete.svg" />

Remove o item no índice selecionado (ou conforme o modo de exclusão escolhido).

### `Limpar tudo` {#block_lists_clear_all}

<img src={useBaseUrl('/img/blocks/block_lists_clear_all.svg')} alt="block_lists_clear_all.svg" />

Remove todos os itens da lista selecionada.

## Blocos de valor/verificação de listas

### `Item em` {#block_lists_item_at}

<img src={useBaseUrl('/img/blocks/block_lists_item_at.svg')} alt="block_lists_item_at.svg" />

Retorna o valor no índice selecionado.

### `Índice do valor` {#block_lists_index_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_index_of_value.svg')} alt="block_lists_index_of_value.svg" />

Retorna o índice da primeira ocorrência do valor correspondente na lista.

### `Contém valor` {#block_lists_contains_value}

<img src={useBaseUrl('/img/blocks/block_lists_contains_value.svg')} alt="block_lists_contains_value.svg" />

Retorna se a lista contém um valor específico.

### `Tamanho da lista` {#block_lists_size_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_size_of_value.svg')} alt="block_lists_size_of_value.svg" />

Retorna o número de itens na lista selecionada.

## Bloco repórter de lista

<img src={useBaseUrl('/img/blocks/list.svg')} alt="list.svg" />

Retorna o valor atual da lista selecionada.

- Tipo: bloco repórter
- Exemplo de saída: `[item1,item2,item3]`
- Uso típico: inspecionar o conteúdo atual da lista ou passar o valor da lista para blocos compatíveis