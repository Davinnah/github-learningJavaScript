//Learning JavaScript Chapter 20
//Filesystem Access
const fs = require('fs');
const path = require('path');

try{
  const data = fs.readFileSync(path.join(__dirname, 'hello.txt'),
  { encoding: 'utf8'});
  console.log('Read file contents:');
  console.log(data);
} catch(err) {
  console.log('Error reading file');
}


console.log("read.js");
