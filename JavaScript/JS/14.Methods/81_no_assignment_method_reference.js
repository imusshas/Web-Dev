const userMethods = {
    aboutMe: function() {
        return `${this.lastName} is ${this.age} years old.`
    },
    isEighteen: function() { 
        return this.age > 17
    }
}

function createUser(firstName, lastName, email, age, address) {
    const user = Object.create(userMethods);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;

    return user;
}

const user1 = createUser("Md. Abid Ullah", "Muhib", "usshasm@gmail.com", 22, "Arpara, Shalikha, Magura");

console.log(user1);

let aboutUser = user1.aboutMe();
console.log(aboutUser);