# Robot-Pilot

This is a NodeJS project to drive a small robot.

Here are the parts:

+ A Zumo chassis with
    + two micro motors and
    + four AA batteries
+ A Raspberry Pi Zero W 1.1
+ A motor driver TB6612
+ A ZeroLipo PHat and a LiPo battery to power the Pi and the motor driver

The application will use the NodeJS module [`pigpio`](https://www.npmjs.com/package/pigpio).

First goal is to make the robot move!

## Control

To control the robot I decided to use a Playstation Dualshock 4 (DS4) controller.
It is a bit pricey, but really nice (and I found a way to use it to play games on my PC... another story.)

To interface the controller with the robot I'm going to use the Bluetooth capabilities of the pi.

I used [this tutorial](https://pimylifeup.com/raspberry-pi-playstation-controllers/) to pair the controller with the raspberry.

Also, there are several Node modules to interface with a DS4 controller.
I decided to give a go at the first one on the list: [dualshock](https://github.com/Pecacheu/dualshock).
The install of the latest version failed because it appears to be Windows specific (something to do with the sound handling...)
The version 3.1.1 is working though.

I had to find how to add udev rules so that any user can read the HID data.
This other Node ([dualshock-controller](https://www.npmjs.com/package/dualshock-controller#create-udev-rules)) module has nice and clear explanations about how to do that.



