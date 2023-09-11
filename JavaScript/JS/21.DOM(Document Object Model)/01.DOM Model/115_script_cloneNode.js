const ul = document.querySelector(".to-do-list");
const li = document.createElement("li");
li.textContent = "new todo";
const liClone = li.cloneNode(true);

ul.append(li);
ul.prepend(liClone);