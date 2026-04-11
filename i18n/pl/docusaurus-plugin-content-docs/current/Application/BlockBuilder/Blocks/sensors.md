---
id: Sensors
title: Czujniki
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Czujniki

Bloki czujników odczytują stan huba/urządzenia i dostarczają dane do warunków, zdarzeń oraz logiki sterowania.

## Czujniki urządzenia i huba

### `Poziom baterii huba` {#block_hubs_all_sensors_battery_level}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_battery_level.svg')} alt="block_hubs_all_sensors_battery_level.svg" />
Zwraca aktualny poziom baterii huba.

### `Bateria urządzenia %` {#block_sensors_device_battery_level}
<img src={useBaseUrl('/img/blocks/block_sensors_device_battery_level.svg')} alt="block_sensors_device_battery_level.svg" />
Zwraca aktualny poziom baterii telefonu/tabletu (w procentach).

### `Temperatura płytki` {#block_hubs_all_sensors_board_temp}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_board_temp.svg')} alt="block_hubs_all_sensors_board_temp.svg" />
Zwraca temperaturę płytki huba.

- Dostępne tylko dla `BuWizz 2` i `BuWizz 3`.

### `Przycisk wciśnięty` {#block_hubs_all_sensors_button_pressed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_button_pressed.svg?v=20260409-2258')} alt="block_hubs_all_sensors_button_pressed.svg" />
Sprawdza, czy wybrany przycisk huba odpowiada wybranemu stanowi.

- Opcje stanu: `naciśnięty`, `zwolniony`
- Typowa opcja przycisku: `środkowy`

- Uwaga: dostępne przyciski mogą się różnić w zależności od modelu huba.

### `Typ urządzenia` {#block_hubs_all_motors_port_device_type}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_device_type.svg')} alt="block_hubs_all_motors_port_device_type.svg" />
Zwraca typ urządzenia podłączonego do wybranego portu.

- Typ: blok raportujący
- Typowe użycie: wykrycie urządzenia przed uruchomieniem odpowiedniej logiki

### `Akcelerometr urządzenia` {#block_sensors_device_accelerometer_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_accelerometer_sensor_data.svg')} alt="block_sensors_device_accelerometer_sensor_data.svg" />
Zwraca surowe dane akcelerometru.

- Opcje osi: `x`, `y`, `z`

### `Przyspieszenie urządzenia` {#block_sensors_device_acceleration_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_acceleration_sensor_data.svg')} alt="block_sensors_device_acceleration_sensor_data.svg" />
Zwraca dane przyspieszenia.

- Opcje osi: `x`, `y`, `z`

## Czujniki orientacji i nachylenia

### `Nachylenie` {#block_hubs_all_sensors_tilt}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_tilt.svg')} alt="block_hubs_all_sensors_tilt.svg" />
Zwraca kąt nachylenia dla wybranej osi.

- Opcje osi: `pitch`, `roll`, `yaw`
- Uwaga: `yaw` dostępny tylko na wybranych hubach.

### `Pobierz orientację` {#block_hubs_sensors_get_orientation}
<img src={useBaseUrl('/img/blocks/block_hubs_sensors_get_orientation.svg')} alt="block_hubs_sensors_get_orientation.svg" />
Zwraca aktualną orientację huba.

- Opcje wyjścia: `tekst`, `indeks`
- Wartości: `Front`, `Top`, `Right`, `Back`, `Bottom`, `Left`

### `Czy orientacja jest w górę` {#block_hubs_all_sensors_is_orientation_up}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_orientation_up.svg')} alt="block_hubs_all_sensors_is_orientation_up.svg" />
Sprawdza, czy orientacja odpowiada wybranej pozycji „góra”.

- Opcje: `Front`, `Top`, `Right`, `Back`, `Bottom`, `Left`

### `Ustaw orientację nachylenia` {#block_hubs_sensors_set_tilt_orientation}
<img src={useBaseUrl('/img/blocks/block_hubs_sensors_set_tilt_orientation.svg')} alt="block_hubs_sensors_set_tilt_orientation.svg" />
Konfiguruje orientację odniesienia dla bloków nachylenia.

- Opcje: `Front`, `Top`, `Right`, `Back`, `Bottom`, `Left`

