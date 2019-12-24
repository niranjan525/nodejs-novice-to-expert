var fs = require('fs');
var util = require('util');

var readFileAsync = util.promisify(fs.readFile);

/**
 * fs.readFile('sample.txt', function(err, data){
 * 
 * });
 */

var file1Promise = readFileAsync('sample.txt');
var file2Promise = readFileAsync('sample2ddf.txt');
var file3Promise = readFileAsync('sample3.txt');

var allPromisesList = [file2Promise, file1Promise, file3Promise];
// [result1, result2, result3]
Promise.all(allPromisesList).then((results) => {
    results.forEach((data) => {
        console.log(data.toString());
    })
}).catch((err) => console.log("Caught Err:", err));

// IMP: change one of the file names and show that Promise.all() 
// works in a fail-fast way