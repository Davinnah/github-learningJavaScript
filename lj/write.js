//Learning JavaScript Chapter 20
//Filesystem Access
const fs = require('fs');
const path = require('path');

try{
  fs.writeFileSync(path.join(__dirname, 'hello.txt'), 'hello from Node!');
} catch(err){
  console.log('Error writing file.');
}
console.log('write.js');
