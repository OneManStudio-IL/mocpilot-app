---
id: MyBlocks
title: I miei blocchi
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# I miei blocchi

I miei blocchi ti permettono di definire blocchi personalizzati riutilizzabili.
Questa categoria è concettualmente simile alla creazione di una funzione nella programmazione tradizionale: definisci il comportamento una volta e poi lo richiami molte volte.

## Blocchi principali

### `Crea un blocco`

Crea una nuova definizione di blocco personalizzato.

- Tipo: blocco di definizione/configurazione
- Utilizzo tipico: raggruppare logiche ripetute in un unico blocco con nome

### `MioBlocco` (blocco di chiamata)

Chiama un blocco personalizzato creato in precedenza.

- Tipo: blocco stack (chiamata di comando personalizzato)
- Utilizzo tipico: riutilizzare la stessa logica in più punti senza duplicare sequenze di blocchi

## Esempi variadici

Questi esempi mostrano blocchi personalizzati con diverse firme di argomenti.

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758091855.svg')} alt="block_myblock_1775758091855.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758113259.svg')} alt="block_myblock_1775758113259.svg" />
</div>

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758130609.svg')} alt="block_myblock_1775758130609.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758145135.svg')} alt="block_myblock_1775758145135.svg" />
</div>

## Esempio di utilizzo nello stack del programma

<img src={useBaseUrl('/img/my-blocks/my-blocks-usage-example.png')} alt="my-blocks-usage-example.png" />

Questo esempio mostra una chiamata a un blocco personalizzato collegata sotto `quando il programma si avvia`, mentre lo stack `definisci il mio blocco` contiene la logica riutilizzabile del motore.

- Flusso tipico: chiamare blocchi personalizzati dagli stack di eventi
- Vantaggio: una definizione, molti punti di utilizzo

## Vista editor My Block

<img src={useBaseUrl('/img/my-blocks/my-blocks-editor-cropped.png')} alt="my-blocks-editor-cropped.png" />

L’editor "Crea un blocco" viene utilizzato per progettare la firma del blocco personalizzato.  
Puoi aggiungere etichette e input (ad esempio input numerici/testo e booleani), quindi definire la logica di implementazione nello stack di definizione del blocco.

## Perché usare i miei blocchi

- Riutilizzabilità: scrivi una volta, usa molte volte.
- Leggibilità: sostituisci lunghe sequenze ripetute con un nome significativo.
- Manutenibilità: aggiorna la logica in un unico punto invece che in più copie.
- Struttura: suddividi programmi grandi in unità logiche più piccole.

## Note

- I blocchi personalizzati sono a livello di progetto e sono pensati per essere riutilizzati all’interno dello stesso contesto profilo/progetto.
- Preferisci nomi descrittivi che esprimano l’intento, non i dettagli di implementazione.