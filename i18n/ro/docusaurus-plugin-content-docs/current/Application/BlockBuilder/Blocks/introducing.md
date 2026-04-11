---
id: BlocksIntroducing
title: Introducere în blocuri
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Introducere în blocuri

MOCPilot utilizează un sistem de programare vizuală bazat pe blocuri, similar ca aspect și comportament cu Scratch.
Fiecare bloc are un rol specific, iar combinațiile valide definesc fluxul de control și fluxul de date într-un script.  
Sistemul folosește logică drag-and-drop și modele de interacțiune similare cu Scratch pentru a oferi un mod convenabil și familiar de a construi programe.

:::warning Notă de compatibilitate
Acesta este un sistem diferit de blocuri, cu propriul set de blocuri și comportament.  
Programele MOCPilot nu sunt compatibile cu proiectele Scratch: programele MOCPilot nu pot fi importate în Scratch, iar programele Scratch nu pot fi importate în MOCPilot.
:::

## Forme de blocuri și semnificația lor

### Blocuri Hat

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />
  <img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />
</div>

Pornește un script atunci când apare un anumit eveniment. Blocurile pot fi atașate doar dedesubt.

---

### Blocuri Stack

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
</div>

Blocuri principale de comandă care execută acțiuni.

---

### Blocuri C

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />
</div>

Blocuri de control în formă de C care conțin stive de blocuri imbricate (bucle/condiții).

---

### Blocuri Reporter

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />
</div>

Returnează valori precum numere sau șiruri de caractere.

---

### Blocuri Booleene

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />
</div>

Returnează doar `true` sau `false`, utilizate de obicei în condiții.

---

### Blocuri Cap

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />
</div>

Încheie scripturile și nu permit atașarea altor blocuri dedesubt.

---

### Stivă de blocuri

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks_stack.svg')} alt="blocks_stack.svg" />
</div>

O stivă de blocuri este o secvență de blocuri conectate care rulează ca un singur flux de script de sus în jos.  
Stivele încep de obicei cu un bloc de eveniment și apoi execută blocurile atașate în ordine.

---

## Modelul de execuție al scriptului

- Un script începe de obicei de la un bloc de eveniment.
- Blocurile conectate se execută de sus în jos.
- Mai multe scripturi pot rula în paralel.
- Blocurile de mesaj/broadcast sunt utilizate pentru sincronizarea scripturilor.
- O stivă de blocuri este o secvență de blocuri conectate între ele.

## Date și valori

- Blocurile reporter pot fi imbricate în intrările blocurilor de comandă sau condiții.
- Variabilele stochează valori reutilizabile între blocuri și scripturi.
- Listele stochează colecții ordonate pentru istoric, cozi și date de tip lookup.

## Evenimente și temporizare

- Blocurile de eveniment reacționează la inputul utilizatorului, starea hub-ului, senzori sau mesaje.
- Evenimentele bazate pe timer și senzori pot fi declanșate frecvent.
- Folosește praguri, filtrare sau mici întârzieri pentru a reduce declanșările repetitive.

## Hub, porturi și controlere

- Blocurile de hub țintesc contextul hub-ului și al porturilor.
- Unele blocuri sunt disponibile doar pentru anumite familii de hub-uri/dispozitive.
- Blocurile de dashboard și gamepad oferă input în runtime și control UI.

## Flux de lucru recomandat

1. Începe cu un bloc de eveniment și un script minim.
2. Verifică direcția și intervalele motoarelor/senzorilor din timp.
3. Extrage logica repetitivă folosind mesaje și scripturi auxiliare.
4. Adaugă măsuri de siguranță (limite, opriri, valori fallback) înainte de reglajul final.

## Capcane frecvente

- Lipsa unui bloc de eveniment înseamnă că scriptul nu pornește.
- Selectarea greșită a hub-ului/portului duce la lipsa efectului vizibil.
- Amestecarea tipurilor de valori (text/număr/boolean) poate produce logică invalidă.
- Evenimentele cu frecvență mare fără filtrare pot supraîncărca comportamentul.

## Structura documentației în această secțiune

Folosește paginile de categorie în această ordine:

- Lumină
- Motoare
- Senzori
- Evenimente
- Control
- Operatori
- Variabile
- Liste
- Blocurile mele
- Controale Dashboard
- Gamepad