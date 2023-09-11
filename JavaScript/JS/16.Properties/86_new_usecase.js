// constructor function
// convention: if new is needed then capitalize the first letter
function CreateUser(firstName, lastName, email, age, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}

CreateUser.prototype.aboutMe = function() {
    return `${this.lastName} is ${this.age} years old.`
};
CreateUser.prototype.isEighteen = function() { 
    return this.age > 17
};

const user1 = new CreateUser("Md. Abid Ullah", "Muhib", "usshasm@gmail.com", 22, "Arpara, Shalikha, Magura");

console.log(user1);

let aboutUser = user1.aboutMe();
console.log(aboutUser);

let isEighteen = user1.isEighteen();
console.log(isEighteen);