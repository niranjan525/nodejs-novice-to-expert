// 1 -----------------------------------
// Basic syntax, multiple params

// (param1, param2, paramN) => expression

// ES5
var multiplyES5 = function (x, y) {
      return x * y;
};

// ES6
const multiplyES6 = (x, y) => { return x * y };
const multiplyES6Short = (x, y) => x * y;
console.log(multiplyES6(2, 3))
console.log(multiplyES6Short(2, 3))

// 2 -----------------------------------
// Single parameter shortcut

//ES5
var phraseSplitterEs5 = function phraseSplitter(phrase) {
      return phrase.split(' ');
};

//ES6
const phraseSplitterEs6 = phrase => phrase.split(" ");

console.log(phraseSplitterEs6("ES6 Awesomeness"));  // ["ES6", "Awesomeness"]


// 3 -----------------------------------
// No Params

//ES5
var docLogEs5 = function docLog() {
      console.log("Doc Log!");
};

//ES6
const docLogEs6 = () => { console.log("Doc Log!"); };
docLogEs6();


// 4 -----------------------------------
// Object Literal Syntax

//ES5
var setNameIdsEs5 = function setNameIds(id, name) {
      return {
            id: id,
            name: name
      };
};

// ES6
const setNameIdsEs6 = (id, name) => ({ id: id, name: name });

console.log(setNameIdsEs6(7, "Krishna"));

// 5.1 -----------------------------------
// Map function
const objects = [
      { name: 'tv', price: 100 },
      { name: 'phone', price: 200 },
      { name: 'washing machine', price: 300 }
];

// ES5
var prices5 = objects.map(function (obj) {
      return obj.price;
});

console.log(prices5);

// ES6
const prices6 = objects.map(obj => obj.price);
console.log(prices6);

// 5.2 -----------------------------------

// Filter
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// ES5
var divisibleByThrreeES5 = array.filter(function (v) {
      return v % 3 === 0;
});

// ES6
const divisibleByThrreeES6 = array.filter(v => v % 3 === 0);

console.log(divisibleByThrreeES6);

