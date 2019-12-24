// ES5
// var list = [ 1, 2, 3 ];
// var a = list[0], b = list[2];
// var tmp = a; a = b; b = tmp;

// ES6 -- Array destructuring
var list = [ 1, 2, 3 ]
var [ a, , b ] = list // destructuring from list
console.log(a, b)
var [ b, a ] = [ a, b ] 
console.log(a, b)


// -------------------------------
// Object destructuring
const obj = {
      name: "Krishna",
      id: 7,
      arr: [1,2,3]
}

let { name, id } = obj;
console.log(name, id)


// -------------------------------
// Shorthand object
const age = 10
const place = 'Bengaluru'
const temp = {
      "age": age,
      "place": place

}
const obj1 = { age, place}
console.log(obj1)