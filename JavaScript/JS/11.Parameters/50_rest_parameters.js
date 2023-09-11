function myFunc (num1, num2, num3) {
  console.log(`num1 = ${num1}, num2 = ${num2}, num3 = ${num3}`);
} 

myFunc(1, 2, 3, 4, 5, 6);

function myFuncRest (num1, num2, ...num3) {
  console.log(`num1 = ${num1}, num2 = ${num2}, num3 = ${num3}`);
  console.log("num3 = ", num3);
}

myFuncRest(1, 2, 3, 4, 5, 6);

function addAll (...nums) {
  let ans = 0;
  for(let num of nums) {
    ans += num;
  }
  return ans;
}

let result = addAll(1, 2, 3, 4, 5);
console.log(result);