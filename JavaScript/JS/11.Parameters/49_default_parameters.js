// before default parameters
function add(num1, num2) {
  if(typeof num2 === "undefined") {
    num2 = 0;
  }
  return num1 + num2
}

//after default parameters
function sum(num1, num2 = 0) {
  return num1 + num2
}

let ans = add(4);
console.log(ans);

ans = sum(4);
console.log(ans);