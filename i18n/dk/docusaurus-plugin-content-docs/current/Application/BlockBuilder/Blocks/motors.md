---
id: Motors
title: Motorer
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Motorer

Motorblokke bruges til at starte, stoppe, positionere og finjustere motorer, der er forbundet til hub-porte.

## Grundlæggende motorkommando-blokke

### `Start motor` {#block_hubs_all_motors_port_start_motor}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor.svg')} alt="block_hubs_all_motors_port_start_motor.svg" />
Starter den valgte motor.

- Retningsmuligheder: med uret / mod uret

### `Stop motor` {#block_hubs_all_motors_port_stop_motor}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_stop_motor.svg')} alt="block_hubs_all_motors_port_stop_motor.svg" />
Stopper den valgte motor.

### `Kør i` {#block_hubs_all_motors_port_run_for}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for.svg')} alt="block_hubs_all_motors_port_run_for.svg" />
Kører den valgte motor i en angivet tid/vinkel/rotation afhængigt af blokindstillingerne.

- Retningsmuligheder: med uret / mod uret
- Enhedsmuligheder: `rotationer`, `grader`, `sekunder`
- Bemærk: denne funktion kræver en motor på den valgte port, som understøtter encoder-baseret styring.

### `Start motor med hastighed` {#block_hubs_all_motors_port_start_motor_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor_at_speed.svg')} alt="block_hubs_all_motors_port_start_motor_at_speed.svg" />
Starter motoren med en eksplicit hastighedsværdi.

### `Kør i med hastighed` {#block_hubs_all_motors_port_run_for_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for_at_speed.svg')} alt="block_hubs_all_motors_port_run_for_at_speed.svg" />
Kører motoren i en målvarighed/-mængde med eksplicit hastighed.

- Enhedsmuligheder: `rotationer`, `grader`, `sekunder`
- Bemærk: denne funktion kræver en motor på den valgte port, som understøtter encoder-baseret styring.

### `Sæt motorhastighed` {#block_hubs_all_motors_port_set_motor_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_speed.svg')} alt="block_hubs_all_motors_port_set_motor_speed.svg" />
Sætter hastigheden, der bruges af relaterede motor-køreblokke.

## Positions- og bevægelsesblokke

### `Go to position` {#block_hubs_all_motors_port_go_to_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_position.svg')} alt="block_hubs_all_motors_port_go_to_position.svg" />
Flytter motoren til en absolut målposition.

- Banemuligheder: `korteste vej`, `med uret`, `mod uret`
- Bemærk: denne funktion kræver en motor på den valgte port, som understøtter encoder-baseret styring.

### `Go to relative position` {#block_hubs_all_motors_port_go_to_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_relative_position.svg')} alt="block_hubs_all_motors_port_go_to_relative_position.svg" />
Flytter motoren med en relativ forskydning.

- Bemærk: denne funktion kræver en motor på den valgte port, som understøtter encoder-baseret styring.

### `BuWizz 3 go to relative position` {#block_hubs_buwizz3_motors_port_go_to_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_motors_port_go_to_relative_position.svg')} alt="block_hubs_buwizz3_motors_port_go_to_relative_position.svg" />
BuWizz 3-variant af den relative positioneringsblok.

- Bemærk: denne funktion kræver en motor på den valgte port, som understøtter encoder-baseret styring.

### `Sæt relativ position` {#block_hubs_all_motors_port_set_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_relative_position.svg')} alt="block_hubs_all_motors_port_set_relative_position.svg" />
Sætter reference for motorens relative position.

- Bemærk: denne funktion kræver en motor på den valgte port, som understøtter encoder-baseret styring.

### `Kalibrér styretøjsstang` {#block_hubs_all_motors_port_calibrate_steering_rack}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_calibrate_steering_rack.svg')} alt="block_hubs_all_motors_port_calibrate_steering_rack.svg" />
Kalibrerer neutral-/referenceposition for styretøjsstangen.

- Krav: motoren, der er tilsluttet den valgte port, skal understøtte absolut/relativ vinkelsporing (intern encoder).
- Mekanisk krav: bevægelsen af styreaksen skal være fysisk begrænset til et gyldigt område (f.eks. med endestop i styretøjsstang/gearing).
- Sådan virker det: blokken sweep'er og måler det tilgængelige styreområde og beregner derefter kalibreringsdata til styrekonfigurationen.
- Outputadfærd: blokargumenter skriver resultater i variabler, der sendes ind i blokken (funktionslignende pass-by-reference-adfærd). Disse variabler ændres af blokken og bør bruges til at læse kalibreringsresultater.

