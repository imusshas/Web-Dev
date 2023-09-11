let num1 = 0;
let num2 = 89;

// && true if both is true
// || true if at least one of the two is true


if(num1 === 0 && num2 === 204) {
  console.log("First")
}

if(num1 === 0 && num2 === 89) {
  console.log("Second");
}

if(num1 === -204 || num2 === 204) {
  console.log("Third")
}

if(num1 === -204 || num2 === 89) {
  console.log("Fourth")
}