---
id: Motors
title: Мотори
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Мотори

Моторні блоки використовуються для запуску, зупинки, позиціювання та налаштування моторів, підключених до портів хаба.

## Основні командні блоки моторів

### `Запустити мотор` {#block_hubs_all_motors_port_start_motor}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor.svg')} alt="block_hubs_all_motors_port_start_motor.svg" />
Запускає вибраний мотор.

- Варіанти напряму: за годинниковою стрілкою / проти годинникової стрілки

### `Зупинити мотор` {#block_hubs_all_motors_port_stop_motor}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_stop_motor.svg')} alt="block_hubs_all_motors_port_stop_motor.svg" />
Зупиняє вибраний мотор.

### `Запустити на` {#block_hubs_all_motors_port_run_for}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for.svg')} alt="block_hubs_all_motors_port_run_for.svg" />
Запускає вибраний мотор на вказаний час/кут/оберти залежно від налаштувань блоку.

- Варіанти напряму: за годинниковою стрілкою / проти годинникової стрілки
- Варіанти одиниць: `оберти`, `градуси`, `секунди`
- Примітка: ця функція потребує мотор на вибраному порту з підтримкою енкодерного керування.

### `Запустити мотор зі швидкістю` {#block_hubs_all_motors_port_start_motor_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor_at_speed.svg')} alt="block_hubs_all_motors_port_start_motor_at_speed.svg" />
Запускає мотор із явно заданою швидкістю.

### `Запустити на зі швидкістю` {#block_hubs_all_motors_port_run_for_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for_at_speed.svg')} alt="block_hubs_all_motors_port_run_for_at_speed.svg" />
Запускає мотор на задану тривалість/величину з явно заданою швидкістю.

- Варіанти одиниць: `оберти`, `градуси`, `секунди`
- Примітка: ця функція потребує мотор на вибраному порту з підтримкою енкодерного керування.

### `Встановити швидкість мотора` {#block_hubs_all_motors_port_set_motor_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_speed.svg')} alt="block_hubs_all_motors_port_set_motor_speed.svg" />
Встановлює швидкість, яку використовують пов’язані блоки запуску мотора.

## Блоки позиціювання та руху

### `Перейти до позиції` {#block_hubs_all_motors_port_go_to_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_position.svg')} alt="block_hubs_all_motors_port_go_to_position.svg" />
Переміщує мотор у цільову абсолютну позицію.

- Варіанти шляху: `найкоротший шлях`, `за годинниковою стрілкою`, `проти годинникової стрілки`
- Примітка: ця функція потребує мотор на вибраному порту з підтримкою енкодерного керування.

### `Перейти до відносної позиції` {#block_hubs_all_motors_port_go_to_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_relative_position.svg')} alt="block_hubs_all_motors_port_go_to_relative_position.svg" />
Переміщує мотор на відносне зміщення.

- Примітка: ця функція потребує мотор на вибраному порту з підтримкою енкодерного керування.

### `BuWizz 3: перейти до відносної позиції` {#block_hubs_buwizz3_motors_port_go_to_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_motors_port_go_to_relative_position.svg')} alt="block_hubs_buwizz3_motors_port_go_to_relative_position.svg" />
Варіант блоку відносного позиціювання для BuWizz 3.

- Примітка: ця функція потребує мотор на вибраному порту з підтримкою енкодерного керування.

### `Встановити відносну позицію` {#block_hubs_all_motors_port_set_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_relative_position.svg')} alt="block_hubs_all_motors_port_set_relative_position.svg" />
Встановлює опорне значення відносної позиції мотора.

- Примітка: ця функція потребує мотор на вибраному порту з підтримкою енкодерного керування.

### `Калібрувати рульову рейку` {#block_hubs_all_motors_port_calibrate_steering_rack}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_calibrate_steering_rack.svg')} alt="block_hubs_all_motors_port_calibrate_steering_rack.svg" />
Калібрує нейтральну/опорну позицію рульової рейки.

- Вимога: мотор на вибраному порту має підтримувати абсолютне/відносне відстеження кута (вбудований енкодер).
- Механічна вимога: вісь керма має бути фізично обмежена в допустимому діапазоні (наприклад, кінцевими положеннями рейки/передачі).
- Як працює: блок проходить доступний діапазон повороту, вимірює його та обчислює калібрувальні дані для налаштування кермування.
- Поведінка виходу: аргументи блоку записують результати у змінні, передані в блок (поведінка подібна до pass-by-reference); ці змінні змінюються всередині блоку і використовуються для читання результатів калібрування.

