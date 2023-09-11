// filter function creates a new array
// the callback function of filter function always returns boolean value

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const isEven = function(number) {
  return number % 2 === 0;
};

let evenNumbers = numbers.filter(isEven);

console.log(evenNumbers);

evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});

console.log(evenNumbers);

evenNumbers = numbers.filter(number => {
  return number % 2 === 0;
});

console.log(evenNumbers);