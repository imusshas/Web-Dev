class Person {

    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
    set fullName (fullName) {
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person1 = new Person("Md. Abid Ullah", "Muhib", 22);

// console.log(person1.fullName());    // Uncaught TypeError: person1.fullName is not a function
console.log(person1.fullName);

person1.firstName = "Ridowan";
person1.lastName = "Sikder";

console.log(person1.fullName);


person1.fullName = "Pattrick Bateman";

console.log(person1);