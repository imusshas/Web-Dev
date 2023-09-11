const numbers = [2, 4, 6, 8];

function multiplyByTwo (number, index) {
  console.log(`${number} * 2 = ${number * 2}`);
}

for(let i = 0; i < numbers.length; i++) {
  multiplyByTwo(numbers[i], i);
}

numbers.forEach(multiplyByTwo);

numbers.forEach(function(number , index) {
  console.log(`${number} * 2 = ${number * 2}`);
});

numbers.forEach(function(number) {
  console.log(`${number} * 2 = ${number * 2}`);
});

const users = [
  {firstName: "Abid", age: 22},
  {firstName: "Ullah", age: 22},
  {firstName: "Muhib", age: 22},
  {firstName: "Usshas", age: 22}
];

for(let user of users) {
  console.log(user.firstName);
}

users.forEach(function(user) {
  console.log(user.firstName);
});

users.forEach(user => {
  console.log(user.firstName);
});