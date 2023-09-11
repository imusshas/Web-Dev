const allButtons = document.querySelectorAll(".my-btns button");

// for (let btn of allButtons) {
//     btn.addEventListener("click", function() {
//         console.log(this);
//         console.log(this.textContent);
//     });
// }

allButtons.forEach((btn) => {
    btn.addEventListener("click", function() {
        console.log(this);
        console.log(this.textContent);
    });
});