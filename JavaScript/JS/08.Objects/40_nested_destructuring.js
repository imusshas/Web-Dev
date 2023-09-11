const users = [
  {userId: 1, name:"Muhib", gender: "Male"},
  {userId: 2, name:"Megha", gender: "Female"},
  {userId: 3, name:"Usshas", gender: "Male"}
];

const [user1, , user3] = users;

console.log(user1, user3);

const [, {name:firstName, gender}  ,] = users;

console.log(firstName, gender);