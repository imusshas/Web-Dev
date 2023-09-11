// arrays are reference types : object
let fruits = ["Mango", "Apple", "Grapes"];
console.log(fruits);
console.log(fruits[1]);

// array indexing
    // Mango    Apple   Grapes
    //   0        1        2

fruits[1] = "Banana";
console.log(fruits);

console.log(typeof fruits);

let obj = {}; // object literal
console.log(typeof obj);

console.log(Array.isArray(fruits));
console.log(Array.isArray(fruits));
