function parent() {
    var hoisted = "I'm a variable";

    function hoisted() {
        return "I'm a function";
    }
    return hoisted();
}
console.log(parent());


// it's returning that hoisted is not a fuction which isn't actuallty what i expected, because although they have a same name but they have a different value so i thought both will be logged to the console, in that case i think its because the js will read the varabiles first and in that case the name was already taken so it cant define it as a function anymore.