function addedToWindow() {
    console.log("Every function created outside object is added to the window object");
}

window.addedToWindow();

const personInfo = function() {
    console.log(this);
};

personInfo();

const personInfoStrict= function() {
    "use strict";
    console.log(this);
};

personInfoStrict();

console.log(this);