"use strict";

let str = undefined;
let num = Number(str);
console.log(num);

// "33" => 33
// "33abc" => NaN
// true => 1, false => 0
// null => 0, undefined => NaN

let isLogin = "abc";
let boolValue = Boolean(isLogin);
console.log(boolValue);

// "" => false, "value" => true
// null => false, undefined => false

let a = null;
let txt = String(a);
console.log(txt);

// 33 => "33", 3.3 => "3.3"
// null => "null"
// undefined => "undefined"

/*********** Operations ********/

console.log(2**3) // 2 to the power 3

console.log(1 + "2") // 12
console.log("2" + 1); // 21
console.log(1 + 2 + "2"); // 32
console.log("1" + 2 + 2); //122

console.log(+true) // + operator does type conversion and return the ans 1
//console.log(true+) // gives an error
console.log(+"") // + operator does type conversion and return the ans 0

let num1, num2, num3
num1=num2=num3 = 3 // for assignment of same value to multiple variables. But not preffered
