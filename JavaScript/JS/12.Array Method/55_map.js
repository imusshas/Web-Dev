// map function creates a new array

const numbers = [1, 2, 3, 4, 5];

const square = function(number) {
  return number*number;
};

// map function creates a new array
let squareNumbers = numbers.map(square);

console.log(squareNumbers);


function newSquare (number) {
  console.log(number*number);
}

squareNumbers = numbers.map(newSquare);

console.log(squareNumbers);


squareNumbers = numbers.map(function(number) {
  return number*number;
});

console.log(squareNumbers);

squareNumbers = numbers.map(number => {
  return number*number;
});

console.log(squareNumbers);

squareNumbers = numbers.map((number, index) => {
  return `index: ${index},    value: ${number*number}`;
});

console.log(squareNumbers);

const users = [
  {firstName: "Abid", age: 22},
  {firstName: "Ullah", age: 22},
  {firstName: "Muhib", age: 22},
  {firstName: "Usshas", age: 22}
];

let userName = users.map(user => {
  return user.firstName;
});

console.log(userName);