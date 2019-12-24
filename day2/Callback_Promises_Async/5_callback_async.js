var fs = require('fs');

fs.readFile('sample.txt222', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("File Contents: ", data.toString());
});

console.log("<<< Stopped execution");
