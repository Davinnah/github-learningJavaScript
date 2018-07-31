//Learning JavaScript Chapter 17: Regular Expressions
//Constructing Regexes Dynamically

const users = ['mary', 'nick', 'arthur', 'sam', 'yvette'];
const text = 'User @arthur started the backup at 15:15, ' +
'and @nick and @yvette restored it at 18:35.';
const userRegex = new RegExp(`@(?:${users.join('|')})\\b`,'g');
console.log(userRegex);
const result = text.match(userRegex);
console.log('result: ', result);
