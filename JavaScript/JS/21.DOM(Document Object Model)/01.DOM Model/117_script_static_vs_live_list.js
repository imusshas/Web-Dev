const ul = document.querySelector(".to-do-list");

const staticListItems = ul.querySelectorAll("li");    // satic list
const liveListItems = ul.getElementsByTagName("li");   // live list

const sixthLi = document.createElement("li");
sixthLi.textContent = "item 6";
ul.append(sixthLi);

console.log(staticListItems);
console.log(liveListItems);
