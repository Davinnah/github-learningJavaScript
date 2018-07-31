//Learning JavaScript Chapter 17: Regular Expressions
//Email  Regex

//assume email addresses start with a letter and end with a letter
const inputs =  [
	'john@doe.com',
	'john@doe.com is my email',
	'my email is john@doe.com',
	'use john@doe.com, my email',
	'my email: john@doe.com.',
];

const emailMatcher = /\b[a-z][a-z0-9._-]*@[a-z][a-z0-9_-]+\.[a-z]+(?:\.[a-z]+)?\b/ig;
const showInputs = inputs.map(s => s.replace(emailMatcher, '<a href ="mailto:$&">$&</a>'));
console.log('showInputs: ', showInputs);
