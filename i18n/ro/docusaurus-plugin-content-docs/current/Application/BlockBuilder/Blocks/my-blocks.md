---
id: MyBlocks
title: Blocurile mele
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Blocurile mele

Blocurile mele îți permit să definești propriul bloc personalizat reutilizabil.  
Această categorie este similară conceptual cu crearea unei funcții în programarea tradițională: definești comportamentul o dată, apoi îl apelezi de mai multe ori.

## Blocuri principale My Blocks

### `Creează un bloc`

Creează o nouă definiție de bloc personalizat.

- Tip: bloc de definire/configurare
- Utilizare tipică: gruparea logicii repetitive într-un singur bloc cu nume

### `MyBlock` (bloc de apel)

Apelează un bloc personalizat creat anterior.

- Tip: bloc de tip stack (apel comandă personalizată)
- Utilizare tipică: reutilizarea aceleiași logici în mai multe locuri fără duplicarea blocurilor

## Exemple variadice

Aceste exemple arată blocuri My Blocks personalizate cu diferite semnături de argumente.

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758091855.svg')} alt="block_myblock_1775758091855.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758113259.svg')} alt="block_myblock_1775758113259.svg" />
</div>

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758130609.svg')} alt="block_myblock_1775758130609.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758145135.svg')} alt="block_myblock_1775758145135.svg" />
</div>

## Exemplu de utilizare în stivă de program

<img src={useBaseUrl('/img/my-blocks/my-blocks-usage-example.png')} alt="my-blocks-usage-example.png" />

Acest exemplu arată un apel de bloc personalizat atașat sub `când programul pornește`, în timp ce stiva `definește blocul meu` conține logica reutilizabilă pentru motor.

- Flux tipic: apelarea blocului personalizat din stivele de evenimente
- Beneficiu: o definiție, multiple locuri de apel

## Vizualizare editor My Block

<img src={useBaseUrl('/img/my-blocks/my-blocks-editor-cropped.png')} alt="my-blocks-editor-cropped.png" />

Editorul „Creează un bloc” este utilizat pentru a proiecta semnătura blocului personalizat.  
Poți adăuga etichete și intrări (de exemplu, număr/text și boolean), apoi defini logica în stiva de definire a blocului.

## De ce să folosești My Blocks

- Reutilizare: scrii o dată, folosești de multe ori.
- Lizibilitate: înlocuiește stive lungi cu un nume clar.
- Mentenanță: modifici logica într-un singur loc.
- Structură: împarți programele mari în unități logice mai mici.

## Note

- Blocurile personalizate sunt la nivel de proiect și sunt destinate reutilizării în același context.
- Folosește nume descriptive care exprimă intenția, nu detalii de implementare.