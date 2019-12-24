var fs = require('fs');

fs.readFile('sample_write22.txt', function(err, data) {
    if (err) {
        console.log(err);
    }
    else {
        console.log('Data: \n', data);
    }
});
