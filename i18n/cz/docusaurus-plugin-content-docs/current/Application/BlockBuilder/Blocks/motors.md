---
id: Motors
title: Motory
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Motory

Bloky motorů slouží ke spuštění, zastavení, polohování a ladění motorů připojených k portům hubu.

## Základní příkazové bloky motorů

### `Spustit motor` {#block_hubs_all_motors_port_start_motor}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor.svg')} alt="block_hubs_all_motors_port_start_motor.svg" />
Spustí vybraný motor.

- Možnosti směru: `ve směru hodinových ručiček` / `proti směru hodinových ručiček`

### `Zastavit motor` {#block_hubs_all_motors_port_stop_motor}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_stop_motor.svg')} alt="block_hubs_all_motors_port_stop_motor.svg" />
Zastaví vybraný motor.

### `Spustit na` {#block_hubs_all_motors_port_run_for}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for.svg')} alt="block_hubs_all_motors_port_run_for.svg" />
Spustí vybraný motor na zadaný čas/úhel/otáčky podle nastavení bloku.

- Možnosti směru: `ve směru hodinových ručiček` / `proti směru hodinových ručiček`
- Možnosti jednotek: `otáčky`, `stupně`, `sekundy`

### `Spustit motor rychlostí` {#block_hubs_all_motors_port_start_motor_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor_at_speed.svg')} alt="block_hubs_all_motors_port_start_motor_at_speed.svg" />
Spustí motor s explicitně zadanou rychlostí.

### `Spustit na rychlostí` {#block_hubs_all_motors_port_run_for_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for_at_speed.svg')} alt="block_hubs_all_motors_port_run_for_at_speed.svg" />
Spustí motor na cílové trvání/množství s explicitní rychlostí.

- Možnosti jednotek: `otáčky`, `stupně`, `sekundy`

### `Nastavit rychlost motoru` {#block_hubs_all_motors_port_set_motor_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_speed.svg')} alt="block_hubs_all_motors_port_set_motor_speed.svg" />
Nastaví rychlost používanou souvisejícími bloky běhu motoru.

## Bloky polohy a pohybu

### `Přejít na pozici` {#block_hubs_all_motors_port_go_to_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_position.svg')} alt="block_hubs_all_motors_port_go_to_position.svg" />
Přesune motor na cílovou absolutní pozici.

- Možnosti cesty: `nejkratší cesta`, `ve směru hodinových ručiček`, `proti směru hodinových ručiček`

### `Přejít na relativní pozici` {#block_hubs_all_motors_port_go_to_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_relative_position.svg')} alt="block_hubs_all_motors_port_go_to_relative_position.svg" />
Přesune motor o relativní posun.

### `BuWizz 3 přejít na relativní pozici` {#block_hubs_buwizz3_motors_port_go_to_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_motors_port_go_to_relative_position.svg')} alt="block_hubs_buwizz3_motors_port_go_to_relative_position.svg" />
Varianta relativního polohování pro BuWizz 3.

### `Nastavit relativní pozici` {#block_hubs_all_motors_port_set_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_relative_position.svg')} alt="block_hubs_all_motors_port_set_relative_position.svg" />
Nastaví referenci relativní pozice motoru.

### `Kalibrovat řízení` {#block_hubs_all_motors_port_calibrate_steering_rack}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_calibrate_steering_rack.svg')} alt="block_hubs_all_motors_port_calibrate_steering_rack.svg" />
Kalibruje neutrální/referenční pozici hřebene řízení.

## Bloky ladění a bezpečnosti motorů

### `Nastavit chování motoru při zastavení` {#block_hubs_all_motors_port_set_motor_to_at_stop}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_to_at_stop.svg')} alt="block_hubs_all_motors_port_set_motor_to_at_stop.svg" />
Nastaví režim zastavení motoru.

- Možnosti režimu: `brzda`, `držet pozici`, `doběh`

### `Nastavit detekci zablokování` {#block_hubs_all_motors_port_set_motors_stall_detection}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motors_stall_detection.svg')} alt="block_hubs_all_motors_port_set_motors_stall_detection.svg" />
Zapíná nebo vypíná detekci zablokování.

### `Nastavit zrychlení` {#block_hubs_all_motors_port_set_acceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_acceleration.svg')} alt="block_hubs_all_motors_port_set_acceleration.svg" />
Nastaví profil/rychlost zrychlení motoru.

### `Nastavit zpomalení` {#block_hubs_all_motors_port_set_deceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_deceleration.svg')} alt="block_hubs_all_motors_port_set_deceleration.svg" />
Nastaví profil/rychlost zpomalení motoru.

## Reportovací bloky motorů

### `Pozice` {#block_hubs_all_motors_port_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_position.svg')} alt="block_hubs_all_motors_port_position.svg" />
Vrací aktuální pozici motoru.

### `Relativní pozice` {#block_hubs_all_motors_port_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_relative_position.svg')} alt="block_hubs_all_motors_port_relative_position.svg" />
Vrací aktuální relativní pozici.

### `Rychlost` {#block_hubs_all_motors_port_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_speed.svg')} alt="block_hubs_all_motors_port_speed.svg" />
Vrací aktuální rychlost motoru.

### `Výkon` {#block_hubs_all_motors_port_power}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_power.svg')} alt="block_hubs_all_motors_port_power.svg" />
Vrací aktuální hodnotu výkonu motoru.

## Bloky motorů Technic Move

### `Spustit motory rychlostí` {#block_hubs_technicmove_motors_start_motors_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_start_motors_at_speed.svg')} alt="block_hubs_technicmove_motors_start_motors_at_speed.svg" />
Spustí pohonné motory Technic Move zvolenou rychlostí.

### `Zastavit motory` {#block_hubs_technicmove_motors_stop_motors}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_stop_motors.svg')} alt="block_hubs_technicmove_motors_stop_motors.svg" />
Zastaví pohonné motory Technic Move.

### `Brzda` {#block_hubs_technicmove_motors_brake}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_brake.svg')} alt="block_hubs_technicmove_motors_brake.svg" />
Nastaví brzdné chování motorů Technic Move.

- Možnosti brzdy: `vypnuto`, `povoleno`

### `Nastavit hřeben řízení na` {#block_hubs_technicmove_motors_set_steering_rack_to}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_set_steering_rack_to.svg')} alt="block_hubs_technicmove_motors_set_steering_rack_to.svg" />
Nastaví cílovou pozici/hodnotu hřebene řízení.

### `Kalibrovat hřeben řízení` {#block_hubs_technicmove_motors_calibrate_steering_rack}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_calibrate_steering_rack.svg')} alt="block_hubs_technicmove_motors_calibrate_steering_rack.svg" />
Kalibruje hřeben řízení Technic Move pomocí interního algoritmu hubu.

## Poznámky k použití

- Pro absolutní cíl použijte `Přejít na pozici`, pro přírůstkový pohyb `Přejít na relativní pozici`.
- Nastavení zrychlení/zpomalení zjemní rozjezdy a zastavení.
- Detekci zablokování zapínejte tam, kde může dojít k zaseknutí mechaniky.
