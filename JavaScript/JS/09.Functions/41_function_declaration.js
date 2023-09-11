function eat() {
  console.log("Eating Banana ....");
}

eat();

function sumOfTwoNumbers(num1, num2) {
  return num1 + num2;
}

let result = sumOfTwoNumbers(4, 5);

console.log(result)

function isEven(num) {
  // return num%2 === 0;
  return num % 2 === 0?"Even":"Odd";
}

result = isEven(204);
console.log(result);

result = isEven(89);
console.log(result);

function isIn (array, target) {
  for (num of array) {
    if(num === target) 
      return "Contains";
  }
  return -1;
}

result = isIn ([1, 2, 89, 4, 5], 89);
console.log(result);

result = isIn ([1, 2, 4, 5], 3);
console.log(result);