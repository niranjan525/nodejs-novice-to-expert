new Promise((resolve, reject) => {
    resolve(1);
}).then(value => {
    console.log("Starting delay chain...");
    return 1;
}).then(value => {
    setTimeout(() => {
        console.log("1 sec");
    }, value * 1000);
    return 3;
}).then(value => {
    setTimeout(() => {
        console.log("3 sec");
    }, value * 1000);
    return 5;
}).then(value => {
    setTimeout(() => {
        console.log("5 sec");
    }, value * 1000);
    return 10;
}).catch(err => {
    console.log(err);
});

console.log("Promise chain initiated!");