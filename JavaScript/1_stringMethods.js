//trim()
//toUpperCase()
//toLowerCase()
//slice()

let firstName = "     Adil     ";

let nameTrimed = firstName.trim();

console.log(firstName.length);
console.log(nameTrimed.length);
console.log(nameTrimed.toUpperCase());
console.log(nameTrimed.toLowerCase());

let nameSlice = nameTrimed.slice(0, nameTrimed.length - 1);  // aspect Adi.

console.log(nameSlice);
