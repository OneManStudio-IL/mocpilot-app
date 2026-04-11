---
id: BlocksIntroducing
title: Wprowadzenie do bloków
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Wprowadzenie do bloków

MOCPilot wykorzystuje wizualny system programowania blokowego, który wygląda i działa podobnie do Scratcha.  
Każdy blok ma określoną rolę, a poprawne ich łączenie definiuje przepływ sterowania i danych w skrypcie.  
System opiera się na logice przeciągnij-i-upuść oraz interakcjach podobnych do Scratcha, zapewniając wygodny i znajomy sposób tworzenia programów.

:::warning Informacja o kompatybilności
Jest to inny system bloków z własnym zestawem i zachowaniem.  
Programy MOCPilot nie są kompatybilne z projektami Scratch: nie można importować programów MOCPilot do Scratcha ani projektów Scratch do MOCPilot.
:::

## Kształty bloków i ich znaczenie

### Bloki startowe

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />
  <img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />
</div>

Rozpoczynają skrypt, gdy wystąpi określone zdarzenie. Bloki mogą być dołączane tylko poniżej.

---

### Bloki poleceń

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
</div>

Główne bloki poleceń wykonujące akcje.

---

### Bloki C

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />
</div>

Bloki sterujące w kształcie litery C, które zawierają zagnieżdżone stosy bloków (pętle/warunki).

---

### Bloki raportujące

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />
</div>

Zwracają wartości, takie jak liczby lub tekst.

---

### Bloki logiczne

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />
</div>

Zwracają tylko `true` lub `false`, zazwyczaj używane w warunkach.

---

### Bloki kończące

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />
</div>

Kończą skrypt i nie pozwalają na dodanie bloków poniżej.

---

### Stos bloków

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks_stack.svg')} alt="blocks_stack.svg" />
</div>

Stos bloków to sekwencja połączonych bloków, która działa jako jeden przepływ skryptu od góry do dołu.  
Zwykle zaczyna się od bloku zdarzenia, a następnie wykonuje podłączone bloki w kolejności.

---

## Model wykonywania skryptu

- Skrypt zwykle zaczyna się od bloku zdarzenia.
- Połączone bloki wykonywane są od góry do dołu.
- Wiele skryptów może działać równolegle.
- Bloki wiadomości (broadcast) służą do synchronizacji skryptów.
- Stos bloków to sekwencja połączonych bloków.

## Dane i wartości

- Bloki raportujące mogą być zagnieżdżane w polach wejściowych poleceń i warunków.
- Zmienne przechowują wartości używane wielokrotnie w blokach i skryptach.
- Listy przechowują uporządkowane kolekcje danych (historia, kolejki, wyszukiwanie).

## Zdarzenia i czas

- Bloki zdarzeń reagują na działania użytkownika, stan huba, czujniki lub wiadomości.
- Zdarzenia oparte na czasie i czujnikach mogą być wyzwalane bardzo często.
- Używaj progów, filtrowania lub krótkich opóźnień, aby ograniczyć nadmiar wywołań.

## Hub, porty i kontrolery

- Bloki huba odnoszą się do kontekstu huba i portów.
- Niektóre bloki są dostępne tylko dla określonych rodzin hubów/urządzeń.
- Bloki pulpitu i gamepada zapewniają wejście użytkownika i kontrolę UI w czasie działania.

## Zalecany workflow

1. Zacznij od jednego bloku zdarzenia i prostego skryptu.
2. Wcześnie sprawdź kierunki i zakresy silników/czujników.
3. Wydziel powtarzalną logikę za pomocą komunikatów i pomocniczych skryptów.
4. Dodaj zabezpieczenia (limity, zatrzymania, wartości zapasowe) przed finalnym dostrojeniem.

## Typowe błędy

- Brak bloku zdarzenia powoduje, że skrypt nigdy się nie uruchomi.
- Nieprawidłowy wybór huba/portu powoduje brak efektu.
- Mieszanie typów wartości (tekst/liczba/boolean) może powodować błędy logiczne.
- Zdarzenia o wysokiej częstotliwości bez filtrowania mogą przeciążyć działanie.

## Struktura dokumentacji w tej sekcji

Używaj stron kategorii w następującej kolejności:

- Światło
- Silniki
- Czujniki
- Zdarzenia
- Sterowanie
- Operatory
- Zmienne
- Listy
- Moje bloki
- Kontrolery pulpitu
- Gamepad