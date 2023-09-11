// prototype is a empty Object ({})
// only function provides prototype

function hello() {
    console.log("hello world");
}

console.log(hello.prototype);

const obj = {}, arr = [];

if(obj.prototype || arr.prototype) {
    console.log("Prototype is present");
}   else {
    console.log("Prototype is not present");
}


hello.prototype.key = "value";
hello.prototype.func = function() {
    return  "Adding function to function using prototype";
};

console.log(hello.prototype, "\n", hello.prototype.func());

