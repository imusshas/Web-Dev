function hello() {
    console.log("Hello!!!");
}

hello();
hello.call();

const user = {
    firstName: "Muhib",
    age: 22,
    aboutMe: function() {
        console.log(this.firstName, this.age);
    }
};

user.aboutMe();

const newUser = {
    firstName: "Usshas",
    birthYear: 2001
};

console.log("\n\nCalling aboutMe using call() method")

console.log("Passing no argument:");
user.aboutMe.call();

console.log("Passing user as argument:");
user.aboutMe.call(user);

console.log("Passing newUser as argument:");
user.aboutMe.call(newUser);    // here, this in aboutMe refers to newUser because of call method

const foodMenu = function(rice, drink) {
    console.log(this.fruit, this.fish, rice, drink);
}

const food = {
    fruit: "Mango",
    fish: "Tuna",
    menu: foodMenu
};

food.menu.call(food);
food.menu.call(food, "Biriyani", "Water");