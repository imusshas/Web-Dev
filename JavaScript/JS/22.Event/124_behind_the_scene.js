console.log("script start!!!");

const allButtons = document.querySelectorAll(".my-btns button");

allButtons.forEach((btn) => {
    btn.addEventListener("click", (eventObject) => {
        let num = 0;
        for (let i = 0; i < 1000_000_000; i++) {
            num += i;
        }
        console.log(eventObject.currentTarget.textContent, num);
    });
});

let outerVar = 0;
for (let i = 0; i < 1000_000_000; i++) {
    outerVar += i;
}

console.log("Value of outerVar: ", outerVar);
console.log("script end!!!");