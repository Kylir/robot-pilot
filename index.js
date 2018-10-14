const Gpio = require('pigpio').Gpio

const ain1 = new Gpio(17, {mode: Gpio.OUTPUT})
const ain2 = new Gpio(27, {mode: Gpio.OUTPUT})
const pwma = new Gpio(22, {mode: Gpio.OUTPUT})

// Set ain1 to ON and ain2 to OFF 
ain1.digitalWrite(1)
ain2.digitalWrite(0)

// Vary the PWM from 0 to 255 every 20 ms
let dutyCycle = 0
setInterval(() => {
  pwma.pwmWrite(dutyCycle)
  dutyCycle += 5
  if (dutyCycle > 255) {
    dutyCycle = 0
  }
}, 20)


