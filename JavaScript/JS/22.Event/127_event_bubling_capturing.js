// BUBLING ---> If same event are added on both child & parent then if we do the event on child it calls the event on parent

const grandParent = document.querySelector(".grand-parent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

child.addEventListener("click", () => {
    console.log("Bubling Child");
});

parent.addEventListener("click", () => {
    console.log("Bubling Parent");
});

// grandParent.addEventListener("click", () => {
//     console.log("Bubling Grandparent");
// });

// document.body.addEventListener("click", () => {
//     console.log("Bubling Body");
// });


// CAPTURING


// child.addEventListener("click", () => {
//     console.log("Capturing Child");
// }, true /* capturing argument */);

// parent.addEventListener("click", () => {
//     console.log("Capturing Parent");
// }, true /* capturing argument */);

grandParent.addEventListener("click", () => {
    console.log("Capturing Grandparent");
}, true /* capturing argument */);

document.body.addEventListener("click", () => {
    console.log("Capturing Body");
}, true /* capturing argument */);

/*
    Browser Cycle[
        Capture the most outer parent [] -> Capture the 2nd most outer parent [] -> Capture the 3rd most outer parent [] -> ... ... ... -> Capture the child[]

        *** After finish capturing

        Buble the child [] -> Buble the child's parent [] -> Buble the child's grandParent [] -> ... ... ... -> Buble the most outer parent []
    ]
 */