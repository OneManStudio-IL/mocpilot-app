---
id: AboutApp
title: О MOCPilot
description: "MOCPilot превращает телефон, планшет или компьютер в пульт для LEGO® и совместимых Bluetooth-моделей."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# MOCPilot: собери, управляй, контролируй всё

**MOCPilot** превращает ваш телефон, планшет или компьютер в пульт для LEGO® и совместимых Bluetooth-моделей: машин, грузовиков, поездов, кранов, роботов и ваших собственных MOC.

Пульт вы рисуете сами — это **панель управления** с джойстиками, слайдерами, кнопками, рулями и индикаторами. Затем **программа** связывает её с моторами и светом ваших **хабов**. В MOCPilot два редактора программ:

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', margin: '24px 0'}}>
  <div>
    <img src={useBaseUrl('/img/illustrations/editor_links.svg')} alt="Редактор «Быстрые связи»: строки от входа к хабу" style={{width: '100%'}} />
    <h3>Быстрые связи</h3>
    <p>Без кода. Каждая строка связывает один элемент управления с мотором или светом: <em>вход → обработка → операция → хаб</em>. Машина готова за несколько минут. <a href="/docs/Application/Links/LinksIntroducing">Подробнее</a>.</p>
  </div>
  <div>
    <img src={useBaseUrl('/img/illustrations/editor_blocks.svg')} alt="Редактор «Логические блоки»: блочная программа" style={{width: '100%'}} />
    <h3>Логические блоки</h3>
    <p>Визуальные блоки: события, циклы, условия, переменные и данные датчиков. Для роботов, автоматики и всего, где нужна логика. <a href="/docs/Application/BlockBuilder/Blocks/BlocksIntroducing">Подробнее</a>.</p>
  </div>
</div>

## Что можно делать

- **Управлять любой моделью** с панели, которую вы спроектировали сами: джойстики, слайдеры, кнопки, переключатели, ступенчатые переключатели, мониторы, рули и педали.
- **Работать с настоящими хабами**: LEGO® Powered Up, Technic™, Technic Move, BOOST, City, WeDo 2.0, Robot Inventor, BuWizz, SBrick и Mould King. См. [поддерживаемые устройства](/docs/Introducing/SupportedDevices).
- **Подключить геймпад** (в стиле Xbox или PlayStation) вместо сенсорного экрана.
- **Читать датчики**: заряд и наклон хаба, скорость и положение моторов, датчики цвета и расстояния, наклон вашего телефона.
- **Оформить панель по-своему** с помощью [тем](/docs/Application/Themes/ThemesOverview).
- **Иметь профили везде**: с аккаунтом профили синхронизируются между устройствами, а редактировать их можно в браузере на [mocpilot.com](/docs/Introducing/WebEditor).
- **Делиться**: устанавливайте профили из [Каталога профилей](/docs/Application/Profiles/Catalog) и публикуйте свои.

<Screenshot name="dashboard-run" alt="Панель MOCPilot во время управления моделью" width={900} />

## Где работает MOCPilot

| Устройство | Интерфейс |
|---|---|
| Телефоны iPhone и Android | Телефонный: нижняя панель, панель управления открывается на весь экран в альбомной ориентации |
| iPad и планшеты Android | Планшетный: боковая панель, больше места для редактора |
| Компьютеры Mac и Windows | Настольный: меню, сочетания клавиш, панель управления в отдельном окне |
| Браузер на mocpilot.com | [Веб-редактор](/docs/Introducing/WebEditor): редактирование профилей; хабами управляет телефон |

Подробнее — в разделе [Телефон, планшет и компьютер](/docs/Introducing/Layouts).

## С чего начать

1. Прочитайте [Как устроен MOCPilot](/docs/Introducing/HowItWorks): пять минут, после которых всё остальное станет простым.
2. Пройдите [Быстрый старт](/docs/Introducing/QuickStart) и запустите свою первую модель.
3. Не знаете, какой редактор выбрать? Сравните их в разделе [Создание профиля](/docs/Application/Profiles/CreateProfile#choose-the-program-type).

:::note
LEGO®, логотип LEGO, Powered Up и Technic — товарные знаки LEGO Group, которая не спонсирует, не уполномочивает и не одобряет MOCPilot.
:::
