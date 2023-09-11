// JavaScript strings are immutable

// trim();
// toUpperCase();
// toLowerCase();
// slice(starting index)
// slice(starting index, length)

let firstName = "     Muhib     ";

console.log(firstName.length);

firstName = firstName.trim();

console.log(firstName.length);

let newString = firstName.slice(0,3);
console.log(newString);