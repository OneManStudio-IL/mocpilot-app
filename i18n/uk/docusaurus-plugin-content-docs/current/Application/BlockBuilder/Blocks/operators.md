---
id: Operators
title: Оператори
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Оператори

Оператори — це репортер- та логічні блоки для обчислень, порівнянь, логіки і роботи з рядками.

## Арифметичні оператори

### `Плюс` {#block_operator_plus}

<img src={useBaseUrl('/img/blocks/block_operator_plus.svg')} alt="block_operator_plus.svg" />

Повертає суму двох значень.

### `Мінус` {#block_operator_minus}

<img src={useBaseUrl('/img/blocks/block_operator_minus.svg')} alt="block_operator_minus.svg" />

Повертає результат віднімання двох значень.

### `Множення` {#block_operator_multiply}

<img src={useBaseUrl('/img/blocks/block_operator_multiply.svg')} alt="block_operator_multiply.svg" />

Повертає добуток двох значень.

### `Ділення` {#block_operator_divide}

<img src={useBaseUrl('/img/blocks/block_operator_divide.svg')} alt="block_operator_divide.svg" />

Повертає результат ділення двох значень.

### `Остача` {#block_operator_modulus}

<img src={useBaseUrl('/img/blocks/block_operator_modulus.svg')} alt="block_operator_modulus.svg" />

Повертає остачу після ділення.

### `Округлити` {#block_operator_round}

<img src={useBaseUrl('/img/blocks/block_operator_round.svg')} alt="block_operator_round.svg" />

Округлює до найближчого цілого (наприклад `2.6 -> 3`).

### `Math single` {#block_operator_math_single}

<img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />

Застосовує математичну функцію з одним аргументом.

Доступні функції:

- `abs`: абсолютне значення числа
- `floor`: округлення вниз до найближчого цілого
- `ceiling`: округлення вгору до найближчого цілого
- `sqrt`: квадратний корінь
- `sin`: синус (за кутом)
- `cos`: косинус (за кутом)
- `tan`: тангенс (за кутом)
- `asin`: арксинус
- `acos`: арккосинус
- `atan`: арктангенс
- `ln`: натуральний логарифм (основа `e`)
- `log`: логарифм за основою `10`
- `e^`: піднести `e` до степеня вхідного значення
- `10^`: піднести `10` до степеня вхідного значення

### `Math pair` {#block_operator_math_pair}

<img src={useBaseUrl('/img/blocks/block_operator_math_pair.svg')} alt="block_operator_math_pair.svg" />

Застосовує математичну функцію з двома аргументами.

Доступні функції:

- `min`: менше з двох значень
- `max`: більше з двох значень
- `pow`: перше значення у степені другого
- `atan2`: кут за парою X/Y
- `hypot`: довжина гіпотенузи за двома компонентами
- `copysign`: перше значення зі знаком другого

### `Випадкове число` {#block_operator_pick_random}

<img src={useBaseUrl('/img/blocks/block_operator_pick_random.svg')} alt="block_operator_pick_random.svg" />

Повертає випадкове число у вибраному діапазоні.

## Оператори порівняння

### `Дорівнює` {#block_operator_equal}

<img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />

Повертає `істина`, коли два значення рівні.

### `Не дорівнює` {#block_operator_not_equal}

<img src={useBaseUrl('/img/blocks/block_operator_not_equal.svg')} alt="block_operator_not_equal.svg" />

Повертає `істина`, коли два значення не рівні.

### `Більше ніж` {#block_operator_greater_than}

<img src={useBaseUrl('/img/blocks/block_operator_greater_than.svg')} alt="block_operator_greater_than.svg" />

Повертає `істина`, коли ліве значення більше за праве.

### `Менше ніж` {#block_operator_less_than}

<img src={useBaseUrl('/img/blocks/block_operator_less_than.svg')} alt="block_operator_less_than.svg" />

Повертає `істина`, коли ліве значення менше за праве.

### `У межах` {#block_operator_is_in_between}

<img src={useBaseUrl('/img/blocks/block_operator_is_in_between.svg')} alt="block_operator_is_in_between.svg" />

Повертає `істина`, коли значення лежить у заданих межах.

## Логічні оператори

### `І` {#block_operator_and}

<img src={useBaseUrl('/img/blocks/block_operator_and.svg')} alt="block_operator_and.svg" />

Повертає `істина` лише тоді, коли обидві умови мають значення `істина`.

### `Або` {#block_operator_or}

<img src={useBaseUrl('/img/blocks/block_operator_or.svg')} alt="block_operator_or.svg" />

Повертає `істина`, якщо хоча б одна умова має значення `істина`.

### `Не` {#block_operator_not}

<img src={useBaseUrl('/img/blocks/block_operator_not.svg')} alt="block_operator_not.svg" />

Інвертує логічне значення.

## Текстові оператори

### `Обʼєднати` {#block_operator_join}

<img src={useBaseUrl('/img/blocks/block_operator_join.svg')} alt="block_operator_join.svg" />

Об’єднує два текстові значення.

### `Символ на позиції` {#block_operator_letter_at}

<img src={useBaseUrl('/img/blocks/block_operator_letter_at.svg')} alt="block_operator_letter_at.svg" />

Повертає символ на вибраній позиції у тексті.

### `Довжина рядка` {#block_operator_size_of_string}

<img src={useBaseUrl('/img/blocks/block_operator_size_of_string.svg')} alt="block_operator_size_of_string.svg" />

Повертає довжину рядка.

### `Рядок містить` {#block_operator_string_contains}

<img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />

Повертає `істина`, якщо текст містить вказаний підрядок.

## Примітки щодо використання

- Використовуйте оператори для побудови умов у `if`, `wait until` та фільтрах подій.
- Для керування моторами нормалізуйте і обмежуйте значення перед передачею в блоки швидкості/потужності.
- Уникайте ділення на нуль у блоках `Ділення` і `Остача`.
