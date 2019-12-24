var delay = (timeout, callback) => {
    setTimeout(callback, timeout * 1000);
}

// callback (err, returnData, returnData2 ...)

console.log("Starting series of delays...");
// NOW STARTS CALLBACK HELL

// Disadvantages
/**
 * 1) Callback hell -- tree
 * 2) not readable, maintainable or debuggable
 * 3) error handling happes at every callback
 */
delay(2, (err) => {
    console.log('2 secs');
    if (!err) {
        delay(1, (err) => {
            if(!err) {
                console.log('3 secs');
                delay(1, (err) => {
                    if(!err) {
                        console.log('4 secs');
                    }
                });
            }
        });
    }
});

// Bluebird -- Package
// Standard in ES6