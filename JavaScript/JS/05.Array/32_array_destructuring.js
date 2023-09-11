const myArray = ["value 1", "value 2", "value 3"];
let [myVar1, myVar2] = myArray;

console.log(myVar1, myVar2);

myVar1 = "vaule changed";

console.log(myVar1);

const [myConst1, myConst2] = myArray;

console.log(myConst1, myConst2);

/*
myConst1 = "Constant changed";
      // TypeError: Assignment to constant variable.
*/

let [myArr1, myArr2, myArr3, myArr4] = myArray;
console.log(myArr4);

let [myInd1, /* value 2 skipped */ , myInd2] = myArray;
console.log(myInd1, myInd2);

let [myStr1, ...myNewArray] = myArray;
console.log(myNewArray);