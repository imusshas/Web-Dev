// promise represents future value that we don't know either
// promise is a feature of web browser
// promises are stored in microask queue
// microtask queue gets priority over callback queue

console.log("script start");

const bucket = ['coffee', 'chips', 'vegetables', '', 'rice'];

setTimeout(() => {
    console.log("Hello before");
}, 0);

// executer function
// producing promise
const friedRicePromise =  new Promise((resovle, reject) => {
    if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")) {
        resovle("Fried Rice");
    } else {
        // reject( new Error ("Couldn't make"));
        reject("Couldn't make");
    }
});


setTimeout(() => {
    console.log("Hello in-between");
}, 0);


// consuming promise
// friedRicePromise.then((myFriedRice) => {    // succeed
//     console.log("Let's eat", myFriedRice);
// }, 
// (error) => {    // failed
//     console.log(error);
// });

friedRicePromise.then((myFriedRice) => {    // succeed
    null;
}).catch((error) => {
    console.log(error);
});

setTimeout(() => {
    console.log("Hello after");
}, 0);

for(let i = 0; i < 1000; i++) {
    console.log(Math.random());
}

console.log("script end");