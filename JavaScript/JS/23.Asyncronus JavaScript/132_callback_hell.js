const heading1 = document.querySelector(".heading-1");
const heading2 = document.querySelector(".heading-2");
const heading3 = document.querySelector(".heading-3");
const heading4 = document.querySelector(".heading-4");
const heading5 = document.querySelector(".heading-5");
const heading6 = document.querySelector(".heading-6");
const heading7 = document.querySelector(".heading-7");

//callback-hell
// setTimeout(() => {
//     heading1.textContent = "Heading 1";
//     heading1.style.color = "brown";
//     setTimeout(() => {
//         heading2.textContent = "Heading 2";
//         heading2.style.color = "purple"
//         setTimeout(() => {
//             heading3.textContent = "Heading 3";
//             heading3.style.color = "crimson"
//         }, 1000)
//     }, 1000)
// }, 1000) 

function changeText(element, text, color, time, onSuccessCallback, onFailureCallback) {
    setTimeout(() => {
            if(element) {
            element.textContent = text;
            element.style.color = color;
            if(onSuccessCallback){
                onSuccessCallback();
            }
        } else {
            onFailureCallback();
        }
    },time)
}

// pyramid of doom
changeText(heading1, "One", "brown", 1000, () => {
    changeText(heading2, "Two", "purple", 1000, () => {
        changeText(heading3, "Three", "crimson", 1000, () => {
            changeText(heading4, "Four", "yellowgreen", 1000, () => {

            }, () => { alert(`Heading 2 does not exists.`); });
        }, () => { alert(`Heading 2 does not exists.`); });
    }, () => { alert(`Heading 2 does not exists.`); });
}, () => { alert(`Heading 1 does not exists.`); });
