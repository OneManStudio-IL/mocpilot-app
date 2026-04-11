---
id: MyBlocks
title: Mine blokker
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Mine blokker

Mine blokker lar deg definere dine egne tilpassede gjenbrukbare blokker.  
Denne kategorien ligner konseptuelt på å lage en funksjon i tradisjonell programmering: definer oppførsel én gang, og bruk den mange ganger.

## Grunnleggende Mine blokker

### `Lag en blokk`

Oppretter en ny tilpasset blokkdefinisjon.

- Type: definisjons-/oppsettblokk
- Typisk bruk: samle gjentatt logikk i én navngitt blokk

### `Min blokk` (kallblokk)

Kaller en tidligere opprettet tilpasset blokk.

- Type: stabelblokk (tilpasset kommando)
- Typisk bruk: gjenbruke samme logikk flere steder uten å duplisere blokkstabler

## Variadiske eksempler

Disse eksemplene viser tilpassede blokker med ulike argumenttyper.

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758091855.svg')} alt="block_myblock_1775758091855.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758113259.svg')} alt="block_myblock_1775758113259.svg" />
</div>

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758130609.svg')} alt="block_myblock_1775758130609.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758145135.svg')} alt="block_myblock_1775758145135.svg" />
</div>

## Eksempel på bruk i programstabel

<img src={useBaseUrl('/img/my-blocks/my-blocks-usage-example.png')} alt="my-blocks-usage-example.png" />

Dette eksemplet viser et kall til en tilpasset blokk under `når programmet starter`, mens `definer min blokk`-stabelen inneholder gjenbrukbar motorlogikk.

- Typisk flyt: kall tilpassede blokker fra hendelsesstabler
- Fordel: én definisjon, mange kallesteder

## Redigeringsvisning for Mine blokker

<img src={useBaseUrl('/img/my-blocks/my-blocks-editor-cropped.png')} alt="my-blocks-editor-cropped.png" />

Redigereren for `Lag en blokk` brukes til å designe signaturen til din tilpassede blokk.  
Du kan legge til etiketter og inputfelt (for eksempel tall/tekst og boolske input), og deretter definere implementasjonslogikk i blokkdefinisjonen.

## Hvorfor bruke Mine blokker

- Gjenbruk: skriv én gang, bruk mange ganger  
- Lesbarhet: erstatt lange gjentatte blokker med ett meningsfullt navn  
- Vedlikehold: oppdater logikk på ett sted i stedet for mange kopier  
- Struktur: del opp store programmer i mindre logiske enheter  

## Merknader

- Tilpassede blokker er prosjektbaserte og ment for gjenbruk innen samme profil/prosjekt.  
- Foretrekk beskrivende navn som forklarer hensikt, ikke implementasjonsdetaljer.