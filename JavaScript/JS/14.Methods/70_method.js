// methods are functions inside object

const person = {
    firstName: "Muhib",
    age: 22,
    aboutMe: function() {
        console.log("Person name is", this.firstName, "and person age is ", this.age);
    }
};

console.log(person.aboutMe);
person.aboutMe();