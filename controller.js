const ds = require('dualshock')

let list = ds.getDevices()
let device = list[0]
let gamepad = ds.open(device, {smoothAnalog:10, smoothMotion:15, joyDeadband:4, moveDeadband:4})

gamepad.onmotion = true
gamepad.onstatus = true

//DS4 Only: Random LED Stuffs:
/*setInterval(function() {
    gamepad.setLed(Math.floor(Math.random()*255),Math.floor(Math.random()*255),Math.floor(Math.random()*255));
}, 100)*/

gamepad.onupdate = function(changed) {
    //rumbleScript(changed, this);
    //Uncomment one of these lines for debugging!
    
    console.log(changed);
    
    //console.log(this.digital);
    //console.log(this.analog);
    //console.log(this.motion,this.status);
}

/*
function rumbleScript(chg, g) {
    //Rumble On:
    if (chg.l2 || chg.r2) {
        g.rumbleAdd(g.analog.l2?g.analog.l2:-1, g.analog.r2?255:-1, 254, 254);
        console.log("rumble set", [g.analog.l2,(g.analog.r2>0)?255:0]); 
    } else if (chg.l3 && g.digital.l3) {
        g.rumbleAdd(94, 0, 255, 0);
        console.log("rumble slow");
    } else if(chg.start && g.digital.start) {
        g.rumbleAdd(0, 255, 0, 5);
        console.log("rumble tap"); 
    }
    
    //Rumble Off:
    if( (chg.l2 || chg.r2 || chg.l3 || chg.start) && !(g.analog.l2 || g.analog.r2 || g.digital.l3 || g.digital.start)) {
        g.rumble(0, 0); console.log("rumble off");
    }
    
    //Change LED Pattern:
    if(chg.ps && g.digital.ps) {
        g.setLed(nLedVal);
        console.log("led set "+nLedVal); nLedVal++;
        if(nLedVal > 15) {
            nLedVal = 0; 
        }
    }
}
*/