
var fs = require('fs');

console.log(">>> Started execution");
var data = fs.readFileSync('sample.txt');
console.log("File Contents: ", data.toString());
console.log("<<< Stopped execution");
