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
// rest parameters
const calculateSum = (...nums) => {
    return nums.reduce((sum, num) => sum + num, 0);
};
const createError = (errMsg) => {
    throw new Error(errMsg);
};
// use of the number type
const numberOrString = (value) => {
    if (typeof value === "string")
        return "string";
    if (typeof value === "number")
        return "number";
    return createError("This error never happen!");
};
//custom type guard
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
console.log(add(5, 6));
messagePrint("This is TypeScript Function");
console.log(subTract(11, 6));
console.log(multiply(3, 8));
console.log(sumAll(7, 9, 8));
console.log(addAll(5, 9));
console.log(calculateSum(1, 2, 3, 4));
