---
id: Motors
title: Motorer
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Motorer

Motorblokker brukes til å starte, stoppe, posisjonere og justere motorer koblet til hub-porter.

## Grunnleggende motorblokker

### `Start motor` {#block_hubs_all_motors_port_start_motor}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor.svg')} alt="block_hubs_all_motors_port_start_motor.svg" />
Starter valgt motor.

- Retningsvalg: `med klokken` / `mot klokken`

### `Stopp motor` {#block_hubs_all_motors_port_stop_motor}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_stop_motor.svg')} alt="block_hubs_all_motors_port_stop_motor.svg" />
Stopper valgt motor.

### `Kjør i` {#block_hubs_all_motors_port_run_for}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for.svg')} alt="block_hubs_all_motors_port_run_for.svg" />
Kjører valgt motor i spesifisert tid/vinkel/rotasjon basert på blokkinnstillinger.

- Retningsvalg: `med klokken` / `mot klokken`
- Enhetsvalg: `rotasjoner`, `grader`, `sekunder`
- Merk: krever motor med encoder-støtte på valgt port.

### `Start motor med hastighet` {#block_hubs_all_motors_port_start_motor_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor_at_speed.svg')} alt="block_hubs_all_motors_port_start_motor_at_speed.svg" />
Starter motor med spesifisert hastighet.

### `Kjør i med hastighet` {#block_hubs_all_motors_port_run_for_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for_at_speed.svg')} alt="block_hubs_all_motors_port_run_for_at_speed.svg" />
Kjører motor i spesifisert tid/mengde med valgt hastighet.

- Enhetsvalg: `rotasjoner`, `grader`, `sekunder`
- Merk: krever motor med encoder-støtte.

### `Sett motorhastighet` {#block_hubs_all_motors_port_set_motor_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_speed.svg')} alt="block_hubs_all_motors_port_set_motor_speed.svg" />
Setter hastigheten brukt av motorblokker.

## Posisjons- og bevegelsesblokker

### `Gå til posisjon` {#block_hubs_all_motors_port_go_to_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_position.svg')} alt="block_hubs_all_motors_port_go_to_position.svg" />
Flytter motor til absolutt posisjon.

- Banevalg: `korteste vei`, `med klokken`, `mot klokken`
- Merk: krever encoder-støtte.

### `Gå til relativ posisjon` {#block_hubs_all_motors_port_go_to_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_relative_position.svg')} alt="block_hubs_all_motors_port_go_to_relative_position.svg" />
Flytter motor med relativ forskyvning.

### `BuWizz 3 gå til relativ posisjon` {#block_hubs_buwizz3_motors_port_go_to_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_motors_port_go_to_relative_position.svg')} alt="block_hubs_buwizz3_motors_port_go_to_relative_position.svg" />
BuWizz 3-variant av relativ posisjonering.

### `Sett relativ posisjon` {#block_hubs_all_motors_port_set_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_relative_position.svg')} alt="block_hubs_all_motors_port_set_relative_position.svg" />
Setter referanse for relativ posisjon.

### `Kalibrer styrestag` {#block_hubs_all_motors_port_calibrate_steering_rack}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_calibrate_steering_rack.svg')} alt="block_hubs_all_motors_port_calibrate_steering_rack.svg" />
Kalibrerer styrestagets nullposisjon.

- Krav: motor må støtte vinkelmåling (encoder)
- Mekanisk krav: bevegelse må være fysisk begrenset
- Hvordan det fungerer: måler rotasjonsområde og beregner kalibreringsdata
- Output: skriver resultater til variabler (referanseoppførsel)

## Justering og sikkerhet

### `Sett motoroppførsel ved stopp` {#block_hubs_all_motors_port_set_motor_to_at_stop}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_to_at_stop.svg')} alt="block_hubs_all_motors_port_set_motor_to_at_stop.svg" />
Setter stoppmodus.

- Alternativer: `brems`, `hold posisjon`, `friløp`

### `Sett fastlåsningsdeteksjon` {#block_hubs_all_motors_port_set_motors_stall_detection}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motors_stall_detection.svg')} alt="block_hubs_all_motors_port_set_motors_stall_detection.svg" />
Aktiverer/deaktiverer fastlåsningsdeteksjon.

### `Sett akselerasjon` {#block_hubs_all_motors_port_set_acceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_acceleration.svg')} alt="block_hubs_all_motors_port_set_acceleration.svg" />
Setter akselerasjonsprofil.

- Profiler: `standard`, `rask`, `balansert`, `jevn`, `sakte`, `veldig sakte`

### `Sett retardasjon` {#block_hubs_all_motors_port_set_deceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_deceleration.svg')} alt="block_hubs_all_motors_port_set_deceleration.svg" />
Setter retardasjonsprofil.

## Rapportørblokker

### `Posisjon` {#block_hubs_all_motors_port_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_position.svg')} alt="block_hubs_all_motors_port_position.svg" />
Returnerer motorposisjon.

### `Relativ posisjon` {#block_hubs_all_motors_port_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_relative_position.svg')} alt="block_hubs_all_motors_port_relative_position.svg" />
Returnerer relativ posisjon.

### `Hastighet` {#block_hubs_all_motors_port_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_speed.svg')} alt="block_hubs_all_motors_port_speed.svg" />
Returnerer motorhastighet.

### `Effekt` {#block_hubs_all_motors_port_power}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_power.svg')} alt="block_hubs_all_motors_port_power.svg" />
Returnerer motorens effektverdi.

## Technic Move motorblokker

### `Start motorer med hastighet` {#block_hubs_technicmove_motors_start_motors_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_start_motors_at_speed.svg')} alt="block_hubs_technicmove_motors_start_motors_at_speed.svg" />
Starter Technic Move-motorer.

### `Stopp motorer` {#block_hubs_technicmove_motors_stop_motors}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_stop_motors.svg')} alt="block_hubs_technicmove_motors_stop_motors.svg" />
Stopper Technic Move-motorer.

### `Brems` {#block_hubs_technicmove_motors_brake}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_brake.svg')} alt="block_hubs_technicmove_motors_brake.svg" />
Setter brems.

- Alternativer: `av`, `på`

### `Sett styrestag til` {#block_hubs_technicmove_motors_set_steering_rack_to}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_set_steering_rack_to.svg')} alt="block_hubs_technicmove_motors_set_steering_rack_to.svg" />
Setter styreposisjon.

### `Kalibrer styrestag` {#block_hubs_technicmove_motors_calibrate_steering_rack}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_calibrate_steering_rack.svg')} alt="block_hubs_technicmove_motors_calibrate_steering_rack.svg" />
Kalibrerer styrestag automatisk.