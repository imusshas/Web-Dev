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

    static classInfo() {
        return `This is Person Class.`;
    }

    static desc = "Static Property.";
}

const person1 = new Person("Md. Abid Ullah", "Muhib", 22);

// console.log(person1.classInfo());    // Uncaught TypeError: person1.classInfo is not a function
console.log(Person.classInfo());
// console.log(person1.desc);   // undefined
console.log(Person.desc);

