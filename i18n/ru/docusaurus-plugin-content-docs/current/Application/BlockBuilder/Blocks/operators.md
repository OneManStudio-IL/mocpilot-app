---
id: Operators
title: Операторы
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Операторы

Операторы — это репортер- и boolean-блоки для вычислений, сравнений, логики и работы со строками.

## Арифметические операторы

### `Плюс` {#block_operator_plus}
<img src={useBaseUrl('/img/blocks/block_operator_plus.svg')} alt="block_operator_plus.svg" />
Возвращает сумму двух значений.

### `Минус` {#block_operator_minus}
<img src={useBaseUrl('/img/blocks/block_operator_minus.svg')} alt="block_operator_minus.svg" />
Возвращает результат вычитания двух значений.

### `Умножение` {#block_operator_multiply}
<img src={useBaseUrl('/img/blocks/block_operator_multiply.svg')} alt="block_operator_multiply.svg" />
Возвращает произведение двух значений.

### `Деление` {#block_operator_divide}
<img src={useBaseUrl('/img/blocks/block_operator_divide.svg')} alt="block_operator_divide.svg" />
Возвращает результат деления двух значений.

### `Остаток` {#block_operator_modulus}
<img src={useBaseUrl('/img/blocks/block_operator_modulus.svg')} alt="block_operator_modulus.svg" />
Возвращает остаток от деления.

### `Округлить` {#block_operator_round}
<img src={useBaseUrl('/img/blocks/block_operator_round.svg')} alt="block_operator_round.svg" />
Округляет до ближайшего целого (например, `2.6 -> 3`).

### `Математика (один аргумент)` {#block_operator_math_single}
<img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />
Применяет математическую функцию с одним аргументом.

Доступные функции:

- `abs`: модуль числа
- `floor`: округление вниз до целого
- `ceiling`: округление вверх до целого
- `sqrt`: квадратный корень
- `sin`: синус (по углу)
- `cos`: косинус (по углу)
- `tan`: тангенс (по углу)
- `asin`: арксинус
- `acos`: арккосинус
- `atan`: арктангенс
- `ln`: натуральный логарифм (основание `e`)
- `log`: логарифм по основанию `10`
- `e^`: `e` в степени входного значения
- `10^`: `10` в степени входного значения

### `Математика (два аргумента)` {#block_operator_math_pair}
<img src={useBaseUrl('/img/blocks/block_operator_math_pair.svg')} alt="block_operator_math_pair.svg" />
Применяет математическую функцию с двумя аргументами.

Доступные функции:

- `min`: меньшее из двух значений
- `max`: большее из двух значений
- `pow`: первое значение в степени второго
- `atan2`: угол по паре X/Y
- `hypot`: длина гипотенузы по двум компонентам
- `copysign`: первое значение со знаком второго

### `Случайное число` {#block_operator_pick_random}
<img src={useBaseUrl('/img/blocks/block_operator_pick_random.svg')} alt="block_operator_pick_random.svg" />
Возвращает случайное число в выбранном диапазоне.

## Операторы сравнения

### `Равно` {#block_operator_equal}
<img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />
Возвращает `истина`, когда два значения равны.

### `Не равно` {#block_operator_not_equal}
<img src={useBaseUrl('/img/blocks/block_operator_not_equal.svg')} alt="block_operator_not_equal.svg" />
Возвращает `истина`, когда два значения не равны.

### `Больше чем` {#block_operator_greater_than}
<img src={useBaseUrl('/img/blocks/block_operator_greater_than.svg')} alt="block_operator_greater_than.svg" />
Возвращает `истина`, когда левое значение больше правого.

### `Меньше чем` {#block_operator_less_than}
<img src={useBaseUrl('/img/blocks/block_operator_less_than.svg')} alt="block_operator_less_than.svg" />
Возвращает `истина`, когда левое значение меньше правого.

### `Между` {#block_operator_is_in_between}
<img src={useBaseUrl('/img/blocks/block_operator_is_in_between.svg')} alt="block_operator_is_in_between.svg" />
Возвращает `истина`, когда значение находится в заданных границах.

## Логические операторы

### `И` {#block_operator_and}
<img src={useBaseUrl('/img/blocks/block_operator_and.svg')} alt="block_operator_and.svg" />
Возвращает `истина` только если оба условия равны `истина`.

### `Или` {#block_operator_or}
<img src={useBaseUrl('/img/blocks/block_operator_or.svg')} alt="block_operator_or.svg" />
Возвращает `истина`, если хотя бы одно условие равно `истина`.

### `Не` {#block_operator_not}
<img src={useBaseUrl('/img/blocks/block_operator_not.svg')} alt="block_operator_not.svg" />
Инвертирует логическое значение.

## Текстовые операторы

### `Объединить` {#block_operator_join}
<img src={useBaseUrl('/img/blocks/block_operator_join.svg')} alt="block_operator_join.svg" />
Объединяет два текстовых значения.

### `Буква по индексу` {#block_operator_letter_at}
<img src={useBaseUrl('/img/blocks/block_operator_letter_at.svg')} alt="block_operator_letter_at.svg" />
Возвращает символ в выбранной позиции текста.

### `Длина строки` {#block_operator_size_of_string}
<img src={useBaseUrl('/img/blocks/block_operator_size_of_string.svg')} alt="block_operator_size_of_string.svg" />
Возвращает длину строки.

### `Строка содержит` {#block_operator_string_contains}
<img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />
Возвращает `истина`, если текст содержит указанную подстроку.

## Примечания по использованию

- Используйте операторы для построения условий в `if`, `wait until` и фильтрах событий.
- Для управления моторами нормализуйте и ограничивайте значения перед передачей в блоки speed/power.
- Избегайте деления на ноль в `Divide` и `Modulus`.
