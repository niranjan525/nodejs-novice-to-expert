
new Promise((resolve, reject) => {
    // throw new Error("Error Message!");
    // Some business logic: for ex. call an API
    // resolve("My data!!");
    reject("My error message!");
})
    .then((data) => console.log("Data: ", data))
    // .catch((err) => console.log("Catch: ", err));