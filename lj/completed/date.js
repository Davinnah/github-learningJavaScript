//Learning JavaScript Chapter 2: Development Tools
'use strict';

const before = {d: new Date().valueOf()};
typeof before.d;
console.log('before: ' + before.d);
const json = JSON.stringify(before);
const after = JSON.parse(json);
typeof after.d;
const d = new Date(after.d);
console.log('after: ' + d);
