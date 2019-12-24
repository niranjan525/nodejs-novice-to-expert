var fs = require('fs');

fs.stat('sample.txt', function(err, stats) {
    if(err) {
        console.log(err);
    }
    else {
        console.log("Is File ? ", stats.isFile());
        console.log("Is Directory ? ", stats.isDirectory());
        console.log("Size: ", stats.size);


    }
});