---
id: Motors
title: Moottorit
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Moottorit

Moottorilohkoja käytetään käynnistämään, pysäyttämään, asemointiin ja säätämään hubin portteihin liitettyjä moottoreita.

## Perusmoottorikomennot

### `Käynnistä moottori` {#block_hubs_all_motors_port_start_motor}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor.svg')} alt="block_hubs_all_motors_port_start_motor.svg" />
Käynnistää valitun moottorin.

- Suuntavaihtoehdot: myötäpäivään / vastapäivään

### `Pysäytä moottori` {#block_hubs_all_motors_port_stop_motor}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_stop_motor.svg')} alt="block_hubs_all_motors_port_stop_motor.svg" />
Pysäyttää valitun moottorin.

### `Suorita ajan verran` {#block_hubs_all_motors_port_run_for}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for.svg')} alt="block_hubs_all_motors_port_run_for.svg" />
Suorittaa moottoria määritetyn ajan/kulman/pyörähdyksen ajan.

- Suuntavaihtoehdot: myötäpäivään / vastapäivään
- Yksiköt: `kierrokset`, `asteet`, `sekunnit`
- Huom: vaatii encoder-tuetun moottorin.

### `Käynnistä moottori nopeudella` {#block_hubs_all_motors_port_start_motor_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor_at_speed.svg')} alt="block_hubs_all_motors_port_start_motor_at_speed.svg" />
Käynnistää moottorin annetulla nopeudella.

### `Suorita ajan verran nopeudella` {#block_hubs_all_motors_port_run_for_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for_at_speed.svg')} alt="block_hubs_all_motors_port_run_for_at_speed.svg" />
Suorittaa moottoria annetun ajan määrän tietyllä nopeudella.

- Yksiköt: `kierrokset`, `asteet`, `sekunnit`
- Huom: vaatii encoder-tuetun moottorin.

### `Aseta moottorin nopeus` {#block_hubs_all_motors_port_set_motor_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_speed.svg')} alt="block_hubs_all_motors_port_set_motor_speed.svg" />
Asettaa nopeuden, jota muut moottorilohkot käyttävät.

## Asema ja liike

### `Siirry sijaintiin` {#block_hubs_all_motors_port_go_to_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_position.svg')} alt="block_hubs_all_motors_port_go_to_position.svg" />
Siirtää moottorin absoluuttiseen sijaintiin.

- Polkuvaihtoehdot: `lyhin reitti`, `myötäpäivään`, `vastapäivään`
- Huom: vaatii encoder-tuetun moottorin.

### `Siirry suhteelliseen sijaintiin` {#block_hubs_all_motors_port_go_to_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_relative_position.svg')} alt="block_hubs_all_motors_port_go_to_relative_position.svg" />
Siirtää moottoria suhteellisella siirtymällä.

- Huom: vaatii encoder-tuetun moottorin.

### `BuWizz 3 siirry suhteelliseen sijaintiin` {#block_hubs_buwizz3_motors_port_go_to_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_motors_port_go_to_relative_position.svg')} alt="block_hubs_buwizz3_motors_port_go_to_relative_position.svg" />
BuWizz 3 -versio suhteellisesta liikkeestä.

- Huom: vaatii encoder-tuetun moottorin.

### `Aseta suhteellinen sijainti` {#block_hubs_all_motors_port_set_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_relative_position.svg')} alt="block_hubs_all_motors_port_set_relative_position.svg" />
Asettaa suhteellisen sijainnin nollapisteen.

- Huom: vaatii encoder-tuetun moottorin.

### `Kalibroi ohjaustanko` {#block_hubs_all_motors_port_calibrate_steering_rack}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_calibrate_steering_rack.svg')} alt="block_hubs_all_motors_port_calibrate_steering_rack.svg" />
Kalibroi ohjauksen nollapisteen.

- Vaatimus: moottorin tulee tukea kulman mittausta (encoder).
- Mekaaninen vaatimus: liikealueen tulee olla rajoitettu.
- Toiminta: mittaa liikealueen ja laskee kalibroinnin.
- Tuloste: tallentaa tulokset muuttujille.

