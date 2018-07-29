//Learning JavaScript Chapter 2: Development Tools
const EventEmitter = require('events').EventEmitter;

class Countdown extends EventEmitter {
	constructor(seconds, superstitious) {
		super();
		this.seconds = seconds;
		this.superstitious = !!superstitious;
	}
	go() {
		const countdown = this;
		const timeoutIds = [];
		return new Promise(function(resolve, reject) {
			for(let i = countdown.seconds; i >= 0; i--) {
				timeoutIds.push(setTimeout(function(){
					if(countdown.superstitious && i===13){
						//clear all pending timeoutIds
						timeoutIds.forEach(clearTimeout);
						return reject(new Error('DEFINITELY NOT COUNTING THAT'));
					}
					else {
						countdown.emit('tick', i);
					}
					if(i===0) resolve();
				},(countdown.seconds-i)*1000));
			}
		});
	}
}

function launch(){
	return new Promise(function(resolve, reject) {
		if(Math.random() < 0.5) return;//rocket failure
		console.log('Lift off!');
		setTimeout(function () {
			resolve('In orbit!');
		}, 2*1000); // a very fast rocket indeed
	});
}

function addTimeout(fn, timeout){
	if(timeout === undefined) timeout = 1000;//default timeout
	return function (...args) {
		return new Promise(function(resolve, reject) {
			const tid = setTimeout(reject, timeout, new Error('promise timed out'));
			fn(...args)
				.then(function (...args) {
					clearTimeout(tid);
					resolve(...args);
				})
				.catch(function (...args) {
					clearTimeout(tid);
					reject(...args);
				});
		});
	};
}

const c = new Countdown(15);

c.on('tick', function(i) {
	if(i>0) console.log(i + '...');
});

c.go()
	.then(addTimeout(launch, 4*1000))
	.then(function(msg) {
		console.log(msg);
	})
	.catch(function(err) {
		console.log('Houston, we have a problem....'+ err.message);
	});
