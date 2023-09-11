const numbers = [1, 3, 5, 7, 9];

let step = 0;
const sum = numbers.reduce((accumulator, currentValue) => {
  console.log(`Step: ${step}, accumulator: ${accumulator}, currentValue: ${currentValue}`);
  step++;
  return accumulator + currentValue;
}, /* initial accumulator value */ 0);

console.log(sum)

// in each step accumulator = return value of the previous step

// accumulator    currentValue    return
  //    1              3             4
  //    3              5             9
  //    9              7             16
  //    16             9             25



const userCart = [
  {productId: 1, prductName: "Mobile", price: 12000},
  {productId: 2, prductName: "Labtop", price: 64000},
  {productId: 3, prductName: "TV", price: 21000},
];

step = 0;
const totalAmount = userCart.reduce((totalPrice, currentProduct) => {
  console.log(`Step: ${step}, totalPrice: ${totalPrice}, currentProduct: ${currentProduct.prductName}`);
  step++;
  return totalPrice + currentProduct.price;
}, /* initial accumulator value */ 0);

console.log(totalAmount);