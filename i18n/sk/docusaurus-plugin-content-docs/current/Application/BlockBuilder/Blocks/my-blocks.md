---
id: MyBlocks
title: Moje bloky
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Moje bloky

Moje bloky umožňujú definovať vlastné opakovane použiteľné bloky.
Táto kategória je konceptuálne podobná vytváraniu funkcií v tradičnom programovaní: definuj správanie raz a potom ho používaj viackrát.

## Základné bloky Moje bloky

### `Vytvor blok`

Vytvorí novú definíciu vlastného bloku.

- Typ: definičný/nastavovací blok  
- Typické použitie: zoskupenie opakovanej logiky do jedného pomenovaného bloku  

### `Môj blok` (blok volania)

Volá predtým vytvorený vlastný blok.

- Typ: stack blok (volanie vlastného príkazu)  
- Typické použitie: opätovné použitie rovnakej logiky na viacerých miestach bez duplikovania blokov  

## Variadické príklady

Tieto príklady ukazujú vlastné bloky s rôznymi podpismi argumentov.

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758091855.svg')} alt="block_myblock_1775758091855.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758113259.svg')} alt="block_myblock_1775758113259.svg" />
</div>

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758130609.svg')} alt="block_myblock_1775758130609.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758145135.svg')} alt="block_myblock_1775758145135.svg" />
</div>

## Príklad použitia v programovom bloku

<img src={useBaseUrl('/img/my-blocks/my-blocks-usage-example.png')} alt="my-blocks-usage-example.png" />

Tento príklad ukazuje volanie vlastného bloku pripojené pod `keď sa program spustí`, zatiaľ čo zásobník `definuj môj blok` obsahuje opakovane použiteľnú logiku motora.

- Typický tok: volanie vlastného bloku z blokov udalostí  
- Výhoda: jedna definícia, viacero miest použitia  

## Zobrazenie editora Moje bloky

<img src={useBaseUrl('/img/my-blocks/my-blocks-editor-cropped.png')} alt="my-blocks-editor-cropped.png" />

Editor „Vytvor blok“ sa používa na návrh podpisu vlastného bloku.  
Môžeš pridať popisy a vstupy (napríklad číselné/textové a boolean vstupy) a následne definovať implementačnú logiku v zásobníku definície bloku.

## Prečo používať Moje bloky

- Znovupoužiteľnosť: napíš raz, použi viackrát.  
- Čitateľnosť: nahraď dlhé opakované sekvencie jedným zrozumiteľným názvom.  
- Udržiavateľnosť: aktualizuj logiku na jednom mieste namiesto viacerých kópií.  
- Štruktúra: rozdeľ veľké programy na menšie logické celky.  

## Poznámky

- Vlastné bloky sú viazané na projekt a sú určené na použitie v rámci rovnakého profilu/projektu.  
- Používaj výstižné názvy, ktoré vyjadrujú účel, nie implementačné detaily.  