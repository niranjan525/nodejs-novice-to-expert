var jsObj = {
    title : 'Youth of India',
    author: 'Swami Vivekananda'
};

var stringifiedJSON = JSON.stringify(jsObj);
console.log(stringifiedJSON);
// console.log(stringifiedJSON.title);
var parsedJsonString = JSON.parse(stringifiedJSON);
console.log(parsedJsonString.title);