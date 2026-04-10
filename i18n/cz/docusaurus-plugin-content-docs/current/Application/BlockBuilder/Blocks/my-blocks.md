---
id: MyBlocks
title: Moje bloky
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Moje bloky

Moje bloky umožňují definovat vlastní znovupoužitelné bloky.
Tato kategorie je podobná funkcím v klasickém programování: chování nadefinujete jednou a voláte opakovaně.

## Základní bloky My Blocks

### `Vytvořit blok`

Vytvoří novou definici vlastního bloku.

- Typ: definiční/nastavovací blok
- Typické použití: seskupení opakované logiky do jednoho pojmenovaného bloku

### `MyBlock` (volací blok)

Volá dříve vytvořený vlastní blok.

- Typ: stack blok (volání vlastní příkazové logiky)
- Typické použití: znovupoužití stejné logiky na více místech bez duplikace sekvencí

## Příklady s různými argumenty

Tyto příklady ukazují vlastní My Blocks s různými signaturami argumentů.

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758091855.svg')} alt="block_myblock_1775758091855.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758113259.svg')} alt="block_myblock_1775758113259.svg" />
</div>

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758130609.svg')} alt="block_myblock_1775758130609.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758145135.svg')} alt="block_myblock_1775758145135.svg" />
</div>

## Příklad použití v programu

<img src={useBaseUrl('/img/my-blocks/my-blocks-usage-example.png')} alt="my-blocks-usage-example.png" />

Ukázka zobrazuje volání vlastního bloku pod `when program starts`, zatímco sekvence `define my block` obsahuje znovupoužitelnou logiku motoru.

- Typický tok: volání vlastního bloku z událostních sekvencí
- Přínos: jedna definice, více míst použití

## Pohled editoru My Block

<img src={useBaseUrl('/img/my-blocks/my-blocks-editor-cropped.png')} alt="my-blocks-editor-cropped.png" />

Editor Create a Block slouží k návrhu signatury vlastního bloku.
Můžete přidat popisky a vstupy (například číslo/text a boolean) a potom definovat implementační logiku v definiční sekvenci.

## Proč používat My Blocks

- Znovupoužitelnost: napište jednou, volejte mnohokrát.
- Čitelnost: dlouhé opakované sekvence nahradíte jedním smysluplným názvem.
- Údržba: logiku měníte na jednom místě místo mnoha kopií.
- Struktura: velké programy rozdělíte do menších logických částí.

## Poznámky

- Vlastní bloky jsou na úrovni projektu a jsou určeny k použití v rámci stejného profilu/projektu.
- Používejte popisné názvy vyjadřující záměr, ne implementační detaily.
