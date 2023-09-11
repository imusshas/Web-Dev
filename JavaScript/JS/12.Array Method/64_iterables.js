// data types in which we can use for of loop

const firstName = "Muhib";
for(let char of firstName) {
  console.log(char);
}

const myArray = ["Item1", "Item2", "Item3", "Item4"];
for(let item of myArray) {
  console.log(item);
}

const userCart = [
  {productId: 1, prductName: "Mobile", price: 12000},
  {productId: 2, prductName: "Labtop", price: 64000},
  {productId: 3, prductName: "TV", price: 21000},
  {productId: 4, prductName: "Mac", price: 138_000}
];

for(let item of userCart) {
  console.log(item);
}

const users = { 
  firstName: "Abid",
  age: 22
};

// for(let user of users) {
//   console.log(user);  // Uncaught TypeError: users is not iterable
// }