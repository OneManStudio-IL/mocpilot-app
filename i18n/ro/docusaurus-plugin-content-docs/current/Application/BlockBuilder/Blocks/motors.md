---
id: Motors
title: Motoare
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Motoare

Blocurile pentru motoare sunt utilizate pentru a porni, opri, poziționa și regla motoarele conectate la porturile hub-ului.

## Blocuri principale de comandă pentru motoare

### `Pornește motorul` {#block_hubs_all_motors_port_start_motor}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor.svg')} alt="block_hubs_all_motors_port_start_motor.svg" />
Pornește motorul selectat.

- Opțiuni direcție: sens orar / sens antiorar

### `Oprește motorul` {#block_hubs_all_motors_port_stop_motor}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_stop_motor.svg')} alt="block_hubs_all_motors_port_stop_motor.svg" />
Oprește motorul selectat.

### `Rulează pentru` {#block_hubs_all_motors_port_run_for}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for.svg')} alt="block_hubs_all_motors_port_run_for.svg" />
Rulează motorul selectat pentru o durată/unghi/rotație specificată, în funcție de setările blocului.

- Opțiuni direcție: sens orar / sens antiorar
- Opțiuni unitate: `rotații`, `grade`, `secunde`
- Notă: această funcționalitate necesită un motor care suportă control bazat pe encoder.

### `Pornește motorul la viteză` {#block_hubs_all_motors_port_start_motor_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor_at_speed.svg')} alt="block_hubs_all_motors_port_start_motor_at_speed.svg" />
Pornește motorul cu o valoare explicită de viteză.

### `Rulează pentru la viteză` {#block_hubs_all_motors_port_run_for_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for_at_speed.svg')} alt="block_hubs_all_motors_port_run_for_at_speed.svg" />
Rulează motorul pentru o durată/valoare țintă cu o viteză explicită.

- Opțiuni unitate: `rotații`, `grade`, `secunde`
- Notă: această funcționalitate necesită un motor care suportă control bazat pe encoder.

### `Setează viteza motorului` {#block_hubs_all_motors_port_set_motor_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_speed.svg')} alt="block_hubs_all_motors_port_set_motor_speed.svg" />
Setează viteza utilizată de blocurile de rulare a motorului.

## Blocuri de poziție și mișcare

### `Mergi la poziție` {#block_hubs_all_motors_port_go_to_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_position.svg')} alt="block_hubs_all_motors_port_go_to_position.svg" />
Mută motorul la o poziție absolută țintă.

- Opțiuni traseu: `cea mai scurtă cale`, `sens orar`, `sens antiorar`
- Notă: necesită motor cu encoder.

### `Mergi la poziție relativă` {#block_hubs_all_motors_port_go_to_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_relative_position.svg')} alt="block_hubs_all_motors_port_go_to_relative_position.svg" />
Mută motorul cu un offset relativ.

- Notă: necesită motor cu encoder.

### `BuWizz 3 mergi la poziție relativă` {#block_hubs_buwizz3_motors_port_go_to_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_motors_port_go_to_relative_position.svg')} alt="block_hubs_buwizz3_motors_port_go_to_relative_position.svg" />
Variantă BuWizz 3 pentru poziționare relativă.

- Notă: necesită motor cu encoder.

### `Setează poziția relativă` {#block_hubs_all_motors_port_set_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_relative_position.svg')} alt="block_hubs_all_motors_port_set_relative_position.svg" />
Setează referința poziției relative a motorului.

- Notă: necesită motor cu encoder.

### `Calibrează cremaliera de direcție` {#block_hubs_all_motors_port_calibrate_steering_rack}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_calibrate_steering_rack.svg')} alt="block_hubs_all_motors_port_calibrate_steering_rack.svg" />
Calibrează poziția neutră/de referință a cremalierei de direcție.

- Cerință: motorul trebuie să suporte urmărirea unghiului (encoder intern).
- Cerință mecanică: mișcarea trebuie limitată fizic într-un interval valid.
- Funcționare: blocul măsoară intervalul de rotație și calculează datele de calibrare.
- Comportament output: valorile sunt scrise în variabilele transmise (similar cu pass-by-reference).

