---
id: HubsOverview
title: Хабы
description: "Хабы в профилях MOCPilot: поддерживаемые хабы, слоты хабов и возможности каждого хаба."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Хабы

**Хаб** — это Bluetooth-блок вашей модели: к его портам подключаются моторы, свет и датчики, а MOCPilot общается с ним по Bluetooth.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '16px', alignItems: 'end', margin: '16px 0'}}>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/technic_hub_p.webp')} alt="Technic Hub" style={{maxWidth: 110}} /><div>Technic Hub</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/technic_move_hub_p.webp')} alt="Technic Move Hub" style={{maxWidth: 110}} /><div>Technic Move</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/city_hub_p.webp')} alt="City Hub" style={{maxWidth: 110}} /><div>City Hub</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/buwizz3_hub_p.webp')} alt="BuWizz 3.0 Pro" style={{maxWidth: 110}} /><div>BuWizz 3.0</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/sbrick_hub_p.webp')} alt="SBrick" style={{maxWidth: 110}} /><div>SBrick</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/mould_king_4_p.webp')} alt="Mould King" style={{maxWidth: 110}} /><div>Mould King</div></div>
</div>

## Поддерживаемые хабы

| Хаб | Примечания |
|---|---|
| LEGO® Technic™ Hub (88012) | 4 порта, датчики наклона и ускорения |
| LEGO® Technic™ Move Hub | в радиоуправляемых машинах LEGO Technic; ход, руль, свет; [конфигурации](/docs/Application/Hubs/TechnicMoveHubConfigurations) |
| LEGO® Hub / City Hub (88009) | 2 порта, поезда и наборы City |
| LEGO® Move Hub / BOOST (88006) | 2 встроенных мотора + 2 порта |
| LEGO® Remote Control (88010) | его кнопки — входы |
| LEGO® WeDo 2.0 Smart Hub | 2 порта |
| LEGO® Large Hub / Robot Inventor (88016) | 6 портов, световая матрица; недоступен на iPhone и iPad |
| BuWizz 2.0 | режимы мощности |
| BuWizz 3.0 Pro | цветные светодиоды портов |
| SBrick, SBrick Plus | управление скоростью, без позиций |
| Mould King 4.0, 6.0 | только команды, каналы управления |

Полный список с моторами и датчиками: [Поддерживаемые хабы, моторы и датчики](/docs/Introducing/SupportedDevices).

## Слоты хабов

В каждом профиле **5 слотов для хабов**:

- **2 слота бесплатные**;
- **ещё 3** открываются кнопкой **Разблокировать слот** (покупка *дополнительного слота хаба*, по одной на слот) или все сразу с [MocPilot Pro](/docs/Application/Account/Pro).

Купленные слоты привязаны к вашему аккаунту и работают во всех ваших профилях.

Ограничения для Mould King: в профиле только один тип Mould King — до 3 Mould King 4.0 или 1 Mould King 6.0 (они делят Bluetooth-передатчик рекламных пакетов телефона).

## Хабы в программе

- В **Быстрых связях** каждый хаб профиля появляется в палитре как выход **Хаб** (и вход **Хаб** для его кнопок и датчиков). Операции, которые хаб не умеет выполнять, для него не показываются. См. [Блок хаба и порты](/docs/Application/Links/HubsAndPorts).
- В **Логических блоках** блоки моторов, света и датчиков принимают слот хаба и порт. См. [Моторы](/docs/Application/BlockBuilder/Blocks/Motors).

## Подробнее

- [Добавление и подключение хаба](/docs/Application/Hubs/ConnectingHubs)
- [Особые функции хабов](/docs/Application/Hubs/HubFunctions)
- [Обновление прошивки](/docs/Application/Hubs/FirmwareUpdating) и [восстановление прошивки](/docs/Application/Hubs/RecoveryHubFirmware)
