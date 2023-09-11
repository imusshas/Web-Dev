// from one file we can export default only once
export default class Person {
    constructor (firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    info () {
        console.log(this.firstName, this.lastName, this.age);
    }
}


// from one file we can export default only once
export class NewPerson {
    constructor (firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    info () {
        console.log(this.firstName, this.lastName, this.age);
    }
}