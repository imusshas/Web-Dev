// To incrase the functionality without changing the code we use decorator function

/**
    decorator_function [
            ****
        input function()
            ****
        return function()
    ]
 */


function decorator (func) {
    return function(...args) {
        console.log("You are calling decorated", func.name);
        func.call(this,...args);
    }
}


function hello() {
    console.log("Hello World");
}

const decoratedHello = decorator(hello);
decoratedHello();

function hi(name) {
    console.log("Hi", name);
}

const decoratedHi = decorator(hi);
decoratedHi("Muhib");