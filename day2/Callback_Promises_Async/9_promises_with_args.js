// PROMISES: solution to callback hell and brings async nature in elegant manner

var stringChecker = (string1, string2) => {
    return new Promise((resolve, reject) => {
        if (string1 == string2) {
            // send what ever you want to return in successful case of promise as argument to resolve
            resolve("Both are same");
        }
        else {
            reject("Both are NOT same");
        }

    });
}

// .then with a resolve()
// stringChecker("NodeJS", "NodeJS343")
//     .then((result) => { console.log("Result: ", result); });

/** 
 * Check by changing the input string to understand catch
 * then with a resolve() and reject()
 * syntax promiseObj.then(resolveCallback, rejectCallback)
*/

// stringChecker("NodeJS", "NodeJS2")
//     .then((result) => { console.log("Result: ", result); },
//         (err) => { console.log("Error: ", err); });

// Using catch rather than the reject in each then()
stringChecker("NodeJS", "NodeJS")
    .then((result) => { console.log("Result: ", result); })
    .catch((err) => { console.log("Error in Catch: ", err); });