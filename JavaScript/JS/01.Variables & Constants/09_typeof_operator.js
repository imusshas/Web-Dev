// data types (primitive)
      // string
      // number
      // boolean
      // undefined
      // null
      // BigInt
      // Symbol


let age = 22;
let firstName = "Muhib";

console.log(typeof age, typeof firstName);

// convert number to string 
// age = 22 + ""
// age = String(age);
console.log(typeof (age + ""));

// convert string to number
// firstName = +firstName;
// firstName = Number(firstName);
console.log(typeof (+firstName));


// string concatenation

let fName = "Abid";
let lName = "Ullah";
let fullName = fName + " " + lName;
console.log(fullName);

// string template
// let aboutMe = "My name is " + firstName + " & my age is " + age;
let aboutMe = `My name is ${firstName} & my age is ${age}`;
console.log(aboutMe);

// undefined
let lastName;
console.log(typeof lastName);

// const constant;
      // SyntaxError: Missing initializer in const declaration



// null
let myVar = null;
console.log(myVar, typeof myVar);  // typeof myVar = object; // It's a bug
myVar = 89;
console.log(myVar, typeof myVar);

// BigInt
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

let myNum = BigInt(123456789987654321123456789987654321);
let myNum2 = 123n;

console.log(myNum);
console.log(typeof myNum2);

let num1 = 204;
let num2 = 89n;
// let add = num1 + num2;  //  TypeError: Cannot mix BigInt and other types, use explicit conversions
let add = BigInt(num1) + num2;

console.log(add);