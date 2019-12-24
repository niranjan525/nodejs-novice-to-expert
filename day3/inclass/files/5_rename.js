var fs = require('fs');

fs.rename('sample_write.txt', 'sample_write_renamed.txt', function(err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log('Renamed Successfully!');
    }
});
