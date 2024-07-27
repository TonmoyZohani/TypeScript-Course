let stringArr = ["one", "hey", "Dave"];

let guitars = ["Strat", "Les Paul", 5150];

let mixedData = ["EVH", 1984, true];

stringArr[0] = "John";
stringArr.push("hey");

guitars[0] = 1984;
guitars.unshift("Jim");

let test = [];
// let bands: string[] = []
let bands: string[] = [];
bands.push("Van Halen");
// console.log(bands);
bands[1] = "Artcell";
// console.log(bands);
bands.push("Miles");
// console.log(bands);

// Tuple
let myTuple: [string, number, boolean] = ["Dave", 42, true];

let mixed = ["John", 1, false];

myTuple[1] = 42;

// Objects
let myObj: object;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};

const exampleObj = {
  prop1: "Dave",
  prop2: true,
};

exampleObj.prop1 = "John";

// interface Guitarist {
//     name?: string,
//     active: boolean,
//     albums: (string | number)[]
// }

// let evh: Guitarist = {
//     name: 'Eddie',
//     active: false,
//     albums: [1984, 5150, 'OU812']
// }

// let jp: Guitarist = {
//     active: true,
//     albums: ['I', 'II', 'IV']
// }

type Guitarist = {
  name: string;
  active?: boolean;
  albums: (string | number)[];
};

let evh: Guitarist = {
  name: "Tonmoy",
  active: false,
  albums: ["Dark", "Player", 83],
};

let jp: Guitarist = {
  name: "Karim",
  albums: ["Cosmic", "Dark2", 12, 25],
};

const greetGuitarist = (guitarist: Guitarist) => {
  return `Hello ${guitarist.name},What's Up?`;
};

console.log(greetGuitarist(evh));

console.log(evh);
console.log(jp);
