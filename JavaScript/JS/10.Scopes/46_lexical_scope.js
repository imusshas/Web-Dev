function myApp() {
  const myVar = "valueApp";

  function inFunc() {
    const myVar = "valueFunc";
    console.log("Inside inFunc: ", myVar);
  }

  const outFunc = function() {
    console.log("Inside outFunc: ", myVar);
  }

  console.log(myVar);

  inFunc();
  outFunc();
}

myApp();

const global = "Global";
const local = "Globally Local";

function myFunc () {
  const local = "Locally Local";
  const localFunc =  function () {
    console.log("Inside localFunc:- \tLocal value = ", local, "\tGlobal value = ", global);
  }
  localFunc();
}

myFunc();