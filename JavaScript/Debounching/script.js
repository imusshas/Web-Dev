const myInput = document.querySelector("#input-event");
console.log(myInput);


// keyup event
// input event
// change event
// keypress
// keydown

// *** use input always

myInput.addEventListener("input", (eventObject) => {
    console.log(eventObject.target.value);  // eventObject.target.value === myInput.value
});


// debounching
