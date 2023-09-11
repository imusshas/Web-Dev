const link = document.querySelector("a");
console.log(link.getAttribute("href"));

link.setAttribute("href", "https://www.youtube.com/");
console.log(link.getAttribute("href"));

const inputElement = document.querySelector(".to-do-form input");
console.log(inputElement.getAttribute("type"));