## Блоки налаштування і безпеки мотора

### `Встановити поведінку мотора при зупинці` {#block_hubs_all_motors_port_set_motor_to_at_stop}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_to_at_stop.svg')} alt="block_hubs_all_motors_port_set_motor_to_at_stop.svg" />
Встановлює режим зупинки мотора (наприклад гальмо/утримання/накат залежно від доступних варіантів).

- Варіанти режиму зупинки: `гальмо`, `утримувати позицію`, `накат`
- Примітка: ця функція потребує мотор на вибраному порту з підтримкою енкодерного керування.

### `Встановити виявлення заклинювання` {#block_hubs_all_motors_port_set_motors_stall_detection}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motors_stall_detection.svg')} alt="block_hubs_all_motors_port_set_motors_stall_detection.svg" />
Вмикає або вимикає виявлення заклинювання.

- Примітка: доступно лише для хаба MINDSTORMS Robot Inventor.

### `Встановити прискорення` {#block_hubs_all_motors_port_set_acceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_acceleration.svg')} alt="block_hubs_all_motors_port_set_acceleration.svg" />
Встановлює профіль/швидкість прискорення мотора.

- Варіанти профілю: `default`, `fast`, `balanced`, `smooth`, `slow`, `very slow`
- Примітка: ця функція потребує мотор на вибраному порту з підтримкою енкодерного керування.

### `Встановити уповільнення` {#block_hubs_all_motors_port_set_deceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_deceleration.svg')} alt="block_hubs_all_motors_port_set_deceleration.svg" />
Встановлює профіль/швидкість уповільнення мотора.

- Варіанти профілю: `default`, `fast`, `balanced`, `smooth`, `slow`, `very slow`
- Примітка: ця функція потребує мотор на вибраному порту з підтримкою енкодерного керування.

## Репортер-блоки моторів

### `Позиція` {#block_hubs_all_motors_port_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_position.svg')} alt="block_hubs_all_motors_port_position.svg" />
Повертає поточну позицію мотора.

### `Відносна позиція` {#block_hubs_all_motors_port_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_relative_position.svg')} alt="block_hubs_all_motors_port_relative_position.svg" />
Повертає поточне значення відносної позиції.

### `Швидкість` {#block_hubs_all_motors_port_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_speed.svg')} alt="block_hubs_all_motors_port_speed.svg" />
Повертає поточну швидкість мотора.

### `Потужність` {#block_hubs_all_motors_port_power}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_power.svg')} alt="block_hubs_all_motors_port_power.svg" />
Повертає поточне значення потужності мотора.

- Примітка: доступно лише для хаба MINDSTORMS Robot Inventor.

## Моторні блоки Technic Move

### `Запустити мотори зі швидкістю` {#block_hubs_technicmove_motors_start_motors_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_start_motors_at_speed.svg')} alt="block_hubs_technicmove_motors_start_motors_at_speed.svg" />
Запускає привідні мотори Technic Move з вибраною швидкістю.

### `Зупинити мотори` {#block_hubs_technicmove_motors_stop_motors}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_stop_motors.svg')} alt="block_hubs_technicmove_motors_stop_motors.svg" />
Зупиняє привідні мотори Technic Move.

### `Гальмо` {#block_hubs_technicmove_motors_brake}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_brake.svg')} alt="block_hubs_technicmove_motors_brake.svg" />
Застосовує гальмівну поведінку до моторів Technic Move.

- Варіанти гальма: `вимкнено`, `увімкнено`

### `Встановити рульову рейку в` {#block_hubs_technicmove_motors_set_steering_rack_to}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_set_steering_rack_to.svg')} alt="block_hubs_technicmove_motors_set_steering_rack_to.svg" />
Встановлює цільову позицію/значення рульової рейки.

### `Калібрувати рульову рейку` {#block_hubs_technicmove_motors_calibrate_steering_rack}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_calibrate_steering_rack.svg')} alt="block_hubs_technicmove_motors_calibrate_steering_rack.svg" />
Калібрує рульову рейку Technic Move за внутрішнім алгоритмом хаба з автоматичним визначенням діапазону керма.

- Примітка: вісь мотора має бути механічно обмежена (наприклад, механізмом рульової рейки).