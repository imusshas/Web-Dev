const person = {
  name: "Muhib",
  age: 22,
  hoobies: ["web desinging", "travelling", "teaching", "football"]
}; // object literal

for (key in person) {
  console.log(person[key]);
}

console.log("\n\n\n");

for (key in person) {
  console.log(`${key} : ${person[key]}`);
}

console.log("\n\n\n");

for (key in person) {
  console.log(key, ":", person[key]);
}


// Object.keys
console.log("\n\n\n\n");
console.log(typeof Object.keys(person));
console.log(Array.isArray(Object.keys(person)));
console.log("\n\n\n\n");

for (let key of Object.keys(person)) {
  console.log(person[key]);
}