## Motor-finjustering og sikkerhedsblokke

### `Sæt motoradfærd ved stop` {#block_hubs_all_motors_port_set_motor_to_at_stop}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_to_at_stop.svg')} alt="block_hubs_all_motors_port_set_motor_to_at_stop.svg" />
Sætter motorens stoptilstand (f.eks. bremse/hold/frihjul afhængigt af tilgængelige valg).

- Stoptilstandsmuligheder: `bremse`, `hold position`, `frihjul`
- Bemærk: denne funktion kræver en motor på den valgte port, som understøtter encoder-baseret styring.

### `Sæt stall-detektering` {#block_hubs_all_motors_port_set_motors_stall_detection}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motors_stall_detection.svg')} alt="block_hubs_all_motors_port_set_motors_stall_detection.svg" />
Aktiverer eller deaktiverer stall-detektering.

- Bemærk: kun tilgængelig for MINDSTORMS Robot Inventor-hubben.

### `Sæt acceleration` {#block_hubs_all_motors_port_set_acceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_acceleration.svg')} alt="block_hubs_all_motors_port_set_acceleration.svg" />
Sætter motorens accelerationsprofil/-hastighed.

- Profilmuligheder: `standard`, `hurtig`, `balanceret`, `jævn`, `langsom`, `meget langsom`
- Bemærk: denne funktion kræver en motor på den valgte port, som understøtter encoder-baseret styring.

### `Sæt deceleration` {#block_hubs_all_motors_port_set_deceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_deceleration.svg')} alt="block_hubs_all_motors_port_set_deceleration.svg" />
Sætter motorens decelerationsprofil/-hastighed.

- Profilmuligheder: `standard`, `hurtig`, `balanceret`, `jævn`, `langsom`, `meget langsom`
- Bemærk: denne funktion kræver en motor på den valgte port, som understøtter encoder-baseret styring.

## Motor-reporterblokke

### `Position` {#block_hubs_all_motors_port_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_position.svg')} alt="block_hubs_all_motors_port_position.svg" />
Returnerer den aktuelle motorposition.

### `Relativ position` {#block_hubs_all_motors_port_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_relative_position.svg')} alt="block_hubs_all_motors_port_relative_position.svg" />
Returnerer den aktuelle relative positionsværdi.

### `Hastighed` {#block_hubs_all_motors_port_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_speed.svg')} alt="block_hubs_all_motors_port_speed.svg" />
Returnerer den aktuelle motorhastighed.

### `Effekt` {#block_hubs_all_motors_port_power}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_power.svg')} alt="block_hubs_all_motors_port_power.svg" />
Returnerer den aktuelle motor-effektværdi.

- Bemærk: kun tilgængelig for MINDSTORMS Robot Inventor-hubben.

## Technic Move-motorblokke

### `Start motorer med hastighed` {#block_hubs_technicmove_motors_start_motors_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_start_motors_at_speed.svg')} alt="block_hubs_technicmove_motors_start_motors_at_speed.svg" />
Starter Technic Move-drivmotorer med den valgte hastighed.

### `Stop motorer` {#block_hubs_technicmove_motors_stop_motors}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_stop_motors.svg')} alt="block_hubs_technicmove_motors_stop_motors.svg" />
Stopper Technic Move-drivmotorer.

### `Bremse` {#block_hubs_technicmove_motors_brake}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_brake.svg')} alt="block_hubs_technicmove_motors_brake.svg" />
Anvender bremseadfærd på Technic Move-motorer.

- Bremsemuligheder: `off`, `aktiveret`

### `Sæt styretøjsstang til` {#block_hubs_technicmove_motors_set_steering_rack_to}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_set_steering_rack_to.svg')} alt="block_hubs_technicmove_motors_set_steering_rack_to.svg" />
Sætter målposition/-værdi for styretøjsstangen.

### `Kalibrér styretøjsstang` {#block_hubs_technicmove_motors_calibrate_steering_rack}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_calibrate_steering_rack.svg')} alt="block_hubs_technicmove_motors_calibrate_steering_rack.svg" />
Kalibrerer Technic Move-styretøjsstangen ved hjælp af hubbens interne kalibreringsalgoritme og automatisk registrering af styreområde.

- Bemærk: motoraksen skal være mekanisk begrænset (f.eks. af en styretøjsstangsmekanisme).