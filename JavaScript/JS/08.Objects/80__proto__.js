const obj1 = {
    key1: "value1",
    key2: "value2"
};

const obj2 = Object.create(obj1);

console.log(obj2);

obj2.key3  = "value3";

console.log(obj2.key3);
console.log(obj2.key2);
console.log(obj2.__proto__);

// __proto__
// oficial ecmaScript: __proto__ = [[prototype]]

// prototype is different from this

