// sort function by default sorts anything as a string
const numbers = [5, 9, 410, 134, 1200];
// [1, 2, 3, 4, 5, 6]  // expected

numbers.sort(
);

console.log(numbers);

// sort in ascending order
numbers.sort((num1, num2) => {
  return num1 - num2;
});

console.log(numbers);

// How the sort function working now?
    // If, a - b > 0 then, swap (a, b);
    // Else, doesn't swap;


// sort in descending order 
numbers.sort((num1, num2) => {
  return num2 - num1;
});

console.log(numbers);

const prodcts = [
  {productId: 1, prductName: "P1", price: 120},
  {productId: 2, prductName: "P2", price: 680},
  {productId: 3, prductName: "P3", price: 320},
  {productId: 4, prductName: "P4", price: 400},
  {productId: 5, prductName: "P5", price: 240},
];

const lowToHigh = prodcts.slice(0).sort((firstProduct, secondProduct) => {
  return firstProduct.price - secondProduct.price;
});

console.log(prodcts);
console.log(lowToHigh);

const highToLow = prodcts.slice(0).sort((firstProduct, secondProduct) => {
  return -firstProduct.price + secondProduct.price;
});

console.log(highToLow);