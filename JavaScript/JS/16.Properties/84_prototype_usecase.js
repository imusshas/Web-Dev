// const userMethods = {
//     aboutMe: function() {
//         return `${this.lastName} is ${this.age} years old.`
//     },
//     isEighteen: function() { 
//         return this.age > 17
//     }
// }

function createUser(firstName, lastName, email, age, address) {
    const user = Object.create(createUser.prototype); // {}
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;

    return user;
}

createUser.prototype.aboutMe = function() {
    return `${this.lastName} is ${this.age} years old.`
};
createUser.prototype.isEighteen = function() { 
    return this.age > 17
};

console.log(createUser.prototype);

const user1 = createUser("Md. Abid Ullah", "Muhib", "usshasm@gmail.com", 22, "Arpara, Shalikha, Magura");

console.log(user1);

let aboutUser = user1.aboutMe();
console.log(aboutUser);

let isEighteen = user1.isEighteen();
console.log(isEighteen);