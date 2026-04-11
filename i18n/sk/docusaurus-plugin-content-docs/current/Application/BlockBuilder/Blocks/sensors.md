---
id: Sensors
title: Senzory
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Senzory

Bloky senzorov čítajú stav hubu/zariadenia a poskytujú údaje pre podmienky, udalosti a riadiacu logiku.

## Senzory zariadenia a hubu

### `Úroveň batérie hubu` {#block_hubs_all_sensors_battery_level}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_battery_level.svg')} alt="block_hubs_all_sensors_battery_level.svg" />
Vracia aktuálnu úroveň batérie hubu.

### `Batéria zariadenia %` {#block_sensors_device_battery_level}
<img src={useBaseUrl('/img/blocks/block_sensors_device_battery_level.svg')} alt="block_sensors_device_battery_level.svg" />
Vracia aktuálnu úroveň batérie telefónu/tabletu, na ktorom beží MOCPilot (v percentách).

### `Teplota dosky` {#block_hubs_all_sensors_board_temp}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_board_temp.svg')} alt="block_hubs_all_sensors_board_temp.svg" />
Vracia teplotu dosky hubu.

- Dostupné iba pre `BuWizz 2` a `BuWizz 3`.

### `Tlačidlo je stlačené` {#block_hubs_all_sensors_button_pressed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_button_pressed.svg?v=20260409-2258')} alt="block_hubs_all_sensors_button_pressed.svg" />
Kontroluje, či vybrané tlačidlo hubu zodpovedá zvolenému stavu.

- Možnosti stavu: `stlačené`, `uvoľnené`
- Typická možnosť tlačidla: `stred` (závisí od hubu)

- Poznámka: dostupné možnosti tlačidiel sa môžu líšiť podľa modelu hubu (rôzne huby môžu ponúkať rôzne sady tlačidiel).

### `Typ zariadenia` {#block_hubs_all_motors_port_device_type}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_device_type.svg')} alt="block_hubs_all_motors_port_device_type.svg" />
Vracia typ pripojeného zariadenia pre vybraný port.

- Typ: reporter blok
- Typické použitie: zistiť, aké zariadenie je pripojené, pred spustením logiky špecifickej pre dané zariadenie

### `Akcelerometer zariadenia` {#block_sensors_device_accelerometer_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_accelerometer_sensor_data.svg')} alt="block_sensors_device_accelerometer_sensor_data.svg" />
Vracia surové hodnoty akcelerometra zo senzorov zariadenia.

- Možnosti osi: `x`, `y`, `z`

### `Zrýchlenie zariadenia` {#block_sensors_device_acceleration_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_acceleration_sensor_data.svg')} alt="block_sensors_device_acceleration_sensor_data.svg" />
Vracia údaje o zrýchlení zo senzorov zariadenia.

- Možnosti osi: `x`, `y`, `z`

## Senzory orientácie a náklonu

### `Náklon` {#block_hubs_all_sensors_tilt}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_tilt.svg')} alt="block_hubs_all_sensors_tilt.svg" />
Vracia uhol náklonu pre vybranú os.

- Možnosti osi: `pitch`, `roll`, `yaw`
- Poznámka: `yaw` je dostupné iba na huboch, ktoré poskytujú údaje yaw.

### `Získať orientáciu` {#block_hubs_sensors_get_orientation}
<img src={useBaseUrl('/img/blocks/block_hubs_sensors_get_orientation.svg')} alt="block_hubs_sensors_get_orientation.svg" />
Vracia aktuálny stav orientácie hubu.

- Možnosti formátu výstupu: `text`, `index`
- Hodnoty orientácie: `Predok`, `Hore`, `Vpravo`, `Zadok`, `Dole`, `Vľavo`

### `Je orientácia hore` {#block_hubs_all_sensors_is_orientation_up}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_orientation_up.svg')} alt="block_hubs_all_sensors_is_orientation_up.svg" />
Kontroluje, či orientácia hubu zodpovedá zvolenej orientácii „hore“.

- Možnosti orientácie: `Predok`, `Hore`, `Vpravo`, `Zadok`, `Dole`, `Vľavo`

### `Nastaviť orientáciu náklonu` {#block_hubs_sensors_set_tilt_orientation}
<img src={useBaseUrl('/img/blocks/block_hubs_sensors_set_tilt_orientation.svg')} alt="block_hubs_sensors_set_tilt_orientation.svg" />
Nastavuje referenčnú orientáciu používanú blokmi súvisiacimi s náklonom/orientáciou.

- Možnosti orientácie: `Predok`, `Hore`, `Vpravo`, `Zadok`, `Dole`, `Vľavo`

## Časovač a senzory pohybu zariadenia

### `Časovač` {#block_sensors_timer_value_float}
<img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
Vracia hodnotu časovača v sekundách.

### `Resetovať časovač` {#block_sensors_timer_reset}
<img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
Resetuje časovač na nulu.

