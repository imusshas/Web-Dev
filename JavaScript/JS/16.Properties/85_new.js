// working of new keyword
// 1.) create an empty object: this = {}
// 2.) return this
// 3.) create '__proto__' chain: const user = Object.create(createUser.prototype);

function createUser(firstName, age) {
    this.firstName = firstName;
    this.age = age;
}

createUser.prototype.aboutMe = function() {
    console.log(this.firstName, this.age);
}

console.log(createUser());

const user1 = createUser("Muhib", 22);

// user1.aboutMe();    // Uncaught TypeError: Cannot read properties of undefined (reading 'aboutMe')

const user2 = new createUser("Usshas", 21);

user2.aboutMe();