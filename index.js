const Gpio = require('pigpio').Gpio

const ain1 = new Gpio(17, {mode: Gpio.OUTPUT})
const ain2 = new Gpio(27, {mode: Gpio.OUTPUT})
const pwma = new Gpio(22, {mode: Gpio.OUTPUT})

const bin1 = new Gpio(24, {mode: Gpio.OUTPUT})
const bin2 = new Gpio(23, {mode: Gpio.OUTPUT})
const pwmb = new Gpio(25, {mode: Gpio.OUTPUT})

let direction = true

// Vary the PWM from 0 to 255 every 20 ms
let dutyCycle = 0
setInterval(() => {
  ain1.digitalWrite(direction ? 1 : 0)
  ain2.digitalWrite(direction ? 0 : 1)
  
  bin1.digitalWrite(direction ? 1 : 0)
  bin2.digitalWrite(direction ? 0 : 1)
  
  pwma.pwmWrite(dutyCycle)
  pwmb.pwmWrite(dutyCycle)
  
  dutyCycle += 5
  if (dutyCycle > 255) {
    dutyCycle = 0
    direction = !direction
  }
}, 200)

process.on('SIGTERM', () => {
  ain1.digitalWrite(0)
  ain2.digitalWrite(0)
  bin1.digitalWrite(0)
  bin2.digitalWrite(0)
  pwma.pwmWrite(0)
  pwmb.pwmWrite(0)  
})

