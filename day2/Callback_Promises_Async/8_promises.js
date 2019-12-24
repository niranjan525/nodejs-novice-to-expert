// PROMISES: solution to callback hell and brings async nature in elegant manner

var myPromiseObj = new Promise((resolve, reject) => {
    let string1 = "Welcome to NodeJS";
    let string2 = "Welcome to NodeJSw";

    throw new Error("New error");

    if (string1 == string2) {
        // send what ever you want to return in successful case of promise as argument to resolve
        resolve("Both are same");
    }
    else {
        reject("Both are NOT same");
    }

});

// then ( resolvecase, rejectcase)
myPromiseObj.then((result) => {
    console.log(result);
}).catch((err) => {
    console.log("Caught in catch:", err);
});
