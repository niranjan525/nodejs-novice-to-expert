var fs = require('fs');

fs.writeFile('sample_write.txt', 'Content for file!', function(err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log('File Written Successfully!');
    }
});