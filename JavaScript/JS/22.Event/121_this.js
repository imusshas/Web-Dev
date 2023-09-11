const btnHeadline = document.querySelector(".btn-headline");

function clickMe() {
    console.log("Value of this: ");
    console.log(this);
    console.log("You Clicked Me");
}

btnHeadline.addEventListener("click", clickMe); 

btnHeadline.addEventListener("click", () => {
    console.log("Value of this: ");
    console.log(this);
    console.log("You Clicked Me");
});