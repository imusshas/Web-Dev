console.log("Script start");

// function hello() {
//     console.log("Hello world!");
// }

// setTimeout(hello, 1000);

// setTimeout(() => {
//     console.log("Inside Set Timeout");
// }, 500);

const timeoutId = setTimeout(() => {
    console.log("Don't wait");
}, 0);

for(let i = 0; i < 100; i++) {
    console.log("...");
}

console.log(timeoutId);
console.log("Clearing timeout");
clearTimeout(timeoutId);
console.log("Script end");
