---
id: Examples
title: Examples
description: "Logic Blocks example programs for driving, steering, lights, battery warning and sensors."
---

# Examples

Short programs to start from. Block names are as in the [block reference](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing#block-reference). Indentation means "inside" a C block.

## Drive with a joystick

Dashboard: **JOY1**. Motor on port A.

```text
When program started
Forever
    Set motor speed  (Hub 1, port A)  ←  joystick JOY1 y-axis
```

## Steer with a servo

Steering motor (angular) on port B. Calibrate once, then follow the joystick.

```text
When program started
Calibrate steering rack  (Hub 1, port B)
Forever
    Go to relative position  (Hub 1, port B)  ←  joystick JOY1 x-axis × 0.9
```

## Lights on a switch

```text
When switch SWCH1 is toggled on
    Light turn to 100 %  (Hub 1, port C)
When switch SWCH1 is toggled off
    Light turn off  (Hub 1, port C)
```

## Battery warning

Monitor **MNTR1**; the button turns red when the battery is low.

```text
When program started
Forever
    Show  (Hub battery level (Hub 1))  on MNTR1 monitor
    If  Hub battery level (Hub 1) < 20
        Set BTN1 color to red
    Wait 5 seconds
```

## Stop before an obstacle

Technic distance sensor on port D, drive motor on port A.

```text
When program started
Forever
    If  Technic distance sensor (Hub 1, port D) < 10
        Stop motor  (Hub 1, port A)
        Set LED color  (Hub 1)  red
    Else
        Set motor speed  (Hub 1, port A)  ←  slider SLDR1
        Set LED color  (Hub 1)  green
```

## Gearbox on a step switch

Step switch **STPR1** with 4 steps limits the top speed.

```text
When program started
Forever
    Set variable (speed limit) to  (stepper STPR1 × 25)
    Set motor speed  (Hub 1, port A)  ←  pedals PDL1 value × speed limit / 100
```

`speed limit` is a variable (**Variables → Make a variable**).

## Startup check

Lock the throttle until both hubs are connected.

```text
When program started
Set JOY1 interactivity  disable
Wait until  (Is connected (Hub 1))  and  (Is connected (Hub 2))
Show "Ready" on MNTR1 monitor
Set JOY1 interactivity  enable
```

## Gamepad

```text
When program started
Forever
    Set motor speed  (Hub 1, port A)  ←  gamepad thumbstick left y
    Go to relative position  (Hub 1, port B)  ←  gamepad thumbstick right x × 0.9
```

Turn on **Enable gamepad blocks** on the [Gamepad page](/docs/Application/Dashboard/Gamepad) first.

## More

- Install official profiles from the [catalog](/docs/Application/Profiles/Catalog) and study their programs.
- Try the Logic Blocks demo on [mocpilot.com](https://mocpilot.com).
