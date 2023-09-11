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

for (let key in user1) {
        console.log(key);
}

console.log("\n\nOnly own property:")

for (let key in user1) {
    if(user1.hasOwnProperty(key)) {
        console.log(key);
    }
}