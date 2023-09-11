// objects are reference types
// for real world data
// objects store key value pairs
// objects don't have index

const person = {name:"Muhib", 
                age:22,
                hoobies:["web desinging", "travelling", "teaching", "football"]
                }; // object literal

console.log(person);
console.log(person.name);

// add key value pairs to object
person.gender = "male";


// object literal
// key -> string
// key -> symbol
const newPerson = {
    ["firstName"] : "Muhib",
    ["age"] : 22,
    1 : "one"
  };
  
  for (key in newPerson) {
    console.log("TypeOf", key, ": ", typeof key);
  }