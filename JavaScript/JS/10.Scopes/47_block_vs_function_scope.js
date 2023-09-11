// let and const are block scope
// var is function scope

// ##################     block     #################
{

}
// ##################     block     #################

{
  let myLet = "My Let";
}

// console.log(myVar);  //  ReferenceError: myVar is not defined

{
  let myLet = "Block Let";
  console.log(myLet);
}



{
  var myVar = "My Variable";
}

console.log(myVar);

{
  console.log(myVar);
}