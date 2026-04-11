---
id: Motors
title: Motorer
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Motorer

Motorblock används för att starta, stoppa, positionera och justera motorer som är anslutna till hubbportar.

## Grundläggande motorkommandoblock

### `Starta motor` {#block_hubs_all_motors_port_start_motor}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor.svg')} alt="block_hubs_all_motors_port_start_motor.svg" />
Startar den valda motorn.

- Riktningsalternativ: medurs / moturs

### `Stoppa motor` {#block_hubs_all_motors_port_stop_motor}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_stop_motor.svg')} alt="block_hubs_all_motors_port_stop_motor.svg" />
Stoppar den valda motorn.

### `Kör under` {#block_hubs_all_motors_port_run_for}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for.svg')} alt="block_hubs_all_motors_port_run_for.svg" />
Kör den valda motorn under angiven tid/vinkel/rotation baserat på blockets inställningar.

- Riktningsalternativ: medurs / moturs
- Enhetsalternativ: `rotationer`, `grader`, `sekunder`
- Obs: den här funktionen kräver en motor på den valda porten som stöder encoderbaserad styrning.

### `Starta motor med hastighet` {#block_hubs_all_motors_port_start_motor_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor_at_speed.svg')} alt="block_hubs_all_motors_port_start_motor_at_speed.svg" />
Startar motorn med ett explicit hastighetsvärde.

### `Kör under med hastighet` {#block_hubs_all_motors_port_run_for_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for_at_speed.svg')} alt="block_hubs_all_motors_port_run_for_at_speed.svg" />
Kör motorn under en målvaraktighet/mängd med explicit hastighet.

- Enhetsalternativ: `rotationer`, `grader`, `sekunder`
- Obs: den här funktionen kräver en motor på den valda porten som stöder encoderbaserad styrning.

### `Ställ in motorhastighet` {#block_hubs_all_motors_port_set_motor_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_speed.svg')} alt="block_hubs_all_motors_port_set_motor_speed.svg" />
Ställer in hastigheten som används av relaterade motorkörningsblock.

## Positions- och rörelseblock

### `Gå till position` {#block_hubs_all_motors_port_go_to_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_position.svg')} alt="block_hubs_all_motors_port_go_to_position.svg" />
Flyttar motorn till målpositionen i absoluta termer.

- Vägalternativ: `kortaste vägen`, `medurs`, `moturs`
- Obs: den här funktionen kräver en motor på den valda porten som stöder encoderbaserad styrning.

### `Gå till relativ position` {#block_hubs_all_motors_port_go_to_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_relative_position.svg')} alt="block_hubs_all_motors_port_go_to_relative_position.svg" />
Flyttar motorn med en relativ offset.

- Obs: den här funktionen kräver en motor på den valda porten som stöder encoderbaserad styrning.

### `BuWizz 3 gå till relativ position` {#block_hubs_buwizz3_motors_port_go_to_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_motors_port_go_to_relative_position.svg')} alt="block_hubs_buwizz3_motors_port_go_to_relative_position.svg" />
BuWizz 3-variant av blocket för relativ positionering.

- Obs: den här funktionen kräver en motor på den valda porten som stöder encoderbaserad styrning.

### `Ställ in relativ position` {#block_hubs_all_motors_port_set_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_relative_position.svg')} alt="block_hubs_all_motors_port_set_relative_position.svg" />
Ställer in motorns referens för relativ position.

- Obs: den här funktionen kräver en motor på den valda porten som stöder encoderbaserad styrning.

### `Kalibrera styrstång` {#block_hubs_all_motors_port_calibrate_steering_rack}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_calibrate_steering_rack.svg')} alt="block_hubs_all_motors_port_calibrate_steering_rack.svg" />
Kalibrerar styrstångens neutrala/referensposition.

- Krav: motorn som är ansluten till den valda porten måste stödja spårning av absolut/relativ vinkel (intern encoder).
- Mekaniskt krav: styraxelns rörelse måste vara fysiskt begränsad till ett giltigt intervall (till exempel med styrstång/växelns ändlägen).
- Så fungerar det: blocket sveper och mäter det tillgängliga rotationsområdet för styrningen och beräknar sedan kalibreringsdata som används för styrkonfigurationen.
- Utdatabeteende: blockargument skriver resultat till variabler som skickas till blocket (funktionsliknande pass-by-reference-beteende). Dessa variabler muteras av blocket och ska användas för att läsa kalibreringsresultaten.

