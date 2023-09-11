// array is mutable

let fruits = ["Mango", "Apple", "Grapes"];

console.log(fruits);

fruits.push("Banana")
console.log(fruits);

console.log("Poped: ", fruits.pop());
console.log(fruits)

fruits.unshift("Banana");
fruits.unshift("Jackfruit");
console.log(fruits);

console.log("Shifted: ", fruits.shift());

// push, pop is faster than shift, unshift