let tempInDegree = 25;

if(tempInDegree <= 0) {
  console.log("Freezing!!!");
} else if (tempInDegree > 0 && tempInDegree <= 16) {
  console.log("Cold")
} else if(tempInDegree > 16 && tempInDegree <= 30) {
  console.log("Moderate");
} else if (tempInDegree > 30 && tempInDegree <= 50) {
  console.log("Warm.")
} else if (tempInDegree > 50 && tempInDegree < 100) {
  console.log("Hot")
} else {
  console.log("Boiling!!!")
}