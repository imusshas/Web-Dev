// This version is added in ES6/2015
// classes are fake

class CreateUser {
    constructor(firstName, lastName, email, age, address) {
        console.log("Constructor Called.");

        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }

    aboutMe() {
        return `${this.lastName} is ${this.age} years old.`
    }

    isEighteen() {
        return this.age > 17
    }

    func(str) {
        console.log(str);
    }
}


// function CreateUser(firstName, lastName, email, age, address) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.age = age;
//     this.address = address;
// }

// CreateUser.prototype.aboutMe = function () {
//     return `${this.lastName} is ${this.age} years old.`
// };
// CreateUser.prototype.isEighteen = function () {
//     return this.age > 17
// };

// const user1 = CreateUser("Md. Abid Ullah", "Muhib", "usshasm@gmail.com", 22, "Arpara, Shalikha, Magura");   // 88_class.js:38 Uncaught TypeError: Class constructor CreateUser cannot be invoked without 'new'


const user1 = new CreateUser("Md. Abid Ullah", "Muhib", "usshasm@gmail.com", 22, "Arpara, Shalikha, Magura");
const user2 = new CreateUser("Md. Abid Ullah", "Muhib", "usshasm@gmail.com", 22, "Arpara, Shalikha, Magura");
const user3 = new CreateUser("Md. Abid Ullah", "Muhib", "usshasm@gmail.com", 22, "Arpara, Shalikha, Magura");

console.log(Object.getPrototypeOf(user1));
user1.func("Function argument");