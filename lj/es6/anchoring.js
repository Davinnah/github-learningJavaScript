//Learning JavaScript Chapter 17: Regular Expressions
//Anchoring
const input = 'It was the best of times, it was  the worst of times';
const beginning = input.match(/^\w+/g);
console.log('beginning: ', beginning);
const end = input.match(/\w+$/g);
console.log('end: ', end);
const everything = input.match(/^.*$/g);
console.log('everything: ',everything);
const nomatch1  = input.match(/^best/ig);
console.log('nomatch1: ',nomatch1);
const nomatch2 = input.match(/worst$/ig);
console.log('nomatch2: ', nomatch2);

const input1 = 'One line\nTwo lines\nThree lines\nFour';
const beginning1 = input1.match(/^\w+/mg);
const endings = input1.match(/\w+$/mg);
console.log('input1: ', input1);
console.log('beginning1: ',beginning1);
console.log('endings: ', endings);
