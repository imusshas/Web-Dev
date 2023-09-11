// cloning array

let array1 = ["item 1" , "item 2"];
// let array2 = ["item 1" , "item 2"];
let array2 = array1.slice(0);

console.log(array1 === array2);

array1.push("item 3");

console.log(array1);
console.log(array2);

// concat array
let array3 = [].concat(array1);

console.log(array1 === array3);

array3.pop();

console.log(array1);
console.log(array3);

// spread operator
let array4 = [...array2];

console.log(array2 === array4);

array2.push("item 4");
console.log(array2);
console.log(array4);


// slice() is faster among these three

let array = array1.slice(0).concat["item 5", "item 6"];
array = [].concat(array1, "item 7", "item 8");
array = [...array1, "item 9", "item 10"];