---
id: MyBlocks
title: Mine Blokke
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Mine blokke

Mine blokke giver dig mulighed for at definere dine egne genanvendelige blokke.
Denne kategori svarer konceptuelt til at oprette en funktion i traditionel programmering: definér adfærd én gang, og kald den mange gange.

## Grundlæggende Mine blokke

### `Lav en blok`

Opretter en ny brugerdefineret blokdefinition.

- Type: definitions-/opsætningsblok
- Typisk brug: samle gentaget logik i én navngiven blok

### `Min blok` (kald-blok)

Kalder en tidligere oprettet brugerdefineret blok.

- Type: stack-blok (brugerdefineret kommando-kald)
- Typisk brug: genbruge den samme logik flere steder uden at duplikere blokke

## Variadiske eksempler

Disse eksempler viser brugerdefinerede Mine blokke med forskellige argument-signaturer.

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758091855.svg')} alt="block_myblock_1775758091855.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758113259.svg')} alt="block_myblock_1775758113259.svg" />
</div>

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758130609.svg')} alt="block_myblock_1775758130609.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758145135.svg')} alt="block_myblock_1775758145135.svg" />
</div>

## Eksempel på brug i programstak

<img src={useBaseUrl('/img/my-blocks/my-blocks-usage-example.png')} alt="my-blocks-usage-example.png" />

Dette eksempel viser et kald til en brugerdefineret blok under `når programmet starter`, mens stakken `definér min blok` indeholder den genanvendelige motorlogik.

- Typisk flow: kald brugerdefineret blok fra event-stakke
- Fordel: én definition, mange kaldesteder

## Mine blokke editor-visning

<img src={useBaseUrl('/img/my-blocks/my-blocks-editor-cropped.png')} alt="my-blocks-editor-cropped.png" />

Editoren **Lav en blok** bruges til at designe signaturen for din brugerdefinerede blok.
Du kan tilføje labels og inputs (for eksempel tal/tekst og boolske inputs) og derefter definere implementeringslogik i blokdefinitions-stakken.

## Hvorfor bruge Mine blokke

- Genanvendelighed: skriv én gang, brug mange gange.
- Læsbarhed: erstat lange gentagne blokke med ét meningsfuldt navn.
- Vedligeholdelse: opdatér logik ét sted i stedet for mange kopier.
- Struktur: opdel store programmer i mindre logiske enheder.

## Brugsnoter

- Brugerdefinerede blokke er på projektniveau og beregnet til genbrug inden for samme profil-/projektkontekst.
- Brug beskrivende navne, der forklarer formålet, ikke implementeringsdetaljer.