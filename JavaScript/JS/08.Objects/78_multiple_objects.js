const user = {
    firstName: "Md. Abid Ullah",
    lastName: "Muhib",
    email: "usshasm@gmail.com",
    age: 22,
    address: "Arpara, Shalikha, Magura",
    aboutMe: function() {
        return `${this.lastName} is ${this.age} years old.`
    },
    isEighteen: function() { 
        return this.age > 17
    }
};

let aboutUser = user.aboutMe();
console.log(aboutUser);

// function : create object
    // add key value pain
    // return object

function createUser(firstName, lastName, email, age, address) {
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;

    user.aboutMe = function() {
        return `${this.lastName} is ${this.age} years old.`
    };
    user.isEighteen = function() { 
        return this.age > 17
    };

    return user;
}

// this function has a lack. Methods inside this methods will be created equally to the number of objects created by this function

const user1 = createUser("Md. Abid Ullah", "Muhib", "usshasm@gmail.com", 22, "Arpara, Shalikha, Magura");
aboutUser = user1.aboutMe();

console.log(aboutUser);
