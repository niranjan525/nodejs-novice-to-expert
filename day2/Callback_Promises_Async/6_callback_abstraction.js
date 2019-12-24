// BETTER EXAMPLE --- CALLBACK ABSTRACTION

var consumeEach = (arrayToConsume, consumeFunction) => {
    for (i = 0; i < arrayToConsume.length; i++) {
        consumeFunction(arrayToConsume[i]);
    }
};

var print = (thing) => {
    console.log(thing);
};

var myArray = [1,2,3,4,5];
consumeEach(myArray, print);

