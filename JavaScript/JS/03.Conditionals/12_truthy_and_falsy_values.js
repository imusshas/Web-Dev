// falsy values
      // false
      // ""
      // null
      // undefined
      // 0

// truthy values
      // Anything except these falsy values.

let str = "";

if(str) {
    console.log(str);
} else {
    console.log("str is kinda EMPTY.")
}

str = null;

if(str) {
    console.log(str);
} else {
    console.log("str is NULL.")
}

str = undefined;

if(str) {
    console.log(str);
} else {
    console.log("str is UNDEFINED.")
}

str = 0;

if(str) {
    console.log(str);
} else {
    console.log("str is ZERO.")
}

str = false;

if(str) {
    console.log(str);
} else {
    console.log("str is FALSE.")
}

str = "I am TRUE";

if(str) {
    console.log(str);
} else {
    console.log("str is FALSY.")
}