var fs = require('fs');

var jsObjFromFile = JSON.parse(fs.readFileSync('json_out.json').toString());

jsObjFromFile.title = 'Commentary on Gita';

fs.writeFileSync('json_out.json', JSON.stringify(jsObjFromFile));