function ricePromise() {
    const bucket = ['coffee', 'chips', 'vegetables', '', 'rice'];

    return new Promise((resovle, reject) => {
        if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")) {
            resovle("Fried Rice");
        } else {
            // reject( new Error ("Couldn't make"));
            reject("Couldn't make");
        }
    });
}

ricePromise().then((myFriedRice) => {    // succeed
   console.log("Let's eat fried rice");
}).catch((error) => {
    console.log(error);
});