## Motorjusterings- och säkerhetsblock

### `Ställ in motorbeteende vid stopp` {#block_hubs_all_motors_port_set_motor_to_at_stop}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_to_at_stop.svg')} alt="block_hubs_all_motors_port_set_motor_to_at_stop.svg" />
Ställer in motorns stoppläge (till exempel broms/håll/frihjul beroende på tillgängliga alternativ).

- Stopplägesalternativ: `broms`, `håll position`, `frihjul`
- Obs: den här funktionen kräver en motor på den valda porten som stöder encoderbaserad styrning.

### `Ställ in stall-detektering` {#block_hubs_all_motors_port_set_motors_stall_detection}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motors_stall_detection.svg')} alt="block_hubs_all_motors_port_set_motors_stall_detection.svg" />
Aktiverar eller inaktiverar stall-detektering.

- Obs: endast tillgängligt för MINDSTORMS Robot Inventor-hubben.

### `Ställ in acceleration` {#block_hubs_all_motors_port_set_acceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_acceleration.svg')} alt="block_hubs_all_motors_port_set_acceleration.svg" />
Ställer in motorns accelerationsprofil/-hastighet.

- Profilalternativ: `standard`, `snabb`, `balanserad`, `mjuk`, `långsam`, `mycket långsam`
- Obs: den här funktionen kräver en motor på den valda porten som stöder encoderbaserad styrning.

### `Ställ in retardation` {#block_hubs_all_motors_port_set_deceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_deceleration.svg')} alt="block_hubs_all_motors_port_set_deceleration.svg" />
Ställer in motorns retardationsprofil/-hastighet.

- Profilalternativ: `standard`, `snabb`, `balanserad`, `mjuk`, `långsam`, `mycket långsam`
- Obs: den här funktionen kräver en motor på den valda porten som stöder encoderbaserad styrning.

## Motorreporterblock

### `Position` {#block_hubs_all_motors_port_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_position.svg')} alt="block_hubs_all_motors_port_position.svg" />
Returnerar aktuell motorposition.

### `Relativ position` {#block_hubs_all_motors_port_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_relative_position.svg')} alt="block_hubs_all_motors_port_relative_position.svg" />
Returnerar aktuellt värde för relativ position.

### `Hastighet` {#block_hubs_all_motors_port_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_speed.svg')} alt="block_hubs_all_motors_port_speed.svg" />
Returnerar aktuell motorhastighet.

### `Effekt` {#block_hubs_all_motors_port_power}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_power.svg')} alt="block_hubs_all_motors_port_power.svg" />
Returnerar aktuellt motoreffektvärde.

- Obs: endast tillgängligt för MINDSTORMS Robot Inventor-hubben.

## Technic Move-motorblock

### `Starta motorer med hastighet` {#block_hubs_technicmove_motors_start_motors_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_start_motors_at_speed.svg')} alt="block_hubs_technicmove_motors_start_motors_at_speed.svg" />
Startar Technic Move-drivmotorerna med vald hastighet.

### `Stoppa motorer` {#block_hubs_technicmove_motors_stop_motors}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_stop_motors.svg')} alt="block_hubs_technicmove_motors_stop_motors.svg" />
Stoppar Technic Move-drivmotorerna.

### `Broms` {#block_hubs_technicmove_motors_brake}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_brake.svg')} alt="block_hubs_technicmove_motors_brake.svg" />
Tillämpar bromsbeteende på Technic Move-motorer.

- Bromsalternativ: `av`, `på`

### `Ställ styrstång till` {#block_hubs_technicmove_motors_set_steering_rack_to}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_set_steering_rack_to.svg')} alt="block_hubs_technicmove_motors_set_steering_rack_to.svg" />
Ställer in styrstångens målposition/-värde.

### `Kalibrera styrstång` {#block_hubs_technicmove_motors_calibrate_steering_rack}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_calibrate_steering_rack.svg')} alt="block_hubs_technicmove_motors_calibrate_steering_rack.svg" />
Kalibrerar Technic Move-styrstången med hjälp av hubbens interna kalibreringsalgoritm och automatisk detektering av styrintervall.

- Obs: motoraxeln måste vara mekaniskt begränsad (till exempel av en styrstångsmekanism).
