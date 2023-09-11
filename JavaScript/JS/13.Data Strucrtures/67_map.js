// map is an iterable
// store data in ordered fashion
// store key value pair (like object)
// duplicate keys are not allowed (like object)

// different between map and object
// objects can only have string or symbol
// as key

// in maps you can use anything as key
// like array, number, string


// object literal
// key -> string
// key -> symbol
const oldPerson = {
  ["firstName"] : "Muhib",
  ["age"] : 22,
  1 : "one"
};

for (let key in oldPerson) {
  console.log("TypeOf", key, ": ", typeof key);
}

const person = new Map( [
  ["firstName" , "Muhib"],
  ["age" , 22],
  [1 , "one"]
]);

console.log("\n\n", person, "\n\n");


// key -> any type
const newPerson = new Map();
newPerson.set("firstName", "Muhib");
newPerson.set("age", 22);
newPerson.set(1, "one");
newPerson.set([1, 2, 3], "oneTwoThree");
newPerson.set({obj: "Object"}, "This is object");
console.log(newPerson);
console.log(newPerson.get("firstName"));
console.log(newPerson.keys());

for (key of newPerson.keys()) {
  console.log("TypeOf", key, ": ", typeof key);
}

console.log("\n\n");

for (let key of newPerson) {
  console.log(key);
}

console.log("\n\n");

for (let key of newPerson) {
  console.log(Array.isArray(key));
}

//destructuring
for(let [key , value] of newPerson) {
  console.log(key, value);
}

const lastPerson = {
  id: 1,
  name: "Usshas"
};

const extraInfo = new Map();
extraInfo.set(
  lastPerson, {
    birthYear: 2001,
    gender: "male"
  }
);

console.log(extraInfo.get(lastPerson).birthYear);