const allButtons = document.querySelectorAll(".my-btns button");

allButtons.forEach((btn) => {
    btn.addEventListener("click", (eventObject) => {
        console.log(eventObject);
        console.log(eventObject.currentTarget);
    });
});

// whenever we add event listener to any element
// js Engine ---- executes the code line by line
// browser ---- js Engine + extra features
// browser ---- js Engine + webApi

// when browser knows that user has performed an event that we were listening
// browsers work -----
        // 1) gives the callback function to js Engine
        // 20 gives event information to js Engine as a form of OBJECT