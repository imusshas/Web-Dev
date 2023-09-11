// in javaScript function = function + object
// adding own property (key value pair like object)
// function gives empty object (free space)

function hello() {
    console.log("Hello World!");
}

console.log(hello.name);

hello.myOwnProrety = "Key value pair added like object";

console.log(hello.myOwnProrety);

