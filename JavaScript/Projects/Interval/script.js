body = document.body
console.log(document.body);
button = document.querySelector("button");
console.log(button.textContent);

const intervalId = setInterval(() =>{
    const red = Math.floor(Math.random() * 128);
    const green = Math.floor(Math.random() * 128);
    const blue = Math.floor(Math.random() * 128);
    const rgb = `rgb(${red}, ${green}, ${blue})`;
    body.style.backgroundColor = rgb;
}, 1000);

button.addEventListener("click", () => {
    if(button.textContent === "Stop") {
        clearInterval(intervalId);
        button.textContent = body.style.backgroundColor;
    }
});