"use strict";
let stringArr = ["one", "hey", "Dave"];
let guitars = ["Strat", "Les Paul", 5150];
let mixedData = ["EVH", 1984, true];
stringArr[0] = "John";
stringArr.push("hey");
guitars[0] = 1984;
guitars.unshift("Jim");
let test = [];
// let bands: string[] = []
let bands = [];
bands.push("Van Halen");
// console.log(bands);
bands[1] = "Artcell";
// console.log(bands);
bands.push("Miles");
// console.log(bands);
// Tuple
let myTuple = ["Dave", 42, true];
let mixed = ["John", 1, false];
myTuple[1] = 42;
// Objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: "Dave",
    prop2: true,
};
exampleObj.prop1 = "John";
let evh = {
    name: "Tonmoy",
    active: false,
    albums: ["Dark", "Player", 83],
};
let jp = {
    name: "Karim",
    albums: ["Cosmic", "Dark2", 12, 25],
};
const greetGuitarist = (guitarist) => {
    return `Hello ${guitarist.name},What's Up?`;
};
console.log(greetGuitarist(evh));
console.log(evh);
console.log(jp);
