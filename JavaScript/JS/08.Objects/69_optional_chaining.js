const user = {
  firstName: "Muhib",
  // address: {houseNumber: "1234"}
};

console.log(user.firstName);
// console.log(user.address.houseNumber);   // TypeError: Cannot read properties of undefined (reading 'houseNumber')

let newUser;

console.log(newUser?.firstName);
console.log(newUser?.address?.houseNumber);

newUser = {
  firstName: "Muhib",
  address: { houseNumber: "1234" }
};

console.log(newUser?.firstName);
console.log(newUser?.address?.houseNumber);