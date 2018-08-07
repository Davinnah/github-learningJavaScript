//Learning JavaScript Chapter 20
//Modules

const amanda = require("./amanda.js");
const sphereVolume = require("./tyler.js");
console.log(amanda.geometricSum(1,2,5));
console.log(amanda.quadraticFormula(1,2,-15));
console.log(sphereVolume(2));

const debug1 = require("./debug")("one");
const debug2 = require("./debug")("two");

debug1("started first debugger");
debug2("started second debugger");

setTimeout(function() {
    debug1("after some time...");
    debug2("what happens?");
}, 200);
