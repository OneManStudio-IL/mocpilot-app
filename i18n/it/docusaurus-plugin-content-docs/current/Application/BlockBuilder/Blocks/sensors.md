---
id: Sensors
title: Sensori
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Sensori

I blocchi sensore leggono lo stato di hub/dispositivo e forniscono dati per condizioni, eventi e logica di controllo.

## Sensori del dispositivo e dell'hub

### `Livello batteria hub` {#block_hubs_all_sensors_battery_level}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_battery_level.svg')} alt="block_hubs_all_sensors_battery_level.svg" />
Restituisce il livello attuale della batteria dell'hub.

### `Batteria % dispositivo` {#block_sensors_device_battery_level}
<img src={useBaseUrl('/img/blocks/block_sensors_device_battery_level.svg')} alt="block_sensors_device_battery_level.svg" />
Restituisce il livello attuale della batteria del telefono/tablet che esegue MOCPilot (in percentuale).

### `Temperatura scheda` {#block_hubs_all_sensors_board_temp}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_board_temp.svg')} alt="block_hubs_all_sensors_board_temp.svg" />
Restituisce la temperatura della scheda dell'hub.

- Disponibile solo per `BuWizz 2` e `BuWizz 3`.

### `Pulsante premuto` {#block_hubs_all_sensors_button_pressed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_button_pressed.svg?v=20260409-2258')} alt="block_hubs_all_sensors_button_pressed.svg" />
Verifica se un pulsante dell'hub selezionato corrisponde allo stato selezionato.

