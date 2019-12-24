/**
 * There are 3 types of scope in JavaScript:

    Function (Local) Scope
    Global Scope
    Block Scope (new with ES6)

    var supports function & global scope, but not block scope
 */


// ----------------------------------------------
// Function scope

function localOrFunctionScope() {
      var number = 1;

      console.log(number);
}
localOrFunctionScope();

console.log(number);


// ----------------------------------------------
// Global Scope

var number = 1;
function local() {
      console.log(number);
}
console.log(number);

// ----------------------------------------------
// Block Scope

for (var i = 1; i < 10; i++) {
      console.log(i);
}

console.log(i);


