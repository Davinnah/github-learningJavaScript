//Learning JavaScript Chapter 17: Regular Expressions
//checking for valid password
//lookaheads

function validPassword(p) {
  return /[A-Z]/.test(p) &&
  /[0-9]/.test(p) &&
  /[a-z]/.test(p) &&
  !/[^a-zA-Z0-9]/.test(p);
}

//next try
function validPassword1(p) {
  return /[A-Z].*[0-9][a-z]/.test(p)
}//fails

function validPassword2() {
  return /(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])(?!.*[^a-zA-Z0-9])/.test(p);
}

const pwd1 = 'April19699';
const pwd2 = 'Shyanne69!';
const blank = ' ';
const lc = 'april1969';

//testing passwords
let result = validPassword(pwd1);
console.log('result pwd1: ', result);
result = validPassword(pwd2);
console.log('result pwd2: ', result);
result = validPassword(blank);
console.log('result blank: ', result);
result = validPassword(lc);
console.log('result lc: ', result);

result = validPassword1(pwd1);
console.log('result pwd1: ', result);
result = validPassword1(pwd2);
console.log('result pwd2: ', result);
result = validPassword1(blank);
console.log('result blank: ', result);
result = validPassword1(lc);
console.log('result lc: ', result);

result = validPassword2(pwd1);
console.log('result pwd1: ', result);
result = validPassword2(pwd2);
console.log('result pwd2: ', result);
result = validPassword2(blank);
console.log('result blank: ', result);
result = validPassword2(lc);
console.log('result lc: ', result);
