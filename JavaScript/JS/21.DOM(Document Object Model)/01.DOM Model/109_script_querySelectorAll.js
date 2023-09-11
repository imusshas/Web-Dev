// array like object ---> indexing, length
const navLists = document.getElementsByClassName("nav-item");    // HTMLCollection
// console.log(navItems);
// console.log(navItems[0]);
// console.log(Array.isArray(navItems));

// *** Can't use forEach method to iterate through HTMLCollection

const navItems = document.getElementsByTagName("a");

// for(i = 0; i < navItems.length; i++) {
//    const navItem =  navItems[i];
//    navItem.style.backgroundColor = "white";
//    navItem.style.color = "green";
//    navItem.style.fontWeight = "bold";
// }

const navArray = Array.from(navItems);
console.log(Array.isArray(navArray));

navArray.forEach((navItem) => {
    navItem.style.backgroundColor = "white";
    navItem.style.color = "green";
    navItem.style.fontWeight = "bold";
});

const navLinks = document.querySelectorAll("a");    // NodeList
// console.log(navItems);
// console.log(navItems[0]);

// *** Can use any type of for loop to iterate through NodeList

navLinks.forEach((navItem) => {
    navItem.style.backgroundColor = "white";
    navItem.style.color = "green";
    navItem.style.fontWeight = "bold";
});