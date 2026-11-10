---
id: Processing
title: Processing
description: "Quick Links processing blocks: Invert, Limit, Dead zone, Threshold, Smooth and Toggle."
---

# Processing

Processing blocks sit between the input and the operation and change the value on its way. A row can have none, one or several, in any order. Each one has one input and one output.

| Block | Does | Settings | Works on |
|---|---|---|---|
| **Invert** | flips the direction | — | values and on/off |
| **Limit** | caps the value | **Maximum**: 20…90 % (default 50 %) | values; a button becomes a value |
| **Dead zone** | ignores small movements around zero | **Zone**: 5, 10, 15, 20, 30 % (default 10 %) | values |
| **Threshold** | turns a value into on/off | **On when the value is**: Above / Below; **Level**: −50…90 % of full scale (default 20 %) | values |
| **Smooth** | accelerates and slows down gradually | **Acceleration (to full speed)** and **Deceleration (to stop)**: Instant, 0.25, 0.5, 1, 2, 3 s (default 0.5 s) | values, lights too |
| **Toggle** | press on, press again off | — | on/off |

## Invert

The motor turns the wrong way? Add **Invert** instead of turning the motor around. For two motors that must turn in opposite directions (left and right track, two sides of a gearbox), make two rows and put Invert in one of them.

## Limit

Makes the model slower and easier to control: with **Maximum** 50 % the joystick at full deflection gives half speed. Great for children, indoor driving and delicate mechanisms.

## Dead zone

A joystick rarely rests exactly at zero, so a motor may hum or creep. **Dead zone** treats small values as zero. 10 % is a good start.

## Threshold

Turns a value into on/off: "on when the value is **Above** 20 %". With a sensor: *Distance sensor* → *Threshold* (Below, 20 %) is on when something is close. Threshold uses hysteresis, so it does not flicker at the edge.

## Smooth

Starts and stops gradually, like a real vehicle. Acceleration and deceleration are set separately: a heavy truck may accelerate in 2 s and stop in 0.5 s. On a light, Smooth fades it in and out.

## Toggle

Turns a button into a switch: press once, on; press again, off. *Button* → *Toggle* → *Light*.

## Tips

- Order matters: *Dead zone → Limit → Smooth* is a good chain for driving.
- Processing that does not fit the signal is refused: for example Toggle needs an on/off input.
- Watch the live values while running to see what each block does.
