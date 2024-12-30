const age = new Number(21)

console.log(age.toString().length); // toString converts num into string
console.log(age.toFixed(1)); // adds decimal upto 1 place -> 21.0

const val = 2345.4563

console.log(val.toPrecision(5)); // gives result upto 5 values starting from the begining of the number

const hundreds = 1000000
console.log(hundreds.toLocaleString()); // add commas according to us system 
console.log(hundreds.toLocaleString("en-IN")); // add commas according to Indian system 

// ~~~~~~~~~~~~~ Math Library ~~~~~~~~~~~~~~~

console.log(Math);// return a math object
console.log(Math.abs(-3));
console.log(Math.round(3.7));
console.log(Math.ceil(3.7));
console.log(Math.floor(3.7));
console.log(Math.min(2,4,1,6));
console.log(Math.max(2,43,17,6));

console.log(Math.random()); // returns random value b/w 0 and 1
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // returns a random value b/w min and max