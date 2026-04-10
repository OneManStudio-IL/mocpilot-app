---
id: Sensors
title: Senzory
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Senzory

Bloky senzorů čtou stav hubu/zařízení a poskytují data pro podmínky, události a řídicí logiku.

## Senzory zařízení a hubu

### `Úroveň baterie hubu` {#block_hubs_all_sensors_battery_level}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_battery_level.svg')} alt="block_hubs_all_sensors_battery_level.svg" />
Vrací aktuální úroveň baterie hubu.

### `Baterie zařízení %` {#block_sensors_device_battery_level}
<img src={useBaseUrl('/img/blocks/block_sensors_device_battery_level.svg')} alt="block_sensors_device_battery_level.svg" />
Vrací aktuální úroveň baterie telefonu/tabletu, na kterém běží MOCPilot (v procentech).

### `Teplota desky` {#block_hubs_all_sensors_board_temp}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_board_temp.svg')} alt="block_hubs_all_sensors_board_temp.svg" />
Vrací teplotu desky hubu.

- Dostupné pouze pro `BuWizz 2` a `BuWizz 3`.

### `Tlačítko stisknuto` {#block_hubs_all_sensors_button_pressed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_button_pressed.svg?v=20260409-2258')} alt="block_hubs_all_sensors_button_pressed.svg" />
Kontroluje, zda vybrané tlačítko hubu odpovídá vybranému stavu.

- Možnosti stavu: `stisknuto`, `uvolněno`
- Typická možnost tlačítka: `střed` (závisí na hubu)

- Poznámka: dostupné možnosti tlačítek se mohou lišit podle modelu hubu.

### `Typ zařízení` {#block_hubs_all_motors_port_device_type}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_device_type.svg')} alt="block_hubs_all_motors_port_device_type.svg" />
Vrací typ připojeného zařízení pro vybraný port.

- Typ: reportovací blok
- Typické použití: zjistit, jaké zařízení je připojeno, před spuštěním logiky specifické pro zařízení

### `Akcelerometr zařízení` {#block_sensors_device_accelerometer_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_accelerometer_sensor_data.svg')} alt="block_sensors_device_accelerometer_sensor_data.svg" />
Vrací surové hodnoty akcelerometru ze senzorů zařízení.

- Možnosti osy: `x`, `y`, `z`

### `Zrychlení zařízení` {#block_sensors_device_acceleration_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_acceleration_sensor_data.svg')} alt="block_sensors_device_acceleration_sensor_data.svg" />
Vrací data zrychlení ze senzorů zařízení.

- Možnosti osy: `x`, `y`, `z`

## Senzory orientace a náklonu

### `Náklon` {#block_hubs_all_sensors_tilt}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_tilt.svg')} alt="block_hubs_all_sensors_tilt.svg" />
Vrací úhel náklonu pro vybranou osu.

- Možnosti osy: `náklon`, `rotace`, `kormidlování`
- Poznámka: `kormidlování` je dostupné jen na hubech, které tuto hodnotu poskytují.

### `Získat orientaci` {#block_hubs_sensors_get_orientation}
<img src={useBaseUrl('/img/blocks/block_hubs_sensors_get_orientation.svg')} alt="block_hubs_sensors_get_orientation.svg" />
Vrací aktuální stav orientace hubu.

- Možnosti formátu výstupu: `text`, `index`
- Hodnoty orientace: `Přední`, `Horní`, `Vpravo`, `Zpět`, `Dno`, `Vlevo`

### `Je orientace nahoru` {#block_hubs_all_sensors_is_orientation_up}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_orientation_up.svg')} alt="block_hubs_all_sensors_is_orientation_up.svg" />
Kontroluje, zda orientace hubu odpovídá vybrané orientaci „nahoru“.

- Možnosti orientace: `Přední`, `Horní`, `Vpravo`, `Zpět`, `Dno`, `Vlevo`

### `Nastavit orientaci náklonu` {#block_hubs_sensors_set_tilt_orientation}
<img src={useBaseUrl('/img/blocks/block_hubs_sensors_set_tilt_orientation.svg')} alt="block_hubs_sensors_set_tilt_orientation.svg" />
Nastaví referenční orientaci používanou bloky náklonu/orientace.

- Možnosti orientace: `Přední`, `Horní`, `Vpravo`, `Zpět`, `Dno`, `Vlevo`

## Časovač a pohybové senzory zařízení

### `Časovač` {#block_sensors_timer_value_float}
<img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
Vrací hodnotu časovače v sekundách.

### `Resetovat časovač` {#block_sensors_timer_reset}
<img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
Resetuje časovač na nulu.

## Bloky senzorů na portech

### `Senzor vzdálenosti Technic` {#block_hubs_all_sensors_port_technic_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_distance.svg')} alt="block_hubs_all_sensors_port_technic_sensor_distance.svg" />
Vrací hodnoty vzdálenosti ze senzoru vzdálenosti Technic.

