let winningMumber = 89;

let userGuess = prompt("Guess the number");

userGuess = +userGuess;

if(userGuess === winningMumber) {
  console.log("CONGRATULATIONS!!!");
} else {
  if(userGuess < winningMumber) {
    console.log("Low ...");
  } else {
    console.log("High ...");
  }
}