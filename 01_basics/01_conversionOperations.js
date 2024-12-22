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
