//Learning JavaScript Chapter 2: Development Tools
const EventEmitter = require("events").EventEmitter;

class Countdown extends EventEmitter {
	constructor(seconds, superstitious) {
		super();
		this.seconds = seconds;
		this.superstitions = !!superstitious;
	}
	go() {
		const countdown = this;
		return new Promise(function (resolve, reject) {
			for (let i = countdown.seconds; i >= 0; i--) {
				setTimeout(function () {
					if(countdown.superstitious && i===13)
						return reject(new Error("DEFINITELY NOT COUNTING THAT"));
					countdown.emit("tick",i);
					if(i===0) resolve();
				},(countdown.seconds-i)*1000);
			}
		});
	}
}

const c = new Countdown(5);
c.on("tick", function (i) {
	if(i>0) console.log(i + "...");
});

c.go()
	.then(function () {
		console.log("GO!");
	})
	.catch(function (err) {
		console.log(err.message);
	});
