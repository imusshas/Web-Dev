console.log("break")
for(let i = 0; i < 10; i++) {
  if(i === 4) {
    break;
  }
  console.log(i);
}

console.log("continue")
for(let i = 0; i < 10; i++) {
  if(i === 4) {
    continue;
  }
  console.log(i);
}