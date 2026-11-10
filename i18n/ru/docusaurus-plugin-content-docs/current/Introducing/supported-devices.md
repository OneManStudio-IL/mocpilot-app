---
id: SupportedDevices
title: Поддерживаемые хабы, моторы и датчики
description: "Хабы, моторы и датчики, которые работают с MOCPilot."
---

import { SupportedHubsTable, SupportedMotorsTable, SupportedSensorsTable } from '@site/src/components/SupportedDevices';

# Поддерживаемые устройства

MOCPilot работает с этими хабами, моторами и датчиками. Любой хаб работает в обоих редакторах программ — [Быстрых связях](/docs/Application/Links/LinksIntroducing) и [Логических блоках](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing).

## Хабы

<SupportedHubsTable />

Примечания:

- В профиле 5 слотов для хабов: 2 бесплатные, ещё 3 открываются покупкой дополнительного слота или с [MocPilot Pro](/docs/Application/Account/Pro).
- Хабы **Mould King** только принимают команды (без датчиков и обратной связи). В профиле можно использовать только один тип Mould King: до 3 хабов Mould King 4.0 или 1 Mould King 6.0.
- Хаб **Robot Inventor** (LEGO® Large Hub) использует классический Bluetooth и недоступен на iPhone и iPad.
- Обновление и восстановление прошивки доступны для Technic Hub, Technic Move Hub, BOOST Move Hub и City Hub. См. [Обновление прошивки](/docs/Application/Hubs/FirmwareUpdating).
- Что умеет каждый хаб, кроме моторов и света, описано в разделе [Функции отдельных хабов](/docs/Application/Hubs/HubFunctions).

## Моторы

<SupportedMotorsTable />

Моторы с энкодером (угловые моторы, Technic L и XL) сообщают скорость и положение, поэтому их можно использовать как серво, поворачивать на заданный угол и ставить в позицию. Простые моторы (моторы поездов, простой средний линейный мотор) принимают только скорость.

## Датчики и свет

<SupportedSensorsTable />

Можно использовать и встроенные датчики хабов (заряд батареи, наклон, ускорение, температура), и датчики вашего телефона или планшета. См. [Датчики телефона](/docs/Application/Dashboard/PhoneSensors).
