const myAnimal = ["Cat", "Dog", "Bird", "Pigeon"];

function isLengthThree(string) {
  return string.length === 3;
}

const ans = myAnimal.find(isLengthThree);


console.log(ans);



const userCart = [
  {productId: 1, prductName: "Mobile", price: 12000},
  {productId: 2, prductName: "Labtop", price: 64000},
  {productId: 3, prductName: "TV", price: 21000},
];

const myUser = userCart.find( user => {
  return user.productId === 2;
});

console.log(myUser);