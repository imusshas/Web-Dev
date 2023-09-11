// start, delete, insert

const myArray = ["Item1", "Item2", "Item3", "Item4"];

// delete = splice(startIndex, length)
let deletedItem = myArray.splice(1, 2);

console.log(myArray);
console.log(deletedItem);

// insert = splice(index, length of items to be deleted, insertValue);
myArray.splice(1, 0, "InsertedItem");

console.log(myArray);

// insert & delete = splice(startIndex, length, insertValue1, insertValue2, ...);
deletedItem = myArray.splice(1, 2, "InsertedItem1" , "InsertedItem2");

console.log(myArray);
console.log(deletedItem);