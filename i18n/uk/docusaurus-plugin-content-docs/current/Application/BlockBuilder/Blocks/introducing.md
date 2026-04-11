---
id: BlocksIntroducing
title: Вступ до блоків
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Вступ до блоків

MOCPilot використовує візуальну систему блокового програмування, яка за логікою роботи схожа на Scratch.
Кожен блок має свою роль, а правильні поєднання блоків формують керування потоком виконання та даними у скрипті.

:::warning Важливо про сумісність
Це окрема блокова система з власним набором блоків і поведінкою.
Програми MOCPilot несумісні з проєктами Scratch: імпорт у будь-який бік не підтримується.
:::

## Форми блоків та їх призначення

### Стартові блоки

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />
  <img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />
</div>

Запускають скрипт, коли відбувається подія. Інші блоки можна приєднати лише знизу.

---

### Командні блоки

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
</div>

Основні виконавчі блоки для дій.

---

### C-блоки

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />
</div>

Керувальні блоки з вкладеними стеками (цикли та умови).

---

### Репортер-блоки

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />
</div>

Повертають значення (числа, рядки тощо).

---

### Логічні блоки

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />
</div>

Повертають лише `істина` або `хиба`, зазвичай для умов.

---

### Завершальні блоки

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />
</div>

Завершують скрипт і не дають приєднувати блоки нижче.

---

### Стек блоків

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks_stack.svg')} alt="blocks_stack.svg" />
</div>

Стек блоків — це послідовність з’єднаних блоків, що виконується зверху вниз.

---

## Модель виконання скрипта

- Скрипт зазвичай починається зі стартового блоку події.
- З’єднані блоки виконуються зверху вниз.
- Кілька скриптів можуть працювати паралельно.
- Блоки повідомлень/розсилки синхронізують скрипти.

## Дані та значення

- Репортер-блоки можна вкладати у поля введення команд і умов.
- Змінні зберігають повторно використовувані значення.
- Списки зберігають впорядковані колекції.

## Події та час

- Події реагують на ввід користувача, стан хаба, датчики або повідомлення.
- Події на таймерах і датчиках можуть спрацьовувати дуже часто.
- Використовуйте пороги, фільтрацію та короткі затримки.

## Хаб, порти та контролери

- Блоки хаба працюють у контексті хаба та портів.
- Частина блоків доступна лише для окремих моделей/сімейств хабів.
- Блоки екранних контролерів і геймпада дають ввід під час виконання.

## Рекомендований робочий процес

1. Почніть з одного стартового блоку події.
2. Рано перевірте напрямки й діапазони моторів/датчиків.
3. Повторювану логіку виносьте в допоміжні скрипти.
4. Перед фінальним налаштуванням додайте обмеження і захист.

## Типові помилки

- Немає стартового блоку події, тому скрипт не запускається.
- Неправильний вибір хаба/порту не дає видимого ефекту.
- Змішування типів даних псує логіку умов.
- Часті події без фільтрації перевантажують поведінку.

## Структура документації в цьому розділі

Використовуйте сторінки категорій у такому порядку:

- Світло
- Мотори
- Датчики
- Події
- Керування
- Оператори
- Змінні
- Списки
- Мої блоки
- Екранні контролери
- Геймпад
