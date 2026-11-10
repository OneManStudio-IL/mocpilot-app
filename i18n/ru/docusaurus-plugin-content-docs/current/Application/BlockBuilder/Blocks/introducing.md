---
id: BlocksIntroducing
title: Знакомство с Логическими блоками
description: "Логические блоки — визуальный редактор блочного программирования MOCPilot: события, циклы, условия, переменные и датчики."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# Логические блоки

**Логические блоки** — редактор блочного программирования MOCPilot. Программа собирается из соединённых блоков, и если вы знаете Scratch, всё покажется знакомым: события, циклы, условия, переменные, списки, собственные блоки, а также блоки для моторов, света, датчиков, элементов панели управления и геймпада.

Выбирайте Логические блоки, когда модели нужна логика: роботы, автоматические последовательности, реакция на датчики, проверки при запуске, игры. Чтобы просто связать элементы управления с моторами, быстрее подойдут [Быстрые связи](/docs/Application/Links/LinksIntroducing).

<img src={useBaseUrl('/img/illustrations/editor_blocks.svg')} alt="Программа на Логических блоках" style={{width: '100%', maxWidth: 720}} />

:::warning Это не Scratch
У Логических блоков свой набор блоков и своё поведение. Программы MOCPilot нельзя импортировать в Scratch, а проекты Scratch — в MOCPilot.
:::

## Редактор с первого взгляда

<Screenshot name="blocks-editor" alt="Редактор Логических блоков с палитрой и программой" width={900} />

- **Палитра** содержит категории блоков: **События**, **Контроль**, **Оператор**, **Переменные**, **Списки**, **Мои блоки**, **Датчики**, а если они есть в профиле — **Моторы**, **Свет**, **Наэкранные контроллеры** и **Геймпад**.
- **Область программы** — место, куда вы перетаскиваете блоки и собираете скрипты.
- В верхней панели есть **Мои хабы**, **Панель**, **Геймпад**, **Монитор**, **Настройки редактора**, **ИИ-конструктор** и **Play/Stop**.

Подробнее — в разделе [Работа в редакторе](/docs/Application/BlockBuilder/Editor).

## Как выполняется программа

- Скрипт начинается с блока **события** (стартового блока): *Когда программа запущена*, *Когда кнопка … нажата*, *Когда сообщение получено*…
- Присоединённые ниже блоки выполняются сверху вниз.
- Несколько скриптов работают **одновременно**. Чтобы согласовать их, используйте сообщения (*Рассылка*).
- **Циклы** (*Всегда*, *Повторить*, *Повторять до*) не дают скрипту закончиться; **условия** (*Если*, *Если / Иначе*, *Ждать до*) принимают решения.
- **Репортер-блоки** (круглые) возвращают значения и вставляются в поля других блоков; **логические** блоки (заострённые) возвращают истину или ложь для условий.
- **Переменные** и **списки** хранят значения между блоками и скриптами.

## Формы блоков и их назначение

### Стартовые блоки

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />
  <img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />
</div>

Запускают скрипт, когда происходит определённое событие. Блоки к ним присоединяются только снизу.

---

### Командные блоки

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
</div>

Основные блоки, которые выполняют действия.

---

### C-блоки

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />
</div>

Управляющие блоки C-образной формы, внутри которых лежат вложенные стеки блоков (циклы и условия).

---

### Репортер-блоки

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />
</div>

Возвращают значения, например числа или строки.

---

### Логические (boolean) блоки

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />
</div>

Возвращают только `true` или `false`; обычно используются в условиях.

---

### Завершающие блоки

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />
</div>

Завершают скрипт: присоединить блоки под ними нельзя.

---

### Стек блоков

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks_stack.svg')} alt="blocks_stack.svg" />
</div>

Стек блоков — это последовательность соединённых блоков, которая выполняется как один скрипт сверху вниз.
Обычно стек начинается с блока события, а затем по порядку выполняются присоединённые блоки.

---


## Хабы, порты и элементы управления

- Блоки моторов и света принимают **хаб** и **порт**. Категории Моторы и Свет появляются, только если их поддерживает хаб профиля, а некоторые блоки — только для определённых хабов (например, режимы мощности BuWizz или функции Technic Move).
- Блоки панели обращаются к элементам по имени (**JOY1**, **BTN2**). Элемент, который используется в блоках, нельзя удалить с панели, пока не удалены его блоки.
- Блоки геймпада появляются, когда включён параметр **Включить блоки геймпада** на [странице «Геймпад»](/docs/Application/Dashboard/Gamepad).

## Уровни блоков

У каждого профиля есть **уровень блоков**: **Новичок** показывает самые простые блоки, **Продвинутый** добавляет основные блоки логики и устройств, **Гуру** показывает полный набор. Уровень выбирается при создании профиля или в настройках редактора.

## Рекомендуемый порядок работы

1. Начните с одного блока события и минимального скрипта; нажмите **Play** и убедитесь, что всё работает.
2. Сразу проверьте направления моторов и диапазоны значений (используйте Монитор).
3. Разбейте программу на небольшие скрипты, которые общаются сообщениями; повторяющуюся логику вынесите в [Мои блоки](/docs/Application/BlockBuilder/Blocks/MyBlocks).
4. Добавьте защиту: ограничения, остановки, проверку при запуске и реакцию на отключение хаба.

## Типичные ошибки

- Скрипт без блока события никогда не запустится.
- Выбран не тот хаб или порт — ничего заметного не происходит.
- Смешивание текста, чисел и логических значений даёт неожиданные результаты.
- Очень частые события без фильтрации (например, событие датчика на каждое крошечное изменение) могут перегрузить программу; используйте пороги или короткие паузы.

## Справочник блоков {#block-reference}

- [События](/docs/Application/BlockBuilder/Blocks/Events) · [Контроль](/docs/Application/BlockBuilder/Blocks/Control) · [Операторы](/docs/Application/BlockBuilder/Blocks/Operators)
- [Переменные](/docs/Application/BlockBuilder/Blocks/Variables) · [Списки](/docs/Application/BlockBuilder/Blocks/Lists) · [Мои блоки](/docs/Application/BlockBuilder/Blocks/MyBlocks)
- [Моторы](/docs/Application/BlockBuilder/Blocks/Motors) · [Свет](/docs/Application/BlockBuilder/Blocks/Light) · [Датчики](/docs/Application/BlockBuilder/Blocks/Sensors)
- [Наэкранные контроллеры](/docs/Application/BlockBuilder/Blocks/DashboardControllers) · [Геймпад](/docs/Application/BlockBuilder/Blocks/Gamepad)

В приложении долгое нажатие (правый клик) на блок → **О блоке** открывает его описание здесь.

Готовые программы: [Примеры](/docs/Application/BlockBuilder/Examples).
