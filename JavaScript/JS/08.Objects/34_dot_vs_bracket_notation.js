// dot notation
const person = {name:"Muhib", 
                age:22,
                hoobies:["web desinging", "travelling", "teaching", "football"]
                };

console.log(person);
console.log(person.name);

// add key value pairs to object
person.gender = "male";



// bracket notaton
const human = {"name":"Muhib", 
                "age":22,
                "hoobies":["web desinging", "travelling", "teaching", "football"]
                };

console.log(human["name"]);
console.log(human["age"]);

// add key value pairs to object
human["gender"] = "male";

const whyBracket = {"need bracket for space": "To access this you have to use bracket notation"}
console.log(whyBracket["need bracket for space"]);


const key = "email";

const addKeyVariable = {add:"How?"};
addKeyVariable.key = "m@gmail.com";

console.log(addKeyVariable);

addKeyVariable["key"] = "u@gmail.com";
console.log(addKeyVariable);

addKeyVariable[key] = "h@gmail.com";
console.log(addKeyVariable);