---
id: MyBlocks
title: Moje bloki
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Moje bloki

Moje bloki pozwalają definiować własne, wielokrotnego użytku bloki.  
Ta kategoria jest koncepcyjnie podobna do tworzenia funkcji w tradycyjnym programowaniu: definiujesz działanie raz, a następnie wywołujesz je wielokrotnie.

## Podstawowe bloki My Blocks

### `Utwórz blok`

Tworzy nową definicję własnego bloku.

- Typ: blok definicji/konfiguracji
- Typowe użycie: grupowanie powtarzalnej logiki w jednym nazwanym bloku

### `MyBlock` (blok wywołania)

Wywołuje wcześniej utworzony blok niestandardowy.

- Typ: blok stosu (wywołanie własnego polecenia)
- Typowe użycie: ponowne wykorzystanie tej samej logiki w wielu miejscach bez duplikowania bloków

## Przykłady wariantów

Te przykłady pokazują własne bloki z różnymi zestawami argumentów.

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758091855.svg')} alt="block_myblock_1775758091855.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758113259.svg')} alt="block_myblock_1775758113259.svg" />
</div>

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758130609.svg')} alt="block_myblock_1775758130609.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758145135.svg')} alt="block_myblock_1775758145135.svg" />
</div>

## Przykład użycia w stosie programu

<img src={useBaseUrl('/img/my-blocks/my-blocks-usage-example.png')} alt="my-blocks-usage-example.png" />

Ten przykład pokazuje wywołanie własnego bloku pod `gdy program się uruchomi`, podczas gdy stos `definiuj mój blok` zawiera logikę wielokrotnego użycia (np. sterowanie silnikiem).

- Typowy przepływ: wywoływanie bloków własnych z poziomu bloków zdarzeń
- Zaleta: jedna definicja, wiele miejsc użycia

## Widok edytora My Blocks

<img src={useBaseUrl('/img/my-blocks/my-blocks-editor-cropped.png')} alt="my-blocks-editor-cropped.png" />

Edytor „Utwórz blok” służy do projektowania sygnatury własnego bloku.  
Możesz dodawać etykiety i pola wejściowe (np. liczby/tekst oraz wartości logiczne), a następnie zdefiniować logikę działania w stosie definicji bloku.

## Dlaczego warto używać My Blocks

- Wielokrotne użycie: napisz raz, używaj wiele razy.
- Czytelność: zastąp długie powtarzalne sekwencje jednym znaczącym blokiem.
- Łatwość utrzymania: aktualizuj logikę w jednym miejscu zamiast wielu kopii.
- Struktura: dziel duże programy na mniejsze logiczne części.

## Uwagi

- Własne bloki są dostępne na poziomie projektu i przeznaczone do użycia w ramach tego samego profilu/projektu.
- Preferuj opisowe nazwy, które wyjaśniają cel, a nie szczegóły implementacji.