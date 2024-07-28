// Type Aliases
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
  name?: string;
  active: boolean;
  albums: stringOrNumberArray;
};

type UserId = stringOrNumber;

// Literal types
let myName: "Dave";

let userName: "Dave" | "John" | "Amy";
userName = "Amy";

// Functions

const add = (num1: number, num2: number): number => {
  return num1 + num2;
};

const messagePrint = (message: any): void => {
  console.log(message);
};

const subTract = function (num1: number, num2: number): number {
  return num1 - num2;
};

// created function type
type mathFunction = (num1: number, num2: number) => number;

const multiply: mathFunction = (num1, num2) => {
  return num1 * num2;
};

console.log(add(5, 6));
messagePrint("This is TypeScript Function");
console.log(subTract(11, 6));
console.log(multiply(3,8));