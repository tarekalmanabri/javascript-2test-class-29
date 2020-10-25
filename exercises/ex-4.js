function test() {
    console.log('one');

    // first timeout
    setTimeout(function() {
        console.log('two');
        setTimeout(function() {
            console.log('three');
        }, 0);
    }, 1000);


    // secont timeout
    setTimeout(function() {
        console.log('four');
        setTimeout(function() {
            console.log('five');
        }, 1000);

    }, 0);
    console.log('six');
}
test();

// this is a synchronous function so it will be defined step by step and thats why it will go from top to bottom after each step is already done so in the first timeout we set it to one second and the one in it to 0 so they both will be decleared after this second, and after that it will excute the second time out which has will give the 'four' in 0 seconds and