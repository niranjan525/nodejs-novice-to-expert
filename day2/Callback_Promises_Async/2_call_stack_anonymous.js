// new way to define function in ES6 - Arrow Functions
function fnname (par1, par2) {
    // defn
}

var listusers = (names) => {
    names.forEach(
        (element) =>  {
        console.log(element);
    }
    );
}

var names = ['user1', 'user2'];
listusers(names); //nonymous

// ES6
var myfunc = (args) => {
    console.log(args);
}

myfunc("Hellow Arrow Func");

