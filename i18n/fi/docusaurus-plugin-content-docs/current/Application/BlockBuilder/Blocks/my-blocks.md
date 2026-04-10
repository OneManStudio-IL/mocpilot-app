---
id: MyBlocks
title: Omat lohkot
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Omat lohkot

Omat lohkot mahdollistavat omien uudelleenkäytettävien lohkojen määrittelyn.  
Tämä kategoria vastaa perinteisen ohjelmoinnin funktioita: määrittele toiminta kerran ja käytä sitä useita kertoja.

## Omat lohkot -perustoiminnot

### `Luo lohko`

Luo uuden mukautetun lohkon määritelmän.

- Tyyppi: määrittely/asetuslohko
- Tyypillinen käyttö: ryhmitellä toistuva logiikka yhdeksi nimetyksi lohkoksi

### `Oma lohko` (kutsulohko)

Kutsuu aiemmin luodun mukautetun lohkon.

- Tyyppi: pinolohko (mukautetun komennon kutsu)
- Tyypillinen käyttö: käyttää samaa logiikkaa useissa paikoissa ilman lohkojen kopiointia

## Muuttuvaparametriset esimerkit

Nämä esimerkit näyttävät mukautettuja lohkoja erilaisilla argumenteilla.

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758091855.svg')} alt="block_myblock_1775758091855.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758113259.svg')} alt="block_myblock_1775758113259.svg" />
</div>

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758130609.svg')} alt="block_myblock_1775758130609.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758145135.svg')} alt="block_myblock_1775758145135.svg" />
</div>

## Esimerkki käytöstä ohjelmapinossa

<img src={useBaseUrl('/img/my-blocks/my-blocks-usage-example.png')} alt="my-blocks-usage-example.png" />

Tässä esimerkissä mukautetun lohkon kutsu on liitetty lohkon `kun ohjelma käynnistyy` alle, kun taas `määrittele oma lohko` -pino sisältää uudelleenkäytettävän moottorilogiikan.

- Tyypillinen kulku: kutsu mukautettua lohkoa tapahtumapinoista
- Hyöty: yksi määrittely, monta käyttökertaa

## Omat lohkot -editori

<img src={useBaseUrl('/img/my-blocks/my-blocks-editor-cropped.png')} alt="my-blocks-editor-cropped.png" />

**Luo lohko** -editoria käytetään lohkon rakenteen suunnitteluun.  
Voit lisätä otsikoita ja syötteitä (esim. numero/teksti ja boolean-arvot), ja määrittää toteutuslogiikan lohkon määrittelypinossa.

## Miksi käyttää omia lohkoja

- Uudelleenkäytettävyys: kirjoita kerran, käytä monta kertaa.
- Luettavuus: korvaa pitkät lohkot yhdellä selkeällä nimellä.
- Ylläpidettävyys: päivitä logiikka yhdessä paikassa.
- Rakenne: jaa suuret ohjelmat pienempiin osiin.

## Käyttöhuomiot

- Mukautetut lohkot ovat projektikohtaisia ja tarkoitettu käytettäväksi samassa projektissa.
- Käytä kuvaavia nimiä, jotka selittävät tarkoituksen, eivät toteutusta.