- Opzioni stato: `premuto`, `rilasciato`
- Opzione pulsante tipica: `centro` (dipende dall'hub)

- Nota: le opzioni disponibili per i pulsanti possono variare in base al modello di hub (hub diversi possono esporre set di pulsanti diversi).

### `Tipo dispositivo` {#block_hubs_all_motors_port_device_type}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_device_type.svg')} alt="block_hubs_all_motors_port_device_type.svg" />
Restituisce il tipo di dispositivo collegato alla porta selezionata.

- Tipo: blocco reporter
- Uso tipico: rilevare quale dispositivo è collegato prima di eseguire logica specifica per dispositivo

### `Accelerometro dispositivo` {#block_sensors_device_accelerometer_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_accelerometer_sensor_data.svg')} alt="block_sensors_device_accelerometer_sensor_data.svg" />
Restituisce i valori grezzi dell'accelerometro dai sensori del dispositivo.

- Opzioni asse: `x`, `y`, `z`

### `Accelerazione dispositivo` {#block_sensors_device_acceleration_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_acceleration_sensor_data.svg')} alt="block_sensors_device_acceleration_sensor_data.svg" />
Restituisce i dati di accelerazione dai sensori del dispositivo.

- Opzioni asse: `x`, `y`, `z`

## Sensori di orientamento e inclinazione

### `Inclinazione` {#block_hubs_all_sensors_tilt}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_tilt.svg')} alt="block_hubs_all_sensors_tilt.svg" />
Restituisce l'angolo di inclinazione per l'asse selezionato.

- Opzioni asse: `beccheggio`, `rollio`, `imbardata`
- Nota: `imbardata` è disponibile solo sugli hub che forniscono dati di imbardata.

### `Ottieni orientamento` {#block_hubs_sensors_get_orientation}
<img src={useBaseUrl('/img/blocks/block_hubs_sensors_get_orientation.svg')} alt="block_hubs_sensors_get_orientation.svg" />
Restituisce lo stato di orientamento attuale dell'hub.

- Opzioni formato output: `testo`, `indice`
- Valori orientamento: `Davanti`, `Superiore`, `Destra`, `Posteriore`, `Fondo`, `Sinistra`

### `Orientamento verso l'alto` {#block_hubs_all_sensors_is_orientation_up}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_orientation_up.svg')} alt="block_hubs_all_sensors_is_orientation_up.svg" />
Verifica se l'orientamento dell'hub corrisponde all'orientamento selezionato come "verso l'alto".

- Opzioni orientamento: `Davanti`, `Superiore`, `Destra`, `Posteriore`, `Fondo`, `Sinistra`

### `Imposta orientamento inclinazione` {#block_hubs_sensors_set_tilt_orientation}
<img src={useBaseUrl('/img/blocks/block_hubs_sensors_set_tilt_orientation.svg')} alt="block_hubs_sensors_set_tilt_orientation.svg" />
Configura il riferimento di orientamento usato dai blocchi legati a inclinazione/orientamento.

- Opzioni orientamento: `Davanti`, `Superiore`, `Destra`, `Posteriore`, `Fondo`, `Sinistra`

## Timer e sensori di movimento del dispositivo

### `Timer` {#block_sensors_timer_value_float}
<img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
Restituisce il valore del timer in secondi.

### `Azzera timer` {#block_sensors_timer_reset}
<img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
Azzera il timer.

## Blocchi sensore per porta

### `Sensore distanza Technic` {#block_hubs_all_sensors_port_technic_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_distance.svg')} alt="block_hubs_all_sensors_port_technic_sensor_distance.svg" />
Restituisce i valori di distanza da un sensore di distanza Technic.

- Opzioni unità: `mm`, `cm`, `pollici`, `%`

### `Technic quando la distanza e` {#block_hubs_all_sensors_port_technic_sensor_when_distance_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg" />
Attiva/verifica una condizione di distanza per un sensore di distanza Technic.

- Opzioni confronto: `più vicino di`, `più lontano di`, `esattamente a`
- Opzioni unità: `mm`, `cm`, `pollici`, `%`

### `Technic imposta modalità sensore colore` {#block_hubs_all_sensors_port_technic_sensor_set_mode}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_set_mode.svg')} alt="block_hubs_all_sensors_port_technic_sensor_set_mode.svg" />
Questo blocco imposta il sensore di colore Technic sulla modalità selezionata.

- Nota: Cambiare la modalità del sensore di colore può influire sul tuo programma in modi inaspettati. Ad esempio, il sensore di colore Technic non può leggere i colori o la luce riflessa quando è in modalità `"ambientale"`.

### `Valore sensore colore Technic` {#block_hubs_all_sensors_port_technic_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_color.svg" />
Restituisce il valore colore rilevato da un sensore di distanza Technic.

- Opzioni output: `valore`, `stringa`

### `Technic quando il colore e` {#block_hubs_all_sensors_port_technic_sensor_when_color_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_color_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_color_is.svg" />
Attiva/verifica quando il colore rilevato corrisponde al colore selezionato.

### `Luce riflessa Technic` {#block_hubs_all_sensors_port_technic_sensor_reflected_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_reflected_light.svg" />
Restituisce l'intensità della luce riflessa.

### `Technic quando la luce riflessa e` {#block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg" />
Attiva/verifica una condizione di soglia della luce riflessa.

- Opzioni confronto: `<`, `=`, `>`

### `Luce ambientale Technic` {#block_hubs_all_sensors_port_technic_sensor_ambient_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_ambient_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_ambient_light.svg" />
Restituisce l'intensità della luce ambientale.

### `Technic quando la luce ambientale e` {#block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is.svg" />
Attiva/verifica una condizione di soglia della luce ambientale.

- Opzioni confronto: `<`, `=`, `>`

### `Colore grezzo Technic` {#block_hubs_all_sensors_port_technic_sensor_raw_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_raw_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_raw_color.svg" />
Restituisce il valore grezzo del canale colore dal sensore Technic.

- Opzioni canale: `rosso`, `verde`, `blu`

### `Sensore distanza BOOST` {#block_hubs_all_sensors_port_boost_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_distance.svg" />
Restituisce la distanza da un sensore di distanza BOOST.

- Opzioni unità: `%`, `cm`, `pollici`

### `BOOST quando la distanza e` {#block_hubs_all_sensors_port_boost_sensor_when_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_distance.svg" />
Attiva/verifica una condizione di distanza per un sensore di distanza BOOST.

- Opzioni confronto: `più vicino di`, `più lontano di`, `esattamente a`
- Opzioni unità: `%`, `cm`, `pollici`

### `Sensore colore BOOST` {#block_hubs_all_sensors_port_boost_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_color.svg" />
Restituisce il colore rilevato da un sensore BOOST.

- Opzioni output: `valore`, `stringa`

### `BOOST e colore` {#block_hubs_all_sensors_port_boost_sensor_is_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_is_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_is_color.svg" />
Verifica se il sensore BOOST rileva attualmente il colore selezionato.

### `Luce riflessa BOOST` {#block_hubs_all_sensors_port_boost_sensor_reflected_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_boost_sensor_reflected_light.svg" />
Restituisce il valore di luce riflessa dal sensore BOOST.

### `BOOST quando la luce riflessa e` {#block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg" />
Attiva/verifica una condizione di soglia della luce riflessa per il sensore BOOST.

- Opzioni confronto: `<`, `=`, `>`

### `Technic Move imposta power mode` {#block_hubs_technicmove_sensors_set_power_mode}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_sensors_set_power_mode.svg')} alt="block_hubs_technicmove_sensors_set_power_mode.svg" />
Imposta il power mode Technic Move.

- Opzioni modalita: `normale`, `boost`

### `Distanza WeDo 2` {#block_hubs_all_sensors_port_wedo2_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_sensor_distance.svg')} alt="block_hubs_all_sensors_port_wedo2_sensor_distance.svg" />
Restituisce la distanza da un sensore di distanza WeDo 2.

- Opzioni unità: `%`, `cm`, `pollici`

### `Inclinazione WeDo 2` {#block_hubs_all_sensors_port_wedo2_tilt}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_tilt.svg')} alt="block_hubs_all_sensors_port_wedo2_tilt.svg" />
Restituisce il valore di inclinazione da un sensore di inclinazione WeDo 2.

- Opzioni asse: `beccheggio`, `rollio`
