"use strict"; // treat all js code as newer version

// alert (3+3) // this will not work because we are using node.js not browser

// typeof - gives datatype of the variable

console.log(typeof "abc")

// number - 2 to power 53
// BigInt
// string - ""
// boolean - true, false
// null - standalone value
// undefined
// symbol - unique

// object

console.log(typeof null); // ans - object
console.log(typeof undefined);// ans - undefined

/* Datatypes */

// Primitive 
// 7 types :- String, Boolean, Number, null, undefined, BigInt, Symbol

const id = Symbol("123");
const refId = Symbol("123"); // Both are treated different because Symbol makes every variable unique

console.log(id == refId); // False

const num = 9338272819187738299373882n; // n at the end of number makes it BigInt;

//Reference (Non Primitives)
// Arrays, Object, Functions

const arr = [1,2,3];

const obj = {
    name: "Ajay",
    age : 23,
}

const func = function() {
    console.log("Hello");
}
