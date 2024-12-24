// console.log(2>3);
// console.log(2 == 2);
// console.log(3 != 4);

console.log("2" >= true); // true because > or < operators convert string into number
console.log("02" > 1); // // true because > or < operators convert string into nulog

console.log(null > 0); // false because > or < operators convert null into number i.e. null is represented as 0
console.log(null == 0); // false because == operator does not convert null into number // this is how js works
console.log(null >= 0); // true because > or < operators convert null into number i.e. null is represented as 0

console.log(undefined > 0); // false because undefined has the datatype undefined. it cannot be converted into number
console.log(undefined == 0); // false
console.log(undefined >= 0); // false 

// === strict equal

console.log("2" === 2) // false because strict equality operator checks both datatype and value