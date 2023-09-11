// usecase: object and react

const person = {
  firstName: "Muhib",
  gender: "Male"
};

function personInfo(person) {
  console.log(person.firstName);
  console.log(person.gender);
  console.log(person.age);  // undefined
}

personInfo(person);

person["age"] = 22
function personDetails({firstName, gender, age}) {
  console.log(firstName);
  console.log(gender);
  console.log(age);
}

personDetails(person);