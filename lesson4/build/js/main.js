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
const multiply = (num1, num2) => {
    return num1 * num2;
};
// optional parameters
const addAll = (num1, num2, num3) => {
    if (num3 !== undefined) {
        return num1 + num2 + num3;
    }
    return num1 + num2;
};
const sumAll = (num1, num2, num3) => {
    return num1 + num2 + num3;
};
console.log(add(5, 6));
messagePrint("This is TypeScript Function");
console.log(subTract(11, 6));
console.log(multiply(3, 8));
console.log(sumAll(7, 9, 8));
console.log(addAll(5, 9));
