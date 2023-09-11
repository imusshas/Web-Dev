const obj1 = {
    key1: "value1",
    key2: "value2"
};

const obj2 = obj1;
obj1.key3 = "value3";

console.log(obj2);


const obj3 = Object.assign({}, obj1);
obj2.key4 = "value4";
console.log(obj2);
console.log(obj3);