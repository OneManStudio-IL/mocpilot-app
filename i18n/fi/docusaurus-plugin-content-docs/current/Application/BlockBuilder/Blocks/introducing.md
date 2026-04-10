---
id: BlocksIntroducing
title: Lohkojen esittely
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Lohkojen esittely

MOCPilot käyttää visuaalista lohkopohjaista ohjelmointijärjestelmää, joka muistuttaa Scratchia. :contentReference[oaicite:0]{index=0}  
Jokaisella lohkolla on oma tehtävänsä, ja niiden yhdistelmät määrittävät ohjaus- ja tietovirran skriptissä.  
Järjestelmä perustuu vedä-ja-pudota -logiikkaan ja Scratch-tyyliseen käyttöön, mikä tekee ohjelmien rakentamisesta helppoa ja tuttua.

:::warning Yhteensopivuushuomio
Tämä on eri lohkojärjestelmä omilla lohkoillaan ja toiminnallisuudellaan.  
MOCPilot-ohjelmat eivät ole yhteensopivia Scratch-projektien kanssa.
:::

## Lohkojen muodot ja merkitys

### Hat-lohkot

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />
  <img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />
</div>

Käynnistävät skriptin, kun tapahtuma tapahtuu. Lohkoja voi liittää vain alapuolelle.

---

### Stack-lohkot

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
</div>

Päälohkoja, jotka suorittavat toimintoja.

---

### C-lohkot

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />
</div>

C-muotoisia lohkoja, jotka sisältävät muita lohkoja (silmukat ja ehdot).

---

### Reporter-lohkot

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />
</div>

Palauttavat arvoja, kuten numeroita tai tekstiä.

---

### Boolean-lohkot

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />
</div>

Palauttavat arvon `true` tai `false`, käytetään ehdoissa.

---

### Cap-lohkot

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />
</div>

Päättävät skriptin eikä niiden alle voi liittää lohkoja.

---

### Lohkopino

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks_stack.svg')} alt="blocks_stack.svg" />
</div>

Lohkopino on yhdistettyjen lohkojen ketju, joka suoritetaan ylhäältä alas yhtenä kokonaisuutena.

---

## Skriptin suoritusmalli

- Skripti alkaa yleensä tapahtumalohkosta.
- Lohkot suoritetaan ylhäältä alas.
- Useita skriptejä voi toimia samanaikaisesti.
- Viestilohkoja käytetään synkronointiin.
- Lohkopino on yhdistetty lohkojen ketju.

## Data ja arvot

- Reporter-lohkoja voidaan käyttää muiden lohkojen sisällä.
- Muuttujat tallentavat arvoja.
- Listat tallentavat järjestettyjä kokoelmia.

## Tapahtumat ja ajoitus

- Tapahtumat reagoivat syötteisiin ja tilamuutoksiin.
- Anturi- ja ajastintapahtumat voivat tapahtua usein.
- Käytä suodattimia tai viiveitä hälyn vähentämiseksi.

## Hub, portit ja ohjaimet

- Hub-lohkot ohjaavat laitetta ja portteja.
- Osa lohkoista toimii vain tietyillä laitteilla.
- Dashboard- ja peliohjainlohkot tarjoavat käyttöliittymän syötteet.

## Suositeltu työnkulku

1. Aloita yhdellä tapahtumalohkolla.
2. Testaa moottorit ja anturit.
3. Erota toistuva logiikka.
4. Lisää suojaukset ennen viimeistelyä.

## Yleiset virheet

- Ei aloituslohkoa → skripti ei käynnisty.
- Väärä portti → ei vaikutusta.
- Väärät tietotyypit → virheellinen logiikka.
- Liian usein laukeavat tapahtumat → epävakaus.

## Dokumentaation rakenne

Käytä sivuja tässä järjestyksessä:

- Valo
- Moottorit
- Sensorit
- Tapahtumat
- Ohjaus
- Operaattorit
- Muuttujat
- Listat
- Omat lohkot
- Ohjauspaneelin ohjaimet
- Peliohjain