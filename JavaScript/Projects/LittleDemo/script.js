const mainBtn = document.querySelector("button");
const body = document.body;
console.log(body);
const h1 = document.querySelector("h1");

mainBtn.addEventListener("click", () => {
    const randomColor = ramdomColorGenerator();
    h1.textContent = `Current Color: ${randomColor}`;
    // console.log(randomColor);
    body.style.backgroundColor = randomColor;
})

function ramdomColorGenerator() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}