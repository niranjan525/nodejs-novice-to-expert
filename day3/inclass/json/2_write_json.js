var fs = require('fs');

var jsObj = {
    title : 'Youth of India',
    author: 'Swami Vivekananda'
};

var stringifiedJSON = JSON.stringify(jsObj);

//write to file
fs.writeFile('json_out.json', stringifiedJSON, function(err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log('File Written Successfully!');
    }
});

console.log(stringifiedJSON);