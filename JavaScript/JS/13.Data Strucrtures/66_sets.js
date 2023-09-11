// Set (it is iterable)
// store data
// has its own methods
// no index-basis access
// Order is not garunteed
// Unique items only

const myArray = ["item1", "item2", "item1", "item2"];

const numbers = new Set([4, 5, 6]);
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(myArray);
numbers.add(myArray);
numbers.add(["newItem1, newItem2"]);
numbers.add(["newItem1, newItem2"]); // it will be added because it's memory address is different

console.log(numbers);
console.log(numbers[2]);
console.log(numbers.length);

if(numbers.has(1)) {
  console.log("1 is present");
}

for (item of numbers) {
  console.log(item);
}
/* 

*/