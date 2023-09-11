const rootNode = document.getRootNode();
console.log(rootNode);


// *** Child Relationship
const htmlElementNode = rootNode.childNodes[1];
// console.log(htmlElementNode);

const headElementNode = htmlElementNode.childNodes[0];
// console.log(headElementNode);

const textNode1 = htmlElementNode.childNodes[1];
// console.log(textNode1);

const bodyElementNode = htmlElementNode.childNodes[2];
// console.log(bodyElementNode);


/*
    // *** Parent Relationship
    console.log(headElementNode.parentElement);
*/


/*
    // *** Sibling Relationship
    console.log(headElementNode.nextSibling);
    console.log(headElementNode.nextSibling.nextSibling);
*/


// *** Element Sibling Relationship
console.log(headElementNode.nextElementSibling);
console.log(headElementNode.childNodes);

const h1 = document.querySelector("h1");
const div = h1.parentNode;

div.style.color = "#efefef";
div.style.backgroundColor = "#333333";

const body = h1.parentNode.parentNode;
body.style.backgroundColor = "#dddddd";

const Body = document.body;
Body.style.backgroundImage = "url(\"../02.DOM\ Tree/DOM-tree.png\")";
Body.style.backgroundSize = "cover";
Body.style.backgroundRepeat = "no-repeat";

const head = document.querySelector("head");
const title = head.querySelector("title");

console.log(title);

const container = document.querySelector(".container");
console.log(container.childNodes);
console.log(container.children);