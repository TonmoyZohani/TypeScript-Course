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

interface Guitarist {
  name?: string;
  active: boolean;
  albums: (string | number)[];
}

let evh: Guitarist = {
  name: "Tonmoy",
  active: false,
  albums: ["Dark", "Player", 83],
};

let jp: Guitarist = {
  //name: "Karim",
  active: true,
  albums: ["Cosmic", "Dark2", 12, 25],
};

const greetGuitarist = (guitarist: Guitarist) => {
  if (guitarist.name) {
    return `Hello ${guitarist.name?.toUpperCase()},What's Up?`;
  }

  return "Hello!";
};

console.log(greetGuitarist(jp));
console.log(evh);
console.log(jp);

// Enums
// "Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime."

enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}

console.log(Grade.U);
