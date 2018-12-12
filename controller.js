/*

// WORK IN PROGRESS...

var dualShock = require('dualshock-controller')
 
var controller = dualShock({
    config: "dualshock4-generic-driver",
})

controller.on("left:move", data => {
    console.log(`Left move received: ( ${x} , ${y} )`)
})
controller.on("right:move", data => {
    console.log(`Right move received: ( ${x} , ${y} )`)
})

controller.on('square:press', ()=> {
    console.log('square press')
})

controller.on('square:release', () => {
    console.log('square release')
})

*/