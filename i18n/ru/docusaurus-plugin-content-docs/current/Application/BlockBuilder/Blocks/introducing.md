---
id: BlocksIntroducing
title: Введение В Блоки
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Введение В Блоки

MOCPilot использует визуальную систему блочного программирования, которая по внешнему виду и взаимодействию похожа на Scratch.
У каждого блока есть своя роль, а допустимые комбинации определяют поток выполнения и поток данных в скрипте.
Используется логика drag-and-drop и паттерны взаимодействия в стиле Scratch, чтобы создавать программы было удобно и привычно.

:::warning Важно О Совместимости
Это другая блочная система со своим набором блоков и поведением.
Программы MOCPilot не совместимы с проектами Scratch: программы MOCPilot нельзя импортировать в Scratch, а программы Scratch нельзя импортировать в MOCPilot.
:::

## Формы Блоков И Их Назначение

### Стартовые Блоки (Hat)

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />
  <img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />
</div>

Запускают скрипт при наступлении определенного события. К ним можно присоединять блоки только снизу.

---

### Командные Блоки (Stack)

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
</div>

Основные командные блоки, которые выполняют действия.

---

### C-Блоки

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />
</div>

Управляющие блоки C-образной формы, которые содержат вложенные стеки блоков (циклы/условия).

---

### Репортер-Блоки (Reporter)

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />
</div>

Возвращают значения, например числа или строки.

---

### Логические Блоки (Boolean)

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />
</div>

Возвращают только `true` или `false`, обычно используются в условиях.

---

### Завершающие Блоки (Cap)

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />
</div>

Завершают скрипт и не позволяют присоединять блоки снизу.

---

### Стек Блоков

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks_stack.svg')} alt="blocks_stack.svg" />
</div>

Стек блоков — это последовательность соединенных блоков, которая выполняется как единый скрипт сверху вниз.
Обычно стек начинается с блока события, после чего присоединенные блоки выполняются по порядку.

---

## Модель Выполнения Скрипта

- Скрипт обычно начинается с блока события.
- Соединенные блоки выполняются сверху вниз.
- Несколько скриптов могут работать параллельно.
- Блоки сообщений/рассылки используются для синхронизации скриптов.
- Стек блоков — это последовательность блоков, соединенных между собой.

## Данные И Значения

- Репортер-блоки можно вкладывать в поля ввода команд и условий.
- Переменные хранят переиспользуемые значения между блоками и скриптами.
- Списки хранят упорядоченные коллекции для истории, очередей и поиска данных.

## События И Время

- Блоки событий реагируют на ввод пользователя, состояние хаба, датчики или сообщения.
- События на основе таймера и датчиков могут срабатывать очень часто.
- Используйте пороги, фильтрацию или короткие задержки, чтобы уменьшить шумные повторные срабатывания.

## Хаб, Порты И Контроллеры

- Блоки хаба работают в контексте хаба и портов.
- Некоторые блоки доступны только для отдельных семейств хабов/устройств.
- Блоки экранных контроллеров и геймпада дают ввод во время выполнения и управление интерфейсом.

## Рекомендуемый Порядок Работы

1. Начните с одного блока события и минимального скрипта.
2. Сразу проверьте направление и диапазоны моторов/датчиков.
3. Вынесите повторяющуюся логику в сообщения и вспомогательные скрипты.
4. Перед финальной настройкой добавьте защиту (ограничения, остановки, резервные значения).

## Типичные Ошибки

- Отсутствие стартового блока события означает, что скрипт не запустится.
- Неверный выбор хаба/порта приводит к отсутствию видимого эффекта.
- Смешивание типов значений (текст/число/boolean) может дать некорректную логику.
- Частые события без фильтрации могут перегрузить поведение программы.

## Структура Документации В Этом Разделе

Используйте страницы категорий в этом порядке:

- Свет
- Моторы
- Датчики
- События
- Управление
- Операторы
- Переменные
- Списки
- Мои Блоки
- Экранные контроллеры
- Геймпад