## Säätö ja turvallisuus

### `Aseta moottorin pysäytyskäyttäytyminen` {#block_hubs_all_motors_port_set_motor_to_at_stop}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_to_at_stop.svg')} alt="block_hubs_all_motors_port_set_motor_to_at_stop.svg" />
Asettaa pysäytystilan.

- Vaihtoehdot: `jarru`, `pidä`, `vapaa`
- Huom: vaatii encoder-tuetun moottorin.

### `Aseta jumituksen tunnistus` {#block_hubs_all_motors_port_set_motors_stall_detection}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motors_stall_detection.svg')} alt="block_hubs_all_motors_port_set_motors_stall_detection.svg" />
Ottaa käyttöön tai poistaa jumituksen tunnistuksen.

- Huom: vain MINDSTORMS Robot Inventor.

### `Aseta kiihtyvyys` {#block_hubs_all_motors_port_set_acceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_acceleration.svg')} alt="block_hubs_all_motors_port_set_acceleration.svg" />
Asettaa kiihtyvyysprofiilin.

- Vaihtoehdot: `oletus`, `nopea`, `tasapainoinen`, `pehmeä`, `hidas`, `erittäin hidas`

### `Aseta hidastuvuus` {#block_hubs_all_motors_port_set_deceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_deceleration.svg')} alt="block_hubs_all_motors_port_set_deceleration.svg" />
Asettaa hidastuvuusprofiilin.

- Vaihtoehdot: `oletus`, `nopea`, `tasapainoinen`, `pehmeä`, `hidas`, `erittäin hidas`

## Moottorin arvolohkot

### `Sijainti` {#block_hubs_all_motors_port_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_position.svg')} alt="block_hubs_all_motors_port_position.svg" />
Palauttaa moottorin sijainnin.

### `Suhteellinen sijainti` {#block_hubs_all_motors_port_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_relative_position.svg')} alt="block_hubs_all_motors_port_relative_position.svg" />
Palauttaa suhteellisen sijainnin.

### `Nopeus` {#block_hubs_all_motors_port_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_speed.svg')} alt="block_hubs_all_motors_port_speed.svg" />
Palauttaa nopeuden.

### `Teho` {#block_hubs_all_motors_port_power}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_power.svg')} alt="block_hubs_all_motors_port_power.svg" />
Palauttaa tehon.

- Huom: vain MINDSTORMS Robot Inventor.

## Technic Move -moottorilohkot

### `Käynnistä moottorit nopeudella` {#block_hubs_technicmove_motors_start_motors_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_start_motors_at_speed.svg')} alt="block_hubs_technicmove_motors_start_motors_at_speed.svg" />
Käynnistää ajomoottorit.

### `Pysäytä moottorit` {#block_hubs_technicmove_motors_stop_motors}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_stop_motors.svg')} alt="block_hubs_technicmove_motors_stop_motors.svg" />
Pysäyttää moottorit.

### `Jarru` {#block_hubs_technicmove_motors_brake}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_brake.svg')} alt="block_hubs_technicmove_motors_brake.svg" />
Asettaa jarrun.

- Vaihtoehdot: `pois`, `päällä`

### `Aseta ohjaus` {#block_hubs_technicmove_motors_set_steering_rack_to}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_set_steering_rack_to.svg')} alt="block_hubs_technicmove_motors_set_steering_rack_to.svg" />
Asettaa ohjauksen arvon.

### `Kalibroi ohjaus` {#block_hubs_technicmove_motors_calibrate_steering_rack}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_calibrate_steering_rack.svg')} alt="block_hubs_technicmove_motors_calibrate_steering_rack.svg" />
Kalibroi ohjauksen.

## Käyttöhuomiot

- Käytä absoluuttista tai suhteellista sijaintia tarpeen mukaan.
- Säädä kiihtyvyyttä ja hidastuvuutta sujuvuuden parantamiseksi.
- Ota käyttöön jumituksen tunnistus tarvittaessa.