## Bloky senzorov portu

### `Technic senzor vzdialenosti` {#block_hubs_all_sensors_port_technic_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_distance.svg')} alt="block_hubs_all_sensors_port_technic_sensor_distance.svg" />
Vracia hodnoty vzdialenosti zo senzora vzdialenosti Technic.

- Možnosti jednotiek: `mm`, `cm`, `palec`, `%`

### `Technic keď vzdialenosť je` {#block_hubs_all_sensors_port_technic_sensor_when_distance_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg" />
Spúšťa/kontroluje podmienku vzdialenosti pre senzor vzdialenosti Technic.

- Možnosti porovnania: `bližšie ako`, `ďalej ako`, `presne na`
- Možnosti jednotiek: `mm`, `cm`, `palec`, `%`

### `Hodnota farby senzora Technic` {#block_hubs_all_sensors_port_technic_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_color.svg" />
Vracia zistenú hodnotu farby zo senzora vzdialenosti Technic.

- Možnosti výstupu: `hodnota`, `reťazec`

### `Technic keď farba je` {#block_hubs_all_sensors_port_technic_sensor_when_color_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_color_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_color_is.svg" />
Spúšťa/kontroluje, keď zistená farba zodpovedá vybratej farbe.

### `Technic odrazené svetlo` {#block_hubs_all_sensors_port_technic_sensor_reflected_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_reflected_light.svg" />
Vracia intenzitu odrazeného svetla.

### `Technic keď odrazené svetlo je` {#block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg" />
Spúšťa/kontroluje prahovú podmienku odrazeného svetla.

- Možnosti porovnania: `<`, `=`, `>`

### `Technic okolité svetlo` {#block_hubs_all_sensors_port_technic_sensor_ambient_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_ambient_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_ambient_light.svg" />
Vracia intenzitu okolitého svetla.

### `Technic keď okolité svetlo je` {#block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is.svg" />
Spúšťa/kontroluje prahovú podmienku okolitého svetla.

- Možnosti porovnania: `<`, `=`, `>`

### `Technic surová farba` {#block_hubs_all_sensors_port_technic_sensor_raw_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_raw_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_raw_color.svg" />
Vracia surovú hodnotu farebného kanála zo senzora Technic.

- Možnosti kanála: `červená`, `zelená`, `modrá`

### `BOOST senzor vzdialenosti` {#block_hubs_all_sensors_port_boost_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_distance.svg" />
Vracia vzdialenosť zo senzora vzdialenosti BOOST.

- Možnosti jednotiek: `%`, `cm`, `palec`

### `BOOST keď vzdialenosť je` {#block_hubs_all_sensors_port_boost_sensor_when_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_distance.svg" />
Spúšťa/kontroluje podmienku vzdialenosti pre senzor vzdialenosti BOOST.

- Možnosti porovnania: `bližšie ako`, `ďalej ako`, `presne na`
- Možnosti jednotiek: `%`, `cm`, `palec`

### `BOOST farba senzora` {#block_hubs_all_sensors_port_boost_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_color.svg" />
Vracia farbu zistenú senzorom BOOST.

- Možnosti výstupu: `hodnota`, `reťazec`

### `BOOST je farba` {#block_hubs_all_sensors_port_boost_sensor_is_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_is_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_is_color.svg" />
Kontroluje, či senzor BOOST aktuálne deteguje vybranú farbu.

### `BOOST odrazené svetlo` {#block_hubs_all_sensors_port_boost_sensor_reflected_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_boost_sensor_reflected_light.svg" />
Vracia hodnotu odrazeného svetla zo senzora BOOST.

### `BOOST keď odrazené svetlo je` {#block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg" />
Spúšťa/kontroluje prahovú podmienku odrazeného svetla pre senzor BOOST.

- Možnosti porovnania: `<`, `=`, `>`

### `Technic Move nastaviť režim výkonu` {#block_hubs_technicmove_sensors_set_power_mode}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_sensors_set_power_mode.svg')} alt="block_hubs_technicmove_sensors_set_power_mode.svg" />
Nastaví režim výkonu Technic Move.

- Možnosti režimu: `normálny`, `boost`

### `WeDo 2 vzdialenosť` {#block_hubs_all_sensors_port_wedo2_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_sensor_distance.svg')} alt="block_hubs_all_sensors_port_wedo2_sensor_distance.svg" />
Vracia vzdialenosť zo senzora vzdialenosti WeDo 2.

- Možnosti jednotiek: `%`, `cm`, `palec`

### `WeDo 2 náklon` {#block_hubs_all_sensors_port_wedo2_tilt}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_tilt.svg')} alt="block_hubs_all_sensors_port_wedo2_tilt.svg" />
Vracia hodnotu náklonu zo senzora náklonu WeDo 2.

- Možnosti osi: `pitch`, `roll`