function debounch(func, delay) {
    let timeoutID;
    return function(...args) {
        if(timeoutID) {
            clearTimeout(timeoutID);
        }
        timeoutID = setTimeout(() => {
            func.call(this, ...args);
        }, delay);
    }
}


const myInput = document.querySelector("#input-event");

function findSuggesstion(eventObject) {
    console.log("Suggesstions for:", eventObject.target.value);
}


const decoratedFindSuggesstion = debounch(findSuggesstion, 300);
myInput.addEventListener("input", decoratedFindSuggesstion);