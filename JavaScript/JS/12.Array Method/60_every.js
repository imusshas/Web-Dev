// if all the number satisfy the conditon
const even = [2, 4, 6, 8, 10];
const mix = [2, 4, 6, 8, 9]

let ans = even.every(number => number % 2 === 0);

console.log(ans);

ans = mix.every(number => number % 2 === 0);

console.log(ans);

const userCart = [
  {productId: 1, prductName: "Mobile", price: 12000},
  {productId: 2, prductName: "Labtop", price: 64000},
  {productId: 3, prductName: "TV", price: 21000},
];

ans = userCart.every(user => user.price < 100_000);

console.log(ans);