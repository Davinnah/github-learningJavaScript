//Learning JavaScript Chapter 17: Regular Expressions
'use strict';

const input = 'As I was going to Saint Ives';
const re = /\w{3,}/ig;

//starting with the string
console.log(input.match(re));
console.log(input.search(re));

//starting with the regex (re)
console.log(re.test(input));
console.log(re.exec(input));
console.log(re.exec(input));
console.log(re.exec(input));
console.log(re.exec(input));
console.log(re.exec(input));

//note that any of these methods can be used directly with a regex literal
console.log(input.match(/\w{3,}/ig));
console.log(input.search(/\w{3,}/ig));
console.log(/\w{3,}/ig.test(input));
console.log(/\w{3,}/ig.exec(input));
//etc...

const output = input.replace(/\w{4,}/ig, '****');
console.log(output);

//Alternation
const html = 'HTML with <a href = "/one">one link</a>, and some JavaScript.'+'<script src = "stuff.js"></script>';
const matches = html.match(/area|a|link|script|source/ig);//first attempt
console.log(matches);
const matches2 = html.match(/<area|<a|<link|<script|<source/ig);//second attempt
console.log(matches2);

//Character Sets
const beer99 = '99 bottles of beer on the wall ' + 'take one down and pass it around --' + '98 bottles of beer on the wall.';
const matches3 = beer99.match(/0|1|2|3|4|5|6|7|8|9/g);
console.log(matches3);

const m1 = beer99.match(/[0123456789]/g);//okay
const m2 = beer99.match(/[0-9]/g);
console.log('m1: ' +m1);
console.log('m2: ' +m2);

const m3 = beer99.match(/[-0-9a-z.]/ig);
console.log('m3: ' +m3);

const m4 = beer99.match(/[^\-0-9a-z.]/);
console.log('m4: ' +m4+ ':end');

//Named Character Sets
const stuff =
'high:    9\n' +
'medium:  5\n' +
'low:     2\n';
const levels = stuff.match(/:\s*[0-9]/g);
console.log('levels: ' +levels);

const messyPhone = '(505) 555-1515';
console.log('messyPhone: ' +messyPhone);
const neatPhone = messyPhone.replace(/\D/g, '');
console.log('neatPhone: ' +neatPhone);

const field = '      something               ';
const valid = /\S/.test(field);
console.log('valid: '+valid);

//Repetition
const m5 = beer99.match(/[0-9][0-9][0-9]|[0-9][0-9]|[0-9]/);
console.log('m5: ' + m5);
//better way
const m6 = beer99.match(/[0-9]+/);
console.log('m6: '+m6);

//The Period Metacharacter and Escaping
const input1 = 'Address: 333 Main St., Anywhere, NY, 55532. Phone: 555-555-2525';
const m7 = input1.match(/\d{5}.*/);
console.log('m7: '+ m7);

const equation = '(2 + 3.5) * 7';
const m8 = equation.match(/\(\d \+ \d\.\d\) \* \d/);
console.log('m8: ' + m8);

//Grouping
const text = 'Visit oreilly.com today!';
const m9 = text.match(/[a-z]+(?:\.com|\.org|\.edu)/i);
console.log('m9: '+m9);

const html1 = '<link rel="stylesheet" href="http://insecure.com/stuff.css">\n' +
'<link rel="stylesheet" href="https://secure.com/securestuff.css"> \n' +
'<link rel="stylesheet" href="//anything.com/flexible.css">';
const  m10 = html1.match(/(?:https?)?\/\/[a-z][a-z0-9-]+[a-z0-9]+/ig);
console.log('m10: '+m10);

//Lazy Matches, Greedy Matches
const input2 = 'Regex pros know the difference between\n' +
'<i>greedy</i> and <i>lazy</i> matching.';
const input3 = input2.replace(/<i>(.*)<\/i>/ig, '<strong>$1</strong>');
console.log('input3: '+input3);//greedy
const input4 = input2.replace(/<i>(.*?)<\/i>/ig, '<strong>$1</strong>');
console.log('input4: '+input4);//lazy

//Backreferences
const promo = "Opening for XAAX is the dynamic GOOG!  At the box office now!";
const bands = promo.match(/([A-Z])([A-Z])\2\1/g);
console.log('bands: ', bands);

//we use backticks here because we're using single and
//double quotation marks:
const html2 = `<img alt='A "simple" example,'>` +
`<img alt="Don't abuse it!">`;
const m11 = html2.match(/<img alt=(['"]).*\1/g);
console.log('html2: ', m11);

//Replacing Groups
let html3 = '<a  class="nope" href="/yep">Yep</a>';
const html4=html3.replace(/<a .*?(href=".*").*?>/, '<a $1>');
console.log('html4',html4);
html3 = '<a class="yep" href="/yep" id="nope">Yep</a>';
html3=html3.replace(/<a .*?(class=".*?").*?(href=".*?").*?>/, '<a $2 $1>');
console.log('html3: ', html3);

const input5 = "One two three";
const input6 =input5.replace(/two/, '($`)');
const input7 = input5.replace(/\w+/g, '($&)');
const input8 = input5.replace(/two/, "($')");
const input9 = input5.replace(/two/, "($$)");
console.log('input6: ', input6);
console.log('input7: ', input7);
console.log('input8: ', input8);
console.log('input9: ', input9);