## Timer i ruch urządzenia

### `Timer` {#block_sensors_timer_value_float}
<img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
Zwraca wartość timera w sekundach.

### `Resetuj timer` {#block_sensors_timer_reset}
<img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
Resetuje timer do zera.

## Bloki czujników portów

### `Czujnik odległości Technic` {#block_hubs_all_sensors_port_technic_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_distance.svg')} alt="block_hubs_all_sensors_port_technic_sensor_distance.svg" />
Zwraca odległość z czujnika Technic.

- Opcje jednostek: `mm`, `cm`, `inch`, `%`

### `Technic gdy odległość jest` {#block_hubs_all_sensors_port_technic_sensor_when_distance_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg" />
Sprawdza warunek odległości.

- Opcje: `bliżej niż`, `dalej niż`, `dokładnie`
- Jednostki: `mm`, `cm`, `inch`, `%`

### `Wartość koloru Technic` {#block_hubs_all_sensors_port_technic_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_color.svg" />
Zwraca wykryty kolor.

- Opcje wyjścia: `wartość`, `tekst`

### `Technic gdy kolor jest` {#block_hubs_all_sensors_port_technic_sensor_when_color_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_color_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_color_is.svg" />
Sprawdza, czy kolor odpowiada wybranemu.

### `Światło odbite Technic` {#block_hubs_all_sensors_port_technic_sensor_reflected_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_reflected_light.svg" />
Zwraca intensywność światła odbitego.

### `Technic gdy światło odbite jest` {#block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg" />
Sprawdza próg światła odbitego.

- Opcje: `<`, `=`, `>`

### `Światło otoczenia Technic` {#block_hubs_all_sensors_port_technic_sensor_ambient_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_ambient_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_ambient_light.svg" />
Zwraca natężenie światła otoczenia.

### `Technic gdy światło otoczenia jest` {#block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is.svg" />
Sprawdza próg światła otoczenia.

- Opcje: `<`, `=`, `>`

### `Surowy kolor Technic` {#block_hubs_all_sensors_port_technic_sensor_raw_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_raw_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_raw_color.svg" />
Zwraca kanały RGB.

- Opcje: `red`, `green`, `blue`

### `Czujnik odległości BOOST` {#block_hubs_all_sensors_port_boost_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_distance.svg" />
Zwraca odległość z czujnika BOOST.

- Jednostki: `%`, `cm`, `inch`

### `BOOST gdy odległość jest` {#block_hubs_all_sensors_port_boost_sensor_when_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_distance.svg" />
Sprawdza warunek odległości.

- Opcje: `bliżej niż`, `dalej niż`, `dokładnie`
- Jednostki: `%`, `cm`, `inch`

### `Kolor BOOST` {#block_hubs_all_sensors_port_boost_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_color.svg" />
Zwraca kolor z czujnika BOOST.

- Opcje: `wartość`, `tekst`

### `BOOST czy kolor` {#block_hubs_all_sensors_port_boost_sensor_is_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_is_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_is_color.svg" />
Sprawdza, czy kolor jest wykryty.

### `Światło odbite BOOST` {#block_hubs_all_sensors_port_boost_sensor_reflected_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_boost_sensor_reflected_light.svg" />
Zwraca światło odbite.

### `BOOST gdy światło odbite jest` {#block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg" />
Sprawdza próg światła.

- Opcje: `<`, `=`, `>`

### `Technic Move ustaw tryb mocy` {#block_hubs_technicmove_sensors_set_power_mode}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_sensors_set_power_mode.svg')} alt="block_hubs_technicmove_sensors_set_power_mode.svg" />
Ustawia tryb mocy.

- Opcje: `normal`, `boost`

### `WeDo 2 odległość` {#block_hubs_all_sensors_port_wedo2_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_sensor_distance.svg')} alt="block_hubs_all_sensors_port_wedo2_sensor_distance.svg" />
Zwraca odległość.

- Jednostki: `%`, `cm`, `inch`

### `WeDo 2 nachylenie` {#block_hubs_all_sensors_port_wedo2_tilt}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_tilt.svg')} alt="block_hubs_all_sensors_port_wedo2_tilt.svg" />
Zwraca nachylenie.

- Opcje: `pitch`, `roll`