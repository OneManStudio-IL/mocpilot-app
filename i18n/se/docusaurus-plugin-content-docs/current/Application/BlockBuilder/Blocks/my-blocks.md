---
id: MyBlocks
title: Mina block
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Mina block

Mina block låter dig definiera dina egna anpassade återanvändbara block.
Den här kategorin är konceptuellt lik att skapa en funktion i traditionell programmering: definiera beteendet en gång och anropa det sedan många gånger.

## Grundläggande Mina block

### `Skapa ett block`

Skapar en ny definition av ett anpassat block.

- Typ: definitions-/inställningsblock
- Typisk användning: gruppera upprepad logik i ett namngivet block

### `MittBlock` (anropsblock)

Anropar ett tidigare skapat anpassat block.

- Typ: stackblock (anrop av anpassat kommando)
- Typisk användning: återanvänd samma logik på flera ställen utan att duplicera blockstaplar

## Variadiska exempel

Dessa exempel visar anpassade Mina block med olika argumentsignaturer.

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758091855.svg')} alt="block_myblock_1775758091855.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758113259.svg')} alt="block_myblock_1775758113259.svg" />
</div>

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758130609.svg')} alt="block_myblock_1775758130609.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758145135.svg')} alt="block_myblock_1775758145135.svg" />
</div>

## Exempel på användning i programstapel

<img src={useBaseUrl('/img/my-blocks/my-blocks-usage-example.png')} alt="my-blocks-usage-example.png" />

Detta exempel visar ett anrop till ett anpassat block som är kopplat under `när programmet startar`, medan stapeln `definiera mitt block` innehåller den återanvändbara motorlogiken.

- Typiskt flöde: anropa anpassade block från händelsestaplar
- Fördel: en definition, många anropsställen

## Vy för Mitt block-redigeraren

<img src={useBaseUrl('/img/my-blocks/my-blocks-editor-cropped.png')} alt="my-blocks-editor-cropped.png" />

Redigeraren Skapa ett block används för att utforma signaturen för ditt anpassade block.
Du kan lägga till etiketter och inmatningar (till exempel tal-/text- och booleska inmatningar) och sedan definiera implementationslogiken i blockets definitionsstapel.

## Varför använda Mina block

- Återanvändbarhet: skriv en gång, anropa många gånger.
- Läsbarhet: ersätt långa upprepade staplar med ett meningsfullt namn.
- Underhållbarhet: uppdatera logik på ett ställe i stället för i många kopior.
- Struktur: dela upp stora program i mindre logiska enheter.

## Anteckningar

- Anpassade block är på projektnivå och avsedda för återanvändning inom samma profil-/projektkontext.
- Föredra beskrivande namn som förklarar avsikten, inte implementationsdetaljer.
