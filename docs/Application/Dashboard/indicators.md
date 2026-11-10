---
id: Indicators
title: Indicators and monitors
description: "Show battery, speed, tilt, sensor values and text on the dashboard."
---

# Indicators and monitors

Monitors show information on the dashboard while you drive: battery level, speed, tilt, the distance to an obstacle, the current gear or mode.

| Monitor | Shows | Theme |
|---|---|---|
| **Monitor** | text or a number | all themes |
| **Battery level** | a level gauge | paid themes |
| **Speedometer** | a speed gauge | paid themes |
| **Tilt monitor** | pitch and roll of a model | paid themes |

Monitors only display; you cannot drive with them. The program decides what they show.

## In Quick Links

Use the **Indicator** output. A row ends with the indicator instead of a hub:

- *Hub* (Battery) → *Indicator* (Battery level): the hub battery on a gauge.
- *Hub* (Motor speed, port A) → *Indicator* (Speedometer).
- *Hub* (Tilt pitch) → *Indicator* (Tilt monitor, Tilt X) and a second row for Tilt roll → Tilt Y.
- *Hub* (Battery voltage) → *Indicator* (Monitor): shows the value with its unit, such as "7.85 V".

The indicator shows the value as it is, so the row has no operation. See [Operations and outputs](/docs/Application/Links/Operations#indicator).

## In Logic Blocks

Use the dashboard controller blocks:

- *set … to … monitor* and *show … on … monitor* for the Monitor, Battery level and Speedometer;
- *set … monitor pitch/roll to …* for the Tilt monitor.

You can show anything you can calculate: a sensor value, a variable, text like "Gear 2". See [Dashboard controllers](/docs/Application/BlockBuilder/Blocks/DashboardControllers).

## Tips

- Put the battery monitor in a corner where your fingers don't cover it.
- Use a multi-line Monitor with **Marquee** or **Scroll** overflow for longer messages.
- The colour of any control can be changed by the program, for example a button turning red when the battery is low.
