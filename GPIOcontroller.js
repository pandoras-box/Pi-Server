var gpio = require("pi-gpio"); var gpioPin = 7;  
gpio.open(gpioPin,"output");
var isOpened=false; 
var unlockRelay = function(){ 
if(!isOpened){
/* Open the door lock */
	console.log('open');
	gpio.write(gpioPin, 1, function() {
	isOpened = true;
	});
/*setTimeOut will be activated in 2 seconds, closing the lock as we set gpioPin value to 0*/
	setTimeout(function () {
	 gpio.write(gpioPin, 0, function() {
	isOpened = false;
	});
	}, 2000);
    }
}

module.exports.unlockRelay = unlockRelay;