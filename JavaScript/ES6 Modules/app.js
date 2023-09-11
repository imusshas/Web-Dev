import { firstName as fname } from "./utils/fname.js";
import { age } from "./utils/age.js";
// import Person from "./utils/person.js";
// import P from "./utils/person.js";
import Person, {NewPerson} from "./utils/person.js";    // named import


console.log(fname, age);

const person = new Person("John", "Doe", 30);
console.log(person);
person.info();

const newPerson = new NewPerson("Jack", "Daniel", 46);
newPerson.info();