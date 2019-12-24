var fs = require('fs');

fs.appendFile('sample_append.txt', 'Data Appended to file \n', function(err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log('Appended Successfully!');
    }
});
