const allBtns = document.querySelectorAll(".my-btns button");

allBtns.forEach((btn) => {
    btn.addEventListener("click", (eventObject) => {
        // console.log(eventObject.currentTarget);
        eventObject.currentTarget.style.backgroundColor = "yellow";
        eventObject.currentTarget.style.color = "grey";
    });
});