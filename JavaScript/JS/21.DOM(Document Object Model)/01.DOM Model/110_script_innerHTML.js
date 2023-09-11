const headline = document.querySelector(".headline");

headline.innerHTML = "<h1>Inner HTML Changed</h1>";
headline.innerHTML += `<button class=\"btn btn-headline\">Inner HTML Changed</button>`;

console.log(headline.innerHTML);