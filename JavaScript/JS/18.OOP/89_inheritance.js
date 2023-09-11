class Animal {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        return `${this.name} is eating`;
    }

    isSuoerCute() {
        return this.age <= 1;
    }

    isCute() {
        return true;
    }
}

const animal1 = new Animal("Tom", 2);

console.log(animal1);
console.log(animal1.eat());
console.log(animal1.isSuoerCute());


class Dog extends Animal{
    
    constructor(name, age, speed) {
        super(name, age);
        this.speed = speed;
    }

    run() {
        return `${this.name} is running at ${this.speed} kmh.`
    }
}

const tommy = new Dog("Tommy", 3, 45);

console.log(tommy);
console.log(tommy.eat());
console.log(tommy.isSuoerCute());
console.log(tommy.run());