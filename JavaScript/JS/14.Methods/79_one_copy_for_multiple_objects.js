const userMethods = {
    aboutMe: function() {
        return `${this.lastName} is ${this.age} years old.`
    },
    isEighteen: function() { 
        return this.age > 17
    }
}

function createUser(firstName, lastName, email, age, address) {
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.aboutMe = userMethods.aboutMe;
    user.isEighteen = userMethods.isEighteen;

    return user;
}

// the lack of this function is method refrence are needed to be assigned each time they are created

const user1 = createUser("Md. Abid Ullah", "Muhib", "usshasm@gmail.com", 22, "Arpara, Shalikha, Magura");
let aboutUser = user1.aboutMe();

console.log(aboutUser);