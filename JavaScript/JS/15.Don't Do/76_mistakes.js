const user = {
    firstName: "Muhib",
    age: 22,
    aboutMe: function () {
        console.log(this.firstName, this.age);
    }
};

const myFunc = user.aboutMe; // this is equivalent to
                                // const myFunc = function () {
                                //     console.log(this.firstName, this.age);
                                // }
myFunc();


// arrow function takes this from it's surronding means it's this will be one level up
// the 'this' of arrow function can't be changed
const newUser = {
    firstName: "Muhib",
    age: 22,
    aboutMe: () => {
        console.log(this);
        console.log(this.firstName, this.age);
    }
};
newUser.aboutMe();   // here, this === window 
newUser.aboutMe.call(newUser);   // here, this === window