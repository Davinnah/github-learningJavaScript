//Learning JavaScript Chapter 2: Development Tools
"use strict";
// es6 feature: block-scoped "let" declaration
const sentences = [
	{ subject: "Learning JavaScript", verb: "is", object: "great"},
	{ subject: "Purple", verb: "is", object: "pretty"},
];

// es6 feature: object destructuring
function say({ subject, verb, object})  {
	// es6 feature: template strings
	console.log("${subject} ${verb} ${object}");
}

// es6 feature: for..of
for (let s of sentences) {
	say(s);
}
