const myInput = document.querySelector("#input-event");
const myMergedInput = document.querySelector("#merged-input-event");
// console.log(myMergedInput);
const btn = document.querySelector(".btn");
const mergedBtn = document.querySelector(".merged-btn");
// console.log(mergedBtn);

function printValue(eventObject) {
    console.log(eventObject.target.value);
}

// trailing debounching
function trailingDebounce(func, delay) {
    let timeoutID;
    return function(...args) {
        clearTimeout(timeoutID);
        timeoutID = setTimeout(() => {
            func.call(this, ...args);
        }, delay);
    };
}

function findSuggesstion(eventObject) {
    console.log("Suggesstions for:", eventObject.target.value);
}

const debounchPrintValue = trailingDebounce(printValue, 300);
myInput.addEventListener("input", debounchPrintValue);

function clickMe() {
    console.log("You Clicked Me.");
}

// leading debounching
function leadingDebounce(func, delay) {
    let timeoutID = null;
    return function(...args) {
        if(timeoutID === null) {
            func.call(this, ...args);
        }
        clearTimeout(timeoutID);
        timeoutID = setTimeout(() => {
            timeoutID = null;
        }, delay);
    };
}

const debouncedClickMe = leadingDebounce(clickMe, 300);
btn.addEventListener("click", debouncedClickMe);

// merged debounching
function debounce(func, delay, option = {leading : false, trailing : true}) {
    let timeoutID = null;
    return function(...args) {
        let isInvoked = false;
        if(timeoutID === null && option.leading) {
            func.call(this, ...args);
            isInvoked = true;
        }
        clearTimeout(timeoutID);
        timeoutID = setTimeout(() => {
            if(option.trailing && !isInvoked) {
                func.call(this, ...args);
            }
            timeoutID = null;
        }, delay);
    };
}

myMergedInput.addEventListener("input", debounce(printValue, 300));
mergedBtn.addEventListener("click", debounce(clickMe, 300, option = {leading : true, trailing : false}))