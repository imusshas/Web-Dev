// height widht
const header = document.querySelector(".header");
const info = header.getBoundingClientRect();
const widht = header.getBoundingClientRect().width;
const height = header.getBoundingClientRect().height;

console.log(info);
console.log(widht);
console.log(height);