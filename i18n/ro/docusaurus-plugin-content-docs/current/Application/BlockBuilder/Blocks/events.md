---
id: Events
title: Evenimente
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Evenimente

Categoria **Evenimente** conține blocuri care pornesc scripturi atunci când apare o condiție.

## Evenimente de bază

### `Când programul a pornit` {#block_event_when_program_started}

<img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />

Pornește acest script o singură dată atunci când programul profilului începe.

- Declanșator: pornirea programului
- Utilizare tipică: inițializarea variabilelor, stări implicite pentru motoare, sunete de pornire

### `Când` {#block_event_when}

<img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />

Rulează când o condiție selectată devine adevărată.

- Declanșator: bazat pe condiție
- Utilizare tipică: ramificare logică în funcție de starea din runtime

### `Când timerul este mai mare decât` {#block_event_when_timer_greater_than}

<img src={useBaseUrl('/img/blocks/block_event_when_timer_greater_than.svg')} alt="block_event_when_timer_greater_than.svg" />

Rulează când valoarea timerului depășește un prag.

- Declanșator: timp scurs
- Utilizare tipică: acțiuni întârziate, faze temporizate

### `Când mesajul este primit` {#block_event_when_message_recieved}

<img src={useBaseUrl('/img/blocks/block_event_when_message_recieved.svg')} alt="block_event_when_message_recieved.svg" />

Pornește un script când este primit un mesaj broadcast corespunzător.

- Declanșator: canal de mesaje
- Utilizare tipică: sincronizarea mai multor scripturi

### `Trimite mesaj` {#block_event_broadcast}

<img src={useBaseUrl('/img/blocks/block_event_broadcast.svg')} alt="block_event_broadcast.svg" />

Trimite un mesaj tuturor scripturilor care ascultă acel mesaj.

- Declanșator: trimitere imediată
- Utilizare tipică: notificarea altor scripturi fără a aștepta

### `Trimite mesaj și așteaptă` {#block_event_broadcast_and_wait}

<img src={useBaseUrl('/img/blocks/block_event_broadcast_and_wait.svg')} alt="block_event_broadcast_and_wait.svg" />

Trimite un mesaj și pune în pauză acest script până când ascultătorii termină.

- Declanșator: trimitere imediată + așteptare
- Utilizare tipică: fluxuri etapizate unde ordinea este importantă

## Evenimente hub

### `Buton hub apăsat` {#block_hubs_all_event_button_pressed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_button_pressed.svg')} alt="block_hubs_all_event_button_pressed.svg" />

Rulează când butonul principal de pe hub este apăsat.

- Opțiuni stare: `apăsat`, `eliberat`, `schimbat`
- Notă: opțiunile disponibile pot diferi în funcție de modelul hub-ului

### `Conexiunea hub schimbată` {#block_hubs_all_event_connection_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_connection_changed.svg')} alt="block_hubs_all_event_connection_changed.svg" />

Rulează când starea conexiunii hub-ului se schimbă (conectat sau deconectat).

- Declanșator: schimbare stare conexiune
- Utilizare tipică: gestionarea reconectării și comportament sigur după pierderea conexiunii

### `Bateria hub schimbată` {#block_hubs_all_event_battery_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_battery_changed.svg')} alt="block_hubs_all_event_battery_changed.svg" />

Rulează când nivelul bateriei raportat de hub se schimbă.

- Declanșator: actualizare nivel baterie
- Utilizare tipică: avertizări baterie scăzută și schimbare mod economisire energie

### `Accelerometrul hub schimbat` {#block_hubs_all_event_accelerometer_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_accelerometer_changed.svg')} alt="block_hubs_all_event_accelerometer_changed.svg" />

Rulează când valorile accelerației se schimbă.

### `Înclinarea hub schimbată` {#block_hubs_all_event_tilt_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_changed.svg')} alt="block_hubs_all_event_tilt_changed.svg" />

Rulează când valoarea înclinării se schimbă.

- Opțiuni unghi: `oricare`, `înclinare`, `rotire`, `derapaj`
- Notă: `derapaj` este disponibil doar pe hub-uri care oferă acest tip de date

### `Orientarea hub schimbată` {#block_hubs_all_event_tilt_orientation_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_orientation_changed.svg')} alt="block_hubs_all_event_tilt_orientation_changed.svg" />

Rulează când starea de orientare se schimbă (de exemplu: față/sus/jos/stânga/dreapta).

## Evenimente port senzori

### `Eveniment senzor culoare Technic` {#block_hubs_all_event_port_technic_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_color.svg')} alt="block_hubs_all_event_port_technic_sensor_color.svg" />

Rulează când senzorul de culoare Technic detectează o culoare selectată.

### `Eveniment senzor distanță Technic` {#block_hubs_all_event_port_technic_sensor_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_distance.svg')} alt="block_hubs_all_event_port_technic_sensor_distance.svg" />

Rulează când valorile senzorului de distanță Technic corespund condiției selectate.

- Opțiuni comparație: `mai aproape decât`, `mai departe decât`, `exact la`
- Opțiuni unitate: `mm`, `cm`, `inci`, `%`
- Notă: unitățile disponibile depind de modul senzorului și dispozitivul conectat

### `Eveniment senzor distanță BOOST` {#block_hubs_all_event_port_boost_sensor_when_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_event_port_boost_sensor_when_distance.svg" />

Rulează când senzorul de distanță BOOST atinge pragul/condiția aleasă.

- Opțiuni comparație: `mai aproape decât`, `mai departe decât`, `exact la`
- Opțiuni unitate: `%`, `cm`, `inci`

### `Eveniment senzor culoare BOOST` {#block_hubs_all_event_port_boost_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_color.svg')} alt="block_hubs_all_event_port_boost_sensor_color.svg" />

Rulează când senzorul BOOST detectează o culoare sau valoare selectată.
