// What is hoisting?
    // Before executing code some information are stored in the memory

hello();

function hello() {
  console.log("Hello World");
}


// hi(); //  ReferenceError: Cannot access 'hi' before initialization
let hi = function () {
  console.log("Say Hi");
}


// welcome();  //  ReferenceError: Cannot access 'welcome' before initialization
const welcome = function () {
  console.log("WELCOME");
}


// greet();  //  ReferenceError: Cannot access 'greet' before initialization
let greet = function() {
  console.log("Greetings");
}


/* pikachu();  //  ReferenceError: Cannot access 'pikachu' before initialization
    const pikachu = () => console.log("Pikachu");
*/


/* pikachu();  //  ReferenceError: Cannot access 'pikachu' before initialization
    let pikachu = () => console.log("Pikachu");
*/

/* pikachu();  //  TypeError: pikachu is not a function
    var pikachu = () => console.log("Pikachu");
*/


console.log(varName);
var varName = "myVar";
console.log(varName);

// console.log(letName);   //  ReferenceError: Cannot access 'letName' before initialization
let letName = "myLet";

// console.log(constName);  //  ReferenceError: Cannot access 'constName' before initialization
const constName = "MyConst";