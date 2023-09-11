// in a method this refers to the object that is calling the method.
const person = {
    firstName: "Muhib",
    age: 22,
    aboutMe: function() {
        console.log(this);
    }
};

person.aboutMe();   // here, this === person

const personInfo = function() {
    console.log(this);
};

const newPerson = {
    firstName: "Usshas",
    birthYear: 2001,
    aboutMe: personInfo
};

newPerson.aboutMe();    // here, this ==== newPerson