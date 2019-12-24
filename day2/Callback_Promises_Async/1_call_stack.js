// new way to define function in ES6 - Arrow Functions
var myfunc1 = () => {
    console.trace("From myfunc1")
}

var myfunc2 = () => {
    console.trace("From myfunc2");
    myfunc1();
}
var myfunc3 = () => {
    console.trace("From myfunc3");
    myfunc2();
}

myfunc3();