- Možnosti jednotek: `mm`, `cm`, `palce`, `%`

### `Technic když je vzdálenost` {#block_hubs_all_sensors_port_technic_sensor_when_distance_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg" />
Spouští/kontroluje podmínku vzdálenosti pro senzor vzdálenosti Technic.

- Možnosti porovnání: `blíže než`, `dál než`, `přesně na`
- Možnosti jednotek: `mm`, `cm`, `palce`, `%`

### `Hodnota barvy senzoru Technic` {#block_hubs_all_sensors_port_technic_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_color.svg" />
Vrací zjištěnou hodnotu barvy ze senzoru Technic.

- Možnosti výstupu: `hodnota`, `řetězec`

### `Technic když je barva` {#block_hubs_all_sensors_port_technic_sensor_when_color_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_color_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_color_is.svg" />
Spouští/kontroluje, když zjištěná barva odpovídá vybrané barvě.

### `Odražené světlo Technic` {#block_hubs_all_sensors_port_technic_sensor_reflected_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_reflected_light.svg" />
Vrací intenzitu odraženého světla.

### `Technic když je odražené světlo` {#block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg" />
Spouští/kontroluje prahovou podmínku odraženého světla.

- Možnosti porovnání: `<`, `=`, `>`

### `Okolní světlo Technic` {#block_hubs_all_sensors_port_technic_sensor_ambient_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_ambient_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_ambient_light.svg" />
Vrací intenzitu okolního světla.

### `Technic když je okolní světlo` {#block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is.svg" />
Spouští/kontroluje prahovou podmínku okolního světla.

- Možnosti porovnání: `<`, `=`, `>`

### `Surová barva Technic` {#block_hubs_all_sensors_port_technic_sensor_raw_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_raw_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_raw_color.svg" />
Vrací surovou hodnotu barevného kanálu ze senzoru Technic.

- Možnosti kanálu: `červený`, `zelený`, `modrý`

### `Vzdálenost senzoru BOOST` {#block_hubs_all_sensors_port_boost_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_distance.svg" />
Vrací vzdálenost ze senzoru vzdálenosti BOOST.

- Možnosti jednotek: `%`, `cm`, `palce`

### `BOOST když je vzdálenost` {#block_hubs_all_sensors_port_boost_sensor_when_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_distance.svg" />
Spouští/kontroluje podmínku vzdálenosti pro senzor vzdálenosti BOOST.

- Možnosti porovnání: `blíže než`, `dál než`, `přesně na`
- Možnosti jednotek: `%`, `cm`, `palce`

### `Barva senzoru BOOST` {#block_hubs_all_sensors_port_boost_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_color.svg" />
Vrací barvu detekovanou senzorem BOOST.

- Možnosti výstupu: `hodnota`, `řetězec`

### `BOOST je barva` {#block_hubs_all_sensors_port_boost_sensor_is_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_is_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_is_color.svg" />
Kontroluje, zda senzor BOOST aktuálně detekuje vybranou barvu.

### `Odražené světlo BOOST` {#block_hubs_all_sensors_port_boost_sensor_reflected_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_boost_sensor_reflected_light.svg" />
Vrací hodnotu odraženého světla ze senzoru BOOST.

### `BOOST když je odražené světlo` {#block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg" />
Spouští/kontroluje prahovou podmínku odraženého světla pro senzor BOOST.

- Možnosti porovnání: `<`, `=`, `>`

### `Technic Move nastavit režim výkonu` {#block_hubs_technicmove_sensors_set_power_mode}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_sensors_set_power_mode.svg')} alt="block_hubs_technicmove_sensors_set_power_mode.svg" />
Nastaví režim výkonu Technic Move.

- Možnosti režimu: `normální`, `turbo`

### `Vzdálenost WeDo 2` {#block_hubs_all_sensors_port_wedo2_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_sensor_distance.svg')} alt="block_hubs_all_sensors_port_wedo2_sensor_distance.svg" />
Vrací vzdálenost ze senzoru vzdálenosti WeDo 2.

- Možnosti jednotek: `%`, `cm`, `palce`

### `Náklon WeDo 2` {#block_hubs_all_sensors_port_wedo2_tilt}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_tilt.svg')} alt="block_hubs_all_sensors_port_wedo2_tilt.svg" />
Vrací hodnotu náklonu ze senzoru náklonu WeDo 2.

- Možnosti osy: `náklon`, `rotace`

## Poznámky k použití

- Používejte reportovací bloky senzorů s `if`, `if/else` a `wait until` pro reaktivní logiku.
- Kombinujte hodnoty senzorů s bloky Operators pro vytváření prahů a podmínek.
- Před odesláním příkazů závislých na konkrétním hardwaru zkontrolujte `Typ zařízení`.
