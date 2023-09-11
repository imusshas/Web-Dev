const myArray1 = [1, 2, 3];
const myArray2 = [4, 5, 6];
const myArray = [...myArray1, ...myArray2, 89, 204];

console.log(myArray);

const myUnspreadArray = [...myArray1, myArray2];

console.log(myUnspreadArray);

const myNewArray = [..."123456789"];

console.log(myNewArray);




// spread operator in object

const person1 = {
  lastName: "Muhib",
  education: "SUST",
  location: "Sylhet"
};

const person2 = {
  firstName: "Abid",
  age: 22,
  location: "Arpara"
};

const person = { ...person1, ...person2 };

console.log(person);

const newPerson = { ...person2, ...person1 };

console.log(newPerson);

const newObject = {..."abcdefghijklmnopqrstuvwxyz"};

console.log(newObject);