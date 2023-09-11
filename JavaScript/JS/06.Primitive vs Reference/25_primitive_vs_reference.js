// primitive types
let num1 = 89;
let num2 = num1;

console.log("Value of num1 is", num1);
console.log("Value of num2 is", num2);

num1++;
console.log("Value of num1 is", num1);
console.log("Value of num2 is", num2);

// reference types
let array1 = ["item 1", "item 2"];
let array2 = array1;

console.log("Array1 ", array1);
console.log("Array2 ", array2);

array1.push("item3");

console.log("After pushing element in array1...")
console.log("Array1 ", array1);
console.log("Array2 ", array2);