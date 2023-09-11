function myFunc() {
    return {
        name: "Muhib",
        age: 22
    };
}

let returnValue = myFunc();

console.log(returnValue);

function returnFunc() {
    function returnedFunc() {
        console.log("returnedFunc has been returned.");
    }

    return returnedFunc;
}


returnValue = returnFunc();

console.log(returnValue);

returnValue();