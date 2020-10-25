const myFunction = () => {
    const arr = [10, 12, 15, 21];
    for (var i = 0; i < arr.length; i++) {
        setTimeout(function() {
            console.log('Index: ' + i);
        }, 3000);
    }
};

myFunction();


// the function will run after 3 seconds because of the setTimeout with the var it will log to the console
// the var will return a same number because its a function scope while the let is block scoped.