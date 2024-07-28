"use strict";
// Literal types
let myName;
let userName;
userName = "Amy";
// Functions
const add = (num1, num2) => {
    return num1 + num2;
};
const messagePrint = (message) => {
    console.log(message);
};
const subTract = function (num1, num2) {
    return num1 - num2;
};
console.log(add(5, 6));
messagePrint("This is TypeScript Function");
console.log(subTract(11, 6));
