/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

//Learning JavaScript Chapter 2: Development Tools
"use strict";
// es6 feature: block-scoped "let" declaration
const sentences = [
	{ subject: "JavaScript", verb: "is", object: "great"},
	{ subject: "Elephants", verb: "are", object: "large"},
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