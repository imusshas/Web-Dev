const app = () => {
  console.log("Inside App");

  const myFunc = () => {
    console.log("Hello from myFunc");
  }

  const addTwoNumbers = (num1, num2) => num1 + num2;

  myFunc();
  console.log(addTwoNumbers(2,3));
}

app();