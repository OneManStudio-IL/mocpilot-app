---
id: MyBlocks
title: Mijn blokken
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Mijn blokken

Met Mijn blokken kun je je eigen herbruikbare blokken definiëren.  
Deze categorie is conceptueel vergelijkbaar met het maken van een functie in traditionele programmeertalen: definieer gedrag één keer en roep het daarna meerdere keren aan.

## Basis Mijn blokken

### `Maak een blok`

Maakt een nieuwe aangepaste blokdefinitie.

- Type: definitie-/instelblok
- Typisch gebruik: herhaalde logica groeperen in één benoemd blok

### `MijnBlok` (aanroepblok)

Roept een eerder aangemaakt aangepast blok aan.

- Type: stapelblok (aangepaste opdracht-aanroep)
- Typisch gebruik: dezelfde logica op meerdere plaatsen hergebruiken zonder blokstapels te dupliceren

## Variadische voorbeelden

Deze voorbeelden tonen aangepaste Mijn blokken met verschillende argumentstructuren.

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758091855.svg')} alt="block_myblock_1775758091855.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758113259.svg')} alt="block_myblock_1775758113259.svg" />
</div>

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758130609.svg')} alt="block_myblock_1775758130609.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758145135.svg')} alt="block_myblock_1775758145135.svg" />
</div>

## Voorbeeldgebruik in een programmastapel

<img src={useBaseUrl('/img/my-blocks/my-blocks-usage-example.png')} alt="my-blocks-usage-example.png" />

Dit voorbeeld toont een aangepaste blokaanroep onder `wanneer programma start`, terwijl de `definieer mijn blok`-stapel de herbruikbare motorlogica bevat.

- Typische flow: aangepaste blokken aanroepen vanuit gebeurtenisstapels  
- Voordeel: één definitie, meerdere aanroeppunten  

## Mijn blok-editorweergave

<img src={useBaseUrl('/img/my-blocks/my-blocks-editor-cropped.png')} alt="my-blocks-editor-cropped.png" />

De editor *Maak een blok* wordt gebruikt om de signatuur van je aangepaste blok te ontwerpen.  
Je kunt labels en invoervelden toevoegen (bijvoorbeeld getal/tekst en boolean), en daarna de implementatielogica definiëren in de blokdefinitiestapel.

## Waarom Mijn blokken gebruiken

- Herbruikbaarheid: één keer schrijven, meerdere keren gebruiken  
- Leesbaarheid: vervang lange herhaalde blokken door één betekenisvolle naam  
- Onderhoudbaarheid: logica op één plek aanpassen in plaats van meerdere kopieën  
- Structuur: grote programma’s opsplitsen in kleinere logische onderdelen  

## Opmerkingen

- Aangepaste blokken zijn projectgebonden en bedoeld voor hergebruik binnen dezelfde profiel-/projectcontext.  
- Gebruik bij voorkeur beschrijvende namen die de bedoeling uitleggen, niet de implementatiedetails.