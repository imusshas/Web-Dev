const even = [2, 4, 6];

console.log(even);

const odd = new Array (1, 3, 5);

console.log(odd);
console.log(Array.prototype);
console.log(Object.getPrototypeOf(even));

function hello () {

}

console.log(hello.prototype);

hello.prototype = [];

console.log(hello.prototype);

hello.prototype.push(1);

console.log(hello.prototype);