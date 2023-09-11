function myFunc(myVar) {
  console.log("Inside myFunc:\t", myVar);

  if(typeof myVar === "function") {
    myVar();
  }
}

myFunc("Muhib");
myFunc([89, 204]);
myFunc({name: "Muhib", age: 22});

function myApp() {
  console.log("I am a function named by myApp.");
}

myFunc(myApp);
myFunc(myNewApp);

function myNewApp(name) {
  console.log(`Inside myNewApp: Your name is ${name}`);
} 