var fs = require('fs');

fs.unlink('sample.txt', function(err) {
    if(err) {
        console.log(err);
    }
    else {
        console.log("Deleted Sucessfully!");
    }
})