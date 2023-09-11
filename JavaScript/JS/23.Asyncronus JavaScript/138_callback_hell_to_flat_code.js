const heading1 = document.querySelector(".heading-1");
const heading2 = document.querySelector(".heading-2");
const heading3 = document.querySelector(".heading-3");
const heading4 = document.querySelector(".heading-4");
const heading5 = document.querySelector(".heading-56");     // change this
const heading6 = document.querySelector(".heading-6");
const heading7 = document.querySelector(".heading-7");

function changeText(element, text, color, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (element) {
                element.textContent = text;
                element.style.color = color;
                resolve();
            } else {
                reject("Element not found");
            }
        }, time);
    });
}

const returnedPromise = changeText(heading1, "One", "brown", 1000);
returnedPromise.then(() => {
    return changeText(heading2, "Two", "purple", 1000);
}).then(() => {
    return changeText(heading3, "Three", "crimson", 1000);
}).then(() => {
    return changeText(heading4, "Four", "yellowgreen", 1000);
}).then(() => {
    return changeText(heading5, "Five", "green", 1000);
}).then(() => {
    return changeText(heading6, "Six", "slategrey", 1000);
}).then(() => {
    changeText(heading7, "Seven", "orange", 1000);
}).catch(error => {
    alert(error);
});



