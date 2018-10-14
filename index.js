const Gpio = require('pigpio').Gpio

const ain1 = new Gpio(17, {mode: Gpio.OUTPUT})
const ain2 = new Gpio(27, {mode: Gpio.OUTPUT})
const pwma = new Gpio(22, {mode: Gpio.OUTPUT})

let isClockwise = true

// Vary the PWM from 0 to 255 every 20 ms
let dutyCycle = 0
let interval = setInterval(() => {
  
  ain1.digitalWrite(direction ? 1 : 0)
  ain2.digitalWrite(direction ? 0 : 1)

  pwma.pwmWrite(dutyCycle)
  dutyCycle += 5
  if (dutyCycle > 255) {
    dutyCycle = 0
    isClockwise = !isClockwise
  }
}, 200)



