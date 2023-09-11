// higher-order-function


// function myFunc() {
//   function hello() {
//     console.log("Helloooooooo");
//   }

//   return hello;
// }

function myFunc () {
  return function() {
    console.log("Helloooooooo");
  }
}

const ans = myFunc();
console.log(ans);
ans();