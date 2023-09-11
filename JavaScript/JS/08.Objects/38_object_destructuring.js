const band = {
  bandName: "Gucci",
  product: "Perfume",
  year: 1990,
  delivery: "worldwide"
};

const {var1, var2} = band;
console.log(var1, var2);

const {bandName: myVar1, product: myVar2} = band;
// console.log(bandName, product);   //  ReferenceError: bandName is not defined
console.log(myVar1, myVar2);

const {bandName, product} = band;
console.log(bandName, product);

const {bandName: b1, product: p1, ...rest} = band;
console.log(rest);



