const myPromise = Promise.resolve(5);

// then method returns Promise

myPromise.then( value => {
    console.log(value);
});

function myPromiseFunc() {
    return new Promise((resolve, reject) => {
        resolve("Foo");
    });
}

myPromiseFunc().then((value) => {
    console.log(value);
    value += "Bar";
    return value;
}).then( (value) => {
    console.log(value);
});