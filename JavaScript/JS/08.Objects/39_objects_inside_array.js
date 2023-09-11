const users = [
  {userId: 1, name:"Muhib", gender: "Male"},
  {userId: 2, name:"Abid", gender: "Male"},
  {userId: 3, name:"Usshas", gender: "Male"}
];

console.log(users);


for(let user of users) {
 console.log(user);
}

for(let index in users) {
  console.log(users[index].name);
 }