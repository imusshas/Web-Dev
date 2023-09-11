// textContent shows all the content including style = "display: none"
const mainHeading = document.getElementById("main-heading");
console.log(mainHeading.textContent);
// mainHeading.textContent = "Changed Heading by JavaScript";

// innerText shows all the content excluding style = "display: none"
console.log(mainHeading.innerText);