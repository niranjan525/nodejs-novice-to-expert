var fs = require('fs');

//write to file
fs.readFile('json_out.json', function(err, data) {
    if (err) {
        console.log(err);
    }
    else {
        console.log('File Read Successfully!');
        console.log("As is data: ", data.toString());
        console.log("Parsed Data: ", JSON.parse(data.toString()) );

        console.log("A property on parsed data - Title: ", JSON.parse(data).title);

    }
});