## Blocuri de reglaj și siguranță

### `Setează comportamentul motorului la oprire` {#block_hubs_all_motors_port_set_motor_to_at_stop}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_to_at_stop.svg')} alt="block_hubs_all_motors_port_set_motor_to_at_stop.svg" />
Setează modul de oprire al motorului.

- Opțiuni: `frână`, `menține poziția`, `liber`
- Notă: necesită motor cu encoder.

### `Setează detectarea blocării` {#block_hubs_all_motors_port_set_motors_stall_detection}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motors_stall_detection.svg')} alt="block_hubs_all_motors_port_set_motors_stall_detection.svg" />
Activează sau dezactivează detectarea blocării.

- Notă: disponibil doar pentru hub-ul MINDSTORMS Robot Inventor.

### `Setează accelerația` {#block_hubs_all_motors_port_set_acceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_acceleration.svg')} alt="block_hubs_all_motors_port_set_acceleration.svg" />
Setează profilul/rata de accelerație a motorului.

- Opțiuni: `implicit`, `rapid`, `echilibrat`, `lin`, `lent`, `foarte lent`
- Notă: necesită motor cu encoder.

### `Setează decelerația` {#block_hubs_all_motors_port_set_deceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_deceleration.svg')} alt="block_hubs_all_motors_port_set_deceleration.svg" />
Setează profilul/rata de decelerație a motorului.

- Opțiuni: `implicit`, `rapid`, `echilibrat`, `lin`, `lent`, `foarte lent`
- Notă: necesită motor cu encoder.

## Blocuri reporter pentru motor

### `Poziție` {#block_hubs_all_motors_port_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_position.svg')} alt="block_hubs_all_motors_port_position.svg" />
Returnează poziția curentă a motorului.

### `Poziție relativă` {#block_hubs_all_motors_port_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_relative_position.svg')} alt="block_hubs_all_motors_port_relative_position.svg" />
Returnează poziția relativă curentă.

### `Viteză` {#block_hubs_all_motors_port_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_speed.svg')} alt="block_hubs_all_motors_port_speed.svg" />
Returnează viteza curentă a motorului.

### `Putere` {#block_hubs_all_motors_port_power}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_power.svg')} alt="block_hubs_all_motors_port_power.svg" />
Returnează valoarea curentă a puterii motorului.

- Notă: disponibil doar pentru hub-ul MINDSTORMS Robot Inventor.

## Blocuri motoare Technic Move

### `Pornește motoarele la viteză` {#block_hubs_technicmove_motors_start_motors_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_start_motors_at_speed.svg')} alt="block_hubs_technicmove_motors_start_motors_at_speed.svg" />
Pornește motoarele de tracțiune Technic Move la viteza selectată.

### `Oprește motoarele` {#block_hubs_technicmove_motors_stop_motors}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_stop_motors.svg')} alt="block_hubs_technicmove_motors_stop_motors.svg" />
Oprește motoarele Technic Move.

### `Frână` {#block_hubs_technicmove_motors_brake}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_brake.svg')} alt="block_hubs_technicmove_motors_brake.svg" />
Aplică frânarea motoarelor Technic Move.

- Opțiuni: `oprit`, `pornit`

### `Setează cremaliera de direcție la` {#block_hubs_technicmove_motors_set_steering_rack_to}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_set_steering_rack_to.svg')} alt="block_hubs_technicmove_motors_set_steering_rack_to.svg" />
Setează poziția țintă a cremalierei de direcție.

### `Calibrează cremaliera de direcție` {#block_hubs_technicmove_motors_calibrate_steering_rack}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_calibrate_steering_rack.svg')} alt="block_hubs_technicmove_motors_calibrate_steering_rack.svg" />
Calibrează cremaliera de direcție Technic Move folosind algoritmul intern al hub-ului.

- Notă: axa motorului trebuie limitată mecanic (ex: mecanism de direcție).
