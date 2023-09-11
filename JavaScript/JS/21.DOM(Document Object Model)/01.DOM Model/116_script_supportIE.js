const ul = document.querySelector(".to-do-list");
const li = document.createElement("li");
li.textContent = "new todo";

ul.appendChild(li);

const referenceNode = document.querySelector(".to-do-list li");
const liClone = li.cloneNode(true);
ul.insertBefore(liClone, referenceNode);

const liReplace = document.createElement("li");
liReplace.textContent = "replaced"
ul.replaceChild(liReplace, referenceNode);

ul.removeChild(liClone);
ul.removeChild(li);