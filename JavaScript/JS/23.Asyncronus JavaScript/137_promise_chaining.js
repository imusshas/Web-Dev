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
    value += "Bazz";
    return value;
}).then( value => {
    console.log(value);
});